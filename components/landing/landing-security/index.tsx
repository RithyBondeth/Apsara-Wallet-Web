"use client";

import {
  LucideArrowUpRight,
  LucideCpu,
  LucideEyeOff,
  LucideFingerprint,
  LucideTrash2,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { TypographyH2 } from "@/components/utils/typography/typography-h2";
import { TypographyH3 } from "@/components/utils/typography/typography-h3";
import { ROUTES } from "@/utils/constants/site.constant";

/* --------------------------------- Constants -------------------------------- */
const PILLARS = [
  { key: "lock", icon: LucideFingerprint },
  { key: "onDevice", icon: LucideCpu },
  { key: "noSelling", icon: LucideEyeOff },
  { key: "delete", icon: LucideTrash2 },
] as const;

export default function LandingSecurity() {
  /* ---------------------------------- Utils --------------------------------- */
  const t = useTranslations("security");

  /* -------------------------------- Render UI ------------------------------- */
  return (
    <section
      id="security"
      className="brand-emerald-surface relative scroll-mt-[72px] overflow-hidden border-b border-border"
    >
      <div className="brand-grid-inverted pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
        {/* Section Heading */}
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-gold-core" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-core">
              {t("badge")}
            </span>
          </div>
          <TypographyH2 className="text-white">{t("heading")}</TypographyH2>
          <p className="mt-5 text-base leading-relaxed text-white/65">
            {t("description")}
          </p>
        </div>

        {/* Pillars Section */}
        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/15 sm:grid-cols-2">
          {PILLARS.map((pillar) => (
            <li key={pillar.key} className="bg-emerald-deep/60 p-7 backdrop-blur-sm">
              <span className="grid size-11 place-items-center rounded-xl bg-gold-core/15 text-gold-core">
                <pillar.icon className="size-5" strokeWidth={1.75} />
              </span>

              <TypographyH3 className="mt-5 text-white">
                {t(`${pillar.key}Title`)}
              </TypographyH3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/60">
                {t(`${pillar.key}Body`)}
              </p>

              {/* The deletion pillar is also the entry point to the request page,
                  which app stores require to be reachable from the web. */}
              {pillar.key === "delete" && (
                <Link
                  href={ROUTES.deleteAccount}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-core underline-offset-4 hover:underline"
                >
                  {t("deleteLink")}
                  <LucideArrowUpRight className="size-4" />
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
