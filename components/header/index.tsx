"use client";

import { LucideMenu, LucideX } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/utils/languages/language-toggle";
import { cn } from "@/lib/utils";
import { NAV_LINKS, ROUTES } from "@/utils/constants/site.constant";
import type { IHeaderProps } from "@/components/header/props";

export default function Header({ className }: IHeaderProps) {
  /* ---------------------------------- Utils --------------------------------- */
  const t = useTranslations("header");
  const tCommon = useTranslations("common");

  /* -------------------------------- All States ------------------------------ */
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  /* -------------------------------- Render UI ------------------------------- */
  return (
    <header className={cn("w-full", className)}>
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 sm:px-10">
        {/* Brand Section */}
        <Link
          href={ROUTES.home}
          className="flex items-center gap-2.5"
          onClick={() => setMobileOpen(false)}
        >
          <Image
            src="/logo.png"
            alt=""
            width={36}
            height={36}
            priority
            className="size-9 rounded-lg"
          />
          <span className="text-base font-bold tracking-tight text-emerald-deep">
            {tCommon("appName")}
          </span>
        </Link>

        {/* Desktop Navigation Section */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions Section */}
        <div className="hidden items-center gap-2 md:flex">
          <LanguageToggle />
          <Button asChild size="sm">
            <Link href={ROUTES.download}>{t("download")}</Link>
          </Button>
        </div>

        {/* Mobile Trigger Section */}
        <div className="flex items-center gap-1 md:hidden">
          <LanguageToggle />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={t("toggleNavigation")}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <LucideX /> : <LucideMenu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Section */}
      {mobileOpen && (
        <nav
          id="mobile-navigation"
          className="border-t border-border bg-background px-6 pb-6 pt-2 md:hidden"
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block border-b border-border py-4 text-base font-medium text-foreground"
                >
                  {t(link.key)}
                </Link>
              </li>
            ))}
          </ul>
          <Button asChild className="mt-6 w-full" size="lg">
            <Link href={ROUTES.download} onClick={() => setMobileOpen(false)}>
              {t("download")}
            </Link>
          </Button>
        </nav>
      )}
    </header>
  );
}
