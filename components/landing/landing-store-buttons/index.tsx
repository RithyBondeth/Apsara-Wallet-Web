"use client";

import { LucidePlay, LucideSmartphone } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { STORE_LINKS } from "@/utils/constants/site.constant";
import type { ILandingStoreButtonsProps } from "@/components/landing/landing-store-buttons/props";

/* --------------------------------- Constants -------------------------------- */
const STORES = [
  { key: "playStore", label: "Google Play", icon: LucidePlay },
  { key: "appStore", label: "App Store", icon: LucideSmartphone },
] as const;

export default function LandingStoreButtons({
  className,
  variant = "gold",
}: ILandingStoreButtonsProps) {
  /* ---------------------------------- Utils --------------------------------- */
  const tCommon = useTranslations("common");

  /* -------------------------------- Render UI ------------------------------- */
  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row", className)}>
      {STORES.map((store) => {
        const href = STORE_LINKS[store.key];

        // Until a listing URL is configured the button renders disabled rather
        // than linking somewhere that would 404.
        if (!href) {
          return (
            <Button
              key={store.key}
              type="button"
              size="lg"
              variant={variant}
              disabled
              aria-disabled
              className="w-full sm:w-auto"
            >
              <store.icon />
              {store.label} · {tCommon("comingSoon")}
            </Button>
          );
        }

        return (
          <Button
            key={store.key}
            asChild
            size="lg"
            variant={variant}
            className="w-full sm:w-auto"
          >
            <Link href={href} target="_blank" rel="noopener noreferrer">
              <store.icon />
              {store.label}
            </Link>
          </Button>
        );
      })}
    </div>
  );
}
