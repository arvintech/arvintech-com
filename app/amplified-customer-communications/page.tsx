"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function AmplifiedCustomerCommunicationsPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
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

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-brand-blue rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-brand-green rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className={`text-center transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-blue/20 rounded-full mb-6">
              <svg className="w-5 h-5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="text-brand-blue font-semibold text-sm">CORE OFFERING</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
              <span className="text-brand-blue">Amplified</span>
              <br />
              <span className="text-white">Customer Communications</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-4">
              Build trust through transparency. Deliver exceptional service with 
              <span className="text-brand-blue font-semibold"> consistent, intelligent communication.</span>
            </p>
            <p className="text-2xl md:text-3xl font-bold text-white mb-8">
              Better communication <span className="text-brand-green">creates more customers.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/support" className="bg-brand-blue text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 transition-all text-lg">
                Get Started
              </Link>
              <Link href="/business-clarity" className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all">
                See Case Study
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Transform How You <span className="text-brand-blue">Communicate</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Every interaction is an opportunity to build trust. Make each one count.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-brand-blue/5 to-brand-blue/10 border border-brand-blue/20">
              <div className="w-16 h-16 bg-brand-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">100% Transparency</h3>
              <p className="text-slate-600">
                Clients see exactly what they're paying for. No hidden fees, no surprises.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-brand-green/5 to-brand-green/10 border border-brand-green/20">
              <div className="w-16 h-16 bg-brand-green/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">5× Faster Response</h3>
              <p className="text-slate-600">
                AI-powered incident management ensures rapid, consistent support delivery.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-brand-yellow/5 to-brand-yellow/10 border border-brand-yellow/20">
              <div className="w-16 h-16 bg-brand-yellow/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Higher Retention</h3>
              <p className="text-slate-600">
                Clients who feel valued stay longer. Build lasting relationships through trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What's Included
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A complete suite of tools to amplify your customer relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Product Value & Transparency */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-brand-blue">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <span className="inline-block px-3 py-1 bg-teal-600 text-white text-xs font-semibold rounded-full mb-2">MISSION WEB FUNCTION</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Product Value & Transparency</h3>
                  <p className="text-slate-600 mb-4">
                    Show your clients exactly what they're getting. Clear pricing, detailed breakdowns, and honest communication build trust that lasts.
                  </p>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-brand-blue">✓</span> Clear service descriptions
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-blue">✓</span> Transparent pricing breakdowns
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-blue">✓</span> Progress visibility for clients
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-blue">✓</span> Value demonstration reports
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Intelligence Amplified Customer Service */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-brand-green">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <span className="inline-block px-3 py-1 bg-teal-600 text-white text-xs font-semibold rounded-full mb-2">MISSION WEB FUNCTION</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Intelligence Amplified Incident Manager</h3>
                  <p className="text-slate-600 mb-4">
                    AI-powered customer service that helps you deliver support fast and consistent. Track, respond, and resolve with intelligence.
                  </p>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-brand-green">✓</span> Smart ticket categorization
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-green">✓</span> Response templates with AI suggestions
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-green">✓</span> Escalation automation
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-green">✓</span> Service consistency scoring
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Client Portal */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-brand-yellow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-yellow/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div>
                  <span className="inline-block px-3 py-1 bg-teal-600 text-white text-xs font-semibold rounded-full mb-2">MISSION WEB FUNCTION</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Client Portal & Secure Document Sharing</h3>
                  <p className="text-slate-600 mb-4">
                    A dedicated space for your clients to access documents, track progress, and communicate securely—all in one place.
                  </p>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-brand-yellow">✓</span> Branded client portal
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-yellow">✓</span> Secure document uploads
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-yellow">✓</span> Real-time status updates
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-yellow">✓</span> Message history and audit trail
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Automated Follow-ups */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-brand-red">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span className="inline-block px-3 py-1 bg-teal-600 text-white text-xs font-semibold rounded-full mb-2">MISSION WEB FUNCTION</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Automated Follow-ups & Reminders</h3>
                  <p className="text-slate-600 mb-4">
                    Never let a client slip through the cracks. Intelligent automation keeps communication flowing without manual effort.
                  </p>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-brand-red">✓</span> Scheduled check-ins
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-red">✓</span> Deadline reminders
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-red">✓</span> Document request automation
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-red">✓</span> Re-engagement campaigns
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consistent Support Delivery */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue/10 rounded-full mb-4">
                <span className="text-brand-blue font-semibold text-sm">CONSISTENCY</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Achieve the Fastest and Most Consistent Support Delivery
              </h2>
              <p className="text-xl text-slate-600 mb-6">
                Every client deserves the same excellent experience. Our systems ensure consistency across your entire team.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Response Templates</h4>
                    <p className="text-slate-600 text-sm">Pre-approved responses ensure consistent messaging across your team.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">SLA Tracking</h4>
                    <p className="text-slate-600 text-sm">Monitor response times and ensure commitments are met.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Quality Scoring</h4>
                    <p className="text-slate-600 text-sm">AI-powered analysis of communication quality and sentiment.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Team Performance</h4>
                    <p className="text-slate-600 text-sm">Dashboards showing team metrics and improvement opportunities.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-brand-blue/10 to-brand-green/10 rounded-3xl p-8">
                <div className="bg-white rounded-2xl shadow-xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Communication Dashboard</p>
                      <p className="text-sm text-brand-blue">All metrics healthy</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-slate-100">
                      <span className="text-slate-600 text-sm">Avg Response Time</span>
                      <span className="text-brand-green text-sm font-medium">12 min</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-100">
                      <span className="text-slate-600 text-sm">Client Satisfaction</span>
                      <span className="text-brand-green text-sm font-medium">98.5%</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-100">
                      <span className="text-slate-600 text-sm">Open Tickets</span>
                      <span className="text-brand-blue text-sm font-medium">7</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-slate-600 text-sm">This Week Resolved</span>
                      <span className="text-brand-green text-sm font-medium">43</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to <span className="text-brand-blue">Amplify</span> Your Customer Communications?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you build stronger client relationships through transparency, speed, and consistency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/support" className="bg-brand-blue text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 transition-all text-lg">
              Schedule a Consultation
            </Link>
            <Link href="/business-clarity" className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all">
              View Case Study
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

