import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Mission Web Studio",
  description:
    "Full-service Next.js sites — fast, secure, and AI-ready. ArvinTech builds business and nonprofit websites for the Bay Area, Walla Walla, and the Tri-Cities of Washington.",
  path: "/mission-web-studio",
})

export default function MissionWebLayout({ children }: { children: React.ReactNode }) {
  return children
}
