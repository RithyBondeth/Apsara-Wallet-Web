import type { MetadataRoute } from "next";

import { SITE } from "@/utils/constants/site.constant";

// The marketing site is not an installable app — this exists so browsers and
// link crawlers pick up the brand name, icon and theme colour from one place.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} — Personal finance that speaks Khmer`,
    short_name: SITE.name,
    description:
      "A personal finance app built for Cambodia — multi-wallet, bilingual, and private by default.",
    start_url: "/",
    display: "browser",
    background_color: "#F8FAFC",
    theme_color: "#0B5B3D",
    icons: [
      { src: "/favicon.png", sizes: "any", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      { src: "/app-icon.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
