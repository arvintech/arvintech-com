import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "A Clear Plan for Growth",
  description:
    "Treat your website as a growth tool, not a brochure. A planning calculator and strategy from ArvinTech for traceable customer acquisition.",
  path: "/clear-plan",
})

export default function ClearPlanLayout({ children }: { children: React.ReactNode }) {
  return children
}
