"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import LandingStoreButtons from "@/components/landing/landing-store-buttons";
import { Button } from "@/components/ui/button";
import { TypographyH2 } from "@/components/utils/typography/typography-h2";
import { TypographyMuted } from "@/components/utils/typography/typography-muted";
import { TypographySmall } from "@/components/utils/typography/typography-small";
import { ROUTES } from "@/utils/constants/site.constant";

export default function LandingCta() {
  /* ---------------------------------- Utils --------------------------------- */
  const t = useTranslations("cta");

  /* -------------------------------- Render UI ------------------------------- */
  return (
    <section
      id="download"
      className="scroll-mt-[72px] border-b border-border bg-background"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
        <div className="flex flex-col items-center rounded-3xl border border-border bg-card px-6 py-14 text-center sm:px-12">
          {/* Brand Mark Section */}
          <Image
            src="/logo.png"
            alt=""
            width={72}
            height={72}
            className="size-16 rounded-2xl shadow-lg sm:size-20"
          />

          {/* Heading Section */}
          <TypographyH2 className="mt-7 max-w-2xl text-emerald-deep">
            {t("heading")}
          </TypographyH2>
          <TypographyMuted className="mt-4 max-w-xl text-base !leading-relaxed">
            {t("description")}
          </TypographyMuted>

          {/* Store Buttons Section */}
          <LandingStoreButtons className="mt-9 w-full justify-center sm:w-auto" />

          {/* Secondary Action Section */}
          <Button asChild variant="link" size="sm" className="mt-5">
            <Link href={ROUTES.privacy}>{t("secondary")}</Link>
          </Button>

          <TypographySmall className="mt-2 text-muted-foreground">
            {t("note")}
          </TypographySmall>
        </div>
      </div>
    </section>
  );
}
