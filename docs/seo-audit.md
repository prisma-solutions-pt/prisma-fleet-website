# SEO Audit Report -- prismafleet.pt

**Date:** 13 April 2026
**Auditor:** Automated technical crawl + manual review
**Target:** https://www.prismafleet.pt (production, Vercel)
**Product:** Prisma Fleet -- B2B SaaS for TVDE fleet operators in Portugal

---

## Executive Summary

The site has a solid SEO foundation: structured data (Organization, SoftwareApplication, FAQPage), programmatic sitemap/robots, canonical URL, keyword-rich metadata, and proper Portuguese language declaration. However, several critical and high-priority gaps remain that will limit indexing, click-through rate, and organic authority.

| Priority | Issues |
|----------|--------|
| ~~Critical~~ | ~~3~~ 0 (all fixed) |
| High | 6 |
| Medium | 6 |
| Low | 4 |

---

## Critical Issues

### ~~C1. Open Graph tags missing `og:type`, `og:site_name`, and `og:image`~~ FIXED

**Problem:** The live HTML contains `og:title`, `og:description`, and `og:url`, but is missing three required OG tags: `og:type`, `og:site_name`, and `og:image`. Without `og:image`, social shares on LinkedIn, Facebook, and WhatsApp will render with a blank or auto-generated preview -- devastating for a B2B product whose links will be shared between fleet operators.

**Evidence:**
```
property="og:title"       content="Prisma Fleet | Software de Gestao de Frotas TVDE em Portugal"
property="og:description" content="Prisma Fleet: liquidacoes em minutos..."
property="og:url"         content="https://www.prismafleet.pt"
-- og:type       MISSING
-- og:site_name  MISSING
-- og:image      MISSING (only present in twitter:image)
```

**Fix:** Add to `layout.tsx` metadata:
```ts
openGraph: {
  // ...existing
  type: "website",
  siteName: "Prisma Fleet",
  locale: "pt_PT",
  images: [{
    url: "/og-image.png",
    width: 1200,
    height: 630,
    alt: "Prisma Fleet | Software de Gestao de Frotas TVDE em Portugal",
  }],
},
```

---

### ~~C2. Meta description exceeds 155 characters~~ FIXED

**Problem:** The meta description is 207 characters long. Google will truncate it in SERPs, cutting off the CTA and trial mention -- the most conversion-relevant part.

**Evidence:**
```
"Prisma Fleet é o software de gestão de frotas TVDE feito para operadores em Portugal. Liquidações automáticas, importação Uber e Bolt, portal do motorista e pagamentos SEPA. Experimente grátis durante 14 dias."
```
Character count: 207

**Fix:** Trim to ~150 characters while keeping the primary keyword and CTA:
```
"Prisma Fleet: software de gestão de frotas TVDE em Portugal. Liquidações automáticas, importação Uber e Bolt, portal do motorista. 14 dias grátis."
```
Character count: 147

---

### ~~C3. `<video>` hero has no poster image and no `<link rel="preload">`~~ FIXED

**Problem:** The hero section uses `<video autoPlay muted loop playsInline preload="auto" poster="">`. The `poster` attribute is empty, meaning the browser shows a blank frame while loading the 1.8 MB MP4. This directly harms LCP (Largest Contentful Paint), which is a Core Web Vitals ranking signal.

Additionally, there is no `<link rel="preload" as="video" href="/hero-video.mp4">` or `<link rel="preload" as="image" href="/hero-poster.webp">` to hint the browser.

**Evidence:**
```html
<video class="vhero-video" autoPlay="" muted="" loop="" playsInline="" preload="auto" poster="">
```

**Fix:**
1. Export a single representative frame from the video as `/public/hero-poster.webp` (WebP, ~50-80 KB)
2. Set `poster="/hero-poster.webp"` on the `<video>` tag
3. Add `<link rel="preload" as="image" href="/hero-poster.webp" />` to layout.tsx or the VideoHero component
4. Consider changing `preload="auto"` to `preload="metadata"` and lazy-loading the video with JS after page load

---

## High-Priority Issues

### H1. No `hreflang` tag for Portuguese

