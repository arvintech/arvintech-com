"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/Footer"

export default function WorkWithUs() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
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
              <Link href="/about" className="text-foreground/70 hover:text-brand-green transition-colors font-medium">
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
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
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
              <span className="h1-neon">Work with us</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              You were never meant to be replaced. We're collaborating with industry leaders to deliver exceptional solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-700 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Work with <span className="arvintech-brand">arvintech</span>?</h2>
            <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
              We're pioneers in Intelligence Amplification, creating a workplace where human creativity meets AI innovation.
            </p>
          </div>

          <div className={`grid md:grid-cols-3 gap-8 transition-all duration-700 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="bg-card rounded-2xl p-8 shadow-lg card-hover border-t-4 border-brand-green">
              <div className="w-14 h-14 bg-brand-green/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation First</h3>
              <p className="text-foreground/60">
                Work on cutting-edge AI projects that push the boundaries of what's possible while keeping humans at the center.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-lg card-hover border-t-4 border-brand-blue">
              <div className="w-14 h-14 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Collaboration Culture</h3>
              <p className="text-foreground/60">
                Join a team that values diverse perspectives and believes the best solutions come from human-AI collaboration.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-lg card-hover border-t-4 border-brand-yellow">
              <div className="w-14 h-14 bg-brand-yellow/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">📈</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Growth & Learning</h3>
              <p className="text-foreground/60">
                Continuous learning opportunities with access to the latest AI tools and technologies to amplify your career.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Producer Position */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-green to-brand-blue p-8 md:p-12 text-white transition-all duration-700 delay-400 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-lg rotate-12" />
            <div className="absolute bottom-4 left-4 w-10 h-10 bg-white/20 rounded-xl -rotate-12" />
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold mb-3">Producer Position</h2>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white/20 px-4 py-1 rounded-full text-sm">Full-time</span>
                    <span className="bg-white/20 px-4 py-1 rounded-full text-sm">On-site</span>
                    <span className="bg-white/20 px-4 py-1 rounded-full text-sm">Walla Walla, WA</span>
                  </div>
                </div>
                <button className="bg-white text-brand-green px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-all mt-4 md:mt-0">
                  Apply Today
                </button>
              </div>

              <p className="text-white/90 mb-8">
                We're seeking a talented copywriter with a passion for classical literature. This unique role combines 
                traditional literary expertise with cutting-edge AI tools to create compelling content that bridges 
                human creativity and artificial intelligence.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/10 rounded-2xl p-6">
                  <h3 className="font-semibold mb-4 text-lg">What We're Looking For:</h3>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-yellow">•</span>
                      Strong background in classical literature
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-yellow">•</span>
                      Excellent writing and communication skills
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-yellow">•</span>
                      Interest in AI and emerging technologies
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-yellow">•</span>
                      Willingness to work on-site in Walla Walla, WA
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 rounded-2xl p-6">
                  <h3 className="font-semibold mb-4 text-lg">What You'll Do:</h3>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-yellow">•</span>
                      Develop AI-enhanced content strategies
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-yellow">•</span>
                      Create compelling narratives for our clients
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-yellow">•</span>
                      Research and integrate classical literary techniques
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-yellow">•</span>
                      Pioneer AI-amplified literary creation
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/10 rounded-2xl p-6">
                <h3 className="font-semibold mb-4 text-lg flex items-center gap-2">
                  <span>⚡</span> How You'll Be Amplified
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span>🛠️</span>
                    </div>
                    <p className="text-white/80 text-sm">Access to cutting-edge AI writing tools</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span>👥</span>
                    </div>
                    <p className="text-white/80 text-sm">Mentorship from industry veterans</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span>🎨</span>
                    </div>
                    <p className="text-white/80 text-sm">Creative freedom to blend tradition with innovation</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span>🚀</span>
                    </div>
                    <p className="text-white/80 text-sm">Pioneer the future of AI-enhanced literature</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discover Walla Walla */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-700 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover Walla Walla, WA</h2>
            <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
              The perfect blend of small-town charm and big opportunities.
            </p>
          </div>

          <div className={`grid md:grid-cols-2 gap-8 transition-all duration-700 delay-600 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="bg-card rounded-2xl p-8 shadow-lg card-hover border-l-4 border-brand-green">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="text-brand-green">🏠</span>
                For Locals
              </h3>
              <ul className="space-y-3 text-foreground/70">
                <li className="flex items-start gap-2">
                  <span className="text-brand-green">•</span>
                  Exceptional home-grown career opportunity
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-green">•</span>
                  Work with a forward-thinking team in your backyard
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-green">•</span>
                  Be part of putting Walla Walla on the tech map
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-lg card-hover border-l-4 border-brand-blue">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="text-brand-blue">✈️</span>
                For Relocators
              </h3>
              <ul className="space-y-3 text-foreground/70">
                <li className="flex items-start gap-2">
                  <span className="text-brand-blue">•</span>
                  Discover tranquility and peace in wine country
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-blue">•</span>
                  Experience authentic Americana in a charming college town
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-blue">•</span>
                  Affordable living with big-city innovation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-blue">•</span>
                  Four-season beauty with outdoor recreation at your doorstep
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-700 delay-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Philosophy: Intelligence Amplification</h2>
            <p className="text-foreground/60 text-lg">
              AI should amplify human intelligence, not replace it.
            </p>
          </div>

          <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 delay-800 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="bg-card rounded-2xl p-6 shadow-lg card-hover border-t-4 border-brand-green">
              <span className="text-3xl mb-4 block">🧠</span>
              <h3 className="text-lg font-bold mb-2">Human-Centered</h3>
              <p className="text-foreground/60 text-sm">
                Every solution starts with understanding human needs and capabilities.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-lg card-hover border-t-4 border-brand-blue">
              <span className="text-3xl mb-4 block">⚡</span>
              <h3 className="text-lg font-bold mb-2">Amplified Potential</h3>
              <p className="text-foreground/60 text-sm">
                Augmenting human capabilities rather than automating them away.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-lg card-hover border-t-4 border-brand-yellow">
              <span className="text-3xl mb-4 block">🤖</span>
              <h3 className="text-lg font-bold mb-2">Ethical AI</h3>
              <p className="text-foreground/60 text-sm">
                Developing AI systems that are transparent, fair, and aligned with values.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-lg card-hover border-t-4 border-brand-red">
              <span className="text-3xl mb-4 block">🌟</span>
              <h3 className="text-lg font-bold mb-2">Continuous Innovation</h3>
              <p className="text-foreground/60 text-sm">
                Fostering continuous learning to stay at the forefront of IA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-yellow via-brand-red to-brand-yellow bg-[length:200%_100%] animate-[gradient-shift_8s_ease_infinite] p-12 text-center text-white transition-all duration-700 delay-900 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-lg rotate-12" />
            <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/20 rounded-xl -rotate-12" />
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">
              Ready to amplify your talents?
            </h2>
            <p className="text-lg text-white/90 mb-8 relative z-10">
              Join us in building a future where human creativity and AI innovation work together.
            </p>
            <button className="bg-white text-brand-red px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all relative z-10">
              Apply Today
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
