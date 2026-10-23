import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "AI Readiness Assessment",
  description:
    "Prepare your business for production AI with an Intelligence Amplifier assessment, strategy, and implementation plan from ArvinTech.",
  path: "/ai-readiness",
})

export default function AIReadinessLayout({ children }: { children: React.ReactNode }) {
  return children
}
