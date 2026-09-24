"use client";

import {
  LucideBike,
  LucideCalendar,
  LucideCar,
  LucideCheck,
  LucideChevronDown,
  LucideCircleCheckBig,
  LucideEye,
  LucideLandmark,
  LucidePiggyBank,
  LucideReceipt,
  LucideShoppingBag,
  LucideSmartphone,
  LucideStore,
  LucideUtensils,
  LucideWallet,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { cn } from "@/lib/utils";

/* ============================================================================
   Feature pictures for the bento grid. Each one copies a real screen of the
   mobile app — its widget is named above it — using the app's colours, radii
   and the `mockup` labels taken from its own l10n catalogs. The figures are
   illustrative but agree with each other and with the phone mockup: the
   month's expense is KHR 968,300 everywhere it appears. Hidden from assistive
   tech, since each tile's heading and body already say what it shows.
   ============================================================================ */

/* --------------------------------- Constants -------------------------------- */
// Category colours — TxCategory.color in the app.
const CATEGORY = {
  foodDining: { icon: LucideUtensils, tone: "bg-finance-expense/[0.12] text-finance-expense", stroke: "stroke-finance-expense", dot: "bg-finance-expense" },
  transport: { icon: LucideCar, tone: "bg-finance-info/[0.12] text-finance-info", stroke: "stroke-finance-info", dot: "bg-finance-info" },
  shopping: { icon: LucideShoppingBag, tone: "bg-gold-core/[0.12] text-gold-core", stroke: "stroke-gold-core", dot: "bg-gold-core" },
  bills: { icon: LucideReceipt, tone: "bg-finance-warning/[0.12] text-finance-warning", stroke: "stroke-finance-warning", dot: "bg-finance-warning" },
} as const;

// WalletCard rows; together they make the total on the card beside them.
const WALLETS = [
  { nameKey: "walletSalary", typeKey: "bankAccount", icon: LucideLandmark, tone: "bg-wallet-navy shadow-wallet-navy/35", amount: "3,260,000", usd: "803.95", primary: true },
  { nameKey: "cash", typeKey: "cash", icon: LucideWallet, tone: "bg-primary shadow-primary/35", amount: "610,000", usd: "150.43", primary: false },
  { nameKey: "walletMobile", typeKey: "eWallet", icon: LucideSmartphone, tone: "bg-wallet-sky shadow-wallet-sky/35", amount: "312,500", usd: "77.07", primary: false },
] as const;

// This month's spend by category — sums to the dashboard's KHR 968,300.
const BREAKDOWN = [
  { key: "foodDining", percent: 43, amount: "416,300" },
  { key: "shopping", percent: 23, amount: "222,000" },
  { key: "transport", percent: 19, amount: "184,000" },
  { key: "bills", percent: 15, amount: "146,000" },
] as const;

// Budget screen rows, measured against the same spend.
const BUDGETS = [
  { key: "foodDining", percent: 93, spent: "416,300", limit: "450,000" },
  { key: "transport", percent: 74, spent: "184,000", limit: "250,000" },
  { key: "shopping", percent: 56, spent: "222,000", limit: "400,000" },
] as const;

// Daily Expense Trend: mostly quiet days with a few spikes, like real spending.
const DAILY_TREND = [4, 3, 18, 5, 6, 30, 8, 4, 62, 12, 7, 26, 9, 40, 15];

const SAVINGS_PERCENT = 68;

/* ---------------------------------- Wallets --------------------------------- */
// Wallets screen: TotalBalanceCard (Angkor artwork) and the WalletCard list.
export function WalletsArt() {
  const t = useTranslations("mockup");

  return (
    <div aria-hidden className="brand-app-ui flex h-full items-center justify-center gap-4 px-5">
      {/* Total Balance Card */}
      <div className="brand-emerald-surface relative h-[176px] w-full max-w-[290px] shrink-0 overflow-hidden rounded-3xl shadow-[0_12px_24px_hsl(var(--brand-emerald-core)/0.25)] lg:max-w-[250px] xl:max-w-[290px]">
        <Image src="/app/wallet-bg.webp" alt="" fill sizes="290px" className="object-cover" />
        <span className="absolute inset-0 bg-gradient-to-r from-emerald-deep/[0.82] to-emerald-core/35" />
        <div className="relative p-5">
          <p className="flex items-center gap-1.5 text-xs font-medium text-ivory/80">
            {t("totalBalance")}
            <LucideEye className="size-3.5" />
          </p>
          <p className="mt-2 flex items-baseline gap-1.5">
            <span className="text-sm font-bold text-gold-light">KHR</span>
            <span className="text-[26px] font-bold leading-tight tracking-[0.5px] text-white">
              4,182,500
            </span>
          </p>
          <p className="text-xs text-ivory/75">≈ USD 1,031.44</p>
          <span className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-medium text-white">
            <LucideWallet className="size-3" />
            {t("walletCount", { count: WALLETS.length })}
          </span>
        </div>
      </div>

      {/* Wallet Rows */}
      <ul className="hidden w-[290px] shrink-0 flex-col gap-2.5 md:flex xl:w-[320px]">
        {WALLETS.map((wallet) => (
          <li
            key={wallet.nameKey}
            className="flex items-center gap-3 rounded-[20px] bg-card p-2.5 shadow-[0_6px_18px_hsl(var(--foreground)/0.06)]"
          >
            <span
              className={cn(
                "relative grid size-10 shrink-0 place-items-center overflow-hidden rounded-xl text-white shadow-md",
                wallet.tone,
              )}
            >
              {/* Brand colour darkening toward the corner, as in the app */}
              <span className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20" />
              <wallet.icon className="relative size-[18px]" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="flex items-center gap-1.5 text-[13px] font-semibold text-foreground">
                <span className="truncate">{t(wallet.nameKey)}</span>
                {wallet.primary && (
                  <span className="shrink-0 rounded-full bg-primary/10 px-1.5 py-px text-[9px] font-semibold text-primary">
                    {t("primary")}
                  </span>
                )}
              </p>
              <p className="text-[11px] text-muted-faint">{t(wallet.typeKey)}</p>
            </div>
            <div className="shrink-0 text-right">
              <p className="text-[13px] font-semibold text-foreground">KHR {wallet.amount}</p>
              <p className="text-[11px] text-muted-foreground">≈ ${wallet.usd}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* --------------------------------- Receipts --------------------------------- */
// Scan Receipt screen: ScanFrame over the camera, then ReceiptReviewSheet.
export function ReceiptArt() {
  const t = useTranslations("mockup");

  return (
    <div aria-hidden className="brand-app-ui relative flex h-full flex-col">
      {/* Camera Section — dark scrim with the gold-bracketed frame */}
      <div className="relative flex min-h-[15rem] flex-1 items-center justify-center bg-black/40 py-8">
        <div className="relative w-44 rounded-[22px] border border-white/[0.14] p-4">
          {/* Gold corner brackets */}
          <span className="absolute -left-px -top-px size-7 rounded-tl-[22px] border-l-[3px] border-t-[3px] border-gold-core" />
          <span className="absolute -right-px -top-px size-7 rounded-tr-[22px] border-r-[3px] border-t-[3px] border-gold-core" />
          <span className="absolute -bottom-px -left-px size-7 rounded-bl-[22px] border-b-[3px] border-l-[3px] border-gold-core" />
          <span className="absolute -bottom-px -right-px size-7 rounded-br-[22px] border-b-[3px] border-r-[3px] border-gold-core" />

          {/* Paper receipt */}
          <div className="brand-receipt-edge bg-card px-3 pb-5 pt-3 shadow-lg">
            <p className="text-center text-[9px] font-bold uppercase tracking-wide text-foreground">
              Psar Thmei
            </p>
            <div className="mt-3 space-y-1.5">
              {[70, 52, 62, 44].map((width, index) => (
                <div key={index} className="flex items-center justify-between gap-2">
                  <span className="h-1 rounded bg-muted" style={{ width: `${width}%` }} />
                  <span className="h-1 w-6 rounded bg-muted" />
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-dashed border-border pt-2 text-[9px] font-bold text-foreground">
              <span>{t("total")}</span>
              <span>KHR 42,000</span>
            </div>
          </div>

          {/* Sweep line — a soft gold band with a bright core, clipped to the
              frame so the glow never spills past the brackets at either end */}
          <div className="pointer-events-none absolute inset-1 overflow-hidden rounded-[18px]">
            <div className="absolute inset-x-0 top-0 h-full animate-scan-sweep">
              <div className="-mt-[18px] h-9 bg-gradient-to-b from-transparent via-gold-core/25 to-transparent" />
              <div className="-mt-[19px] h-0.5 bg-gradient-to-r from-transparent via-gold-light/90 to-transparent shadow-[0_0_8px_hsl(var(--brand-gold-core)/0.6)]" />
            </div>
          </div>
        </div>
      </div>

      {/* Review Sheet Section */}
      <div className="relative rounded-t-[28px] bg-background px-4 pb-4 pt-2.5">
        <span className="mx-auto block h-1 w-10 rounded-full bg-muted-faint/40" />

        <div className="mt-3 flex items-center gap-3">
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-finance-income/[0.12] text-finance-income">
            <LucideCircleCheckBig className="size-[18px]" />
          </span>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-foreground">{t("reviewReceipt")}</p>
            <p className="truncate text-[11px] text-muted-foreground">{t("reviewSubtitle")}</p>
          </div>
        </div>

        <div className="mt-3 space-y-2">
          {[
            { label: t("merchant"), value: "Psar Thmei", icon: LucideStore },
            { label: t("date"), value: "20 Sep 2026", icon: LucideCalendar },
          ].map((field) => (
            <div key={field.label}>
              <p className="text-[10px] font-medium text-muted-foreground">{field.label}</p>
              <p className="mt-1 flex items-center gap-2 rounded-2xl border border-muted bg-card px-3 py-2 text-xs text-foreground">
                <field.icon className="size-3.5 text-muted-faint" />
                {field.value}
              </p>
            </div>
          ))}
        </div>

        {/* Category chips — the detected one selected */}
        <div className="mt-2.5 flex gap-1.5 overflow-hidden">
          {(["shopping", "foodDining"] as const).map((key, index) => {
            const Icon = CATEGORY[key].icon;
            return (
              <span
                key={key}
                className={cn(
                  "flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-medium",
                  index === 0
                    ? "bg-primary text-primary-foreground"
                    : "border border-muted bg-card text-muted-foreground",
                )}
              >
                <Icon className="size-3" />
                {t(key)}
              </span>
            );
          })}
        </div>

        <p className="mt-3 flex items-center justify-between text-xs">
          <span className="text-muted-foreground">{t("total")}</span>
          <span className="font-bold text-foreground">KHR 42,000</span>
        </p>
        <span className="mt-3 flex h-10 items-center justify-center gap-1.5 rounded-2xl bg-primary text-xs font-semibold text-primary-foreground">
          {t("saveExpense")}
          <LucideCheck className="size-3.5" />
        </span>
      </div>
    </div>
  );
}

/* ------------------------------- Transactions ------------------------------- */
// Add Transaction screen: the amount field with its currency picker, then the
// category chips.
export function TransactionArt() {
  const t = useTranslations("mockup");

  return (
    <div aria-hidden className="brand-app-ui flex h-full flex-col justify-center gap-3 px-5">
      <p className="text-center text-[13px] font-semibold text-foreground">{t("addTransaction")}</p>

      <div>
        <p className="text-[11px] font-medium text-muted-foreground">{t("amount")}</p>
        <div className="mt-1.5 flex items-center gap-3 rounded-2xl border border-muted bg-card p-2">
          <span className="flex items-center gap-1 rounded-xl bg-muted px-2.5 py-2 text-[13px] font-medium text-foreground">
            KHR
            <LucideChevronDown className="size-3.5 text-muted-faint" />
          </span>
          <span className="flex items-center text-2xl font-medium text-foreground">
            25,000
            <span className="ml-0.5 h-6 w-0.5 animate-caret-blink rounded bg-primary" />
          </span>
        </div>
      </div>

      <div>
        <p className="text-[11px] font-medium text-muted-foreground">{t("category")}</p>
        <div className="mt-1.5 flex gap-1.5 overflow-hidden">
          {(["foodDining", "transport", "shopping"] as const).map((key, index) => {
            const Icon = CATEGORY[key].icon;
            return (
              <span
                key={key}
                className={cn(
                  "flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1.5 text-[11px] font-medium",
                  index === 0
                    ? "bg-primary text-primary-foreground"
                    : "border border-muted bg-card text-muted-foreground",
                )}
              >
                <Icon className="size-3" />
                {t(key)}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------- Budgets --------------------------------- */
// Budget screen: "Budget by Category" rows.
export function BudgetArt() {
  const t = useTranslations("mockup");

  return (
    <div aria-hidden className="brand-app-ui flex h-full flex-col justify-center gap-1.5 px-5">
      <p className="px-1 text-[13px] font-semibold text-foreground">{t("budgetByCategory")}</p>
      {BUDGETS.map((row) => {
        const Icon = CATEGORY[row.key].icon;
        return (
          <div
            key={row.key}
            className="flex items-center gap-3 rounded-[18px] border border-muted bg-card px-2 py-1.5"
          >
            <span
              className={cn(
                "grid size-8 shrink-0 place-items-center rounded-full",
                CATEGORY[row.key].tone,
              )}
            >
              <Icon className="size-4" />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline justify-between gap-2">
                <p className="truncate text-xs font-semibold text-foreground">{t(row.key)}</p>
                <p className="shrink-0 text-[11px] font-semibold text-muted-foreground">
                  {row.percent}%
                </p>
              </div>
              <p className="text-[10px] text-muted-faint">
                KHR <span className="font-bold text-foreground">{row.spent}</span> / {row.limit}
              </p>
              <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-glow to-primary"
                  style={{ width: `${row.percent}%` }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ---------------------------------- Savings --------------------------------- */
// Savings Goals screen: the emerald summary card and a goal card.
export function SavingsArt() {
  const t = useTranslations("mockup");

  return (
    <div aria-hidden className="brand-app-ui flex h-full flex-col justify-center gap-2.5 px-5">
      {/* Summary Card */}
      <div className="brand-emerald-surface rounded-[20px] p-4 text-white shadow-[0_12px_24px_hsl(var(--brand-emerald-core)/0.2)]">
        <p className="flex items-center justify-between text-[11px] font-medium text-ivory/80">
          {t("totalSaved")}
          <LucidePiggyBank className="size-4 text-ivory" />
        </p>
        <p className="mt-1 flex items-baseline gap-1.5">
          <span className="text-xs font-bold text-gold-light">KHR</span>
          <span className="text-xl font-bold">2,720,000</span>
        </p>
        <p className="text-[11px] text-ivory/70">{t("targetOf", { amount: "4,000,000" })}</p>
        <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-white/15">
          <div
            className="h-full rounded-full bg-gradient-to-r from-gold-light to-gold-core"
            style={{ width: `${SAVINGS_PERCENT}%` }}
          />
        </div>
      </div>

      {/* Goal Card */}
      <div className="rounded-[20px] bg-card p-3 shadow-[0_6px_18px_hsl(var(--foreground)/0.06)]">
        <div className="flex items-center gap-3">
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-gold-core/[0.12] text-gold-core">
            <LucideBike className="size-4" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[13px] font-bold text-foreground">{t("savingsGoal")}</p>
            <p className="text-[11px] text-muted-faint">
              KHR <span className="font-bold text-foreground">2,720,000</span> / 4,000,000
            </p>
          </div>
          <p className="text-[13px] font-bold text-gold-core">{SAVINGS_PERCENT}%</p>
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-gradient-to-r from-gold-core/70 to-gold-core"
            style={{ width: `${SAVINGS_PERCENT}%` }}
          />
        </div>
      </div>
    </div>
  );
}

/* --------------------------------- Analytics -------------------------------- */
// Analytics screen: the Expense Breakdown donut, and on wide tiles the Daily
// Expense Trend line beside it.
export function AnalyticsArt() {
  const t = useTranslations("mockup");

  // Running start of each donut slice, in percent of the ring.
  const offsets = BREAKDOWN.reduce<number[]>(
    (starts, _, index) => [...starts, index === 0 ? 0 : starts[index - 1] + BREAKDOWN[index - 1].percent],
    [],
  );

  const trendMax = Math.max(...DAILY_TREND);
  const trendPoints = DAILY_TREND.map(
    (value, index) => `${(index / (DAILY_TREND.length - 1)) * 200},${76 - (value / trendMax) * 68}`,
  );

  return (
    <div aria-hidden className="brand-app-ui flex h-full items-center justify-center gap-4 px-4 sm:px-5">
      {/* Expense Breakdown Card */}
      <div className="w-full max-w-[420px] rounded-[20px] bg-card p-4 shadow-[0_6px_18px_hsl(var(--foreground)/0.06)]">
        <p className="text-[13px] font-semibold text-foreground">{t("expenseBreakdown")}</p>
        <div className="mt-3 flex items-center gap-4">
          {/* Donut */}
          <div className="relative grid size-28 shrink-0 place-items-center">
            <svg viewBox="0 0 120 120" className="absolute inset-0 -rotate-90">
              {BREAKDOWN.map((slice, index) => (
                <circle
                  key={slice.key}
                  cx="60"
                  cy="60"
                  r="48"
                  fill="none"
                  strokeWidth="16"
                  pathLength={100}
                  strokeDasharray={`${slice.percent} ${100 - slice.percent}`}
                  strokeDashoffset={-offsets[index]}
                  className={CATEGORY[slice.key].stroke}
                />
              ))}
            </svg>
            <div className="text-center leading-tight">
              <p className="text-[8px] text-muted-faint">{t("totalExpense")}</p>
              <p className="text-[9px] font-semibold text-muted-foreground">KHR</p>
              <p className="text-[13px] font-bold text-foreground">968,300</p>
            </div>
          </div>

          {/* Legend */}
          <ul className="min-w-0 flex-1 space-y-1.5">
            {BREAKDOWN.map((slice) => (
              <li key={slice.key} className="flex items-start gap-2">
                <span className={cn("mt-1 size-2 shrink-0 rounded-full", CATEGORY[slice.key].dot)} />
                <span className="min-w-0 flex-1">
                  <span className="block text-[11px] font-semibold leading-tight text-foreground">
                    {t(slice.key)}
                  </span>
                  <span className="block text-[10px] text-muted-faint">KHR {slice.amount}</span>
                </span>
                <span className="text-[11px] font-bold text-foreground">{slice.percent}%</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Daily Trend Card */}
      <div className="hidden w-[250px] shrink-0 rounded-[20px] bg-card p-4 shadow-[0_6px_18px_hsl(var(--foreground)/0.06)] xl:block">
        <p className="text-[13px] font-semibold text-foreground">{t("dailyTrend")}</p>
        <svg viewBox="0 0 200 80" className="mt-4 h-24 w-full overflow-visible">
          {[8, 30, 52, 76].map((y) => (
            <line key={y} x1="0" x2="200" y1={y} y2={y} className="stroke-muted" strokeWidth="1" />
          ))}
          <polyline
            points={trendPoints.join(" ")}
            fill="none"
            strokeWidth="2.5"
            strokeLinejoin="round"
            className="stroke-primary"
          />
          {trendPoints.map((point) => {
            const [x, y] = point.split(",");
            return <circle key={point} cx={x} cy={y} r="2.2" className="fill-primary" />;
          })}
        </svg>
      </div>
    </div>
  );
}
