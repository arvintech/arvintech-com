"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function MigrationStrategyPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background">
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
      <section className="pt-28 pb-16 px-6 bg-gradient-to-br from-brand-yellow/10 via-white to-slate-50 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-20 h-20 bg-brand-yellow/15 rounded-xl -rotate-12" />
        <div className="absolute bottom-16 left-16 w-14 h-14 bg-brand-blue/10 rounded-lg rotate-6" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div
            className={`transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-yellow/15 rounded-full mb-6">
              <svg className="w-5 h-5 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-brand-yellow font-semibold text-sm uppercase tracking-wider">Migration Services</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
              Windows 11 Migration{" "}
              <span className="text-brand-yellow">Strategy</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-4">
              Plan and execute your Windows 11 upgrade with confidence. Minimal downtime, maximum compatibility, complete data preservation.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-lg mt-6">
              <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm text-amber-800 font-medium">
                Windows 10 support ends October 14, 2025. Plan your migration now.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link href="#assessment" className="inline-flex justify-center items-center px-8 py-4 rounded-xl font-semibold bg-brand-yellow text-white hover:bg-yellow-500 transition-colors text-lg">
                Start Assessment
              </Link>
              <Link
                href="/support"
                className="inline-flex justify-center items-center px-8 py-4 rounded-xl font-semibold border-2 border-slate-200 text-slate-800 hover:border-brand-yellow hover:text-brand-yellow transition-colors"
              >
                Get Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Migrate Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Migrate to Windows 11?</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Windows 11 brings enhanced security, improved performance, and modern features designed for today's hybrid work environment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg">
              <div className="w-14 h-14 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Enhanced Security</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>TPM 2.0 hardware-based security</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Secure Boot protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Windows Hello biometric authentication</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Advanced encryption built-in</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg">
              <div className="w-14 h-14 bg-brand-green/10 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Better Performance</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Faster boot and wake times</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Improved battery life for laptops</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Better resource management</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Optimized for modern hardware</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg">
              <div className="w-14 h-14 bg-brand-yellow/10 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Modern Features</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-brand-yellow flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Redesigned Start menu and taskbar</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-brand-yellow flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Snap layouts for multitasking</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-brand-yellow flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Microsoft Teams integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-brand-yellow flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Widgets and productivity tools</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Process Section */}
      <section id="assessment" className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Migration Process</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              A proven 5-phase approach that ensures a smooth transition with minimal business disruption.
            </p>
          </div>

          <div className="space-y-8">
            {/* Phase 1 */}
            <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg hover:border-brand-yellow/50 transition-all">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-brand-yellow rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-3xl font-bold text-white">1</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Hardware Compatibility Assessment</h3>
                  <p className="text-slate-600 mb-4">
                    Comprehensive evaluation of your existing hardware to ensure Windows 11 compatibility and identify upgrade requirements.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">TPM 2.0 Verification</p>
                        <p className="text-xs text-slate-500">Check Trusted Platform Module availability</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">CPU Compatibility</p>
                        <p className="text-xs text-slate-500">Verify processor meets minimum requirements</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                      </svg>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">RAM & Storage</p>
                        <p className="text-xs text-slate-500">Ensure sufficient memory and disk space</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">Secure Boot Status</p>
                        <p className="text-xs text-slate-500">Enable UEFI firmware security</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg hover:border-brand-yellow/50 transition-all">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-brand-blue rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-3xl font-bold text-white">2</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Application Compatibility Testing</h3>
                  <p className="text-slate-600 mb-4">
                    Verify that all critical business applications, software, and drivers work properly on Windows 11.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">Software Inventory</p>
                        <p className="text-xs text-slate-500">Catalog all installed applications</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">Compatibility Testing</p>
                        <p className="text-xs text-slate-500">Test apps in Windows 11 environment</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">Driver Updates</p>
                        <p className="text-xs text-slate-500">Locate and prepare compatible drivers</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">Issue Resolution</p>
                        <p className="text-xs text-slate-500">Address incompatibilities before migration</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg hover:border-brand-yellow/50 transition-all">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-brand-green rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-3xl font-bold text-white">3</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Data Backup & Protection</h3>
                  <p className="text-slate-600 mb-4">
                    Complete backup strategy to protect your data during migration and provide rollback capability if needed.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                      </svg>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">Full System Backup</p>
                        <p className="text-xs text-slate-500">Complete disk image before upgrade</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">Cloud Backup</p>
                        <p className="text-xs text-slate-500">Critical data replicated to secure cloud</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">File Migration Plan</p>
                        <p className="text-xs text-slate-500">Document transfer and organization strategy</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">Rollback Preparation</p>
                        <p className="text-xs text-slate-500">Recovery plan if issues arise</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg hover:border-brand-yellow/50 transition-all">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-brand-blue rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-3xl font-bold text-white">4</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Pilot Deployment & Testing</h3>
                  <p className="text-slate-600 mb-4">
                    Test the migration on a small group of devices to identify and resolve issues before full rollout.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">Pilot Group Selection</p>
                        <p className="text-xs text-slate-500">Choose representative users for testing</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">Feedback Collection</p>
                        <p className="text-xs text-slate-500">Gather user experience and issues</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">Issue Resolution</p>
                        <p className="text-xs text-slate-500">Fix problems before full deployment</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">Validation & Sign-off</p>
                        <p className="text-xs text-slate-500">Confirm readiness for full rollout</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 5 */}
            <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg hover:border-brand-yellow/50 transition-all">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-brand-green rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-3xl font-bold text-white">5</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Phased Rollout & Support</h3>
                  <p className="text-slate-600 mb-4">
                    Deploy Windows 11 in controlled phases with continuous monitoring and immediate support for any issues.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">Deployment Schedule</p>
                        <p className="text-xs text-slate-500">Staggered rollout to minimize disruption</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">Real-time Monitoring</p>
                        <p className="text-xs text-slate-500">Track progress and identify issues quickly</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">On-site Support</p>
                        <p className="text-xs text-slate-500">Technical assistance during migration</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">Post-Migration Validation</p>
                        <p className="text-xs text-slate-500">Verify all systems operational</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Typical Migration Timeline */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Typical Migration Timeline</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our structured approach ensures a smooth transition with clear milestones and minimal business disruption.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-yellow via-brand-blue to-brand-green transform -translate-x-1/2" />

            <div className="space-y-12">
              {/* Week 1-2 */}
              <div className="relative">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="lg:w-1/2 lg:text-right lg:pr-12">
                    <div className="inline-block px-4 py-2 bg-brand-yellow/10 rounded-full mb-3">
                      <span className="text-brand-yellow font-bold text-sm">Week 1-2</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Discovery & Assessment</h3>
                    <p className="text-slate-600">
                      Hardware inventory, compatibility checks, and application testing. Identify upgrade requirements and plan budget.
                    </p>
                  </div>
                  <div className="hidden lg:block absolute left-1/2 w-8 h-8 bg-brand-yellow border-4 border-white rounded-full transform -translate-x-1/2 shadow-lg" />
                  <div className="lg:w-1/2 lg:pl-12">
                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                      <p className="text-sm text-slate-700 font-medium mb-2">Key Deliverables:</p>
                      <ul className="space-y-1 text-sm text-slate-600">
                        <li>• Compatibility assessment report</li>
                        <li>• Hardware upgrade recommendations</li>
                        <li>• Application compatibility matrix</li>
                        <li>• Migration project plan</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Week 3 */}
              <div className="relative">
                <div className="flex flex-col lg:flex-row-reverse gap-8 items-center">
                  <div className="lg:w-1/2 lg:text-left lg:pl-12">
                    <div className="inline-block px-4 py-2 bg-brand-blue/10 rounded-full mb-3">
                      <span className="text-brand-blue font-bold text-sm">Week 3</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Preparation & Backup</h3>
                    <p className="text-slate-600">
                      Complete system backups, prepare installation media, configure Windows 11 images, and setup deployment infrastructure.
                    </p>
                  </div>
                  <div className="hidden lg:block absolute left-1/2 w-8 h-8 bg-brand-blue border-4 border-white rounded-full transform -translate-x-1/2 shadow-lg" />
                  <div className="lg:w-1/2 lg:pr-12">
                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                      <p className="text-sm text-slate-700 font-medium mb-2">Key Deliverables:</p>
                      <ul className="space-y-1 text-sm text-slate-600">
                        <li>• Full system backups completed</li>
                        <li>• Windows 11 installation media</li>
                        <li>• Custom deployment images</li>
                        <li>• Rollback procedures documented</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Week 4 */}
              <div className="relative">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="lg:w-1/2 lg:text-right lg:pr-12">
                    <div className="inline-block px-4 py-2 bg-brand-green/10 rounded-full mb-3">
                      <span className="text-brand-green font-bold text-sm">Week 4</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Pilot Deployment</h3>
                    <p className="text-slate-600">
                      Deploy Windows 11 to pilot group, monitor performance, collect feedback, and resolve any issues discovered.
                    </p>
                  </div>
                  <div className="hidden lg:block absolute left-1/2 w-8 h-8 bg-brand-green border-4 border-white rounded-full transform -translate-x-1/2 shadow-lg" />
                  <div className="lg:w-1/2 lg:pl-12">
                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                      <p className="text-sm text-slate-700 font-medium mb-2">Key Deliverables:</p>
                      <ul className="space-y-1 text-sm text-slate-600">
                        <li>• 5-10 devices migrated successfully</li>
                        <li>• User feedback collected</li>
                        <li>• Issues identified and resolved</li>
                        <li>• Go/no-go decision for full rollout</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Week 5-8 */}
              <div className="relative">
                <div className="flex flex-col lg:flex-row-reverse gap-8 items-center">
                  <div className="lg:w-1/2 lg:text-left lg:pl-12">
                    <div className="inline-block px-4 py-2 bg-brand-yellow/10 rounded-full mb-3">
                      <span className="text-brand-yellow font-bold text-sm">Week 5-8</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Full Rollout</h3>
                    <p className="text-slate-600">
                      Phase deployment across organization in waves. Provide on-site and remote support during migration period.
                    </p>
                  </div>
                  <div className="hidden lg:block absolute left-1/2 w-8 h-8 bg-brand-yellow border-4 border-white rounded-full transform -translate-x-1/2 shadow-lg" />
                  <div className="lg:w-1/2 lg:pr-12">
                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                      <p className="text-sm text-slate-700 font-medium mb-2">Key Deliverables:</p>
                      <ul className="space-y-1 text-sm text-slate-600">
                        <li>• Department-by-department rollout</li>
                        <li>• Daily progress reports</li>
                        <li>• Immediate issue resolution</li>
                        <li>• User training and documentation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Week 9+ */}
              <div className="relative">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="lg:w-1/2 lg:text-right lg:pr-12">
                    <div className="inline-block px-4 py-2 bg-brand-blue/10 rounded-full mb-3">
                      <span className="text-brand-blue font-bold text-sm">Week 9+</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Stabilization & Optimization</h3>
                    <p className="text-slate-600">
                      Post-migration support, performance optimization, final validation, and knowledge transfer to your IT team.
                    </p>
                  </div>
                  <div className="hidden lg:block absolute left-1/2 w-8 h-8 bg-brand-blue border-4 border-white rounded-full transform -translate-x-1/2 shadow-lg" />
                  <div className="lg:w-1/2 lg:pl-12">
                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                      <p className="text-sm text-slate-700 font-medium mb-2">Key Deliverables:</p>
                      <ul className="space-y-1 text-sm text-slate-600">
                        <li>• 100% migration completion</li>
                        <li>• System performance optimization</li>
                        <li>• Staff training completed</li>
                        <li>• Documentation and handoff</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Challenges Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Common Migration Challenges We Solve</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Don't let these obstacles delay your Windows 11 migration. We have proven solutions for every scenario.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Hardware Not Compatible</h3>
                  <p className="text-slate-600 text-sm mb-3">
                    Many older computers lack TPM 2.0 or don't meet CPU requirements.
                  </p>
                  <p className="text-brand-yellow font-semibold text-sm">Our Solution:</p>
                  <p className="text-slate-600 text-sm">
                    We provide hardware replacement recommendations, budget analysis, and can source compatible systems. For edge cases, we explore workarounds where appropriate.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Legacy Applications Won't Run</h3>
                  <p className="text-slate-600 text-sm mb-3">
                    Critical business software may not be compatible with Windows 11.
                  </p>
                  <p className="text-brand-yellow font-semibold text-sm">Our Solution:</p>
                  <p className="text-slate-600 text-sm">
                    We test all applications in advance, identify alternatives or updates, and can set up compatibility mode or virtualization for legacy apps that must remain.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Fear of Downtime</h3>
                  <p className="text-slate-600 text-sm mb-3">
                    Businesses can't afford extended outages during migration.
                  </p>
                  <p className="text-brand-yellow font-semibold text-sm">Our Solution:</p>
                  <p className="text-slate-600 text-sm">
                    We schedule migrations during off-hours, deploy in phases, and provide immediate rollback capability. Most users experience less than 2 hours of downtime.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">User Training & Adoption</h3>
                  <p className="text-slate-600 text-sm mb-3">
                    Staff resistance to change and unfamiliar interface can slow productivity.
                  </p>
                  <p className="text-brand-yellow font-semibold text-sm">Our Solution:</p>
                  <p className="text-slate-600 text-sm">
                    We provide pre-migration training, quick reference guides, and post-migration support. Users adapt quickly with proper guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What's Included in Our Migration Service</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive support from planning through completion and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Pre-Migration Assessment", items: ["Hardware compatibility audit", "Software inventory & testing", "Network infrastructure review", "Risk assessment & mitigation plan"] },
              { title: "Migration Execution", items: ["Data backup & protection", "Windows 11 deployment", "Application reinstallation", "Settings & profile migration"] },
              { title: "Post-Migration Support", items: ["30-day hypercare support", "Performance optimization", "User training sessions", "Documentation & handoff"] },
            ].map((phase, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border-2 border-slate-200 shadow-lg">
                <h3 className="text-lg font-bold text-slate-900 mb-4">{phase.title}</h3>
                <ul className="space-y-3">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <svg className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-brand-yellow/10 via-white to-brand-blue/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-10 md:p-12 border-2 border-slate-200 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Ready to Plan Your Windows 11 Migration?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Don't wait until Windows 10 support ends. Start your migration planning today with ArvinTech's proven methodology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#consultation"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-yellow text-white rounded-xl font-bold text-lg hover:bg-yellow-500 transition-colors shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule Assessment
              </Link>
              <Link 
                href="/support"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-yellow border-2 border-brand-yellow/20 rounded-xl font-bold text-lg hover:bg-brand-yellow/5 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Contact Support
              </Link>
            </div>
            <p className="text-sm text-slate-500 mt-6">
              Typical migration projects: 6-8 weeks for 20-50 devices
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
