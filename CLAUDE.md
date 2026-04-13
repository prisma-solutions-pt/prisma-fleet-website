@AGENTS.md

# PrismaFleet Product Website -- Project Context
**Last updated:** 13 April 2026
**Stack:** Next.js 16 (App Router) + TypeScript + Global CSS + simplex-noise
**Domain:** prismafleet.pt

---

## What This Is

Standalone product website for Prisma Fleet, the fleet management SaaS for Portuguese TVDE operators. This is NOT the Prisma Solutions company site (that lives in `../solutions-website/`). This site exists to convert TVDE operators into Fleet users.

**Single goal: demo requests.**

---

## Design System

ToDesktop.com-inspired layout with the Fleet app's palette. Video hero, dark wave section, light body.

**Design reference:** ToDesktop.com (floating pill navbar that appears on scroll, 2x2 feature cards with screenshots, dark featured pricing card, 2-col FAQ, clean 4-col footer, dark CTA container)

**Video Hero:** Full-viewport background video (dusk city driving) with dark overlay, left-aligned text
**Wave Section:** Dark (#0a0f1a) with Waves canvas animation, fact pills, feature prop cards, screenshot frame
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
3. Formal Portuguese copy (pt-PT, "você" register, not "tu"). No i18n needed for now
4. Animations are functional, not decorative
5. Screenshot placeholders use styled "Em breve" cards, ready to be swapped for real images
6. Video hero fades seamlessly into dark wave section, then into light body
7. Navbar is hidden during video hero, slides in on scroll (like Prisma Solutions site)
8. No em dashes in user-facing copy or metadata. Use "|" or ":" as separators

---

## Site Structure

```
prismafleet.pt/
├── /           Homepage (VideoHero, Hero/Waves, ProofStrip, Pain, Features, Workflow, Pricing, FAQ, CTA, Footer)
├── /demo       Demo request form + info sidebar
└── /api/demo   POST endpoint (TODO: wire Resend)
```

---

## Key Files

```
app/
  layout.tsx          Root layout (Source Sans 3 + JetBrains Mono, Organization JSON-LD)
  page.tsx            Homepage composing all sections (SoftwareApplication + FAQPage JSON-LD)
  globals.css         ALL styles (~1700 lines)
  sitemap.ts          Dynamic sitemap for / and /demo
  robots.ts           Robots config (allow all, disallow /api/)
  demo/page.tsx       Demo request page (rich SEO metadata + OG)
  api/demo/route.ts   Form submission endpoint (placeholder)
components/
  Navbar.tsx          Floating pill navbar (hidden by default, appears on scroll past video hero)
  VideoHero.tsx       Full-viewport background video hero (left-aligned text, 3 CTAs)
  Hero.tsx            Dark wave section with fact pills, 3 feature prop cards, screenshot frame
  ProofStrip.tsx      Scrolling pill strip (integrations/features)
  Pain.tsx            3 pain point cards (hours, errors, visibility)
  Features.tsx        2x2 feature cards + full-width dashboard + 3x2 compact feature list
  Workflow.tsx        4-step process (Importe > Calcule > Aprove > Pague)
  Pricing.tsx         3 tiers (Starter, Pro, Enterprise), dark featured card
  FAQ.tsx             2-column expandable FAQ (8 questions)
  CTA.tsx             Dark rounded container CTA
  Footer.tsx          4-column footer with links
  DemoForm.tsx        Client-side form component
  ScrollReveal.tsx    Intersection Observer scroll animation wrapper
  Background.tsx      No-op (Waves is embedded in Hero directly)
  ui/
    wave-background.tsx  Interactive canvas wave animation (simplex-noise)
public/
  hero-video.mp4      Compressed background video (1080p, ~1.8MB, no audio)
```

---

## SEO

- Title leads with "Prisma Fleet" on every page (Google weights start of title)
- Homepage meta description opens with "Prisma Fleet é o software..."
- Organization JSON-LD in layout.tsx (site-wide, links to parent Prisma Solutions)
- SoftwareApplication + FAQPage JSON-LD on homepage
- lang="pt-PT" on html element
- sitemap.xml and robots.txt auto-generated via Next.js file conventions
- "Prisma Fleet" (two words) used in all SEO-facing copy; "PrismaFleet" kept as alternateName

---

## Pending

**High:** Wire Resend for demo form emails | Add real Fleet app screenshots to replace "Em breve" placeholders | Add link from prismasolutions.pt to prismafleet.pt for SEO
**Medium:** Mobile hamburger menu polish | OG image design | Submit to Google Search Console
**Low:** Analytics (Plausible or similar) | LinkedIn company page for Prisma Fleet
