"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function AIAutomationPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background">
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
              <Link href="/about" className="text-foreground/70 hover:text-brand-yellow transition-colors font-medium">
                About
              </Link>
              <Link href="/clients" className="text-foreground/70 hover:text-brand-yellow transition-colors font-medium">
                Clients
              </Link>
              <Link href="/support" className="text-foreground/70 hover:text-brand-yellow transition-colors font-medium">
                Support
              </Link>
              <Link href="/work-with-us" className="btn-green text-sm">
                Work With Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-28 pb-16 px-6 bg-gradient-to-br from-brand-yellow/15 via-white to-slate-50 relative overflow-hidden">
        <div className="absolute top-16 left-8 w-20 h-20 bg-brand-yellow/20 rounded-xl rotate-12" />
        <div className="absolute bottom-12 right-12 w-16 h-16 bg-brand-blue/10 rounded-lg -rotate-6" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div
            className={`transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-yellow/20 rounded-full mb-6">
              <svg className="w-5 h-5 text-yellow-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-yellow-800 font-semibold text-sm uppercase tracking-wider">Core services</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
              AI Automation &amp;{" "}
              <span className="text-brand-yellow">Integration</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto mb-4">
              Deploy intelligent automation systems that reduce manual work and improve operational efficiency with
              modern AI tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link
                href="/work-with-us"
                className="inline-flex justify-center items-center px-8 py-4 rounded-xl font-semibold bg-brand-yellow text-slate-900 hover:bg-yellow-400 transition-colors text-lg"
              >
                Start automating
              </Link>
              <Link
                href="/amplified-operations"
                className="inline-flex justify-center items-center px-8 py-4 rounded-xl font-semibold border-2 border-slate-200 text-slate-800 hover:border-brand-yellow hover:text-brand-yellow transition-colors"
              >
                See operations story
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What we deliver</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              End-to-end automation: map the work, connect systems, deploy assistants, and refine processes with measurable
              outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Workflow Automation",
                body: "Replace repetitive handoffs with reliable flows—routing, approvals, notifications, and data sync across the tools you already use.",
              },
              {
                title: "AI Assistant Deployment",
                body: "Purpose-built copilots for support, sales, and internal ops—grounded in your policies and connected where they should be.",
              },
              {
                title: "Custom Integration",
                body: "APIs, webhooks, and middleware so AI and automation sit cleanly between CRM, finance, ticketing, and custom line-of-business apps.",
              },
              {
                title: "Process Optimization",
                body: "Measure before and after: cycle time, error rate, and load on staff—then iterate so gains stick.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border-2 border-slate-200 p-8 bg-gradient-to-br from-slate-50 to-white hover:border-brand-yellow/70 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-brand-yellow flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Automation with a strategy</h2>
          <p className="text-slate-600 mb-8">
            Readiness and platform work often come first; automation is where the roadmap turns into throughput. Explore
            related offerings when you need the full picture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/ai-readiness"
              className="inline-flex items-center gap-2 text-brand-yellow font-semibold hover:underline"
            >
              AI readiness &amp; Intelligence Amplifier
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <span className="hidden sm:inline text-slate-300">|</span>
            <Link
              href="/amplified-operations"
              className="inline-flex items-center gap-2 text-brand-yellow font-semibold hover:underline"
            >
              Amplified Operations
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to remove manual drag from your operations?</h2>
          <p className="text-lg text-slate-300 mb-8">
            Tell us which processes hurt most—we&apos;ll propose automation and integration options that match risk and ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/work-with-us"
              className="inline-flex justify-center items-center px-8 py-4 rounded-xl font-semibold bg-brand-yellow text-slate-900 hover:bg-yellow-400 transition-colors text-lg"
            >
              Work with ArvinTech
            </Link>
            <Link
              href="/#services"
              className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all"
            >
              Back to services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
