import { cookies } from "next/headers";

import { LanguageProviderClient } from "@/components/utils/languages/language-provider-client";
import { LANGUAGE_COOKIE, resolveLanguage } from "@/utils/types/app/language.type";

export async function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  /* ---------------------------------- Utils --------------------------------- */
  const language = resolveLanguage((await cookies()).get(LANGUAGE_COOKIE)?.value);

  /* -------------------------------- Render UI ------------------------------- */
  return (
    <LanguageProviderClient defaultLanguage={language}>
      {children}
    </LanguageProviderClient>
  );
}
