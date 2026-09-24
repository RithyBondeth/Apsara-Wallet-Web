# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` (runs on port 4100 with Turbopack)
- **Build**: `npm run build`
- **Production**: `npm start`
- **Linting**: `npm run lint`
- **Type checking**: `npm run typecheck`
- **Everything**: `npm run verify` (lint → typecheck → build)

## Project Overview

Apsara Wallet Web is the marketing and legal site for the Apsara Wallet mobile
app — a personal finance app for Cambodia. It is a Next.js 15 App Router site
using TypeScript and Tailwind CSS, and it deliberately mirrors the conventions of
the sibling `apsaratalent-web` project.

It has a second job beyond marketing: hosting the public URLs that Google Play
and the App Store require — `/privacy`, `/terms`, `/delete-account`, `/support`.
Those four routes are compliance surface. Do not rename or remove them.

`/about` names the developer for store reviewers: Rithy Bondeth, an individual
developer in Phnom Penh. Those details live once, in `DEVELOPER`
(`utils/constants/site.constant.ts`), which the page and the JSON-LD both read.
They must match the store developer account exactly — change them only when the
owner says the account changed.

It also hosts the mobile app's deep-link surface: `/.well-known/apple-app-site-association`
and `/.well-known/assetlinks.json` (Universal Links / App Links) and the
`/reset-password` fallback page the password-reset email lands on when the
app is not installed. See "App links" below.

## Architecture

### Framework & Stack

- **Frontend**: Next.js 15 App Router with TypeScript (strict)
- **Styling**: Tailwind CSS with a design system ported from the mobile app
- **State Management**: Zustand with persistence (localStorage) for the language choice
- **UI Components**: Radix primitives with custom shadcn/ui components
- **i18n**: next-intl with English and Khmer catalogs
- **Icons**: Lucide, imported with the `Lucide` prefix (`LucideArrowRight`)

### Directory Structure

```
app/
├── (company)/          # about
├── (legal)/            # privacy, terms
├── (support)/          # support, delete-account, reset-password
├── .well-known/        # apple-app-site-association, assetlinks.json (route handlers)
├── globals.css         # Design tokens and brand utilities
├── layout.tsx          # Fonts, metadata, language provider
├── page.tsx            # Home: generateMetadata + JSON-LD
├── _content.tsx        # Home: landing section composition
├── loading.tsx         # Home: route-level skeleton
├── opengraph-image.tsx # 1200×630 social card
├── twitter-image.tsx   # Same card, for the twitter:image tag
├── manifest.ts
├── robots.ts
└── sitemap.ts

assets/fonts/           # Ubuntu woff, read by the OG renderer only
components/
├── header/             # Site header + mobile navigation
├── landing/            # One folder per landing section
├── static-content/     # Shared shell/skeleton for long-form pages
├── ui/                 # shadcn/ui primitives
└── utils/              # typography/, languages/, og-image/, structured-data/

language/               # en.json, km.json
lib/                    # cn() helper
stores/
├── languages/          # Language store
└── shared/             # Persist keys and SSR-safe storage
utils/
├── constants/          # site.constant.ts, structured-data.constant.ts, legal/
├── interfaces/         # I-prefixed interfaces
└── types/              # T-prefixed types
```

## Development Guidelines

### Route Organisation

Every route, including the home page, follows the same three-file split:

- `page.tsx` — server component; owns `generateMetadata` and reads the language cookie
- `_content.tsx` — client component; renders the page
- `loading.tsx` — route-level skeleton

Keep `page.tsx` a server component. The moment it becomes `"use client"` the
route silently loses `generateMetadata`, its canonical URL and its Khmer
metadata — which is exactly what had happened to the home page.

### Metadata & SEO

- Every route sets its own `alternates.canonical` and a language-aware title and
  description — the home page reads the same cookie the rest of the site does
- The social card is generated at build time by `app/opengraph-image.tsx` from
  `components/utils/og-image`. It is **Latin only**: the Khmer face is not
  embedded in that renderer, and a card full of tofu boxes is worse than an
  English one
