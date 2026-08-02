"use client";

import { LucideArrowUpRight, LucidePlus } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { TypographyH2 } from "@/components/utils/typography/typography-h2";
import { TypographyMuted } from "@/components/utils/typography/typography-muted";
import { LANDING_FAQ_KEYS, ROUTES } from "@/utils/constants/site.constant";

export default function LandingFaq() {
  /* ---------------------------------- Utils --------------------------------- */
  const t = useTranslations("faq");

  /* -------------------------------- Render UI ------------------------------- */
  return (
    <section
      id="faq"
      className="scroll-mt-[72px] border-b border-border bg-muted/40"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-14 lg:py-28">
        {/* Section Heading */}
        <div className="lg:sticky lg:top-[104px] lg:self-start">
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

          <Link
            href={ROUTES.support}
            className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            {t("moreLabel")}
            <LucideArrowUpRight className="size-4" />
          </Link>
        </div>

        {/* Question List Section */}
        {/* Native <details> so the accordion works before hydration and stays
            keyboard- and screen-reader-navigable without extra JS. */}
        <dl className="flex flex-col gap-px overflow-hidden rounded-2xl border border-border bg-border">
          {LANDING_FAQ_KEYS.map((key) => (
            <details key={key} className="group bg-card">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-6 transition-colors hover:bg-muted/60 [&::-webkit-details-marker]:hidden">
                <dt className="text-sm font-semibold text-emerald-deep sm:text-base">
                  {t(`${key}Title`)}
                </dt>
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-primary/10 text-primary transition-transform duration-200 group-open:rotate-45">
                  <LucidePlus className="size-4" strokeWidth={2} />
                </span>
              </summary>
              <dd className="px-6 pb-6 pr-16 text-sm leading-relaxed text-muted-foreground">
                {t(`${key}Body`)}
              </dd>
            </details>
          ))}
        </dl>
      </div>
    </section>
  );
}
