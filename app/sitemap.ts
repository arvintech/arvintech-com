import type { MetadataRoute } from "next"
import { CLIENTS } from "@/lib/clients"
import { SITE_URL, STATIC_SITEMAP_PATHS } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const staticEntries = STATIC_SITEMAP_PATHS.map(({ path, changeFrequency, priority }) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))

  const clientEntries = CLIENTS.map((client) => ({
    url: `${SITE_URL}/clients/${client.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }))

  return [...staticEntries, ...clientEntries]
}
