"use client";

import {
  LucideArrowUpRight,
  LucideCpu,
  LucideDelete,
  LucideEyeOff,
  LucideFingerprint,
  LucideLockKeyhole,
  LucideTrash2,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

import LandingSectionHeading from "@/components/landing/landing-section-heading";
import Reveal from "@/components/utils/reveal";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/utils/constants/site.constant";

/* --------------------------------- Constants -------------------------------- */
const PILLARS = [
  { key: "lock", icon: LucideFingerprint },
  { key: "onDevice", icon: LucideCpu },
  { key: "noSelling", icon: LucideEyeOff },
  { key: "delete", icon: LucideTrash2 },
] as const;

// PinPad, laid out as in the app: the bottom-left key is empty and biometric
// unlock is a separate button under the pad.
const KEYPAD = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "del"] as const;
const PIN_LENGTH = 4;
const PIN_ENTERED = 2;

export default function LandingSecurity() {
  /* ---------------------------------- Utils --------------------------------- */
  const t = useTranslations("security");
  const tMockup = useTranslations("mockup");

  /* -------------------------------- Render UI ------------------------------- */
  return (
    <section
      id="security"
      className="brand-emerald-surface relative scroll-mt-[72px] overflow-hidden"
    >
      {/* Background Section */}
      <div className="brand-glow-gold pointer-events-none absolute -left-40 top-1/3 size-[36rem] opacity-60" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-24 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:px-14 lg:py-32">
        {/* Heading & Lock Visual Section */}
        <Reveal>
          <LandingSectionHeading
            className="reveal-item"
            tone="dark"
            badge={t("badge")}
            heading={t("heading")}
            description={t("description")}
          />

          {/* Lock Screen Illustration */}
          {/* The app's LockScreen: GoldMedallion, PinDots and PinPad on the
              light app background, with biometric unlock offered below. */}
          <div
            aria-hidden
            style={{ "--reveal-index": 1 } as React.CSSProperties}
            className="brand-app-ui reveal-item mt-10 w-full max-w-[21rem] rounded-[2rem] bg-background px-6 pb-6 pt-8 shadow-2xl shadow-emerald-deep/40"
          >
            <div className="flex flex-col items-center text-center">
              {/* Gold medallion: halo, emerald disc with a gold rim, gold icon */}
              <span className="relative grid size-24 place-items-center">
                <span className="absolute inset-0 rounded-full bg-[radial-gradient(closest-side,hsl(var(--brand-gold-light)/0.2),transparent)]" />
                <span className="relative grid size-[72px] place-items-center rounded-full border-[1.5px] border-gold-core/90 bg-[radial-gradient(circle_at_35%_30%,hsl(var(--brand-emerald-glow)),hsl(var(--brand-emerald-deep))_75%)] text-gold-light shadow-[0_12px_24px_hsl(var(--brand-emerald-deep)/0.45)]">
                  <LucideLockKeyhole className="size-7" />
                </span>
              </span>

              <p className="mt-4 text-2xl font-medium text-foreground">{tMockup("enterPin")}</p>
              <p className="mt-1 text-sm text-muted-foreground">{tMockup("unlockToContinue")}</p>

              {/* PIN dots — filled ones grow and turn gold */}
              <div className="mt-6 flex items-center gap-5">
                {Array.from({ length: PIN_LENGTH }).map((_, index) => (
                  <span
                    key={index}
                    className={cn(
                      "rounded-full border-[1.6px]",
                      index < PIN_ENTERED
                        ? "size-[18px] border-gold-core bg-gold-core"
                        : "size-3.5 border-muted-foreground/40",
                    )}
                  />
                ))}
              </div>
            </div>

            {/* Number pad — full keypad from sm; phones get just the prompt
                below, so the pillars are not pushed a whole screen down */}
            <div className="mt-5 hidden grid-cols-3 sm:grid">
              {KEYPAD.map((key, index) => (
                <span
                  key={index}
                  className="grid aspect-[1.45] place-items-center text-2xl font-medium text-foreground"
                >
                  {key === "del" ? (
                    <LucideDelete className="size-6 text-muted-foreground" />
                  ) : (
                    key
                  )}
                </span>
              ))}
            </div>

            <p className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-primary sm:mt-2">
              <LucideFingerprint className="size-5" />
              {tMockup("useBiometric")}
            </p>
          </div>
        </Reveal>

        {/* Pillars Section */}
        <Reveal>
          <ul className="grid gap-4 sm:grid-cols-2">
            {PILLARS.map((pillar, index) => (
              <li
                key={pillar.key}
                style={{ "--reveal-index": index } as React.CSSProperties}
                className="reveal-item group flex flex-col rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-7 backdrop-blur-sm transition-colors duration-300 hover:border-gold-core/30 hover:bg-white/[0.08]"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-gold-light to-gold-core text-emerald-deep shadow-lg shadow-gold-core/20 transition-transform duration-300 group-hover:-translate-y-0.5">
                  <pillar.icon className="size-5" strokeWidth={1.9} />
                </span>

                <h3 className="mt-6 text-lg font-semibold tracking-tight text-white">
                  {t(`${pillar.key}Title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {t(`${pillar.key}Body`)}
                </p>

                {/* The deletion pillar is also the entry point to the request page,
                    which app stores require to be reachable from the web. */}
                {pillar.key === "delete" && (
                  <Link
                    href={ROUTES.deleteAccount}
                    className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-gold-core underline-offset-4 hover:underline"
                  >
                    {t("deleteLink")}
                    <LucideArrowUpRight className="size-4" />
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
