"use client";

import { LucideArrowRight, LucideMenu, LucideX } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
  const [scrolled, setScrolled] = useState<boolean>(false);

  /* --------------------------------- Effects -------------------------------- */
  // The pill starts almost clear over the hero and turns to frosted glass once
  // content scrolls underneath it.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* -------------------------------- Render UI ------------------------------- */
  return (
    // 12px inset + 60px pill = the same 72px every page already offsets for.
    <header className={cn("w-full px-3 pt-3 sm:px-6", className)}>
      <div
        className={cn(
          // The blur stays constant and only colour, border and shadow ease —
          // animating backdrop-filter itself flickers in some browsers.
          "mx-auto flex h-[60px] max-w-6xl items-center justify-between rounded-full border pl-4 pr-2 backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300 sm:pl-5",
          scrolled || mobileOpen
            ? "border-border/80 bg-background/80 shadow-lg shadow-emerald-deep/5"
            : "border-transparent bg-background/40",
        )}
      >
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
            className="size-9"
          />
          <span className="whitespace-nowrap text-base font-bold tracking-tight text-emerald-deep">
            {tCommon("appName")}
          </span>
        </Link>

        {/* Desktop Navigation Section */}
        {/* From lg only: at tablet widths four links, the language toggle and the
            CTA do not fit the pill — in Khmer least of all. */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/5 hover:text-primary"
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions Section */}
        <div className="hidden items-center gap-1.5 lg:flex">
          <LanguageToggle />
          <Button asChild size="sm" className="group h-10 px-5">
            <Link href={ROUTES.download}>
              {t("download")}
              <LucideArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>

        {/* Mobile Trigger Section */}
        <div className="flex items-center gap-1 lg:hidden">
          <LanguageToggle />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="rounded-full"
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
          className="mx-auto mt-2 max-w-6xl rounded-3xl border border-border bg-background/95 p-3 shadow-xl shadow-emerald-deep/10 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 lg:hidden"
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-2xl px-4 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-muted"
                >
                  {t(link.key)}
                </Link>
              </li>
            ))}
          </ul>
          <Button asChild className="mt-2 w-full" size="lg">
            <Link href={ROUTES.download} onClick={() => setMobileOpen(false)}>
              {t("download")}
              <LucideArrowRight />
            </Link>
          </Button>
        </nav>
      )}
    </header>
  );
}
