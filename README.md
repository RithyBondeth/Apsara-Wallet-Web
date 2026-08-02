# Apsara Wallet — Web

Marketing and legal site for [Apsara Wallet](https://github.com/RithyBondeth), the
personal finance app built for Cambodia. Next.js 15 App Router, TypeScript and
Tailwind CSS, following the same conventions as `apsaratalent-web`.

Beyond marketing, this site exists to satisfy the public-URL requirements that
Google Play and the App Store impose on an account-based app:

| Requirement                     | Route             |
| ------------------------------- | ----------------- |
| Privacy Policy URL              | `/privacy`        |
| Terms of Service URL            | `/terms`          |
| Account deletion request URL    | `/delete-account` |
| Support / contact URL           | `/support`        |

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

The dev server runs on [http://localhost:4100](http://localhost:4100) with
Turbopack. (`apsaratalent-web` owns port 4000, so both can run side by side.)

## Scripts

| Script              | What it does                                     |
| ------------------- | ------------------------------------------------ |
| `npm run dev`       | Dev server on port 4100 with Turbopack           |
| `npm run build`     | Production build                                 |
| `npm start`         | Serve the production build                       |
| `npm run lint`      | ESLint (`next/core-web-vitals` + `next/typescript`) |
| `npm run typecheck` | `tsc --noEmit`                                   |
| `npm run verify`    | lint → typecheck → build, in one shot            |

## Environment

Copy `.env.example` to `.env.local`. Every variable is optional in development —
each falls back to a sensible default.

| Variable                       | Purpose                                                     |
| ------------------------------ | ----------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`         | Canonical origin for metadata, `sitemap.xml` and `robots.txt` |
| `NEXT_PUBLIC_SUPPORT_EMAIL`    | Mailbox shown on Support, Delete Account and the footer     |
| `NEXT_PUBLIC_PLAY_STORE_URL`   | Google Play listing — blank renders a disabled "coming soon" button |
| `NEXT_PUBLIC_APP_STORE_URL`    | App Store listing — same fallback                           |

## Project structure

```
app/
├── (legal)/              # Privacy Policy, Terms of Service
├── (support)/            # Support, Delete Account
├── globals.css           # Design tokens + brand utilities
├── layout.tsx            # Fonts, metadata, language provider
├── page.tsx              # Home: metadata + structured data
├── _content.tsx          # Home: landing section composition
├── loading.tsx           # Home: route-level skeleton
├── opengraph-image.tsx   # Generated 1200×630 social card
├── twitter-image.tsx     # The same card, for twitter:image
├── manifest.ts           # manifest.webmanifest
├── robots.ts             # robots.txt
└── sitemap.ts            # sitemap.xml

assets/fonts/             # Ubuntu .woff, read by the OG image renderer
components/
├── header/               # Site header with mobile nav
├── landing/              # One folder per landing section
├── static-content/       # Shared shell for the long-form pages
├── ui/                   # shadcn/ui primitives
└── utils/                # Typography, language, OG image, structured data

language/                 # en.json, km.json (next-intl catalogs)
lib/                      # cn() and other cross-cutting helpers
stores/                   # Zustand stores (language, shared persistence)
utils/
├── constants/            # Site config, structured data, legal documents
├── interfaces/           # I-prefixed interfaces
└── types/                # T-prefixed types
```

Every route follows the `apsaratalent-web` split: `page.tsx` is a server
component that owns `generateMetadata`, `_content.tsx` is the client component
that renders it, and `loading.tsx` provides the route-level skeleton.

## Search and social

The home page ships a language-aware title, description and canonical URL, plus
`SoftwareApplication`, `Organization` and `FAQPage` JSON-LD built in
`utils/constants/structured-data.constant.ts`. The FAQ entries in that markup
are read from the same catalogs the visible FAQ section renders, so the two can
never drift.

The social card is generated at build time from `components/utils/og-image`, and
is deliberately Latin only — the Khmer face is not embedded in that renderer.

## Design system

Colours are ported 1:1 from the mobile app so the site and the app are visibly
the same product. The source of truth is:

- `apsara-wallet-mobile/lib/core/themes/app_colors.dart`
- `apsara-wallet-mobile/lib/core/themes/app_gradients.dart`

Those values live in `app/globals.css` as HSL custom properties (emerald
`#0B5B3D`, gold `#D4AF37`) and are exposed to Tailwind as `emerald-{deep,core,glow}`,
`gold-{light,core,deep}` and `finance-{income,expense}`. Reusable brand surfaces
(`brand-emerald-surface`, `brand-gold-foil`, `brand-grid`, `brand-highlight`) are
utilities in the same file, so no section hand-rolls its own gradient.

The app is light-only by design — there is deliberately no dark theme.

## Legal content

`/privacy` and `/terms` render from `utils/constants/legal/*.constant.ts`, ported
verbatim from the mobile app's `lib/features/profile/data/legal_content.dart`.

**Both copies must be edited together.** If the in-app document and the web
document disagree, the store listing points at text the app does not show.
Remember to bump the `lastUpdated` stamp in both places.

## Internationalisation

English and Khmer, via `next-intl` with catalogs in `language/`. The active
language lives in a persisted Zustand store and is mirrored into a `language`
cookie, so the server can render the correct `<html lang>` on first paint before
hydration. Khmer text gets a taller line-height (see `:lang(km)` in
`globals.css`) to avoid clipped subscripts.

## Deployment

Deployed as a server-rendered Next.js app (Vercel), matching
`apsaratalent-web`. Server rendering is what makes the legal pages crawlable
HTML — which is the point of hosting them here — and it lets
`generateMetadata` read the language cookie.
