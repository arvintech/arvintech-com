"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function BusinessClarityPage() {
  const [activePhase, setActivePhase] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/arvintech-blocks-logo.png"
                alt="ArvinTech"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-xl font-bold arvintech-brand">arvintech</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/about" className="text-slate-600 hover:text-brand-green transition-colors">About</Link>
              <Link href="/clients" className="text-slate-600 hover:text-brand-green transition-colors">Clients</Link>
              <Link href="/support" className="text-slate-600 hover:text-brand-green transition-colors">Support</Link>
              <Link href="/work-with-us" className="px-5 py-2 bg-brand-green text-white rounded-lg hover:bg-green-600 transition-colors font-medium">
                Work With Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* ============================================
          SECTION 1: THE RESULT (Hero)
          ============================================ */}
      <section className="pt-28 pb-16 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            {/* Label */}
            <span className="inline-block px-4 py-2 bg-brand-yellow/20 text-brand-yellow rounded-full text-sm font-bold mb-8">
              YEAR ONE RESULTS
            </span>
            
            {/* The Big Number */}
            <div className="mb-8">
              <div className="text-8xl md:text-[10rem] font-black text-brand-yellow leading-none">4×</div>
              <p className="text-2xl md:text-3xl text-slate-300 mt-6">
                <span className="text-brand-green font-bold">2× clients</span>
                <span className="text-slate-500 mx-3">×</span>
                <span className="text-brand-blue font-bold">2× fees</span>
                <span className="text-slate-500 mx-3">=</span>
                <span className="text-brand-yellow font-bold">4× revenue</span>
              </p>
            </div>
            
            {/* Subtitle */}
            <p className="text-xl text-slate-400 mb-10">
              One tax preparer. One year. No new hires.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-10">
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="text-3xl md:text-4xl font-black text-brand-green">775%</div>
                <p className="text-slate-500 text-sm mt-1">Profit increase</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="text-3xl md:text-4xl font-black text-brand-blue">0</div>
                <p className="text-slate-500 text-sm mt-1">New hires</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="text-3xl md:text-4xl font-black text-brand-red">~0</div>
                <p className="text-slate-500 text-sm mt-1">Receivables</p>
              </div>
            </div>

            {/* CTA */}
            <Link 
              href="/support" 
              className="inline-block px-8 py-4 bg-brand-yellow text-slate-900 rounded-xl font-bold hover:bg-yellow-400 transition-all hover:scale-105 text-lg"
            >
              I Want These Results
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 1.5: WHO THIS IS FOR
          ============================================ */}
      <section className="py-12 px-6 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-500 text-sm uppercase tracking-wide mb-4">Business Clarity works with</p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Professional Services Firms Like Yours</h2>
          
          {/* Industry Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              "Dentists",
              "Lawyers",
              "Architects",
              "Engineers",
              "Accountants",
              "Financial Advisors",
              "Caterers",
              "Consultants",
              "Real Estate",
              "Insurance",
              "Veterinarians",
              "IT Services",
              "Marketing Agencies",
              "And More..."
            ].map((industry, i) => (
              <span 
                key={i} 
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  i === 4 
                    ? 'bg-brand-green text-white' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {industry}
              </span>
            ))}
          </div>
          
          {/* Transition to Example */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-px bg-slate-200 w-16" />
            <p className="text-slate-500 text-sm">
              Here's what <span className="text-brand-green font-semibold">4× growth</span> looks like for a tax preparer
            </p>
            <div className="h-px bg-slate-200 w-16" />
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 2: THE PROOF (Before/After)
          ============================================ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-brand-green font-semibold text-sm uppercase tracking-wide">The Proof</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">See the Numbers</h2>
            <p className="text-slate-600 mt-2">Same firm. Same team. Different systems.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Before */}
            <div className="bg-slate-50 rounded-2xl p-8 border-2 border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">📊</span>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Before</h3>
                  <p className="text-slate-500 text-sm">Year 0</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {[
                  { label: "Clients", value: "150" },
                  { label: "Average Fee", value: "$500" },
                  { label: "Revenue", value: "$75,000" },
                  { label: "Costs", value: "$45,000" },
                  { label: "Services", value: "Tax prep only", isText: true },
                  { label: "Receivables", value: "30-60 days", isRed: true },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-slate-200">
                    <span className="text-slate-600">{row.label}</span>
                    <span className={`font-bold ${row.isRed ? 'text-brand-red' : row.isText ? 'text-slate-700' : 'text-slate-900 text-lg'}`}>
                      {row.value}
                    </span>
                  </div>
                ))}
                <div className="flex justify-between items-center py-3 bg-slate-100 rounded-lg px-4 mt-4">
                  <span className="font-semibold">Net Profit</span>
                  <span className="text-2xl font-black text-slate-900">$30,000</span>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="bg-slate-900 rounded-2xl p-8 text-white relative">
              <div className="absolute top-4 right-4 bg-brand-green text-white text-xs font-bold px-3 py-1 rounded-full">
                YEAR 1
              </div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">🚀</span>
                <div>
                  <h3 className="text-xl font-bold">After</h3>
                  <p className="text-slate-400 text-sm">Year 1</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {[
                  { label: "Clients", value: "300", change: "+100%", color: "green" },
                  { label: "Average Fee", value: "$1,000", change: "+100%", color: "blue" },
                  { label: "Revenue", value: "$300,000", change: "+300%", color: "yellow" },
                  { label: "Costs", value: "$67,500", change: "+50%", color: "gray" },
                  { label: "Services", value: "Tax + KPI + Report", color: "green", isText: true },
                  { label: "Receivables", value: "Near zero ✓", color: "green", isText: true },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-slate-700">
                    <span className="text-slate-400">{row.label}</span>
                    <div className="flex items-center gap-2">
                      <span className={`font-bold ${
                        row.color === 'green' ? 'text-brand-green' :
                        row.color === 'blue' ? 'text-brand-blue' :
                        row.color === 'yellow' ? 'text-brand-yellow' :
                        'text-white'
                      } ${row.isText ? '' : 'text-lg'}`}>
                        {row.value}
                      </span>
                      {row.change && (
                        <span className={`text-xs px-2 py-0.5 rounded ${
                          row.color === 'green' ? 'text-brand-green bg-brand-green/20' :
                          row.color === 'blue' ? 'text-brand-blue bg-brand-blue/20' :
                          row.color === 'yellow' ? 'text-brand-yellow bg-brand-yellow/20' :
                          'text-slate-400 bg-slate-700'
                        }`}>
                          {row.change}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
                <div className="flex justify-between items-center py-3 bg-brand-green/20 rounded-lg px-4 mt-4">
                  <span className="font-semibold">Net Profit</span>
                  <span className="text-2xl font-black text-brand-green">$232,500</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 3: THE HOW (What We Built)
          ============================================ */}
      <section className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-brand-yellow font-semibold text-sm uppercase tracking-wide">The How</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">What We Built Together</h2>
            <p className="text-slate-400 mt-2">Four building blocks. Every improvement compounds.</p>
          </div>
          
          {/* Four Pillars */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* 1. Modern Website */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-brand-green/50 transition-colors group">
              <div className="w-12 h-12 bg-brand-green/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="font-bold text-brand-green mb-3">A Modern Website</h3>
              <ul className="text-sm text-slate-400 space-y-2">
                <li>• Secure document upload</li>
                <li>• Real-time status tracking</li>
                <li>• Two-way messaging</li>
                <li>• Mobile access anywhere</li>
              </ul>
            </div>

            {/* 2. Better Operations */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-brand-blue/50 transition-colors group">
              <div className="w-12 h-12 bg-brand-blue/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-brand-blue mb-3">Better Operations</h3>
              <ul className="text-sm text-slate-400 space-y-2">
                <li>• QuickBooks integration</li>
                <li>• AI data validation</li>
                <li>• Auto-extract documents</li>
                <li>• Error catching built-in</li>
              </ul>
            </div>

            {/* 3. Better Communication */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-brand-yellow/50 transition-colors group">
              <div className="w-12 h-12 bg-brand-yellow/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-bold text-brand-yellow mb-2">Better Communication</h3>
              <p className="text-xs text-slate-500 mb-3 italic">Understand your client's business better.</p>
              <ul className="text-sm text-slate-400 space-y-2">
                <li>• Reports they expect</li>
                <li>• Updates they anticipate</li>
                <li>• Projections on schedule</li>
                <li>• Year-round value</li>
              </ul>
            </div>

            {/* 4. More Products */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-brand-red/50 transition-colors group">
              <div className="w-12 h-12 bg-brand-red/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="font-bold text-brand-red mb-3">More Products</h3>
              <ul className="text-sm text-slate-400 space-y-2">
                <li>• Value-add service reports</li>
                <li>• Tax tips & planning alerts</li>
                <li>• Financial health scorecards</li>
                <li>• Advisory packages</li>
              </ul>
            </div>
          </div>

          {/* Plus More Tools */}
          <div className="text-center mb-6">
            <p className="text-slate-500 text-sm uppercase tracking-wide">Plus these tools</p>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
            {/* Scheduling */}
            <div className="bg-white/5 rounded-lg p-3 text-center border border-white/10 hover:bg-white/10 hover:border-brand-green/30 transition-colors group">
              <div className="w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                <svg className="w-5 h-5 text-slate-400 group-hover:text-brand-green transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-xs text-slate-500">Scheduling</p>
            </div>
            
            {/* Doc Vault */}
            <div className="bg-white/5 rounded-lg p-3 text-center border border-white/10 hover:bg-white/10 hover:border-brand-blue/30 transition-colors group">
              <div className="w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                <svg className="w-5 h-5 text-slate-400 group-hover:text-brand-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <p className="text-xs text-slate-500">Doc Vault</p>
            </div>
            
            {/* Mobile App */}
            <div className="bg-white/5 rounded-lg p-3 text-center border border-white/10 hover:bg-white/10 hover:border-brand-green/30 transition-colors group">
              <div className="w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                <svg className="w-5 h-5 text-slate-400 group-hover:text-brand-green transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-xs text-slate-500">Mobile App</p>
            </div>
            
            {/* Client Tiers */}
            <div className="bg-white/5 rounded-lg p-3 text-center border border-white/10 hover:bg-white/10 hover:border-brand-yellow/30 transition-colors group">
              <div className="w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                <svg className="w-5 h-5 text-slate-400 group-hover:text-brand-yellow transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-xs text-slate-500">Client Tiers</p>
            </div>
            
            {/* Analytics */}
            <div className="bg-white/5 rounded-lg p-3 text-center border border-white/10 hover:bg-white/10 hover:border-brand-blue/30 transition-colors group">
              <div className="w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                <svg className="w-5 h-5 text-slate-400 group-hover:text-brand-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <p className="text-xs text-slate-500">Analytics</p>
            </div>
            
            {/* Referrals */}
            <div className="bg-white/5 rounded-lg p-3 text-center border border-white/10 hover:bg-white/10 hover:border-brand-green/30 transition-colors group">
              <div className="w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                <svg className="w-5 h-5 text-slate-400 group-hover:text-brand-green transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <p className="text-xs text-slate-500">Referrals</p>
            </div>
            
            {/* FAQ Portal */}
            <div className="bg-white/5 rounded-lg p-3 text-center border border-white/10 hover:bg-white/10 hover:border-brand-yellow/30 transition-colors group">
              <div className="w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                <svg className="w-5 h-5 text-slate-400 group-hover:text-brand-yellow transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-xs text-slate-500">FAQ Portal</p>
            </div>
            
            {/* Surveys */}
            <div className="bg-white/5 rounded-lg p-3 text-center border border-white/10 hover:bg-white/10 hover:border-brand-red/30 transition-colors group">
              <div className="w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                <svg className="w-5 h-5 text-slate-400 group-hover:text-brand-red transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <p className="text-xs text-slate-500">Surveys</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 4: THE PROCESS (Three Phases)
          ============================================ */}
      <section id="the-playbook" className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-brand-blue font-semibold text-sm uppercase tracking-wide">The Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">How We Get There</h2>
            <p className="text-slate-600 mt-2">Three phases. Twelve weeks to transformation.</p>
          </div>

          {/* Phase 1: See Clearly */}
          <div className="mb-4">
            <div 
              className={`bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer transition-all hover:shadow-md ${activePhase === 1 ? 'ring-2 ring-brand-blue shadow-md' : ''}`}
              onClick={() => setActivePhase(activePhase === 1 ? null : 1)}
            >
              <div className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-xl font-bold text-brand-blue">01</div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">See Clearly</h3>
                    <p className="text-slate-500 text-sm">Weeks 1-4 • Assessment</p>
                  </div>
                </div>
                <svg className={`w-5 h-5 text-slate-400 transition-transform ${activePhase === 1 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {activePhase === 1 && (
                <div className="px-6 pb-6 border-t border-slate-100 pt-4">
                  <p className="text-slate-600 mb-4">We map your operation—every process, every bottleneck, every opportunity.</p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-slate-50 rounded-lg p-4">
                      <p className="font-semibold text-slate-900 mb-2">We discover:</p>
                      <ul className="text-slate-600 space-y-1">
                        <li>• Where your time actually goes</li>
                        <li>• Which clients make you money</li>
                        <li>• Where AI can multiply output</li>
                      </ul>
                    </div>
                    <div className="bg-brand-blue/5 rounded-lg p-4">
                      <p className="font-semibold text-slate-900 mb-2">You get:</p>
                      <p className="text-slate-600">Your <strong>Clarity Report</strong>—a prioritized action plan.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Phase 2: Build the Foundation */}
          <div className="mb-4">
            <div 
              className={`bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer transition-all hover:shadow-md ${activePhase === 2 ? 'ring-2 ring-brand-green shadow-md' : ''}`}
              onClick={() => setActivePhase(activePhase === 2 ? null : 2)}
            >
              <div className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center text-xl font-bold text-brand-green">02</div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Build the Foundation</h3>
                    <p className="text-slate-500 text-sm">Weeks 5-12 • Implementation</p>
                  </div>
                </div>
                <svg className={`w-5 h-5 text-slate-400 transition-transform ${activePhase === 2 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {activePhase === 2 && (
                <div className="px-6 pb-6 border-t border-slate-100 pt-4">
                  <p className="text-slate-600 mb-4">We build your growth infrastructure—systems that scale without breaking.</p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-slate-50 rounded-lg p-4">
                      <p className="font-semibold text-slate-900 mb-2">Client Intake</p>
                      <p className="text-slate-600">Documents collected in days, not weeks.</p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                      <p className="font-semibold text-slate-900 mb-2">Processing</p>
                      <p className="text-slate-600">AI pre-processes. You review, not input.</p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                      <p className="font-semibold text-slate-900 mb-2">Workflow</p>
                      <p className="text-slate-600">Manage by exception, not by email.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Phase 3: Amplify Your Value */}
          <div className="mb-4">
            <div 
              className={`bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer transition-all hover:shadow-md ${activePhase === 3 ? 'ring-2 ring-brand-yellow shadow-md' : ''}`}
              onClick={() => setActivePhase(activePhase === 3 ? null : 3)}
            >
              <div className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-yellow/10 rounded-xl flex items-center justify-center text-xl font-bold text-brand-yellow">03</div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Amplify Your Value</h3>
                    <p className="text-slate-500 text-sm">Ongoing • Growth</p>
                  </div>
                </div>
                <svg className={`w-5 h-5 text-slate-400 transition-transform ${activePhase === 3 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {activePhase === 3 && (
                <div className="px-6 pb-6 border-t border-slate-100 pt-4">
                  <p className="text-slate-600 mb-4">This is where you leave competitors behind.</p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-slate-50 rounded-lg p-4">
                      <p className="font-semibold text-slate-900 mb-2">Year-Round Intelligence</p>
                      <p className="text-slate-600">Life event triggers, planning alerts. Become their trusted advisor.</p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                      <p className="font-semibold text-slate-900 mb-2">Advisory Launch</p>
                      <p className="text-slate-600">Pre-built packages, value pricing. Revenue per client doubles.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 5: THE CTA (Final Push)
          ============================================ */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-3xl mx-auto text-center text-white">
          <span className="text-brand-yellow font-semibold text-sm uppercase tracking-wide">Ready?</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-4">
            Get your <span className="text-brand-yellow">4× growth</span>.
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            The future demands 100x growth. Let's build it together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/support" 
              className="px-8 py-4 bg-brand-yellow text-slate-900 rounded-xl font-bold hover:bg-yellow-400 transition-all hover:scale-105 text-lg"
            >
              Book Discovery Call
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-white/10 text-white rounded-xl font-bold hover:bg-white/20 transition-colors border border-white/30"
            >
              Download AI Readiness Checklist
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/arvintech-blocks-logo.png"
                alt="ArvinTech"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-lg font-bold arvintech-brand">arvintech</span>
            </Link>
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} arvintech.com. All rights reserved.
            </p>
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
