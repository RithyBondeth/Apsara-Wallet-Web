"use client";

import {
  LucideCircleHelp,
  LucideDownload,
  LucideKeyRound,
  LucideMail,
  LucideRefreshCcwDot,
  LucideSmartphone,
  LucideTrash2,
  LucideWifiOff,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

import {
  StaticNote,
  StaticPageShell,
  StaticSection,
} from "@/components/static-content/static-page";
import { ROUTES, SITE } from "@/utils/constants/site.constant";

/* --------------------------------- Constants -------------------------------- */
// `key` prefixes the i18n lookups: `faq${Key}Title` and `faq${Key}Body`.
const FAQS = [
  { key: "Reset", icon: LucideKeyRound },
  { key: "Pin", icon: LucideSmartphone },
  { key: "Currency", icon: LucideRefreshCcwDot },
  { key: "Offline", icon: LucideWifiOff },
  { key: "Export", icon: LucideDownload },
  { key: "Delete", icon: LucideTrash2 },
] as const;

export function SupportContent() {
  /* ---------------------------------- Utils --------------------------------- */
  const t = useTranslations("support");
  const tCommon = useTranslations("common");

  /* -------------------------------- Render UI ------------------------------- */
  return (
    <StaticPageShell
      pageNumber="03"
      title={t("title")}
      subtitle={t("intro")}
      tocHeading={tCommon("contents")}
      toc={[
        { id: "contact", label: t("contactHeading") },
        { id: "faq", label: t("faqHeading") },
      ]}
    >
      {/* Contact Section */}
      <StaticSection
        id="contact"
        number="01"
        icon={<LucideMail className="size-5" strokeWidth={1.75} />}
        title={t("contactHeading")}
      >
        <p>{t("contactBody")}</p>
        <Link
          href={`mailto:${SITE.supportEmail}`}
          className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-emerald-glow"
        >
          <LucideMail className="size-4" />
          {SITE.supportEmail}
        </Link>
      </StaticSection>

      {/* FAQ Section */}
      <StaticSection
        id="faq"
        number="02"
        icon={<LucideCircleHelp className="size-5" strokeWidth={1.75} />}
        title={t("faqHeading")}
      >
        <dl className="flex flex-col gap-px overflow-hidden rounded-2xl border border-border bg-border">
          {FAQS.map((faq) => (
            <div key={faq.key} className="bg-card p-5">
              <dt className="flex items-center gap-2.5 text-sm font-semibold text-emerald-deep sm:text-base">
                <faq.icon className="size-4 shrink-0 text-primary" strokeWidth={1.75} />
                {t(`faq${faq.key}Title`)}
              </dt>
              <dd className="mt-2 pl-[26px] text-sm leading-relaxed text-muted-foreground">
                {t(`faq${faq.key}Body`)}
              </dd>
            </div>
          ))}
        </dl>

        <StaticNote icon={<LucideTrash2 className="size-4" />}>
          <Link
            href={ROUTES.deleteAccount}
            className="font-semibold text-primary underline-offset-4 hover:underline"
          >
            {t("faqDeleteTitle")}
          </Link>
        </StaticNote>
      </StaticSection>
    </StaticPageShell>
  );
}
