import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "AI Automation for Small Business",
  description:
    "Deploy workflow automation, AI assistants, and custom integrations that cut manual work for professional firms in the Bay Area, Walla Walla, and the Tri-Cities of Washington.",
  path: "/ai-automation",
})

export default function AIAutomationLayout({ children }: { children: React.ReactNode }) {
  return children
}
