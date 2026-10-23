import type { Metadata } from "next"
import { CONCORD, MARKETS_SENTENCE, MARKETS_TITLE, WALLA_WALLA } from "@/lib/locations"

export const SITE_URL = "https://arvintech.com"
export const SITE_NAME = "ArvinTech"

export const DEFAULT_TITLE =
  `Managed IT & AI Automation | ${MARKETS_TITLE} | ArvinTech`

export const DEFAULT_DESCRIPTION =
  `Secure, manage, and modernize your business infrastructure with managed IT support and AI automation. Serving ${MARKETS_SENTENCE} since 2000.`

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`
  const ogTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`

  return {
    title: { absolute: ogTitle },
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: ogTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
    },
  }
}

export function jsonLdGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/arvintech-blocks-logo.png`,
        foundingDate: "2000",
        sameAs: [
          "https://facebook.com/arvintech",
          "https://linkedin.com/company/arvintech",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#${CONCORD.id}`,
        name: CONCORD.schemaName,
        url: SITE_URL,
        image: `${SITE_URL}/arvintech-blocks-logo.png`,
        parentOrganization: { "@id": `${SITE_URL}/#organization` },
        areaServed: [...CONCORD.areaServed],
        address: {
          "@type": "PostalAddress",
          streetAddress: CONCORD.street,
          addressLocality: CONCORD.city,
          addressRegion: CONCORD.region,
          postalCode: CONCORD.postalCode,
          addressCountry: CONCORD.country,
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#${WALLA_WALLA.id}`,
        name: WALLA_WALLA.schemaName,
        url: SITE_URL,
        image: `${SITE_URL}/arvintech-blocks-logo.png`,
        parentOrganization: { "@id": `${SITE_URL}/#organization` },
        areaServed: [...WALLA_WALLA.areaServed],
        address: {
          "@type": "PostalAddress",
          streetAddress: WALLA_WALLA.street,
          addressLocality: WALLA_WALLA.city,
          addressRegion: WALLA_WALLA.region,
          postalCode: WALLA_WALLA.postalCode,
          addressCountry: WALLA_WALLA.country,
        },
      },
    ],
  }
}

export const STATIC_SITEMAP_PATHS: {
  path: string
  changeFrequency: "weekly" | "monthly"
  priority: number
}[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/managed-it-support", changeFrequency: "monthly", priority: 0.9 },
  { path: "/ai-automation", changeFrequency: "monthly", priority: 0.9 },
  { path: "/ai-readiness", changeFrequency: "monthly", priority: 0.9 },
  { path: "/mission-web-studio", changeFrequency: "monthly", priority: 0.9 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/work-with-us", changeFrequency: "monthly", priority: 0.7 },
  { path: "/support", changeFrequency: "monthly", priority: 0.7 },
  { path: "/clients", changeFrequency: "monthly", priority: 0.7 },
  { path: "/how-we-build", changeFrequency: "monthly", priority: 0.7 },
  { path: "/non-profits", changeFrequency: "monthly", priority: 0.7 },
  { path: "/it-infrastructure-support", changeFrequency: "monthly", priority: 0.6 },
  { path: "/maintenance", changeFrequency: "monthly", priority: 0.6 },
  { path: "/migration-strategy", changeFrequency: "monthly", priority: 0.6 },
  { path: "/wordpress-vulnerabilities", changeFrequency: "monthly", priority: 0.6 },
  { path: "/business-clarity", changeFrequency: "monthly", priority: 0.6 },
  { path: "/clear-plan", changeFrequency: "monthly", priority: 0.6 },
  { path: "/amplified-operations", changeFrequency: "monthly", priority: 0.6 },
  { path: "/amplified-customer-communications", changeFrequency: "monthly", priority: 0.6 },
  { path: "/coreweave-ai-strategy", changeFrequency: "monthly", priority: 0.5 },
  { path: "/smb-ai-tools-2025", changeFrequency: "monthly", priority: 0.5 },
  { path: "/ai-window-2026", changeFrequency: "monthly", priority: 0.5 },
  { path: "/support-pro", changeFrequency: "monthly", priority: 0.5 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.6 },
  { path: "/blog/windows-10-end-of-support", changeFrequency: "monthly", priority: 0.6 },
  { path: "/blog/start-learning-ai", changeFrequency: "monthly", priority: 0.5 },
  { path: "/news", changeFrequency: "weekly", priority: 0.4 },
  { path: "/how-we-build/do-i-need-one", changeFrequency: "monthly", priority: 0.6 },
  { path: "/how-we-build/speed", changeFrequency: "monthly", priority: 0.5 },
  { path: "/how-we-build/security", changeFrequency: "monthly", priority: 0.5 },
  { path: "/how-we-build/flexibility", changeFrequency: "monthly", priority: 0.5 },
  { path: "/how-we-build/ai-ready", changeFrequency: "monthly", priority: 0.5 },
  { path: "/how-we-build/predictable-deploys", changeFrequency: "monthly", priority: 0.5 },
  { path: "/how-we-build/cursor-ide", changeFrequency: "monthly", priority: 0.4 },
  { path: "/how-we-build/vercel-hosting", changeFrequency: "monthly", priority: 0.4 },
  { path: "/how-we-build/software-stack", changeFrequency: "monthly", priority: 0.4 },
  { path: "/how-we-build/your-site-needs", changeFrequency: "monthly", priority: 0.5 },
  { path: "/how-we-build/workflow/agree", changeFrequency: "monthly", priority: 0.4 },
  { path: "/how-we-build/workflow/build", changeFrequency: "monthly", priority: 0.4 },
  { path: "/how-we-build/workflow/preview", changeFrequency: "monthly", priority: 0.4 },
  { path: "/how-we-build/workflow/deploy", changeFrequency: "monthly", priority: 0.4 },
  { path: "/how-we-build/workflow/ongoing", changeFrequency: "monthly", priority: 0.4 },
]
