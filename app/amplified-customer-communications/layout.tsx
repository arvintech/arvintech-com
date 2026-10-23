import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Amplified Customer Communications",
  description:
    "Consistent, intelligent customer communication — follow-up, service updates, and transparency that builds trust. An ArvinTech offering.",
  path: "/amplified-customer-communications",
})

export default function AmplifiedCommunicationsLayout({ children }: { children: React.ReactNode }) {
  return children
}
