import { NextResponse } from "next/server";

import { MOBILE_APP } from "@/utils/constants/app-links.constant";

/**
 * Android App Links association file.
 *
 * Google's verifier fetches this over HTTPS with no redirects and needs
 * `application/json`. 404 while no fingerprint is configured, for the same
 * reason as the Apple file: a wrong fingerprint silently disables
 * verification for every install until the next re-verify.
 */
export const dynamic = "force-static";

export function GET() {
  if (MOBILE_APP.androidCertSha256.length === 0) {
    return new NextResponse(null, { status: 404 });
  }
  const body = [
    {
      relation: ["delegate_permission/common.handle_all_urls"],
      target: {
        namespace: "android_app",
        package_name: MOBILE_APP.bundleId,
        sha256_cert_fingerprints: MOBILE_APP.androidCertSha256,
      },
    },
  ];
  return NextResponse.json(body, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
