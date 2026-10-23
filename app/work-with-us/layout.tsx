import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Work With Us",
  description:
    "Join ArvinTech. Collaborate on managed IT, AI automation, and Next.js sites for professional firms in the Bay Area, Walla Walla, and the Tri-Cities of Washington.",
  path: "/work-with-us",
})

export default function WorkWithUsLayout({ children }: { children: React.ReactNode }) {
  return children
}
