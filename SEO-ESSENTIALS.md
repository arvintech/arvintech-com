# ArvinTech SEO essentials

A 90-day plan so [arvintech.com](https://arvintech.com) can be found for the work it actually sells: managed IT, AI automation, and Next.js sites for Bay Area and Tri-Cities WA firms.

Rankings follow crawl access, a matching title, one intent per URL, and proof.

**Source:** site audit of this repo, 23 October 2026, against [Google Search Essentials](https://developers.google.com/search/docs/essentials).

**Live Cursor canvas:** this document is the git copy. The interactive version lives beside chat as `seo-essentials-strategy.canvas.tsx`.

---

## Status (23 October 2026)

| Metric | Value |
| --- | --- |
| Indexable page files | 43 |
| Unique titles after Phase 1 | 43 of 43 |
| URLs in `sitemap.xml` | 55 |
| Search Console sitemap submit | Manual — do this after deploy |

Phase 1 shipped: `metadataBase`, canonicals, unique titles, Organization + Concord / Walla Walla `ProfessionalService` JSON-LD, sitemap, robots, and 1200×630 Open Graph / Twitter images.

Homepage document title is **Managed IT & AI Automation | Bay Area & Tri-Cities | ArvinTech**. After deploy, submit `https://arvintech.com/sitemap.xml` in Google Search Console.

NAP lives in `lib/locations.ts`. Keep footer, About, Managed IT, and schema in lockstep with that file.

---

## What “essentials” means here

Google’s Search Essentials are three layers: technical access, no spam, and a few high-leverage practices. For this site that maps to crawlable HTML, honest titles, and content a Concord CPA or Kennewick clinic would actually search for.

Keywords in a meta tag, stuffing “SEO Optimized” on the homepage, and more blog placeholders will not move the needle.

| Layer | Google’s bar | ArvinTech status |
| --- | --- | --- |
| Technical access | Googlebot unblocked, HTTP 200, indexable HTML, sitemap, HTTPS, one canonical per page | Phase 1 shipped: `sitemap.ts`, `robots.ts`, `metadataBase`, per-URL canonicals. Homepage metadata lives in the root layout. |
| Spam / quality | People-first content. No scaled thin pages, fake authors, or markup that is not on the page | How we build is real. Blog index still lists placeholder posts (e.g. “Dr. Sarah Chen”). That is the quality risk. |
| Best practices | Words people search, in title and H1. Crawlable links. Tell people about the site. Schema that matches visible content. | Titles, OG images, and ProfessionalService schema are in the repo. Search Console sitemap submit is the remaining manual step after deploy. |

---

## Technical baseline

Next.js App Router can do this well if metadata lives in server files. Twenty-eight routes are `"use client"` pages, including `/`, `/about`, `/support`, `/blog`, and `/clients`. Those pages cannot export `metadata`. Put titles in a sibling `layout.tsx`, or split a thin server wrapper from the client UI.

| File / field | Do this | Why |
| --- | --- | --- |
| `app/layout.tsx` | `metadataBase: https://arvintech.com`. Title template `%s \| ArvinTech`. Default title and description that name managed IT, AI automation, Concord / Tri-Cities WA. | Absolute OG URLs and a consistent SERP brand. Drop the unused keywords array; Google ignores it. |
| `app/sitemap.ts` | Emit every public URL. Exclude preview, API, and debug routes. | Google discovers the long How we build tree without waiting on internal links. |
| `app/robots.ts` | Allow `/`, point Sitemap to `/sitemap.xml`. Disallow `/api/`. | Makes crawl policy explicit instead of hoping defaults hold. |
| Canonical + OG | `alternates.canonical` on every layout. One 1200×630 OG image per money page. | Stops http/www duplicates and empty social cards. |
| JSON-LD | Organization + two ProfessionalService nodes (Concord CA, Walla Walla WA serving Tri-Cities). Service on money pages. BreadcrumbList on nested How we build URLs. | Helps entity understanding and local pack eligibility. Markup only what visitors can see. |

Homepage title: **Managed IT & AI Automation | Bay Area & Tri-Cities | ArvinTech**. Description names Concord, Walla Walla, and Kennewick / Pasco / Richland, plus “since 2000,” and the three offers.

---

## One intent per URL

The site already has enough pages. The ranking problem is overlap. Treat four clusters as the commercial spine. Everything else either supports one of them or should not compete in the title.

### `/managed-it-support` — primary

Managed IT for professional firms.

**Queries:** managed IT Concord CA, managed IT Walla Walla, IT support Kennewick WA, MSP Tri-Cities, MSP for law / CPA / medical offices.

**Support, do not compete:** `/support` (portal), `/maintenance` (retainer), `/it-infrastructure-support` (planning). Give those titles that say “portal,” “maintenance,” and “roadmap” so they stop targeting the same MSP query.

### `/ai-automation` — primary

AI automation for SMBs.

**Queries:** AI automation for small business, workflow automation for accounting firms, AI assistant for law firms.

**Support:** `/ai-readiness` (assessment), `/smb-ai-tools-2025` and `/ai-window-2026` (thought leadership), `/coreweave-ai-strategy` (GPU / private LLM — keep this secondary; it is not the SMB entry query).

### `/mission-web-studio` — primary

Next.js sites instead of WordPress.

**Queries:** Next.js website for small business, WordPress alternative for nonprofits, secure business website Bay Area.

**Support:** `/how-we-build` (proof of method), `/wordpress-vulnerabilities` (problem page), `/non-profits` (vertical). Do not title How we build as a competing service page.

### `/work-with-us` and `/about` — trust, not ranking bets

`/about` should rank for the brand (“ArvinTech Concord,” “Arvin Lioanag”). `/clients` and `/clients/[slug]` are proof, not a fourth service. Noindex client pages only if they are private portals; keep them indexable if they are public case proof.

### Cannibalization to resolve

| Competing URLs | They currently look like | Keep as |
| --- | --- | --- |
| `/managed-it-support`, `/it-infrastructure-support`, `/support`, `/support-pro`, `/maintenance` | Five IT-shaped pages | One MSP page. Support = client portal. Maintenance = ongoing plan. Infrastructure = AI-ready roadmap. Support-pro = higher tier of the portal, not a second MSP pitch. |
| `/ai-readiness`, `/ai-automation`, `/business-clarity`, `/clear-plan` | Four “get ready for AI” stories | Readiness = assessment. Automation = implementation. Business Clarity / Clear Plan = consulting offer; either merge or title them as the paid sprint, not a second assessment. |
| Homepage vs every service page | Homepage is a long scroll of services, white papers, literature, and hiring | Homepage targets brand + “managed IT and AI automation Bay Area and Tri-Cities.” Deep content belongs on the child URL, with one descriptive link from home. |

---

## Local SEO

Two markets, one NAP file (`lib/locations.ts`).

| Market | Address | Queries | On-site move |
| --- | --- | --- | --- |
| Concord / East Bay / San Francisco | 785 Oak Grove Rd. Suite E2, Concord CA 94518 | managed IT Concord CA, IT support Walnut Creek, MSP Bay Area | Street is in footer, About, Managed IT, and JSON-LD. Keep that string identical. Add a phone when you publish one. |
| Walla Walla office, Tri-Cities service area | 3838 Pranger Road, Walla Walla WA 99362 | managed IT Walla Walla, IT support Kennewick, MSP Pasco, IT support Richland, MSP Tri-Cities | NAP is this street everywhere. GBP: Walla Walla location + service area covering Kennewick, Pasco, Richland. Do not create a second GBP at a Tri-Cities address you do not occupy. |

Schema locality for Washington is **Walla Walla** — that is the real street. Google Business Profile must be Walla Walla with a service area, not a fake Kennewick pin.

Skip dedicated city doorway pages (`/kennewick`, `/pasco`, `/richland`, `/walla-walla`) until each page has unique proof. One Walla Walla ProfessionalService entity with Tri-Cities in `areaServed` beats four thin city URLs.

---

## Content that can actually rank

How we build, WordPress vulnerabilities, nonprofit sites, and the Windows 10 end-of-support post are the real assets: specific, useful, tied to an offer. The blog index still advertises generic AI posts with fictional bylines. Delete or noindex placeholders. Do not scale more AI-written roundups.

| Piece | Search intent | Links to |
| --- | --- | --- |
| Windows 10 end of support | Urgent IT risk, time-bound | `/managed-it-support` |
| WordPress vulnerabilities | Why leave WordPress | `/mission-web-studio` |
| Websites for nonprofits | Vertical web build | `/mission-web-studio` |
| How we build (cluster) | Proof of method, not a keyword play | `/mission-web-studio` |
| Start learning AI (rewrite) | SMB getting started, people-first | `/ai-readiness` |

### Next pieces worth writing

One page per industry named on the homepage: law firms, accounting firms, medical offices, real estate. Each should answer security, downtime, and one AI use case, then link to managed IT and automation.

After that, two or three permissioned case studies beat another white paper. The AI Readiness study on the homepage is long; give it a unique title, author, date, and Article schema, or it reads as marketing HTML rather than a citable document.

---

## On-page pattern for every money page

| Element | Rule |
| --- | --- |
| Title | Primary query + market or audience + ArvinTech. Under ~60 characters. |
| H1 | Same promise as the title, in natural language. One H1. |
| First paragraph | Who it is for, where you work, what they get. Include Concord or Walla Walla / Tri-Cities when the page is local. |
| H2s | Questions people ask: what’s included, who it’s for, how it works, what it costs or how to start. |
| Internal links | One link up to the cluster primary, two links to proof (How we build, a client, a post). Descriptive anchors, not “learn more.” |
| Images | Descriptive alt. The logo should say “ArvinTech logo,” not empty or repeated as the only alt on the page. |
| CTA | One primary action. The homepage form must post somewhere; an unsubmitted form wastes the ranking you earn. |

---

## 90-day execution

Do not write new landing pages until Phase 1 is live and Search Console shows the sitemap as submitted. Coverage and titles compound; volume does not.

### Phase 1 — days 1–14 (done)

Make Google see the real business.

- [x] Set `metadataBase`, title template, and canonicals in `app/layout.tsx`
- [x] Rewrite homepage title and description to match the H1: managed IT + AI automation since 2000
- [x] Add unique metadata via `layout.tsx` for every use-client money page
- [x] Ship `app/sitemap.ts` and `app/robots.ts`, then submit in Search Console *(files shipped; Search Console submit is still manual after deploy)*
- [x] Add JSON-LD for Organization plus LocalBusiness (Concord and Walla Walla / Tri-Cities)
- [x] Add Open Graph + Twitter images so shares are not a blank logo tile

### Phase 2 — days 15–45

One intent per URL, local profiles, working conversion.

- [ ] Give each service URL one primary intent; canonicalize or merge overlapping IT pages
- [ ] Build internal links from homepage and How we build into the four money clusters
- [ ] Add FAQ + BreadcrumbList schema only where the questions are visible on the page
- [ ] Claim and complete Google Business Profiles for Concord and Walla Walla (service area: Tri-Cities)
- [ ] Wire the homepage consultation form so leads actually submit

### Phase 3 — days 46–90

Industry pages, real case studies, citation consistency. Expand only after Search Console shows impressions on the four primary URLs.

- [ ] Replace placeholder blog posts with people-first pieces tied to real services
- [ ] Publish industry pages for law, accounting, medical, and real estate firms
- [ ] Turn 2–3 real client outcomes into indexable case studies (with permission)
- [ ] Keep NAP identical everywhere: Concord street, Walla Walla street (3838 Pranger Road), phone when published

---

## How you will know it is working

| Target | Meaning |
| --- | --- |
| 4 primary URLs in Search Console | `/managed-it-support`, `/ai-automation`, `/mission-web-studio`, homepage |
| LCP ≤ 2.5s | Mobile, 75th percentile |
| INP ≤ 200ms | Mobile, 75th percentile |
| CLS ≤ 0.1 | Mobile, 75th percentile |

Watch Search Console for the four primary URLs, branded queries (“arvintech”), and local queries (“managed IT Concord”, “managed IT Walla Walla”, “IT support Kennewick”, “MSP Tri-Cities”). Index coverage should list the sitemap URLs, not only pages Google stumbled on.

Vercel already helps Core Web Vitals. The homepage hero image (`/transamerica.JPG`) is the likely LCP risk — keep it prioritized and sized.

### Out of scope until essentials ship

Guest posts, directory blasting, buying links, and generating dozens of AI articles will not fix crawl or title problems. Earn mentions from clients, the City College / SF ecosystem, and the literature projects only after the commercial pages are crawlable and correctly titled. Phase 1 already replaced the old “Amplify Your Mind” homepage title.
