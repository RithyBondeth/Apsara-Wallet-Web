import type { Metadata } from "next";
import { cookies } from "next/headers";

import { TERMS_DOCUMENT } from "@/utils/constants/legal/terms.constant";
import { LANGUAGE_COOKIE, resolveLanguage } from "@/utils/types/app/language.type";

import { TermsContent } from "./_content";

export async function generateMetadata(): Promise<Metadata> {
  const language = resolveLanguage((await cookies()).get(LANGUAGE_COOKIE)?.value);
  const document = TERMS_DOCUMENT[language];

  return {
    title: document.pageTitle,
    description: document.intro,
    alternates: { canonical: "/terms" },
  };
}

export default function TermsPage() {
  return <TermsContent />;
}
