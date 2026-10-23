import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Business Clarity Case Study",
  description:
    "How one tax preparer reached 4× revenue in a year with no new hires. An ArvinTech consulting case on process, intake, and AI-ready operations.",
  path: "/business-clarity",
})

export default function BusinessClarityLayout({ children }: { children: React.ReactNode }) {
  return children
}
