"use client";

import { LucideArrowUpRight, LucideLifeBuoy, LucidePlus } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

import LandingSectionHeading from "@/components/landing/landing-section-heading";
import Reveal from "@/components/utils/reveal";
import { LANDING_FAQ_KEYS, ROUTES } from "@/utils/constants/site.constant";

export default function LandingFaq() {
  /* ---------------------------------- Utils --------------------------------- */
  const t = useTranslations("faq");

  /* -------------------------------- Render UI ------------------------------- */
  return (
    <section id="faq" className="scroll-mt-[72px] bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-14 lg:py-32">
        {/* Section Heading */}
        <Reveal className="lg:sticky lg:top-[104px] lg:self-start">
          <LandingSectionHeading
            className="reveal-item"
            badge={t("badge")}
            heading={t("heading")}
            description={t("description")}
          />

          {/* Support Card */}
          <Link
            href={ROUTES.support}
            style={{ "--reveal-index": 1 } as React.CSSProperties}
            className="reveal-item group mt-9 flex items-center gap-4 rounded-2xl border border-border bg-muted/50 p-4 pr-5 transition-colors hover:border-primary/25 hover:bg-primary/5"
          >
            <span className="brand-emerald-surface grid size-11 shrink-0 place-items-center rounded-xl text-gold-light">
              <LucideLifeBuoy className="size-5" strokeWidth={1.75} />
            </span>
            <span className="flex-1 text-sm font-semibold text-emerald-deep">
              {t("moreLabel")}
            </span>
            <LucideArrowUpRight className="size-4 shrink-0 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </Reveal>

        {/* Question List Section */}
        {/* Native <details> so the accordion works before hydration and stays
            keyboard- and screen-reader-navigable without extra JS. Deliberately
            not a <dl>: its content model allows only dt/dd/div, so wrapping
            <details> in one — as the /support list can — would be invalid. */}
        <Reveal className="flex flex-col gap-3">
          {LANDING_FAQ_KEYS.map((key, index) => (
            <details
              key={key}
              style={{ "--reveal-index": index } as React.CSSProperties}
              className="reveal-item group rounded-2xl border border-border bg-card transition-[border-color,box-shadow] duration-300 open:border-primary/20 open:shadow-xl open:shadow-emerald-deep/[0.06] hover:border-primary/20"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-2xl p-5 sm:p-6 [&::-webkit-details-marker]:hidden">
                <h3 className="text-base font-semibold text-emerald-deep">
                  {t(`${key}Title`)}
                </h3>
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-open:rotate-45 group-open:bg-primary group-open:text-primary-foreground">
                  <LucidePlus className="size-4" strokeWidth={2.25} />
                </span>
              </summary>
              {/* Eases in when the question opens rather than popping */}
              <p className="-mt-1 px-5 pb-6 pr-16 text-sm leading-relaxed text-muted-foreground duration-300 animate-in fade-in slide-in-from-top-1 sm:px-6 sm:pr-20">
                {t(`${key}Body`)}
              </p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
