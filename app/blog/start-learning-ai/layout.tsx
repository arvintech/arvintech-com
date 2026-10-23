import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Start Learning AI",
  description:
    "A practical starting point for small-business teams using AI on work they already do — drafts, summaries, and checklists — from ArvinTech.",
  path: "/blog/start-learning-ai",
})

export default function StartLearningAILayout({ children }: { children: React.ReactNode }) {
  return children
}
