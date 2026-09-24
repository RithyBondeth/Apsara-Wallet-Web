"use client";

import {
  LucideBanknote,
  LucideBatteryFull,
  LucideBell,
  LucideCar,
  LucideChartColumn,
  LucideChevronRight,
  LucideEye,
  LucideGlobe,
  LucideHouse,
  LucideMenu,
  LucideMinus,
  LucidePlus,
  LucideScanLine,
  LucideShoppingBag,
  LucideSignal,
  LucideUser,
  LucideUtensils,
  LucideWallet,
  LucideWifi,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { DEVELOPER } from "@/utils/constants/site.constant";
import type {
  ILandingPhoneMockupProps,
  IMockTransaction,
} from "@/components/landing/landing-phone-mockup/props";

/* ============================================================================
   A picture of the app's real dashboard (apsara-wallet-mobile DashboardScreen).
   The device is drawn at the iPhone 17 Pro's native 402×874pt and scaled down
   as a whole, so every size, gap and radius below is the app's own value —
   AppSpacing, AppRadius and AppFont — rather than a shrunken approximation.
   Figures are illustrative, not live data.
   ============================================================================ */

/* --------------------------------- Constants -------------------------------- */
const RECENT_TRANSACTIONS: IMockTransaction[] = [
  {
    title: "Brown Coffee",
    timeKey: "timeToday",
    amount: "25,000",
    direction: "expense",
    icon: LucideUtensils,
    tone: "bg-finance-expense/[0.12] text-finance-expense",
  },
  {
    title: "PassApp",
    timeKey: "timeYesterday",
    amount: "12,000",
    direction: "expense",
    icon: LucideCar,
    tone: "bg-finance-info/[0.12] text-finance-info",
  },
  {
    title: "Psar Thmei",
    timeKey: "timeEarlier",
    amount: "42,000",
    direction: "expense",
    icon: LucideShoppingBag,
    tone: "bg-gold-core/[0.12] text-gold-core",
  },
  {
    title: "Salary",
    timeKey: "timeEarlier",
    amount: "2,400,000",
    direction: "income",
    icon: LucideBanknote,
    tone: "bg-finance-income/[0.12] text-finance-income",
  },
];

// QuickActionsRow: Add Income · Add Expense · Scan, each in its own colour.
const QUICK_ACTIONS = [
  { key: "addIncome", icon: LucidePlus, tone: "bg-finance-income/[0.12] text-finance-income" },
  { key: "addExpense", icon: LucideMinus, tone: "bg-finance-expense/[0.12] text-finance-expense" },
  { key: "scan", icon: LucideScanLine, tone: "bg-gold-core/[0.12] text-gold-core" },
] as const;

// The dashboard greets the signed-in user by given name; the mockup shows the
// developer's, taken from the same constant /about publishes.
const GREETING_NAME = DEVELOPER.givenName;

// Share of this month's income already spent — drives the overview bar.
const BUDGET_USED_PERCENT = 40;

export default function LandingPhoneMockup({
  className,
}: ILandingPhoneMockupProps) {
  /* ---------------------------------- Utils --------------------------------- */
  const t = useTranslations("mockup");

  /* -------------------------------- Render UI ------------------------------- */
  return (
    // The outer box reserves the scaled footprint; the device inside is laid
    // out at full size and scaled from its top-left corner to fill it.
    <div
      aria-hidden
      className={cn(
        "brand-app-ui relative h-[calc(898px*var(--phone-scale))] w-[calc(426px*var(--phone-scale))] [--phone-scale:0.68]",
        className,
      )}
    >
      <div className="absolute left-0 top-0 h-[898px] w-[426px] origin-top-left rounded-[68px] bg-foreground p-3 shadow-[0_70px_140px_-40px_hsl(var(--brand-emerald-deep)/0.6)] ring-1 ring-foreground/10 [transform:scale(var(--phone-scale))]">
        {/* Side Buttons Section */}
        <span className="absolute -left-1 top-44 h-12 w-1 rounded-l bg-foreground" />
        <span className="absolute -left-1 top-60 h-20 w-1 rounded-l bg-foreground" />
        <span className="absolute -right-1 top-52 h-24 w-1 rounded-r bg-foreground" />

        {/* Screen Section */}
        <div className="relative h-[874px] w-[402px] overflow-hidden rounded-[56px] bg-background font-normal leading-normal">
          {/* The dashboard's misty temple backdrop, behind everything */}
          <Image
            src="/app/dashboard-bg.webp"
            alt=""
            fill
            sizes="300px"
            className="object-cover"
          />

          <div className="relative">
            {/* Header Section — the emerald hero, with the quick actions
                straddling its lower edge by 46pt, as in the app */}
            <div className="relative pb-[46px]">
              <div className="brand-emerald-surface relative overflow-hidden rounded-b-[24px] px-6 pb-16 pt-[78px] shadow-[0_12px_24px_hsl(var(--brand-emerald-core)/0.2)]">
                {/* Floating apsara emblem with its gold halo */}
                <div className="absolute right-[-14px] top-[68px] grid size-[150px] place-items-center">
                  <span className="absolute inset-0 rounded-full bg-[radial-gradient(closest-side,hsl(var(--brand-gold-light)/0.22),transparent)]" />
                  <Image
                    src="/logo.png"
                    alt=""
                    width={118}
                    height={118}
                    className="relative size-[118px] opacity-[0.92]"
                  />
                </div>

                {/* Greeting Row */}
                <div className="relative flex items-start gap-2">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-white/[0.16] bg-white/[0.14] text-white">
                    <LucideMenu className="size-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-ivory/[0.82]">{t("greeting")}</p>
                    <p className="mt-0.5 text-2xl font-bold text-white">
                      {GREETING_NAME} 👋
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-white/[0.16] bg-white/[0.14] text-white">
                    <LucideGlobe className="size-5" />
                  </span>
                  <span className="relative grid size-11 shrink-0 place-items-center rounded-full border border-white/[0.16] bg-white/[0.14] text-white">
                    <LucideBell className="size-5" />
                    <span className="absolute right-3 top-[11px] size-2 rounded-full border-[1.5px] border-emerald-core bg-gold-core" />
                  </span>
                </div>

                {/* Balance Block */}
                <div className="relative mt-6">
                  <div className="flex items-center gap-2 text-sm font-medium tracking-[0.4px] text-ivory/80">
                    {t("totalBalance")}
                    <LucideEye className="size-[18px]" />
                  </div>
                  <p className="mt-2 flex items-baseline gap-2">
                    <span className="text-base font-bold text-gold-light">KHR</span>
                    <span className="text-[32px] font-bold leading-tight tracking-[0.5px] text-white">
                      4,182,500
                    </span>
                  </p>
                  <p className="mt-1 text-sm text-ivory/75">≈ USD 1,031.44</p>
                </div>
              </div>

              {/* Quick Actions Row */}
              <div className="absolute inset-x-6 bottom-0 grid grid-cols-3 gap-3">
                {QUICK_ACTIONS.map((action) => (
                  <div
                    key={action.key}
                    className="flex flex-col items-center rounded-[20px] bg-card py-4 shadow-[0_6px_16px_hsl(var(--foreground)/0.08)]"
                  >
                    <span className={cn("grid size-11 place-items-center rounded-full", action.tone)}>
                      <action.icon className="size-[22px]" />
                    </span>
                    <span className="mt-2 text-xs font-semibold text-muted-foreground">
                      {t(action.key)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Month Overview Card */}
            <div className="mx-6 mt-6 rounded-[20px] bg-card p-5 shadow-[0_8px_20px_hsl(var(--foreground)/0.07)]">
              <div className="flex items-baseline gap-3">
                <p className="flex-1 text-base font-bold text-foreground">{t("monthOverview")}</p>
                <p className="text-xs text-muted-foreground">{t("monthLabel")}</p>
              </div>

              <div className="mt-5 grid grid-cols-2">
                <div>
                  <p className="text-xs text-muted-foreground">{t("income")}</p>
                  <p className="mt-1 text-base font-bold text-finance-income">KHR 2,400,000</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{t("expense")}</p>
                  <p className="mt-1 text-base font-bold text-finance-expense">KHR 968,300</p>
                </div>
              </div>

              <div className="mt-5 h-2.5 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full bg-gradient-to-r from-emerald-glow to-primary"
                  style={{ width: `${BUDGET_USED_PERCENT}%` }}
                />
              </div>

              <div className="mt-3 flex items-end">
                <div className="flex-1">
                  <p className="text-xs font-medium text-muted-faint">{t("remaining")}</p>
                  <p className="mt-0.5 text-sm font-semibold text-foreground">KHR 1,431,700</p>
                </div>
                <p className="text-base font-bold text-primary">{BUDGET_USED_PERCENT}%</p>
              </div>
            </div>

            {/* Recent Transactions Section */}
            <div className="mx-7 mt-6 flex items-center">
              <p className="flex-1 text-base font-bold text-foreground">{t("recentTransactions")}</p>
              <p className="flex items-center gap-0.5 text-sm font-semibold text-primary">
                {t("seeAll")}
                <LucideChevronRight className="size-4" />
              </p>
            </div>

            <ul className="mx-6 mt-3 rounded-[20px] bg-card shadow-[0_6px_18px_hsl(var(--foreground)/0.06)]">
              {RECENT_TRANSACTIONS.map((transaction, index) => (
                <li key={transaction.title}>
                  {index > 0 && <span className="ml-[76px] mr-4 block h-px bg-muted" />}
                  <div className="flex items-center px-4 py-3">
                    <span
                      className={cn(
                        "grid size-12 shrink-0 place-items-center rounded-xl",
                        transaction.tone,
                      )}
                    >
                      <transaction.icon className="size-[22px]" />
                    </span>
                    <div className="ml-3 min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-foreground">
                        {transaction.title}
                      </p>
                      <p className="mt-0.5 text-xs text-muted-faint">{t(transaction.timeKey)}</p>
                    </div>
                    <p
                      className={cn(
                        "ml-2 shrink-0 text-sm font-bold",
                        transaction.direction === "income"
                          ? "text-finance-income"
                          : "text-foreground",
                      )}
                    >
                      {transaction.direction === "income" ? "+" : "-"} KHR {transaction.amount}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Status Bar Section */}
          <div className="absolute inset-x-0 top-0 flex h-[62px] items-center justify-between pl-[52px] pr-9 text-white">
            <span className="text-[17px] font-semibold">9:41</span>
            <span className="flex items-center gap-1.5">
              <LucideSignal className="size-[18px]" strokeWidth={2.5} />
              <LucideWifi className="size-[18px]" strokeWidth={2.5} />
              <LucideBatteryFull className="size-6" strokeWidth={2} />
            </span>
          </div>
          <span className="absolute left-1/2 top-[11px] h-[37px] w-[126px] -translate-x-1/2 rounded-full bg-foreground" />

          {/* Bottom Dock Section — AppBottomBar: an emerald stadium whose
              selected tab expands into a labelled pill, with the gold "+"
              coin in the middle */}
          <div className="brand-emerald-surface absolute inset-x-3 bottom-[46px] flex h-16 items-center rounded-full border border-white/[0.12] px-2.5 shadow-[0_8px_20px_hsl(var(--brand-emerald-deep)/0.2),0_2px_6px_hsl(var(--foreground)/0.08)]">
            <div className="flex flex-1 items-center justify-evenly">
              <span className="flex h-11 items-center gap-1.5 rounded-full bg-white/10 pl-[5px] pr-2.5">
                <span className="grid size-[34px] place-items-center rounded-full bg-gradient-to-br from-gold-light to-gold-deep text-emerald-deep">
                  <LucideHouse className="size-[18px]" />
                </span>
                <span className="text-[10px] font-bold tracking-[0.2px] text-white">
                  {t("navHome")}
                </span>
              </span>
              <span className="grid size-[34px] place-items-center rounded-full bg-white/[0.08] text-white/70">
                <LucideChartColumn className="size-[18px]" />
              </span>
            </div>

            <span className="w-[62px] shrink-0" />

            <div className="flex flex-1 items-center justify-evenly">
              <span className="grid size-[34px] place-items-center rounded-full bg-white/[0.08] text-white/70">
                <LucideWallet className="size-[18px]" />
              </span>
              <span className="grid size-[34px] place-items-center rounded-full bg-white/[0.08] text-white/70">
                <LucideUser className="size-[18px]" />
              </span>
            </div>

            <span className="brand-gold-surface absolute left-1/2 top-1/2 grid size-[46px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/[0.22] text-emerald-deep shadow-[0_0_12px_hsl(var(--brand-gold-core)/0.22)]">
              <LucidePlus className="size-6" />
            </span>
          </div>

          {/* Home Indicator Section */}
          <span className="absolute bottom-2 left-1/2 h-[5px] w-[134px] -translate-x-1/2 rounded-full bg-foreground" />
        </div>
      </div>
    </div>
  );
}
