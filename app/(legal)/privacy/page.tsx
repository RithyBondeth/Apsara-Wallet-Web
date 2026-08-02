import type { Metadata } from "next";
import { cookies } from "next/headers";

import { PRIVACY_DOCUMENT } from "@/utils/constants/legal/privacy.constant";
import { LANGUAGE_COOKIE, resolveLanguage } from "@/utils/types/app/language.type";

import { PrivacyContent } from "./_content";

export async function generateMetadata(): Promise<Metadata> {
  const language = resolveLanguage((await cookies()).get(LANGUAGE_COOKIE)?.value);
  const document = PRIVACY_DOCUMENT[language];

  return {
    title: document.pageTitle,
    description: document.intro,
    alternates: { canonical: "/privacy" },
  };
}

export default function PrivacyPage() {
  return <PrivacyContent />;
}
