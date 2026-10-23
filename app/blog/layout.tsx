import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Blog",
  description:
    "Practical notes on managed IT, Windows migrations, AI for small businesses, and how ArvinTech builds Next.js sites.",
  path: "/blog",
})

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
