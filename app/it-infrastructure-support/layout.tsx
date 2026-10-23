import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "IT Infrastructure Roadmap",
  description:
    "Plan AI-ready infrastructure, mobile work, and the tools your team actually needs. Strategic IT planning from ArvinTech — distinct from day-to-day managed support.",
  path: "/it-infrastructure-support",
})

export default function ITInfrastructureLayout({ children }: { children: React.ReactNode }) {
  return children
}