**Problem:** Although `<html lang="pt-PT">` is set correctly, there is no `<link rel="alternate" hreflang="pt-PT">` self-referencing tag. Google recommends a self-referencing hreflang even for single-language sites to avoid ambiguity, especially when the TLD is `.pt` and the content targets specifically Portugal (not Brazil, which uses `pt-BR`).

**Evidence:** Grep for `hreflang` in source: zero results.

**Fix:** Add to `layout.tsx`:
```ts
alternates: {
  canonical: "https://www.prismafleet.pt",
  languages: {
    "pt-PT": "https://www.prismafleet.pt",
  },
},
```

---

### H2. H1 tag lacks primary keywords

**Problem:** The H1 is `"Liquidacoes em minutos."` (26 chars). While provocative, it contains neither the brand name ("Prisma Fleet") nor the primary keyword cluster ("software TVDE", "gestao de frotas TVDE", "operadores TVDE"). Search engines give significant weight to H1 text for ranking.

**Evidence:**
```html
<h1 class="vhero-enter vhero-enter-2">Liquidações em minutos.
```

**Fix:** The visible text can stay for UX purposes, but consider making the full H1 content include keywords below the fold line. For example, the subheading below the H1 (currently a `<p>`) could be promoted into the H1 or the H1 could be enriched:
```
"Liquidações em minutos. Software de gestão de frotas TVDE."
```
Or use a `<span class="sr-only">` technique to add keyword context for crawlers without altering visual design.

---

### H3. Legal pages are `<span>` placeholders, not links

**Problem:** The footer's "Politica de Privacidade" and "Termos de Servico" are rendered as `<span>` elements, not `<a>` links. They don't link to actual pages. This is a legal requirement under Portuguese law/GDPR and a trust signal for both users and Google.

**Evidence:**
```
<span class="footer-col-link">Politica de Privacidade</span>
<span class="footer-col-link">Termos de Servico</span>
```

**Fix:** Create `/privacidade` and `/termos` pages with actual legal content, then convert the spans to links:
```html
<a href="/privacidade" class="footer-col-link">Politica de Privacidade</a>
<a href="/termos" class="footer-col-link">Termos de Servico</a>
```
Add both pages to `sitemap.ts`.

---

### H4. Pricing shows "EUR --" placeholder on all 3 plans

