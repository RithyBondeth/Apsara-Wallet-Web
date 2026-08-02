"use client";

import {
  LucideDatabase,
  LucideCpu,
  LucideLock,
  LucideRefreshCw,
  LucideServer,
  LucideUserCheck,
  LucideWorkflow,
} from "lucide-react";

import LegalDocumentView from "@/components/static-content/legal-document";
import { PRIVACY_DOCUMENT } from "@/utils/constants/legal/privacy.constant";

/* --------------------------------- Constants -------------------------------- */
const PRIVACY_ICONS = {
  "information-we-collect": LucideDatabase,
  "how-we-use": LucideWorkflow,
  security: LucideLock,
  "on-device": LucideCpu,
  "your-rights": LucideUserCheck,
  retention: LucideServer,
  changes: LucideRefreshCw,
};

export function PrivacyContent() {
  /* -------------------------------- Render UI ------------------------------- */
  return (
    <LegalDocumentView
      document={PRIVACY_DOCUMENT}
      pageNumber="01"
      icons={PRIVACY_ICONS}
    />
  );
}
