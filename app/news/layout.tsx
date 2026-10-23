import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "News",
  description: "Updates from ArvinTech on managed IT, AI automation, and how we build for clients.",
  path: "/news",
})

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return children
}
