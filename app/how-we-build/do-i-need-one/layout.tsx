import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Do I Need a Next.js Site?",
  description:
    "A short quiz to see whether a Next.js site is the right fit for your business right now — no email required. From ArvinTech Mission Web Studio.",
  path: "/how-we-build/do-i-need-one",
})

export default function DoINeedOneLayout({ children }: { children: React.ReactNode }) {
  return children
}
