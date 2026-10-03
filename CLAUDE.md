@AGENTS.md

# PrismaFleet Product Website -- Project Context
**Last updated:** 3 October 2026
**Stack:** Next.js 16 (App Router) + TypeScript + Global CSS + next-intl + Supabase + Resend + PostHog
**Domain:** prismafleet.pt

---

## What This Is

Standalone product website for Prisma Fleet, the fleet management SaaS for Portuguese TVDE operators. This is NOT the Prisma Solutions company site (that lives in `../solutions-website/`). This site exists to convert TVDE operators into Fleet users.

**Single goal: demo requests.**

---

## Design System

Professional product-software look (references: Attio, Stripe, ServiceNow, Grok in `design inspiration/`). The product UI carries the page: hand-built HTML/CSS recreations of real Fleet app screens in `components/mocks/`, not screenshots. Brand rules come from the Fleet app brief (`../Prisma Fleet Application/marketing material/CLAUDE_DESIGN_ONBOARDING.md`).

**Layout:** sticky white navbar, centered hero with the product mock, light sections, navy bands (modules, CTA, footer)
**Hero line:** "Pare de gerir a sua frota numa ~~folha de cálculo~~." (blue strikethrough draws on load) + tagline "Liquidações em minutos. Não em horas."

| Token | Value | Usage |
|-------|-------|-------|
| --bg / --bg-subtle | #ffffff / #f6f8fb | Page / alternate sections |
| --ink / --ink-3 | #0d1b2a / #64748b | Text / muted second half of two-tone headlines |
| --accent | #2563eb | All CTAs and links |
| --navy / --navy-2 | #0d1b2a / #1e3a5f | Dark bands, wordmark |
| --navy-gradient | #0a0f1a to #243b5c | Signature navy hero gradient |
| --pos / --neg | #00c07a / #d23c3c | Data only (Pago, deductions); Uber green / Bolt yellow only in partner contexts |

**Fonts:** Source Sans 3 (body and headlines, sentence case), JetBrains Mono (labels, money, eyebrows), Bebas Neue (inside app mocks and stat numerals only), Oswald (wordmark "PRISMA" only)
**Curves:** `--spring` (elastic), `--cinema` (smooth decel), `--smooth` (standard ease)

---

## Principles

1. Zero emojis anywhere in any file
2. All styles in `globals.css`. No CSS Modules, no Tailwind
3. Formal Portuguese copy (pt-PT, "você" register, not "tu"). i18n with EN translation is wired via next-intl (cookie-based, default PT)
4. Animations are functional, not decorative
5. Only claim what the product does today: Uber (automatic weekly CSV sync) and Bolt (official API), Via Verde and Prio imports are live; Galp, BP and Repsol are "Em construção"; no invented stats (cite IMT for market figures)
6. Mock data in `components/mocks/data.ts` is illustrative and internally consistent (net = gross - deductions); keep it that way when editing
7. No em dashes in user-facing copy or metadata. Use "|" or ":" as separators

---

## Site Structure

```
prismafleet.pt/
├── /             Homepage (Hero, ClientsStrip, HowItWorks, BeforeAfter, Modules, Stats, Integrations, Pricing, FAQ, CTA, Footer)
├── /demo         Demo request form + benefits
├── /privacidade  Privacy policy
├── /termos       Terms of service
├── /admin        Password-protected leads + PostHog dashboard (proxy.ts guards it)
└── /api/demo     POST endpoint: Supabase `leads` insert + Resend notification
```

---

## Key Files

```
i18n/request.ts            next-intl config (cookie-based, default "pt", supports "en")
messages/pt.json, en.json  All copy, including mock UI labels under "Mock"
lib/locale-actions.ts      Server Action `setLocale` writes NEXT_LOCALE cookie
app/layout.tsx             Fonts, Organization JSON-LD, providers, #sweep overlay
app/page.tsx               Homepage; FAQPage JSON-LD is generated from messages/pt.json
app/globals.css            ALL styles (site, mocks, cookie card, admin, sweep)
components/
  Navbar.tsx, Logo.tsx     Sticky nav; PRISMA/FLEET lockup (FLEET paths from the app's wordmark SVG)
  Hero.tsx                 Headline + SettlementsMock with floating receipt and SEPA toast
  HowItWorks.tsx           3-step pipeline (Importar, Rever e Confirmar, Pagamento) via PipelineTabs
  PipelineTabs.tsx         Client tab list with auto-advance (paused on hover, off for reduced motion)
  BeforeAfter.tsx          "A segunda-feira do operador" (illustrative timetable vs Prisma Fleet)
  Modules.tsx              Navy band: 4 module cards with mocks + 6 compact modules
  Stats.tsx, Integrations.tsx, Pricing.tsx, FAQ.tsx, CTA.tsx, Footer.tsx
  CookieBanner.tsx         Non-blocking consent card (gates PostHog)
  mocks/                   AppFrame (app shell), SettlementsMock, PipelineMocks, ModuleMocks, data.ts, app-icons.ts
public/
  brand/                   Prisma marks (navy/white SVG from the app)
  integrations/            Uber, Bolt, Via Verde, Prio logos
  cars/                    Car thumbnails used in the vehicles mock
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

**High:** Set real pricing or keep "Preço sob consulta" | Add link from prismasolutions.pt to prismafleet.pt for SEO
**Medium:** Mobile hamburger menu polish | OG image design | Submit to Google Search Console
**Low:** LinkedIn company page for Prisma Fleet
