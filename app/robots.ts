import type { MetadataRoute } from "next";

import { SITE } from "@/utils/constants/site.constant";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
