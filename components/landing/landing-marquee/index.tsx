"use client";

import { useTranslations } from "next-intl";

/* --------------------------------- Constants -------------------------------- */
const MARQUEE_KEYS = [
  "wallets",
  "budgets",
  "savings",
  "receipts",
  "analytics",
  "recurring",
  "transfers",
  "export",
  "insights",
  "bilingual",
] as const;

export default function LandingMarquee() {
  /* ---------------------------------- Utils --------------------------------- */
  const t = useTranslations("marquee");

  // The track is rendered twice so the -50% translation loops seamlessly.
  const track = [...MARQUEE_KEYS, ...MARQUEE_KEYS];

  /* -------------------------------- Render UI ------------------------------- */
  return (
    <section
      aria-hidden
      className="brand-no-scrollbar group relative overflow-hidden bg-emerald-deep py-5"
    >
      <div className="brand-marquee-fade">
        {/* Pauses under the pointer, so a reader can catch an item */}
        <div className="flex w-max animate-marquee-scroll items-center group-hover:[animation-play-state:paused]">
          {track.map((key, index) => (
            <span
              key={`${key}-${index}`}
              className="flex items-center gap-8 px-8 text-sm font-medium uppercase tracking-wide text-white/75"
            >
              {t(key)}
              {/* Gold diamond, the coin mark from the logo */}
              <span className="size-2 rotate-45 rounded-[2px] bg-gradient-to-br from-gold-light to-gold-core" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
