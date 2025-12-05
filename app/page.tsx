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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand-green/10 rounded-3xl rotate-12 animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-brand-blue/10 rounded-2xl -rotate-12 animate-float delay-200" />
        
        {/* LEGO San Francisco Skyline Background Image */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/sfdesign.png"
            alt="LEGO San Francisco Skyline"
            fill
            className="object-cover object-bottom opacity-25"
            priority
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          {/* Logo animation */}
          <div className={`mb-8 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <Image
              src="/arvintech-blocks-logo.png"
              alt="ArvinTech Building Blocks"
              width={180}
              height={180}
              className="mx-auto animate-bounce-subtle"
              priority
            />
          </div>

          {/* Main headline */}
          <h1 
            className={`text-5xl md:text-7xl font-extrabold mb-6 transition-all duration-1000 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <span className="h1-rainbow">Building Tomorrow's</span>
            <br />
            <span className="h1-rainbow">Solutions</span>
          </h1>

          {/* Tagline */}
          <p 
            className={`text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto mb-8 transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            An innovative attitude to AI—
            <span className="text-brand-green font-semibold">Collaboration</span>, not replacement.
            Amplify your potential with intelligent solutions.
          </p>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-400 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Link href="/about" className="btn-green text-lg px-8 py-4">
              Discover More
            </Link>
            <Link href="/support" className="btn-outline text-lg px-8 py-4">
              Get Support
            </Link>
          </div>

          {/* Scroll indicator */}
          <div 
            className={`mt-16 transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          >
            <div className="flex flex-col items-center gap-2 text-foreground/40">
              <span className="text-sm font-medium">Scroll to explore</span>
              <svg className="w-6 h-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Our Building Blocks Section */}
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
              <span className="h1-blocks">Our Building Blocks</span>
            </h2>
            <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
              Five powerful platforms that stack together to amplify your potential. 
              Each block is essential. Together, they build something extraordinary.
            </p>
          </div>

          {/* Building Blocks Grid - Stacked Layout */}
          <div className="grid gap-8">
            {/* Row 1 - Featured Block: Intelligence Amplifier */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-green via-brand-blue to-brand-green rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-10 border border-slate-700/50 overflow-hidden">
                {/* Decorative studs */}
                <div className="absolute top-4 left-4 flex gap-3">
                  <div className="w-4 h-4 bg-brand-green rounded-full shadow-lg" />
                  <div className="w-4 h-4 bg-brand-green rounded-full shadow-lg" />
                  <div className="w-4 h-4 bg-brand-green rounded-full shadow-lg" />
                </div>
                <div className="absolute top-4 right-4 flex gap-3">
                  <div className="w-4 h-4 bg-brand-green rounded-full shadow-lg" />
                  <div className="w-4 h-4 bg-brand-green rounded-full shadow-lg" />
                  <div className="w-4 h-4 bg-brand-green rounded-full shadow-lg" />
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8 items-center pt-6">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      {/* LEGO Brick Icon - Brain/Mind */}
                      <div className="w-20 h-16 bg-brand-green rounded-xl flex flex-col items-center justify-center shadow-lg shadow-brand-green/20 relative overflow-visible">
                        {/* Studs on top */}
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex gap-2">
                          <div className="w-4 h-4 bg-green-400 rounded-full shadow-inner border-2 border-green-500" />
                          <div className="w-4 h-4 bg-green-400 rounded-full shadow-inner border-2 border-green-500" />
                        </div>
                        {/* Brain/lightbulb symbol */}
                        <div className="mt-2 relative">
                          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <div className="w-5 h-5 bg-white/90 rounded-full animate-pulse" />
                          </div>
                          {/* Rays */}
                          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-white/60" />
                          <div className="absolute top-0 -left-1 w-2 h-0.5 bg-white/60 rotate-45" />
                          <div className="absolute top-0 -right-1 w-2 h-0.5 bg-white/60 -rotate-45" />
                        </div>
                      </div>
                      <div className="px-4 py-1 bg-brand-green/20 rounded-full">
                        <span className="text-brand-green text-sm font-semibold">FLAGSHIP</span>
                      </div>
                    </div>
                    <h3 className="text-4xl font-bold text-white mb-4">Intelligence Amplifier</h3>
                    <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                      Our core AI platform that enhances human decision-making without replacing human judgment. 
                      Think of it as a supercharged extension of your mind—analyzing data, surfacing insights, 
                      and amplifying your natural intelligence.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-white/10 rounded-lg text-sm text-slate-300">AI-Powered Analysis</span>
                      <span className="px-4 py-2 bg-white/10 rounded-lg text-sm text-slate-300">Decision Support</span>
                      <span className="px-4 py-2 bg-white/10 rounded-lg text-sm text-slate-300">Human-Centric</span>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="relative flex items-center justify-center">
                      {/* Tailwind motion trails */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="absolute w-[600px] h-[600px] bg-gradient-to-r from-brand-blue/30 via-transparent to-transparent rounded-full blur-3xl -translate-x-20 animate-pulse" />
                        <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-orange-500/20 via-transparent to-transparent rounded-full blur-2xl -translate-x-32 animate-pulse delay-100" />
                        <div className="absolute w-[400px] h-[400px] bg-gradient-to-r from-brand-green/20 via-transparent to-transparent rounded-full blur-xl -translate-x-40 animate-pulse delay-200" />
                      </div>
                      {/* Speed lines */}
                      <div className="absolute right-0 top-1/4 w-32 h-1 bg-gradient-to-l from-transparent via-white/30 to-white/10 animate-ping" />
                      <div className="absolute right-4 top-1/3 w-24 h-0.5 bg-gradient-to-l from-transparent via-brand-blue/40 to-brand-blue/20 animate-ping delay-150" />
                      <div className="absolute right-2 top-1/2 w-28 h-0.5 bg-gradient-to-l from-transparent via-orange-400/40 to-orange-400/20 animate-ping delay-300" />
                      <div className="absolute right-6 top-2/3 w-20 h-1 bg-gradient-to-l from-transparent via-white/20 to-white/10 animate-ping delay-200" />
                      <Image
                        src="/abstractMind.png"
                        alt="Intelligence Amplifier - Abstract Mind"
                        width={800}
                        height={800}
                        className="object-contain scale-125 relative z-10 drop-shadow-2xl hover:scale-130 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2 - Two Medium Blocks */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Amplified Classics */}
              <div className="group relative">
                <div className="absolute inset-0 bg-brand-blue rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity" />
                <div className="relative h-full bg-white rounded-2xl p-8 border-4 border-brand-blue shadow-xl overflow-hidden">
                  {/* LEGO studs */}
                  <div className="absolute top-0 left-0 right-0 h-6 bg-brand-blue flex items-center justify-center gap-8">
                    <div className="w-3 h-3 bg-blue-400 rounded-full" />
                    <div className="w-3 h-3 bg-blue-400 rounded-full" />
                    <div className="w-3 h-3 bg-blue-400 rounded-full" />
                    <div className="w-3 h-3 bg-blue-400 rounded-full" />
                  </div>
                  
                  <div className="pt-4">
                    {/* LEGO Brick Icon - Book/Literature */}
                    <div className="w-16 h-14 bg-brand-blue rounded-lg flex flex-col items-center justify-end mb-4 group-hover:scale-110 transition-transform shadow-lg relative overflow-visible">
                      {/* Studs on top */}
                      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 flex gap-1">
                        <div className="w-3 h-3 bg-blue-400 rounded-full shadow-inner border border-blue-500" />
                        <div className="w-3 h-3 bg-blue-400 rounded-full shadow-inner border border-blue-500" />
                      </div>
                      {/* Book lines on brick */}
                      <div className="flex flex-col gap-1 pb-2">
                        <div className="w-8 h-1 bg-white/80 rounded-full" />
                        <div className="w-6 h-1 bg-white/60 rounded-full" />
                        <div className="w-7 h-1 bg-white/40 rounded-full" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-slate-900">Amplified Classics</h3>
                    <p className="text-slate-600 mb-6">
                      Classic literature reimagined with AI-powered insights. Experience timeless works through 
                      interactive annotations, contextual analysis, and personalized learning paths.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-brand-blue rounded-full" />
                        <span className="text-sm text-brand-blue font-semibold">Literary Intelligence</span>
                      </div>
                      <a 
                        href="https://amplifiedclassics.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-brand-blue font-semibold hover:underline flex items-center gap-1"
                      >
                        Visit Site
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Amplified Review */}
              <div className="group relative">
                <div className="absolute inset-0 bg-brand-red rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity" />
                <div className="relative h-full bg-white rounded-2xl p-8 border-4 border-brand-red shadow-xl overflow-hidden">
                  {/* LEGO studs */}
                  <div className="absolute top-0 left-0 right-0 h-6 bg-brand-red flex items-center justify-center gap-8">
                    <div className="w-3 h-3 bg-red-300 rounded-full" />
                    <div className="w-3 h-3 bg-red-300 rounded-full" />
                    <div className="w-3 h-3 bg-red-300 rounded-full" />
                    <div className="w-3 h-3 bg-red-300 rounded-full" />
                  </div>
                  
                  <div className="pt-4">
                    {/* LEGO Brick Icon - Star/Review */}
                    <div className="w-16 h-14 bg-brand-red rounded-lg flex flex-col items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg relative overflow-visible">
                      {/* Studs on top */}
                      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 flex gap-1">
                        <div className="w-3 h-3 bg-red-300 rounded-full shadow-inner border border-red-400" />
                        <div className="w-3 h-3 bg-red-300 rounded-full shadow-inner border border-red-400" />
                      </div>
                      {/* Star shape */}
                      <svg className="w-7 h-7 text-white mt-1" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-slate-900">Amplified Review</h3>
                    <p className="text-slate-600 mb-6">
                      A newsletter for members of Amplified Classics. Get curated insights, literary analysis, 
                      and AI-enhanced perspectives on classic works delivered to your inbox.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-brand-red rounded-full" />
                        <span className="text-sm text-brand-red font-semibold">Newsletter</span>
                      </div>
                      <a 
                        href="https://theamplifiedreview.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-brand-red font-semibold hover:underline flex items-center gap-1"
                      >
                        Subscribe
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3 - Two Medium Blocks */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission Web Studio */}
              <div className="group relative">
                <div className="absolute inset-0 bg-brand-yellow rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity" />
                <div className="relative h-full bg-white rounded-2xl p-8 border-4 border-brand-yellow shadow-xl overflow-hidden">
                  {/* LEGO studs */}
                  <div className="absolute top-0 left-0 right-0 h-6 bg-brand-yellow flex items-center justify-center gap-8">
                    <div className="w-3 h-3 bg-yellow-300 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-300 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-300 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-300 rounded-full" />
                  </div>
                  
                  <div className="pt-4">
                    {/* LEGO Brick Icon - Monitor/Web */}
                    <div className="w-16 h-14 bg-brand-yellow rounded-lg flex flex-col items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg relative overflow-visible">
                      {/* Studs on top */}
                      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 flex gap-1">
                        <div className="w-3 h-3 bg-yellow-300 rounded-full shadow-inner border border-yellow-500" />
                        <div className="w-3 h-3 bg-yellow-300 rounded-full shadow-inner border border-yellow-500" />
                      </div>
                      {/* Monitor shape */}
                      <div className="w-9 h-5 bg-white/90 rounded-sm mt-1 relative">
                        <div className="absolute inset-0.5 bg-amber-100 rounded-sm flex items-center justify-center">
                          <div className="w-1 h-1 bg-brand-yellow rounded-full" />
                        </div>
                      </div>
                      <div className="w-2 h-1 bg-white/70 mt-0.5" />
                      <div className="w-4 h-0.5 bg-white/70" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-slate-900">Mission Web Studio</h3>
                    <p className="text-slate-600 mb-4">
                      Full-service web development written purely on Next.js. Amplified functions and features 
                      for enhanced forward-facing clients—SEO, client support automation, subscriptions, and more.
                    </p>
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded">Next.js</span>
                      <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded">SEO</span>
                      <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded">Automation</span>
                    </div>
                    <Link href="/mission-web-studio" className="inline-flex items-center gap-2 text-brand-yellow hover:text-yellow-600 font-medium transition-colors group/link">
                      Learn More
                      <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Business Clarity */}
              <div className="group relative">
                <div className="absolute inset-0 bg-brand-green rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity" />
                <div className="relative h-full bg-white rounded-2xl p-8 border-4 border-brand-green shadow-xl overflow-hidden">
                  {/* LEGO studs */}
                  <div className="absolute top-0 left-0 right-0 h-6 bg-brand-green flex items-center justify-center gap-8">
                    <div className="w-3 h-3 bg-green-300 rounded-full" />
                    <div className="w-3 h-3 bg-green-300 rounded-full" />
                    <div className="w-3 h-3 bg-green-300 rounded-full" />
                    <div className="w-3 h-3 bg-green-300 rounded-full" />
                  </div>
                  
                  <div className="pt-4">
                    {/* LEGO Brick Icon - Chart/Analytics */}
                    <div className="w-16 h-14 bg-brand-green rounded-lg flex flex-col items-center justify-end mb-4 group-hover:scale-110 transition-transform shadow-lg relative overflow-visible">
                      {/* Studs on top */}
                      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 flex gap-1">
                        <div className="w-3 h-3 bg-green-300 rounded-full shadow-inner border border-green-400" />
                        <div className="w-3 h-3 bg-green-300 rounded-full shadow-inner border border-green-400" />
                      </div>
                      {/* Bar chart */}
                      <div className="flex items-end gap-1 pb-2">
                        <div className="w-2 h-3 bg-white/60 rounded-t-sm" />
                        <div className="w-2 h-5 bg-white/80 rounded-t-sm" />
                        <div className="w-2 h-4 bg-white/70 rounded-t-sm" />
                        <div className="w-2 h-6 bg-white rounded-t-sm" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-slate-900">Business Clarity</h3>
                    <p className="text-slate-600 mb-6">
                      Technology consulting that brings your current business to AI readiness. Your basic 
                      roadmap for the here and now—not the coming AI age. Amplify your business.
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">AI Readiness</span>
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">Roadmap</span>
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">Consulting</span>
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

      {/* Services Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Build</h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              From technology consulting to digital publishing, we help you amplify your potential
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-gradient-to-br from-brand-green/5 to-brand-blue/5 rounded-2xl p-8 border border-brand-green/20 hover:border-brand-green/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-brand-green rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Technology Consulting</h3>
                  <p className="text-foreground/60 mb-4">AI model infrastructure, remote troubleshooting, strategic technology roadmapping, and managed support.</p>
                  <Link href="/about" className="text-brand-green font-semibold hover:underline">Learn more →</Link>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-brand-blue/5 to-brand-yellow/5 rounded-2xl p-8 border border-brand-blue/20 hover:border-brand-blue/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-brand-blue rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">AI Intelligence Amplification</h3>
                  <p className="text-foreground/60 mb-4">Custom AI integrations, workflow automations, business productivity amplifiers, and decision-support dashboards.</p>
                  <Link href="/about" className="text-brand-blue font-semibold hover:underline">Learn more →</Link>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-brand-yellow/5 to-brand-red/5 rounded-2xl p-8 border border-brand-yellow/20 hover:border-brand-yellow/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-brand-yellow rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Digital Publishing</h3>
                  <p className="text-foreground/60 mb-4">Author support tools, Amazon KDP strategies, joint venture programs, and interactive educational modules.</p>
                  <Link href="/about" className="text-brand-yellow font-semibold hover:underline">Learn more →</Link>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-brand-red/5 to-brand-green/5 rounded-2xl p-8 border border-brand-red/20 hover:border-brand-red/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-brand-red rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Branding & Web Development</h3>
                  <p className="text-foreground/60 mb-4">Custom Next.js and WordPress sites, brand assets, AI-powered engagement features, and conversion-optimized landing pages.</p>
                  <Link href="/about" className="text-brand-red font-semibold hover:underline">Learn more →</Link>
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
                  <p>785 Oak Grove Rd, Concord CA 94518</p>
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
