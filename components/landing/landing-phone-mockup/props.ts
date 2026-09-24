import type { LucideIcon } from "lucide-react";

export interface ILandingPhoneMockupProps {
  /**
   * Size the device with `[--phone-scale:<n>]` (responsive variants work):
   * the phone is drawn at the app's native 402pt screen width and scaled by n.
   */
  className?: string;
}

export interface IMockTransaction {
  /** The transaction title — a merchant name, so it is not translated. */
  title: string;
  /** Key in the `mockup` namespace for the "Today, 8:15 AM" line. */
  timeKey: "timeToday" | "timeYesterday" | "timeEarlier";
  /** Riel amount, already grouped: "25,000". */
  amount: string;
  direction: "income" | "expense";
  icon: LucideIcon;
  /** Tile classes for the category colour (TxCategory.color in the app). */
  tone: string;
}
