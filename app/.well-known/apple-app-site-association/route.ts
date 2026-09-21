import { NextResponse } from "next/server";

import { APP_LINK_PATHS, MOBILE_APP } from "@/utils/constants/app-links.constant";

/**
 * iOS Universal Links association file.
 *
 * Apple's CDN fetches this at install time and requires: no redirect, a JSON
 * body, and `application/json` even though the path has no extension. While
 * APPLE_TEAM_ID is unset we 404 rather than serve a placeholder — a wrong
 * appID is cached by Apple's CDN for a long time and is far harder to undo
 * than a missing file.
 */
export const dynamic = "force-static";

export function GET() {
  if (!MOBILE_APP.appleTeamId) {
    return new NextResponse(null, { status: 404 });
  }
  const appID = `${MOBILE_APP.appleTeamId}.${MOBILE_APP.bundleId}`;
  const body = {
    applinks: {
      details: [
        {
          appIDs: [appID],
          components: APP_LINK_PATHS.map((path) => ({
            "/": path,
            comment: `Open ${path} in the app`,
          })),
        },
      ],
    },
    // Lets iOS offer saved passwords for this site inside the app.
    webcredentials: { apps: [appID] },
  };
  return NextResponse.json(body, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
