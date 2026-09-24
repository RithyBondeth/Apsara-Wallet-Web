"use client";

import { LucideArrowRight, LucideBike, LucideScanLine } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

import LandingPhoneMockup from "@/components/landing/landing-phone-mockup";
import { Button } from "@/components/ui/button";
import BrandWaves from "@/components/utils/brand-waves";
import { TypographyH1 } from "@/components/utils/typography/typography-h1";
import { ROUTES } from "@/utils/constants/site.constant";

/* --------------------------------- Constants -------------------------------- */
const HERO_STATS = [
  { labelKey: "statWalletsLabel", valueKey: "statWalletsValue" },
  { labelKey: "statCurrencyLabel", valueKey: "statCurrencyValue" },
  { labelKey: "statOfflineLabel", valueKey: "statOfflineValue" },
] as const;

// Illustrative figures for the floating chips, in step with the Budget and
// Savings pictures in the feature grid.
const BUDGET_PERCENT = 93;
const SAVINGS_PERCENT = 68;

export default function LandingHero() {
  /* ---------------------------------- Utils --------------------------------- */
  const t = useTranslations("hero");
  const tMockup = useTranslations("mockup");

  /* -------------------------------- Render UI ------------------------------- */
  return (
    <section className="relative overflow-hidden pt-[72px]">
      {/* Background Section */}
      <div className="brand-aurora pointer-events-none absolute inset-0" />
      <BrandWaves className="absolute inset-x-0 bottom-0 h-[26rem] w-full" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-12 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-14 lg:pb-28 lg:pt-16">
        {/* Hero Content Section */}
        {/* The copy is deliberately not animated in: the heading is the page's
            largest paint, and fading it would only delay it. */}
        <div className="flex flex-col items-start">
          {/* Badge Section */}
          <span className="inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-card/70 py-1.5 pl-2 pr-4 text-xs font-semibold text-primary shadow-sm backdrop-blur">
            <span className="size-2 rounded-full bg-gold-core" />
            {t("badge")}
          </span>

          {/* Heading Section */}
          {/* Khmer sets wider than Latin, so on phones it starts a size down —
              otherwise the tagline's second phrase breaks across two lines. */}
          <TypographyH1 className="mt-7 max-w-2xl text-balance text-5xl font-bold tracking-[-0.035em] text-emerald-deep !leading-[1.02] sm:text-6xl lg:text-7xl [&:lang(km)]:!leading-[1.3] [&:lang(km)]:text-[2.35rem] sm:[&:lang(km)]:text-6xl lg:[&:lang(km)]:text-7xl">
            {t("headingLine1")}
            <br />
            <span className="relative inline-block">
              {/* Gradient text is painted from the span's background, so glyphs
                  that rise or drop past the tight line box — Khmer vowels and
                  subscripts especially — would be cut off. Inline padding
                  grows the painted area without moving the line. */}
              <span className="brand-emerald-text py-[0.25em]">{t("headingLine2")}</span>
              {/* Hand-drawn gold swash under the second line */}
              <svg
                aria-hidden
                viewBox="0 0 300 16"
                preserveAspectRatio="none"
                className="absolute -bottom-2 left-0 h-3 w-full text-gold-core sm:-bottom-3 sm:h-4"
              >
                <path
                  d="M3 12C60 4 140 2 297 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </TypographyH1>

          {/* Description Section */}
          <p className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t("description")}
          </p>

          {/* CTA Buttons Section */}
          <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button asChild size="lg" className="group h-14 w-full px-8 sm:w-auto">
              <Link href={ROUTES.download}>
                {t("primaryCta")}
                <LucideArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 w-full bg-card/60 px-8 backdrop-blur sm:w-auto"
            >
              <Link href={ROUTES.features}>{t("secondaryCta")}</Link>
            </Button>
          </div>

          {/* Statistics Section */}
          <dl className="mt-12 grid w-full max-w-xl grid-cols-3 divide-x divide-border rounded-2xl border border-border bg-card/70 py-4 shadow-sm backdrop-blur">
            {HERO_STATS.map((stat) => (
              <div key={stat.labelKey} className="flex flex-col-reverse px-4 sm:px-5">
                <dt className="mt-1 text-[11px] text-muted-foreground sm:text-xs">
                  {t(stat.labelKey)}
                </dt>
                <dd className="text-sm font-bold text-emerald-deep sm:text-base">
                  {t(stat.valueKey)}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Showcase Stage Section */}
        {/* The whole stage rises in as one group. Fading the phone on its own
            let the solid disc show through the half-transparent screen. */}
        <div aria-hidden className="relative mx-auto flex w-full max-w-[540px] animate-hero-rise justify-center py-6">
          {/* Emerald disc, echoing the coin in the logo */}
          <div className="absolute left-1/2 top-1/2 size-[330px] -translate-x-1/2 -translate-y-1/2 sm:size-[460px]">
            <div className="brand-glow-gold absolute -inset-16" />
            <div className="brand-emerald-surface relative size-full overflow-hidden rounded-full shadow-2xl shadow-emerald-deep/30">
              <div className="absolute inset-8 rounded-full border border-white/10" />
              <div className="absolute inset-20 rounded-full border border-white/10" />
            </div>
          </div>

          {/* Device Mockup Section */}
          <div className="relative z-10">
            <LandingPhoneMockup className="[--phone-scale:0.634] sm:[--phone-scale:0.68]" />
          </div>

          {/* Chips settle in once the stage is up, then stay still. */}

          {/* Chip: receipt scanned — over the status bar, the one part of the
              screen it can cover without hiding the dashboard */}
          <div className="absolute left-0 top-1 z-20 animate-chip-in [animation-delay:450ms] sm:-left-8 sm:top-5">
            <div className="brand-glass flex items-center gap-3 rounded-2xl p-2.5 pr-4">
              <span className="grid size-9 place-items-center rounded-xl bg-gold-core text-emerald-deep">
                <LucideScanLine className="size-4" strokeWidth={2} />
              </span>
              <span>
                <span className="block text-xs font-semibold text-foreground">
                  {tMockup("expenseSaved")}
                </span>
                <span className="block text-[11px] tabular-nums text-muted-foreground">
                  Psar Thmei · KHR 42,000
                </span>
              </span>
            </div>
          </div>

          {/* Chip: budget alert */}
          <div className="absolute bottom-0 right-0 z-20 animate-chip-in [animation-delay:550ms] sm:-right-2 sm:bottom-auto sm:top-[46%]">
            <div className="brand-glass flex items-center gap-3 rounded-2xl p-2.5 pr-4">
              <span className="relative grid size-10 place-items-center">
                <svg viewBox="0 0 36 36" className="absolute inset-0 -rotate-90">
                  <circle cx="18" cy="18" r="15" fill="none" strokeWidth="4" className="stroke-muted" />
                  <circle
                    cx="18"
                    cy="18"
                    r="15"
                    fill="none"
                    strokeWidth="4"
                    strokeLinecap="round"
                    pathLength={100}
                    strokeDasharray={`${BUDGET_PERCENT} 100`}
                    className="stroke-primary"
                  />
                </svg>
                <span className="text-[10px] font-bold tabular-nums text-emerald-deep">
                  {BUDGET_PERCENT}%
                </span>
              </span>
              <span>
                <span className="block text-xs font-semibold text-foreground">
                  {tMockup("budgetAlert")}
                </span>
                <span className="block text-[11px] text-muted-foreground">
                  {tMockup("foodDining")}
                </span>
              </span>
            </div>
          </div>

          {/* Chip: savings goal */}
          <div className="absolute bottom-24 z-20 hidden animate-chip-in [animation-delay:650ms] sm:-left-6 sm:block">
            <div className="brand-glass flex w-44 items-center gap-3 rounded-2xl p-2.5 pr-4">
              <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                <LucideBike className="size-4" strokeWidth={2} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex items-baseline justify-between text-xs font-semibold text-foreground">
                  {tMockup("savingsGoal")}
                  <span className="text-[11px] tabular-nums text-primary">
                    {SAVINGS_PERCENT}%
                  </span>
                </span>
                <span className="mt-1.5 block h-1.5 overflow-hidden rounded-full bg-muted">
                  <span
                    className="block h-full rounded-full bg-gradient-to-r from-gold-core to-gold-light"
                    style={{ width: `${SAVINGS_PERCENT}%` }}
                  />
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
