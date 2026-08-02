import type { Metadata } from "next";
import { cookies } from "next/headers";

import { LANGUAGE_COOKIE, resolveLanguage } from "@/utils/types/app/language.type";

import { SupportContent } from "./_content";

export async function generateMetadata(): Promise<Metadata> {
  const language = resolveLanguage((await cookies()).get(LANGUAGE_COOKIE)?.value);

  return {
    title: language === "km" ? "ជំនួយ" : "Support",
    description:
      language === "km"
        ? "ជំនួយសម្រាប់ Apsara Wallet — កំណត់លេខសម្ងាត់ឡើងវិញ ការប្ដូររូបិយវត្ថុ ការប្រើដោយគ្មានអ៊ីនធឺណិត ការនាំចេញទិន្នន័យ និងការលុបគណនី។"
        : "Help with Apsara Wallet — password resets, currency conversion, offline use, exporting your data and deleting your account.",
    alternates: { canonical: "/support" },
  };
}

export default function SupportPage() {
  return <SupportContent />;
}
