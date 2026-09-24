import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { SITE } from "@/utils/constants/site.constant";

/* --------------------------------- Constants -------------------------------- */
export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";
export const OG_ALT = `${SITE.name} — personal finance built for Cambodia`;

// The brand palette, duplicated here as literals because satori resolves no CSS
// custom properties. Keep in step with globals.css.
const EMERALD_GLOW = "#127A52";
const EMERALD_CORE = "#0B5B3D";
const EMERALD_DEEP = "#063D28";
const GOLD_CORE = "#D4AF37";

const STATS = ["Multi-wallet", "KHR & USD", "Works offline"];

/* ---------------------------------- Utils ---------------------------------- */
// Ubuntu is bundled with the site, but satori cannot read the woff2 files
// @fontsource ships for the browser — the plain woff copies in assets/ are for
// this renderer only.
async function loadFont(weight: 400 | 700) {
  return readFile(
    join(process.cwd(), "assets", "fonts", `ubuntu-latin-${weight}-normal.woff`),
  );
}

/**
 * The social card served for `/`. Latin only by design — the default Khmer face
 * is not embedded here, and a card with tofu boxes is worse than an English one.
 */
export async function renderBrandOgImage() {
  const [regular, bold] = await Promise.all([loadFont(400), loadFont(700)]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundImage: `linear-gradient(160deg, ${EMERALD_GLOW} 0%, ${EMERALD_CORE} 45%, ${EMERALD_DEEP} 100%)`,
          fontFamily: "Ubuntu",
        }}
      >
        {/* Wordmark row */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 40,
              height: 4,
              backgroundColor: GOLD_CORE,
              marginRight: 20,
            }}
          />
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: "0.24em",
              color: "rgba(255,255,255,0.72)",
            }}
          >
            {SITE.name.toUpperCase()}
          </div>
        </div>

        {/* Headline block */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* The app's tagline — the same headline the home page leads with */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 88,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "#FFFFFF",
              lineHeight: 1.05,
            }}
          >
            <span style={{ color: GOLD_CORE }}>Smart finance,</span>
            <span>better future</span>
          </div>
          <div
            style={{
              marginTop: 28,
              maxWidth: 820,
              fontSize: 30,
              color: "rgba(255,255,255,0.68)",
              lineHeight: 1.45,
            }}
          >
            Personal finance built for Cambodia — multi-wallet, bilingual, and
            private by default.
          </div>
        </div>

        {/* Stat row */}
        <div style={{ display: "flex", alignItems: "center" }}>
          {STATS.map((stat) => (
            <div
              key={stat}
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: 20,
                padding: "12px 26px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.22)",
                backgroundColor: "rgba(255,255,255,0.08)",
                fontSize: 26,
                color: "#FFFFFF",
              }}
            >
              {stat}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Ubuntu", data: regular, weight: 400, style: "normal" },
        { name: "Ubuntu", data: bold, weight: 700, style: "normal" },
      ],
    },
  );
}
