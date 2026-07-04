# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Marketing/landing website for Dr. Samarth Ajay Thakkar, a foot and ankle surgeon in Mumbai (brand: "DOC Foot and Ankle", domain `docfootandankle.com`). It is a static-first Next.js site with no backend or database — appointment leads are sent to the third-party Web3Forms API from the client.

## Commands

```bash
npm run dev      # dev server at http://localhost:3000
npm run build    # production build (runs next-sitemap via postbuild if configured)
npm run start    # serve the production build
npm run lint     # eslint (flat config, eslint-config-next)
```

There is no test suite.

## Stack

- **Next.js 16** (App Router) with **React 19**, TypeScript (strict).
- **Tailwind CSS v4** — configured entirely in `app/globals.css` via `@theme`, not a `tailwind.config.js`. Add/change design tokens (colors, fonts) there.
- Path alias `@/*` maps to the repo root (e.g. `@/components/...`, `@/lib/...`).

## Architecture

- **`app/page.tsx`** — the entire homepage is a linear stack of section components from `components/`, rendered in visual order (Hero → About → HospitalAffiliations → … → Location). To reorder or add homepage sections, edit this file. Section IDs (e.g. `#treatments`, `#appointment`) are anchor targets used by nav links and CTAs across the site.
- **`app/layout.tsx`** — root layout wraps every page with `Navbar`, `Footer`, and `FloatingWhatsApp`, and loads the Google fonts Outfit (`--font-outfit`, used as `font-heading`) and Inter (`--font-inter`, used as `font-sans`).
- **`lib/treatments.ts`** — the single source of truth for treatment/SEO landing pages. Each entry has `slug`, `title`, `description`, a lucide `icon`, and an HTML `content` string (rendered via `dangerouslySetInnerHTML`). Adding an entry here automatically creates a statically-generated page at `/treatments/[slug]` (see `app/treatments/[slug]/page.tsx`, which uses `generateStaticParams` + `generateMetadata`) and feeds treatment listings. Slugs are SEO-oriented (e.g. `flat-foot-surgery-mumbai`).
- **`lib/utils.ts`** — `cn()` helper (clsx + tailwind-merge) used throughout for conditional classes.

## Conventions

- Components are Server Components by default. Add `"use client"` only when the component uses hooks/interactivity (e.g. `AppointmentPortal`, `SmartCTA`, `Navbar`).
- **Contact details are hardcoded, not centralized.** The phone number `+917710039780` and WhatsApp link `https://wa.me/917710039780` appear inline in ~17 places across components and treatment pages. Changing the doctor's number requires a global find-and-replace, not editing one config.
- **`SmartCTA`** shows a call button only during IST business hours (9:30 AM–8:30 PM, computed client-side via `Asia/Kolkata`) and returns `null` before mount to avoid hydration mismatch — preserve that pattern if editing.
- **`AppointmentPortal`** posts the form directly to Web3Forms; the `access_key` is a hardcoded public key. There is no server route handling submissions.

## SEO / Deployment

- `next-sitemap.config.js` generates `robots.txt` and `sitemap.xml` from `SITE_URL` (defaults to the production domain). Regenerate via the build.
- Treatment pages exist primarily as location-targeted SEO landing pages ("... in Mumbai"); keep titles/descriptions in `lib/treatments.ts` aligned with that intent.
