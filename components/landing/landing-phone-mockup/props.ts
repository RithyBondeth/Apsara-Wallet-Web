import type { LucideIcon } from "lucide-react";

export interface ILandingPhoneMockupProps {
  className?: string;
}

export interface IMockTransaction {
  label: string;
  category: string;
  amount: string;
  /** Drives the amount colour: income is emerald, expense is red. */
  direction: "income" | "expense";
  icon: LucideIcon;
}
