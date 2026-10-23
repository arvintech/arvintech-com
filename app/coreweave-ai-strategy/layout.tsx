import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "CoreWeave AI Strategy for SMBs",
  description:
    "How small and midsize businesses can run production AI on CoreWeave GPU cloud — private LLMs, document intelligence, and 90-day deployment with ArvinTech.",
  path: "/coreweave-ai-strategy",
})

export default function CoreWeaveLayout({ children }: { children: React.ReactNode }) {
  return children
}
