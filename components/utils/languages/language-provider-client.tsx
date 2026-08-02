"use client";

import { NextIntlClientProvider } from "next-intl";
import { useEffect, useState } from "react";

import enMessages from "@/language/en.json";
import kmMessages from "@/language/km.json";
import { useLanguageStore } from "@/stores/languages/language-store";
import type { TLanguage } from "@/utils/types/app/language.type";

/* --------------------------------- Helper --------------------------------- */
const messages = {
  en: enMessages,
  km: kmMessages,
};

export function LanguageProviderClient({
  children,
  defaultLanguage,
}: {
  children: React.ReactNode;
  defaultLanguage: TLanguage;
}) {
  /* ------------------------------- Store State ------------------------------ */
  const { language, setLanguage } = useLanguageStore();

  /* -------------------------------- All States ------------------------------ */
  const [mounted, setMounted] = useState<boolean>(false);

  /* --------------------------------- Effects -------------------------------- */
  useEffect(() => {
    setLanguage(defaultLanguage);
    setMounted(true);
  }, [defaultLanguage, setLanguage]);

  /* ---------------------------------- Utils --------------------------------- */
  // Before mount we must render exactly what the server rendered, otherwise the
  // persisted store would cause a hydration mismatch.
  const activeLocale = mounted ? language : defaultLanguage;

  /* -------------------------------- Render UI ------------------------------- */
  return (
    <NextIntlClientProvider
      locale={activeLocale}
      messages={messages[activeLocale]}
      timeZone="Asia/Phnom_Penh"
    >
      {children}
    </NextIntlClientProvider>
  );
}
