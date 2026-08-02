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
    links: [{ key: "support", href: ROUTES.support }],
  },
] as const;

export default function LandingFooter() {
  /* ---------------------------------- Utils --------------------------------- */
  const t = useTranslations("footer");
  const tCommon = useTranslations("common");

  const currentYear = new Date().getFullYear();

  /* -------------------------------- Render UI ------------------------------- */
  return (
    <footer className="bg-emerald-deep text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          {/* Brand Section */}
          <div>
            <Link href={ROUTES.home} className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt=""
                width={36}
                height={36}
                className="size-9 rounded-lg"
              />
              <span className="text-base font-bold tracking-tight">
                {tCommon("appName")}
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              {t("description")}
            </p>
            <Link
              href={`mailto:${SITE.supportEmail}`}
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-gold-core underline-offset-4 hover:underline"
            >
              <LucideMail className="size-4" />
              {SITE.supportEmail}
            </Link>
          </div>

          {/* Link Columns Section */}
          <div className="grid gap-8 sm:grid-cols-3">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.headingKey}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">
                  {t(column.headingKey)}
                </p>
                <ul className="mt-4 flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.key}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/75 transition-colors hover:text-gold-core"
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
        <div className="mt-14 flex flex-col gap-4 border-t border-white/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/50">
            © {currentYear} {tCommon("appName")}. {t("rights")} {t("builtIn")}
          </p>
          <LanguageToggle variant="inverted" />
        </div>
      </div>
    </footer>
  );
}
