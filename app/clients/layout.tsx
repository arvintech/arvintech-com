import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Clients",
  description:
    "Businesses ArvinTech partners with across healthcare, logistics, nonprofits, legal, and property management.",
  path: "/clients",
})

export default function ClientsLayout({ children }: { children: React.ReactNode }) {
  return children
}
