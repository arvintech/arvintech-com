import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Managed IT Support",
  description:
    "Remote IT support, security monitoring, backups, and system maintenance for professional firms in Concord, the Bay Area, Walla Walla, and the Tri-Cities of Washington.",
  path: "/managed-it-support",
})

export default function ManagedITSupportLayout({ children }: { children: React.ReactNode }) {
  return children
}