- `assets/fonts/` holds plain `.woff` copies of Ubuntu for that renderer, because
  satori cannot read the `.woff2` files `@fontsource` ships for the browser.
  They are read with `readFile(join(process.cwd(), …))`, which the dependency
  tracer **cannot** follow — `outputFileTracingIncludes` in `next.config.ts` is
  what actually gets them into the deployed bundle. The card is prerendered at
  build time today, so a missing font would only bite once that route turns
  dynamic; keep the tracing entry either way
- Home-page JSON-LD is built in `utils/constants/structured-data.constant.ts`.
  The `FAQPage` entries are read from the same message catalogs the visible FAQ
  section renders — never hand-write them separately, since markup that
  disagrees with the page is what gets rich results penalised

### Component Organisation

- One folder per component, kebab-case, with `index.tsx`
- Props live in a sibling `props.ts`, never inline in `index.tsx` for shared components
- Interfaces are `I`-prefixed (`IHeaderProps`); types are `T`-prefixed (`TLanguage`)
- Components are default exports; shared sub-parts are named exports

### Comment Style

Section banners inside a file, matching `apsaratalent-web`:

```tsx
/* --------------------------------- Constants -------------------------------- */
/* ---------------------------------- Utils ---------------------------------- */
/* ------------------------------- Store State ------------------------------- */
/* --------------------------------- Effects --------------------------------- */
/* -------------------------------- Render UI -------------------------------- */
```

And `{/* Something Section */}` comments above meaningful JSX blocks. Comments
explain *why*, not what the next line obviously does.

### Styling

- Use the design tokens in `globals.css`; never hardcode a hex value in a component
- Brand surfaces are utilities: `brand-emerald-surface`, `brand-gold-foil`, `brand-gold-surface`, `brand-emerald-text`, `brand-highlight`, `brand-aurora`, `brand-glow-gold`, `brand-glass`, `brand-fade-in-top`
- No grid backgrounds anywhere — the owner asked for them to go. Light heroes use
  `brand-aurora` with the vector `BrandWaves` (`components/utils/brand-waves`).
  Do not stretch the app's backdrop photos across a section: they are small,
  compressed portrait images and the owner rejected how soft they look at hero
  size. Inside the phone mockup, at phone size, they are fine
- Keep letter-spacing tight: uppercase labels (eyebrows, the marquee, footer
  headings) go no wider than `tracking-wide` — the owner found wider tracking too loose
