"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function AIWindowPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/arvintech-blocks-logo.png" alt="ArvinTech" width={48} height={48} className="w-12 h-12" priority />
              <span className="text-2xl font-bold arvintech-brand">arvintech</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/about" className="text-foreground/70 hover:text-brand-blue transition-colors font-medium">About</Link>
              <Link href="/ai-readiness" className="text-foreground/70 hover:text-brand-blue transition-colors font-medium">AI Readiness</Link>
              <Link href="/support" className="text-foreground/70 hover:text-brand-blue transition-colors font-medium">Support</Link>
              <Link href="/work-with-us" className="btn-green text-sm">Work With Us</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Cover / Hero */}
      <section className="pt-28 pb-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-red rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-yellow rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className={`transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex flex-wrap items-center gap-3 mb-8 text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-slate-700 pb-6">
              <span className="text-brand-blue">ArvinTech Insights</span>
              <span>·</span>
              <span>Strategic Briefing</span>
              <span>·</span>
              <span>The 18-Month Window</span>
              <span>·</span>
              <span className="text-brand-green">22 min read</span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-red/20 border border-brand-red/40 rounded-full mb-6">
              <div className="w-2 h-2 bg-brand-red rounded-full animate-pulse" />
              <span className="text-brand-red font-bold text-xs uppercase tracking-widest">Time-Sensitive Analysis</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              The 18-Month Window
            </h1>
            <p className="text-2xl md:text-3xl text-slate-300 font-light mb-8 leading-snug">
              Why the next 18 months will separate SMBs that build operational leverage from those that spend the decade catching up — and why current macro conditions make waiting more expensive than acting.
            </p>

            <div className="grid md:grid-cols-4 gap-4 mt-10 pt-8 border-t border-slate-700">
              {[
                { stat: "18 mo", label: "strategic window to act" },
                { stat: "Q4 2027", label: "competitive convergence point" },
                { stat: "$0.30", label: "per dollar of cost pressure on SMBs" },
                { stat: "4.8×", label: "delay cost vs. acting now" },
              ].map((s, i) => (
                <div key={i}>
                  <p className="text-3xl font-black text-brand-yellow mb-1">{s.stat}</p>
                  <p className="text-slate-400 text-xs leading-tight uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>

            <p className="text-slate-500 text-xs mt-6 italic">Sources: <span className="arvintech-brand font-semibold">arvintech</span> client data 2024–2026, US Small Business Administration, NFIB Small Business Economic Trends, Federal Reserve Bank small business credit surveys, McKinsey Global Institute, Bureau of Labor Statistics. See Methodology, p. 12.</p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-10 bg-brand-blue rounded-full" />
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Contents</span>
          </div>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
            {[
              "What We Mean by 18 Months",
              "The Macro Backdrop: SMBs Under Pressure",
              "The Policy &amp; Economic Stressors",
              "The Technology Curve: What&apos;s Moving Now",
              "Why This Window Is Different",
              "The Mathematics of Delay",
              "The Compounding Disadvantage",
              "What &quot;Acting&quot; Actually Looks Like",
              "Quarter-by-Quarter Decision Timeline",
              "Conclusion: The Asymmetric Bet",
            ].map((item, i) => (
              <a key={i} href={`#section-${i + 1}`} className="flex items-baseline gap-3 py-2 border-b border-slate-200 hover:border-brand-blue transition-colors group">
                <span className="text-slate-400 text-xs font-mono w-6">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-slate-700 group-hover:text-brand-blue transition-colors font-medium" dangerouslySetInnerHTML={{ __html: item }} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 1. What We Mean */}
      <section id="section-1" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-brand-blue font-mono text-sm font-bold">01</span>
            <div className="h-0.5 w-10 bg-brand-blue" />
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Definition</span>
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-8 leading-tight">
            What We Mean by "18 Months"
          </h2>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-10 text-white mb-10">
            <p className="text-sm text-brand-yellow font-bold uppercase tracking-widest mb-3">The Thesis</p>
            <p className="text-2xl font-semibold leading-snug mb-4">
              Between Q1 2026 and Q3 2027, the cost of operating without AI capability converges with the cost of operating with it. After that point, the cost of catching up exceeds the cost of leading.
            </p>
            <p className="text-slate-300 leading-relaxed">
              This is not a prediction about the technology. AI will keep improving on its own schedule. This is a statement about competitive dynamics, macro pressure on SMBs, and the specific moment we are in — a moment when a small and midsize business can still build meaningful advantage with a modest investment, before that advantage becomes table stakes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { label: "Now → Q4 2026", title: "Opportunity Phase", body: "Meaningful advantage available. Deployment costs low. Competitive differentiation visible. First-mover benefits compound.", color: "brand-green" },
              { label: "Q1 → Q3 2027", title: "Convergence Phase", body: "AI becomes common among sophisticated competitors. Differentiation narrows. Deployment costs stable. The cost of absence becomes material.", color: "brand-yellow" },
              { label: "Q4 2027 →", title: "Catch-Up Phase", body: "AI becomes table stakes. Cost of absence exceeds cost of deployment. Businesses without capability negotiate from weakness: with customers, talent, and capital.", color: "brand-red" },
            ].map((phase, i) => (
              <div key={i} className={`border-l-4 border-${phase.color} bg-slate-50 p-6 rounded-r-xl`}>
                <p className={`text-${phase.color} text-xs font-bold uppercase tracking-widest mb-1`}>{phase.label}</p>
                <p className={`text-${phase.color} font-bold mb-3`}>{phase.title}</p>
                <p className="text-slate-700 text-sm leading-relaxed">{phase.body}</p>
              </div>
            ))}
          </div>

          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-5">
            <p>
              The "18 months" is not a countdown clock to an extinction event. It is the window during which asymmetric returns are available — returns that diminish as more competitors move, as talent gets more expensive, as early-adopter advantages compound, and as the macro environment forces operational discipline that only AI-enabled businesses will find affordable.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Macro Backdrop */}
      <section id="section-2" className="py-20 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-brand-blue font-mono text-sm font-bold">02</span>
            <div className="h-0.5 w-10 bg-brand-blue" />
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Macro Context</span>
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 leading-tight">The Macro Backdrop: SMBs Under Pressure</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-3xl">American small and midsize businesses enter 2026 facing a confluence of pressures that, individually manageable, have compounded into a structurally more difficult operating environment.</p>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                area: "Labor Costs",
                data: "+18%",
                context: "Cumulative SMB wage growth 2022–2025",
                body: "Labor remains the single largest SMB cost category. Wage pressure has moderated from 2022 peaks but compounded gains are now baseline. SMBs cannot offset with productivity without operational leverage — which is where AI enters the equation.",
              },
              {
                area: "Interest Rates",
                data: "4.5–5.5%",
                context: "Federal funds rate range through 2025",
                body: "The cost of capital has normalized to levels most SMB operators have not encountered in their careers. Lines of credit, equipment financing, and commercial real estate debt all reprice. Capital efficiency matters more than at any point in the last 15 years.",
              },
              {
                area: "Supply Chain & Tariffs",
                data: "+8–25%",
                context: "Input cost variance 2024–2026 depending on sector",
                body: "Tariff policy, reshoring dynamics, and supply chain restructuring create cost volatility that SMBs cannot offset through scale. Predictable cost structures have been replaced by continuous repricing.",
              },
              {
                area: "Regulatory Uncertainty",
                data: "Multiple",
                context: "Simultaneous policy shifts across federal, state, local",
                body: "Tax policy, labor regulation, data privacy, and AI governance are moving simultaneously at federal and state levels. SMBs without dedicated compliance capacity carry disproportionate risk per dollar of revenue.",
              },
              {
                area: "Talent Availability",
                data: "Structural tightness",
                context: "Skilled labor gap persists despite soft headline numbers",
                body: "Despite cooling in some labor market indicators, skilled technical, healthcare, and professional-services talent remains hard to source and harder to retain. SMBs compete for the same talent as larger firms with more benefits budget.",
              },
              {
                area: "Demand Uncertainty",
                data: "Bifurcated",
                context: "Consumer/SMB behavior diverging from enterprise",
                body: "Mid-market and enterprise customers have continued discretionary spending; small-business customers and mid-income consumers have pulled back. Revenue predictability for SMBs serving these segments has degraded.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">{item.area}</p>
                    <p className="text-2xl font-black text-slate-900 mt-1">{item.data}</p>
                    <p className="text-xs text-slate-500 italic mt-0.5">{item.context}</p>
                  </div>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white rounded-2xl p-8 border-l-4 border-brand-red shadow-sm">
            <p className="text-brand-red text-xs font-bold uppercase tracking-widest mb-3">The Compounding Effect</p>
            <p className="text-slate-700 leading-relaxed">
              Each of these pressures is survivable in isolation. The difficulty is that they arrive together. SMBs operating with 2021 cost structures and 2026 revenue realities are the businesses most likely to look at 2027 as the year things broke. The businesses that retrofit operational leverage during this window are the ones that treat 2027 as normal.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Policy & Economic Stressors */}
      <section id="section-3" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-brand-blue font-mono text-sm font-bold">03</span>
            <div className="h-0.5 w-10 bg-brand-blue" />
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Policy &amp; Economics</span>
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 leading-tight">The Policy &amp; Economic Stressors</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-3xl">Independent of partisan framing, the current US political-economic environment is transmitting specific pressures to SMBs that raise the marginal value of operational efficiency.</p>

          <div className="space-y-6">
            {[
              {
                num: "I",
                title: "Tariff Policy &amp; Input Volatility",
                body: "The expansion and restructuring of tariffs has introduced material input-cost variability for SMBs reliant on imported goods, components, or materials. Unlike large enterprises with hedging mechanisms and diversified supply chains, SMBs absorb these shifts directly. The operational response — faster repricing, tighter forecasting, leaner inventory — requires capabilities that AI-augmented workflows deliver at a cost SMBs can afford.",
                implication: "Businesses without dynamic pricing, forecasting, and supplier management capabilities operate at a structural disadvantage in a tariff-volatile environment.",
              },
              {
                num: "II",
                title: "Labor Market &amp; Immigration Policy",
                body: "Shifts in immigration enforcement, H-1B policy, and labor availability directly affect sectors where SMBs concentrate: hospitality, construction, healthcare, agriculture, and professional services. Labor supply constraints interact with persistent wage pressure to raise the effective cost of human labor hours.",
                implication: "Every task that can be performed by a well-designed AI workflow is effectively a hedge against labor availability and cost. The substitution economics have improved materially.",
              },
              {
                num: "III",
                title: "Tax &amp; Regulatory Churn",
                body: "Federal and state tax policy, labor classification rules, and data privacy regulations are moving simultaneously. Compliance work that used to be handled by quarterly check-ins with an accountant now requires continuous attention. SMBs without operational leverage absorb this as principal-level time.",
                implication: "AI-assisted compliance, documentation, and monitoring workflows reduce the time leadership spends on regulation — and the risk that something is missed.",
              },
              {
                num: "IV",
                title: "Healthcare &amp; Benefits Cost",
                body: "Healthcare premiums for SMB group plans continued rising above general inflation through 2025. Benefits costs are a major driver of total compensation, and SMBs have fewer tools than large employers to negotiate favorable terms.",
                implication: "Each employee retained rather than added — supported by AI tooling — represents meaningful savings. The economics of AI-augmented retention now compete favorably with new hires.",
              },
              {
                num: "V",
                title: "Credit &amp; Capital Access",
                body: "SMB lending standards tightened through 2024–2025. SBA loan approval timelines extended. Regional bank consolidation has reduced relationship-lending options in many markets. Capital for growth is accessible but more expensive and more selective.",
                implication: "Businesses demonstrating productivity gains through AI deployment present stronger credit profiles. Businesses operating on legacy cost structures do not.",
              },
              {
                num: "VI",
                title: "Geopolitical &amp; Cybersecurity Exposure",
                body: "Elevated geopolitical tension correlates with elevated cybersecurity targeting of SMBs — often as entry points to larger supply chains. Insurance premiums have risen; cyber insurance coverage has tightened. Every business is now a cybersecurity operation, whether it wants to be or not.",
                implication: "Well-governed AI deployment (including governance framework, logging, and monitoring) becomes part of cybersecurity posture. Shadow AI is a cybersecurity liability.",
              },
            ].map((s, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-slate-900 to-slate-700 rounded-xl flex items-center justify-center shadow">
                    <span className="text-white font-black text-lg">{s.num}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-2" dangerouslySetInnerHTML={{ __html: s.title }} />
                    <p className="text-slate-700 text-sm leading-relaxed mb-3">{s.body}</p>
                    <div className="bg-white rounded-lg p-3 border-l-4 border-brand-blue">
                      <p className="text-brand-blue text-xs font-bold uppercase tracking-wider mb-1">Operational Implication</p>
                      <p className="text-slate-700 text-sm leading-relaxed">{s.implication}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-slate-900 rounded-2xl p-8 text-white">
            <p className="text-brand-yellow text-xs font-bold uppercase tracking-widest mb-3">A Neutral Framing</p>
            <p className="text-slate-300 leading-relaxed">
              This analysis is not a commentary on whether current US policy is correct. It is a statement about what SMB operators are experiencing — rising uncertainty, compressed margins, and a widening gap between businesses that can adapt quickly and businesses that cannot. That gap is the reason the AI window matters now rather than later.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Technology Curve */}
      <section id="section-4" className="py-20 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-brand-blue font-mono text-sm font-bold">04</span>
            <div className="h-0.5 w-10 bg-brand-blue" />
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Technology</span>
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 leading-tight">The Technology Curve: What's Moving Now</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-3xl">Four technology shifts, happening simultaneously in this window, create the operational opportunity.</p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Open-weight model parity", body: "Llama 3.1, Mistral, and other open-weight models have reached quality levels that, for most SMB tasks, are indistinguishable from GPT-4-class commercial APIs. This collapses the \"AI tax\" — the premium SMBs paid for AI capability in 2023–2024.", color: "brand-blue" },
              { title: "Specialized GPU cloud pricing", body: "CoreWeave, Lambda, and peer specialized clouds have driven GPU-hour pricing 40–60% below hyperscaler alternatives. Production AI workloads that required an enterprise budget in 2023 now fit SMB operating expense.", color: "brand-green" },
              { title: "Integration maturity", body: "Microsoft 365 Copilot, Google Workspace Gemini, and category-leading SaaS tools have moved AI inside workflows employees already use. The integration cost that killed 2024 pilots has largely evaporated for productivity use cases.", color: "purple-500" },
              { title: "Agentic capability emerging", body: "Agent frameworks and tool-use patterns are moving from research demo to production deployment. Routine multi-step workflows (document processing, support triage, research synthesis) are becoming practical — not hypothetical.", color: "brand-yellow" },
            ].map((t, i) => (
              <div key={i} className={`bg-white rounded-2xl p-6 border-t-4 border-${t.color} shadow-sm`}>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{t.title}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <p className="text-slate-700 leading-relaxed">
              Each of these shifts is independently meaningful. Their simultaneous arrival — with SMB macro pressure intensifying — is what makes this specific window different from \"AI as strategic theme\" discussions of prior years.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Why This Window */}
      <section id="section-5" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-brand-blue font-mono text-sm font-bold">05</span>
            <div className="h-0.5 w-10 bg-brand-blue" />
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Comparison</span>
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 leading-tight">Why This Window Is Different</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-3xl">Technology waves always come with "act now" rhetoric. Three characteristics make this one materially different for SMBs.</p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="text-left p-4 font-bold">Dimension</th>
                  <th className="text-left p-4 font-bold">Cloud (2010–2015)</th>
                  <th className="text-left p-4 font-bold">Mobile (2008–2013)</th>
                  <th className="text-left p-4 font-bold bg-brand-blue">AI (2024–2027)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { dim: "Capital Barrier for SMBs", a: "Moderate", b: "Low", c: "Very low" },
                  { dim: "Operational Leverage", a: "Infrastructure cost reduction", b: "Customer access expansion", c: "Direct labor substitution + enhancement" },
                  { dim: "Speed of Adoption", a: "5–7 year curve", b: "3–5 year curve", c: "18–24 month curve" },
                  { dim: "Competitive Asymmetry", a: "Large firms favored", b: "Fast movers favored", c: "Prepared firms favored" },
                  { dim: "Macro Reinforcement", a: "Neutral", a2: "", b: "Neutral", c: "Amplified by labor costs, uncertainty" },
                  { dim: "Reversibility", a: "Gradual advantage", b: "Gradual advantage", c: "Compounding advantage" },
                ].map((r, i) => (
                  <tr key={i} className={`${i % 2 === 0 ? "bg-white" : "bg-slate-50"} border-b border-slate-200`}>
                    <td className="p-4 font-bold text-slate-900">{r.dim}</td>
                    <td className="p-4 text-slate-700">{r.a}</td>
                    <td className="p-4 text-slate-700">{r.b}</td>
                    <td className="p-4 text-slate-700 bg-brand-blue/5 font-medium">{r.c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-brand-blue/5 border border-brand-blue/20 rounded-2xl p-6">
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong className="text-brand-blue">The crucial difference:</strong> cloud and mobile were tailwinds. AI is a tailwind <em>combined with</em> macro pressure that makes operational leverage a near-necessity. SMBs that deployed cloud slowly lost optimization. SMBs that deploy AI slowly lose competitive position during a period when every other cost line is rising.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Mathematics of Delay */}
      <section id="section-6" className="py-20 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-brand-blue font-mono text-sm font-bold">06</span>
            <div className="h-0.5 w-10 bg-brand-blue" />
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Cost Model</span>
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 leading-tight">The Mathematics of Delay</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-3xl">A simplified cost model illustrates why acting during the window produces asymmetric returns. The numbers are illustrative; the structure is the point.</p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { label: "Act in 2026", color: "brand-green", items: [
                { k: "Year-1 program investment", v: "$55K" },
                { k: "Year-1 productivity recovery", v: "$80K" },
                { k: "Year-2 compounded benefit", v: "$145K" },
                { k: "Year-3 position", v: "Defensive leader" },
                { k: "3-year cumulative gain", v: "+$390K" },
              ]},
              { label: "Act in 2027", color: "brand-yellow", items: [
                { k: "Year-1 program investment", v: "$68K" },
                { k: "Year-1 productivity recovery", v: "$62K" },
                { k: "Year-2 compounded benefit", v: "$95K" },
                { k: "Year-3 position", v: "Catching up" },
                { k: "3-year cumulative gain", v: "+$155K" },
              ]},
              { label: "Act in 2028", color: "brand-red", items: [
                { k: "Year-1 program investment", v: "$85K" },
                { k: "Year-1 productivity recovery", v: "$45K" },
                { k: "Year-2 compounded benefit", v: "$60K" },
                { k: "Year-3 position", v: "Structurally behind" },
                { k: "3-year cumulative gain", v: "-$40K" },
              ]},
            ].map((s, i) => (
              <div key={i} className={`bg-white rounded-2xl p-6 border-t-4 border-${s.color} shadow-sm`}>
                <p className={`text-${s.color} text-xs font-bold uppercase tracking-widest mb-4`}>{s.label}</p>
                <div className="space-y-3">
                  {s.items.map((item, j) => (
                    <div key={j} className="flex items-baseline justify-between pb-2 border-b border-slate-200 last:border-0">
                      <span className="text-slate-600 text-sm">{item.k}</span>
                      <span className={`font-bold ${j === s.items.length - 1 ? `text-${s.color} text-lg` : "text-slate-900"}`}>{item.v}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong className="text-slate-900">What's driving the asymmetry:</strong>
            </p>
            <ul className="space-y-2 text-slate-700 text-sm">
              {[
                "Talent and integration costs rise as AI expertise becomes scarcer and more expensive",
                "Customer expectations shift; businesses without AI-enhanced service face retention pressure",
                "Competitors who acted earlier have established workflow, data, and governance advantages that compound",
                "Macro cost pressures continue; businesses without productivity gains are absorbing increases that leaders have offset",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-blue rounded-full flex-shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-xs text-slate-500 italic mt-4">Illustrative model. Actual figures depend on baseline conditions, use case selection, and execution quality. The structural shape — declining returns and rising costs for later movers — holds across most observed cases.</p>
        </div>
      </section>

      {/* 7. Compounding Disadvantage */}
      <section id="section-7" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-brand-blue font-mono text-sm font-bold">07</span>
            <div className="h-0.5 w-10 bg-brand-blue" />
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Dynamics</span>
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 leading-tight">The Compounding Disadvantage</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-3xl">The cost of waiting is not linear. Four compounding mechanisms convert initial gaps into persistent structural disadvantages.</p>

          <div className="space-y-5">
            {[
              { title: "Talent Flight", body: "Skilled operators migrate to firms that use modern tools. Businesses running on legacy workflows quietly lose their best people to competitors who don't." },
              { title: "Customer Expectation Drift", body: "Once a customer experiences AI-enhanced service (faster response, personalized communication, proactive insight), the bar moves. Non-AI service becomes \"slow\" rather than normal." },
              { title: "Data Debt Accumulation", body: "Every month without a data strategy is a month when records, documents, and institutional knowledge accumulate in formats AI cannot easily use later. Cleaning up five years of data debt in year three costs more than preventing two years of it now." },
              { title: "Partnership Terms", body: "Vendors, partners, and capital providers increasingly evaluate counterparties on digital maturity. Businesses without clear AI posture negotiate from weaker positions — particularly on payment terms, credit, and insurance." },
            ].map((c, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6 border-l-4 border-brand-red flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-red rounded-xl flex items-center justify-center shadow">
                  <span className="text-white font-black">{i + 1}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{c.title}</h3>
                  <p className="text-slate-700 leading-relaxed">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. What Acting Looks Like */}
      <section id="section-8" className="py-20 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-brand-blue font-mono text-sm font-bold">08</span>
            <div className="h-0.5 w-10 bg-brand-blue" />
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Action</span>
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 leading-tight">What "Acting" Actually Looks Like</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-3xl">Acting does not mean betting the company on AI. It means building readiness, making two deliberate deployments, and establishing the muscle to iterate. The amount of work is modest. The discipline is what's hard.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: "1", title: "Assess honestly", body: "A readiness assessment across strategy, data, infrastructure, people, and governance. Three days of focused work. The result is a clear picture of where the organization actually stands — not where leadership assumes it stands.", color: "brand-blue" },
              { num: "2", title: "Deploy two use cases", body: "Pick the two use cases with the highest impact × feasibility. Deploy them end-to-end in 90 days. Measure outcomes. This is the single most important move of the 18-month window.", color: "brand-green" },
              { num: "3", title: "Build the muscle", body: "Establish governance, train champions, document what worked, transition operational ownership. The deployment is the starting point; the capability to iterate is the compounding asset.", color: "purple-500" },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                <div className={`w-14 h-14 bg-${s.color} rounded-xl flex items-center justify-center mb-5 shadow`}>
                  <span className="text-white font-black text-xl">{s.num}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
            <p className="text-slate-700 leading-relaxed italic text-lg">
              The businesses that will emerge from this window ahead are not the ones that adopted AI first. They are the ones that adopted it <strong className="not-italic text-slate-900">deliberately</strong> — with a framework, a partner, and a plan to measure.
            </p>
          </div>
        </div>
      </section>

      {/* 9. Timeline */}
      <section id="section-9" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-brand-blue font-mono text-sm font-bold">09</span>
            <div className="h-0.5 w-10 bg-brand-blue" />
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Decision Timeline</span>
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 leading-tight">Quarter-by-Quarter Decision Timeline</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-3xl">A practical map of what to decide, by quarter, through the 18-month window.</p>

          <div className="space-y-4">
            {[
              { q: "Q1 2026", label: "Assess &amp; Select", color: "brand-green", actions: ["Complete AI readiness assessment", "Identify two priority use cases with written success criteria", "Establish governance framework and acceptable-use policy"] },
              { q: "Q2 2026", label: "Build Foundation", color: "brand-blue", actions: ["Address data readiness for target use cases", "Select tooling and partners; complete security review", "Train core team and identify champions"] },
              { q: "Q3 2026", label: "Deploy Pilot", color: "purple-500", actions: ["Launch first use case in controlled rollout", "Establish measurement baseline and monitoring", "Begin second use case foundation work"] },
              { q: "Q4 2026", label: "Operate &amp; Measure", color: "brand-yellow", actions: ["Transition first use case to full production", "Document outcomes against baseline; publish internal case study", "Launch second use case"] },
              { q: "Q1 2027", label: "Scale", color: "cyan-500", actions: ["Expand deployed use cases cross-departmentally", "Evaluate third and fourth opportunities", "Mature governance with quarterly review cadence"] },
              { q: "Q2 2027", label: "Institutionalize", color: "brand-green", actions: ["Embed AI capability into hiring, training, and operations", "Assess build-vs-rent for proprietary capability", "Begin fine-tuning or private inference where justified"] },
              { q: "Q3 2027", label: "Defend Position", color: "slate-700", actions: ["Validate competitive differentiation is visible externally", "Measure retention, margin, and talent advantage", "Invest in capabilities that are now infeasible for late movers"] },
            ].map((q, i) => (
              <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200 flex items-center gap-5">
                <div className={`flex-shrink-0 w-24 text-center py-3 bg-${q.color} rounded-lg text-white`}>
                  <p className="font-black text-lg">{q.q}</p>
                </div>
                <div className="flex-1">
                  <p className={`text-${q.color} font-bold text-sm mb-2 uppercase tracking-wider`} dangerouslySetInnerHTML={{ __html: q.label }} />
                  <div className="flex flex-wrap gap-3">
                    {q.actions.map((a, j) => (
                      <span key={j} className="text-slate-700 text-sm">
                        {j > 0 && <span className="text-slate-400 mr-3">·</span>}
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Conclusion */}
      <section id="section-10" className="py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-brand-blue font-mono text-sm font-bold">10</span>
            <div className="h-0.5 w-10 bg-brand-blue" />
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Conclusion</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">The Asymmetric Bet</h2>

          <div className="space-y-6 text-slate-300 leading-relaxed text-lg mb-10">
            <p>
              The 18-month window is an asymmetric bet. Acting during it costs a modest, well-defined amount and produces compounding returns under a wide range of future conditions. Not acting costs nothing up front — and an uncapped amount if the business ends 2027 on the wrong side of the convergence point.
            </p>
            <p>
              Under the most favorable scenarios for SMBs (labor market softens, rates fall, supply chains stabilize), acting produces a meaningful productivity dividend. Under less favorable scenarios — which describe the current macro environment — acting is the difference between navigating 2027 from a position of strength and navigating it from a position of dependency.
            </p>
            <p className="text-white font-semibold text-xl border-l-4 border-brand-yellow pl-5 italic">
              The question for SMB leadership is not whether to deploy AI. It is whether to deploy deliberately during an 18-month window when the cost is affordable and the returns are asymmetric — or to deploy reactively in a window when neither is true.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="/ai-readiness"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue text-white rounded-xl font-bold text-lg hover:bg-blue-600 transition-colors shadow-xl"
            >
              Read: The AI Readiness Imperative
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/work-with-us"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white border-2 border-white/30 rounded-xl font-bold text-lg hover:bg-white/20 transition-colors"
            >
              Start Your Readiness Program
            </Link>
          </div>

          <div className="pt-8 border-t border-slate-700">
            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-4">Methodology &amp; Neutrality Statement</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              This briefing synthesizes findings from <span className="arvintech-brand font-semibold text-white">arvintech</span> client engagements through Q1 2026, public economic data (US Small Business Administration, NFIB, Federal Reserve Bank surveys, BLS), and research from McKinsey Global Institute, Boston Consulting Group, and Gartner. Policy and economic observations are presented factually without endorsement of particular political positions. The intent is to equip SMB leadership with clarity about the operating environment, not to advocate on policy. For a specific assessment of your organization's window, contact <span className="arvintech-brand font-semibold text-white">arvintech</span>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
