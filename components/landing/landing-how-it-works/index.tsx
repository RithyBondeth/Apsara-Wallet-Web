"use client";

import { LucideLineChart, LucidePencilLine, LucideWalletCards } from "lucide-react";
import { useTranslations } from "next-intl";

import LandingSectionHeading from "@/components/landing/landing-section-heading";
import Reveal from "@/components/utils/reveal";

/* --------------------------------- Constants -------------------------------- */
const STEPS = [
  { key: "stepOne", icon: LucideWalletCards, number: "01" },
  { key: "stepTwo", icon: LucidePencilLine, number: "02" },
  { key: "stepThree", icon: LucideLineChart, number: "03" },
] as const;

export default function LandingHowItWorks() {
  /* ---------------------------------- Utils --------------------------------- */
  const t = useTranslations("howItWorks");

  /* -------------------------------- Render UI ------------------------------- */
  return (
    <section
      id="how-it-works"
      className="relative scroll-mt-[72px] overflow-hidden border-y border-border bg-muted/50"
    >
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-14 lg:py-32">
        {/* Section Heading */}
        <Reveal>
          <LandingSectionHeading
            className="reveal-item"
            align="center"
            badge={t("badge")}
            heading={t("heading")}
            description={t("description")}
          />
        </Reveal>

        {/* Steps Section */}
        <Reveal>
          <ol className="relative mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
            {/* Connector running between the three step icons, dashed so it
                reads as a path rather than a divider */}
            <span
              aria-hidden
              className="absolute left-[16.67%] right-[16.67%] top-9 hidden border-t-2 border-dashed border-gold-core/50 md:block"
            />

            {STEPS.map((step, index) => (
              <li
                key={step.key}
                style={{ "--reveal-index": index } as React.CSSProperties}
                className="reveal-item group relative flex flex-col items-center px-2 text-center"
              >
                {/* Step Icon */}
                <span className="brand-emerald-surface relative grid size-[4.5rem] place-items-center rounded-[1.4rem] text-white shadow-xl shadow-emerald-deep/25 transition-transform duration-300 group-hover:-translate-y-1">
                  <step.icon className="size-7" strokeWidth={1.6} />
                  <span className="absolute -right-2.5 -top-2.5 grid size-8 place-items-center rounded-full bg-gold-core text-xs font-bold tabular-nums text-emerald-deep shadow-md">
                    {step.number}
                  </span>
                </span>

                <h3 className="mt-7 text-xl font-semibold tracking-tight text-emerald-deep">
                  {t(`${step.key}Title`)}
                </h3>
                <p className="mt-3 max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
                  {t(`${step.key}Body`)}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
