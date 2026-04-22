"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function CoreWeaveWhitePaperPage() {
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
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-blue rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className={`transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex flex-wrap items-center gap-3 mb-8 text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-slate-700 pb-6">
              <span className="text-brand-blue">ArvinTech Insights</span>
              <span>·</span>
              <span>White Paper Series</span>
              <span>·</span>
              <span>Volume 2, 2026</span>
              <span>·</span>
              <span className="text-brand-green">35 min read</span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-blue/20 border border-brand-blue/40 rounded-full mb-6">
              <div className="w-2 h-2 bg-brand-blue rounded-full animate-pulse" />
              <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Infrastructure Strategy</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Deploying CoreWeave for SMB AI Strategy
            </h1>
            <p className="text-2xl md:text-3xl text-slate-300 font-light mb-8 leading-snug">
              How small and midsize businesses can access the AI infrastructure of hyperscale labs — at economics that make production deployment viable.
            </p>

            <div className="grid md:grid-cols-4 gap-4 mt-10 pt-8 border-t border-slate-700">
              {[
                { stat: "40–60%", label: "cost reduction vs. AWS / Azure" },
                { stat: "H100 / A100", label: "same hardware as frontier labs" },
                { stat: "90 days", label: "from contract to production" },
                { stat: "SOC 2", label: "Type II certified" },
              ].map((s, i) => (
                <div key={i}>
                  <p className="text-3xl font-black text-brand-blue mb-1">{s.stat}</p>
                  <p className="text-slate-400 text-xs leading-tight uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>

            <p className="text-slate-500 text-xs mt-6 italic">Sources: CoreWeave published pricing (2025–2026), AWS/Azure GPU instance pricing benchmarks, McKinsey AI Infrastructure Report, Gartner Cloud AI Services Magic Quadrant, ArvinTech deployment data. See References, p. 22.</p>
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
              "The AI Infrastructure Landscape",
              "Why CoreWeave: The Strategic Rationale",
              "Build vs. Buy vs. Rent: The SMB Decision Framework",
              "Technical Architecture for SMB Deployments",
              "Use Case Patterns &amp; Expected Economics",
              "Reference Architecture &amp; Stack",
              "Financial Model: TCO vs. Hyperscalers",
              "Risk Assessment &amp; Governance",
              "The 90-Day Deployment Roadmap",
              "The Role of a Strategic Partner",
              "Conclusion &amp; Call to Action",
            ].map((item, i) => (
              <a key={i} href={`#section-${i + 1}`} className="flex items-baseline gap-3 py-2 border-b border-slate-200 hover:border-brand-blue transition-colors group">
                <span className="text-slate-400 text-xs font-mono w-6">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-slate-700 group-hover:text-brand-blue transition-colors font-medium" dangerouslySetInnerHTML={{ __html: item }} />
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
            The AI infrastructure gap is closing. The question is whether SMBs will <span className="text-brand-blue">close it strategically</span> — or expensively.
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                label: "The Opening",
                body: "CoreWeave has created a GPU cloud that is simultaneously enterprise-grade and SMB-viable. Production AI workloads now run at 40–60% below comparable hyperscaler pricing.",
                color: "brand-blue",
              },
              {
                label: "The Risk",
                body: "SMBs defaulting to AWS, Azure, or GCP for AI workloads are paying a premium for general-purpose infrastructure on a specialized workload. Margins compound over 12–24 months.",
                color: "brand-red",
              },
              {
                label: "The Path",
                body: "A 90-day deployment program on CoreWeave — private LLM, document intelligence, or fine-tuned domain models — delivers production capability at a known cost envelope.",
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
              For the past decade, AI infrastructure decisions in the small and midsize business segment defaulted to whichever hyperscaler the organization was already using. AWS customers ran ML workloads on EC2. Azure customers used Machine Learning Studio. Google Workspace customers landed on Vertex AI. The logic was simple: the hyperscaler was already in the environment.
            </p>
            <p>
              That logic no longer holds. Specialized GPU cloud providers — of which CoreWeave is the leading example — have emerged with infrastructure that is not just cheaper per GPU-hour but architecturally better-suited to the workloads modern AI demands. For an SMB building a private LLM deployment, running document intelligence at scale, or fine-tuning domain-specific models, CoreWeave represents a step-function improvement in both economics and capability.
            </p>
            <p>
              This white paper presents a structured evaluation of CoreWeave as the AI infrastructure backbone for SMB deployments. It addresses the build-vs-buy decision, technical architecture, use case economics, comparative TCO against hyperscalers, risk considerations, and a 90-day deployment roadmap. The analysis draws on <span className="arvintech-brand font-semibold">arvintech</span>'s engagement data, public CoreWeave documentation, and comparative benchmarking against AWS, Azure, and GCP GPU offerings.
            </p>
            <p className="font-semibold text-slate-900 text-xl border-l-4 border-brand-blue pl-5 italic">
              The SMBs that match specialized infrastructure to specialized workloads will build measurably stronger AI capabilities at materially lower cost than those that default to commodity cloud.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Landscape */}
      <section id="section-2" className="py-20 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-brand-blue font-mono text-sm font-bold">02</span>
            <div className="h-0.5 w-10 bg-brand-blue" />
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Market Context</span>
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 leading-tight">The AI Infrastructure Landscape</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-3xl">The market has bifurcated into three distinct infrastructure categories. Understanding which category fits the workload is the first strategic decision.</p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                tier: "Hyperscalers",
                examples: "AWS · Azure · GCP",
                color: "slate-700",
                strengths: "Breadth of services, enterprise sales motion, global presence, familiar to most IT teams.",
                weaknesses: "GPU capacity rationed, 30–50% premium on AI-specific hardware, complex pricing, services optimized for general compute.",
                fit: "Appropriate when AI is a small part of a larger cloud footprint and the premium is acceptable.",
              },
              {
                tier: "Specialized GPU Clouds",
                examples: "CoreWeave · Lambda · Paperspace",
                color: "brand-blue",
                strengths: "Native AI architecture, H100/A100 availability, 40–60% cost advantage, Kubernetes-native, fast provisioning.",
                weaknesses: "Narrower service catalog, less familiar to generalist IT teams, networking and integration require deliberate design.",
                fit: "The right choice when AI is the workload, not a side effect — which is increasingly true for SMBs building AI capability.",
              },
              {
                tier: "On-Premise / Appliance",
                examples: "Private GPU servers · Colocation",
                color: "brand-green",
                strengths: "Full data sovereignty, predictable capex, no egress fees, regulatory clarity for the most sensitive workloads.",
                weaknesses: "Significant upfront capital, depreciation risk on fast-moving hardware, operational overhead, slower iteration.",
                fit: "Correct when regulatory or data-locality requirements make cloud infeasible, or at very high sustained utilization.",
              },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <div className={`inline-flex px-3 py-1 rounded-full bg-${t.color}/10 text-${t.color} font-bold text-xs uppercase tracking-wider mb-3`}>{t.tier}</div>
                <p className="text-slate-500 text-xs mb-4 font-mono">{t.examples}</p>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-brand-green text-xs font-bold uppercase tracking-wider mb-1">Strengths</p>
                    <p className="text-slate-700 leading-relaxed">{t.strengths}</p>
                  </div>
                  <div>
                    <p className="text-brand-red text-xs font-bold uppercase tracking-wider mb-1">Weaknesses</p>
                    <p className="text-slate-700 leading-relaxed">{t.weaknesses}</p>
                  </div>
                  <div className="pt-3 border-t border-slate-200">
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">When It Fits</p>
                    <p className="text-slate-700 italic leading-relaxed">{t.fit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
            <p className="text-brand-blue text-xs font-bold uppercase tracking-widest mb-3">The Central Observation</p>
            <p className="text-xl md:text-2xl font-semibold text-slate-900 leading-snug">
              For SMBs building AI capability in 2026, the hyperscaler premium is no longer justified by the workload. The specialized GPU cloud category exists precisely because AI is different from general compute.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Why CoreWeave */}
      <section id="section-3" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-brand-blue font-mono text-sm font-bold">03</span>
            <div className="h-0.5 w-10 bg-brand-blue" />
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Strategic Rationale</span>
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 leading-tight">Why CoreWeave</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl">Within the specialized GPU cloud category, CoreWeave has established the most credible enterprise-grade position. Six structural advantages drive that position.</p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                num: "I",
                title: "GPU-Native Architecture",
                body: "CoreWeave was built from first principles for GPU workloads. H100, A100, and L40S clusters run with InfiniBand networking — the same fabric used by frontier AI labs. The infrastructure is not a general-purpose cloud that happens to include GPUs.",
              },
              {
                num: "II",
                title: "SMB-Viable Economics",
                body: "H100 SXM5 instances run approximately $2.00–$2.50 per hour on-demand, with reserved pricing 40–60% below comparable AWS p4d or Azure ND-series. An SMB that would pay $8K–$15K per month at a hyperscaler often runs the same workload for $3K–$6K on CoreWeave.",
              },
              {
                num: "III",
                title: "Kubernetes-Native",
                body: "CoreWeave Cloud is built on Kubernetes with standard Helm chart support, GPU operators, and native integration with open-source MLOps tooling. No proprietary SDKs. Workloads move in and out — reducing strategic lock-in risk.",
              },
              {
                num: "IV",
                title: "SOC 2 Type II Compliance",
                body: "CoreWeave maintains SOC 2 Type II certification, making it viable for professional services, financial services, and healthcare-adjacent workloads. BAAs are available for healthcare deployments. The compliance posture is sufficient for the majority of SMB regulated-industry use cases.",
              },
              {
                num: "V",
                title: "Burst + Reserved Flexibility",
                body: "The platform supports both on-demand burst capacity and long-term reserved instances. SMBs can validate workloads on-demand, then shift to reserved pricing once usage patterns stabilize — a capital structure that matches how most SMBs actually adopt infrastructure.",
              },
              {
                num: "VI",
                title: "Fast Provisioning",
                body: "GPU instances provision in minutes, not hours or days. For SMBs running iterative AI workflows — fine-tuning, batch inference, model evaluation — the feedback loop is meaningfully tighter than hyperscaler alternatives, where GPU capacity is frequently rationed.",
              },
            ].map((r, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-slate-900 to-slate-700 rounded-xl flex items-center justify-center shadow">
                    <span className="text-white font-black text-lg">{r.num}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{r.title}</h3>
                    <p className="text-slate-700 text-sm leading-relaxed">{r.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Build vs Buy vs Rent */}
      <section id="section-4" className="py-20 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-brand-blue font-mono text-sm font-bold">04</span>
            <div className="h-0.5 w-10 bg-brand-blue" />
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Decision Framework</span>
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 leading-tight">Build vs. Buy vs. Rent</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl">The infrastructure decision maps to three archetypes. Matching the archetype to the workload is more important than the specific vendor choice.</p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="text-left p-4 font-bold">Dimension</th>
                  <th className="text-left p-4 font-bold">Build (On-Prem)</th>
                  <th className="text-left p-4 font-bold">Buy (SaaS: OpenAI, Anthropic)</th>
                  <th className="text-left p-4 font-bold">Rent (CoreWeave)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { dim: "Upfront Capital", a: "High ($150K+)", b: "None", c: "Low" },
                  { dim: "Operational Cost", a: "Low (once paid)", b: "Per-token, scales with usage", c: "GPU-hour, scales with compute" },
                  { dim: "Data Sovereignty", a: "Complete", b: "Third-party processes data", c: "Your infrastructure, your control" },
                  { dim: "Model Portability", a: "Full", a2: "Yes", b: "None — locked to vendor", c: "Full — open-weight models" },
                  { dim: "Time to Deploy", a: "3–6 months", b: "Days", c: "Weeks" },
                  { dim: "Compliance Posture", a: "Strongest", b: "Vendor-dependent", c: "SOC 2 Type II, BAA available" },
                  { dim: "Best Fit", a: "Regulatory-locked data, high utilization", b: "Rapid experimentation, non-sensitive workloads", c: "Sustained AI workloads, data sensitivity, cost discipline" },
                ].map((row, i) => (
                  <tr key={i} className={`${i % 2 === 0 ? "bg-white" : "bg-slate-50"} border-b border-slate-200`}>
                    <td className="p-4 font-bold text-slate-900">{row.dim}</td>
                    <td className="p-4 text-slate-700">{row.a}</td>
                    <td className="p-4 text-slate-700">{row.b}</td>
                    <td className="p-4 text-slate-700 bg-brand-blue/5 font-medium">{row.c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "Build fits when", body: "You handle highly regulated data (defense, classified, restricted healthcare), maintain 24/7 high utilization, and have capital for a 3–5 year depreciation cycle.", color: "brand-green" },
              { label: "Buy fits when", body: "You need to move fast, the data is non-sensitive, per-token pricing is predictable at your volume, and strategic dependence on OpenAI or Anthropic is acceptable.", color: "brand-yellow" },
              { label: "Rent fits when", body: "You want production AI capability, sensitive data sovereignty, predictable GPU-hour economics, and the option to move workloads without vendor lock-in — the most common SMB profile.", color: "brand-blue" },
            ].map((c, i) => (
              <div key={i} className={`border-l-4 border-${c.color} bg-white p-5 rounded-r-xl shadow-sm`}>
                <p className={`text-${c.color} text-xs font-bold uppercase tracking-widest mb-2`}>{c.label}</p>
                <p className="text-slate-700 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Technical Architecture */}
      <section id="section-5" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-brand-blue font-mono text-sm font-bold">05</span>
            <div className="h-0.5 w-10 bg-brand-blue" />
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Technical Architecture</span>
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 leading-tight">CoreWeave Technical Architecture for SMB Deployments</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl">A practical architectural reference — what you are actually deploying, how the pieces interact, and what SMBs need to understand before committing.</p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Compute Tier</h3>
              <div className="space-y-3">
                {[
                  { hw: "H100 SXM5", spec: "80GB HBM3, ~$2.00–$2.50/hr", use: "Fine-tuning, high-throughput inference, large model serving" },
                  { hw: "A100 80GB", spec: "Reserved-optimized, ~$1.40/hr", use: "Cost-optimized inference, batch processing, most production workloads" },
                  { hw: "L40S", spec: "48GB GDDR6, ~$1.00/hr", use: "Multi-modal, vision tasks, lower-intensity inference" },
                  { hw: "H200 (available 2026)", spec: "141GB HBM3e", use: "Largest model serving, multi-tenant inference platforms" },
                ].map((h, i) => (
                  <div key={i} className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-bold text-slate-900 font-mono">{h.hw}</p>
                      <p className="text-xs text-slate-500 font-mono">{h.spec}</p>
                    </div>
                    <p className="text-slate-600 text-sm">{h.use}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Platform Services</h3>
              <div className="space-y-3">
                {[
                  { svc: "Kubernetes (managed)", desc: "Native CW-managed K8s with GPU operator, auto-scaling, and standard tooling support." },
                  { svc: "Object Storage", desc: "S3-compatible storage co-located with compute, engineered for training data and model artifacts." },
                  { svc: "Virtual Private Cloud", desc: "Network isolation between tenants, private subnets for sensitive workloads." },
                  { svc: "InfiniBand Fabric", desc: "400 Gb/s non-blocking interconnect — essential for multi-node training, rarely available at hyperscalers without premium tiers." },
                  { svc: "Fast NVMe Storage", desc: "Local high-throughput storage attached to GPU nodes for dataset caching and intermediate state." },
                  { svc: "Managed Model Serving", desc: "Pre-built containers for common inference patterns (vLLM, Triton) with autoscaling." },
                ].map((s, i) => (
                  <div key={i} className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">{s.svc}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Network & Security */}
          <div className="bg-slate-900 rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Network &amp; Security Design
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              {[
                { title: "Private Networking", body: "Use CoreWeave VPC with dedicated subnets. Never expose inference endpoints to the public internet without an authenticated gateway." },
                { title: "VPN / Direct Connect", body: "For SMBs with on-premise systems, establish site-to-site VPN or direct interconnect to keep inference traffic off the public internet." },
                { title: "API Authentication", body: "Implement key rotation, rate limiting, and request logging. Use K8s secrets management or HashiCorp Vault for credential storage." },
                { title: "Data Classification", body: "Before ingesting documents, classify them. PII, PHI, and regulated data should be scrubbed, tokenized, or quarantined before entering any LLM pipeline." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-bold text-white mb-1">{item.title}</p>
                    <p className="text-slate-400 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Use Cases */}
      <section id="section-6" className="py-20 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-brand-blue font-mono text-sm font-bold">06</span>
            <div className="h-0.5 w-10 bg-brand-blue" />
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Use Cases</span>
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 leading-tight">Use Case Patterns &amp; Expected Economics</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl">Five production patterns account for the majority of high-ROI SMB deployments on CoreWeave. Each includes its economic profile and the conditions under which it wins.</p>

          <div className="space-y-6">
            {[
              {
                num: "01",
                color: "brand-blue",
                title: "Private LLM Inference",
                subtitle: "Run your own model — on your infrastructure",
                body: "Deploy Llama 3, Mistral, or Mixtral on CoreWeave GPU clusters for internal use. Employees interact with a private AI assistant trained on company documents — zero data transmitted to OpenAI, Anthropic, or any third party.",
                metrics: [
                  { label: "Cost per 1K tokens", value: "$0.001–$0.003", ref: "vs. $0.01–$0.06 on GPT-4 API" },
                  { label: "Data sovereignty", value: "Complete", ref: "no third-party processing" },
                  { label: "Model portability", value: "Yes", ref: "open-weight, you own the weights" },
                ],
                winsWhen: "Sustained usage &gt; 10M tokens/month, data sensitivity requires it, or per-token SaaS costs are becoming unpredictable.",
              },
              {
                num: "02",
                color: "brand-green",
                title: "Document Intelligence Pipeline",
                subtitle: "Extract, summarize, and route at scale",
                body: "Process contracts, invoices, reports, and compliance documents through a RAG pipeline running on CoreWeave. Ten thousand documents can be ingested, embedded, and made queryable in hours rather than weeks.",
                metrics: [
                  { label: "Manual review reduction", value: "70–90%", ref: "on routine extraction tasks" },
                  { label: "Ingestion throughput", value: "10K docs/day", ref: "on a single A100 node" },
                  { label: "Query latency", value: "< 2 sec", ref: "retrieval + generation, p95" },
                ],
                winsWhen: "Document volume is meaningful (&gt; 5K docs/month), or a queryable institutional knowledge base would change how the organization works.",
              },
              {
                num: "03",
                color: "purple-500",
                title: "Fine-Tuned Domain Models",
                subtitle: "AI that speaks your industry's language",
                body: "Fine-tune a base model on industry-specific datasets — legal case law, medical protocols, financial regulations, technical manuals. The result is a model that applies your firm's standards, running on compute you control.",
                metrics: [
                  { label: "Domain accuracy gain", value: "3–5×", ref: "vs. general-purpose models" },
                  { label: "Training time (H100)", value: "4–24 hrs", ref: "for most SMB fine-tunes" },
                  { label: "Ownership", value: "Yours", ref: "model weights portable" },
                ],
                winsWhen: "Your domain has specialized terminology, standards, or reasoning patterns where general models consistently underperform.",
              },
              {
                num: "04",
                color: "brand-yellow",
                title: "AI-Augmented Customer Operations",
                subtitle: "Intelligent routing, drafting, escalation",
                body: "Deploy AI into customer service, sales follow-up, and intake workflows. Models running on CoreWeave draft responses, classify requests, extract intent, and route tickets — integrated into your CRM or helpdesk via API.",
                metrics: [
                  { label: "First-response reduction", value: "50–70%", ref: "in time-to-reply" },
                  { label: "Tone consistency", value: "Uniform", ref: "across all channels" },
                  { label: "Deflection rate", value: "25–45%", ref: "on tier-1 inquiries" },
                ],
                winsWhen: "Inbound volume is meaningful, response time drives revenue or retention, or consistency is a known weakness.",
              },
              {
                num: "05",
                color: "brand-red",
                title: "Batch Analytics &amp; Reporting",
                subtitle: "Weekly AI-generated business intelligence",
                body: "Scheduled AI analytics — weekly performance summaries, anomaly detection across operational data, NL report generation. CoreWeave's burst capacity means you pay only when these jobs run.",
                metrics: [
                  { label: "Report generation", value: "Minutes", ref: "from raw data to written narrative" },
                  { label: "Compute cost profile", value: "Pay-per-run", ref: "burst-only, no always-on cost" },
                  { label: "Anomaly coverage", value: "Sales + ops + support", ref: "multi-source detection" },
                ],
                winsWhen: "Executive team relies on regular narrative reporting, or pattern detection across siloed data sources would add value.",
              },
            ].map((uc, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className={`text-6xl font-black text-${uc.color}/20 leading-none`}>{uc.num}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-1" dangerouslySetInnerHTML={{ __html: uc.title }} />
                    <p className={`text-${uc.color} text-sm font-semibold mb-3`}>{uc.subtitle}</p>
                    <p className="text-slate-600 text-sm leading-relaxed mb-5">{uc.body}</p>

                    <div className="grid md:grid-cols-3 gap-3 mb-4">
                      {uc.metrics.map((m, j) => (
                        <div key={j} className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                          <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">{m.label}</p>
                          <p className={`text-${uc.color} font-black text-lg leading-tight`}>{m.value}</p>
                          <p className="text-slate-500 text-xs mt-1">{m.ref}</p>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-slate-200">
                      <p className="text-slate-900 text-sm">
                        <span className={`text-${uc.color} font-bold`}>Wins when:</span>{" "}
                        <span dangerouslySetInnerHTML={{ __html: uc.winsWhen }} />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Reference Architecture */}
      <section id="section-7" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-brand-blue font-mono text-sm font-bold">07</span>
            <div className="h-0.5 w-10 bg-brand-blue" />
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Reference Stack</span>
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 leading-tight">Reference Architecture &amp; Technology Stack</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl">A recommended three-layer stack for SMB AI deployments on CoreWeave — optimized for cost, operational simplicity, and strategic portability.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                layer: "Compute Layer",
                color: "brand-blue",
                items: [
                  { name: "CoreWeave H100 SXM5", note: "Primary inference & fine-tuning" },
                  { name: "CoreWeave A100 80GB", note: "Cost-optimized batch workloads" },
                  { name: "CoreWeave L40S", note: "Multi-modal and vision tasks" },
                  { name: "Kubernetes", note: "Orchestration & autoscaling" },
                  { name: "NVIDIA GPU Operator", note: "Driver and runtime management" },
                ],
              },
              {
                layer: "Model &amp; Inference Layer",
                color: "purple-500",
                items: [
                  { name: "vLLM", note: "High-throughput LLM inference server" },
                  { name: "Llama 3.1 / Mistral / Mixtral", note: "Open-weight base models" },
                  { name: "HuggingFace TEI", note: "Text embeddings inference" },
                  { name: "Ollama", note: "Local model management" },
                  { name: "LoRA / QLoRA", note: "Efficient fine-tuning" },
                ],
              },
              {
                layer: "Application Layer",
                color: "brand-green",
                items: [
                  { name: "Qdrant / Weaviate", note: "Vector database for RAG" },
                  { name: "LangChain / LlamaIndex", note: "Orchestration and retrieval logic" },
                  { name: "FastAPI", note: "Internal API gateway" },
                  { name: "Intelligence Amplifier (IA)", note: "ArvinTech's AI interface layer" },
                  { name: "Grafana + Prometheus", note: "Observability and usage metrics" },
                ],
              },
            ].map((layer, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm">
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 bg-${layer.color}/10 rounded-full mb-5`}>
                  <span className={`text-${layer.color} text-xs font-bold uppercase tracking-wider`} dangerouslySetInnerHTML={{ __html: layer.layer }} />
                </div>
                <div className="space-y-3">
                  {layer.items.map((item, j) => (
                    <div key={j} className="flex items-start gap-3 pb-3 border-b border-slate-200 last:border-0 last:pb-0">
                      <div className={`w-1.5 h-1.5 bg-${layer.color} rounded-full flex-shrink-0 mt-1.5`} />
                      <div>
                        <p className="text-slate-900 text-sm font-semibold font-mono">{item.name}</p>
                        <p className="text-slate-500 text-xs">{item.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Financial Model */}
      <section id="section-8" className="py-20 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-brand-blue font-mono text-sm font-bold">08</span>
            <div className="h-0.5 w-10 bg-brand-blue" />
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Economics</span>
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 leading-tight">Financial Model: TCO vs. Hyperscalers</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl">A comparative total cost of ownership analysis across three representative SMB AI deployments. All figures reflect 12-month run-rate at steady-state utilization.</p>

          {/* Comparative TCO Table */}
          <div className="overflow-x-auto mb-10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="text-left p-4 font-bold">Workload Profile</th>
                  <th className="text-right p-4 font-bold">AWS (p4d)</th>
                  <th className="text-right p-4 font-bold">Azure (ND H100)</th>
                  <th className="text-right p-4 font-bold bg-brand-blue">CoreWeave</th>
                  <th className="text-right p-4 font-bold">CW Savings</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { profile: "Starter: Internal RAG assistant", sub: "1× A100, 500K queries/mo", aws: "$3,800/mo", azure: "$3,600/mo", cw: "$1,400/mo", savings: "~60%" },
                  { profile: "Professional: Multi-dept deployment", sub: "2× H100 reserved, 5M queries/mo", aws: "$11,200/mo", azure: "$10,800/mo", cw: "$4,800/mo", savings: "~56%" },
                  { profile: "Business: Fine-tuning + inference cluster", sub: "4× H100, continuous workload", aws: "$22,400/mo", azure: "$21,500/mo", cw: "$9,600/mo", savings: "~57%" },
                  { profile: "Enterprise SMB: Multi-tenant AI platform", sub: "8× H100, HA, fine-tune + inference", aws: "$44,800/mo", azure: "$43,200/mo", cw: "$18,400/mo", savings: "~59%" },
                ].map((row, i) => (
                  <tr key={i} className={`${i % 2 === 0 ? "bg-white" : "bg-slate-50"} border-b border-slate-200`}>
                    <td className="p-4">
                      <p className="font-bold text-slate-900">{row.profile}</p>
                      <p className="text-xs text-slate-500 font-mono">{row.sub}</p>
                    </td>
                    <td className="p-4 text-right text-slate-600 font-mono">{row.aws}</td>
                    <td className="p-4 text-right text-slate-600 font-mono">{row.azure}</td>
                    <td className="p-4 text-right font-black text-brand-blue font-mono bg-brand-blue/5">{row.cw}</td>
                    <td className="p-4 text-right font-black text-brand-green">{row.savings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-slate-500 italic mb-10">Pricing based on CoreWeave published rates, AWS p4d on-demand, and Azure ND H100 v5 pricing as of Q1 2026. Reserved instance discounts applied uniformly. Individual pricing may vary with commitment terms and support contracts.</p>

          {/* Cost Composition */}
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Beyond Infrastructure: True Cost Composition</h3>
          <p className="text-slate-600 mb-6">Infrastructure is only one component of AI program cost. A complete budget accounts for the following:</p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { pct: "40%", label: "Infrastructure (CoreWeave)", body: "GPU-hours, storage, networking. Predictable and scalable with utilization.", color: "brand-blue" },
              { pct: "25%", label: "Integration &amp; Engineering", body: "API integrations into existing systems, custom orchestration, CI/CD pipelines.", color: "purple-500" },
              { pct: "20%", label: "Data Preparation", body: "Document inventory, classification, embedding, and pipeline construction. Frequently underestimated.", color: "brand-green" },
              { pct: "10%", label: "Managed Operations", body: "Ongoing monitoring, model updates, support, and incident response. Partner-delivered.", color: "brand-yellow" },
              { pct: "5%", label: "Training &amp; Change Mgmt", body: "End-user training, workflow redesign, governance adoption. Small line item, large ROI impact.", color: "brand-red" },
              { pct: "—", label: "Total Budget Guidance", body: "Budget infrastructure at ~40% of total program cost. SMBs that budget 100% for infrastructure consistently underfund the program and stall before production.", color: "slate-700" },
            ].map((c, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <p className={`text-4xl font-black text-${c.color} mb-1`}>{c.pct}</p>
                <p className={`text-${c.color} text-xs font-bold uppercase tracking-wider mb-2`} dangerouslySetInnerHTML={{ __html: c.label }} />
                <p className="text-slate-600 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Risk & Governance */}
      <section id="section-9" className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-brand-blue font-mono text-sm font-bold">09</span>
            <div className="h-0.5 w-10 bg-brand-blue" />
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Risk &amp; Governance</span>
          </div>
          <h2 className="text-4xl font-extrabold mb-4 leading-tight">Risk Assessment &amp; Governance</h2>
          <p className="text-lg text-slate-400 mb-10 max-w-3xl">Infrastructure decisions carry specific risks that differ from application-layer risk. The following require explicit mitigation before commitment.</p>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              { risk: "Vendor Viability", body: "Any specialized cloud carries business-continuity risk. CoreWeave's rapid growth and major customer contracts reduce this — but it remains a category to monitor.", mitigation: "Maintain model portability (open-weight models), avoid proprietary APIs, keep a documented exit plan." },
              { risk: "Data Egress Costs", body: "Moving data out of any cloud is priced and can become meaningful at scale. CoreWeave's egress pricing is competitive but not zero.", mitigation: "Co-locate storage with compute. Keep training data in CoreWeave object storage. Plan for egress during strategic moves, not daily operations." },
              { risk: "Compliance Posture", body: "SOC 2 Type II is sufficient for most SMB workloads, but specific regulated industries require additional controls (HIPAA BAA, PCI, FedRAMP, etc).", mitigation: "Validate compliance requirements before committing. Request current certifications and BAAs. Segregate regulated workloads." },
              { risk: "Operational Complexity", body: "Kubernetes-native infrastructure assumes a level of operational capability that many SMB IT teams do not have in-house.", mitigation: "Engage a partner. This is precisely the category where managed services deliver disproportionate value. Do not attempt DIY in the first 12 months." },
              { risk: "Capacity Availability", body: "GPU demand remains high globally. Reserved capacity typically available; on-demand capacity can be rationed during peak demand.", mitigation: "Reserve capacity for production workloads. Use on-demand only for experimentation. Build fallback paths into critical workflows." },
              { risk: "Strategic Lock-In", body: "Any cloud commitment creates some lock-in. The question is how portable your workloads remain. Kubernetes-native helps; proprietary APIs hurt.", mitigation: "Architect for portability: standard K8s manifests, open-weight models, abstraction layers for inference endpoints, documented migration runbooks." },
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

      {/* 10. 90-Day Roadmap */}
      <section id="section-10" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-brand-blue font-mono text-sm font-bold">10</span>
            <div className="h-0.5 w-10 bg-brand-blue" />
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Execution Plan</span>
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 leading-tight">The 90-Day Deployment Roadmap</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl">A sequenced program that moves an organization from CoreWeave evaluation to production AI capability within 90 days — with defined outcomes at each phase.</p>

          <div className="space-y-8">
            {[
              {
                phase: "Phase 1",
                weeks: "Days 1–30",
                title: "Assessment &amp; Foundation",
                color: "brand-blue",
                outcome: "CoreWeave account provisioned. Baseline K8s cluster operational. Priority use case selected. Data readiness addressed.",
                activities: [
                  "Audit existing IT infrastructure, data assets, and target workflows",
                  "Identify 2–3 AI use cases ranked by ROI and feasibility",
                  "Define data governance and security requirements",
                  "Provision CoreWeave account and reserved capacity",
                  "Set up Kubernetes cluster, VPC networking, and security baseline",
                  "Select and benchmark candidate base models for target tasks",
                ],
              },
              {
                phase: "Phase 2",
                weeks: "Days 31–60",
                title: "Build &amp; Integrate",
                color: "purple-500",
                outcome: "vLLM inference stack deployed. RAG pipeline operational. API integrations live. Pilot running with 10–20 users.",
                activities: [
                  "Deploy vLLM inference stack with target model on CoreWeave",
                  "Build document ingestion, chunking, and embedding pipeline",
                  "Stand up vector database and RAG retrieval layer",
                  "Integrate AI endpoints into CRM, helpdesk, email, or intake systems",
                  "Run controlled pilot with 10–20 users in the target department",
                  "Collect usage data, iterate on prompts, tune retrieval quality",
                ],
              },
              {
                phase: "Phase 3",
                weeks: "Days 61–90",
                title: "Scale &amp; Operate",
                color: "brand-green",
                outcome: "Use case live in production. On-demand transitioned to reserved pricing. Monitoring and governance operational. Operational ownership transferred.",
                activities: [
                  "Expand deployment to full department or organization",
                  "Transition from on-demand to reserved CoreWeave pricing",
                  "Implement monitoring, alerting, usage analytics, cost dashboards",
                  "Begin fine-tuning pipeline if domain-specific model is required",
                  "Document SOPs for AI-assisted workflows and governance",
                  "Establish ongoing managed services engagement with arvintech",
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

      {/* 11. Partner Role */}
      <section id="section-11" className="py-20 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-brand-blue font-mono text-sm font-bold">11</span>
            <div className="h-0.5 w-10 bg-brand-blue" />
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Partnership Model</span>
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 leading-tight">The Role of a Strategic Partner</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-3xl">CoreWeave provides infrastructure. What SMBs need is an operational partner who bridges infrastructure capability to business outcomes — and remains accountable through production.</p>

          <div className="bg-white rounded-2xl p-10 border border-slate-200 shadow-sm mb-10">
            <p className="text-sm text-brand-blue font-bold uppercase tracking-widest mb-4">The <span className="arvintech-brand">arvintech</span> Model</p>
            <p className="text-2xl font-semibold text-slate-900 leading-snug mb-6">
              We have integrated emerging technology into SMB operations for 25 years. AI on specialized GPU infrastructure is the current chapter; the discipline is the same.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              { title: "Infrastructure Architecture", body: "Design and provision the CoreWeave environment — GPU selection, Kubernetes configuration, networking, and security — tailored to workload profile and compliance posture." },
              { title: "Model Selection &amp; Deployment", body: "Select, benchmark, and deploy open-weight models for target use cases. Configure vLLM inference servers for throughput, latency, and cost targets." },
              { title: "RAG Pipeline Development", body: "Build document ingestion, chunking, embedding, and retrieval pipelines. Connect existing document libraries to private AI systems." },
              { title: "System Integration", body: "Integrate AI capabilities into existing tools — CRM, ERP, helpdesk, email — via API, webhook, or embedded UI components." },
              { title: "Fine-Tuning &amp; Customization", body: "Run supervised fine-tuning on proprietary data when general models need domain specialization. Manage training, evaluation, and versioning." },
              { title: "Managed Operations", body: "Ongoing monitoring, model updates, infrastructure management, and support. Managed IT services since 2000 — AI operations is a natural extension." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2" dangerouslySetInnerHTML={{ __html: item.title }} />
                <p className="text-slate-700 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
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
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">The infrastructure decision is a strategic decision.</h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            SMBs that match specialized infrastructure to specialized workloads will build measurably stronger AI capability at materially lower cost. Those who default to the hyperscaler already in their environment will pay a premium for commodity cloud running a workload it was not designed for.
          </p>
          <p className="text-lg text-slate-400 mb-10 italic">
            The first step is not a contract. It is an architecture conversation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/work-with-us"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue text-white rounded-xl font-bold text-lg hover:bg-blue-600 transition-colors shadow-xl"
            >
              Schedule an Architecture Review
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/ai-readiness"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white border-2 border-white/30 rounded-xl font-bold text-lg hover:bg-white/20 transition-colors"
            >
              Read: AI Readiness Imperative
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-700 text-left">
            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-4">About This Paper</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              This white paper was prepared by <span className="arvintech-brand font-semibold text-white">arvintech</span> for distribution to SMB leadership evaluating AI infrastructure commitments in 2026. It synthesizes CoreWeave public documentation, comparative benchmarking against AWS, Azure, and GCP GPU offerings, and findings from <span className="arvintech-brand font-semibold text-white">arvintech</span> client engagements across professional services, retail, and healthcare segments. All financial figures represent observed ranges and published rates, not guarantees. Pricing valid as of Q1 2026 and subject to change. For individual architecture review, contact <span className="arvintech-brand font-semibold text-white">arvintech</span>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
