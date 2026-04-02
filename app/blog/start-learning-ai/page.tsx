"use client"

import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/Footer"

export default function StartLearningAIPage() {
  return (
    <div className="min-h-screen bg-background blocks-pattern">
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/arvintech-blocks-logo.png"
                alt="ArvinTech"
                width={48}
                height={48}
                className="w-12 h-12"
                priority
              />
              <span className="text-2xl font-bold arvintech-brand">arvintech</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/support" className="text-foreground/70 hover:text-brand-green transition-colors font-medium">
                Support
              </Link>
              <Link href="/blog" className="text-brand-green font-semibold">
                Blog
              </Link>
              <Link href="/work-with-us" className="btn-green text-sm">
                Work With Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl bg-card border border-border p-8 md:p-10 shadow-xl">
            <p className="text-sm text-violet-600 font-semibold mb-3">AI & Technology</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Start Learning AI</h1>
            <p className="text-foreground/70 text-lg mb-8">
              AI tools can save you hours every week. This quick guide shows where to start, what to practice,
              and how to get better answers from modern assistants.
            </p>

            <div className="space-y-8 text-foreground/80 leading-relaxed">
              <div>
                <h2 className="text-2xl font-bold mb-3 text-foreground">1) Pick One Assistant First</h2>
                <p>
                  Start with one tool so you can build confidence quickly. Claude is great for thoughtful writing
                  and explanations. ChatGPT is strong for broad everyday tasks. Gemini works well for users in
                  Google-heavy workflows.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-3 text-foreground">2) Learn Prompt Basics</h2>
                <p>
                  Good prompts are clear and specific. Describe your goal, add context, and request a format.
                  Example: "Summarize this email in 5 bullets and draft a polite reply in under 120 words."
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-3 text-foreground">3) Use Follow-Up Questions</h2>
                <p>
                  Treat AI like a conversation, not a one-shot search. Ask it to simplify, expand, compare
                  options, or rewrite for a different audience. Iteration is where most value comes from.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-3 text-foreground">4) Start with Real Tasks</h2>
                <p>
                  Use AI for things you already do: drafting emails, summarizing notes, creating checklists, and
                  troubleshooting errors. If it saves even 10 minutes per task, it quickly compounds.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://claude.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-semibold text-sm hover:bg-orange-200 transition-colors"
              >
                Try Claude
              </a>
              <a
                href="https://chat.openai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-semibold text-sm hover:bg-violet-200 transition-colors"
              >
                Try ChatGPT
              </a>
              <a
                href="https://gemini.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm hover:bg-blue-200 transition-colors"
              >
                Try Gemini
              </a>
            </div>

            <div className="mt-10 pt-6 border-t border-border">
              <Link href="/support" className="text-brand-green font-semibold hover:underline">
                Back to Support →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
