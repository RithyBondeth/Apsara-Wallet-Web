"use client";

import {
  LucideChartPie,
  LucidePiggyBank,
  LucideReceipt,
  LucideScanLine,
  LucideTarget,
  LucideWallet,
} from "lucide-react";
import { useTranslations } from "next-intl";

import { TypographyH2 } from "@/components/utils/typography/typography-h2";
import { TypographyH3 } from "@/components/utils/typography/typography-h3";
import { TypographyMuted } from "@/components/utils/typography/typography-muted";

/* --------------------------------- Constants -------------------------------- */
// `key` prefixes the i18n lookups: `${key}Title` and `${key}Body`.
const FEATURES = [
  { key: "wallets", icon: LucideWallet, number: "01" },
  { key: "transactions", icon: LucideReceipt, number: "02" },
  { key: "receipts", icon: LucideScanLine, number: "03" },
  { key: "budgets", icon: LucidePiggyBank, number: "04" },
  { key: "savings", icon: LucideTarget, number: "05" },
  { key: "analytics", icon: LucideChartPie, number: "06" },
] as const;

export default function LandingFeatures() {
  /* ---------------------------------- Utils --------------------------------- */
  const t = useTranslations("features");

  /* -------------------------------- Render UI ------------------------------- */
  return (
    <section
      id="features"
      className="scroll-mt-[72px] border-b border-border bg-background"
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

        {/* Feature Grid Section */}
        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <li
              key={feature.key}
              className="group flex flex-col bg-card p-7 transition-colors hover:bg-muted/60"
            >
              <div className="flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="size-5" strokeWidth={1.75} />
                </span>
                <span className="text-xs font-semibold tabular-nums text-muted-foreground/60">
                  {feature.number}
                </span>
              </div>

              <TypographyH3 className="mt-5 text-emerald-deep">
                {t(`${feature.key}Title`)}
              </TypographyH3>
              <TypographyMuted className="mt-2.5 !leading-relaxed">
                {t(`${feature.key}Body`)}
              </TypographyMuted>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
