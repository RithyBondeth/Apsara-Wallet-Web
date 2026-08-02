"use client";

import { LucideArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

import Header from "@/components/header";
import LandingFooter from "@/components/landing/landing-footer";
import { TypographyH3 } from "@/components/utils/typography/typography-h3";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/utils/constants/site.constant";
import type {
  IStaticBulletProps,
  IStaticNoteProps,
  IStaticPageShellProps,
  IStaticSectionProps,
  IStaticStepProps,
} from "@/components/static-content/static-page/props";

/* ------------------------------- Page Shell ------------------------------- */
// Shared chrome for every long-form page (Privacy, Terms, Support, Delete
// Account) so they read as one document family rather than four one-offs.
export function StaticPageShell({
  pageNumber,
  pageTotal = "04",
  title,
  subtitle,
  meta,
  tocHeading,
  toc,
  children,
}: IStaticPageShellProps) {
  /* ---------------------------------- Utils --------------------------------- */
  const tCommon = useTranslations("common");

  /* -------------------------------- Render UI ------------------------------- */
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Page Header Section */}
      <Header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl" />

      {/* Page Hero Section */}
      <section className="relative overflow-hidden border-b border-border pt-[72px]">
        <div className="brand-grid pointer-events-none absolute inset-0" />

        <div className="relative mx-auto max-w-4xl px-6 py-14 sm:px-10 lg:py-20">
          <Link
            href={ROUTES.home}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <LucideArrowLeft className="size-4" />
            {tCommon("backToHome")}
          </Link>

          <div className="mt-8 flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              {tCommon("appName")} · {pageNumber} / {pageTotal}
            </span>
          </div>

          <h1 className="mt-6 text-3xl font-extrabold leading-[1.08] tracking-[-0.03em] text-emerald-deep sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {subtitle}
          </p>
          {meta ? (
            <div className="mt-6 text-xs text-muted-foreground">{meta}</div>
          ) : null}
        </div>
      </section>

      {/* Page Body Section */}
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-14 sm:px-10 lg:grid-cols-[240px_1fr] lg:py-20">
        {/* Table Of Contents Section */}
        <aside className="lg:sticky lg:top-[104px] lg:self-start">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {tocHeading}
          </p>
          <nav className="mt-4">
            <ol className="flex flex-col gap-2.5">
              {toc.map((entry, index) => (
                <li key={entry.id} className="flex gap-3">
                  <span className="text-xs tabular-nums text-muted-foreground/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <a
                    href={`#${entry.id}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {entry.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        {/* Sections Section */}
        <main className="min-w-0">{children}</main>
      </div>

      {/* Footer */}
      <LandingFooter />
    </div>
  );
}

/* -------------------------------- Sub Parts ------------------------------- */
export function StaticSection({
  id,
  number,
  icon,
  title,
  children,
}: IStaticSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-[104px] border-b border-border py-9 first:pt-0 last:border-b-0"
    >
      <div className="flex items-center gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
          {icon}
        </span>
        <span className="text-xs font-semibold tabular-nums text-muted-foreground/60">
          {number}
        </span>
      </div>

      <TypographyH3 className="mt-4 text-xl text-emerald-deep sm:text-2xl">
        {title}
      </TypographyH3>

      <div className="mt-4 flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
        {children}
      </div>
    </section>
  );
}

export function StaticBullet({ children }: IStaticBulletProps) {
  return (
    <li className="flex gap-3">
      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold-core" />
      <span>{children}</span>
    </li>
  );
}

export function StaticStep({ number, children }: IStaticStepProps) {
  return (
    <li className="flex gap-4">
      <span className="grid size-8 shrink-0 place-items-center rounded-full bg-emerald-deep text-xs font-bold text-white">
        {number}
      </span>
      <span className="pt-1.5">{children}</span>
    </li>
  );
}

export function StaticNote({
  icon,
  children,
  tone = "default",
}: IStaticNoteProps) {
  return (
    <div
      className={cn(
        "flex gap-3 rounded-2xl border p-5 text-sm leading-relaxed",
        tone === "warning"
          ? "border-finance-expense/25 bg-finance-expense/5 text-finance-expense"
          : "border-border bg-muted/60 text-muted-foreground",
      )}
    >
      {icon ? <span className="mt-0.5 shrink-0">{icon}</span> : null}
      <span>{children}</span>
    </div>
  );
}
