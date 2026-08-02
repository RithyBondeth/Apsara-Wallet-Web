"use client";

import {
  LucideArrowRight,
  LucideScanLine,
  LucideSparkles,
  LucideWallet,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

import LandingPhoneMockup from "@/components/landing/landing-phone-mockup";
import { Button } from "@/components/ui/button";
import { TypographyH1 } from "@/components/utils/typography/typography-h1";
import { TypographyMuted } from "@/components/utils/typography/typography-muted";
import { ROUTES } from "@/utils/constants/site.constant";

/* --------------------------------- Constants -------------------------------- */
const HERO_STATS = [
  { labelKey: "statWalletsLabel", valueKey: "statWalletsValue" },
  { labelKey: "statCurrencyLabel", valueKey: "statCurrencyValue" },
  { labelKey: "statOfflineLabel", valueKey: "statOfflineValue" },
] as const;

const PANEL_FEATURES = [
  { key: "panelFeatureWallets", icon: LucideWallet, number: "01" },
  { key: "panelFeatureScan", icon: LucideScanLine, number: "02" },
  { key: "panelFeatureInsights", icon: LucideSparkles, number: "03" },
] as const;

export default function LandingHero() {
  /* ---------------------------------- Utils --------------------------------- */
  const t = useTranslations("hero");
  const tCommon = useTranslations("common");

  /* -------------------------------- Render UI ------------------------------- */
  return (
    <section className="relative overflow-hidden border-b border-border pt-[72px]">
      {/* Grid Background Section */}
      <div className="brand-grid pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid max-w-7xl lg:grid-cols-[1.05fr_0.95fr]">
        {/* Hero Content Section */}
        <div className="flex flex-col justify-center px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
          {/* Badge Section */}
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              {t("badge")}
            </span>
          </div>

          {/* Heading Section */}
          <TypographyH1 className="max-w-2xl text-4xl font-extrabold tracking-[-0.03em] text-emerald-deep sm:text-5xl lg:text-[3.75rem] !leading-[1.05]">
            <span className="brand-highlight">{t("headingLine1")}</span>
            <br />
            {t("headingLine2")}
          </TypographyH1>

          {/* Description Section */}
          <TypographyMuted className="mt-7 max-w-xl text-base !leading-relaxed sm:text-lg">
            {t("description")}
          </TypographyMuted>

          {/* CTA Buttons Section */}
          <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href={ROUTES.download}>
                {t("primaryCta")}
                <LucideArrowRight />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
            >
              <Link href={ROUTES.features}>{t("secondaryCta")}</Link>
            </Button>
          </div>

          {/* Statistics Section */}
          <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-border pt-7">
            {HERO_STATS.map((stat) => (
              <div key={stat.labelKey}>
                <dt className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  {t(stat.labelKey)}
                </dt>
                <dd className="mt-1 text-sm font-bold text-emerald-deep sm:text-base">
                  {t(stat.valueKey)}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Emerald Showcase Panel Section */}
        <div className="brand-emerald-surface relative flex flex-col items-center justify-center overflow-hidden border-t border-border px-6 py-16 sm:px-10 lg:border-l lg:border-t-0 lg:py-24">
          <div className="brand-grid-inverted pointer-events-none absolute inset-0" />

          {/* Panel Meta Section */}
          <div className="relative z-10 flex w-full items-center justify-between text-[11px] font-semibold uppercase tracking-[0.2em] text-white/55">
            <span>{tCommon("appName")}</span>
            <span>{t("panelLocation")}</span>
          </div>

          {/* Device Mockup Section */}
          <div className="relative z-10 my-10 animate-coin-float">
            <LandingPhoneMockup />
          </div>

          {/* Panel Feature List Section */}
          <div className="relative z-10 w-full">
            <p className="mb-5 max-w-sm text-sm leading-relaxed text-white/60">
              {t("panelDescription")}
            </p>
            <div className="border-t border-white/15">
              {PANEL_FEATURES.map((feature) => (
                <div
                  key={feature.key}
                  className="group grid grid-cols-[32px_1fr_auto] items-center gap-4 border-b border-white/15 py-4 transition-colors hover:bg-white/5"
                >
                  <span className="text-xs tabular-nums text-white/35">
                    {feature.number}
                  </span>
                  <span className="text-sm font-medium text-white sm:text-base">
                    {t(feature.key)}
                  </span>
                  <feature.icon
                    className="size-5 text-white/45 transition-colors group-hover:text-gold-core"
                    strokeWidth={1.5}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
