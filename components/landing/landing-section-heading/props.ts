import type { ReactNode } from "react";

export interface ILandingSectionHeadingProps {
  badge: string;
  heading: ReactNode;
  description?: ReactNode;
  className?: string;
  /** `center` for sections whose content below is centred too. */
  align?: "left" | "center";
  /** `dark` for the emerald sections, where the light palette disappears. */
  tone?: "light" | "dark";
}
