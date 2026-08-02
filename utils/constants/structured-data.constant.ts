import enMessages from "@/language/en.json";
import kmMessages from "@/language/km.json";
import {
  LANDING_FAQ_KEYS,
  SITE,
  STORE_LINKS,
} from "@/utils/constants/site.constant";
import type { TLanguage } from "@/utils/types/app/language.type";

/* --------------------------------- Constants -------------------------------- */
const MESSAGES = {
  en: enMessages,
  km: kmMessages,
};

/* ---------------------------------- Utils ---------------------------------- */
/**
 * schema.org description of the home page, emitted as JSON-LD.
 *
 * The FAQ entries are read from the same catalogs the visible section renders,
 * so the rich result and the page can never say different things — which is
 * what Google penalises FAQ markup for.
 */
export function buildHomeStructuredData(language: TLanguage) {
  const faq = MESSAGES[language].faq as Record<string, string>;

  // Empty until the listings go live; an empty `installUrl` is omitted rather
  // than published as a dead link.
  const installUrls = [STORE_LINKS.playStore, STORE_LINKS.appStore].filter(
    Boolean,
  );

  const organization = {
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/logo.png`,
    email: SITE.supportEmail,
    areaServed: { "@type": "Country", name: "Cambodia" },
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE.url}/#app`,
        name: SITE.name,
        url: SITE.url,
        applicationCategory: "FinanceApplication",
        operatingSystem: "Android, iOS",
        softwareVersion: SITE.appVersion,
        inLanguage: ["en", "km"],
        description: MESSAGES[language].hero.description,
        publisher: { "@id": organization["@id"] },
        ...(installUrls.length > 0 ? { installUrl: installUrls } : {}),
        // Free to use — stated explicitly so the listing is not shown as paid.
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE.url}/#faq`,
        mainEntity: LANDING_FAQ_KEYS.map((key) => ({
          "@type": "Question",
          name: faq[`${key}Title`],
          acceptedAnswer: {
            "@type": "Answer",
            text: faq[`${key}Body`],
          },
        })),
      },
    ],
  };
}
