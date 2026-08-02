import type { ReactNode } from "react";

/** A single entry in the sticky table of contents. */
export interface IStaticTocEntry {
  id: string;
  label: string;
}

export interface IStaticPageShellProps {
  /** Zero-padded index shown in the eyebrow, e.g. "01". */
  pageNumber: string;
  pageTotal?: string;
  title: string;
  subtitle: string;
  /** Small line under the subtitle — typically the "last updated" stamp. */
  meta?: ReactNode;
  tocHeading: string;
  toc: readonly IStaticTocEntry[];
  children: ReactNode;
}

export interface IStaticSectionProps {
  id: string;
  number: string;
  icon: ReactNode;
  title: string;
  children: ReactNode;
}

export interface IStaticBulletProps {
  children: ReactNode;
}

export interface IStaticStepProps {
  number: string;
  children: ReactNode;
}

export interface IStaticNoteProps {
  icon?: ReactNode;
  children: ReactNode;
  /** `warning` tints the note in the expense red used for destructive actions. */
  tone?: "default" | "warning";
}
