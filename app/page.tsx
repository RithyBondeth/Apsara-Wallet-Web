import type { Metadata } from "next";
import { cookies } from "next/headers";

import StructuredData from "@/components/utils/structured-data";
import { SITE } from "@/utils/constants/site.constant";
import { buildHomeStructuredData } from "@/utils/constants/structured-data.constant";
import { LANGUAGE_COOKIE, resolveLanguage } from "@/utils/types/app/language.type";

import { HomeContent } from "./_content";

/* --------------------------------- Constants -------------------------------- */
const COPY = {
  en: {
    title: `${SITE.name} — Personal finance that speaks Khmer`,
    description:
      "Track spending across multiple wallets in riel and dollars, scan receipts on your device, set budgets that hold and see where your money goes. Built in Cambodia.",
  },
  km: {
    title: `${SITE.name} — ការគ្រប់គ្រងហិរញ្ញវត្ថុផ្ទាល់ខ្លួន ជាភាសាខ្មែរ`,
    description:
      "តាមដានការចំណាយក្នុងកាបូបច្រើន ទាំងរៀល និងដុល្លារ ស្កេនវិក្កយបត្រនៅលើឧបករណ៍របស់អ្នក កំណត់ថវិកា និងមើលឃើញថាលុយរបស់អ្នកទៅណា។ បង្កើតឡើងនៅកម្ពុជា។",
  },
} as const;

export async function generateMetadata(): Promise<Metadata> {
  const language = resolveLanguage((await cookies()).get(LANGUAGE_COOKIE)?.value);
  const copy = COPY[language];

  return {
    // `absolute` so the root layout's `%s — Apsara Wallet` template does not
    // append the brand name to a title that already carries it.
    title: { absolute: copy.title },
    description: copy.description,
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      url: SITE.url,
      locale: language === "km" ? "km_KH" : "en_US",
      title: copy.title,
      description: copy.description,
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
    },
  };
}

export default async function IndexPage() {
  /* ---------------------------------- Utils --------------------------------- */
  const language = resolveLanguage((await cookies()).get(LANGUAGE_COOKIE)?.value);

  /* -------------------------------- Render UI ------------------------------- */
  return (
    <>
      {/* Structured Data Section */}
      <StructuredData data={buildHomeStructuredData(language)} />

      {/* Landing Sections */}
      <HomeContent />
    </>
  );
}
