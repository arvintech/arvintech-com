"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
          entry.target.classList.remove("opacity-0", "translate-y-8")
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll(".animate-on-scroll")
    animatedElements.forEach((el) => observer.observe(el))

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

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
              <Link href="/about" className="text-brand-green font-semibold">
                About
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute top-32 left-10 w-24 h-24 bg-brand-green/10 rounded-2xl rotate-12 animate-float" />
        <div className="absolute top-40 right-20 w-20 h-20 bg-brand-blue/10 rounded-xl -rotate-12 animate-float delay-200" />
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-brand-yellow/15 rounded-lg rotate-45 animate-float delay-400" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className={`transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="block-green" />
              <div className="block-blue" />
              <div className="block-yellow" />
              <div className="block-red" />
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              <span className="text-foreground">About </span>
              <span className="h1-blocks">arvintech</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              An innovative attitude to AI—<span className="text-brand-green font-semibold">Collaboration</span>, not replacement.
              Building intelligent solutions that amplify human potential.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Philosophy Section */}
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-16 bg-brand-green rounded-full" />
              <span className="text-brand-green font-semibold uppercase tracking-wider text-sm">Our Philosophy</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">An Innovative Attitude to AI</h2>
            <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
              <p>
                <span className="arvintech-brand">arvintech</span> represents a fundamental shift in how we approach artificial intelligence. 
                We believe in collaboration, not replacement. Our philosophy centers on the courage to unlearn outdated paradigms and 
                relearn new possibilities—measuring intelligence not by what machines can do alone, but by what humans and AI can achieve together.
              </p>
              <p>
                This is about possibility. This is about preparation. This is about discovering new, exciting ways to live human lives 
                amplified. As a Bay Area-based IT consulting and digital innovation firm with a distributed support team in Manila, 
                we don't just provide technology solutions—we forge partnerships that expand what it means to be human in an AI-enhanced world.
              </p>
              <p>
                Our approach combines the reliability of proven IT infrastructure with the transformative power of collaborative intelligence. 
                Whether you're a growing business reimagining operational possibilities or an independent author exploring new creative frontiers, 
                we partner with you to harness technology that amplifies your authentic vision while dramatically expanding your human potential.
              </p>
            </div>
          </div>

          {/* Core Offerings */}
          <div className="mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Offerings</h2>
              <p className="text-foreground/60 max-w-2xl mx-auto">
                Comprehensive solutions designed to amplify your business potential
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="group bg-card rounded-2xl p-8 shadow-lg card-hover border-l-4 border-brand-green">
                <div className="w-14 h-14 bg-brand-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Technology Consulting & Support</h3>
                <ul className="space-y-3 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-green mt-1">▸</span>
                    AI Model infrastructure strategic design
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-green mt-1">▸</span>
                    Remote troubleshooting and systems administration
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-green mt-1">▸</span>
                    Strategic technology roadmapping for SMBs
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-green mt-1">▸</span>
                    Managed support and ongoing optimization
                  </li>
                </ul>
              </div>

              <div className="group bg-card rounded-2xl p-8 shadow-lg card-hover border-l-4 border-brand-blue">
                <div className="w-14 h-14 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">AI Intelligence Amplification</h3>
                <ul className="space-y-3 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-blue mt-1">▸</span>
                    Custom AI integrations and workflow automations
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-blue mt-1">▸</span>
                    WordPress and Next.js AI-powered plugins
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-blue mt-1">▸</span>
                    Business productivity amplifiers
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-blue mt-1">▸</span>
                    Decision-support dashboards and analytics
                  </li>
                </ul>
              </div>

              <div className="group bg-card rounded-2xl p-8 shadow-lg card-hover border-l-4 border-brand-yellow">
                <div className="w-14 h-14 bg-brand-yellow/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Digital Publishing & IP Development</h3>
                <ul className="space-y-3 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-yellow mt-1">▸</span>
                    Author support tools and manuscript preparation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-yellow mt-1">▸</span>
                    Amazon KDP strategies and distribution
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-yellow mt-1">▸</span>
                    Joint venture and IP buyout programs
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-yellow mt-1">▸</span>
                    Interactive books and educational modules
                  </li>
                </ul>
              </div>

              <div className="group bg-card rounded-2xl p-8 shadow-lg card-hover border-l-4 border-brand-red">
                <div className="w-14 h-14 bg-brand-red/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Branding & Web Development</h3>
                <ul className="space-y-3 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-red mt-1">▸</span>
                    Custom Next.js and WordPress websites
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-red mt-1">▸</span>
                    Brand assets: logos, animations, pitch decks
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-red mt-1">▸</span>
                    AI-powered user engagement features
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-red mt-1">▸</span>
                    Landing pages optimized for conversion
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Philosophy of Amplified Living */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 mb-16 text-white animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Philosophy of Amplified Living</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Intelligence isn't about replacement—it's about collaboration. It's the unlearning to relearn.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-brand-green/30 hover:border-brand-green/60 transition-all">
                <div className="w-12 h-12 bg-brand-green/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">Collaboration Over Replacement</h4>
                <p className="text-slate-400 text-sm">
                  Human-AI partnerships where intelligence is multiplied, not substituted.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-brand-blue/30 hover:border-brand-blue/60 transition-all">
                <div className="w-12 h-12 bg-brand-blue/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">Unlearn to Relearn</h4>
                <p className="text-slate-400 text-sm">
                  Breaking free from limiting beliefs about what's possible.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-brand-yellow/30 hover:border-brand-yellow/60 transition-all">
                <div className="w-12 h-12 bg-brand-yellow/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">Possibility-Centered</h4>
                <p className="text-slate-400 text-sm">
                  We don't just solve problems—we expand horizons.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-brand-red/30 hover:border-brand-red/60 transition-all">
                <div className="w-12 h-12 bg-brand-red/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">Preparation for Tomorrow</h4>
                <p className="text-slate-400 text-sm">
                  Strategic positioning for an AI-enhanced future.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Why Choose <span className="arvintech-brand">arvintech</span>?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-brand-green mb-3">Distributed Excellence</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Our Bay Area innovation hub drives strategic vision and cutting-edge development, while our Manila 
                  support team ensures 24/7 operational excellence and cost-effective scalability.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-brand-blue mb-3">Risk-Sharing Partnerships</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Unlike traditional IT vendors, we offer joint venture models and shared-risk approaches. 
                  Your success becomes our success, creating true alignment and partnership.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-brand-yellow mb-3">Holistic Integration</h3>
                <p className="text-foreground/70 leading-relaxed">
                  We seamlessly blend traditional IT reliability with innovative AI capabilities, ensuring your 
                  entire technology ecosystem works as one cohesive platform.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-brand-red mb-3">Proven Expertise</h3>
                <p className="text-foreground/70 leading-relaxed">
                  From small business operations to independent author success stories, we've helped diverse clients 
                  amplify their potential through strategic technology integration.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-green via-brand-blue to-brand-green bg-[length:200%_100%] animate-[gradient-shift_8s_ease_infinite] p-12 text-center text-white animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-lg rotate-12" />
            <div className="absolute top-8 right-8 w-6 h-6 bg-white/20 rounded-lg -rotate-12" />
            <div className="absolute bottom-4 left-8 w-10 h-10 bg-white/20 rounded-xl rotate-45" />
            <div className="absolute bottom-8 right-4 w-7 h-7 bg-white/20 rounded-lg -rotate-6" />
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">Ready to Amplify Your Potential?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto relative z-10">
              Let's explore how our Intelligence Amplification approach can transform your business.
            </p>
            <Link 
              href="/support" 
              className="inline-block bg-white text-brand-green px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-all hover:scale-105 relative z-10"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
