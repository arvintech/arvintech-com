"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function AIReadinessPage() {
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
              <Link href="/about" className="text-foreground/70 hover:text-brand-blue transition-colors font-medium">
                About
              </Link>
              <Link href="/clients" className="text-foreground/70 hover:text-brand-blue transition-colors font-medium">
                Clients
              </Link>
              <Link href="/support" className="text-foreground/70 hover:text-brand-blue transition-colors font-medium">
                Support
              </Link>
              <Link href="/work-with-us" className="btn-green text-sm">
                Work With Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-28 pb-16 px-6 bg-gradient-to-br from-brand-blue/10 via-white to-slate-50 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-20 h-20 bg-brand-blue/15 rounded-xl -rotate-12" />
        <div className="absolute bottom-16 left-16 w-14 h-14 bg-brand-green/10 rounded-lg rotate-6" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div
            className={`transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-blue/15 rounded-full mb-6">
              <svg className="w-5 h-5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span className="text-brand-blue font-semibold text-sm uppercase tracking-wider">Core services</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
              AI Readiness with{" "}
              <span className="text-brand-blue">Intelligence Amplifier</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto mb-4">
              Prepare your business for the AI era with Intelligence Amplifier assessment, strategy, and implementation
              planning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link href="/work-with-us" className="inline-flex justify-center items-center px-8 py-4 rounded-xl font-semibold bg-brand-blue text-white hover:bg-blue-700 transition-colors text-lg">
                Plan with us
              </Link>
              <Link
                href="/support"
                className="inline-flex justify-center items-center px-8 py-4 rounded-xl font-semibold border-2 border-slate-200 text-slate-800 hover:border-brand-blue hover:text-brand-blue transition-colors"
              >
                Platform support
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
              A practical path from assessment to deployment—aligned to your data, workflows, and risk tolerance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "AI Readiness Assessment",
                body: "Baseline where you are today: data, systems, skills, and governance—so priorities are evidence-based, not hype-driven.",
              },
              {
                title: "IA Platform Deployment",
                body: "Roll out Intelligence Amplifier in a controlled way: environments, integrations, and guardrails that fit your organization.",
              },
              {
                title: "Custom AI Strategy",
                body: "Roadmaps that connect use cases to outcomes—what to automate first, what to pilot, and what to defer.",
              },
              {
                title: "Team Training & Onboarding",
                body: "Enablement so people adopt new tools safely: prompts, workflows, and accountability alongside the technology.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border-2 border-slate-200 p-8 bg-gradient-to-br from-slate-50 to-white hover:border-brand-blue/60 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Already exploring AI in your business?</h2>
          <p className="text-slate-600 mb-8">
            Use our clarity resources to stress-test assumptions, or go deeper on how infrastructure and AI fit together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/business-clarity"
              className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:underline"
            >
              Business clarity &amp; readiness tools
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <span className="hidden sm:inline text-slate-300">|</span>
            <Link
              href="/it-infrastructure-support"
              className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:underline"
            >
              IT infrastructure &amp; intelligence overview
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to move from ideas to implementation?</h2>
          <p className="text-lg text-slate-300 mb-8">
            Share your goals and constraints—we&apos;ll help you sequence assessment, platform work, and adoption.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/work-with-us" className="inline-flex justify-center items-center px-8 py-4 rounded-xl font-semibold bg-brand-blue text-white hover:bg-blue-700 transition-colors text-lg">
              Work with <span className="arvintech-brand">arvintech</span>
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
