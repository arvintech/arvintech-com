"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function AmplifiedOperationsPage() {
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

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-brand-green rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-brand-blue rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className={`text-center transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green/20 rounded-full mb-6">
              <svg className="w-5 h-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-brand-green font-semibold text-sm">CORE OFFERING</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
              <span className="text-brand-green">Amplified</span>
              <br />
              <span className="text-white">Operations</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8">
              Streamline your business processes with AI-powered automation. 
              <span className="text-brand-green font-semibold"> Work smarter, not harder.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/support" className="btn-green text-lg px-8 py-4">
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
              Transform How You <span className="text-brand-green">Operate</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From manual processes to intelligent automation—amplify every aspect of your operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-brand-green/5 to-brand-green/10 border border-brand-green/20">
              <div className="w-16 h-16 bg-brand-green/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">10× Faster</h3>
              <p className="text-slate-600">
                Automate repetitive tasks and reduce processing time from days to hours.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-brand-blue/5 to-brand-blue/10 border border-brand-blue/20">
              <div className="w-16 h-16 bg-brand-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">99% Accurate</h3>
              <p className="text-slate-600">
                AI-powered validation eliminates human error in data entry and processing.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-brand-yellow/5 to-brand-yellow/10 border border-brand-yellow/20">
              <div className="w-16 h-16 bg-brand-yellow/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">~0 Receivables</h3>
              <p className="text-slate-600">
                On-time billing and automated follow-ups keep your cash flow healthy.
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
              A complete suite of tools to amplify your operational efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* AI-Powered Workflow Automation */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-brand-green">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">AI-Powered Workflow Automation</h3>
                  <p className="text-slate-600 mb-4">
                    Identify current workflows where automations are appropriate. Intelligent automation that learns your processes and handles repetitive tasks—document processing, data entry, scheduling, and more.
                  </p>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-brand-green">✓</span> Smart document classification
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-green">✓</span> Automated data extraction
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-green">✓</span> Workflow triggers and actions
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-green">✓</span> Automated workflow monitors and audits
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business Process Optimization */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-brand-blue">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Business Process Optimization</h3>
                  <p className="text-slate-600 mb-4">
                    Infuse Intelligence Amplifier into your current workflows. We analyze and redesign for maximum efficiency—eliminating bottlenecks and redundancies.
                  </p>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-brand-blue">✓</span> Improve worker efficiency with AI tools
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-blue">✓</span> Identifying new product evolutions
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-blue">✓</span> Increase customer loyalty via transparency and reliability
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-blue">✓</span> Increase velocity of business processes
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Accounts Receivable Management */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-brand-yellow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-yellow/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">On-Time Accounts Receivable</h3>
                  <p className="text-slate-600 mb-4">
                    Automated invoicing, payment reminders, and follow-ups ensure you get paid on time, every time. Say goodbye to outstanding receivables.
                  </p>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-brand-yellow">✓</span> Automated invoice generation
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-yellow">✓</span> Smart payment reminders
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-yellow">✓</span> Aging reports and alerts
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Decision-Support Dashboards */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-brand-red">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Decision-Support Dashboards</h3>
                  <p className="text-slate-600 mb-4">
                    Real-time analytics and insights at your fingertips. Make data-driven decisions with confidence.
                  </p>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-brand-red">✓</span> Real-time KPI tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-red">✓</span> Custom report generation
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-red">✓</span> Sales and expense impact
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-red">✓</span> Future loading strategies
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QuickBooks Integration */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/10 rounded-full mb-4">
                <span className="text-brand-green font-semibold text-sm">INTEGRATION</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                QuickBooks Online & Billing Integrations
              </h2>
              <p className="text-xl text-slate-600 mb-6">
                Seamlessly connect your accounting software with your operations. No more double entry, no more reconciliation headaches.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Two-Way Sync</h4>
                    <p className="text-slate-600 text-sm">Invoices, payments, and expenses sync automatically between systems.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Automated Reconciliation</h4>
                    <p className="text-slate-600 text-sm">Bank feeds and transactions matched automatically with AI assistance.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Financial Reporting</h4>
                    <p className="text-slate-600 text-sm">Generate P&L, balance sheets, and custom reports in seconds.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-brand-green/10 to-brand-blue/10 rounded-3xl p-8">
                <div className="bg-white rounded-2xl shadow-xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">QB</span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">QuickBooks Online</p>
                      <p className="text-sm text-green-600">Connected</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-slate-100">
                      <span className="text-slate-600 text-sm">Last Sync</span>
                      <span className="text-slate-900 text-sm font-medium">2 minutes ago</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-100">
                      <span className="text-slate-600 text-sm">Invoices Synced</span>
                      <span className="text-brand-green text-sm font-medium">247</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-slate-600 text-sm">Payments Matched</span>
                      <span className="text-brand-green text-sm font-medium">98.5%</span>
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
            Ready to <span className="text-brand-green">Amplify</span> Your Operations?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can streamline your workflows, automate your processes, and help you scale without adding headcount.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/support" className="btn-green text-lg px-8 py-4">
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

