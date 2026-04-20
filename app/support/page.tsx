"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [emergencyIssues, setEmergencyIssues] = useState({
    noTurnOn: false,
    blueScreen: false,
    blackScreen: false,
    dataLost: false,
  })

  const getEmergencyMessage = () => {
    const issues = []
    if (emergencyIssues.noTurnOn) issues.push("Computer won't turn on")
    if (emergencyIssues.blueScreen) issues.push("Blue screen")
    if (emergencyIssues.blackScreen) issues.push("Black screen")
    if (emergencyIssues.dataLost) issues.push("Data lost")
    const issueText = issues.length > 0 ? `Issues: ${issues.join(", ")}` : "General emergency"
    return encodeURIComponent(`URGENT SUPPORT REQUEST - ${issueText} - Please contact me ASAP`)
  }

  return (
    <div className="min-h-screen bg-background blocks-pattern">
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
              <Link href="/support" className="text-brand-green font-semibold">
                Support
              </Link>
              <Link href="/news" className="text-foreground/70 hover:text-brand-green transition-colors font-medium">
                News
              </Link>
              <Link href="/blog" className="text-foreground/70 hover:text-brand-green transition-colors font-medium">
                Blog
              </Link>
              {/* Remote Support Icon with Tooltip */}
              <a
                href="https://secure.logmein.com/pullinstall_go.asp?page=addacomputer3_pull&lang=en&c=twk9htfslmi85dguy6rtdobpimhzsqkv1tomysuf&bnf=undefined"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
                title="Remote Support – Call First"
              >
                <div className="w-10 h-10 bg-brand-green/10 hover:bg-brand-green/20 rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-brand-green rounded-full animate-pulse" />
                </div>
                {/* Tooltip */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-2 bg-slate-900 text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  Remote Support
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45" />
                </div>
              </a>
              <Link href="/work-with-us" className="btn-green text-sm">
                Work With Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute top-32 right-10 w-20 h-20 bg-brand-blue/10 rounded-xl rotate-12 animate-float" />
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-brand-green/10 rounded-lg -rotate-12 animate-float delay-200" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="block-green" />
            <div className="block-blue" />
            <div className="block-yellow" />
            <div className="block-red" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 h1-ocean">How can we help?</h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
            Get the support you need to amplify your potential with{" "}
            <span className="arvintech-brand">arvintech&apos;s</span> innovative solutions.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <label htmlFor="support-search" className="sr-only">
                Search help articles, guides, or FAQs
              </label>
              <input
                id="support-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for help articles, guides, or FAQs..."
                className="w-full px-6 py-4 bg-card border border-border rounded-2xl text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent shadow-lg"
                autoComplete="off"
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-brand-green hover:bg-brand-green/90 px-6 py-2 rounded-xl text-white font-medium transition-all hover:scale-105"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Intelligence Amplifier Support - Featured Section */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 md:p-12 shadow-2xl border border-slate-700/50">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-blue/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-10">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-brand-green rounded-full animate-pulse" />
                  <span className="px-4 py-1 bg-brand-green/20 text-brand-green rounded-full text-sm font-semibold">
                    FLAGSHIP SUPPORT
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  Intelligent Support
                </h2>
                <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                  Get help with our AI-powered Intelligence Amplifier platform. From setup to advanced features,
                  we&apos;re here to ensure you get the most out of your AI tools.
                </p>
              </div>

              {/* Support Options Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                {/* Documentation */}
                <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                  <div className="w-12 h-12 bg-brand-blue/20 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Documentation</h3>
                  <p className="text-slate-400 text-sm mb-4">
                    Comprehensive guides, tutorials, and API references for Intelligence Amplifier.
                  </p>
                  <a 
                    href="https://intelligenceamplifier.ai/docs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:underline text-sm"
                  >
                    View Docs
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                {/* PC Remote Support */}
                <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                  <div className="w-12 h-12 bg-brand-green/20 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">PC Remote Support</h3>
                  <p className="text-slate-400 text-sm mb-4">
                    Secure remote access for real-time technical support and troubleshooting.
                  </p>
                  <a 
                    href="https://secure.logmein.com/pullinstall_go.asp?page=addacomputer3_pull&lang=en&c=twk9htfslmi85dguy6rtdobpimhzsqkv1tomysuf&bnf=undefined" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-green font-semibold hover:underline text-sm"
                  >
                    Connect Remote
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </a>
                </div>

                {/* Direct Support */}
                <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                  <div className="w-12 h-12 bg-brand-yellow/20 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Direct Support</h3>
                  <p className="text-slate-400 text-sm mb-4">
                    Need personalized help? Our IA support team is ready to assist you.
                  </p>
                  <a 
                    href="mailto:support@intelligenceamplifier.ai" 
                    className="inline-flex items-center gap-2 text-brand-yellow font-semibold hover:underline text-sm"
                  >
                    Email Support
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <a 
                    href="https://intelligenceamplifier.ai/getting-started" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-white text-sm"
                  >
                    <svg className="w-4 h-4 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Getting Started Guide
                  </a>
                  <a 
                    href="https://intelligenceamplifier.ai/tutorials" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-white text-sm"
                  >
                    <svg className="w-4 h-4 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Video Tutorials
                  </a>
                  <a 
                    href="https://intelligenceamplifier.ai/troubleshooting" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-white text-sm"
                  >
                    <svg className="w-4 h-4 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Troubleshooting
                  </a>
                  <a 
                    href="https://intelligenceamplifier.ai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 bg-brand-green rounded-lg hover:bg-green-600 transition-colors text-white text-sm font-semibold"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Visit IA Site
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Remote Support Section */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-green to-brand-blue p-8 md:p-12 text-white text-center">
            <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-lg rotate-12" />
            <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/20 rounded-xl -rotate-12" />
            
            <div className="relative z-10">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Immediate Remote Support?</h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Let our technical experts connect directly to your computer to resolve issues quickly and efficiently. 
                Our secure remote support tool allows us to assist you in real-time.
              </p>
              <a
                href="https://secure.logmein.com/pullinstall_go.asp?page=addacomputer3_pull&lang=en&c=twk9htfslmi85dguy6rtdobpimhzsqkv1tomysuf&bnf=undefined"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-brand-green px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 hover:shadow-xl gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                Connect for Remote Support
              </a>
              <p className="text-sm text-white/70 mt-4">Secure connection powered by LogMeIn • Call first to schedule</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support tools for download */}
      <section className="py-12 px-6 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-2 bg-brand-green/10 text-brand-green rounded-full text-sm font-semibold mb-4">
              DOWNLOADS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Support tools for download</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Install the remote support client before your session so we can connect securely. Call first to schedule
              support—we&apos;ll tell you when to run the installer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-slate-50 rounded-2xl border-2 border-slate-200 p-8 flex flex-col h-full hover:border-brand-green/40 transition-colors">
              <div className="w-14 h-14 bg-brand-green/15 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Remote support client</h3>
              <p className="text-slate-600 text-sm mb-6 flex-1">
                LogMeIn Rescue session launcher. Download and run the installer when directed by an <span className="arvintech-brand">arvintech</span> technician
                so we can share your screen and resolve issues in real time.
              </p>
              <a
                href="https://secure.logmein.com/pullinstall_go.asp?page=addacomputer3_pull&lang=en&c=twk9htfslmi85dguy6rtdobpimhzsqkv1tomysuf&bnf=undefined"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-brand-green text-white font-semibold rounded-xl hover:bg-green-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download remote client
              </a>
              <p className="text-xs text-slate-500 mt-4">Windows and macOS • Administrator rights may be required</p>
            </div>

            <div className="bg-slate-50 rounded-2xl border-2 border-slate-200 p-8 flex flex-col h-full hover:border-brand-blue/40 transition-colors">
              <div className="w-14 h-14 bg-brand-blue/15 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Microsoft Support and Recovery Assistant</h3>
              <p className="text-slate-600 text-sm mb-6 flex-1">
                Microsoft&apos;s SaRA tool can diagnose and fix Office, Outlook, and Windows issues. Download and run it
                locally when troubleshooting Microsoft 365 or desktop apps before or during a support session.
              </p>
              <div className="space-y-10">
                <a
                  href="https://aka.ms/SaRA-Setup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-brand-blue text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download SaRA
                </a>
                <a
                  href="https://support.microsoft.com/en-us/topic/microsoft-support-and-recovery-assistant-sara-command-line-utility-removal-from-windows-5913939c-87ff-45b0-8e9b-14dc89bfdfee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-white text-brand-blue border-2 border-brand-blue/20 font-semibold rounded-xl hover:bg-brand-blue/5 transition-colors text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  SaRA Deprecation Notice
                </a>
              </div>
              <p className="text-xs text-slate-500 mt-4">Windows • Provided by Microsoft</p>
            </div>

            {/* Windows 11 Migration */}
            <div className="bg-slate-50 rounded-2xl border-2 border-slate-200 p-8 flex flex-col h-full hover:border-brand-yellow/40 transition-colors">
              <div className="w-14 h-14 bg-brand-yellow/15 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Windows 11 Migration Strategy</h3>
              <p className="text-slate-600 text-sm mb-6 flex-1">
                Plan and execute your Windows 11 upgrade with confidence. Our migration strategy ensures minimal downtime, 
                hardware compatibility checks, and data preservation throughout the transition.
              </p>

              <Link
                href="/migration-strategy"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-brand-yellow text-white font-semibold rounded-xl hover:bg-yellow-500 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                View Full Strategy
              </Link>
              <p className="text-xs text-slate-500 mt-4">Windows 10 to 11 • Enterprise & SMB</p>
            </div>

            {/* Regular PC Maintenance */}
            <div className="bg-slate-50 rounded-2xl border-2 border-slate-200 p-8 flex flex-col h-full hover:border-brand-green/40 transition-colors">
              <div className="w-14 h-14 bg-brand-green/15 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Regular PC Maintenance</h3>
              <p className="text-slate-600 text-sm mb-6 flex-1">
                Keep your computer running smoothly with these essential maintenance best practices. Prevent issues before they start with routine care and optimization.
              </p>

              <Link
                href="/maintenance"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-brand-green text-white font-semibold rounded-xl hover:bg-green-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                View Best Practices
              </Link>
              <p className="text-xs text-slate-500 mt-4">Preventative care • Performance optimization</p>
            </div>
          </div>

          {/* ArvinTech Windows optimizers bundle */}
          <div className="mt-12 lg:mt-14 rounded-2xl border-2 border-slate-200 bg-gradient-to-br from-slate-50 to-white overflow-hidden shadow-sm">
            <div className="p-6 md:p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-yellow/15 text-brand-yellow">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </span>
                    <span className="text-sm font-semibold text-slate-500 uppercase tracking-wide arvintech-brand">arvintech</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Windows optimization bundle</h3>
                  <p className="text-slate-600 max-w-3xl">
                    Download <code className="text-sm bg-slate-200/80 px-1.5 py-0.5 rounded">optimizers.zip</code> for a
                    curated set of Windows tweaks—performance, latency, privacy-oriented services, and cleanup. Review
                    the table below before running; administrator access may be required.
                  </p>
                </div>
                <a
                  href="/downloads/optimizers.zip"
                  download="optimizers.zip"
                  className="inline-flex items-center justify-center gap-2 shrink-0 px-8 py-4 bg-brand-yellow text-slate-900 font-semibold rounded-xl hover:bg-yellow-400 transition-colors shadow-md"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download optimizers.zip
                </a>
              </div>

              <p className="text-sm text-amber-900 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-6">
                <strong>Safety:</strong> Create a restore point before any changes. Use only on systems you own or are
                authorized to modify. When in doubt, contact <span className="arvintech-brand">arvintech</span> support first.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-sm text-left min-w-[640px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 border-b border-slate-200">
                      <th className="px-4 py-3 font-semibold w-12">#</th>
                      <th className="px-4 py-3 font-semibold">Optimization</th>
                      <th className="px-4 py-3 font-semibold">What it does</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {[
                      ["1", "Restore Point", "Safety net before any changes"],
                      ["2", "High Performance Power Plan", "Removes CPU throttling"],
                      ["3", "Visual Effects", '"Adjust for best performance" mode'],
                      ["4", "Transparency & Animations", "Disables Fluent/Acrylic effects"],
                      ["5", "Startup Delay", "Removes Explorer's artificial delay"],
                      ["6", "Services", "Disables Telemetry, Xbox, Maps, Retail Demo"],
                      ["7", "Background Apps", "Blocks apps running in background"],
                      ["8", "Game Mode + HAGS", "Enables GPU Hardware Scheduling"],
                      ["9", "Delivery Optimization", "Stops Windows using your bandwidth for P2P updates"],
                      ["10", "Nagle's Algorithm", "Lower network latency"],
                      ["11", "Temp File Cleanup", "Clears %TEMP% and C:\\Windows\\Temp"],
                    ].map(([num, title, desc]) => (
                      <tr key={num} className="hover:bg-slate-50/80">
                        <td className="px-4 py-2.5 text-slate-500 font-medium">{num}</td>
                        <td className="px-4 py-2.5 font-medium text-slate-900">{title}</td>
                        <td className="px-4 py-2.5 text-slate-600">{desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* File Migration and Sync — GoodSync */}
          <div className="mt-12 lg:mt-14 rounded-2xl border-2 border-slate-200 bg-gradient-to-br from-slate-50 to-white overflow-hidden shadow-sm">
            <div className="p-6 md:p-8 lg:p-10 space-y-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-blue/15 text-brand-blue">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                        />
                      </svg>
                    </span>
                    <span className="text-sm font-semibold text-slate-500 uppercase tracking-wide arvintech-brand">arvintech</span>
                  </div>
                  <p className="text-sm font-semibold text-brand-blue mb-2">File migration and sync</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                    GoodSync: Preferred File Migration Tool for Backups and Sync
                  </h3>
                  <p className="text-slate-600 max-w-3xl">
                    GoodSync is our designated solution for file migration, backup, and synchronization tasks. It delivers
                    reliable, automated data movement across local drives, servers, and cloud storage platforms with
                    block-level delta transfers, real-time monitoring, and verified file integrity. Its flexibility makes
                    it well-suited for both one-time migrations and ongoing backup routines.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
                  <a
                    href="https://www.goodsync.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-blue font-semibold rounded-xl border-2 border-brand-blue/30 hover:border-brand-blue hover:bg-brand-blue/5 transition-colors shadow-sm"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    GoodSync
                  </a>
                  <a
                    href="mailto:support@intelligenceamplifier.ai?subject=GoodSync%20migration%20%26%20sync%20help"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors shadow-md"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Email migration questions
                  </a>
                </div>
              </div>

              <figure className="rounded-xl border border-slate-200 bg-white p-4 md:p-6 shadow-sm overflow-x-auto">
                <figcaption className="text-center text-sm font-semibold text-slate-800 mb-4">
                  Migration &amp; backup architecture (Google Drive + GoodSync)
                </figcaption>
                <svg
                  viewBox="0 0 760 420"
                  className="w-full max-w-4xl mx-auto h-auto min-w-[520px]"
                  role="img"
                  aria-labelledby="goodsync-migration-diagram-title"
                >
                  <title id="goodsync-migration-diagram-title">
                    Diagram: Users collaborate in Google Drive. GoodSync connects to Drive via a native connector for
                    migration and backups. Legacy file servers and other sources feed initial migration into GoodSync.
                    Secondary backups go to NAS, external drives, or alternate cloud, with audit logs on transfers.
                  </title>
                  <desc>
                    Layered flow showing users and Google Drive at the top, GoodSync as the central engine, legacy
                    sources entering from the left for migration, and secondary backup targets on the right.
                  </desc>
                  <defs>
                    <marker id="goodsync-diag-arr" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#64748b" />
                    </marker>
                    <marker id="goodsync-diag-arr-blue" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#0066B3" />
                    </marker>
                  </defs>

                  {/* Collaboration layer */}
                  <rect x="248" y="28" width="464" height="86" rx="10" fill="#f0fdf4" stroke="#00A94F" strokeWidth="2" />
                  <text
                    x="480"
                    y="58"
                    textAnchor="middle"
                    fill="#0f172a"
                    fontSize="15"
                    fontWeight="700"
                    fontFamily="ui-sans-serif, system-ui, sans-serif"
                  >
                    Google Drive
                  </text>
                  <text
                    x="480"
                    y="80"
                    textAnchor="middle"
                    fill="#475569"
                    fontSize="12"
                    fontFamily="ui-sans-serif, system-ui, sans-serif"
                  >
                    Collaboration layer — live docs, sharing &amp; permissions
                  </text>
                  <text
                    x="480"
                    y="100"
                    textAnchor="middle"
                    fill="#64748b"
                    fontSize="11"
                    fontFamily="ui-sans-serif, system-ui, sans-serif"
                  >
                    Day-to-day editing (not a substitute for policy-driven backup)
                  </text>

                  <rect x="32" y="44" width="168" height="54" rx="8" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
                  <text
                    x="116"
                    y="70"
                    textAnchor="middle"
                    fill="#0f172a"
                    fontSize="13"
                    fontWeight="600"
                    fontFamily="ui-sans-serif, system-ui, sans-serif"
                  >
                    Users &amp; teams
                  </text>
                  <text
                    x="116"
                    y="88"
                    textAnchor="middle"
                    fill="#64748b"
                    fontSize="11"
                    fontFamily="ui-sans-serif, system-ui, sans-serif"
                  >
                    Create &amp; collaborate
                  </text>

                  <line x1="202" y1="71" x2="238" y2="71" stroke="#64748b" strokeWidth="2" markerEnd="url(#goodsync-diag-arr)" />
                  <line x1="238" y1="81" x2="202" y2="81" stroke="#64748b" strokeWidth="2" markerEnd="url(#goodsync-diag-arr)" />

                  {/* Connector Drive -> GoodSync */}
                  <line x1="380" y1="116" x2="380" y2="148" stroke="#0066B3" strokeWidth="2.5" markerEnd="url(#goodsync-diag-arr-blue)" />
                  <text
                    x="392"
                    y="138"
                    fill="#0066B3"
                    fontSize="11"
                    fontWeight="500"
                    fontFamily="ui-sans-serif, system-ui, sans-serif"
                  >
                    native connector
                  </text>

                  {/* GoodSync hub */}
                  <rect x="208" y="150" width="344" height="124" rx="12" fill="#eff6ff" stroke="#0066B3" strokeWidth="2.5" />
                  <text
                    x="380"
                    y="186"
                    textAnchor="middle"
                    fill="#0066B3"
                    fontSize="17"
                    fontWeight="700"
                    fontFamily="ui-sans-serif, system-ui, sans-serif"
                  >
                    GoodSync
                  </text>
                  <text
                    x="380"
                    y="210"
                    textAnchor="middle"
                    fill="#334155"
                    fontSize="12"
                    fontFamily="ui-sans-serif, system-ui, sans-serif"
                  >
                    Migration &amp; backup layer — schedules, deltas, versioning
                  </text>
                  <text
                    x="380"
                    y="232"
                    textAnchor="middle"
                    fill="#475569"
                    fontSize="11"
                    fontFamily="ui-sans-serif, system-ui, sans-serif"
                  >
                    Checksums &amp; timestamps · audit trail · encryption options
                  </text>
                  <text
                    x="380"
                    y="256"
                    textAnchor="middle"
                    fill="#64748b"
                    fontSize="10"
                    fontFamily="ui-sans-serif, system-ui, sans-serif"
                  >
                    Independent of Drive&apos;s sync client — breaks destructive propagation chains
                  </text>

                  {/* Legacy */}
                  <rect x="32" y="168" width="152" height="88" rx="8" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1.5" />
                  <text
                    x="108"
                    y="198"
                    textAnchor="middle"
                    fill="#0f172a"
                    fontSize="13"
                    fontWeight="600"
                    fontFamily="ui-sans-serif, system-ui, sans-serif"
                  >
                    Legacy sources
                  </text>
                  <text
                    x="108"
                    y="218"
                    textAnchor="middle"
                    fill="#475569"
                    fontSize="11"
                    fontFamily="ui-sans-serif, system-ui, sans-serif"
                  >
                    File servers, PCs,
                  </text>
                  <text
                    x="108"
                    y="234"
                    textAnchor="middle"
                    fill="#475569"
                    fontSize="11"
                    fontFamily="ui-sans-serif, system-ui, sans-serif"
                  >
                    other clouds
                  </text>
                  <line x1="186" y1="212" x2="200" y2="212" stroke="#64748b" strokeWidth="2" markerEnd="url(#goodsync-diag-arr)" />
                  <text
                    x="188"
                    y="204"
                    textAnchor="middle"
                    fill="#64748b"
                    fontSize="9"
                    fontFamily="ui-sans-serif, system-ui, sans-serif"
                  >
                    migrate
                  </text>

                  {/* Secondary backups */}
                  <rect x="576" y="158" width="152" height="108" rx="8" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1.5" />
                  <text
                    x="652"
                    y="190"
                    textAnchor="middle"
                    fill="#0f172a"
                    fontSize="13"
                    fontWeight="600"
                    fontFamily="ui-sans-serif, system-ui, sans-serif"
                  >
                    Secondary backups
                  </text>
                  <text
                    x="652"
                    y="212"
                    textAnchor="middle"
                    fill="#475569"
                    fontSize="11"
                    fontFamily="ui-sans-serif, system-ui, sans-serif"
                  >
                    NAS · USB · alt cloud
                  </text>
                  <text
                    x="652"
                    y="232"
                    textAnchor="middle"
                    fill="#475569"
                    fontSize="11"
                    fontFamily="ui-sans-serif, system-ui, sans-serif"
                  >
                    Scheduled one-way sync
                  </text>
                  <text
                    x="652"
                    y="250"
                    textAnchor="middle"
                    fill="#64748b"
                    fontSize="10"
                    fontFamily="ui-sans-serif, system-ui, sans-serif"
                  >
                    Versioned snapshots
                  </text>
                  <line x1="554" y1="212" x2="572" y2="212" stroke="#64748b" strokeWidth="2" markerEnd="url(#goodsync-diag-arr)" />
                  <text x="548" y="204" textAnchor="end" fill="#64748b" fontSize="9" fontFamily="ui-sans-serif, system-ui, sans-serif">
                    backup
                  </text>

                  {/* Initial bulk migration path */}
                  <path
                    d="M 108 256 Q 108 300 280 300 Q 400 300 380 274"
                    fill="none"
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                    strokeDasharray="5 4"
                  />
                  <text
                    x="248"
                    y="318"
                    textAnchor="middle"
                    fill="#94a3b8"
                    fontSize="10"
                    fontFamily="ui-sans-serif, system-ui, sans-serif"
                  >
                    Initial bulk migration path (folder structure &amp; metadata)
                  </text>
                </svg>
                <p className="text-center text-xs text-slate-500 mt-3 max-w-2xl mx-auto">
                  Google Drive for working together; GoodSync for controlled movement, backups, and recoverability outside
                  Drive&apos;s native sync behavior.
                </p>
              </figure>

              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">Why GoodSync</h4>
                <p className="text-slate-600 mb-4">
                  GoodSync stands out for its combination of speed, precision, and trustworthiness. Key strengths include:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-600 max-w-3xl">
                  <li>Bidirectional and one-way sync with granular control over conflict resolution</li>
                  <li>Block-level copying that transfers only changed portions of files, reducing bandwidth and time</li>
                  <li>Propagation of deletions, moves, and renames without duplicating data</li>
                  <li>Automated scheduling with real-time, periodic, or event-triggered runs</li>
                  <li>End-to-end encryption and versioning for recovery from accidental changes or ransomware</li>
                  <li>
                    Broad protocol support including SFTP, WebDAV, SMB, and native connectors for major cloud providers
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">Pairing Strategy with Google Drive</h4>
                <p className="text-slate-600 mb-4">
                  Pairing GoodSync with Google Drive creates a layered approach that separates active collaboration from
                  controlled backup and archival. Your Gmail address is the same Google identity used for Drive and for
                  authorizing GoodSync—keep that pairing explicit when planning file access and jobs. The strategy works
                  as follows:
                </p>
                <ol className="list-decimal pl-5 space-y-5 text-slate-600 max-w-3xl marker:font-semibold marker:text-slate-800">
                  <li>
                    <span className="font-semibold text-slate-900">Google Drive as the collaboration layer.</span> Google
                    Drive remains the live workspace where users create, edit, and share documents. It handles day-to-day
                    access, permissions, and multi-user editing.
                  </li>
                  <li>
                    <span className="font-semibold text-slate-900">File access from your Gmail (Google) account.</span>{" "}
                    Gmail and Google Drive sit under the{" "}
                    <strong className="text-slate-800">same Google account</strong>: the address you use to sign in to
                    Gmail is the identity that owns &quot;My Drive,&quot; shared libraries, and sharing invitations. For
                    pairing, treat that account as the single source of truth for who can see which files:
                    <ul className="list-disc pl-5 mt-3 space-y-2">
                      <li>
                        <strong className="text-slate-800">Connector sign-in</strong> — When GoodSync uses Google&apos;s
                        native Drive connector, you authorize it with that Google account (OAuth). Use the same account
                        that should read and write the folders you are migrating or backing up; service accounts or
                        delegated access may apply in Google Workspace—match the job to the correct identity.
                      </li>
                      <li>
                        <strong className="text-slate-800">Where files live</strong> — Email attachments are not Drive
                        files until you save them to Drive or use Drive-native workflows. Prefer keeping authoritative
                        copies in Drive (or Shared drives) so GoodSync jobs target stable paths rather than mailbox
                        attachments.
                      </li>
                      <li>
                        <strong className="text-slate-800">Scope of access</strong> — Decide whether each sync job should
                        use <em>My Drive</em>, a <em>Shared drive</em>, or <em>Shared with me</em> content; permissions
                        follow the Google account you use to connect. Align sharing in Drive with who needs backup or
                        migration before scheduling GoodSync.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-semibold text-slate-900">GoodSync as the migration and backup layer.</span>{" "}
                    GoodSync connects directly to Google Drive via its native connector and handles the heavier lifting:
                    <ul className="list-disc pl-5 mt-3 space-y-2">
                      <li>
                        <strong className="text-slate-800">Initial migration</strong> — bulk transfers from legacy file
                        servers, personal drives, or other cloud platforms into Google Drive, preserving folder structures
                        and metadata
                      </li>
                      <li>
                        <strong className="text-slate-800">Scheduled backups</strong> — automated one-way sync from Google
                        Drive to a secondary location (local NAS, external drive, or alternate cloud) on a defined cadence
                      </li>
                      <li>
                        <strong className="text-slate-800">Versioned snapshots</strong> — retention of prior file versions
                        outside of Drive&apos;s native history, protecting against corruption, accidental deletion, or
                        account compromise
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-semibold text-slate-900">Separation of concerns.</span> Google Drive&apos;s
                    built-in sync client is optimized for access, not backup. Relying on it alone means deletions and
                    ransomware-encrypted files propagate everywhere. GoodSync breaks that chain by maintaining an
                    independent, policy-driven copy that Drive cannot overwrite.
                  </li>
                  <li>
                    <span className="font-semibold text-slate-900">Verification and audit.</span> GoodSync logs every
                    transfer with checksums and timestamps, giving a clear audit trail for compliance and recovery
                    scenarios — something Drive alone does not provide.
                  </li>
                </ol>
              </div>

              <p className="text-sm text-slate-800 bg-brand-blue/10 border border-brand-blue/20 rounded-xl px-4 py-4">
                <strong>In short:</strong> Google Drive for working, GoodSync for protecting. Together they cover the full
                lifecycle from active use through migration, backup, and long-term recoverability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="py-12 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-2 bg-brand-yellow/10 text-brand-yellow rounded-full text-sm font-semibold mb-4">QUICK TIPS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Tech Tips to Keep You Running</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Essential best practices to protect your data and optimize your technology.
            </p>
          </div>

          {/* ChatGPT Tip - Featured Callout */}
          <div className="mb-10 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-6 md:p-8 shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg className="w-9 h-9 text-orange-500" viewBox="0 0 24 24" fill="currentColor" aria-label="Claude icon">
                  <path d="M12 2.75c.38 0 .7.3.72.68l.22 3.29a.75.75 0 0 0 1.21.54l2.62-2.02a.72.72 0 0 1 1.03.14c.2.28.17.67-.08.92l-2.17 2.5a.75.75 0 0 0 .36 1.22l3.2.94c.36.1.58.47.5.84a.72.72 0 0 1-.79.57l-3.33-.27a.75.75 0 0 0-.76 1.02l1.2 3.11a.74.74 0 0 1-.36.94.72.72 0 0 1-.94-.27l-1.86-2.77a.75.75 0 0 0-1.27 0l-1.86 2.77a.72.72 0 0 1-.94.27.74.74 0 0 1-.36-.94l1.2-3.11a.75.75 0 0 0-.76-1.02l-3.33.27a.72.72 0 0 1-.79-.57.74.74 0 0 1 .5-.84l3.2-.94a.75.75 0 0 0 .36-1.22l-2.17-2.5a.73.73 0 0 1-.08-.92.72.72 0 0 1 1.03-.14l2.62 2.02a.75.75 0 0 0 1.21-.54l.22-3.29a.72.72 0 0 1 .72-.68z" />
                </svg>
              </div>
              <div className="text-center md:text-left flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">💡 Pro Tip: Use Claude by Anthropic for Tech Questions</h3>
                <p className="text-white/90 text-base md:text-lg">
                  Skip the endless Google searches. Ask Claude - it gives you direct answers, not 10 blue links. 
                  Get step-by-step instructions, ask follow-up questions, and explain errors in plain English.
                </p>
              </div>
              <Link
                href="/support-pro"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-orange-600 font-bold rounded-full hover:bg-orange-50 transition-colors shadow-lg flex-shrink-0"
              >
                IA Support Pro
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Create restore point before installs */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-brand-green hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-brand-green/15 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Create a restore point when installing apps</h3>
              <p className="text-slate-600 text-sm mb-3">
                Before you install or upgrade software, drivers, or major Windows updates, create a system restore point.
                It&apos;s much faster than a full backup and gives you useful insurance: if something goes wrong, you can
                roll back system files and settings without touching your personal documents.
              </p>
              <ul className="text-sm text-slate-500 space-y-1 mb-4">
                <li>• Quick to create—seconds or minutes, not hours</li>
                <li>• Ideal before risky installs, patches, or trial software</li>
                <li>• Complements (does not replace) backups for your irreplaceable files</li>
              </ul>
              <a
                href="https://support.microsoft.com/en-us/windows/create-a-system-restore-point-77e02e2a-3298-c869-9974-ef5658ea3be9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-brand-green font-semibold text-sm hover:underline"
              >
                Microsoft: Create a restore point
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Intel or AMD */}
            <div id="intel-or-amd" className="hidden bg-white rounded-2xl p-6 shadow-lg border-l-4 border-sky-500 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Intel or AMD</h3>
              <p className="text-slate-600 text-sm mb-3">
                Picking a CPU depends on your workload, budget, and upgrade plans. Both brands are solid options today.
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Intel: strong single-core performance</li>
                <li>• AMD: great multi-core value</li>
                <li>• Match CPU choice to your actual use</li>
              </ul>
            </div>

            {/* 1. Learn to Use AI - Most relevant today */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-violet-500 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Start Learning AI</h3>
              <p className="text-slate-600 text-sm mb-3">
                AI assistants can help you work smarter. Start exploring these powerful tools today.
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" className="text-violet-600 hover:underline">ChatGPT</a> – Great for writing & research</li>
                <li>• <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer" className="text-violet-600 hover:underline">Gemini</a> – Google's AI assistant</li>
                <li>• <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="text-violet-600 hover:underline">Claude</a> – Thoughtful & detailed answers</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-slate-200">
                <Link href="/blog/start-learning-ai" className="text-violet-600 hover:underline text-sm font-semibold">
                  Read guide →
                </Link>
              </div>
            </div>

            {/* 2. Windows 10 End of Support - URGENT */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-orange-500 hover:shadow-xl transition-shadow relative">
              <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">URGENT</div>
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Windows 10 End of Support</h3>
              <p className="text-slate-600 text-sm mb-3">
                Microsoft ended Windows 10 support on October 14, 2025. Upgrade to Windows 11 now!
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Check hardware compatibility</li>
                <li>• Backup before upgrading</li>
                <li>• Plan your migration now</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-slate-200">
                <Link href="/blog/windows-10-end-of-support" className="text-orange-600 hover:underline text-sm font-semibold">
                  Read guide →
                </Link>
              </div>
              <a
                href="https://secure.logmein.com/pullinstall_go.asp?page=addacomputer3_pull&lang=en&c=twk9htfslmi85dguy6rtdobpimhzsqkv1tomysuf&bnf=undefined"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-4 px-3 py-1.5 bg-brand-green/10 hover:bg-brand-green/20 text-brand-green text-xs font-semibold rounded-full transition-colors"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-green"></span>
                </span>
                Remote Support
              </a>
            </div>

            {/* 3. Use Google Drive — full width on md+ (spans grid row) */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-3">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Use Google Drive</h3>
              <p className="text-slate-600 text-sm mb-3">
                Drive is more than a folder in the cloud: it&apos;s continuous sync to protect everyday files, a way to
                recover earlier versions, and an offsite copy you can reach from any device—while sharing and
                collaboration stay in one place.
              </p>
              <p className="text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">Get started</p>
              <ul className="text-sm text-slate-500 space-y-1 mb-4">
                <li>• Install <strong className="text-slate-700 font-medium">Drive for desktop</strong> (Windows/Mac)</li>
                <li>• Choose folders to sync or mirror; turn on <strong className="text-slate-700 font-medium">backup</strong>{" "}
                  for Desktop, Documents, and Pictures where offered</li>
                <li>• Free tier includes shared space across Drive, Gmail, and Photos—watch quotas so backups don&apos;t stall</li>
              </ul>
              <p className="text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">Data protection &amp; recovery</p>
              <ul className="text-sm text-slate-500 space-y-1.5 mb-4">
                <li>
                  • <strong className="text-slate-700 font-medium">Version history</strong> — restore or compare prior
                  edits of Docs, Sheets, Slides, and many uploaded file types (limits vary by plan)
                </li>
                <li>
                  • <strong className="text-slate-700 font-medium">Trash &amp; recovery</strong> — deleted items can often
                  be recovered from Trash before permanent deletion; retention depends on Workspace admin settings
                </li>
                <li>
                  • <strong className="text-slate-700 font-medium">Ransomware &amp; mistakes</strong> — cloud copies and
                  version history help after bad syncs or encrypted files, but they are not a full substitute for
                  dedicated backup tools or a second copy outside Google
                </li>
              </ul>
              <p className="text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">Sync, access &amp; sharing</p>
              <ul className="text-sm text-slate-500 space-y-1.5 mb-4">
                <li>
                  • <strong className="text-slate-700 font-medium">Anywhere access</strong> — web, mobile apps, and
                  desktop keep the same library in reach when a device is lost or replaced
                </li>
                <li>
                  • <strong className="text-slate-700 font-medium">Offline files</strong> — mark important folders or files
                  available offline so you can work without connectivity; changes sync when you reconnect
                </li>
                <li>
                  • <strong className="text-slate-700 font-medium">Shared drives</strong> (Google Workspace) — team-owned
                  storage with shared permissions, separate from any one person&apos;s &quot;My Drive&quot;
                </li>
                <li>
                  • <strong className="text-slate-700 font-medium">Photos</strong> — Google Photos can back up mobile
                  camera rolls; remember it may share storage with Drive on consumer accounts
                </li>
              </ul>
              <p className="text-xs text-slate-500 border-t border-slate-200 pt-3 leading-relaxed">
                <strong className="text-slate-700">Reality check:</strong> Drive&apos;s sync client is built for access and
                collaboration, not a complete backup strategy by itself. Pair it with the{" "}
                <strong className="text-slate-700">3-2-1 mindset</strong> (see Backups &amp; Restore) or a tool like GoodSync
                for policy-driven copies you control end to end.
              </p>
            </div>

            {/* Password strategies — strong passwords + 2FA (full width on md+) */}
            <div
              id="password-strategies"
              className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-fuchsia-500 hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-3"
            >
              <div className="w-12 h-12 bg-fuchsia-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-fuchsia-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Password strategies</h3>
              <p className="text-slate-600 text-sm mb-3">
                Treat passwords as one layer in a stack: long unique secrets per site or app, stored in a password
                manager you trust, plus a second proof of identity wherever the service allows it.
              </p>
              <ul className="text-sm text-slate-500 space-y-1 mb-4">
                <li>• Generate long, unique passwords—never reuse them across accounts</li>
                <li>• Use a password manager so you only memorize a few strong passphrases</li>
                <li>• Prioritize email, banking, and cloud accounts for extra protection first</li>
              </ul>
              <div className="rounded-xl bg-fuchsia-50 border border-fuchsia-200/80 px-3 py-3 mb-4">
                <p className="text-sm font-semibold text-fuchsia-900 mb-1">Why two-factor authentication (2FA) matters</p>
                <p className="text-sm text-slate-700 leading-relaxed">
                  A password is only &quot;something you know.&quot; It can be stolen via phishing, data breaches, or
                  guessing. <strong className="text-slate-900">Two-factor authentication</strong> (also called two-step
                  verification) adds a second factor—usually <strong className="text-slate-900">something you have</strong>{" "}
                  (a code from an authenticator app, a security key, or a trusted device). Then an attacker who only has
                  your password still cannot finish signing in. Enable 2FA on every critical account, and prefer an
                  authenticator app or hardware key over SMS when the service offers it.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-200 flex flex-col gap-2">
                <a
                  href="https://support.google.com/accounts/answer/1066447"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-fuchsia-700 font-semibold hover:underline"
                >
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                  Google: turn on 2-Step Verification
                </a>
                <a
                  href="https://support.microsoft.com/account-billing/how-to-use-two-step-verification-with-your-microsoft-account-b775dae3-a4a9-b790-3c3f-946d-8a8bca3768af"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-slate-600 font-semibold hover:underline"
                >
                  Microsoft: two-step verification
                </a>
              </div>
            </div>

            {/* Backups & Restore + Browse with Caution — paired row */}
            <div className="md:col-span-2 lg:col-span-3 grid gap-6 lg:grid-cols-2 lg:items-stretch">
              <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-brand-red hover:shadow-xl transition-shadow relative h-full flex flex-col">
                <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Backups & Restore</h3>
                <p className="text-slate-600 text-sm mb-3">
                  Always maintain regular backups. Use the 3-2-1 rule: 3 copies, 2 different media types, 1 offsite.
                </p>
                <ul className="text-sm text-slate-500 space-y-1 flex-1">
                  <li>• Automate daily backups</li>
                  <li>• Test restores quarterly</li>
                  <li>• Keep offsite/cloud copy</li>
                </ul>
                <a
                  href="https://secure.logmein.com/pullinstall_go.asp?page=addacomputer3_pull&lang=en&c=twk9htfslmi85dguy6rtdobpimhzsqkv1tomysuf&bnf=undefined"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-4 px-3 py-1.5 bg-brand-green/10 hover:bg-brand-green/20 text-brand-green text-xs font-semibold rounded-full transition-colors w-fit"
                >
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-green"></span>
                  </span>
                  Remote Support
                </a>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-teal-500 hover:shadow-xl transition-shadow h-full flex flex-col">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Browse with Caution</h3>
                <p className="text-slate-600 text-sm mb-3">
                  The web is full of threats. Protect yourself with good habits and reliable antivirus software.
                </p>
                <ul className="text-sm text-slate-500 space-y-1 flex-1">
                  <li>• Use Windows Defender or Bitdefender</li>
                  <li>• Avoid sketchy download sites</li>
                  <li>• Look for HTTPS on websites</li>
                </ul>
              </div>
            </div>

            {/* Software Updates */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-brand-blue hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Software Updates</h3>
              <p className="text-slate-600 text-sm mb-3">
                Keep your systems patched and updated to protect against vulnerabilities.
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Enable auto-updates</li>
                <li>• Update browsers weekly</li>
                <li>• Patch critical systems ASAP</li>
              </ul>
              <a
                href="https://secure.logmein.com/pullinstall_go.asp?page=addacomputer3_pull&lang=en&c=twk9htfslmi85dguy6rtdobpimhzsqkv1tomysuf&bnf=undefined"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-4 px-3 py-1.5 bg-brand-green/10 hover:bg-brand-green/20 text-brand-green text-xs font-semibold rounded-full transition-colors"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-green"></span>
                </span>
                Remote Support
              </a>
            </div>

            {/* Email Safety */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-brand-yellow hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-brand-yellow/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Email Safety</h3>
              <p className="text-slate-600 text-sm mb-3">
                Phishing is the #1 attack vector. Stay vigilant with every email you receive.
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Verify sender addresses</li>
                <li>• Don&apos;t click suspicious links</li>
                <li>• Report phishing attempts</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-slate-200">
                <p className="text-xs text-brand-yellow font-semibold flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Tip: Get a Gmail account for personal, non-trivial email
                </p>
              </div>
            </div>

            {/* Wi-Fi Security */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-purple-500 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Wi-Fi Security</h3>
              <p className="text-slate-600 text-sm mb-3">
                Secure your network and be cautious on public Wi-Fi connections.
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Use WPA3 encryption</li>
                <li>• VPN on public networks</li>
                <li>• Change default passwords</li>
              </ul>
            </div>

            {/* Device Maintenance */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-cyan-500 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Device Maintenance</h3>
              <p className="text-slate-600 text-sm mb-3">
                Regular maintenance keeps your devices running fast and extends their lifespan.
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Clean up disk space monthly</li>
                <li>• Restart devices weekly</li>
                <li>• Monitor storage usage</li>
              </ul>
              <a
                href="https://secure.logmein.com/pullinstall_go.asp?page=addacomputer3_pull&lang=en&c=twk9htfslmi85dguy6rtdobpimhzsqkv1tomysuf&bnf=undefined"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-4 px-3 py-1.5 bg-brand-green/10 hover:bg-brand-green/20 text-brand-green text-xs font-semibold rounded-full transition-colors"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-green"></span>
                </span>
                Remote Support
              </a>
            </div>

            {/* Don't Buy Cheap PCs */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-rose-500 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Invest in Quality Hardware</h3>
              <p className="text-slate-600 text-sm mb-3">
                Don&apos;t waste money on cheap PCs and laptops. They cost more in repairs, frustration, and lost productivity.
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Minimum 16GB RAM for business</li>
                <li>• SSD storage is non-negotiable</li>
                <li>• Buy business-grade, not consumer</li>
              </ul>
            </div>

            {/* Don't Overload with Software */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-indigo-500 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Don&apos;t Overload with Software</h3>
              <p className="text-slate-600 text-sm mb-3">
                Too many programs slow your PC down. Keep it lean—install only what you need.
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Uninstall unused programs</li>
                <li>• Limit startup applications</li>
                <li>• One tool per job, not five</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-card rounded-2xl p-8 shadow-lg card-hover border-t-4 border-brand-green">
              <div className="w-14 h-14 bg-brand-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Getting Started</h3>
              <p className="text-foreground/60 mb-4">
                Learn the basics of our AI-powered tools and get up and running quickly.
              </p>
              <Link href="#getting-started" className="text-brand-green font-semibold hover:underline">
                View guides →
              </Link>
            </div>

            <div className="group bg-card rounded-2xl p-8 shadow-lg card-hover border-t-4 border-brand-blue">
              <div className="w-14 h-14 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Technical Support</h3>
              <p className="text-foreground/60 mb-4">
                Get help with technical issues, troubleshooting, and advanced features.
              </p>
              <Link href="#technical" className="text-brand-blue font-semibold hover:underline">
                Get help →
              </Link>
            </div>

            <div className="group bg-card rounded-2xl p-8 shadow-lg card-hover border-t-4 border-brand-yellow">
              <div className="w-14 h-14 bg-brand-yellow/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Contact Us</h3>
              <p className="text-foreground/60 mb-4">
                Reach out to our support team for personalized assistance and feedback.
              </p>
              <Link href="#contact" className="text-brand-yellow font-semibold hover:underline">
                Contact support →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-foreground/60">Find quick answers to common questions</p>
          </div>

          <div className="space-y-4">
            <div className="bg-card rounded-2xl p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-brand-green rounded-full" />
                How do I get started with <span className="arvintech-brand">arvintech&apos;s</span> AI tools?
              </h3>
              <p className="text-foreground/70">
                Getting started is easy! Simply create an account, choose your preferred AI application 
                (IA Books, Reimagined Cliff Notes, AI Apps, or our Author Program), and follow our step-by-step onboarding guide.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-brand-blue rounded-full" />
                What makes <span className="arvintech-brand">arvintech&apos;s</span> AI different?
              </h3>
              <p className="text-foreground/70">
                Our AI is specifically designed to amplify human intelligence rather than replace it. 
                We focus on enhancing your natural abilities in learning, writing, and creative thinking through innovative applications.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-brand-yellow rounded-full" />
                Do you have regular scheduled maintenance programs?
              </h3>
              <p className="text-foreground/70">
                Yes, for small business companies! We offer remote maintenance and support combined with 
                scheduled on-site visits to keep your systems running smoothly. Emergency calls are also considered.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-brand-red rounded-full" />
                Emergency Support
              </h3>
              <p className="text-foreground/70 mb-4">
                Urgent technical support is available. We use remote support tools + AI to resolve issues quickly. 
                On-site calls can be scheduled and are priced accordingly.
              </p>
              <div className="space-y-2 mb-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={emergencyIssues.noTurnOn}
                    onChange={(e) => setEmergencyIssues({...emergencyIssues, noTurnOn: e.target.checked})}
                    className="w-4 h-4 rounded border-gray-300 text-brand-red focus:ring-brand-red"
                  />
                  <span className="text-sm text-foreground/70">Computer won't turn on</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={emergencyIssues.blueScreen}
                    onChange={(e) => setEmergencyIssues({...emergencyIssues, blueScreen: e.target.checked})}
                    className="w-4 h-4 rounded border-gray-300 text-brand-red focus:ring-brand-red"
                  />
                  <span className="text-sm text-foreground/70">Blue screen</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={emergencyIssues.blackScreen}
                    onChange={(e) => setEmergencyIssues({...emergencyIssues, blackScreen: e.target.checked})}
                    className="w-4 h-4 rounded border-gray-300 text-brand-red focus:ring-brand-red"
                  />
                  <span className="text-sm text-foreground/70">Black screen</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={emergencyIssues.dataLost}
                    onChange={(e) => setEmergencyIssues({...emergencyIssues, dataLost: e.target.checked})}
                    className="w-4 h-4 rounded border-gray-300 text-brand-red focus:ring-brand-red"
                  />
                  <span className="text-sm text-foreground/70">Data lost</span>
                </label>
              </div>
              <a
                href={`sms:+15094404477?body=${getEmergencyMessage()}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-brand-red text-white font-semibold rounded-full hover:bg-red-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" strokeWidth={2} />
                  <circle cx="12" cy="12" r="4" strokeWidth={2} />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v4M12 18v4M2 12h4M18 12h4" />
                </svg>
                Emergency SMS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl text-center">
            <h2 className="text-3xl font-bold mb-4">Still need help?</h2>
            <p className="text-foreground/60 mb-8 max-w-2xl mx-auto">
              Our support team is here to help you succeed. Get in touch and we&apos;ll respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-green">
                Contact Support
              </button>
              <button className="btn-outline">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
