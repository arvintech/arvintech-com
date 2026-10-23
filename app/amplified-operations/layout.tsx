import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Amplified Operations",
  description:
    "Streamline business processes with AI-powered automation. ArvinTech helps professional firms work smarter on the operations they already run.",
  path: "/amplified-operations",
})

export default function AmplifiedOperationsLayout({ children }: { children: React.ReactNode }) {
  return children
}
