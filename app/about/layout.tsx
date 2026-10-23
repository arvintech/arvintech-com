import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "ArvinTech has provided managed IT and AI automation since 2000. Collaboration, not replacement — serving professional firms in Concord, the Bay Area, Walla Walla, and the Tri-Cities of Washington.",
  path: "/about",
})

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
