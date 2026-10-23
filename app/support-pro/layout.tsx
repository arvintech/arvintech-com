import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "IA Support Pro",
  description:
    "Premium one-on-one help for AI tools, prompts, workflows, and technical troubleshooting from ArvinTech.",
  path: "/support-pro",
})

export default function SupportProLayout({ children }: { children: React.ReactNode }) {
  return children
}
