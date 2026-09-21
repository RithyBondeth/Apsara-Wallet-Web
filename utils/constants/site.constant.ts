/* ----------------------------------- Site ---------------------------------- */
export const SITE = {
  name: "Apsara Wallet",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://apsarawallet.com",
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "support@apsarawallet.com",
  // Kept in step with AppConstants.appVersion in the mobile app.
  appVersion: "1.0.0",
} as const;

/* -------------------------------- Store Links ------------------------------- */
// Empty until the listings go live — the download buttons read these and fall
// back to a disabled "coming soon" state, so no link ever 404s.
export const STORE_LINKS = {
  playStore: process.env.NEXT_PUBLIC_PLAY_STORE_URL ?? "",
  appStore: process.env.NEXT_PUBLIC_APP_STORE_URL ?? "",
} as const;

/* --------------------------------- Routing --------------------------------- */
export const ROUTES = {
  home: "/",
  features: "/#features",
  howItWorks: "/#how-it-works",
  security: "/#security",
  faq: "/#faq",
  download: "/#download",
  support: "/support",
  privacy: "/privacy",
  terms: "/terms",
  deleteAccount: "/delete-account",
  resetPassword: "/reset-password",
} as const;

/** Header navigation, in display order. Labels resolve from the `header` namespace. */
export const NAV_LINKS = [
  { key: "features", href: ROUTES.features },
  { key: "howItWorks", href: ROUTES.howItWorks },
  { key: "security", href: ROUTES.security },
  { key: "support", href: ROUTES.support },
] as const;

/* ---------------------------------- FAQ ----------------------------------- */
// Shared by the landing FAQ section and the FAQPage structured data, so the two
// can never drift. Each key prefixes the i18n lookups `${key}Title`/`${key}Body`
// in the `faq` namespace.
export const LANDING_FAQ_KEYS = [
  "price",
  "bank",
  "currency",
  "offline",
  "receipts",
  "exit",
] as const;
