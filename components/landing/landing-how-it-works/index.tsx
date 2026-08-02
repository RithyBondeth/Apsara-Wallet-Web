"use client";

import { LucideLineChart, LucidePencilLine, LucideWalletCards } from "lucide-react";
import { useTranslations } from "next-intl";

import { TypographyH2 } from "@/components/utils/typography/typography-h2";
import { TypographyH3 } from "@/components/utils/typography/typography-h3";
import { TypographyMuted } from "@/components/utils/typography/typography-muted";

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
      className="scroll-mt-[72px] border-b border-border bg-muted/40"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
        {/* Section Heading */}
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              {t("badge")}
            </span>
          </div>
          <TypographyH2 className="text-emerald-deep">
            {t("heading")}
          </TypographyH2>
          <TypographyMuted className="mt-5 text-base !leading-relaxed">
            {t("description")}
          </TypographyMuted>
        </div>

        {/* Steps Section */}
        <ol className="mt-14 grid gap-8 md:grid-cols-3">
          {STEPS.map((step) => (
            <li
              key={step.key}
              className="relative rounded-2xl border border-border bg-card p-7"
            >
              {/* Step number watermark */}
              <span className="brand-gold-foil absolute right-6 top-5 text-4xl font-extrabold tabular-nums">
                {step.number}
              </span>

              <span className="grid size-11 place-items-center rounded-xl bg-emerald-deep text-white">
                <step.icon className="size-5" strokeWidth={1.75} />
              </span>

              <TypographyH3 className="mt-5 text-emerald-deep">
                {t(`${step.key}Title`)}
              </TypographyH3>
              <TypographyMuted className="mt-2.5 !leading-relaxed">
                {t(`${step.key}Body`)}
              </TypographyMuted>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
