import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "The 18-Month AI Window",
  description:
    "Why the next 18 months separate SMBs that build operational AI leverage from those that spend the decade catching up. Analysis from ArvinTech.",
  path: "/ai-window-2026",
})

export default function AiWindowLayout({ children }: { children: React.ReactNode }) {
  return children
}
