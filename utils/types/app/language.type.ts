/** The two languages Apsara Wallet ships in, matching the mobile app's l10n. */
export type TLanguage = "en" | "km";

export const SUPPORTED_LANGUAGES: readonly TLanguage[] = ["en", "km"] as const;

/** Cookie the server reads so the first paint matches the stored preference. */
export const LANGUAGE_COOKIE = "language";

/** Narrows an arbitrary string (cookie value, query param) to a TLanguage. */
export function resolveLanguage(value: string | undefined): TLanguage {
  return value === "km" ? "km" : "en";
}
