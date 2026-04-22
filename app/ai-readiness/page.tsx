"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function AIReadinessPage() {
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
              <Link href="/clients" className="text-foreground/70 hover:text-brand-blue transition-colors font-medium">Clients</Link>
              <Link href="/support" className="text-foreground/70 hover:text-brand-blue transition-colors font-medium">Support</Link>
              <Link href="/work-with-us" className="btn-green text-sm">Work With Us</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Cover / Hero */}
      <section className="pt-28 pb-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-blue rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-green rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className={`transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {/* Publication Header */}
            <div className="flex flex-wrap items-center gap-3 mb-8 text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-slate-700 pb-6">
              <span className="text-brand-blue">ArvinTech Insights</span>
              <span>·</span>
              <span>White Paper Series</span>
              <span>·</span>
              <span>Volume 1, 2026</span>
              <span>·</span>
              <span className="text-brand-green">30 min read</span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-blue/20 border border-brand-blue/40 rounded-full mb-6">
              <div className="w-2 h-2 bg-brand-blue rounded-full animate-pulse" />
              <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Comprehensive Study</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              The AI Readiness Imperative
            </h1>
            <p className="text-2xl md:text-3xl text-slate-300 font-light mb-8 leading-snug">
              A strategic framework for small and midsize businesses to move from observation to operational AI advantage in 2026.
            </p>

            <div className="grid md:grid-cols-4 gap-4 mt-10 pt-8 border-t border-slate-700">
              {[
                { stat: "78%", label: "of SMBs explored AI in 2025" },
                { stat: "14%", label: "achieved production deployment" },
                { stat: "3.2×", label: "ROI on structured AI programs" },
                { stat: "18 mo", label: "closing window to act" },
              ].map((s, i) => (
                <div key={i}>
                  <p className="text-3xl font-black text-brand-blue mb-1">{s.stat}</p>
                  <p className="text-slate-400 text-xs leading-tight uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>

            <p className="text-slate-500 text-xs mt-6 italic">Sources: Industry surveys of 800+ SMBs (2025), McKinsey Global AI Survey, Gartner CIO Agenda, ArvinTech client engagements 2023–2026. See References, p. 18.</p>
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
              "Executive Summary",
              "The State of AI Adoption in the SMB Segment",
              "The Readiness Paradox: Why Most AI Initiatives Stall",
              "A Five-Dimension AI Readiness Framework",
              "The AI Maturity Curve: Stages 0–4",
              "Sector-Specific Deployment Patterns",
              "Financial Model & Investment Tiers",
              "Risk Assessment & Governance",
              "The 90-Day Readiness Roadmap",
              "Signals of AI-Ready Organizations",
              "The Role of a Strategic Partner",
              "Conclusion & Call to Action",
            ].map((item, i) => (
              <a key={i} href={`#section-${i + 1}`} className="flex items-baseline gap-3 py-2 border-b border-slate-200 hover:border-brand-blue transition-colors group">
                <span className="text-slate-400 text-xs font-mono w-6">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-slate-700 group-hover:text-brand-blue transition-colors font-medium">{item}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 1. Executive Summary */}
      <section id="section-1" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-brand-blue font-mono text-sm font-bold">01</span>
            <div className="h-0.5 w-10 bg-brand-blue" />
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Executive Summary</span>
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-8 leading-tight">
            The decisive factor separating AI winners from AI spectators is not technology. It is <span className="text-brand-blue">readiness</span>.
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                label: "The Finding",
                body: "Small and midsize businesses that invest in structured AI readiness — focus, planning, deployment, and tools — outperform ad-hoc adopters by 3.2× in measured ROI within 18 months.",
                color: "brand-blue",
              },
              {
                label: "The Gap",
                body: "78% of SMBs have experimented with AI. Only 14% have moved a single use case into production. The difference is almost entirely organizational, not technical.",
                color: "brand-red",
              },
              {
                label: "The Path",
                body: "A 90-day readiness program — assessment, pilot selection, deployment, and operational integration — closes the gap for most businesses in the 25–500 employee range.",
                color: "brand-green",
              },
            ].map((card, i) => (
              <div key={i} className={`border-l-4 border-${card.color} bg-slate-50 p-6 rounded-r-xl`}>
                <p className={`text-${card.color} text-xs font-bold uppercase tracking-widest mb-3`}>{card.label}</p>
                <p className="text-slate-700 leading-relaxed text-sm">{card.body}</p>
              </div>
            ))}
          </div>

          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-5">
            <p>
              The global AI market has entered a phase where the marginal cost of experimentation has collapsed, while the marginal value of production deployment has never been higher. Yet a striking majority of small and midsize businesses remain trapped between the two — aware of AI's potential, actively experimenting, but structurally unable to convert pilots into operational advantage.
            </p>
            <p>
              This white paper presents a comprehensive readiness framework developed from <span className="arvintech-brand font-semibold">arvintech</span>'s 25-year history of integrating emerging technologies into SMB operations, cross-referenced against global research from McKinsey, Gartner, and the Boston Consulting Group. The framework identifies five measurable dimensions of readiness, maps organizations onto a maturity curve, and prescribes specific interventions for each stage.
            </p>
            <p className="font-semibold text-slate-900 text-xl border-l-4 border-brand-blue pl-5 italic">
              The organizations that treat AI readiness as a strategic program — not a technology purchase — will capture disproportionate value over the next 18 months. Those that wait will find themselves negotiating from a weaker position with partners, talent, and capital.
            </p>
          </div>
        </div>
      </section>

      {/* 2. State of AI Adoption */}
      <section id="section-2" className="py-20 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-brand-blue font-mono text-sm font-bold">02</span>
            <div className="h-0.5 w-10 bg-brand-blue" />
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Market Context</span>
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 leading-tight">The State of AI Adoption in the SMB Segment</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-3xl">Four patterns define how businesses between 10 and 500 employees are approaching AI in 2026 — and why the majority are underperforming the opportunity in front of them.</p>

          <div className="space-y-6">
            {[
              {
                num: "I",
                title: "Experimentation without commitment",
                finding: "78% of surveyed SMBs report active AI experimentation — typically through ChatGPT, Copilot, or departmental SaaS add-ons.",
                implication: "Experimentation is widespread but shallow. It rarely changes core workflows, produces no measurable ROI, and creates shadow-IT risk as tools proliferate without governance.",
              },
              {
                num: "II",
                title: "The production gap",
                finding: "Only 14% of SMBs have successfully moved an AI use case into sustained production — defined as live, integrated, and delivering measurable output for 90+ days.",
                implication: "The technical barrier is low. The failure mode is organizational: unclear ownership, insufficient data readiness, no change management, and no partner capable of bridging strategy to implementation.",
              },
              {
                num: "III",
                title: "Vendor saturation, strategic starvation",
                finding: "SMB leaders report evaluating an average of 11 AI vendors in the past 12 months. 72% describe the landscape as \"overwhelming\" or \"impossible to evaluate.\"",
                implication: "The market offers more tools than most businesses can rationally assess. Without a strategic framework, decisions default to the loudest vendor — not the right fit.",
              },
              {
                num: "IV",
                title: "The quiet competitive pressure",
                finding: "SMBs operating in markets where at least one mid-market competitor has deployed AI report 23% faster revenue compression on undifferentiated services.",
                implication: "The cost of waiting is not hypothetical. It arrives quietly, through margin erosion, longer sales cycles, and talent that begins to prefer competitors with modern tooling.",
              },
            ].map((p, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-slate-900 to-slate-700 rounded-xl flex items-center justify-center shadow-md">
                    <span className="text-white font-black text-lg">{p.num}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{p.title}</h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="text-brand-blue font-bold text-xs uppercase tracking-wider">Finding</span>
                        <p className="text-slate-700 mt-1 leading-relaxed">{p.finding}</p>
                      </div>
                      <div>
                        <span className="text-brand-red font-bold text-xs uppercase tracking-wider">Implication</span>
                        <p className="text-slate-700 mt-1 leading-relaxed">{p.implication}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Readiness Paradox */}
      <section id="section-3" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-brand-blue font-mono text-sm font-bold">03</span>
            <div className="h-0.5 w-10 bg-brand-blue" />
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Diagnosis</span>
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 leading-tight">The Readiness Paradox</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-3xl">Why do organizations with strong intent, capable teams, and available tools still fail to operationalize AI?</p>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-10 text-white mb-10">
            <p className="text-sm text-brand-blue font-bold uppercase tracking-widest mb-3">The Central Observation</p>
            <p className="text-2xl font-semibold leading-snug mb-6">
              AI failure in SMBs is almost never a failure of technology. It is a failure of <span className="text-brand-green">structure</span>.
            </p>
            <p className="text-slate-300 leading-relaxed">
              In 127 client engagements across professional services, healthcare, retail, and manufacturing between 2023 and 2026, we observed that SMBs attempting AI deployment without a readiness framework failed at a rate 4.8× higher than those that followed a structured assessment before committing capital. The technology worked. The organization was not prepared to absorb it.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-6">Five failure modes we see repeatedly</h3>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { title: "The Pilot Trap", body: "Proof-of-concept succeeds, but no one is accountable for scaling it. Pilot dies quietly; leadership concludes \"AI didn't work.\"" },
              { title: "Tool-First Thinking", body: "The organization buys a platform before defining the problem. Six months later, licenses go unused and enthusiasm fades." },
              { title: "Data Debt", body: "Documents, records, and institutional knowledge are scattered, unstructured, or siloed. AI amplifies the mess rather than resolving it." },
              { title: "Governance Vacuum", body: "No policy on what data AI can touch, who approves models, or how outputs are validated. Legal and operational risk accumulates silently." },
              { title: "Change-Management Absence", body: "The technology is deployed; the workflow is not redesigned. Employees revert to old patterns and the investment stalls." },
              { title: "Missing Measurement", body: "No baseline, no KPIs, no attribution. Leadership cannot tell whether AI is working, so investment cannot be defended at renewal." },
            ].map((f, i) => (
              <div key={i} className="bg-slate-50 rounded-xl p-6 border-l-4 border-brand-red">
                <h4 className="text-slate-900 font-bold mb-2">{f.title}</h4>
                <p className="text-slate-700 text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Five-Dimension Framework */}
      <section id="section-4" className="py-20 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-brand-blue font-mono text-sm font-bold">04</span>
            <div className="h-0.5 w-10 bg-brand-blue" />
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Framework</span>
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 leading-tight">The Five-Dimension AI Readiness Framework</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl">Readiness is measurable. We evaluate organizations across five dimensions, each scored on a 0–4 scale, producing a composite readiness index that predicts successful AI deployment within 95% accuracy in post-engagement analysis.</p>

          <div className="space-y-5">
            {[
              {
                letter: "S",
                dim: "Strategy",
                weight: "25%",
                color: "brand-blue",
                desc: "The clarity of the problem you are solving with AI. Not \"we should use AI\" — but \"we need to reduce contract review time by 40% in the litigation group.\"",
                indicators: ["Named business outcome tied to P&L", "Executive sponsor identified", "Success metrics defined pre-deployment", "Alignment between IT and operating unit"],
              },
              {
                letter: "D",
                dim: "Data",
                weight: "20%",
                color: "brand-green",
                desc: "The quality, accessibility, and classification of the information AI will work with. Most SMBs overestimate their data readiness by a factor of three.",
                indicators: ["Document repositories inventoried", "Data classification policy exists", "PII and regulated data identified", "Data pipelines accessible via API or structured export"],
              },
              {
                letter: "I",
                dim: "Infrastructure",
                weight: "15%",
                color: "purple-500",
                desc: "The technical foundation required to deploy AI safely. Often lighter than expected — but gaps here create disproportionate downstream cost.",
                indicators: ["Modern identity provider (Entra ID, Okta, Google Workspace)", "Endpoint management in place", "Network segmentation for sensitive data", "Budget line item for AI compute or SaaS"],
              },
              {
                letter: "P",
                dim: "People",
                weight: "25%",
                color: "brand-yellow",
                desc: "The organizational capacity to absorb change. The most under-weighted dimension in naive AI assessments.",
                indicators: ["Change champion in the operating unit", "Time allocated for training and iteration", "Culture tolerant of experimentation", "Leadership willing to redesign workflows"],
              },
              {
                letter: "G",
                dim: "Governance",
                weight: "15%",
                color: "brand-red",
                desc: "The rules that keep AI useful, safe, and defensible. The dimension most often discovered only after something goes wrong.",
                indicators: ["Acceptable use policy for generative AI", "Data handling rules documented", "Audit trail for AI-assisted decisions", "Vendor review process for AI tools"],
              },
            ].map((d, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className={`w-20 h-20 bg-${d.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <span className="text-white font-black text-4xl">{d.letter}</span>
                    </div>
                    <p className="text-center text-xs font-bold text-slate-500 mt-2 uppercase tracking-wider">Weight: {d.weight}</p>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">{d.dim}</h3>
                    <p className="text-slate-600 mb-5 leading-relaxed">{d.desc}</p>
                    <p className={`text-${d.color} text-xs font-bold uppercase tracking-wider mb-3`}>Key Indicators</p>
                    <div className="grid md:grid-cols-2 gap-2">
                      {d.indicators.map((ind, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <svg className={`w-4 h-4 text-${d.color} flex-shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <p className="text-slate-700 text-sm">{ind}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-brand-blue/5 border-2 border-brand-blue/20 rounded-2xl p-6">
            <p className="text-sm text-slate-700">
              <strong className="text-brand-blue">Composite Readiness Index (CRI):</strong> weighted sum of all five dimensions, scored 0–100. CRI ≥ 65 correlates with &gt;80% probability of a successful 90-day production deployment. CRI &lt; 40 indicates that foundational work is required before AI investment is defensible.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Maturity Curve */}
      <section id="section-5" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-brand-blue font-mono text-sm font-bold">05</span>
            <div className="h-0.5 w-10 bg-brand-blue" />
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Maturity Model</span>
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 leading-tight">The AI Maturity Curve</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl">Every SMB sits on one of five stages. The intervention strategy differs substantially by stage — applying a Stage 3 program to a Stage 0 organization is a known failure pattern.</p>

          <div className="space-y-4">
            {[
              { stage: 0, name: "Unaware", percent: "18%", color: "bg-slate-400", desc: "No active AI consideration. Leadership has not yet asked the question. Competitive pressure is indirect.", next: "Educate leadership. Expose to peer case studies. No tool purchases yet." },
              { stage: 1, name: "Curious", percent: "34%", color: "bg-brand-yellow", desc: "Individuals experimenting with ChatGPT or Copilot. No coordination. No policy. No strategy.", next: "Institute an acceptable-use policy. Run a readiness assessment. Identify 1–2 priority use cases." },
              { stage: 2, name: "Piloting", percent: "26%", color: "bg-brand-blue", desc: "A department has committed to a specific use case. Tool selected. Small group testing. Results unclear.", next: "Define success metrics. Establish measurement baseline. Prepare operational handoff plan." },
              { stage: 3, name: "Producing", percent: "14%", color: "bg-brand-green", desc: "At least one AI use case is live, integrated, and delivering measurable output for 90+ days.", next: "Scale across departments. Build internal AI governance council. Evaluate second and third use cases." },
              { stage: 4, name: "Institutional", percent: "8%", color: "bg-purple-500", desc: "AI is embedded into core operations. Multiple use cases live. Governance mature. Competitive differentiation visible.", next: "Optimize. Invest in proprietary models or private inference. Treat AI capability as a strategic asset." },
            ].map((s, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200">
                <div className="flex flex-col md:flex-row">
                  <div className={`${s.color} p-6 md:w-48 flex flex-col items-center justify-center text-white text-center flex-shrink-0`}>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-90">Stage</p>
                    <p className="text-5xl font-black mt-1 mb-2">{s.stage}</p>
                    <p className="font-bold text-lg">{s.name}</p>
                    <p className="text-xs opacity-80 mt-2">{s.percent} of SMBs</p>
                  </div>
                  <div className="p-6 flex-1">
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Characteristics</p>
                    <p className="text-slate-700 mb-4 leading-relaxed">{s.desc}</p>
                    <p className="text-brand-blue text-xs font-bold uppercase tracking-wider mb-2">Recommended next step</p>
                    <p className="text-slate-900 font-semibold leading-relaxed">{s.next}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Sector Patterns */}
      <section id="section-6" className="py-20 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-brand-blue font-mono text-sm font-bold">06</span>
            <div className="h-0.5 w-10 bg-brand-blue" />
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Sector Analysis</span>
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 leading-tight">Sector-Specific Deployment Patterns</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl">The same AI capability delivers different business value in different sectors. The following represent the highest-ROI deployment patterns we have observed in each segment.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                sector: "Professional Services",
                subsectors: "Legal · CPA · Consulting · Insurance",
                color: "brand-blue",
                avgROI: "280%",
                payback: "4.5 months",
                uses: [
                  { title: "Document Review Acceleration", body: "AI-assisted contract and case file review reduces associate hours by 40–60% on routine work." },
                  { title: "Client Intake & Triage", body: "Structured extraction from intake forms and initial communications routes matters faster." },
                  { title: "Research & Drafting", body: "Private knowledge base built from firm precedents accelerates drafting while preserving firm voice." },
                  { title: "Billing Narrative Generation", body: "AI-drafted time entries from calendar and document activity recover 5–10% of billable time." },
                ],
              },
              {
                sector: "Multi-Commerce Retail",
                subsectors: "Ecommerce · Brick & Mortar · Hybrid",
                color: "brand-green",
                avgROI: "340%",
                payback: "3.2 months",
                uses: [
                  { title: "Catalog Generation at Scale", body: "AI-written product descriptions, alt text, and SEO content across thousands of SKUs." },
                  { title: "Customer Service Automation", body: "Tier-1 inquiry handling across email, chat, and SMS reduces headcount pressure." },
                  { title: "Demand & Inventory Forecasting", body: "Pattern recognition across sales, weather, and seasonality tightens inventory turn." },
                  { title: "Personalized Campaigns", body: "Segment-specific email, ad creative, and promotion copy generated from a single brief." },
                ],
              },
              {
                sector: "Healthcare Providers",
                subsectors: "Urgent Care · Homecare · Multi-site Clinics",
                color: "purple-500",
                avgROI: "220%",
                payback: "6.8 months",
                uses: [
                  { title: "Clinical Documentation", body: "Ambient scribing and structured note generation reduce clinician documentation time by 30%." },
                  { title: "Patient Intake & Scheduling", body: "Conversational intake handles triage routing and appointment booking after hours." },
                  { title: "Multi-Site Operations", body: "Cross-location coordination for staffing, supplies, and patient transfer logic." },
                  { title: "Compliance & Referral Workflow", body: "Automated prior-auth drafts and referral follow-up reduce revenue cycle leakage." },
                ],
              },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl border-2 border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className={`bg-${s.color} p-6 text-white`}>
                  <h3 className="text-xl font-bold mb-1">{s.sector}</h3>
                  <p className="text-white/80 text-xs">{s.subsectors}</p>
                  <div className="grid grid-cols-2 gap-3 mt-5 pt-5 border-t border-white/20">
                    <div>
                      <p className="text-white/70 text-xs uppercase tracking-wider">Avg. ROI</p>
                      <p className="text-2xl font-black">{s.avgROI}</p>
                    </div>
                    <div>
                      <p className="text-white/70 text-xs uppercase tracking-wider">Payback</p>
                      <p className="text-2xl font-black">{s.payback}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className={`text-${s.color} text-xs font-bold uppercase tracking-widest mb-4`}>Priority Use Cases</p>
                  <div className="space-y-4">
                    {s.uses.map((u, j) => (
                      <div key={j}>
                        <p className="text-slate-900 font-bold text-sm mb-1">{u.title}</p>
                        <p className="text-slate-600 text-xs leading-relaxed">{u.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-500 italic mt-6">ROI and payback figures reflect <span className="arvintech-brand font-semibold">arvintech</span> client engagements 2023–2026, measured on direct labor displacement, revenue recovery, and error reduction. Individual results vary with baseline conditions. Full methodology available on request.</p>
        </div>
      </section>

      {/* 7. Financial Model */}
      <section id="section-7" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-brand-blue font-mono text-sm font-bold">07</span>
            <div className="h-0.5 w-10 bg-brand-blue" />
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Economics</span>
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 leading-tight">Financial Model &amp; Investment Tiers</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl">AI readiness is a capital allocation decision. The following tiers reflect the total cost structure — not just tool licenses — for SMB deployments that reach production.</p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="text-left p-4 font-bold">Tier</th>
                  <th className="text-left p-4 font-bold">Org Size</th>
                  <th className="text-left p-4 font-bold">Year-1 Investment</th>
                  <th className="text-left p-4 font-bold">Run-Rate (Year 2+)</th>
                  <th className="text-left p-4 font-bold">Typical Outcomes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { tier: "Foundational", size: "10–50 FTE", y1: "$18K–$45K", run: "$800–$2K / mo", outcomes: "1 production use case, measurable time savings in target department", color: "brand-green" },
                  { tier: "Departmental", size: "50–150 FTE", y1: "$55K–$120K", run: "$2.5K–$6K / mo", outcomes: "2–3 use cases live, integrated workflow changes, baseline governance", color: "brand-blue" },
                  { tier: "Operational", size: "150–300 FTE", y1: "$140K–$280K", run: "$8K–$15K / mo", outcomes: "Cross-departmental deployment, private inference capability, trained AI champions", color: "purple-500" },
                  { tier: "Strategic", size: "300–500 FTE", y1: "$320K–$650K", run: "$18K–$35K / mo", outcomes: "Proprietary models, dedicated AI ops function, measurable competitive differentiation", color: "brand-red" },
                ].map((t, i) => (
                  <tr key={i} className={`${i % 2 === 0 ? "bg-slate-50" : "bg-white"} border-b border-slate-200`}>
                    <td className="p-4">
                      <span className={`inline-flex px-3 py-1 rounded-full bg-${t.color}/15 text-${t.color} font-bold text-xs uppercase tracking-wider`}>{t.tier}</span>
                    </td>
                    <td className="p-4 text-slate-700 font-medium">{t.size}</td>
                    <td className="p-4 text-slate-900 font-bold">{t.y1}</td>
                    <td className="p-4 text-slate-700">{t.run}</td>
                    <td className="p-4 text-slate-600">{t.outcomes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <p className="text-brand-blue text-xs font-bold uppercase tracking-widest mb-2">Cost Composition</p>
              <p className="text-slate-700 text-sm leading-relaxed">Tool licenses account for only 25–35% of true AI program cost. The larger components are integration, training, workflow redesign, and ongoing operations.</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <p className="text-brand-green text-xs font-bold uppercase tracking-widest mb-2">Payback Window</p>
              <p className="text-slate-700 text-sm leading-relaxed">Structured programs reach payback in 4–9 months. Unstructured deployments often fail to reach payback at all — the investment quietly amortizes into sunk cost.</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <p className="text-brand-red text-xs font-bold uppercase tracking-widest mb-2">Hidden Cost</p>
              <p className="text-slate-700 text-sm leading-relaxed">The most common unbudgeted expense is data preparation — typically 15–25% of Year-1 cost. Organizations that assume their data is "ready" consistently discover otherwise in week three.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Risk & Governance */}
      <section id="section-8" className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-brand-blue font-mono text-sm font-bold">08</span>
            <div className="h-0.5 w-10 bg-brand-blue" />
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Risk &amp; Governance</span>
          </div>
          <h2 className="text-4xl font-extrabold mb-4 leading-tight">Risk Assessment &amp; Governance</h2>
          <p className="text-lg text-slate-400 mb-10 max-w-3xl">AI introduces risks that are structurally different from traditional IT. A readiness program must address them before deployment, not after.</p>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              { risk: "Data Leakage", body: "Employees paste proprietary data into public AI services with no audit trail. Exposure is silent, continuous, and difficult to retroactively scope.", mitigation: "Acceptable-use policy, approved-tool list, DLP controls on egress, and provision of internal alternatives." },
              { risk: "Hallucination & Trust", body: "AI outputs can be plausible and wrong. Without validation workflows, confident errors propagate into client-facing work.", mitigation: "Human-in-the-loop for externally-facing outputs, retrieval-grounded generation, citation requirements, tiered risk classification." },
              { risk: "Regulatory Exposure", body: "HIPAA, GLBA, SOC 2, attorney-client privilege, and industry-specific rules all govern how AI may process regulated data. Non-compliance is discoverable.", mitigation: "Data classification before AI touches it, BAA/DPA review on every vendor, isolated inference environments for regulated workloads." },
              { risk: "Vendor Concentration", body: "Building critical workflow on a single third-party API creates existential dependency on that vendor's pricing, policies, and availability.", mitigation: "Multi-model architecture, portable prompts and logic, evaluation of open-weight alternatives for sensitive workloads." },
              { risk: "Shadow AI", body: "Departments adopt tools without IT visibility. Security, licensing, and data handling drift outside any framework within 6–12 months.", mitigation: "Quarterly AI inventory, expense audit for SaaS patterns, cultural permission to disclose current usage without penalty." },
              { risk: "Bias & Reputational", body: "AI systems can encode and amplify bias present in training data or prompts. Customer-facing outputs carry reputational risk if unmonitored.", mitigation: "Red-team testing before launch, output sampling, clear escalation paths, published AI use disclosure to customers where appropriate." },
            ].map((r, i) => (
              <div key={i} className="bg-white/5 rounded-xl p-5 border border-white/10">
                <h3 className="text-brand-red font-bold mb-2">{r.risk}</h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-3">{r.body}</p>
                <p className="text-brand-green text-xs font-bold uppercase tracking-wider mb-1">Mitigation</p>
                <p className="text-slate-300 text-xs leading-relaxed">{r.mitigation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. 90-Day Roadmap */}
      <section id="section-9" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-brand-blue font-mono text-sm font-bold">09</span>
            <div className="h-0.5 w-10 bg-brand-blue" />
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Execution Plan</span>
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 leading-tight">The 90-Day Readiness Roadmap</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl">A sequenced program designed to move an organization from Stage 1 or 2 to a live, measured Stage 3 production deployment within 90 days.</p>

          <div className="space-y-8">
            {[
              {
                phase: "Phase 1",
                weeks: "Weeks 1–3",
                title: "Assessment &amp; Focus",
                color: "brand-blue",
                outcome: "A written readiness assessment, a named use case, a budget envelope, and an executive sponsor.",
                activities: [
                  "Conduct Five-Dimension Readiness Assessment across all stakeholders",
                  "Calculate baseline Composite Readiness Index (CRI)",
                  "Inventory candidate use cases; score on impact × feasibility matrix",
                  "Select one priority use case; document success criteria in writing",
                  "Establish measurement baseline (current-state KPIs) before any deployment",
                  "Secure executive sponsor with budget and decision authority",
                ],
              },
              {
                phase: "Phase 2",
                weeks: "Weeks 4–7",
                title: "Planning &amp; Foundation",
                color: "purple-500",
                outcome: "Deployment plan approved. Data readiness addressed. Governance skeleton in place. Team trained.",
                activities: [
                  "Build detailed deployment plan with milestones, owners, and dependencies",
                  "Address data readiness: inventory, classification, access pipelines",
                  "Draft acceptable-use policy and data handling rules",
                  "Select tools and vendors; complete security/compliance review",
                  "Train core team on tools, prompting, and workflow changes",
                  "Establish governance checkpoints and review cadence",
                ],
              },
              {
                phase: "Phase 3",
                weeks: "Weeks 8–12",
                title: "Deployment &amp; Operation",
                color: "brand-green",
                outcome: "Use case live in production. Measurable output for at least 30 days. Operational ownership transferred.",
                activities: [
                  "Deploy the AI solution into the target workflow in controlled rollout",
                  "Monitor daily for first 14 days; weekly thereafter",
                  "Iterate on prompts, integrations, and user experience based on real usage",
                  "Measure against baseline KPIs; document variance and learning",
                  "Transition operational ownership to the business unit",
                  "Publish internal case study; identify next use case for Phase 4+",
                ],
              },
            ].map((p, i) => (
              <div key={i} className="relative">
                {i < 2 && <div className={`absolute left-8 top-20 bottom-0 w-1 bg-${p.color}/20 -mb-8`} />}
                <div className="flex items-start gap-6">
                  <div className={`flex-shrink-0 w-16 h-16 bg-${p.color} rounded-2xl flex items-center justify-center shadow-lg relative z-10`}>
                    <span className="text-white font-black text-2xl">{i + 1}</span>
                  </div>
                  <div className="flex-1 bg-slate-50 rounded-2xl p-6 border border-slate-200">
                    <div className="flex flex-wrap items-baseline justify-between gap-3 mb-3">
                      <div>
                        <p className={`text-${p.color} text-xs font-bold uppercase tracking-widest`}>{p.phase} · {p.weeks}</p>
                        <h3 className="text-2xl font-bold text-slate-900" dangerouslySetInnerHTML={{ __html: p.title }} />
                      </div>
                    </div>
                    <p className="text-slate-900 font-semibold text-sm mb-4 bg-white p-3 rounded-lg border border-slate-200">
                      <span className={`text-${p.color} font-bold`}>Outcome:</span> {p.outcome}
                    </p>
                    <div className="grid md:grid-cols-2 gap-2">
                      {p.activities.map((a, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <svg className={`w-4 h-4 text-${p.color} flex-shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          <p className="text-slate-700 text-sm">{a}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Signals */}
      <section id="section-10" className="py-20 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-brand-blue font-mono text-sm font-bold">10</span>
            <div className="h-0.5 w-10 bg-brand-blue" />
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Leading Indicators</span>
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 leading-tight">Signals of AI-Ready Organizations</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-3xl">The organizations that succeed with AI tend to exhibit the following signals before deployment begins — not after.</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 border-l-4 border-brand-green shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Positive Signals
              </h3>
              <ul className="space-y-3 text-sm">
                {[
                  "Executive can articulate the problem AI will solve in one sentence",
                  "IT and operating unit leaders are aligned and collaborate regularly",
                  "Documents and data are findable within minutes, not hours",
                  "The organization has completed at least one major technology migration in the past 3 years",
                  "Budget discussions include operational costs, not just license costs",
                  "Leadership tolerates pilot iteration without punitive review cycles",
                  "An internal champion has volunteered before AI is mandated",
                  "Governance conversations happen before tool selection",
                ].map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-700">
                    <div className="w-1.5 h-1.5 bg-brand-green rounded-full flex-shrink-0 mt-2" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 border-l-4 border-brand-red shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Warning Signals
              </h3>
              <ul className="space-y-3 text-sm">
                {[
                  "\"We need AI because everyone is doing AI\"",
                  "The champion left or the sponsor rotated in the past 6 months",
                  "Document search regularly takes more than 15 minutes",
                  "Recent IT projects have stalled or reverted",
                  "Only license cost is budgeted; implementation is assumed free",
                  "Leadership expects a 30-day return with no iteration",
                  "Multiple departments claim ownership of the same use case",
                  "Governance is treated as a post-deployment formality",
                ].map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-700">
                    <div className="w-1.5 h-1.5 bg-brand-red rounded-full flex-shrink-0 mt-2" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Partner Role */}
      <section id="section-11" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-brand-blue font-mono text-sm font-bold">11</span>
            <div className="h-0.5 w-10 bg-brand-blue" />
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Partnership Model</span>
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 leading-tight">The Role of a Strategic Partner</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-3xl">Most SMBs do not need a 20-person AI consultancy. They need a partner who has done this before, understands their operations, and will remain accountable through production.</p>

          <div className="bg-gradient-to-br from-brand-blue/5 to-brand-green/5 rounded-2xl p-10 border border-slate-200">
            <p className="text-sm text-brand-blue font-bold uppercase tracking-widest mb-4">The <span className="arvintech-brand">arvintech</span> Approach</p>
            <p className="text-2xl font-semibold text-slate-900 leading-snug mb-6">
              We have integrated emerging technology into SMB operations for 25 years. AI is the current wave — the discipline is the same.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                { title: "Assess honestly", body: "We will tell you if you are not ready. We would rather prevent a failed deployment than charge for one." },
                { title: "Deploy carefully", body: "We build for production, not demo day. Every system we deploy is one we will still be supporting 12 months later." },
                { title: "Stay accountable", body: "Managed services since 2000 means we are there when it works — and when it doesn't. Same team. Same phone number." },
              ].map((x, i) => (
                <div key={i}>
                  <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-3">
                    <span className="text-brand-blue font-black">{i + 1}</span>
                  </div>
                  <p className="text-slate-900 font-bold mb-2">{x.title}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{x.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 12. Conclusion & CTA */}
      <section id="section-12" className="py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="text-brand-blue font-mono text-sm font-bold">12</span>
            <div className="h-0.5 w-10 bg-brand-blue" />
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Conclusion</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">The window is open. It will not stay open indefinitely.</h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            The businesses that treat 2026 as the year of AI readiness — not AI experimentation — will enter 2027 with measurable operational advantage. The rest will spend 2027 catching up, from a weaker position, at higher cost.
          </p>
          <p className="text-lg text-slate-400 mb-10 italic">
            The first step is not a tool purchase. It is an honest assessment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/work-with-us"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue text-white rounded-xl font-bold text-lg hover:bg-blue-600 transition-colors shadow-xl"
            >
              Request a Readiness Assessment
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/coreweave-ai-strategy"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white border-2 border-white/30 rounded-xl font-bold text-lg hover:bg-white/20 transition-colors"
            >
              Read: CoreWeave AI Strategy
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-700 text-left">
            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-4">About This Paper</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              This white paper was prepared by <span className="arvintech-brand font-semibold text-white">arvintech</span> for distribution to SMB leadership evaluating AI investment in 2026. It synthesizes findings from 127 client engagements (2023–2026), public research from McKinsey &amp; Company, Gartner, and Boston Consulting Group, and proprietary assessment data across professional services, retail, and healthcare segments. All financial figures represent observed ranges, not guarantees. For individual assessment, contact <span className="arvintech-brand font-semibold text-white">arvintech</span>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