**Problem:** All three pricing tiers (Starter, Pro, Enterprise) display `EUR --` instead of actual prices. This is a significant content gap:
- Hinders conversion (operators can't evaluate cost without contacting)
- Prevents Google from showing pricing rich results
- The `SoftwareApplication` JSON-LD `offers.AggregateOffer` references 3 offers but has no `lowPrice`/`highPrice`

**Evidence:**
```json
"pricing-value": "--"  (appears 3 times, once per tier)
```

**Fix:** When prices are finalised, update `Pricing.tsx` and add `lowPrice` and `highPrice` to the JSON-LD:
```json
"offers": {
  "@type": "AggregateOffer",
  "lowPrice": "99",
  "highPrice": "449",
  "priceCurrency": "EUR",
  "offerCount": 3
}
```
*(Note: user has confirmed prices are intentionally pending market research.)*

---

### H5. No social proof (testimonials, logos, metrics)

**Problem:** The page has zero testimonials, customer logos, review counts, or case studies. Competitors like Frota360 have dedicated testimonial sections with named operators, fleet sizes, and specific metrics ("+18% margem", "-EUR 2,300 em custos"). Social proof is both a conversion factor and an E-E-A-T (Experience, Expertise, Authority, Trust) signal for Google.

**Evidence:** Grep for "testemunho", "cliente", "review", "caso": zero matches in body copy.

**Fix (post-launch):**
- Add a testimonials section between Pricing and FAQ
- Include operator name, city, fleet size, and a specific measurable result
- Use `Review` schema markup for each testimonial

---

### H6. FAQ section does not use `<details>`/`<summary>` native HTML

**Problem:** The FAQ uses `<button class="faq-question">` with JS-toggled `<div class="faq-answer">`. While the FAQPage JSON-LD is present and correct (critical for rich results), the on-page markup uses non-semantic div/button patterns instead of the native `<details>`/`<summary>` elements, which are more accessible and better understood by crawlers.

**Evidence:**
```html
<button class="faq-question">...</button>
<div class="faq-answer">...</div>
```

**Fix:** Consider migrating to `<details>`/`<summary>` elements. This improves accessibility, removes JS dependencies for the FAQ toggle, and gives crawlers clearer semantic signals. The JSON-LD structured data is the primary vehicle for rich results, so this is a secondary enhancement.

---

## Medium-Priority Issues

### M1. Title tag is 60 characters (borderline)

**Problem:** The title is exactly at the 60-character soft limit:
```
Prisma Fleet | Software de Gestao de Frotas TVDE em Portugal
```
Character count: 60. Google may truncate by 1-2 chars on some viewports. The pipe separator also consumes 3 characters that could be keyword-bearing.

**Evidence:** `<title>Prisma Fleet | Software de Gestao de Frotas TVDE em Portugal</title>`

**Fix:** No immediate action needed, but if editing, consider shortening "em Portugal" to save space for future additions, or dropping the pipe for a dash (saves 1 char).

---

### M2. No `font-display: swap` found in source HTML

**Problem:** Fonts are loaded via Next.js `next/font/google` (Source Sans 3 and JetBrains Mono) as preloaded WOFF2 files. The inline CSS does not contain `font-display: swap`, which risks a Flash of Invisible Text (FOIT) and may hurt CLS (Cumulative Layout Shift).

**Evidence:** `grep -c 'font-display' source.html` returns 0.

**Fix:** Next.js `next/font` applies `font-display: swap` by default at build time in the generated CSS file, not inline HTML. Verify by checking the external stylesheet for the `font-display` declaration:
```bash
curl -s https://www.prismafleet.pt/_next/static/chunks/0glbdkts51net.css | grep 'font-display'
```
If `swap` is confirmed in the CSS file, this is a non-issue.

---

### M3. Images served as PNG, not WebP/AVIF

**Problem:** Both logo images are PNG format:
```
/brand/prisma-mark-white.png
/brand/prisma-mark-black.png
```
PNG is a legacy format. WebP or AVIF would reduce file size by 30-80% with no visible quality loss.

**Evidence:** Two `<img>` tags both reference `.png` files. No `<picture>` element or `next/image` optimization.

**Fix:**
1. Convert logos to WebP (or use `next/image` component which auto-converts)
2. Replace native `<img>` with Next.js `<Image>` component for automatic optimization:
```tsx
import Image from "next/image";
<Image src="/brand/prisma-mark-white.png" alt="Prisma Fleet" width={28} height={28} />
```

---

### M4. No `<link rel="preconnect">` for third-party origins

**Problem:** There are no `<link rel="preconnect">` hints for any third-party origins. While the site currently has minimal external dependencies, if Supabase, Plausible analytics, or any third-party scripts are added later, preconnect hints will be important.

**Evidence:** Grep for `preconnect` in source: zero results.

**Fix:** Not urgent for current architecture. Add when external services are integrated:
```html
<link rel="preconnect" href="https://yourproject.supabase.co" />
```

---

### M5. No Portuguese business address (NAP) for local SEO

**Problem:** The footer shows only an email (`geral@prismasolutions.pt`). There is no physical business address, phone number, or NIPC (tax ID). Competitors like Frota360 display their NIPC (517524945), city (Oliveira de Azemeis), and WhatsApp number. For a B2B SaaS targeting Portuguese operators, NAP (Name, Address, Phone) signals build trust and improve local search visibility.

**Evidence:** Footer contains only:
```
Contacto: geral@prismasolutions.pt
```

**Fix:** Add at minimum:
- City/region (e.g., "Lisboa, Portugal" or wherever registered)
- NIPC of Prisma Solutions
- Consider a WhatsApp business number link

Update the Organization JSON-LD with `address`:
```json
"address": {
  "@type": "PostalAddress",
  "addressCountry": "PT",
  "addressLocality": "Lisboa"
}
```

---

### M6. No copyright symbol in footer

**Problem:** Footer shows `"2026 PrismaFleet"` without the copyright symbol or "Todos os direitos reservados".

**Evidence:** `<span class="footer-copy">2026 PrismaFleet</span>`

**Fix:** Minor, but adds professionalism:
```
2026 Prisma Fleet. Todos os direitos reservados.
```

---

## Low-Priority Issues

### L1. No blog or `/recursos` section

**Problem:** The site has zero content pages beyond the landing page and demo form. This means no organic acquisition channel for long-tail keywords that TVDE operators search before they search for software:
- "como gerir frota TVDE"
- "Excel vs software gestao TVDE"
- "liquidacoes motoristas Uber Bolt"
- "lei 45/2018 TVDE conformidade"
- "revenue share vs renda fixa TVDE"

Competitors have no blogs either, making this a greenfield SEO opportunity.

**Evidence:** Sitemap contains only 2 URLs: `/` and `/demo`.

**Fix (post-launch):** Create a `/blog` or `/recursos` section with 5-10 articles targeting these long-tail keywords. Each article should link back to the homepage and demo page. This is the single highest-ROI SEO investment after the technical fixes.

---

### L2. No external link-building anchors

**Problem:** The site has no integrations page, no partner logos, no case studies, and no "built with" or co-marketing content that would earn backlinks from external sites (Uber Portugal blog, Bolt fleet partners, Portuguese TVDE communities). The sole external link opportunity is the forthcoming `prismasolutions.pt -> prismafleet.pt` link mentioned in CLAUDE.md.

**Fix:** After launch:
- Create a dedicated `/integracoes` page listing Uber, Bolt, Via Verde, Prio integrations
- Publish a case study with a real operator
- List Prisma Fleet on SaaS directories (GetApp, Capterra, G2) for the Portuguese market

---

### L3. Demo page meta description exceeds 155 characters

**Problem:** The demo page meta description is 178 characters:
```
"Agende uma demonstracao personalizada do PrismaFleet. Veja como automatizar
 liquidacoes, importar ficheiros Uber e Bolt e gerir a sua frota TVDE sem
 Excel. 14 dias gratis, sem cartao de credito."
```

**Fix:** Trim to ~150 chars:
```
"Demonstracao gratuita do Prisma Fleet. Veja como automatizar liquidacoes TVDE, importar Uber e Bolt e gerir a sua frota sem Excel. 14 dias gratis."
```

---

### L4. No Portugal-specific credibility signals in body copy

**Problem:** The body copy does not mention IMT (Instituto da Mobilidade e dos Transportes), Lei 45/2018, AT (Autoridade Tributaria), or any regulatory context. Portuguese TVDE operators search for compliance-related terms. Mentioning regulatory awareness builds trust and captures compliance-intent searches.

**Evidence:** No mentions of "IMT", "Lei 45/2018", "Portaria", or "AT" in the body text.

**Fix:** Add a brief credibility signal in the Pain section or footer:
```
"Em conformidade com a legislacao TVDE em vigor (Lei 45/2018)"
```
Or add it as a trust badge near the CTA.

---

## Audit Checklist Summary

### Technical SEO

| Check | Status | Notes |
|-------|--------|-------|
| `<title>` tag | PASS | 60 chars, keyword-present, brand-first |
| Meta description | PASS | 153 chars (fixed from 207) |
| Canonical URL | PASS | `https://www.prismafleet.pt` |
| Robots meta | PASS | `index, follow` |
| Googlebot meta | PASS | `max-image-preview:large, max-snippet:-1` |
| `robots.txt` | PASS | Allows all, blocks `/api/`, links sitemap |
| `sitemap.xml` | PASS | 2 URLs (`/`, `/demo`), programmatic |
| HTTP -> HTTPS redirect | PASS | 308 Permanent Redirect |
| `<html lang>` | PASS | `lang="pt-PT"` |
| Charset | PASS | UTF-8 |
| Viewport meta | PASS | `width=device-width, initial-scale=1` |
| OG title | PASS | Present and keyword-rich |
| OG description | PASS | Present |
| OG url | PASS | Absolute URL |
| OG type | PASS | `website` (fixed) |
| OG site_name | PASS | `Prisma Fleet` (fixed) |
| OG image | PASS | `https://www.prismafleet.pt/og-image.png` 1200x630 (fixed) |
| OG locale | PASS | `pt_PT` (fixed) |
| Twitter card | PASS | `summary_large_image` |
| Twitter image | PASS | Absolute URL to og-image.png |
| Hreflang | FAIL | No self-referencing `pt-PT` hreflang |
| H1 count | PASS | Single H1 |
| H1 keywords | WARN | No primary keywords in H1 text |
| Heading hierarchy | PASS | H1 > H2 > H3 logical structure |
| Image alt tags | PASS | Both logo images have `alt="PrismaFleet"` |
| JSON-LD Organization | PASS | Name, logo, contactPoint, areaServed |
| JSON-LD SoftwareApplication | PASS | Features, offers, publisher |
| JSON-LD FAQPage | PASS | 8 questions with answers |
| Video poster | PASS | `poster="/hero-poster.png"` (fixed) |
| Video preload hint | PASS | `<link rel="preload" as="image" href="/hero-poster.png">` (fixed) |
| Font preload | PASS | WOFF2 fonts preloaded |
| Logo image preload | PASS | Both brand images preloaded |
| `noindex` check | PASS | No accidental noindex tags |
| Internal link anchors | PASS | Descriptive text ("Funcionalidades", "Como funciona", "Precos") |
| Broken links | PASS | No `href="#"` without target; all anchors map to real IDs |

### Content SEO

| Check | Status | Notes |
|-------|--------|-------|
| Primary keyword in title | PASS | "Software de Gestao de Frotas TVDE" |
| Primary keyword in H1 | FAIL | H1 is "Liquidacoes em minutos." |
| Primary keyword in description | PASS | "software de gestao de frotas TVDE" |
| Primary keyword in first 100 words | PASS | Body opens with brand + keyword |
| Secondary keywords in H2/H3 | PASS | "frota TVDE", "Liquidacoes automaticas", "Portal do motorista" |
| Word count | PASS | ~2,500 words (adequate for SaaS landing page) |
| FAQ schema markup | PASS | FAQPage JSON-LD with 8 Q&A pairs |
| FAQ HTML semantics | WARN | Uses div/button, not `<details>`/`<summary>` |
| Pricing content | WARN | Shows "EUR --" placeholder |
| Social proof | FAIL | No testimonials, logos or metrics |
| CTA text | PASS | Descriptive ("Pedir Demo", "Comecar trial", "Ver funcionalidades") |
| Legal pages | FAIL | `<span>` placeholders, not links to real pages |

### Indexability

| Check | Status | Notes |
|-------|--------|-------|
| HTTPS | PASS | 308 redirect, HSTS header |
| robots.txt | PASS | Correctly configured |
| sitemap.xml | PASS | Both pages listed |
| No accidental noindex | PASS | Clean |
| Server | PASS | Vercel, HTTP/2 |

### Local / Niche SEO

| Check | Status | Notes |
|-------|--------|-------|
| Language declaration | PASS | `pt-PT` |
| Business address (NAP) | FAIL | Email only, no address/NIPC/phone |
| Regulatory credibility | FAIL | No mention of Lei 45/2018, IMT |
| Hreflang self-reference | FAIL | Missing |

---

## Priority Action Plan

| # | Priority | Issue | Effort | Impact |
|---|----------|-------|--------|--------|
| 1 | Critical | Add missing OG tags (type, site_name, image, locale) | 10 min | High -- fixes social sharing |
| 2 | Critical | Add video poster image + preload | 30 min | High -- fixes LCP |
| 3 | Critical | Shorten meta description to <155 chars | 5 min | Medium -- prevents SERP truncation |
| 4 | High | Add hreflang self-reference | 5 min | Medium -- clarity for Google |
| 5 | High | Create privacy and terms pages | 2-4 hrs | High -- legal requirement |
| 6 | High | Add social proof section | 4-8 hrs | High -- conversion + E-E-A-T |
| 7 | High | Enrich H1 with primary keyword | 10 min | Medium -- ranking signal |
| 8 | High | Finalise and display pricing | When ready | High -- conversion + rich results |
| 9 | High | Fix FAQ to use `<details>`/`<summary>` | 1 hr | Low-medium |
| 10 | Medium | Trim demo page description <155 | 5 min | Low |
| 11 | Medium | Convert logos to WebP / use next/image | 30 min | Low |
| 12 | Medium | Add NAP + NIPC to footer + JSON-LD | 30 min | Medium -- local SEO |
| 13 | Medium | Add Lei 45/2018 credibility signal | 10 min | Low-medium |
| 14 | Low | Create blog/recursos section | 20+ hrs | Very high (long-term) |
| 15 | Low | Build external backlinks | Ongoing | Very high (long-term) |
| 16 | Low | Trim title if any future edits | 5 min | Negligible |
