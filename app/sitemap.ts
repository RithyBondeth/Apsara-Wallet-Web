import type { MetadataRoute } from "next";

import { SITE } from "@/utils/constants/site.constant";

/* --------------------------------- Constants -------------------------------- */
// Only real, crawlable routes belong here — in-page anchors like /#features are
// part of the home page, not separate URLs.
const SITEMAP_PATHS = [
  { path: "/", priority: 1 },
  { path: "/privacy", priority: 0.8 },
  { path: "/terms", priority: 0.8 },
  { path: "/support", priority: 0.7 },
  { path: "/delete-account", priority: 0.6 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return SITEMAP_PATHS.map((entry) => ({
    url: `${SITE.url}${entry.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: entry.priority,
  }));
}
