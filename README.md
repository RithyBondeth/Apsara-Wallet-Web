<div align="center">

# Apsara Wallet — Web

**The marketing site and app-store compliance pages for Apsara Wallet, a personal finance app built for Cambodia.**

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-443E38?style=for-the-badge&logo=react&logoColor=white)

</div>

---

## Overview

Apsara Wallet Web is the public website for the [Apsara Wallet](https://github.com/RithyBondeth/Apsara-Wallet-Mobile) mobile app. Besides marketing the app, it hosts the public URLs that Google Play and the App Store require for an account-based app:

| Requirement | Route |
| --- | --- |
| Privacy policy | `/privacy` |
| Terms of service | `/terms` |
| Account deletion request | `/delete-account` |
| Support and contact | `/support` |

## Features

- **Landing page:** hero, features, how it works, security, FAQ, phone mockups, and app-store buttons.
- **Legal and support pages,** shared word for word with the mobile app's in-app documents.
- **Password-reset page,** plus iOS Universal Links and Android App Links through `/.well-known`.
- **English and Khmer localization** through `next-intl`, with the server rendering the right language on first load.
- **SEO:** language-aware metadata, a sitemap, `robots.txt`, JSON-LD structured data (SoftwareApplication, Organization, FAQPage), and generated Open Graph and Twitter cards.
- **Design system** that uses the mobile app's emerald and gold brand colors.

## Tech Stack

| Area | Technology |
| --- | --- |
| Framework | Next.js 15 (App Router, Turbopack) |
| Language | TypeScript |
| Styling | Tailwind CSS, shadcn/ui |
| Internationalization | next-intl |
| State management | Zustand |
| Deployment | Vercel |

## Getting Started

### Prerequisites

- Node.js (see `.nvmrc`) and npm

### Installation

```bash
git clone https://github.com/RithyBondeth/Apsara-Wallet-Web.git
cd Apsara-Wallet-Web
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:4100](http://localhost:4100).

### Environment Variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin for metadata, sitemap, and robots |
| `NEXT_PUBLIC_SUPPORT_EMAIL` | Support mailbox shown on the site |
| `NEXT_PUBLIC_PLAY_STORE_URL`, `NEXT_PUBLIC_APP_STORE_URL` | Store listing links (left blank, the buttons show "coming soon") |
| `APPLE_TEAM_ID`, `ANDROID_CERT_SHA256` | Universal Links and App Links association files |

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server on port 4100 |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Type-check with `tsc --noEmit` |
| `npm run verify` | Lint, type-check, and build |

## Project Structure

```text
Apsara-Wallet-Web/
├── app/
│   ├── (company)/            # About
│   ├── (legal)/              # Privacy, Terms
│   ├── (support)/            # Support, Delete Account, Reset Password
│   ├── .well-known/          # Apple and Android app-link association files
│   ├── opengraph-image.tsx   # Generated social card
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── landing/              # One folder per landing section
│   ├── static-content/       # Shared shell for long-form pages
│   └── utils/                # Typography, language, OG image, structured data
├── language/                 # en.json, km.json
├── stores/                   # Zustand stores
└── utils/                    # Site constants, legal documents, types
```

## Related Repositories

- [Apsara-Wallet-Mobile](https://github.com/RithyBondeth/Apsara-Wallet-Mobile): the Flutter mobile app
- [Apsara-Wallet-API](https://github.com/RithyBondeth/Apsara-Wallet-API): the NestJS backend

## Author

**Rithy Bondeth** — Full Stack Developer & AI Engineer

[![Portfolio](https://img.shields.io/badge/Portfolio-0A0A0A?style=for-the-badge&logo=vercel&logoColor=white)](https://bondeth.dev)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/RithyBondeth)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rithy-bondeth-484073282/)
