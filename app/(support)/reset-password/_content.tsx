"use client";

import { LucideKeyRound, LucideSmartphone, LucideTriangleAlert } from "lucide-react";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

import LandingStoreButtons from "@/components/landing/landing-store-buttons";
import {
  StaticNote,
  StaticPageShell,
  StaticSection,
} from "@/components/static-content/static-page";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/utils/constants/site.constant";

/* --------------------------------- Constants -------------------------------- */
// The custom-scheme form of the same link. Once Universal Links / App Links are
// verified, iOS and Android open the https URL in the app directly and never
// show this page; it remains the fallback for a device without the app, an
// unverified install, or a mail client that opened the link in a browser.
const APP_SCHEME_RESET = "apsarawallet://reset-password?token=";

export function ResetPasswordContent() {
  /* ---------------------------------- Utils --------------------------------- */
  const t = useTranslations("resetPassword");
  const tCommon = useTranslations("common");
  const token = useSearchParams().get("token")?.trim() ?? "";

  /* -------------------------------- Render UI ------------------------------- */
  return (
    <StaticPageShell
      pageNumber="05"
      title={t("title")}
      subtitle={t("intro")}
      tocHeading={tCommon("contents")}
      toc={[
        { id: "open", label: t("openHeading") },
        { id: "install", label: t("installHeading") },
      ]}
    >
      {/* Open In App Section */}
      <StaticSection
        id="open"
        number="01"
        icon={<LucideKeyRound className="size-5" strokeWidth={1.75} />}
        title={t("openHeading")}
      >
        {token ? (
          <>
            <p>{t("openBody")}</p>
            <Button asChild size="lg" variant="gold" className="w-full sm:w-auto">
              {/* Plain anchor: Next's router must not try to handle a custom scheme. */}
              <a href={`${APP_SCHEME_RESET}${encodeURIComponent(token)}`}>
                <LucideSmartphone />
                {t("openCta")}
              </a>
            </Button>
            <StaticNote>{t("openNote")}</StaticNote>
          </>
        ) : (
          <StaticNote
            tone="warning"
            icon={<LucideTriangleAlert className="size-5" strokeWidth={1.75} />}
          >
            {t("missingToken")}
          </StaticNote>
        )}
      </StaticSection>

      {/* Install Section */}
      <StaticSection
        id="install"
        number="02"
        icon={<LucideSmartphone className="size-5" strokeWidth={1.75} />}
        title={t("installHeading")}
      >
        <p>{t("installBody")}</p>
        <LandingStoreButtons variant="outline" />
        <p>
          {t("helpPrefix")}{" "}
          <Link href={ROUTES.support} className="font-semibold underline underline-offset-4">
            {t("helpLink")}
          </Link>
          .
        </p>
      </StaticSection>
    </StaticPageShell>
  );
}
