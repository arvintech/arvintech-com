import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "WordPress Vulnerabilities",
  description:
    "Which WordPress risk classes a Next.js front end actually removes — and which sites are conversion candidates. Analysis from ArvinTech Mission Web Studio.",
  path: "/wordpress-vulnerabilities",
})

export default function WordPressVulnerabilitiesLayout({ children }: { children: React.ReactNode }) {
  return children
}
