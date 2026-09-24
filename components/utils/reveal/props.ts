import type { ReactNode } from "react";

export interface IRevealProps {
  className?: string;
  children: ReactNode;
}

/** Visibility of a reveal block. `idle` renders exactly as the server sent it. */
export type TRevealState = "idle" | "hidden" | "shown";
