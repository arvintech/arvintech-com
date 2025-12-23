"use client"

import { useMemo, useState } from "react"
import Link from "next/link"

function formatNumber(num: number): string {
  return Math.round(num).toLocaleString('en-US')
}

export default function ClearPlanPage() {
  const [lastYearRevenue, setLastYearRevenue] = useState<number>(120000)
  const [currentClients, setCurrentClients] = useState<number>(100)
  const [targetGrowth, setTargetGrowth] = useState<number>(10)

  const calculator = useMemo(() => {
    const monthlyRevenue = lastYearRevenue / 12
    const isLowRevenue = lastYearRevenue < 65000
    const pctLow = isLowRevenue ? 0.15 : 0.07
    const pctHigh = isLowRevenue ? 0.25 : 0.1

    const budgetLow = monthlyRevenue * pctLow
    const budgetHigh = monthlyRevenue * pctHigh
    const budgetMid = (budgetLow + budgetHigh) / 2

    const perChannel = {
      localSEO: budgetMid * 0.35,
      content: budgetMid * 0.25,
      email: budgetMid * 0.1,
      ads: budgetMid * 0.2,
      buffer: budgetMid * 0.1,
    }

    const targetClients = Math.round(currentClients * (1 + targetGrowth / 100))
    const deltaClients = Math.max(targetClients - currentClients, 0)
    const revenuePerClient = currentClients > 0 ? lastYearRevenue / currentClients : 0
    const additionalAnnualRevenue = revenuePerClient * deltaClients
    const additionalMonthlyRevenue = additionalAnnualRevenue / 12

    // First year breakdown
    const oneTimeSetup = 5500 // midpoint of $4k-$7k
    const months13Budget = budgetMid * 0.75 // Lower in foundation phase
    const months46Budget = budgetMid * 0.85
    const months712Budget = budgetMid
    const firstYearOngoing = months13Budget * 3 + months46Budget * 3 + months712Budget * 6
    const firstYearTotal = oneTimeSetup + firstYearOngoing

    // Project net income after year 1
    const projectedYear1Revenue = lastYearRevenue + additionalAnnualRevenue
    const projectedYear1NetIncome = projectedYear1Revenue - firstYearTotal
    
    // Year 2+ ongoing (no one-time costs)
    const year2MarketingSpend = budgetMid * 12
    const projectedYear2NetIncome = projectedYear1Revenue - year2MarketingSpend
    
    // Percentage increase from last year
    const year1IncreasePercent = lastYearRevenue > 0 
      ? ((projectedYear1NetIncome - lastYearRevenue) / lastYearRevenue) * 100 
      : 0
    const year2IncreasePercent = lastYearRevenue > 0 
      ? ((projectedYear2NetIncome - lastYearRevenue) / lastYearRevenue) * 100 
      : 0

    return {
      monthlyRevenue,
      budgetLow,
      budgetHigh,
      budgetMid,
      perChannel,
      targetClients,
      deltaClients,
      revenuePerClient,
      additionalAnnualRevenue,
      additionalMonthlyRevenue,
      isLowRevenue,
      pctLow,
      pctHigh,
      oneTimeSetup,
      months13Budget,
      months46Budget,
      months712Budget,
      firstYearOngoing,
      firstYearTotal,
      projectedYear1Revenue,
      projectedYear1NetIncome,
      year2MarketingSpend,
      projectedYear2NetIncome,
      year1IncreasePercent,
      year2IncreasePercent,
    }
  }, [currentClients, lastYearRevenue, targetGrowth])

  return (
    <div className="min-h-screen bg-white">
      <section className="px-6 py-20 md:py-28 bg-gradient-to-br from-brand-blue/10 via-white to-brand-green/10">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block px-4 py-2 mb-6 rounded-full bg-brand-green/10 text-brand-green text-sm font-semibold">
            Growth Strategy Calculator
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            A Clear Plan for Growth, Not Guesswork
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Your website is a growth tool—not a brochure. It&apos;s the customer-facing machine on their phone, at the
            office, and at home. They expect to find you quickly, understand what you do, and take the next step without
            friction. Every ad dollar should be traceable across geography, community, and industry segments so you
            know what wins and what to cut.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl border-2 border-slate-200 p-6 md:p-10 shadow-lg">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Calculate Your Marketing Budget</h2>
              <p className="text-sm md:text-base text-slate-600">
                Enter your actual numbers below to see a custom budget, channel breakdown, and projected ROI. All results update instantly.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-1">
                  Last Year's Net Income
                </label>
                <p className="text-xs text-slate-600 mb-2">Before taxes, depreciation & marketing spend</p>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-semibold">$</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={lastYearRevenue ? formatNumber(lastYearRevenue) : ''}
                    onChange={(e) => {
                      const raw = e.target.value.replace(/[^0-9]/g, '')
                      setLastYearRevenue(Number(raw) || 0)
                    }}
                    className="w-full rounded-lg border-2 border-slate-300 pl-8 pr-4 py-3 text-sm font-semibold focus:border-brand-green focus:outline-none transition-colors"
                    placeholder="120,000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-2">Current clients</label>
                <input
                  type="number"
                  min={0}
                  value={currentClients || ''}
                  onChange={(e) => setCurrentClients(Number(e.target.value) || 0)}
                  className="w-full rounded-lg border-2 border-slate-300 px-4 py-3 text-sm font-semibold focus:border-brand-green focus:outline-none transition-colors"
                  placeholder="100"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-2">Growth target</label>
                <select
                  value={targetGrowth}
                  onChange={(e) => setTargetGrowth(Number(e.target.value))}
                  className="w-full rounded-lg border-2 border-slate-300 px-4 py-3 text-sm font-semibold focus:border-brand-green focus:outline-none transition-colors bg-white"
                >
                  {[0, 10, 20, 30, 40, 50].map((n) => (
                    <option key={n} value={n}>
                      +{n}% growth
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 border-2 border-brand-green/20 mb-8 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-green/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900">Your Recommended Budget</h3>
                    <p className="text-xs text-slate-600">Based on {calculator.isLowRevenue ? "15–25%" : "7–10%"} of your net income</p>
                  </div>
                </div>
                <span className="hidden md:flex text-xs text-brand-green bg-brand-green/10 px-3 py-1 rounded-full font-semibold items-center gap-1">
                  <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse"></div>
                  Live
                </span>
              </div>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-brand-green/5 to-brand-green/10 rounded-xl p-4">
                  <p className="text-xs text-slate-600 mb-1 uppercase tracking-wide font-semibold">Monthly Range</p>
                  <p className="text-2xl font-bold text-brand-green mb-1">
                    ${formatNumber(calculator.budgetLow)}<span className="text-base">–${formatNumber(calculator.budgetHigh)}</span>
                  </p>
                  <p className="text-xs text-slate-600">
                    Start here, adjust as channels prove ROI
                  </p>
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-xs text-slate-600 mb-1 uppercase tracking-wide font-semibold">Recommended</p>
                  <p className="text-2xl font-bold text-slate-900 mb-1">${formatNumber(calculator.budgetMid)}</p>
                  <p className="text-xs text-slate-600">per month (midpoint)</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-xs text-slate-600 mb-1 uppercase tracking-wide font-semibold">Year 2+ Annual</p>
                  <p className="text-2xl font-bold text-slate-900 mb-1">${formatNumber(calculator.budgetMid * 12)}</p>
                  <p className="text-xs text-slate-600">ongoing (no setup)</p>
                </div>
                <div className="bg-gradient-to-br from-brand-blue/5 to-brand-blue/10 rounded-xl p-4">
                  <p className="text-xs text-slate-600 mb-1 uppercase tracking-wide font-semibold">Year 1 Total</p>
                  <p className="text-2xl font-bold text-brand-blue mb-1">${formatNumber(calculator.firstYearTotal)}</p>
                  <p className="text-xs text-slate-600">includes ${formatNumber(calculator.oneTimeSetup)} setup</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <h4 className="font-bold text-slate-900 text-base md:text-lg">Where Your Budget Goes</h4>
                </div>
                <p className="text-xs text-slate-600 mb-4">Monthly allocation at ${formatNumber(calculator.budgetMid)} midpoint</p>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-700">Local SEO / Google Business Profile</span>
                      <span className="font-semibold">${formatNumber(calculator.perChannel.localSEO)}</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-brand-green h-2 rounded-full" style={{ width: "35%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-700">Content (1–2 blog posts)</span>
                      <span className="font-semibold">${formatNumber(calculator.perChannel.content)}</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-brand-blue h-2 rounded-full" style={{ width: "25%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-700">Search ads (optional, test)</span>
                      <span className="font-semibold">${formatNumber(calculator.perChannel.ads)}</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-brand-yellow h-2 rounded-full" style={{ width: "20%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-700">Email + newsletter</span>
                      <span className="font-semibold">${formatNumber(calculator.perChannel.email)}</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: "10%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-700">Buffer / testing</span>
                      <span className="font-semibold">${formatNumber(calculator.perChannel.buffer)}</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-slate-400 h-2 rounded-full" style={{ width: "10%" }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-brand-green/10 to-brand-blue/10 rounded-xl p-6 border border-brand-green/30">
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <h4 className="font-bold text-slate-900 text-base md:text-lg">What You'll Achieve</h4>
                </div>
                <p className="text-xs text-slate-600 mb-4">Revenue & net income projections with {targetGrowth}% growth</p>
                <div className="space-y-3 text-sm md:text-base">
                  <div className="flex justify-between">
                    <span className="text-slate-700">Current clients</span>
                    <span className="font-semibold text-slate-900">{currentClients}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-700">Target clients (+{targetGrowth}%)</span>
                    <span className="font-semibold text-brand-green">{calculator.targetClients}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-700">New clients needed</span>
                    <span className="font-semibold text-brand-green">+{calculator.deltaClients}</span>
                  </div>
                  <div className="border-t border-slate-300 pt-3"></div>
                  <div className="flex justify-between">
                    <span className="text-slate-700">Avg revenue / client (yr)</span>
                    <span className="font-semibold">${formatNumber(calculator.revenuePerClient)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-700">Added annual revenue</span>
                    <span className="font-semibold text-brand-blue">${formatNumber(calculator.additionalAnnualRevenue)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-700">Added monthly revenue</span>
                    <span className="font-semibold text-brand-blue">${formatNumber(calculator.additionalMonthlyRevenue)}</span>
                  </div>
                  <div className="border-t border-slate-300 pt-3"></div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-slate-700 font-semibold">Projected Year 1 net income</span>
                    <div className="text-right">
                      <span className="font-bold text-brand-green">${formatNumber(calculator.projectedYear1NetIncome)}</span>
                      <span className={`ml-2 text-xs font-semibold ${calculator.year1IncreasePercent >= 0 ? 'text-brand-green' : 'text-red-600'}`}>
                        {calculator.year1IncreasePercent >= 0 ? '+' : ''}{calculator.year1IncreasePercent.toFixed(1)}%
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 italic mb-2">After ${formatNumber(calculator.firstYearTotal)} marketing spend (incl. one-time setup)</p>
                  <div className="flex justify-between items-baseline">
                    <span className="text-slate-700 text-xs font-semibold">Year 2+ net income</span>
                    <div className="text-right">
                      <span className="font-semibold text-slate-900 text-xs">${formatNumber(calculator.projectedYear2NetIncome)}</span>
                      <span className={`ml-2 text-xs font-semibold ${calculator.year2IncreasePercent >= 0 ? 'text-brand-green' : 'text-red-600'}`}>
                        {calculator.year2IncreasePercent >= 0 ? '+' : ''}{calculator.year2IncreasePercent.toFixed(1)}%
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 italic">After ${formatNumber(calculator.year2MarketingSpend)} ongoing marketing (no setup costs)</p>
                </div>
                <p className="text-xs text-slate-600 mt-4 italic">
                  Steady {targetGrowth}% growth compounds. At 10–15%/mo, you can 12–46× in 36 months; even 1%/mo doubles in ~6 years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Investment */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Key Investment Details</h2>
            <p className="text-slate-600">One-time setup costs and what to skip for now</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-bold text-slate-900">Website Investment</h3>
            </div>
            <p className="text-slate-600 mb-3">
              One-time build: <span className="font-semibold">$4k–$7k</span> (midpoint: ${formatNumber(calculator.oneTimeSetup)}) for a clean, credible site lasting 3–4 years before a major refresh.
            </p>
            <ul className="space-y-2 text-slate-700 text-sm mb-3">
              <li>• 5–10 pages, mobile-first, basic SEO structure</li>
              <li>• Clear services, CTAs, contact + lead capture</li>
              <li>• Built by a focused freelancer or small studio</li>
            </ul>
            <p className="text-sm text-slate-600">Ongoing: $500–$1k annually for hosting, security, and upkeep.</p>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
              </svg>
              <h3 className="text-xl font-bold text-slate-900">What to Skip (For Now)</h3>
            </div>
            <p className="text-sm text-slate-600 mb-4">Save money by avoiding these until you have proven ROI</p>
            <ul className="space-y-3 text-slate-700 text-sm md:text-base">
              <li>• High-cost social media retainers</li>
              <li>• Expensive video production before you have reach</li>
              <li>• Premium automation suites you won&apos;t fully use</li>
              <li>• Broad ads (billboards/radio/print) with weak targeting</li>
              <li>• $5k+ monthly agency retainers misaligned to current revenue</li>
            </ul>
          </div>
          </div>
        </div>
      </section>

      {/* Phased Roadmap */}
      <section className="px-6 py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">12-Month Phased Roadmap</h2>
            <p className="text-lg text-slate-600">Based on your ${formatNumber(calculator.budgetMid)}/mo midpoint budget</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-gradient-to-br from-brand-green/5 to-brand-green/10 border-2 border-brand-green/30 rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-brand-green rounded-lg flex items-center justify-center text-white font-bold">1</div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900">Months 1–3: Foundation</h3>
              </div>
              <ul className="space-y-3 text-sm md:text-base text-slate-700 mb-6">
                <li>• Website build or upgrade to Next.js version</li>
                <li>• Google Business Profile + local SEO setup</li>
                <li>• Core tracking + forms</li>
              </ul>
              <div className="bg-white rounded-lg p-3 border border-brand-green/20">
                <p className="text-xs text-slate-600 mb-1">Budget allocation</p>
                <p className="font-bold text-brand-green">
                  ${formatNumber(calculator.oneTimeSetup)} one-time + ${formatNumber(calculator.months13Budget)}/mo
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-brand-blue/5 to-brand-blue/10 border-2 border-brand-blue/30 rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center text-white font-bold">2</div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900">Months 4–6: Content & Relationship</h3>
              </div>
              <ul className="space-y-3 text-sm md:text-base text-slate-700 mb-6">
                <li>• 8–10 blog articles</li>
                <li>• Email platform + monthly newsletter</li>
                <li>• Systematic review generation</li>
              </ul>
              <div className="bg-white rounded-lg p-3 border border-brand-blue/20">
                <p className="text-xs text-slate-600 mb-1">Budget allocation</p>
                <p className="font-bold text-brand-blue">${formatNumber(calculator.months46Budget)}/mo</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-brand-yellow/5 to-brand-yellow/10 border-2 border-brand-yellow/30 rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-brand-yellow rounded-lg flex items-center justify-center text-white font-bold">3</div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900">Months 7–12: Refine & Expand</h3>
              </div>
              <ul className="space-y-3 text-sm md:text-base text-slate-700 mb-6">
                <li>• Small, focused paid ads (optional)</li>
                <li>• Expand content where it converts</li>
                <li>• Double down on winning channels</li>
              </ul>
              <div className="bg-white rounded-lg p-3 border border-brand-yellow/20">
                <p className="text-xs text-slate-600 mb-1">Budget allocation</p>
                <p className="font-bold text-yellow-700">${formatNumber(calculator.months712Budget)}/mo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI & Next Steps */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Track Results & Take Action</h2>
            <p className="text-slate-600">Measure what matters and get started with the right support</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-start">
          <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900">How to Measure Success</h3>
            </div>
            <p className="text-sm text-slate-600 mb-4">Track these metrics to prove (or kill) channels</p>
            <ul className="space-y-3 text-sm md:text-base text-slate-700 mb-6">
              <li>• Track leads by source and cost per lead</li>
              <li>• Monitor conversion to clients and lifetime value</li>
              <li>• Watch rankings for priority local/industry terms</li>
              <li>• Measure site conversions (forms, calls, bookings)</li>
            </ul>
            <div className="bg-brand-green/10 rounded-lg p-4 border border-brand-green/20">
              <p className="text-sm text-slate-700">
                <span className="font-bold text-brand-green">Break-even target:</span> If this plan helps you win just{" "}
                {Math.max(2, Math.ceil(calculator.firstYearTotal / calculator.revenuePerClient))} extra clients at{" "}
                ${formatNumber(calculator.revenuePerClient)} LTV, your first year pays for itself while building durable assets.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-brand-green/10 to-brand-blue/10 rounded-2xl border-2 border-brand-green/30 p-6 md:p-8 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-6 h-6 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900">Ready to Get Started?</h3>
            </div>
            <p className="text-sm md:text-base text-slate-600 mb-6">
              Your custom plan shows ${formatNumber(calculator.budgetMid)}/mo ongoing and ${formatNumber(calculator.firstYearTotal)} first year total. 
              We can help you build the site, execute the strategy, or just advise while you DIY.
            </p>
            <ul className="space-y-3 text-xs md:text-sm text-slate-700 mb-6">
              <li>• Specialized freelancers for professional services</li>
              <li>• Fractional marketing leads (5–10 hrs/month)</li>
              <li>• DIY strategy with selective outsourcing</li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/support"
                className="inline-flex items-center gap-2 px-5 py-3 bg-brand-green text-white rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                Talk to us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/work-with-us"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white text-brand-green border-2 border-brand-green/40 rounded-lg font-semibold hover:bg-brand-green/10 transition-colors"
              >
                See how we work
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  )
}
