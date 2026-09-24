import type { Metadata } from "next";
import { cookies } from "next/headers";

import { DEVELOPER } from "@/utils/constants/site.constant";
import { LANGUAGE_COOKIE, resolveLanguage } from "@/utils/types/app/language.type";

import { AboutContent } from "./_content";

export async function generateMetadata(): Promise<Metadata> {
  const language = resolveLanguage((await cookies()).get(LANGUAGE_COOKIE)?.value);

  return {
    title: language === "km" ? "អំពីយើង" : "About",
    description:
      language === "km"
        ? `Apsara Wallet ត្រូវបានបង្កើត និងចេញផ្សាយដោយ ${DEVELOPER.name} ជាអ្នកអភិវឌ្ឍន៍ឯករាជ្យនៅភ្នំពេញ ប្រទេសកម្ពុជា។ ព័ត៌មានទំនាក់ទំនង ព័ត៌មានកម្មវិធី និងគោលការណ៍។`
        : `Apsara Wallet is built and published by ${DEVELOPER.name}, an independent developer in Phnom Penh, Cambodia. Contact details, app facts and policies.`,
    alternates: { canonical: "/about" },
  };
}

export default function AboutPage() {
  return <AboutContent />;
}
