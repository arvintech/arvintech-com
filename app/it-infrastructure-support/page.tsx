"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function ITInfrastructureSupportPage() {
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

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-brand-yellow rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-brand-blue rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className={`text-center transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-yellow/20 rounded-full mb-6">
              <svg className="w-5 h-5 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
              <span className="text-brand-yellow font-semibold text-sm">CORE OFFERING</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
              <span className="text-brand-yellow">IT Infrastructure</span>
              <br />
              <span className="text-white">Support</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-4">
              The IT landscape has changed. 
              <span className="text-brand-yellow font-semibold"> Your infrastructure needs to keep up.</span>
            </p>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
              From strategic planning to daily support—we keep your technology running so you can focus on growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/support" className="bg-brand-yellow text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-400 transition-all text-lg">
                Get IT Support
              </Link>
              <Link href="/about" className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Changing Landscape */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-brand-yellow/10 text-brand-yellow rounded-full text-sm font-semibold mb-4">THE EVOLUTION</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              The IT Landscape Has <span className="text-brand-yellow">Transformed</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Remember Bill Gates' dream of "a computer on every desk"? That vision has multiplied exponentially.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-brand-yellow via-brand-blue to-brand-green"></div>
            
            <div className="space-y-12">
              {/* 1980s */}
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                  <div className="bg-slate-50 rounded-2xl p-6 inline-block">
                    <span className="text-brand-yellow font-bold text-lg">1980s Vision</span>
                    <h3 className="text-2xl font-bold text-slate-900 mt-2">A PC on Every Desk</h3>
                    <p className="text-slate-600 mt-2">Bill Gates envisioned a world where every workplace had a personal computer.</p>
                  </div>
                </div>
                <div className="hidden md:flex w-8 h-8 bg-brand-yellow rounded-full items-center justify-center z-10 mx-auto">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>

              {/* Today */}
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-12"></div>
                <div className="hidden md:flex w-8 h-8 bg-brand-blue rounded-full items-center justify-center z-10 mx-auto">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-gradient-to-br from-brand-blue/5 to-brand-blue/10 rounded-2xl p-6 border border-brand-blue/20">
                    <span className="text-brand-blue font-bold text-lg">Today's Reality</span>
                    <h3 className="text-2xl font-bold text-slate-900 mt-2">4+ Devices Per Person</h3>
                    <p className="text-slate-600 mt-2">PC on your desk. Laptop in your briefcase. Smartphone in your pocket. Tablet at home.</p>
                  </div>
                </div>
              </div>

              {/* Future */}
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                  <div className="bg-gradient-to-br from-brand-green/5 to-brand-green/10 rounded-2xl p-6 inline-block border border-brand-green/20">
                    <span className="text-brand-green font-bold text-lg">The AI Era</span>
                    <h3 className="text-2xl font-bold text-slate-900 mt-2">Intelligent Everything</h3>
                    <p className="text-slate-600 mt-2">AI-powered workflows, smart automation, and systems that learn and adapt.</p>
                  </div>
                </div>
                <div className="hidden md:flex w-8 h-8 bg-brand-green rounded-full items-center justify-center z-10 mx-auto">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Reality */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Your Modern IT Ecosystem
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Today's professional needs seamless connectivity across every device, every location, every moment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Workstation */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:border-brand-yellow/50 transition-colors">
              <div className="w-14 h-14 bg-brand-yellow/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">PC on Your Desk</h3>
              <p className="text-slate-600 text-sm">Powerful workstation for heavy lifting—design, development, data analysis.</p>
            </div>

            {/* Laptop */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:border-brand-blue/50 transition-colors">
              <div className="w-14 h-14 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Laptop in Your Briefcase</h3>
              <p className="text-slate-600 text-sm">Full productivity on the go—meetings, travel, remote work from anywhere.</p>
            </div>

            {/* Smartphone */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:border-brand-green/50 transition-colors">
              <div className="w-14 h-14 bg-brand-green/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Smartphone Everywhere</h3>
              <p className="text-slate-600 text-sm">Always connected—email, messaging, approvals, and instant access to everything.</p>
            </div>

            {/* Corporate Email */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:border-brand-red/50 transition-colors">
              <div className="w-14 h-14 bg-brand-red/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Corporate Email</h3>
              <p className="text-slate-600 text-sm">Professional communication—Microsoft 365, Google Workspace, secure and reliable.</p>
            </div>

            {/* Intelligent Websites */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:border-purple-500/50 transition-colors">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Intelligent Websites</h3>
              <p className="text-slate-600 text-sm">Client portals, vendor interfaces, and AI-powered customer experiences.</p>
            </div>

            {/* Superfast Internet */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:border-cyan-500/50 transition-colors">
              <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Superfast Internet</h3>
              <p className="text-slate-600 text-sm">Fiber, 5G, WiFi 6—blazing speeds at home, office, and everywhere in between.</p>
            </div>

            {/* Cloud Data */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:border-indigo-500/50 transition-colors">
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Data in the Cloud</h3>
              <p className="text-slate-600 text-sm">Your data accessible anywhere, from any device—secure, synced, and always available.</p>
            </div>

            {/* AI Tools */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:border-brand-green/50 transition-colors">
              <div className="w-14 h-14 bg-brand-green/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">AI Tools to Glue It All</h3>
              <p className="text-slate-600 text-sm">Intelligent automation that connects your devices, apps, and workflows seamlessly.</p>
            </div>

            {/* Backups & Restore */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:border-brand-red/50 transition-colors">
              <div className="w-14 h-14 bg-brand-red/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Backups & Restore</h3>
              <p className="text-slate-600 text-sm">Automated backups, disaster recovery, and quick restore—never lose your critical data again.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What We Provide
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive IT infrastructure strategies for maximum growth with AI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* AI Readiness Planning */}
            <div className="bg-gradient-to-br from-brand-yellow/5 to-brand-yellow/10 rounded-2xl p-8 border border-brand-yellow/20">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-brand-yellow rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">AI Readiness Planning</h3>
                  <p className="text-slate-600 mb-4">
                    Assess your current infrastructure and create a roadmap for AI integration. Don't get left behind—prepare your systems for the AI revolution.
                  </p>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-brand-yellow">✓</span> Infrastructure assessment
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-yellow">✓</span> AI readiness scoring
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-yellow">✓</span> Technology roadmap
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-yellow">✓</span> Budget planning
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* AI Implementation Strategies */}
            <div className="bg-gradient-to-br from-brand-blue/5 to-brand-blue/10 rounded-2xl p-8 border border-brand-blue/20">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-brand-blue rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">AI Implementation Strategies</h3>
                  <p className="text-slate-600 mb-4">
                    Turn your AI readiness plan into reality. We help you select, deploy, and optimize AI tools that fit your business.
                  </p>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-brand-blue">✓</span> AI tool selection
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-blue">✓</span> Integration planning
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-blue">✓</span> Staff training programs
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-blue">✓</span> Performance optimization
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Mobile Working Solutions */}
            <div className="bg-gradient-to-br from-brand-green/5 to-brand-green/10 rounded-2xl p-8 border border-brand-green/20">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-brand-green rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Mobile Working Solutions</h3>
                  <p className="text-slate-600 mb-4">
                    Enable your team to work from anywhere without compromising security or productivity.
                  </p>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-brand-green">✓</span> VPN and secure access
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-green">✓</span> Cloud workspace setup
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-green">✓</span> Device management
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-green">✓</span> Collaboration tools
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* AI Tools Selection */}
            <div className="bg-gradient-to-br from-brand-red/5 to-brand-red/10 rounded-2xl p-8 border border-brand-red/20">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-brand-red rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">AI Tools Selection</h3>
                  <p className="text-slate-600 mb-4">
                    Identify the right AI tools for your business—where automation makes sense and delivers real value.
                  </p>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-brand-red">✓</span> Where AI automation is appropriate
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-red">✓</span> Amplify speed, consistency, and reliability
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-red">✓</span> Create services where cost/time was prohibitive
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-red">✓</span> Reduce manual errors and rework
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-red">✓</span> Scale operations without adding headcount
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-red">✓</span> 24/7 availability for customer interactions
                    </li>
                  </ul>
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
            Ready to <span className="text-brand-yellow">Future Load</span> Your IT?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Your current IT infrastructure may not survive the ongoing AI tsunami. Let's make sure you're ready.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/support" className="bg-brand-yellow text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-400 transition-all text-lg">
              Get IT Support
            </Link>
            <Link href="/about" className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all">
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

