/* -------------------------------- App Links -------------------------------- */
// Identity of the mobile app, for the Universal Links (iOS) and App Links
// (Android) association files served from /.well-known. The bundle id and
// package name are permanent (see the mobile repo's RELEASE.md); the two
// signing identifiers are per-account secrets read from the environment.
export const MOBILE_APP = {
  /** iOS PRODUCT_BUNDLE_IDENTIFIER and Android applicationId — identical. */
  bundleId: "com.apsarawallet.app",
  /** Apple Developer Team ID (App Store Connect → Membership). */
  appleTeamId: process.env.APPLE_TEAM_ID?.trim() ?? "",
  /**
   * SHA-256 fingerprints of the Android signing certificates, comma-separated.
   * With Play App Signing this is the *Play-signed* certificate from Play
   * Console → App integrity, plus the upload key for local release builds.
   */
  androidCertSha256: (process.env.ANDROID_CERT_SHA256 ?? "")
    .split(",")
    .map((s) => s.trim().toUpperCase())
    .filter(Boolean),
} as const;

/** Paths the app claims. Anything else on the domain stays in the browser. */
export const APP_LINK_PATHS = ["/reset-password"] as const;
