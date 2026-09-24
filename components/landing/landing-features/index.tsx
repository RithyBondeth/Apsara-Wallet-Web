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

import {
  AnalyticsArt,
  BudgetArt,
  ReceiptArt,
  SavingsArt,
  TransactionArt,
  WalletsArt,
} from "@/components/landing/landing-feature-art";
import LandingSectionHeading from "@/components/landing/landing-section-heading";
import Reveal from "@/components/utils/reveal";
import { cn } from "@/lib/utils";

/* --------------------------------- Constants -------------------------------- */
// `key` prefixes the i18n lookups: `${key}Title` and `${key}Body`.
// Bento placement on lg (3 columns): wallets is the wide lead tile, receipts
// runs down the right edge, analytics closes the grid wide. On sm the wide
// tiles span both columns and receipts sits in the flow. Every tile is light;
// the emerald comes from the app screens drawn inside them.
const FEATURES = [
  {
    key: "wallets",
    icon: LucideWallet,
    art: WalletsArt,
    className: "sm:col-span-2",
  },
  {
    key: "receipts",
    icon: LucideScanLine,
    art: ReceiptArt,
    className: "lg:row-span-2",
    // The camera view is dark in the app, so this well is too.
    artClassName: "h-auto min-h-[33rem] bg-none bg-emerald-deep lg:flex-1",
  },
  { key: "transactions", icon: LucideReceipt, art: TransactionArt },
  { key: "budgets", icon: LucidePiggyBank, art: BudgetArt },
  { key: "savings", icon: LucideTarget, art: SavingsArt },
  {
    key: "analytics",
    icon: LucideChartPie,
    art: AnalyticsArt,
    className: "sm:col-span-2",
  },
] as const;

export default function LandingFeatures() {
  /* ---------------------------------- Utils --------------------------------- */
  const t = useTranslations("features");

  /* -------------------------------- Render UI ------------------------------- */
  return (
    <section id="features" className="scroll-mt-[72px] bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-14 lg:py-32">
        {/* Section Heading */}
        <Reveal>
          <LandingSectionHeading
            className="reveal-item"
            badge={t("badge")}
            heading={t("heading")}
            description={t("description")}
          />
        </Reveal>

        {/* Bento Grid Section */}
        <Reveal>
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {FEATURES.map((feature, index) => {
              const Art = feature.art;

              return (
                <li
                  key={feature.key}
                  style={{ "--reveal-index": index } as React.CSSProperties}
                  className={cn(
                    "reveal-item group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-border bg-card p-2 shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-deep/10",
                    "className" in feature && feature.className,
                  )}
                >
                  {/* Illustration Well Section */}
                  <div
                    className={cn(
                      "relative h-60 overflow-hidden rounded-[1.35rem] bg-gradient-to-b from-muted to-muted/40",
                      "artClassName" in feature && feature.artClassName,
                    )}
                  >
                    <Art />
                  </div>

                  {/* Copy Section */}
                  <div className="flex gap-4 p-5 pt-6">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                      <feature.icon className="size-5" strokeWidth={1.75} />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-emerald-deep">
                        {t(`${feature.key}Title`)}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {t(`${feature.key}Body`)}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
