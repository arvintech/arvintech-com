"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background blocks-pattern lego-sf-bg">
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
              <Link href="/news" className="text-foreground/70 hover:text-brand-green transition-colors font-medium">
                News
              </Link>
              <Link href="/blog" className="text-foreground/70 hover:text-brand-green transition-colors font-medium">
                Blog
              </Link>
              <Link href="/work-with-us" className="btn-green text-sm">
                Work With Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Relaunch */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Bay Area Night Background */}
        <div className="absolute inset-0">
          <Image
            src="/transamerica.JPG"
            alt="San Francisco Skyline at Night"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand-green/20 rounded-3xl rotate-12 animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-brand-blue/20 rounded-2xl -rotate-12 animate-float delay-200" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          {/* Logo animation */}
          <div className={`mb-8 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <Image
              src="/arvintech-blocks-logo.png"
              alt="ArvinTech Building Blocks"
              width={120}
              height={120}
              className="mx-auto"
              priority
            />
          </div>

          {/* Relaunch Badge */}
          <div 
            className={`inline-flex items-center gap-2 px-6 py-3 bg-brand-green/20 border-2 border-brand-green rounded-full mb-6 transition-all duration-1000 delay-100 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="w-3 h-3 bg-brand-green rounded-full animate-pulse" />
            <span className="text-brand-green font-bold text-sm uppercase tracking-wider">Relaunched for the AI Era</span>
          </div>

          {/* Main headline */}
          <h1 
            className={`text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 transition-all duration-1000 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <span className="text-white">Managed IT and</span>
            <br />
            <span className="h1-rainbow">AI Automation</span>
            <br />
            <span className="text-white">Services Since 2000</span>
          </h1>

          {/* Tagline */}
          <p 
            className={`text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-10 transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Secure, manage, and modernize your business infrastructure with expert IT support and AI-powered automation.
          </p>

          {/* How this site is built: Next.js, Cursor, Vercel */}
          <div
            className={`max-w-3xl mx-auto text-left space-y-4 md:space-y-5 mb-10 transition-all duration-1000 delay-325 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-xl md:text-2xl font-semibold text-white text-center">
              Web pages created in Next.js
            </h2>
            <p className="text-sm md:text-base text-white/85 leading-relaxed">
              {`The site isn't a WordPress-style website where someone logs in to a dashboard and types posts.`}
            </p>
            <p className="text-sm md:text-base text-white/85 leading-relaxed">
              {`It's built in Cursor — an AI-assisted editor where I work on the site's content and design directly, with the AI helping write the underlying code. When I'm ready to publish, the changes push to Vercel, which rebuilds the site and puts the update live worldwide in seconds.`}
            </p>
            <p className="text-sm md:text-base text-white/85 leading-relaxed">
              {`The result is a site that's faster, more secure, and more flexible than a traditional CMS, because there's no database or admin panel exposed to the internet — the live site is essentially a pre-built, high-performance version of the source files.`}
            </p>
          </div>

          {/* Value Props */}
          <div 
            className={`grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10 transition-all duration-1000 delay-350 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center mb-3 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">25 Years Experience</h3>
              <p className="text-white/70 text-sm">Legacy IT expertise you can trust</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center mb-3 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">AI Integration</h3>
              <p className="text-white/70 text-sm">Modern automation capability</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-brand-yellow rounded-lg flex items-center justify-center mb-3 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Infrastructure + Intelligence</h3>
              <p className="text-white/70 text-sm">Complete technology solution</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-400 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Link href="#services" className="btn-green text-lg px-8 py-4">
              View Services
            </Link>
            <Link href="#consultation" className="btn-outline text-lg px-8 py-4">
              Schedule Consultation
            </Link>
            <Link href="/support" className="inline-flex items-center justify-center gap-2 bg-brand-blue text-white rounded-xl font-semibold hover:bg-blue-600 transition-colors shadow-lg text-lg px-8 py-4">
              Support
            </Link>
          </div>

          {/* Scroll indicator */}
          <div 
            className={`mt-16 transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          >
            <div className="flex flex-col items-center gap-2 text-white/60">
              <span className="text-sm font-medium">Scroll to explore</span>
              <svg className="w-6 h-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="services" className="py-24 px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green/10 rounded-full mb-4">
              <span className="text-brand-green font-bold text-sm uppercase tracking-wider">Core Services</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4 text-slate-900">
              Infrastructure + Intelligence
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              <span className="arvintech-brand">arvintech</span> helps businesses modernize their IT infrastructure and deploy AI systems that improve efficiency, security, and operational performance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Service 1: Managed IT Support */}
            <Link
              href="/managed-it-support"
              className="group relative block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2"
            >
              <div className="absolute inset-0 bg-brand-green rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity" />
              <div className="relative h-full bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border-2 border-slate-200 group-hover:border-brand-green transition-all shadow-lg">
                <div className="w-16 h-14 bg-brand-green rounded-lg flex items-center justify-center mb-6 shadow-lg relative overflow-visible">
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full shadow-inner border-2 border-green-500" />
                    <div className="w-3 h-3 bg-green-400 rounded-full shadow-inner border-2 border-green-500" />
                  </div>
                  <svg className="w-8 h-8 text-white mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Managed IT Support</h3>
                <p className="text-slate-600 mb-6">
                  Remote IT support, security monitoring, backups, and system maintenance. Your technology infrastructure, professionally managed.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-sm text-slate-700">
                    <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>24/7 Remote Support</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-700">
                    <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Security Monitoring</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-700">
                    <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Automated Backups</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-700">
                    <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>System Updates</span>
                  </li>
                </ul>
                <span className="inline-flex items-center gap-1 text-brand-green font-semibold text-sm">
                  Learn more
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* Service 2: AI Readiness */}
            <Link
              href="/ai-readiness"
              className="group relative block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
            >
              <div className="absolute inset-0 bg-brand-blue rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity" />
              <div className="relative h-full bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border-2 border-slate-200 group-hover:border-brand-blue transition-all shadow-lg">
                <div className="w-16 h-14 bg-brand-blue rounded-lg flex items-center justify-center mb-6 shadow-lg relative overflow-visible">
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex gap-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full shadow-inner border-2 border-blue-500" />
                    <div className="w-3 h-3 bg-blue-400 rounded-full shadow-inner border-2 border-blue-500" />
                  </div>
                  <svg className="w-8 h-8 text-white mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">AI Readiness with Intelligence Amplifier</h3>
                <p className="text-slate-600 mb-6">
                  Prepare your business for the AI era with Intelligence Amplifier assessment, strategy, and implementation planning.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-sm text-slate-700">
                    <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>AI Readiness Assessment</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-700">
                    <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>IA Platform Deployment</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-700">
                    <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Custom AI Strategy</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-700">
                    <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Team Training & Onboarding</span>
                  </li>
                </ul>
                <span className="inline-flex items-center gap-1 text-brand-blue font-semibold text-sm">
                  Learn more
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* Service 3: AI Automation */}
            <Link
              href="/ai-automation"
              className="group relative block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2"
            >
              <div className="absolute inset-0 bg-brand-yellow rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity" />
              <div className="relative h-full bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border-2 border-slate-200 group-hover:border-brand-yellow transition-all shadow-lg">
                <div className="w-16 h-14 bg-brand-yellow rounded-lg flex items-center justify-center mb-6 shadow-lg relative overflow-visible">
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex gap-2">
                    <div className="w-3 h-3 bg-yellow-300 rounded-full shadow-inner border-2 border-yellow-400" />
                    <div className="w-3 h-3 bg-yellow-300 rounded-full shadow-inner border-2 border-yellow-400" />
                  </div>
                  <svg className="w-8 h-8 text-white mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">AI Automation & Integration</h3>
                <p className="text-slate-600 mb-6">
                  Deploy intelligent automation systems that reduce manual work and improve operational efficiency with modern AI tools.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-sm text-slate-700">
                    <svg className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Workflow Automation</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-700">
                    <svg className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>AI Assistant Deployment</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-700">
                    <svg className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Custom Integration</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-700">
                    <svg className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Process Optimization</span>
                  </li>
                </ul>
                <span className="inline-flex items-center gap-1 text-brand-yellow font-semibold text-sm">
                  Learn more
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Web development breakthrough — Next.js & React */}
      <section className="py-20 px-6 bg-gradient-to-br from-brand-blue/10 via-white to-brand-green/10 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-brand-blue/20 rounded-xl rotate-12 animate-float" />
        <div className="absolute top-40 right-20 w-12 h-12 bg-brand-green/20 rounded-lg -rotate-6 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/4 w-10 h-10 bg-brand-yellow/20 rounded-md rotate-45 animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Logo/Icon */}
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-brand-blue to-brand-green rounded-2xl shadow-2xl mb-8 animate-float">
            <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-brand-blue via-brand-green to-brand-blue bg-clip-text text-transparent">
              Web Development Breakthrough
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-4">
            with Next.js and React
          </p>
          <p className="mb-8 max-w-3xl mx-auto">
            <Link
              href="/mission-web-studio"
              className="inline-flex items-center gap-1.5 text-lg font-semibold text-brand-blue hover:text-brand-green transition-colors underline-offset-4 hover:underline"
            >
              Mission Pages Studio
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <span className="text-slate-500 text-base font-normal"> — how we build mission-focused sites</span>
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="px-4 py-2 bg-brand-blue/10 text-brand-blue rounded-full text-sm font-medium">Next.js</span>
            <span className="px-4 py-2 bg-brand-green/10 text-brand-green rounded-full text-sm font-medium">React</span>
            <span className="px-4 py-2 bg-brand-yellow/10 text-yellow-700 rounded-full text-sm font-medium">Automation</span>
            <span className="px-4 py-2 bg-brand-red/10 text-brand-red rounded-full text-sm font-medium">SEO Optimized</span>
          </div>
          <Link href="/how-we-build" className="btn-green text-lg px-8 py-4 inline-block">
            Learn more
          </Link>
        </div>
      </section>

      {/* Service Packages Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-green/20 border border-brand-green/30 rounded-full mb-6">
              <span className="text-brand-green font-bold text-xs uppercase tracking-wider">Pricing Plans</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 text-white leading-tight">
              Simple, Predictable Pricing
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Choose the managed service package that fits your business. All plans include expert support and ongoing maintenance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-10 items-center pt-8">
            {/* Starter Package */}
            <div className="relative bg-white rounded-3xl p-6 md:p-8 border-4 border-slate-200 shadow-2xl hover:shadow-3xl hover:border-brand-green/30 transition-all duration-300 flex flex-col h-full">
              <div className="absolute top-0 left-0 right-0 h-6 bg-brand-green flex items-center justify-center gap-4 rounded-t-[1.25rem]">
                <div className="w-3 h-3 bg-green-300 rounded-full shadow-inner" />
                <div className="w-3 h-3 bg-green-300 rounded-full shadow-inner" />
              </div>
              <div className="pt-6 flex flex-col flex-grow">
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Starter</h3>
                  <p className="text-slate-600 text-sm mb-4">For small businesses (1–5 users)</p>
                  <div className="flex items-baseline gap-1.5 mb-6">
                    <span className="text-4xl md:text-5xl font-extrabold text-brand-green">$500</span>
                    <span className="text-slate-600 font-medium text-lg">/month</span>
                  </div>
                </div>
                <ul className="space-y-3.5 mb-8 flex-grow">
                  <li className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                    <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-medium">Remote IT support</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                    <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-medium">Security monitoring</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                    <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-medium">Automated backups</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                    <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-medium">System updates</span>
                  </li>
                </ul>
                <Link href="#consultation" className="block w-full text-center px-6 py-4 bg-brand-green text-white rounded-xl font-bold text-base hover:bg-green-600 hover:shadow-xl transition-all duration-200 shadow-lg">
                  Get Started
                </Link>
              </div>
            </div>

            {/* Professional Package - Featured */}
            <div className="relative bg-white rounded-3xl p-6 md:p-8 border-4 border-brand-blue shadow-2xl transform md:scale-[1.08] flex flex-col h-full mt-10">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-6 py-2.5 bg-gradient-to-r from-brand-blue to-blue-600 text-white rounded-full text-xs font-bold uppercase shadow-lg border-2 border-white whitespace-nowrap z-10">
                Most Popular
              </div>
              <div className="absolute top-0 left-0 right-0 h-6 bg-brand-blue flex items-center justify-center gap-4 rounded-t-[1.25rem]">
                <div className="w-3 h-3 bg-blue-300 rounded-full shadow-inner" />
                <div className="w-3 h-3 bg-blue-300 rounded-full shadow-inner" />
                <div className="w-3 h-3 bg-blue-300 rounded-full shadow-inner" />
              </div>
              <div className="pt-6 flex flex-col flex-grow">
                <div className="mb-7">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Professional</h3>
                  <p className="text-slate-600 text-sm mb-4">For growing businesses (5–15 users)</p>
                  <div className="flex items-baseline gap-1.5 mb-6">
                    <span className="text-5xl md:text-6xl font-extrabold text-brand-blue">$1,200</span>
                    <span className="text-slate-600 font-medium text-lg">/month</span>
                  </div>
                </div>
                <ul className="space-y-3.5 mb-8 flex-grow">
                  <li className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                    <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-medium">All Starter features</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                    <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-medium">Managed IT support</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                    <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-medium">Advanced cybersecurity</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                    <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-medium">AI assistant deployment</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                    <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-medium">Priority support</span>
                  </li>
                </ul>
                <Link href="#consultation" className="block w-full text-center px-6 py-4 bg-brand-blue text-white rounded-xl font-bold text-base hover:bg-blue-600 hover:shadow-xl transition-all duration-200 shadow-lg">
                  Get Started
                </Link>
              </div>
            </div>

            {/* Business Package */}
            <div className="relative bg-white rounded-3xl p-6 md:p-8 border-4 border-slate-200 shadow-2xl hover:shadow-3xl hover:border-brand-yellow/30 transition-all duration-300 flex flex-col h-full">
              <div className="absolute top-0 left-0 right-0 h-6 bg-brand-yellow flex items-center justify-center gap-4 rounded-t-[1.25rem]">
                <div className="w-3 h-3 bg-yellow-300 rounded-full shadow-inner" />
                <div className="w-3 h-3 bg-yellow-300 rounded-full shadow-inner" />
                <div className="w-3 h-3 bg-yellow-300 rounded-full shadow-inner" />
                <div className="w-3 h-3 bg-yellow-300 rounded-full shadow-inner" />
              </div>
              <div className="pt-6 flex flex-col flex-grow">
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Business</h3>
                  <p className="text-slate-600 text-sm mb-4">For established businesses (15+ users)</p>
                  <div className="flex items-baseline gap-1.5 mb-6">
                    <span className="text-4xl md:text-5xl font-extrabold text-brand-yellow">$2,500</span>
                    <span className="text-slate-600 font-medium text-lg">/month</span>
                  </div>
                </div>
                <ul className="space-y-3.5 mb-8 flex-grow">
                  <li className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                    <svg className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-medium">All Professional features</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                    <svg className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-medium">Custom automation systems</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                    <svg className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-medium">Dedicated priority support</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                    <svg className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-medium">Strategic IT consulting</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                    <svg className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-medium">Account manager</span>
                  </li>
                </ul>
                <Link href="#consultation" className="block w-full text-center px-6 py-4 bg-brand-yellow text-white rounded-xl font-bold text-base hover:bg-yellow-500 hover:shadow-xl transition-all duration-200 shadow-lg">
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 pt-6 border-t border-white/10">
            <p className="text-white/80 text-base md:text-lg leading-relaxed">
              All prices are monthly recurring. Custom enterprise solutions available.{" "}
              <Link href="#consultation" className="text-brand-green font-bold hover:text-green-400 hover:underline transition-colors">
                Contact us for details →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Consultation CTA Section */}
      <section id="consultation" className="py-24 px-6 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-blue/10 rounded-full mb-6">
            <span className="text-brand-blue font-bold text-xs uppercase tracking-wider">The AI Shift is Here</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-slate-900 leading-tight">
            Ready to Modernize Your Business?
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Schedule a free consultation to discuss your IT needs and discover how <span className="arvintech-brand">arvintech</span> can help secure, manage, and modernize your technology infrastructure.
          </p>
          
          <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 md:p-12 border-2 border-slate-200 shadow-xl max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-left">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-brand-green focus:outline-none transition-colors"
                    placeholder="John Smith"
                    required
                  />
                </div>
                <div className="text-left">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Company Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-brand-green focus:outline-none transition-colors"
                    placeholder="Your Company"
                    required
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-left">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-brand-green focus:outline-none transition-colors"
                    placeholder="john@company.com"
                    required
                  />
                </div>
                <div className="text-left">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-brand-green focus:outline-none transition-colors"
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>
              </div>

              <div className="text-left">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Number of Users</label>
                <select className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-brand-green focus:outline-none transition-colors">
                  <option>1-5 users</option>
                  <option>5-15 users</option>
                  <option>15-50 users</option>
                  <option>50+ users</option>
                </select>
              </div>

              <div className="text-left">
                <label className="block text-sm font-semibold text-slate-700 mb-2">What are you interested in?</label>
                <textarea 
                  className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-brand-green focus:outline-none transition-colors resize-none"
                  rows={4}
                  placeholder="Tell us about your IT needs, challenges, or goals..."
                  required
                />
              </div>

              <button 
                type="submit"
                className="w-full px-8 py-4 bg-brand-green text-white rounded-xl font-bold text-lg hover:bg-green-600 transition-colors shadow-lg"
              >
                Schedule Free Consultation
              </button>

              <p className="text-sm text-slate-500">
                We'll respond within 24 hours. No commitment required.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Target Industries Section */}
      <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-blue/10 rounded-full mb-4">
              <span className="text-brand-blue font-bold text-sm uppercase tracking-wider">Who We Serve</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4 text-slate-900">
              Trusted by Professional Firms
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We specialize in providing reliable IT and AI solutions for professional service firms that value security, efficiency, and uptime.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Law Firms */}
            <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-brand-green transition-all shadow-lg group">
              <div className="w-14 h-14 bg-brand-green/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-green/20 transition-colors">
                <svg className="w-7 h-7 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Law Firms</h3>
              <p className="text-slate-600 text-sm">
                Secure document management, case automation, and compliance-focused IT infrastructure.
              </p>
            </div>

            {/* Accounting Firms */}
            <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-brand-blue transition-all shadow-lg group">
              <div className="w-14 h-14 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-blue/20 transition-colors">
                <svg className="w-7 h-7 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Accounting Firms</h3>
              <p className="text-slate-600 text-sm">
                Protected financial data, automated workflows, and seamless software integration.
              </p>
            </div>

            {/* Medical Offices */}
            <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-brand-yellow transition-all shadow-lg group">
              <div className="w-14 h-14 bg-brand-yellow/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-yellow/20 transition-colors">
                <svg className="w-7 h-7 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Medical Offices</h3>
              <p className="text-slate-600 text-sm">
                HIPAA-compliant systems, patient data security, and practice management automation.
              </p>
            </div>

            {/* Real Estate */}
            <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-brand-red transition-all shadow-lg group">
              <div className="w-14 h-14 bg-brand-red/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-red/20 transition-colors">
                <svg className="w-7 h-7 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Real Estate</h3>
              <p className="text-slate-600 text-sm">
                CRM automation, listing management tools, and mobile-ready infrastructure.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">
              Not in these industries?{" "}
              <Link href="#consultation" className="text-brand-green font-semibold hover:underline">
                We work with businesses of all types.
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Our Technology Platforms Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{backgroundImage: 'repeating-linear-gradient(90deg, #22c55e 0px, #22c55e 20px, transparent 20px, transparent 40px), repeating-linear-gradient(0deg, #3b82f6 0px, #3b82f6 20px, transparent 20px, transparent 40px)'}} />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            {/* Building blocks animation header */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-8 bg-brand-green rounded-lg animate-bounce" style={{animationDelay: '0ms'}} />
              <div className="w-8 h-8 bg-brand-red rounded-lg animate-bounce" style={{animationDelay: '100ms'}} />
              <div className="w-8 h-8 bg-brand-yellow rounded-lg animate-bounce" style={{animationDelay: '200ms'}} />
              <div className="w-8 h-8 bg-brand-blue rounded-lg animate-bounce" style={{animationDelay: '300ms'}} />
              <div className="w-8 h-8 bg-brand-green rounded-lg animate-bounce" style={{animationDelay: '400ms'}} />
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
              <span className="h1-blocks">Our Technology Platforms</span>
            </h2>
            <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
              Beyond managed services, we've built powerful platforms that integrate AI into your workflow. 
              These tools are available as add-ons to any service package.
            </p>
          </div>

          {/* Building Blocks Grid - Stacked Layout */}
          <div className="grid gap-8">
            {/* Row 1 - AI Readiness White Paper Preview */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-slate-700 to-brand-blue rounded-3xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity" />
              <div className="relative bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden">
                {/* Top publication bar */}
                <div className="bg-slate-900 px-10 py-4 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-widest">
                  <span className="text-brand-blue">ArvinTech Insights</span>
                  <span className="text-slate-600">·</span>
                  <span className="text-slate-400">White Paper Series</span>
                  <span className="text-slate-600">·</span>
                  <span className="text-slate-400">Volume 1, 2026</span>
                  <span className="ml-auto text-brand-green">30 min read</span>
                </div>

                <div className="p-10 md:p-14">
                  {/* Header */}
                  <div className="max-w-4xl mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-blue/10 border border-brand-blue/20 rounded-full mb-5">
                      <div className="w-1.5 h-1.5 bg-brand-blue rounded-full animate-pulse" />
                      <span className="text-brand-blue text-xs font-bold uppercase tracking-widest">Strategic Study</span>
                    </div>
                    <h3 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-5 leading-[1.05]">
                      The AI Readiness <span className="text-brand-blue">Imperative</span>
                    </h3>
                    <p className="text-xl md:text-2xl text-slate-600 font-light leading-snug">
                      A strategic framework for small and midsize businesses to move from observation to operational AI advantage in 2026.
                    </p>
                  </div>

                  {/* Key Findings Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-12 border-y border-slate-200">
                    {[
                      { stat: "78%", label: "of SMBs explored AI in 2025", color: "text-slate-900", href: "/smb-ai-tools-2025" },
                      { stat: "14%", label: "reached production deployment", color: "text-brand-red", href: "/ai-readiness" },
                      { stat: "3.2×", label: "ROI on structured programs", color: "text-brand-green", href: "/ai-readiness" },
                      { stat: "18 mo", label: "closing window to act", color: "text-brand-blue", href: "/ai-window-2026" },
                    ].map((s, i) => (
                      <Link key={i} href={s.href} className={`group py-8 px-5 hover:bg-slate-50 transition-colors ${i < 3 ? "md:border-r border-slate-200" : ""} ${i === 1 ? "border-r border-slate-200" : ""} ${i === 2 ? "border-t md:border-t-0 border-slate-200" : ""} ${i === 3 ? "border-t md:border-t-0 border-slate-200" : ""}`}>
                        <p className={`text-4xl md:text-5xl font-black mb-2 ${s.color}`}>{s.stat}</p>
                        <p className="text-slate-500 text-xs uppercase tracking-wider leading-tight group-hover:text-brand-blue transition-colors">{s.label}</p>
                      </Link>
                    ))}
                  </div>

                  {/* Executive Thesis */}
                  <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="md:col-span-1">
                      <p className="text-brand-blue text-xs font-bold uppercase tracking-widest mb-3">Executive Summary</p>
                      <p className="text-2xl font-extrabold text-slate-900 leading-tight">
                        The decisive factor is not technology. It is <span className="text-brand-blue">readiness</span>.
                      </p>
                    </div>
                    <div className="md:col-span-2 text-slate-700 leading-relaxed space-y-4">
                      <p>
                        The marginal cost of AI experimentation has collapsed while the marginal value of production deployment has never been higher. Yet most SMBs remain trapped between the two — aware of the opportunity, actively experimenting, but structurally unable to convert pilots into operational advantage.
                      </p>
                      <p>
                        This study presents a five-dimension readiness framework developed from 127 client engagements across professional services, retail, and healthcare — cross-referenced against McKinsey, Gartner, and BCG global research.
                      </p>
                    </div>
                  </div>

                  {/* The Framework at a Glance */}
                  <div className="mb-12">
                    <p className="text-brand-blue text-xs font-bold uppercase tracking-widest mb-5">The Five-Dimension Framework</p>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                      {[
                        { letter: "S", dim: "Strategy", weight: "25%", color: "brand-blue" },
                        { letter: "D", dim: "Data", weight: "20%", color: "brand-green" },
                        { letter: "I", dim: "Infrastructure", weight: "15%", color: "purple-500" },
                        { letter: "P", dim: "People", weight: "25%", color: "brand-yellow" },
                        { letter: "G", dim: "Governance", weight: "15%", color: "brand-red" },
                      ].map((d, i) => (
                        <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-4 hover:border-brand-blue/40 transition-colors">
                          <div className={`w-11 h-11 bg-${d.color} rounded-lg flex items-center justify-center shadow mb-3`}>
                            <span className="text-white font-black text-xl">{d.letter}</span>
                          </div>
                          <p className="text-slate-900 font-bold text-sm mb-0.5">{d.dim}</p>
                          <p className="text-slate-500 text-xs font-mono">Weight: {d.weight}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sector Outcomes Table */}
                  <div className="mb-12">
                    <p className="text-brand-blue text-xs font-bold uppercase tracking-widest mb-5">Sector Outcomes (Observed 2023–2026)</p>
                    <div className="overflow-hidden rounded-xl border border-slate-200">
                      <table className="w-full text-sm">
                        <thead className="bg-slate-900 text-white">
                          <tr>
                            <th className="text-left p-4 font-bold">Segment</th>
                            <th className="text-left p-4 font-bold hidden md:table-cell">Primary Use Cases</th>
                            <th className="text-right p-4 font-bold">Avg. ROI</th>
                            <th className="text-right p-4 font-bold">Payback</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { seg: "Professional Services", sub: "Legal · CPA · Consulting", uses: "Document review, intake triage, drafting", roi: "280%", pay: "4.5 mo", color: "brand-blue" },
                            { seg: "Multi-Commerce Retail", sub: "Ecommerce · Brick & Mortar", uses: "Catalog generation, CX automation, forecasting", roi: "340%", pay: "3.2 mo", color: "brand-green" },
                            { seg: "Healthcare Providers", sub: "Urgent Care · Homecare · Clinics", uses: "Clinical documentation, intake, multi-site ops", roi: "220%", pay: "6.8 mo", color: "purple-500" },
                          ].map((r, i) => (
                            <tr key={i} className={`${i % 2 === 0 ? "bg-white" : "bg-slate-50"} border-b border-slate-200 last:border-0`}>
                              <td className="p-4">
                                <p className={`text-${r.color} font-bold`}>{r.seg}</p>
                                <p className="text-slate-500 text-xs mt-0.5">{r.sub}</p>
                              </td>
                              <td className="p-4 text-slate-700 hidden md:table-cell">{r.uses}</td>
                              <td className="p-4 text-right font-black text-slate-900 text-lg">{r.roi}</td>
                              <td className="p-4 text-right text-slate-700 font-semibold">{r.pay}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="text-xs text-slate-500 italic mt-3">Source: <span className="arvintech-brand font-semibold">arvintech</span> client engagements 2023–2026. Individual results vary with baseline conditions. Full methodology in the complete study.</p>
                  </div>

                  {/* Maturity Curve Visualization */}
                  <div className="mb-12">
                    <p className="text-brand-blue text-xs font-bold uppercase tracking-widest mb-5">Where SMBs Sit on the Maturity Curve</p>
                    <div className="relative">
                      <div className="flex items-end gap-2 h-32">
                        {[
                          { stage: 0, name: "Unaware", pct: 18, color: "bg-slate-400" },
                          { stage: 1, name: "Curious", pct: 34, color: "bg-brand-yellow" },
                          { stage: 2, name: "Piloting", pct: 26, color: "bg-brand-blue" },
                          { stage: 3, name: "Producing", pct: 14, color: "bg-brand-green" },
                          { stage: 4, name: "Institutional", pct: 8, color: "bg-purple-500" },
                        ].map((s, i) => (
                          <div key={i} className="flex-1 flex flex-col items-center gap-1">
                            <p className="text-xs font-bold text-slate-700">{s.pct}%</p>
                            <div className={`w-full ${s.color} rounded-t-lg transition-all hover:opacity-80`} style={{ height: `${s.pct * 2.5}px` }} />
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-2 mt-2 pt-2 border-t-2 border-slate-300">
                        {[
                          { stage: 0, name: "Unaware" },
                          { stage: 1, name: "Curious" },
                          { stage: 2, name: "Piloting" },
                          { stage: 3, name: "Producing" },
                          { stage: 4, name: "Institutional" },
                        ].map((s, i) => (
                          <div key={i} className="flex-1 text-center">
                            <p className="text-slate-400 text-xs font-mono">Stage {s.stage}</p>
                            <p className="text-slate-900 text-xs font-bold">{s.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Pull Quote */}
                  <div className="border-l-4 border-brand-blue pl-6 py-3 mb-12 bg-slate-50 rounded-r-xl">
                    <p className="text-xl md:text-2xl font-semibold text-slate-900 italic leading-snug">
                      "The organizations that treat AI readiness as a strategic program — not a technology purchase — will capture disproportionate value over the next 18 months."
                    </p>
                    <p className="text-slate-500 text-sm mt-3">— From the study, Executive Summary</p>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-4 items-center pt-6 border-t border-slate-200">
                    <div className="flex-1">
                      <p className="text-slate-900 font-bold text-lg">Read the complete white paper</p>
                      <p className="text-slate-500 text-sm">12 sections · framework · maturity model · 90-day roadmap · financial tiers · risk analysis</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Link
                        href="/ai-readiness"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue text-white rounded-xl font-bold hover:bg-blue-600 transition-colors shadow-lg"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Read Full Study
                      </Link>
                      <Link
                        href="/work-with-us"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 border-2 border-slate-200 rounded-xl font-bold hover:border-brand-blue hover:text-brand-blue transition-colors"
                      >
                        Request Assessment
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CoreWeave AI Strategy Section */}
            <div className="group relative">
              <div className="absolute inset-0 bg-slate-900 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity" />
              <div className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-3xl p-10 border border-slate-600/50 overflow-hidden shadow-2xl">
                {/* Decorative blurs */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-brand-blue/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-blue/10 rounded-full blur-3xl" />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-blue/20 border border-brand-blue/30 rounded-full mb-5">
                      <div className="w-2 h-2 bg-brand-blue rounded-full animate-pulse" />
                      <span className="text-brand-blue text-xs font-bold uppercase tracking-widest">AI Infrastructure · SMB &amp; Mid-Market</span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
                      CoreWeave{" "}
                      <span className="bg-gradient-to-r from-brand-blue to-cyan-400 bg-clip-text text-transparent">AI Strategy</span>
                    </h3>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                      Production-grade GPU cloud infrastructure — purpose-built for AI — now accessible at SMB economics. Deploy private LLMs, document intelligence, and fine-tuned domain models in 90 days.
                    </p>
                  </div>

                  {/* Key Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                    {[
                      { stat: "40–60%", label: "Below hyperscaler pricing", color: "brand-green" },
                      { stat: "90 days", label: "Concept to production", color: "brand-blue" },
                      { stat: "H100 / A100", label: "NVIDIA GPU clusters", color: "purple-400" },
                      { stat: "SOC 2", label: "Type II compliant", color: "cyan-400" },
                    ].map((item, i) => (
                      <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
                        <p className={`text-2xl font-black text-${item.color} mb-1`}>{item.stat}</p>
                        <p className="text-slate-400 text-xs leading-tight">{item.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Use Cases Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                    {[
                      {
                        color: "brand-blue",
                        icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                        title: "Private LLM Inference",
                        body: "Run open-weight models on your own CoreWeave cluster. Zero data to OpenAI, Anthropic, or any third party — full sovereignty over your AI and your documents.",
                      },
                      {
                        color: "brand-green",
                        icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                        title: "Document Intelligence",
                        body: "Process contracts, reports, and compliance docs at scale with a RAG pipeline. 10,000 documents embedded and queryable in hours, not weeks.",
                      },
                      {
                        color: "purple-400",
                        icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
                        title: "Fine-Tuned Domain Models",
                        body: "Train on your industry data — legal, medical, financial, technical. A model that speaks your language, applies your standards, and is yours to own.",
                      },
                      {
                        color: "cyan-400",
                        icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z",
                        title: "AI Customer Operations",
                        body: "Draft responses, classify requests, route tickets — integrated into your CRM or helpdesk. 50–70% reduction in first-response time.",
                      },
                      {
                        color: "brand-yellow",
                        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                        title: "Batch Analytics",
                        body: "Weekly AI-generated reports, anomaly detection, and NL summaries of operational data. Burst capacity means you pay only when jobs run.",
                      },
                      {
                        color: "brand-green",
                        icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
                        title: "Managed by arvintech",
                        body: "End-to-end deployment, integration, and ongoing operations handled by arvintech — managed IT and AI services since 2000.",
                      },
                    ].map((item, i) => (
                      <div key={i} className="bg-white/5 backdrop-blur rounded-xl p-5 border border-white/10 hover:bg-white/10 transition-all">
                        <div className={`w-11 h-11 bg-${item.color}/20 rounded-lg flex items-center justify-center mb-4`}>
                          <svg className={`w-5 h-5 text-${item.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                          </svg>
                        </div>
                        <h4 className="text-white font-bold text-sm mb-2">{item.title}</h4>
                        <p className="text-slate-400 text-xs leading-relaxed">{item.body}</p>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link
                      href="/coreweave-ai-strategy"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-brand-blue text-white rounded-xl font-bold text-lg hover:bg-blue-600 transition-colors shadow-xl"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Read the White Paper
                    </Link>
                    <Link
                      href="/ai-readiness"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white border-2 border-white/30 rounded-xl font-bold text-lg hover:bg-white/20 transition-colors"
                    >
                      AI Readiness Assessment
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* AI + Classic Literature Section */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 to-brand-red/20 rounded-3xl blur-2xl opacity-30" />
              <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden border-4 border-slate-700 shadow-2xl">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue via-purple-500 to-brand-red" />
                <div className="absolute inset-0 opacity-5 pointer-events-none select-none">
                  <div className="absolute top-8 left-8 text-9xl text-white font-serif">"</div>
                  <div className="absolute bottom-8 right-8 text-9xl text-white font-serif rotate-180">"</div>
                </div>

                <div className="relative z-10 p-10 md:p-12">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center gap-5 mb-10">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-brand-blue to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue/20 border border-brand-blue/30 rounded-full mb-2">
                        <div className="w-2 h-2 bg-brand-blue rounded-full animate-pulse" />
                        <span className="text-brand-blue text-xs font-bold uppercase tracking-widest">New Chapter</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                        An AI Collaboration with{" "}
                        <span className="bg-gradient-to-r from-brand-blue to-purple-400 bg-clip-text text-transparent">Classic Literature</span>
                      </h3>
                    </div>
                  </div>

                  {/* Intro */}
                  <p className="text-slate-300 text-base leading-relaxed mb-10 max-w-3xl">
                    We're launching a new chapter at <span className="arvintech-brand text-white">arvintech</span> — where artificial intelligence meets the enduring works that shaped human thought. What began as the Intelligence Amplifier Series now extends into the library of classical literature itself.
                  </p>

                  {/* Three Panels */}
                  <div className="grid md:grid-cols-3 gap-6">

                    {/* Panel 1 - Intelligence Amplifier Series */}
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-9 h-9 bg-brand-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-white font-bold text-sm leading-tight">The Intelligence Amplifier Series</p>
                          <p className="text-slate-500 text-xs">by Arvin Lioanag · Amazon KDP</p>
                        </div>
                      </div>
                      <p className="text-slate-400 text-xs leading-relaxed mb-4 flex-1">
                        A collection exploring how AI can amplify human intelligence, spirit, and wisdom. Conceived in January 2025 and in print by March 2025 — demonstrating how quickly ideas can travel from thought to printed book in readers' hands.
                      </p>
                      <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">Published Volumes</p>
                      <div className="space-y-2">
                        {[
                          "The Alarming Rise of Stupidity Amplified — Navigating the Ethical Risks Beyond Intelligence",
                          "The Amplified Human Spirit",
                          "San Francisco: The AI Capital of the World — How City College Will Transform a Technology Hub into the World's Intelligence Amplification Capital",
                        ].map((title, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <div className="w-5 h-5 bg-brand-blue/10 border border-brand-blue/30 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-brand-blue text-xs font-bold">{i + 1}</span>
                            </div>
                            <p className="text-slate-300 text-xs leading-relaxed">{title}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Panel 2 - Amplified Classics */}
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-9 h-9 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-white font-bold text-sm">Amplified Classics</p>
                          <a href="https://amplifiedclassics.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 text-xs hover:text-purple-300 transition-colors">amplifiedclassics.com ↗</a>
                        </div>
                      </div>
                      <p className="text-slate-400 text-xs leading-relaxed mb-4 flex-1">
                        A dedicated website featuring 104 works of classical literature — each dissected, condensed, and reimagined through AI collaboration. Also produces original books in the Intelligence Amplifier tradition.
                      </p>
                      <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">AC Originals</p>
                      <div className="space-y-1.5">
                        {[
                          "Ancient Classics Paradox",
                          "The Paradox of Wealth",
                          "The Lit of Love",
                          "You Are Not Lost",
                          "The Last Chapter First",
                        ].map((title, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0" />
                            <p className="text-slate-300 text-xs">{title}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Panel 3 - One Daily Classic */}
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-9 h-9 bg-brand-red/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="text-white font-bold text-sm">One Daily Classic</p>
                            <span className="px-1.5 py-0.5 bg-brand-red/20 text-brand-red text-xs font-bold rounded">LIVE</span>
                          </div>
                          <a href="https://oneclassicdaily.com" target="_blank" rel="noopener noreferrer" className="text-red-400 text-xs hover:text-red-300 transition-colors">oneclassicdaily.com ↗</a>
                        </div>
                      </div>
                      <p className="text-slate-400 text-xs leading-relaxed mb-4 flex-1">
                        A pocket-sized web experience — a Classic Literature library designed for your phone.
                      </p>
                      <div className="space-y-2">
                        {[
                          { label: "AI-guided discussions" },
                          { label: "English narration" },
                          { label: "Spanish narration", note: "in development" },
                          { label: "Print editions available via Amazon KDP" },
                        ].map((item, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <svg className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <p className="text-slate-300 text-xs">
                              {item.label}
                              {item.note && <span className="text-slate-500 ml-1">({item.note})</span>}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom connector - visual representation of blocks connecting */}
            <div className="flex justify-center pt-8">
              <div className="flex items-end gap-2">
                <div className="w-6 h-12 bg-brand-green rounded-t-lg" />
                <div className="w-6 h-16 bg-brand-red rounded-t-lg" />
                <div className="w-6 h-20 bg-brand-yellow rounded-t-lg" />
                <div className="w-6 h-24 bg-brand-blue rounded-t-lg" />
                <div className="w-6 h-28 bg-brand-green rounded-t-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="h-1 w-12 bg-brand-green rounded-full" />
                <span className="text-brand-green font-semibold uppercase tracking-wider text-sm">Our Philosophy</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Unlearn to <span className="text-brand-green">Relearn</span>
              </h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Measure intelligence by possibility. Prepare for new, exciting ways to live our human lives amplified. 
                We believe in collaboration, not replacement—where AI enhances what makes us uniquely human.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Collaboration Over Replacement</h4>
                    <p className="text-slate-400 text-sm">AI that amplifies your capabilities, not substitutes them.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Possibility-Centered</h4>
                    <p className="text-slate-400 text-sm">We don't just solve problems—we expand horizons.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Preparation for Tomorrow</h4>
                    <p className="text-slate-400 text-sm">Strategic positioning for an AI-enhanced future.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-green/20 via-brand-blue/20 to-brand-red/20 rounded-3xl" />
                <div className="absolute inset-4 glass-dark rounded-2xl flex items-center justify-center">
                  <Image
                    src="/arvintech-blocks-logo.png"
                    alt="ArvinTech Philosophy"
                    width={280}
                    height={280}
                    className="animate-pulse-scale"
                  />
                </div>
                {/* Floating blocks */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-brand-green rounded-xl rotate-12 animate-float" />
                <div className="absolute -top-2 -right-6 w-10 h-10 bg-brand-blue rounded-lg -rotate-12 animate-float delay-200" />
                <div className="absolute -bottom-4 -left-6 w-8 h-8 bg-brand-yellow rounded-lg rotate-45 animate-float delay-400" />
                <div className="absolute -bottom-2 -right-4 w-14 h-14 bg-brand-red rounded-xl -rotate-6 animate-float delay-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Offerings Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Offerings</h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Four powerful solutions to amplify your business in the AI age
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Amplified Operations */}
            <div className="group bg-gradient-to-br from-brand-green/5 to-brand-blue/5 rounded-2xl p-8 border border-brand-green/20 hover:border-brand-green/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-brand-green rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Amplified Operations</h3>
                  <p className="text-foreground/60 mb-4">AI-powered workflow automation, business process optimization, on-time AR management, and QuickBooks integrations.</p>
                  <Link href="/amplified-operations" className="text-brand-green font-semibold hover:underline">Learn more →</Link>
                </div>
              </div>
            </div>

            {/* Amplified Customer Communications */}
            <div className="group bg-gradient-to-br from-brand-blue/5 to-brand-yellow/5 rounded-2xl p-8 border border-brand-blue/20 hover:border-brand-blue/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-brand-blue rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Amplified Customer Communications</h3>
                  <p className="text-foreground/60 mb-4">Product transparency, AI-powered incident management, client portals, and automated follow-ups that create more customers.</p>
                  <Link href="/amplified-customer-communications" className="text-brand-blue font-semibold hover:underline">Learn more →</Link>
                </div>
              </div>
            </div>

            {/* IT Infrastructure Support */}
            <div className="group bg-gradient-to-br from-brand-yellow/5 to-brand-red/5 rounded-2xl p-8 border border-brand-yellow/20 hover:border-brand-yellow/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-brand-yellow rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">IT Infrastructure Support</h3>
                  <p className="text-foreground/60 mb-4">AI readiness planning, implementation strategies, mobile working solutions, and AI tools selection for maximum growth.</p>
                  <Link href="/it-infrastructure-support" className="text-brand-yellow font-semibold hover:underline">Learn more →</Link>
                </div>
              </div>
            </div>

            {/* Mission Web */}
            <div className="group bg-gradient-to-br from-brand-red/5 to-brand-green/5 rounded-2xl p-8 border border-brand-red/20 hover:border-brand-red/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-brand-red rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Mission Web</h3>
                  <p className="text-foreground/60 mb-4">Full-service Next.js development, optimized web search and visibility, payment gateways, and company portal implementation.</p>
                  <Link href="/mission-web-studio" className="text-brand-red font-semibold hover:underline">Learn more →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-green via-brand-blue to-brand-green bg-[length:200%_100%] animate-[gradient-shift_8s_ease_infinite] p-12 text-center text-white">
            {/* Decorative blocks */}
            <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-lg rotate-12" />
            <div className="absolute top-8 right-8 w-6 h-6 bg-white/20 rounded-lg -rotate-12" />
            <div className="absolute bottom-4 left-8 w-10 h-10 bg-white/20 rounded-xl rotate-45" />
            <div className="absolute bottom-8 right-4 w-7 h-7 bg-white/20 rounded-lg -rotate-6" />
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">
              Ready to Amplify Your Potential?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto relative z-10">
              Let's explore how our approach can transform your business, creative projects, or operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link 
                href="/support" 
                className="bg-white text-brand-green px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-all hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link 
                href="/work-with-us" 
                className="bg-white/20 text-white border-2 border-white/50 px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all hover:scale-105"
              >
                Join Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-4">
                <Image
                  src="/arvintech-blocks-logo.png"
                  alt="ArvinTech"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <span className="text-xl font-bold arvintech-brand">arvintech</span>
              </Link>
              <p className="text-slate-400 text-sm mb-4">
                Building tomorrow's solutions through intelligent collaboration.
              </p>
              <div className="flex gap-4">
                <a href="https://facebook.com/arvintech" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="https://linkedin.com/company/arvintech" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/support" className="hover:text-white transition-colors">Support</Link></li>
                <li><Link href="/news" className="hover:text-white transition-colors">News</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>

            {/* Work With Us */}
            <div>
              <h4 className="font-semibold mb-4">Work With Us</h4>
              <p className="text-slate-400 text-sm mb-3">
                You were never meant to be replaced. Join us in building the future.
              </p>
              <p className="text-slate-400 text-sm mb-2">
                <span className="text-brand-green font-medium">Now Hiring:</span> Producer
              </p>
              <Link href="/work-with-us" className="text-brand-green hover:underline text-sm font-medium">
                View Opportunities →
              </Link>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-3 text-slate-400 text-sm">
                <div>
                  <p className="text-white font-medium">San Francisco & Bay Area</p>
                  <p>785 Oak Grove Rd. Suite E2, Concord CA 94518</p>
                </div>
                <div>
                  <p className="text-white font-medium">Portland & Pacific Northwest</p>
                  <p>Park Avenue West 11th Floor, SW 9th Ave, Portland OR 97205</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">© {new Date().getFullYear()} arvintech.com. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-brand-green rounded-sm" />
              <div className="w-3 h-3 bg-brand-blue rounded-sm" />
              <div className="w-3 h-3 bg-brand-yellow rounded-sm" />
              <div className="w-3 h-3 bg-brand-red rounded-sm" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