- Khmer is never letter-spaced: a global `:lang(km)` rule in `globals.css` resets
  every `tracking-*`, so components need no per-element fix. Khmer text inside an
  English page (like the language toggle's "ខ្មែរ") must carry `lang="km"` for
  that rule to reach it
- Brand colours in Tailwind: `emerald-{deep,core,glow}`, `gold-{light,core,deep}`, `finance-{income,expense,info,warning}`, `ivory`, `wallet-{navy,sky}`, `muted-faint`
- Type matches the mobile app's `AppFont`: Ubuntu for Latin, with **Kantumruy Pro**
  (variable) picking up every Khmer glyph, set in `app/layout.tsx`. If the app's
  font changes, change it here too — the pictures of the app inherit it
- The app is light-only — do not add a dark theme (this was removed from the mobile app at the owner's request)
- Decorative motion must stay behind the `prefers-reduced-motion` guard already in `globals.css`
- Motion is purposeful only (the owner reviewed every animation):
  - No endless decorative loops — no pings, no floating chips. The only
    loops are the marquee and the app pictures' own micro-motions (the scan
    line, the caret), each as in the app
  - Animate a composition as one group: fading a phone over the solid disc
    separately let the disc show through the half-transparent screen
  - Reveals stay quick (0.55s, 14px, stagger capped at 4 × 60ms) and start as
    soon as a block enters the screen
  - Hover is a small lift or colour change — no rotation or scaling
  - Never transition `backdrop-filter`; keep the blur constant and ease colour
- Landing sections open with `LandingSectionHeading` (pill badge, heading, description)
  rather than hand-rolling their own
- Scroll-in motion goes through `components/utils/reveal`: wrap a block in `<Reveal>`,
  mark the animated children `reveal-item`, and stagger them with `--reveal-index`.
  It only ever hides content the reader has not reached, and never without JS or
  with reduced motion — keep it that way, and never wrap the hero heading (it is
  the page's largest paint)

### Landing Mockups

The phone, the bento illustrations and the security lock screen
(`landing-phone-mockup`, `landing-feature-art`, `landing-security`) are pictures
of real app screens, and the owner expects them to match the app exactly. Each
names the Flutter widget it copies; build from that widget's code (and a
simulator screenshot where possible), not from memory.

- Labels live in the `mockup` namespace and come from the mobile app's
  `lib/l10n/app_{en,km}.arb` by key — when the app renames a label, update the
  matching `mockup` key. Only composed date/time strings and the two sample wallet
  names are the site's own
- The dashboard greeting shows the developer's given name, `DEVELOPER.givenName`
  ("Bondeth" — the name is written family name first), as the owner asked
- Amounts use the app's money format, `KHR 25,000` — never `៛`. Figures are
  illustrative but agree across every picture (the month's expense is KHR 968,300
  wherever it appears)
- The phone is drawn at the app's native 402×874pt and scaled as a whole; size it
  with `[--phone-scale:<n>]` rather than resizing its insides
- `public/app/` holds copies of the app's own artwork (`dashboard-bg.webp`,
  `wallet-bg.webp`) from `apsara-wallet-mobile/assets/backgrounds/`
- Wrap each picture in `brand-app-ui`, which sets Khmer on the app's tighter
  line height instead of the site's 1.9 — without it the pictures overflow their
  frames in Khmer

### App links

- The two `/.well-known` files are Next route handlers, not static files, so
  they can read `APPLE_TEAM_ID` and `ANDROID_CERT_SHA256` from the environment
  (`utils/constants/app-links.constant.ts`). Both **404 while their variable
  is unset** — a wrong app ID gets cached by Apple's CDN and is much harder to
  undo than a missing file. The variables are needed at build time
- Apple requires `application/json` with no extension and no redirect; Google
  requires the same over HTTPS. Never put these behind a redirect or a
  trailing-slash rewrite
- `/reset-password` is the browser fallback for the reset email. It must keep
  the `?token=` query and hand it to `apsarawallet://reset-password?token=` via a
  plain `<a>` — Next's `<Link>` must not touch a custom scheme. It is `noindex`
  and deliberately absent from the sitemap
- The app claims only the paths in `APP_LINK_PATHS`; everything else on the
  domain opens in the browser

### Internationalisation

- Every user-visible string goes through `useTranslations`, in both `en.json` and `km.json`
- Long-form legal text is the exception: it lives in `utils/constants/legal/` as bilingual documents, mirroring how the mobile app keeps it in `legal_content.dart`
- The language cookie is what lets the server render the right `<html lang>` — do not switch the store to client-only persistence

### Legal Content

`/privacy` and `/terms` are ported verbatim from
`apsara-wallet-mobile/lib/features/profile/data/legal_content.dart`. If you edit
one side, edit the other, and bump `lastUpdated` in both. A drift here means the
store listing points at text the app does not show.

### Store Links

`STORE_LINKS` in `utils/constants/site.constant.ts` reads from env and may be
empty. Download buttons must handle the empty case by rendering disabled rather
than linking to a dead URL.

## Key Dependencies

- **Next.js 15**: App Router, metadata API, image optimization
- **next-intl**: EN/KM message catalogs
- **Zustand**: Persisted language store
- **Radix UI**: `Slot` for `asChild` button composition
- **Tailwind CSS**: Utility-first styling with brand tokens
- **Lucide React**: Icon system
