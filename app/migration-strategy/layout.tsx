import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Windows 11 Migration Strategy",
  description:
    "Plan a Windows 11 upgrade with inventory, pilots, backups, and rollback. ArvinTech migration support after Windows 10 end of support.",
  path: "/migration-strategy",
})

export default function MigrationStrategyLayout({ children }: { children: React.ReactNode }) {
  return children
}
