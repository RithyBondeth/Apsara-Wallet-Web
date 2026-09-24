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

// Store-badge shape: icon beside a small caption over the store name. The
// disabled state keeps most of its opacity because the caption already says
// "Coming soon" — a half-faded badge just reads as broken.
const BADGE_CLASS_NAME =
  "h-14 w-full justify-start gap-3 rounded-2xl px-5 text-left disabled:opacity-75 sm:w-auto sm:min-w-[11.5rem] [&_svg]:size-6";

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
        const label = (
          <>
            <store.icon />
            <span className="flex flex-col leading-none">
              <span className="text-[10px] font-medium uppercase tracking-wide opacity-75">
                {href ? tCommon("availableOn") : tCommon("comingSoon")}
              </span>
              <span className="mt-1 text-base font-bold">{store.label}</span>
            </span>
          </>
        );

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
              className={BADGE_CLASS_NAME}
            >
              {label}
            </Button>
          );
        }

        return (
          <Button
            key={store.key}
            asChild
            size="lg"
            variant={variant}
            className={BADGE_CLASS_NAME}
          >
            <Link href={href} target="_blank" rel="noopener noreferrer">
              {label}
            </Link>
          </Button>
        );
      })}
    </div>
  );
}
