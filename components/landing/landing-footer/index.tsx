"use client";

import { LucideMail } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import { LanguageToggle } from "@/components/utils/languages/language-toggle";
import { ROUTES, SITE } from "@/utils/constants/site.constant";

/* --------------------------------- Constants -------------------------------- */
// Column definitions — labels resolve from the `footer` namespace.
const FOOTER_COLUMNS = [
  {
    headingKey: "productHeading",
    links: [
      { key: "features", href: ROUTES.features },
      { key: "security", href: ROUTES.security },
      { key: "download", href: ROUTES.download },
    ],
  },
  {
    headingKey: "legalHeading",
    links: [
      { key: "privacy", href: ROUTES.privacy },
      { key: "terms", href: ROUTES.terms },
      { key: "deleteAccount", href: ROUTES.deleteAccount },
    ],
  },
  {
    headingKey: "supportHeading",
    links: [
      { key: "faq", href: ROUTES.faq },
      { key: "support", href: ROUTES.support },
      { key: "about", href: ROUTES.about },
    ],
  },
] as const;

export default function LandingFooter() {
  /* ---------------------------------- Utils --------------------------------- */
  const t = useTranslations("footer");
  const tCommon = useTranslations("common");

  const currentYear = new Date().getFullYear();

  /* -------------------------------- Render UI ------------------------------- */
  return (
    <footer className="relative overflow-hidden bg-emerald-deep text-white">
      <div className="brand-glow-gold pointer-events-none absolute -bottom-64 left-1/2 size-[40rem] -translate-x-1/2 opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 sm:px-10 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          {/* Brand Section */}
          <div>
            <Link href={ROUTES.home} className="inline-flex items-center gap-2.5">
              <Image src="/logo.png" alt="" width={40} height={40} className="size-10" />
              <span className="text-lg font-bold tracking-tight">
                {tCommon("appName")}
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              {t("description")}
            </p>
            <Link
              href={`mailto:${SITE.supportEmail}`}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-gold-light transition-colors hover:border-gold-core/40 hover:bg-white/10"
            >
              <LucideMail className="size-4" />
              {SITE.supportEmail}
            </Link>
          </div>

          {/* Link Columns Section */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.headingKey}>
                <p className="text-xs font-semibold uppercase tracking-wide text-gold-core/80">
                  {t(column.headingKey)}
                </p>
                <ul className="mt-5 flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.key}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/70 transition-colors hover:text-white"
                      >
                        {t(link.key)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar Section */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/50">
            © {currentYear} {tCommon("appName")}. {t("rights")} {t("builtIn")}
          </p>
          <LanguageToggle variant="inverted" />
        </div>

        {/* Oversized Wordmark Section */}
        <p
          aria-hidden
          className="pointer-events-none mt-6 select-none whitespace-nowrap text-center text-[clamp(3.5rem,14vw,11.5rem)] font-bold leading-[0.8] tracking-[-0.05em] text-white/[0.06]"
        >
          {tCommon("appName")}
        </p>
      </div>
    </footer>
  );
}
