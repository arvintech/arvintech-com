import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Windows 10 End of Support",
  description:
    "Windows 10 support ended October 14, 2025. What that means for security, compatibility, and a phased Windows 11 migration with ArvinTech.",
  path: "/blog/windows-10-end-of-support",
})

export default function Windows10Layout({ children }: { children: React.ReactNode }) {
  return children
}
