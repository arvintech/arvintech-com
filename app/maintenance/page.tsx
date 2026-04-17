"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function MaintenancePage() {
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
              <Link href="/about" className="text-foreground/70 hover:text-brand-green transition-colors font-medium">
                About
              </Link>
              <Link href="/clients" className="text-foreground/70 hover:text-brand-green transition-colors font-medium">
                Clients
              </Link>
              <Link href="/support" className="text-foreground/70 hover:text-brand-green transition-colors font-medium">
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
      <section className="pt-28 pb-16 px-6 bg-gradient-to-br from-brand-green/10 via-white to-slate-50 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-20 h-20 bg-brand-green/15 rounded-xl -rotate-12" />
        <div className="absolute bottom-16 left-16 w-14 h-14 bg-brand-blue/10 rounded-lg rotate-6" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div
            className={`transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-green/15 rounded-full mb-6">
              <svg className="w-5 h-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-brand-green font-semibold text-sm uppercase tracking-wider">Best Practices</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
              Regular PC{" "}
              <span className="text-brand-green">Maintenance</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-4">
              Keep your computer running smoothly, securely, and efficiently with proactive maintenance and optimization.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-lg mt-6">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <p className="text-sm text-green-800 font-medium">
                Prevent issues before they become costly problems
              </p>
            </div>

            {/* Windows 10 EOL Banner */}
            <div className="mt-10 mx-auto max-w-3xl rounded-2xl overflow-hidden shadow-xl border-2 border-amber-300">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 flex items-center justify-center gap-3">
                <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span className="text-white font-bold text-sm uppercase tracking-wider">End of Life Notice</span>
              </div>
              <div className="bg-amber-50 px-8 py-6">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="flex-1 text-left">
                    <h3 className="text-xl font-extrabold text-amber-900 mb-1">
                      Windows 10 support ends <span className="text-orange-600">October 14, 2025</span>
                    </h3>
                    <p className="text-sm text-amber-800 leading-relaxed">
                      After this date, Microsoft will no longer provide security updates or patches for Windows 10. Unpatched systems become prime targets for ransomware, malware, and data breaches. <strong>Upgrading to Windows 11 is now a maintenance priority.</strong>
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <Link
                      href="/migration-strategy"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition-colors shadow-md whitespace-nowrap"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                      Upgrade to Windows 11
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link href="#schedule" className="inline-flex justify-center items-center px-8 py-4 rounded-xl font-semibold bg-brand-green text-white hover:bg-green-600 transition-colors text-lg">
                View Maintenance Schedule
              </Link>
              <Link
                href="/support"
                className="inline-flex justify-center items-center px-8 py-4 rounded-xl font-semibold border-2 border-slate-200 text-slate-800 hover:border-brand-green hover:text-brand-green transition-colors"
              >
                Get Professional Help
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Maintenance Matters */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Regular Maintenance Matters</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Just like your car, your computer needs regular care to perform at its best and avoid unexpected failures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border-2 border-slate-200 shadow-lg">
              <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Better Performance</h3>
              <p className="text-sm text-slate-600">
                Regular cleanup and optimization keep your PC running fast and responsive.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border-2 border-slate-200 shadow-lg">
              <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Enhanced Security</h3>
              <p className="text-sm text-slate-600">
                Stay protected with regular updates and security scans against evolving threats.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border-2 border-slate-200 shadow-lg">
              <div className="w-12 h-12 bg-brand-yellow/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Cost Savings</h3>
              <p className="text-sm text-slate-600">
                Prevent expensive repairs and extend the life of your hardware investment.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border-2 border-slate-200 shadow-lg">
              <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Data Protection</h3>
              <p className="text-sm text-slate-600">
                Regular backups ensure your important files are safe from loss or corruption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices by Category */}
      <section id="schedule" className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Best Practices by Category</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              A comprehensive guide organized by system area to keep every part of your PC healthy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Software & Updates */}
            <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg hover:border-brand-blue/40 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-brand-blue rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Software & Updates</h3>
                  <p className="text-slate-500 text-sm">Keep everything current and lean</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  { title: "Keep Windows/OS updated", desc: "Install security patches promptly" },
                  { title: "Update drivers", desc: "Especially GPU, chipset, and network drivers" },
                  { title: "Keep applications updated", desc: "Browsers, antivirus, and productivity tools" },
                  { title: "Uninstall unused software", desc: "Reduces attack surface and clutter" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">{item.title}</p>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Storage & File Management */}
            <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg hover:border-brand-yellow/40 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-brand-yellow rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Storage & File Management</h3>
                  <p className="text-slate-500 text-sm">Keep your disk healthy and organized</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  { title: "Run Disk Cleanup (cleanmgr) regularly", desc: "Purge temp files and old Windows update caches" },
                  { title: "Check disk health with CrystalDiskInfo", desc: "Watch for reallocated sectors or high wear counts" },
                  { title: "Keep 15–20% of your drive free", desc: "Especially on SSDs — preserves performance and lifespan" },
                  { title: "Organize and delete unnecessary files", desc: "Downloads folder, duplicates, old backups" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">{item.title}</p>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Security */}
            <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg hover:border-brand-red/40 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-brand-red rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Security</h3>
                  <p className="text-slate-500 text-sm">Stay protected against evolving threats</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  { title: "Run antivirus/antimalware scans weekly", desc: "Windows Defender is solid; Malwarebytes is a good supplement" },
                  { title: "Review startup programs", desc: "Use Task Manager → Startup to disable anything unnecessary" },
                  { title: "Audit browser extensions", desc: "Remove anything unused or unfamiliar" },
                  { title: "Use strong, unique passwords and enable 2FA", desc: "On all important accounts" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">{item.title}</p>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Backups */}
            <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg hover:border-brand-green/40 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-brand-green rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Backups</h3>
                  <p className="text-slate-500 text-sm">Protect your data — always</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  { title: "Follow the 3-2-1 rule", desc: "3 copies, 2 different media types, 1 offsite (e.g., cloud)" },
                  { title: "Test your backups", desc: "A backup you've never restored from is unverified" },
                  { title: "Use File History or Macrium Reflect", desc: "For full system image backups" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">{item.title}</p>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hardware & Physical */}
            <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg hover:border-brand-yellow/40 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-brand-yellow rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Hardware & Physical</h3>
                  <p className="text-slate-500 text-sm">Care for the machine itself</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  { title: "Clean dust every 6–12 months", desc: "Use compressed air on fans, vents, and heatsinks — dust causes overheating and shortens component life" },
                  { title: "Check temperatures with HWMonitor or HWiNFO", desc: "CPU should idle below ~50°C, GPU below ~60°C" },
                  { title: "Reseat RAM and GPU every few years", desc: "If you experience random crashes or display artifacts" },
                  { title: "Check cable connections inside the case", desc: "Especially if you move your PC often" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">{item.title}</p>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Performance */}
            <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg hover:border-brand-blue/40 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-brand-blue rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Performance</h3>
                  <p className="text-slate-500 text-sm">Keep speed and responsiveness high</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  { title: "Defrag HDDs periodically", desc: "Windows does this automatically — never defrag an SSD" },
                  { title: "Monitor RAM usage", desc: "If you're regularly at 90%+, consider an upgrade" },
                  { title: "Check for resource hogs in Task Manager", desc: "Background processes that eat CPU/memory unnecessarily" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">{item.title}</p>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Essential Tools */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Essential Maintenance Tools</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Built-in Windows utilities and trusted third-party tools to keep your system healthy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border-2 border-slate-200 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Disk Cleanup</h3>
                  <p className="text-xs text-slate-500">Built-in Windows tool</p>
                </div>
              </div>
              <p className="text-sm text-slate-600">
                Remove temporary files, system cache, and Windows update leftovers to free up disk space.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border-2 border-slate-200 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Windows Defender</h3>
                  <p className="text-xs text-slate-500">Built-in antivirus</p>
                </div>
              </div>
              <p className="text-sm text-slate-600">
                Run quick or full scans to detect and remove malware, viruses, and security threats.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border-2 border-slate-200 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Task Manager</h3>
                  <p className="text-xs text-slate-500">Performance monitor</p>
                </div>
              </div>
              <p className="text-sm text-slate-600">
                Monitor resource usage, manage startup programs, and end unresponsive applications.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border-2 border-slate-200 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-brand-green/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Windows Backup</h3>
                  <p className="text-xs text-slate-500">File History</p>
                </div>
              </div>
              <p className="text-sm text-slate-600">
                Configure automatic backups to external drive or network location for data protection.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border-2 border-slate-200 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-brand-yellow/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">CCleaner</h3>
                  <p className="text-xs text-slate-500">Third-party cleanup</p>
                </div>
              </div>
              <p className="text-sm text-slate-600">
                Advanced cleaning for registry, browser data, and system junk (use with caution).
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border-2 border-slate-200 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-brand-yellow/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">CrystalDiskInfo</h3>
                  <p className="text-xs text-slate-500">Drive health monitor</p>
                </div>
              </div>
              <p className="text-sm text-slate-600">
                Check hard drive and SSD health status, temperature, and SMART attributes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIY vs Professional */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">DIY vs Professional Maintenance</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Know when to handle maintenance yourself and when to call in the experts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg">
              <div className="w-14 h-14 bg-brand-green/10 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">You Can Handle</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Running Windows Update and installing patches</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Disk Cleanup and removing temporary files</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Managing startup programs in Task Manager</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Running antivirus scans with Windows Defender</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Uninstalling unused programs</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Backing up files to cloud or external drive</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Clearing browser cache and cookies</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg">
              <div className="w-14 h-14 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Call <span className="arvintech-brand">arvintech</span> For</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Persistent performance issues or slowdowns</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Suspected malware or virus infections</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Hardware upgrades (RAM, SSD, etc.)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Network or connectivity problems</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Windows installation or major OS issues</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Data recovery from failed drives</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Complex registry or system configuration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-brand-green/10 via-white to-brand-blue/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-10 md:p-12 border-2 border-slate-200 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Need Professional Maintenance?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Let <span className="arvintech-brand">arvintech</span> handle your PC maintenance so you can focus on your work. We offer one-time tune-ups and ongoing maintenance plans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#consultation"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-green text-white rounded-xl font-bold text-lg hover:bg-green-600 transition-colors shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule Maintenance
              </Link>
              <Link 
                href="/support"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-green border-2 border-brand-green/20 rounded-xl font-bold text-lg hover:bg-brand-green/5 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                View Support Options
              </Link>
            </div>
            <p className="text-sm text-slate-500 mt-6">
              Monthly maintenance plans starting at $75/month
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
