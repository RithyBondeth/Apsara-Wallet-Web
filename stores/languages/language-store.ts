import { create } from "zustand";
import { persist } from "zustand/middleware";

import { STORE_PERSIST_KEYS } from "@/stores/shared/persist-keys";
import { safePersistStorage } from "@/stores/shared/persist-storage";
import { LANGUAGE_COOKIE, type TLanguage } from "@/utils/types/app/language.type";

/* ------------------------------- Store State ------------------------------ */
// ── Language State ───────────────────────────────────────────
type TLanguageState = {
  language: TLanguage;
  setLanguage: (language: TLanguage) => void;
  toggleLanguage: () => void;
};

/* --------------------------------- Helper --------------------------------- */
// Mirrors the choice into a cookie so the server can render the correct
// `<html lang>` and metadata on the next request, before hydration.
function syncLanguageCookie(language: TLanguage) {
  if (typeof document === "undefined") return;

  const oneYearInSeconds = 60 * 60 * 24 * 365;
  document.cookie = `${LANGUAGE_COOKIE}=${language}; path=/; max-age=${oneYearInSeconds}; samesite=lax`;
}

/* ---------------------------------- Store --------------------------------- */
export const useLanguageStore = create<TLanguageState>()(
  persist(
    (set, get) => ({
      language: "en",
      setLanguage: (language: TLanguage) => {
        syncLanguageCookie(language);
        set({ language });
      },
      toggleLanguage: () => {
        const next: TLanguage = get().language === "en" ? "km" : "en";
        syncLanguageCookie(next);
        set({ language: next });
      },
    }),
    {
      name: STORE_PERSIST_KEYS.language,
      storage: safePersistStorage,
    },
  ),
);
