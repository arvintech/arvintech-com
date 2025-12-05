"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState("")

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
              <p className="text-sm text-white/70 mt-4">Secure connection powered by LogMeIn • Available 24/7</p>
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
                Do you offer training or tutorials?
              </h3>
              <p className="text-foreground/70">
                Yes! We provide comprehensive tutorials, video guides, and live training sessions to help you 
                maximize the potential of our AI tools. Check our learning resources section for more details.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-brand-red rounded-full" />
                How can I contact support for urgent issues?
              </h3>
              <p className="text-foreground/70">
                For urgent technical issues, you can reach our priority support team via email at 
                support@arvintech.com or through our live chat feature available 24/7 for premium users.
              </p>
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
