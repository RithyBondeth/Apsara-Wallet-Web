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
├── (legal)/          # privacy, terms
├── (support)/        # support, delete-account
├── globals.css       # Design tokens and brand utilities
├── layout.tsx        # Fonts, metadata, language provider
├── page.tsx          # Landing page composition
├── robots.ts
└── sitemap.ts

components/
├── header/           # Site header + mobile navigation
├── landing/          # One folder per landing section
├── static-content/   # Shared shell/skeleton for long-form pages
├── ui/               # shadcn/ui primitives
└── utils/            # typography/, languages/

language/             # en.json, km.json
lib/                  # cn() helper
stores/
├── languages/        # Language store
└── shared/           # Persist keys and SSR-safe storage
utils/
├── constants/        # site.constant.ts, legal/
├── interfaces/       # I-prefixed interfaces
└── types/            # T-prefixed types
```

## Development Guidelines

### Route Organisation

Every long-form route follows the same three-file split:

- `page.tsx` — server component; owns `generateMetadata` and reads the language cookie
- `_content.tsx` — client component; renders the page
- `loading.tsx` — route-level skeleton

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
- Brand surfaces are utilities: `brand-emerald-surface`, `brand-gold-foil`, `brand-grid`, `brand-grid-inverted`, `brand-highlight`
- Brand colours in Tailwind: `emerald-{deep,core,glow}`, `gold-{light,core,deep}`, `finance-{income,expense}`
- The app is light-only — do not add a dark theme (this was removed from the mobile app at the owner's request)
- Decorative motion must stay behind the `prefers-reduced-motion` guard already in `globals.css`

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
