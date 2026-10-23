import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "What SMBs Actually Did With AI in 2025",
  description:
    "A field study of AI tools small and midsize businesses tried in 2025 — what they kept, what they dropped, and what it means for 2026.",
  path: "/smb-ai-tools-2025",
})

export default function SmbAiToolsLayout({ children }: { children: React.ReactNode }) {
  return children
}
