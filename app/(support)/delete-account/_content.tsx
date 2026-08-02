"use client";

import {
  LucideArchive,
  LucideMail,
  LucideShieldAlert,
  LucideSmartphone,
  LucideTrash2,
  LucideTriangleAlert,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

import {
  StaticBullet,
  StaticNote,
  StaticPageShell,
  StaticSection,
  StaticStep,
} from "@/components/static-content/static-page";
import { SITE } from "@/utils/constants/site.constant";

/* --------------------------------- Constants -------------------------------- */
const DELETED_DATA_KEYS = [
  "dataWallets",
  "dataTransactions",
  "dataBudgets",
  "dataProfile",
] as const;

export function DeleteAccountContent() {
  /* ---------------------------------- Utils --------------------------------- */
  const t = useTranslations("deleteAccount");
  const tCommon = useTranslations("common");

  // Pre-filling the subject keeps inbound requests consistent and easy to triage.
  const mailtoHref = `mailto:${SITE.supportEmail}?subject=${encodeURIComponent("Delete my account")}`;

  /* -------------------------------- Render UI ------------------------------- */
  return (
    <StaticPageShell
      pageNumber="04"
      title={t("title")}
      subtitle={t("intro")}
      tocHeading={tCommon("contents")}
      toc={[
        { id: "in-app", label: t("inAppHeading") },
        { id: "by-email", label: t("webHeading") },
        { id: "what-is-deleted", label: t("dataHeading") },
        { id: "what-we-keep", label: t("retainedHeading") },
      ]}
    >
      {/* In-App Deletion Section */}
      <StaticSection
        id="in-app"
        number="01"
        icon={<LucideSmartphone className="size-5" strokeWidth={1.75} />}
        title={t("inAppHeading")}
      >
        <ol className="flex flex-col gap-4">
          <StaticStep number="1">{t("inAppStepOne")}</StaticStep>
          <StaticStep number="2">{t("inAppStepTwo")}</StaticStep>
          <StaticStep number="3">{t("inAppStepThree")}</StaticStep>
        </ol>

        <StaticNote
          tone="warning"
          icon={<LucideTriangleAlert className="size-4" />}
        >
          {t("inAppNote")}
        </StaticNote>
      </StaticSection>

      {/* Email Request Section */}
      <StaticSection
        id="by-email"
        number="02"
        icon={<LucideMail className="size-5" strokeWidth={1.75} />}
        title={t("webHeading")}
      >
        <p>{t("webBody")}</p>
        <Link
          href={mailtoHref}
          className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-emerald-glow"
        >
          <LucideTrash2 className="size-4" />
          {SITE.supportEmail}
        </Link>
      </StaticSection>

      {/* Deleted Data Section */}
      <StaticSection
        id="what-is-deleted"
        number="03"
        icon={<LucideTrash2 className="size-5" strokeWidth={1.75} />}
        title={t("dataHeading")}
      >
        <ul className="flex flex-col gap-3">
          {DELETED_DATA_KEYS.map((key) => (
            <StaticBullet key={key}>{t(key)}</StaticBullet>
          ))}
        </ul>

        <StaticNote icon={<LucideArchive className="size-4" />}>
          {t("exportTip")}
        </StaticNote>
      </StaticSection>

      {/* Retained Data Section */}
      <StaticSection
        id="what-we-keep"
        number="04"
        icon={<LucideShieldAlert className="size-5" strokeWidth={1.75} />}
        title={t("retainedHeading")}
      >
        <p>{t("retainedBody")}</p>
      </StaticSection>
    </StaticPageShell>
  );
}
