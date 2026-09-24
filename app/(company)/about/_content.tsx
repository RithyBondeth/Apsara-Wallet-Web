"use client";

import {
  LucideArrowUpRight,
  LucideFileText,
  LucideLifeBuoy,
  LucideMail,
  LucideShieldCheck,
  LucideSmartphone,
  LucideSparkles,
  LucideTrash2,
  LucideUserRound,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import {
  StaticNote,
  StaticPageShell,
  StaticSection,
} from "@/components/static-content/static-page";
import { DEVELOPER, ROUTES, SITE } from "@/utils/constants/site.constant";

/* --------------------------------- Constants -------------------------------- */
// Labels resolve from the `footer` namespace, which already names these pages.
const POLICY_LINKS = [
  { key: "privacy", href: ROUTES.privacy, icon: LucideShieldCheck },
  { key: "terms", href: ROUTES.terms, icon: LucideFileText },
  { key: "deleteAccount", href: ROUTES.deleteAccount, icon: LucideTrash2 },
  { key: "support", href: ROUTES.support, icon: LucideLifeBuoy },
] as const;

// Initials for the avatar, as the app's side menu draws them.
const DEVELOPER_INITIALS = DEVELOPER.name
  .split(" ")
  .map((part) => part[0])
  .join("");

/* -------------------------------- Sub Parts ------------------------------- */
// One labelled fact in a details card. Private to this page.
function AboutFact({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid gap-1 px-5 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6 sm:px-6">
      <dt className="text-sm text-muted-foreground">{label}</dt>
      <dd className="break-words text-sm font-semibold text-foreground">{children}</dd>
    </div>
  );
}

export function AboutContent() {
  /* ---------------------------------- Utils --------------------------------- */
  const t = useTranslations("about");
  const tCommon = useTranslations("common");
  const tFooter = useTranslations("footer");

  const siteHost = new URL(SITE.url).host;

  /* -------------------------------- Render UI ------------------------------- */
  return (
    <StaticPageShell
      pageNumber="06"
      title={t("title")}
      subtitle={t("intro")}
      tocHeading={tCommon("contents")}
      toc={[
        { id: "mission", label: t("missionHeading") },
        { id: "developer", label: t("developerHeading") },
        { id: "app", label: t("appHeading") },
        { id: "policies", label: t("policiesHeading") },
      ]}
    >
      {/* Mission Section */}
      <StaticSection
        id="mission"
        number="01"
        icon={<LucideSparkles className="size-5" strokeWidth={1.75} />}
        title={t("missionHeading")}
      >
        {/* The app's own About-screen tagline and mission, word for word */}
        <p className="border-l-2 border-gold-core pl-4 text-lg font-semibold text-emerald-deep">
          {t("tagline")}
        </p>
        <p>{t("missionBody")}</p>
        <p>{t("missionDetail")}</p>
      </StaticSection>

      {/* Developer Section */}
      <StaticSection
        id="developer"
        number="02"
        icon={<LucideUserRound className="size-5" strokeWidth={1.75} />}
        title={t("developerHeading")}
      >
        <p>{t("developerBody")}</p>

        {/* Developer Card */}
        <div className="overflow-hidden rounded-3xl border border-border bg-card">
          <div className="brand-emerald-surface flex items-center gap-4 p-5 sm:p-6">
            <span className="grid size-14 shrink-0 place-items-center rounded-full border-2 border-gold-core bg-emerald-deep text-lg font-bold text-gold-light">
              {DEVELOPER_INITIALS}
            </span>
            <div className="min-w-0">
              <p className="text-lg font-bold text-white">{DEVELOPER.name}</p>
              <p className="text-sm text-ivory/75">
                {t("typeValue")} · {t("locationValue")}
              </p>
            </div>
          </div>

          <dl className="divide-y divide-border">
            <AboutFact label={t("nameLabel")}>{DEVELOPER.name}</AboutFact>
            <AboutFact label={t("typeLabel")}>{t("typeValue")}</AboutFact>
            <AboutFact label={t("locationLabel")}>{t("locationValue")}</AboutFact>
            <AboutFact label={t("developerEmailLabel")}>
              <Link
                href={`mailto:${DEVELOPER.email}`}
                className="text-primary underline-offset-4 hover:underline"
              >
                {DEVELOPER.email}
              </Link>
            </AboutFact>
            <AboutFact label={t("supportEmailLabel")}>
              <Link
                href={`mailto:${SITE.supportEmail}`}
                className="text-primary underline-offset-4 hover:underline"
              >
                {SITE.supportEmail}
              </Link>
            </AboutFact>
            <AboutFact label={t("websiteLabel")}>
              <Link href={SITE.url} className="text-primary underline-offset-4 hover:underline">
                {siteHost}
              </Link>
            </AboutFact>
          </dl>
        </div>

        <Link
          href={`mailto:${DEVELOPER.email}`}
          className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-emerald-glow"
        >
          <LucideMail className="size-4" />
          {t("contactCta")}
        </Link>

        <StaticNote icon={<LucideLifeBuoy className="size-4" />}>
          {t("contactNote")}{" "}
          <Link
            href={ROUTES.support}
            className="font-semibold text-primary underline-offset-4 hover:underline"
          >
            {tFooter("support")}
          </Link>
        </StaticNote>
      </StaticSection>

      {/* App Section */}
      <StaticSection
        id="app"
        number="03"
        icon={<LucideSmartphone className="size-5" strokeWidth={1.75} />}
        title={t("appHeading")}
      >
        <div className="overflow-hidden rounded-3xl border border-border bg-card">
          <div className="flex items-center gap-4 border-b border-border p-5 sm:p-6">
            <Image src="/logo.png" alt="" width={56} height={56} className="size-14" />
            <div>
              <p className="text-lg font-bold text-emerald-deep">{tCommon("appName")}</p>
              <p className="text-sm text-muted-foreground">{t("tagline")}</p>
            </div>
          </div>

          <dl className="divide-y divide-border">
            <AboutFact label={t("categoryLabel")}>{t("categoryValue")}</AboutFact>
            <AboutFact label={t("platformsLabel")}>{t("platformsValue")}</AboutFact>
            <AboutFact label={t("languagesLabel")}>{t("languagesValue")}</AboutFact>
            <AboutFact label={t("priceLabel")}>{t("priceValue")}</AboutFact>
            <AboutFact label={t("versionLabel")}>{SITE.appVersion}</AboutFact>
          </dl>
        </div>
      </StaticSection>

      {/* Policies Section */}
      <StaticSection
        id="policies"
        number="04"
        icon={<LucideShieldCheck className="size-5" strokeWidth={1.75} />}
        title={t("policiesHeading")}
      >
        <p>{t("policiesBody")}</p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {POLICY_LINKS.map((link) => (
            <li key={link.key}>
              <Link
                href={link.href}
                className="group flex items-center gap-3 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-primary/25 hover:bg-primary/5"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <link.icon className="size-5" strokeWidth={1.75} />
                </span>
                <span className="flex-1 text-sm font-semibold text-emerald-deep">
                  {tFooter(link.key)}
                </span>
                <LucideArrowUpRight className="size-4 shrink-0 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </li>
          ))}
        </ul>
      </StaticSection>
    </StaticPageShell>
  );
}
