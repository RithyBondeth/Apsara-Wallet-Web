import type { LucideIcon } from "lucide-react";

import type { TLegalDocumentByLanguage } from "@/utils/interfaces/legal/legal.interface";

export interface ILegalDocumentViewProps {
  /** Both language editions — the active one is picked from the language store. */
  document: TLegalDocumentByLanguage;
  /** Zero-padded index shown in the page eyebrow, e.g. "01". */
  pageNumber: string;
  /** Section id → icon. Sections without an entry fall back to a generic icon. */
  icons: Record<string, LucideIcon>;
}
