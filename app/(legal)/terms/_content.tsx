"use client";

import {
  LucideBanknote,
  LucideCircleSlash,
  LucideHandshake,
  LucideLogOut,
  LucideRefreshCw,
  LucideScale,
  LucideUserCog,
} from "lucide-react";

import LegalDocumentView from "@/components/static-content/legal-document";
import { TERMS_DOCUMENT } from "@/utils/constants/legal/terms.constant";

/* --------------------------------- Constants -------------------------------- */
const TERMS_ICONS = {
  acceptance: LucideHandshake,
  "your-account": LucideUserCog,
  "use-of-service": LucideCircleSlash,
  "financial-data": LucideBanknote,
  availability: LucideRefreshCw,
  liability: LucideScale,
  termination: LucideLogOut,
};

export function TermsContent() {
  /* -------------------------------- Render UI ------------------------------- */
  return (
    <LegalDocumentView
      document={TERMS_DOCUMENT}
      pageNumber="02"
      icons={TERMS_ICONS}
    />
  );
}
