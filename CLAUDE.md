@AGENTS.md

# PrismaFleet Product Website -- Project Context
**Last updated:** 11 April 2026
**Stack:** Next.js 16 (App Router) + TypeScript + Global CSS + simplex-noise
**Domain:** prismafleet.pt

---

## What This Is

Standalone product website for PrismaFleet, the fleet management SaaS for Portuguese TVDE operators. This is NOT the Prisma Solutions company site (that lives in `../solutions-website/`). This site exists to convert TVDE operators into Fleet users.

**Single goal: demo requests.**

---

## Design System

ToDesktop.com-inspired layout with the Fleet app's palette. Dark hero section, light body.

**Design reference:** ToDesktop.com (floating pill navbar, 2x2 feature cards with screenshots, dark featured pricing card, 2-col FAQ, clean 4-col footer, dark CTA container)

**Hero:** Dark (#0a0f1a) with Waves canvas animation behind
**Body:** Light, using Fleet light-mode palette

| Token | Value | Usage |
|-------|-------|-------|
| --bg | #f8fafc | Page background |
| --surface | #ffffff | Card backgrounds |
| --surface2 | #f1f5f9 | Feature card backgrounds |
| --accent | #2563eb | Primary blue (Fleet accent) |
| --ink | #0d1b2a | Primary text |
| --ink2 | #334155 | Secondary text |
| --dark-bg | #0a0f1a | Hero / CTA background |

**Fonts:** Source Sans 3 (body), JetBrains Mono (eyebrows, numbers)
**Curves:** `--spring` (elastic), `--cinema` (smooth decel), `--smooth` (standard ease)

---

## Principles

1. Zero emojis anywhere in any file
2. All styles in `globals.css`. No CSS Modules, no Tailwind
3. Portuguese copy (pt-PT). No i18n needed for now
4. Animations are functional, not decorative
5. Screenshot placeholders ready to be swapped for real images
6. Dark hero, light body -- matches how screenshots look in Fleet light mode

---

## Site Structure

```
prismafleet.pt/
├── /           Homepage (Hero, Pain, Features, Workflow, Pricing, FAQ, CTA, Footer)
├── /demo       Demo request form + info sidebar
└── /api/demo   POST endpoint (TODO: wire Resend)
```

---

## Key Files

```
app/
  layout.tsx          Root layout (Source Sans 3 + JetBrains Mono)
  page.tsx            Homepage composing all sections
  globals.css         ALL styles (~600 lines)
  demo/page.tsx       Demo request page
  api/demo/route.ts   Form submission endpoint (placeholder)
components/
  Navbar.tsx          Floating pill navbar (always visible, centered)
  Hero.tsx            Dark hero with Waves animation, value props, screenshot placeholder
  Pain.tsx            3 pain point cards (hours, errors, visibility)
  Features.tsx        2x2 feature cards + full-width dashboard + 3x2 compact feature list
  Workflow.tsx        4-step process (Import > Calcula > Aprova > Paga)
  Pricing.tsx         3 tiers (Starter 99, Pro 249, Enterprise 449), dark featured card
  FAQ.tsx             2-column expandable FAQ (8 questions)
  CTA.tsx             Dark rounded container CTA
  Footer.tsx          4-column footer with links
  DemoForm.tsx        Client-side form component
  ScrollReveal.tsx    Intersection Observer scroll animation wrapper
  Background.tsx      No-op (Waves is embedded in Hero directly)
  ui/
    wave-background.tsx  Interactive canvas wave animation (simplex-noise)
```

---

## Pending

**High:** Wire Resend for demo form emails | Add real Fleet app screenshots | Deploy to Vercel with prismafleet.pt domain
**Medium:** SEO meta tags per page | Add favicon/OG image | Mobile hamburger menu
**Low:** Analytics (Plausible or similar) | Portuguese accents in copy (currently ASCII-safe)
