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
            Get the support you need to amplify your potential with <span className="arvintech-brand">arvintech</span>'s innovative solutions.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for help articles, guides, or FAQs..."
                className="w-full px-6 py-4 bg-card border border-border rounded-2xl text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent shadow-lg"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-brand-green hover:bg-brand-green/90 px-6 py-2 rounded-xl text-white font-medium transition-all hover:scale-105">
                Search
              </button>
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
          <div className="mb-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-6 md:p-8 shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div className="text-center md:text-left flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">💡 Pro Tip: Use ChatGPT for Tech Questions</h3>
                <p className="text-white/90 text-base md:text-lg">
                  Skip the endless Google searches. Ask ChatGPT—it gives you direct answers, not 10 blue links. 
                  Get step-by-step instructions, ask follow-up questions, and explain errors in plain English.
                </p>
              </div>
              <a
                href="https://chat.openai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-600 font-bold rounded-full hover:bg-emerald-50 transition-colors shadow-lg flex-shrink-0"
              >
                Try ChatGPT
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

            {/* 3. Use Google Drive */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Use Google Drive</h3>
              <p className="text-slate-600 text-sm mb-3">
                Sync and backup your files to the cloud. Access them anywhere and never lose important documents.
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Install Google Drive for Desktop</li>
                <li>• Sync important folders automatically</li>
                <li>• 15GB free storage included</li>
              </ul>
            </div>

            {/* 4. Backups & Restore */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-brand-red hover:shadow-xl transition-shadow relative">
              <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Backups & Restore</h3>
              <p className="text-slate-600 text-sm mb-3">
                Always maintain regular backups. Use the 3-2-1 rule: 3 copies, 2 different media types, 1 offsite.
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Automate daily backups</li>
                <li>• Test restores quarterly</li>
                <li>• Keep offsite/cloud copy</li>
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

            {/* Password Security */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-brand-green hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Password Security</h3>
              <p className="text-slate-600 text-sm mb-3">
                Strong, unique passwords are your first line of defense against cyber threats.
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Use a password manager</li>
                <li>• Enable 2FA everywhere</li>
                <li>• Never reuse passwords</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-slate-200">
                <a 
                  href="https://support.google.com/accounts/answer/1066447" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-brand-green font-semibold hover:underline"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                  Get Google Authenticator (Free 2FA)
                </a>
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
                <li>• Don't click suspicious links</li>
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
                Don't waste money on cheap PCs and laptops. They cost more in repairs, frustration, and lost productivity.
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
              <h3 className="text-lg font-bold text-slate-900 mb-2">Don't Overload with Software</h3>
              <p className="text-slate-600 text-sm mb-3">
                Too many programs slow your PC down. Keep it lean—install only what you need.
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Uninstall unused programs</li>
                <li>• Limit startup applications</li>
                <li>• One tool per job, not five</li>
              </ul>
            </div>

            {/* Browse with Caution */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-teal-500 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Browse with Caution</h3>
              <p className="text-slate-600 text-sm mb-3">
                The web is full of threats. Protect yourself with good habits and reliable antivirus software.
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Use Windows Defender or Bitdefender</li>
                <li>• Avoid sketchy download sites</li>
                <li>• Look for HTTPS on websites</li>
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
                How do I get started with <span className="arvintech-brand">arvintech</span>'s AI tools?
              </h3>
              <p className="text-foreground/70">
                Getting started is easy! Simply create an account, choose your preferred AI application 
                (IA Books, Reimagined Cliff Notes, AI Apps, or our Author Program), and follow our step-by-step onboarding guide.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-brand-blue rounded-full" />
                What makes <span className="arvintech-brand">arvintech</span>'s AI different?
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
              Our support team is here to help you succeed. Get in touch and we'll respond within 24 hours.
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
