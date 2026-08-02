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
      className="brand-no-scrollbar overflow-hidden border-b border-border bg-emerald-deep py-4"
    >
      <div className="flex w-max animate-marquee-scroll items-center">
        {track.map((key, index) => (
          <span
            key={`${key}-${index}`}
            className="flex items-center gap-6 px-6 text-sm font-semibold uppercase tracking-[0.18em] text-white/70"
          >
            {t(key)}
            <span className="size-1.5 rounded-full bg-gold-core" />
          </span>
        ))}
      </div>
    </section>
  );
}
