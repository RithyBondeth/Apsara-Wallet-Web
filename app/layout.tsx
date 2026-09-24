import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";

import { LanguageProvider } from "@/components/utils/languages/language-provider";
import { LANGUAGE_COOKIE, resolveLanguage } from "@/utils/types/app/language.type";
import { SITE } from "@/utils/constants/site.constant";

// Same pairing as the mobile app (AppFont): Ubuntu for Latin, with Kantumruy
// Pro picking up every Khmer glyph. It is a variable font, so one file carries
// every weight the site uses. Its Latin faces are declared too but never
// downloaded: Ubuntu comes first in the stack, so no Latin text falls through.
import "@fontsource-variable/kantumruy-pro/wght.css";
import "@fontsource/ubuntu/latin-400.css";
import "@fontsource/ubuntu/latin-500.css";
import "@fontsource/ubuntu/latin-700.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    template: `%s — ${SITE.name}`,
    default: `${SITE.name} — Personal finance that speaks Khmer`,
  },
  description:
    "Track spending across multiple wallets in riel and dollars, scan receipts on your device, set budgets and see where your money goes. Built in Cambodia.",
  applicationName: SITE.name,
  keywords: [
    "Apsara Wallet",
    "expense tracker Cambodia",
    "personal finance Khmer",
    "budget app KHR",
    "wallet app Cambodia",
  ],
  icons: {
    icon: "/favicon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    url: SITE.url,
    title: `${SITE.name} — Personal finance that speaks Khmer`,
    description:
      "A personal finance app built for Cambodia — multi-wallet, bilingual, and private by default.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Personal finance that speaks Khmer`,
    description:
      "A personal finance app built for Cambodia — multi-wallet, bilingual, and private by default.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0B5B3D",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  /* ---------------------------------- Utils --------------------------------- */
  // Read on the server so the first paint already carries the right `lang`,
  // which drives the Khmer line-height rule in globals.css.
  const language = resolveLanguage((await cookies()).get(LANGUAGE_COOKIE)?.value);

  /* -------------------------------- Render UI ------------------------------- */
  return (
    /* ------------------------------- Main Layout ------------------------------ */
    // data-scroll-behavior tells Next.js the page scrolls smoothly (see
    // globals.css), so it skips the glide when a navigation resets scroll.
    <html lang={language} dir="ltr" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body
        className="antialiased"
        style={{ fontFamily: "Ubuntu, 'Kantumruy Pro Variable', sans-serif" }}
        suppressHydrationWarning
      >
        {/* Language Provider Section */}
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
