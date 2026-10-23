import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "PC Maintenance Plan",
  description:
    "Proactive PC maintenance to keep business computers secure, updated, and running smoothly. An ongoing plan from ArvinTech — not a one-time repair.",
  path: "/maintenance",
})

export default function MaintenanceLayout({ children }: { children: React.ReactNode }) {
  return children
}
