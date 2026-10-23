import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "IT Support Portal",
  description:
    "Get help with devices, backups, security, and day-to-day IT. ArvinTech support for businesses in Concord, the Bay Area, Walla Walla, and the Tri-Cities of Washington.",
  path: "/support",
})

export default function SupportLayout({ children }: { children: React.ReactNode }) {
  return children
}
