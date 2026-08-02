import {
  LucideBus,
  LucideCoffee,
  LucideShoppingBasket,
  LucideWallet,
} from "lucide-react";

import { cn } from "@/lib/utils";
import type {
  ILandingPhoneMockupProps,
  IMockTransaction,
} from "@/components/landing/landing-phone-mockup/props";

/* --------------------------------- Constants -------------------------------- */
// Illustrative figures for the marketing mockup only — this is a static picture
// of the dashboard, not live data.
const MOCK_TRANSACTIONS: IMockTransaction[] = [
  {
    label: "Psar Thmei market",
    category: "Groceries",
    amount: "−៛ 42,000",
    direction: "expense",
    icon: LucideShoppingBasket,
  },
  {
    label: "Brown Coffee",
    category: "Dining",
    amount: "−៛ 9,500",
    direction: "expense",
    icon: LucideCoffee,
  },
  {
    label: "PassApp ride",
    category: "Transport",
    amount: "−៛ 6,000",
    direction: "expense",
    icon: LucideBus,
  },
];

export default function LandingPhoneMockup({
  className,
}: ILandingPhoneMockupProps) {
  /* -------------------------------- Render UI ------------------------------- */
  return (
    <div
      aria-hidden
      className={cn(
        "w-full max-w-[320px] rounded-[2.5rem] border border-white/15 bg-white/5 p-3 shadow-2xl backdrop-blur-sm",
        className,
      )}
    >
      <div className="overflow-hidden rounded-[2rem] bg-background">
        {/* Balance Card Section */}
        <div className="brand-emerald-surface relative px-5 pb-8 pt-7">
          <div className="brand-grid-inverted pointer-events-none absolute inset-0" />

          <div className="relative flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
            <LucideWallet className="size-3.5" />
            Total balance
          </div>

          <p className="brand-gold-foil-animated relative mt-3 text-3xl font-extrabold tracking-tight">
            ៛ 4,182,500
          </p>

          <div className="relative mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-white/10 px-3 py-2.5">
              <p className="text-[10px] uppercase tracking-wider text-white/55">
                Income
              </p>
              <p className="mt-0.5 text-sm font-semibold text-white">
                ៛ 2,400,000
              </p>
            </div>
            <div className="rounded-xl bg-white/10 px-3 py-2.5">
              <p className="text-[10px] uppercase tracking-wider text-white/55">
                Spent
              </p>
              <p className="mt-0.5 text-sm font-semibold text-white">
                ៛ 968,300
              </p>
            </div>
          </div>
        </div>

        {/* Budget Bar Section */}
        <div className="border-b border-border px-5 py-4">
          <div className="flex items-baseline justify-between">
            <p className="text-xs font-semibold text-foreground">
              Groceries budget
            </p>
            <p className="text-xs tabular-nums text-muted-foreground">62%</p>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
            <div className="h-full w-[62%] rounded-full bg-primary" />
          </div>
        </div>

        {/* Recent Transactions Section */}
        <ul className="px-5 py-2">
          {MOCK_TRANSACTIONS.map((transaction) => (
            <li
              key={transaction.label}
              className="flex items-center gap-3 border-b border-border/70 py-3 last:border-b-0"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-muted text-muted-foreground">
                <transaction.icon className="size-4" strokeWidth={1.75} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-xs font-semibold text-foreground">
                  {transaction.label}
                </span>
                <span className="block text-[11px] text-muted-foreground">
                  {transaction.category}
                </span>
              </span>
              <span
                className={cn(
                  "shrink-0 text-xs font-semibold tabular-nums",
                  transaction.direction === "income"
                    ? "text-finance-income"
                    : "text-finance-expense",
                )}
              >
                {transaction.amount}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
