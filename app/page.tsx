"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function SplashScreen() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-black flex flex-col relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/usa-from-moon-night.jpg"
          alt="USA from Moon at Night"
          fill
          className="object-cover opacity-80"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <nav className="relative z-20 w-full px-8 py-6">
        <div className="max-w-6xl mx-auto flex justify-end">
          <div className="flex space-x-8">
            <Link
              href="/support"
              className="text-slate-300 hover:text-white transition-colors duration-300 text-sm font-medium"
            >
              Support
            </Link>
            <Link
              href="/about"
              className="text-slate-300 hover:text-white transition-colors duration-300 text-sm font-medium"
            >
              About
            </Link>
            <Link
              href="/news"
              className="text-slate-300 hover:text-white transition-colors duration-300 text-sm font-medium"
            >
              News
            </Link>
            <Link
              href="/blog"
              className="text-slate-300 hover:text-white transition-colors duration-300 text-sm font-medium"
            >
              Blog
            </Link>
          </div>
        </div>
      </nav>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="text-center px-8">
          {/* Logo container with enhanced glow effect */}
          <div className={`mb-8 transition-all duration-1000 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="flex items-center justify-center gap-2">
              <div className="relative">
                <Image
                  src="/arvintech-mini-logo.png"
                  alt="ArvinTech Logo"
                  width={800}
                  height={240}
                  className="w-auto h-32 md:h-40 lg:h-48 animate-slow-rotate"
                  priority
                />
              </div>
              <div className="animate-fade-in-text">
                <Image
                  src="/amplify-your-mind.png"
                  alt="ArvinTech - Amplify Your Mind"
                  width={800}
                  height={240}
                  className="w-auto h-24 md:h-32 lg:h-40 opacity-90"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Tagline */}
          <div className={`transition-all duration-1000 delay-300 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}>
            <h1 className="text-2xl md:text-3xl text-white mb-4 text-balance leading-7 font-mono font-thin lg:text-2xl">
              An Innovative Attitude to AI—Collaboration
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 text-pretty max-w-2xl mx-auto">
              Unlearn to relearn. Measure intelligence by possibility. Prepare for new, exciting ways to live our human
              lives amplified.
            </p>
          </div>

          {/* Product showcase section */}
          <div className={`transition-all duration-1000 delay-400 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-sm font-semibold text-white mb-1">Amplified Classics  </h3>
                <p className="text-xs text-slate-300">Intelligent Literature</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-sm font-semibold text-white mb-1">IA Ideas</h3>
                <p className="text-xs text-slate-300">Abundant Intelligence</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-sm font-semibold text-white mb-1">Amplified Lottery</h3>
                <p className="text-xs text-slate-300">AI-Powered Apps</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-sm font-semibold text-white mb-1">Amplified Almanac</h3>
                <p className="text-xs text-slate-300">Working Class Guide</p>
              </div>
            </div>
          </div>

          {/* Loading indicator */}
          <div className={`transition-all duration-1000 delay-500 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
              <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
            </div>
            <p className="text-sm text-slate-400 mt-4">Loading your experience...</p>
          </div>

          {/* Call to action */}
          <div
            className={`mt-12 transition-all duration-1000 delay-700 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <Link href="/about">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
                about <span className="arvintech-brand font-sans font-extrabold">arvintech</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-secondary/50 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Footer with three sections */}
      <footer className="relative z-20 w-full px-8 py-6 border-t border-slate-700/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-white font-semibold mb-3">Work with Us</h3>
              <div className="text-slate-400 text-sm space-y-3">
                <p>
                  You were never meant to be replaced. We're collaborating with industry leaders to deliver exceptional
                  solutions.
                </p>
                <div>
                  <p className="font-medium text-slate-300 mb-2">Now Hiring</p>
                  <p>
                    <span className="font-medium">Producer</span> - Talented copywriter with a passion for classical
                    literature. Get amplified and realize your potential by exploring AI tools in literature. This
                    position requires on-site presence in Walla Walla, WA.
                  </p>
                </div>
                <div className="pt-2">
                  <Link href="/work-with-us">
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      View Opportunities
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3">Our Work</h3>
              <div className="flex flex-col items-center md:items-start space-y-3">
                <a
                  href="https://intelligenceamplifier.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 hover:scale-105"
                >
                  <Image
                    src="/ia-logo-white.png"
                    alt="Powered by IA - Intelligence Amplification"
                    width={120}
                    height={120}
                    className="w-24 h-24 opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </a>
                <p className="text-slate-400 text-sm">
                  Powered by Intelligence Amplification technology, we're advancing AI through cutting-edge research and
                  innovation that amplifies human potential.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3">Contact Us</h3>
              <div className="text-slate-400 text-sm space-y-2">
                <div>
                  <p className="font-medium text-slate-300">San Francisco &amp; Silicon Valley</p>
                  <p>Covering the Bay Area</p>
                  <p>785 Oak Grove Rd. Concord CA 94518</p>
                </div>
                <div>
                  <p className="font-medium text-slate-300">Pacific Northwest</p>
                  <p>Covering Seattle, Spokane & Portland</p>
                  <p>3838 Pranger Rd. Walla Walla WA 99362</p>
                </div>
                <div className="flex justify-center md:justify-start space-x-4 mt-4">
                  <a
                    href="https://facebook.com/arvintech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors duration-300"
                    aria-label="Follow us on Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/company/arvintech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors duration-300"
                    aria-label="Connect with us on LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.564v11.452zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-slate-700/50 text-center">
            <p className="text-slate-400 text-sm">© {new Date().getFullYear()} arvintech.com. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
