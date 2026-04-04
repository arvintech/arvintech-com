"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function ManagedITSupportPage() {
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
              <Link href="/about" className="text-foreground/70 hover:text-brand-green transition-colors font-medium">
                About
              </Link>
              <Link href="/clients" className="text-foreground/70 hover:text-brand-green transition-colors font-medium">
                Clients
              </Link>
              <Link href="/support" className="text-foreground/70 hover:text-brand-green transition-colors font-medium">
                Support
              </Link>
              <Link href="/work-with-us" className="btn-green text-sm">
                Work With Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-28 pb-16 px-6 bg-gradient-to-br from-brand-green/10 via-white to-slate-50 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-brand-green/15 rounded-xl rotate-12" />
        <div className="absolute bottom-16 right-16 w-14 h-14 bg-brand-blue/10 rounded-lg -rotate-6" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div
            className={`transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green/15 rounded-full mb-6">
              <svg className="w-5 h-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-brand-green font-semibold text-sm uppercase tracking-wider">Core services</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
              Managed <span className="text-brand-green">IT Support</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto mb-4">
              Remote IT support, security monitoring, backups, and system maintenance. Your technology infrastructure,
              professionally managed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link href="/support" className="btn-green text-lg px-8 py-4 inline-flex justify-center">
                Get support
              </Link>
              <Link
                href="/work-with-us"
                className="inline-flex justify-center items-center px-8 py-4 rounded-xl font-semibold border-2 border-slate-200 text-slate-800 hover:border-brand-green hover:text-brand-green transition-colors"
              >
                Work with us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What you get</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Predictable operations for desktops, servers, cloud services, and endpoints—so your team stays productive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "24/7 remote support",
                body: "Help when issues arise—triage, troubleshooting, and escalation handled by people who know your environment.",
              },
              {
                title: "Security monitoring",
                body: "Ongoing visibility into alerts, patches, and risky configurations—reducing downtime and exposure.",
              },
              {
                title: "Automated backups",
                body: "Scheduled backups and tested restore paths so recovery isn’t a surprise when you need it.",
              },
              {
                title: "System updates",
                body: "Patching and lifecycle management for OS and key apps, coordinated to limit disruption.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border-2 border-slate-200 p-8 bg-gradient-to-br from-slate-50 to-white hover:border-brand-green/60 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-brand-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Broader infrastructure strategy</h2>
          <p className="text-slate-600 mb-8">
            Managed support sits alongside planning for AI readiness, mobile work, and modern platforms. See how we think
            about the full stack.
          </p>
          <Link
            href="/it-infrastructure-support"
            className="inline-flex items-center gap-2 text-brand-green font-semibold hover:underline"
          >
            IT infrastructure &amp; intelligence overview
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to offload IT noise?</h2>
          <p className="text-lg text-slate-300 mb-8">
            Tell us about your team size, stack, and priorities—we&apos;ll map a sensible support plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/support" className="btn-green text-lg px-8 py-4">
              Contact support
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
