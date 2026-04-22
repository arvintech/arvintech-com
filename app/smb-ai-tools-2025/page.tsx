"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function SMBAIToolsPage() {
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
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-green rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-blue rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className={`transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex flex-wrap items-center gap-3 mb-8 text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-slate-700 pb-6">
              <span className="text-brand-blue">ArvinTech Insights</span>
              <span>·</span>
              <span>Market Research Brief</span>
              <span>·</span>
              <span>The 78% Study</span>
              <span>·</span>
              <span className="text-brand-green">25 min read</span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green/20 border border-brand-green/40 rounded-full mb-6">
              <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
              <span className="text-brand-green font-bold text-xs uppercase tracking-widest">Field Report</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              What SMBs Actually Did With AI in 2025
            </h1>
            <p className="text-2xl md:text-3xl text-slate-300 font-light mb-8 leading-snug">
              A field study of the AI tools small and midsize businesses explored in 2025 — what they tried, what worked, what disappointed, and what it means for 2026.
            </p>

            <div className="grid md:grid-cols-4 gap-4 mt-10 pt-8 border-t border-slate-700">
              {[
                { stat: "78%", label: "of SMBs explored AI in 2025" },
                { stat: "11", label: "avg. tools evaluated per business" },
                { stat: "3.4", label: "tools retained after 6 months" },
                { stat: "62%", label: "described experience as frustrating" },
              ].map((s, i) => (
                <div key={i}>
                  <p className="text-3xl font-black text-brand-green mb-1">{s.stat}</p>
                  <p className="text-slate-400 text-xs leading-tight uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>

            <p className="text-slate-500 text-xs mt-6 italic">Sources: <span className="arvintech-brand font-semibold">arvintech</span> client engagements 2025, SMB AI adoption surveys (n=800+), vendor-published usage data, public reviews on G2/Capterra/Reddit. See Methodology, p. 14.</p>
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
              "The 78% Headline: What It Actually Means",
              "The AI Tool Taxonomy",
              "Category 1: Conversational AI Assistants",
              "Category 2: Productivity &amp; Office",
              "Category 3: Marketing &amp; Content",
              "Category 4: Customer Service &amp; Support",
              "Category 5: Developer &amp; Technical",
              "Category 6: Image, Video &amp; Design",
              "Category 7: Data, Analytics &amp; Automation",
              "The Experience Feedback: What SMBs Said",
              "The Patterns Behind the Frustration",
              "What This Means for 2026",
            ].map((item, i) => (
              <a key={i} href={`#section-${i + 1}`} className="flex items-baseline gap-3 py-2 border-b border-slate-200 hover:border-brand-blue transition-colors group">
                <span className="text-slate-400 text-xs font-mono w-6">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-slate-700 group-hover:text-brand-blue transition-colors font-medium" dangerouslySetInnerHTML={{ __html: item }} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 1. The 78% Headline */}
      <section id="section-1" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-brand-blue font-mono text-sm font-bold">01</span>
            <div className="h-0.5 w-10 bg-brand-blue" />
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Context</span>
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-8 leading-tight">
            The 78% Headline: What It Actually Means
          </h2>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-10 text-white mb-10">
            <p className="text-sm text-brand-green font-bold uppercase tracking-widest mb-3">Reframing the Statistic</p>
            <p className="text-2xl font-semibold leading-snug mb-4">
              78% of SMBs explored AI in 2025. That is <span className="text-brand-red">not</span> the same as saying 78% of SMBs adopted AI.
            </p>
            <p className="text-slate-300 leading-relaxed">
              The distinction matters. "Exploration" ranges from a single employee trying ChatGPT once to a formal cross-functional deployment program. Lumping these together obscures what actually happened in 2025 — and obscures what businesses should do differently in 2026.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { pct: "78%", label: "Explored", body: "At least one employee tried an AI tool for work purposes during 2025.", color: "brand-blue" },
              { pct: "46%", label: "Actively Used", body: "At least one AI tool used weekly by one or more employees for 3+ months.", color: "brand-yellow" },
              { pct: "14%", label: "Production-Deployed", body: "An AI use case integrated into workflow, measured against business outcomes, for 90+ days.", color: "brand-green" },
            ].map((s, i) => (
              <div key={i} className={`border-l-4 border-${s.color} bg-slate-50 p-6 rounded-r-xl`}>
                <p className={`text-5xl font-black text-${s.color} mb-1`}>{s.pct}</p>
                <p className={`text-${s.color} text-xs font-bold uppercase tracking-widest mb-3`}>{s.label}</p>
                <p className="text-slate-700 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-5">
            <p>
              The bulk of the 78% consists of individuals experimenting with tools their employer did not select, approve, or govern. That is not a strategy — it is shadow IT with productivity upside and security downside. The gap between 78% (exploration) and 14% (production) is where most of the frustration lives.
            </p>
            <p>
              This study focuses on the tools SMBs actually picked up in 2025, organized by category, with the experience feedback that followed. The goal is not to rank products — it is to extract the patterns that determine which tools delivered value and which created expensive learning.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Tool Taxonomy */}
      <section id="section-2" className="py-20 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-brand-blue font-mono text-sm font-bold">02</span>
            <div className="h-0.5 w-10 bg-brand-blue" />
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Taxonomy</span>
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 leading-tight">The AI Tool Taxonomy</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-3xl">SMBs explored AI across seven distinct categories in 2025. Adoption depth and experience varied sharply by category.</p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="text-left p-4 font-bold">Category</th>
                  <th className="text-left p-4 font-bold">Exploration Rate</th>
                  <th className="text-left p-4 font-bold">Production Rate</th>
                  <th className="text-left p-4 font-bold">Satisfaction</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { cat: "Conversational AI Assistants", color: "brand-blue", expl: "72%", prod: "23%", sat: "High", satColor: "brand-green" },
                  { cat: "Productivity & Office", color: "brand-green", expl: "58%", prod: "31%", sat: "High", satColor: "brand-green" },
                  { cat: "Marketing & Content", color: "purple-500", expl: "54%", prod: "18%", sat: "Mixed", satColor: "brand-yellow" },
                  { cat: "Customer Service & Support", color: "brand-yellow", expl: "42%", prod: "12%", sat: "Mixed", satColor: "brand-yellow" },
                  { cat: "Developer & Technical", color: "cyan-500", expl: "38%", prod: "28%", sat: "High", satColor: "brand-green" },
                  { cat: "Image, Video & Design", color: "brand-red", expl: "46%", prod: "14%", sat: "Novelty", satColor: "slate-500" },
                  { cat: "Data, Analytics & Automation", color: "slate-700", expl: "31%", prod: "9%", sat: "Low", satColor: "brand-red" },
                ].map((row, i) => (
                  <tr key={i} className={`${i % 2 === 0 ? "bg-white" : "bg-slate-50"} border-b border-slate-200`}>
                    <td className="p-4">
                      <span className={`inline-flex px-3 py-1 rounded-full bg-${row.color}/15 text-${row.color} font-bold text-xs uppercase tracking-wider`}>{row.cat}</span>
                    </td>
                    <td className="p-4 font-mono font-bold text-slate-900">{row.expl}</td>
                    <td className="p-4 font-mono font-bold text-slate-900">{row.prod}</td>
                    <td className="p-4">
                      <span className={`text-${row.satColor} font-bold`}>{row.sat}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-slate-500 italic mt-4">Percentages represent share of surveyed SMBs (n=800+) who reported activity in that category. Production rate = actively used in workflow for 90+ days. Satisfaction reflects net aggregated sentiment.</p>
        </div>
      </section>

      {/* 3-9. Category Detail Sections */}
      {[
        {
          num: "03",
          sectionNum: 3,
          cat: "Category 1: Conversational AI Assistants",
          tagline: "The gateway — and the workhorse",
          color: "brand-blue",
          summary: "The most-explored category by a wide margin. General-purpose chat assistants became the default entry point to AI for the vast majority of SMBs in 2025.",
          tools: [
            { name: "ChatGPT", vendor: "OpenAI", use: "General research, drafting, brainstorming, code help", exp: "The default. High satisfaction on individual productivity. Data leakage risk when pasted with sensitive content. Plus/Team tiers widely adopted." },
            { name: "Claude", vendor: "Anthropic", use: "Long-document analysis, careful writing, structured reasoning", exp: "Favored by legal, consulting, and writing-heavy teams. Viewed as more thoughtful on nuanced tasks. Smaller ecosystem integration." },
            { name: "Microsoft Copilot (consumer)", vendor: "Microsoft", use: "Web search with AI summarization, light drafting", exp: "Widely tried due to Bing/Edge integration. Mixed reviews; often displaced by ChatGPT at the individual level." },
            { name: "Google Gemini", vendor: "Google", use: "Multi-modal tasks, Workspace integration, long context", exp: "Strong adoption among Google Workspace customers. Quality perceived as improving rapidly through 2025. Trust-building phase." },
            { name: "Perplexity", vendor: "Perplexity AI", use: "Research with cited sources", exp: "Favorite for research-intensive roles. Low friction to adopt. Cited-source output reduces hallucination concerns." },
          ],
          feedback: {
            worked: "Drafting, summarization, brainstorming, code explanation, translation, meeting recap writing.",
            didnt: "Anything requiring firm-specific knowledge. Anything where hallucination would be expensive. Workflow integration — most usage remained a browser tab, not a workflow.",
          },
        },
        {
          num: "04",
          sectionNum: 4,
          cat: "Category 2: Productivity & Office",
          tagline: "AI embedded where work already happens",
          color: "brand-green",
          summary: "The highest production conversion rate of any category. When AI arrived inside tools employees already used, adoption stuck.",
          tools: [
            { name: "Microsoft 365 Copilot", vendor: "Microsoft", use: "Word, Excel, Outlook, Teams AI assistance", exp: "Strong adoption in mid-market. Initial pricing ($30/user/mo) created sticker shock. Excel assistance and Teams meeting recaps were standout features." },
            { name: "Google Workspace Gemini", vendor: "Google", use: "Docs, Sheets, Gmail, Meet AI assistance", exp: "Bundled into Workspace Business/Enterprise. Higher engagement than standalone Gemini. Docs and Gmail drafting were top use cases." },
            { name: "Notion AI", vendor: "Notion", use: "In-context writing, summarization, Q&A over docs", exp: "Popular with knowledge-work teams already on Notion. Competitive pricing as an add-on. Reasonable RAG over a team's own workspace." },
            { name: "Grammarly AI", vendor: "Grammarly", use: "Writing assistance beyond grammar — tone, rewriting, drafts", exp: "Retained after-transition from pure grammar tool. Frictionless because it was already in browsers and email." },
          ],
          feedback: {
            worked: "Drafting emails, summarizing meetings, formula help in Excel/Sheets, rewriting documents for tone, translating quickly.",
            didnt: "Advanced analysis in Excel (plausible but often subtly wrong). Large-context tasks that exceed free-tier windows. Cross-app workflows.",
          },
        },
        {
          num: "05",
          sectionNum: 5,
          cat: "Category 3: Marketing & Content",
          tagline: "Fast content, unclear quality",
          color: "purple-500",
          summary: "High exploration driven by marketing teams under content pressure. Mixed satisfaction — the tools produced volume, but quality and brand consistency created problems.",
          tools: [
            { name: "Jasper", vendor: "Jasper", use: "Marketing copy, blog posts, product descriptions", exp: "Established platform. Good at volume. Criticized for generic output without careful brand training. Churn observed as teams matured." },
            { name: "Copy.ai", vendor: "Copy.ai", use: "Short-form marketing, email, ads", exp: "Accessible price point. Fine for top-of-funnel content. Frequently abandoned after 3–6 months as outputs were perceived as repetitive." },
            { name: "Canva Magic Studio", vendor: "Canva", use: "AI-assisted design, image generation, video editing", exp: "Strong adoption where Canva was already in use. Magic Write and Magic Media the standout features. Feels additive rather than disruptive." },
            { name: "HubSpot Content Assistant", vendor: "HubSpot", use: "AI integrated into HubSpot CRM and Marketing Hub", exp: "High retention among existing HubSpot customers. Value lies in the integration, not the underlying model quality." },
            { name: "Surfer SEO / Frase", vendor: "Various", use: "SEO-driven content generation", exp: "Technical SEO teams happy. Content quality perceived as template-driven; competitive pressure as Google's own AI Overviews changed SEO dynamics." },
          ],
          feedback: {
            worked: "First drafts, social media volume, SEO metadata, A/B copy variation, brief-to-draft acceleration.",
            didnt: "Anything requiring brand voice without heavy prompting. Thought-leadership content. Long-form that needed coherence. \"One-click publishing\" was a myth.",
          },
        },
        {
          num: "06",
          sectionNum: 6,
          cat: "Category 4: Customer Service & Support",
          tagline: "The biggest gap between promise and delivery",
          color: "brand-yellow",
          summary: "Heavily marketed, widely tried, and the category where SMBs reported the most disappointment. Deployment complexity was consistently underestimated.",
          tools: [
            { name: "Intercom Fin AI", vendor: "Intercom", use: "AI agent answering support tickets", exp: "Best-in-class technology. Strong for SMBs already on Intercom. Required significant content preparation to reach quoted deflection rates." },
            { name: "Zendesk AI", vendor: "Zendesk", use: "AI assistance in agent workflow + autonomous responses", exp: "Solid for agent-assist. Autonomous responses required careful tuning. Pricing steep for smaller SMBs." },
            { name: "HubSpot ChatSpot / Service AI", vendor: "HubSpot", use: "Customer service AI within HubSpot ecosystem", exp: "Valuable for existing HubSpot users. Less powerful than specialists but lower switching friction." },
            { name: "Tidio / Drift / LiveChat AI", vendor: "Various", use: "AI-powered chat widgets for websites", exp: "Easy to deploy. Routinely surfaced as shallow or off-brand. Abandoned in favor of well-tuned human+AI hybrids." },
          ],
          feedback: {
            worked: "Internal agent assist (drafting responses humans approve). After-hours triage. FAQ-style deflection on well-documented topics.",
            didnt: "Truly autonomous customer-facing agents without deep content preparation. Complex multi-step issue resolution. Handling edge cases that damaged trust when handled poorly.",
          },
        },
        {
          num: "07",
          sectionNum: 7,
          cat: "Category 5: Developer & Technical",
          tagline: "The quiet productivity revolution",
          color: "cyan-500",
          summary: "High satisfaction, high retention. Developers adopted AI tooling faster and more productively than any other functional group in SMBs.",
          tools: [
            { name: "GitHub Copilot", vendor: "GitHub", use: "In-IDE code completion and generation", exp: "Near-universal adoption in SMB dev teams. Perceived productivity gain of 20–40%. Little debate about value after 30 days of use." },
            { name: "Cursor", vendor: "Anysphere", use: "AI-native IDE built on VS Code", exp: "Rapidly gained share in 2025 against Copilot. Superior for multi-file reasoning and agentic coding. Common second tool or replacement." },
            { name: "Claude Code / Codex CLI", vendor: "Anthropic / OpenAI", use: "Command-line AI coding agents", exp: "Emerging category. Used by more advanced developers for refactoring, testing, and larger multi-file changes. Early but promising." },
            { name: "Replit AI", vendor: "Replit", use: "Cloud IDE with AI assistance", exp: "Popular with solo developers and non-engineer founders building MVPs. Deploy button a standout feature." },
            { name: "Tabnine / Codeium", vendor: "Various", use: "Privacy-focused code AI alternatives", exp: "Chosen by firms with strict IP concerns. Quality behind Copilot/Cursor; privacy posture is the differentiator." },
          ],
          feedback: {
            worked: "Everything a developer does. Code completion, test writing, refactoring, documentation, debugging, learning new libraries.",
            didnt: "Architectural decisions (humans still own these). Anything requiring deep context the tool doesn't have. Untested generated code reaching production.",
          },
        },
        {
          num: "08",
          sectionNum: 8,
          cat: "Category 6: Image, Video &amp; Design",
          tagline: "Exciting on arrival, uneven in production",
          color: "brand-red",
          summary: "High novelty value, unclear business ROI. Most SMBs explored these tools and found specific use cases that stuck — but the category rarely drove operational transformation.",
          tools: [
            { name: "Midjourney", vendor: "Midjourney", use: "High-quality image generation", exp: "Favored by creative teams. Discord-based interface was friction; moved to Web in late 2025. Consistent with brand guidelines required heavy prompting discipline." },
            { name: "DALL-E / ChatGPT Images", vendor: "OpenAI", use: "Image generation within ChatGPT", exp: "Convenient. Lower quality than Midjourney for most tasks. Volume-use for social media and internal decks." },
            { name: "Adobe Firefly", vendor: "Adobe", use: "Image generation integrated into Creative Cloud", exp: "Preferred by agencies and design teams already on Creative Cloud. Commercial-safe training data valued by clients." },
            { name: "Runway / Pika / Sora", vendor: "Various", use: "AI video generation and editing", exp: "Explored broadly, deployed narrowly. Quality impressive but inconsistent. Practical workflow integration still early." },
            { name: "Descript", vendor: "Descript", use: "AI-powered audio/video editing", exp: "Strong adoption in podcasting, marketing video, and training content production. Text-based editing genuinely useful." },
          ],
          feedback: {
            worked: "Social media imagery at volume. Internal presentation visuals. Creative brainstorming. Audio/video editing via transcript. Stock photo replacement.",
            didnt: "Brand-critical imagery without human curation. Anything requiring exact brand style without fine-tuning. Video that had to look professional out of the box.",
          },
        },
        {
          num: "09",
          sectionNum: 9,
          cat: "Category 7: Data, Analytics &amp; Automation",
          tagline: "The hardest category — and the one with the most future value",
          color: "slate-700",
          summary: "Lowest exploration rate and lowest satisfaction of any category. The tools exist, but SMBs lacked the data readiness and internal expertise to deploy them successfully.",
          tools: [
            { name: "Zapier + AI Actions", vendor: "Zapier", use: "AI-powered workflow automation", exp: "Power users got meaningful value. Most SMB users stayed in simple trigger-action workflows. AI steps added capability but also complexity." },
            { name: "Make (Integromat) with AI", vendor: "Make", use: "Visual automation with AI integrations", exp: "Similar to Zapier. More capable for complex logic, steeper learning curve." },
            { name: "n8n", vendor: "n8n", use: "Open-source automation with AI nodes", exp: "Developer-adjacent SMBs adopted for self-hosted control. Not a mainstream SMB play." },
            { name: "Airtable AI / Glide AI", vendor: "Various", use: "AI layered into no-code database platforms", exp: "Interesting for internal tools. Most SMBs never pushed beyond templates." },
            { name: "Tableau Pulse / Power BI Copilot", vendor: "Salesforce / Microsoft", use: "NL query over BI dashboards", exp: "Enterprise feature largely. Most SMBs lacked the underlying data warehouse to make these tools shine." },
          ],
          feedback: {
            worked: "Simple automations (form to CRM to email). Basic data summarization. Ad-hoc NL queries on cleaned data.",
            didnt: "Anything requiring clean, unified, well-classified data — which is most analytics worth doing. Cross-system workflows without significant engineering investment.",
          },
        },
      ].map((section, sIdx) => (
        <section key={sIdx} id={`section-${section.sectionNum}`} className={`py-20 px-6 ${sIdx % 2 === 0 ? "bg-white" : "bg-slate-50 border-y border-slate-200"}`}>
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-brand-blue font-mono text-sm font-bold">{section.num}</span>
              <div className="h-0.5 w-10 bg-brand-blue" />
              <span className={`text-${section.color} font-bold text-xs uppercase tracking-widest`}>Category</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2 leading-tight" dangerouslySetInnerHTML={{ __html: section.cat }} />
            <p className={`text-${section.color} text-lg font-semibold mb-6`}>{section.tagline}</p>
            <p className="text-slate-600 mb-10 leading-relaxed max-w-3xl">{section.summary}</p>

            {/* Tools Table */}
            <div className="overflow-hidden rounded-xl border border-slate-200 mb-8">
              <table className="w-full text-sm">
                <thead className={`bg-${section.color}/10`}>
                  <tr>
                    <th className="text-left p-4 font-bold text-slate-900 w-1/5">Tool</th>
                    <th className="text-left p-4 font-bold text-slate-900 w-1/4">Primary Use</th>
                    <th className="text-left p-4 font-bold text-slate-900">Experience Feedback</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {section.tools.map((tool, tIdx) => (
                    <tr key={tIdx} className="border-t border-slate-200">
                      <td className="p-4 align-top">
                        <p className="font-bold text-slate-900">{tool.name}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{tool.vendor}</p>
                      </td>
                      <td className="p-4 align-top text-slate-700">{tool.use}</td>
                      <td className="p-4 align-top text-slate-700 text-sm leading-relaxed">{tool.exp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Feedback Block */}
            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-white rounded-xl p-6 border-l-4 border-brand-green shadow-sm">
                <p className="text-brand-green text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  What SMBs said worked
                </p>
                <p className="text-slate-700 text-sm leading-relaxed">{section.feedback.worked}</p>
              </div>
              <div className="bg-white rounded-xl p-6 border-l-4 border-brand-red shadow-sm">
                <p className="text-brand-red text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  What SMBs said didn't
                </p>
                <p className="text-slate-700 text-sm leading-relaxed">{section.feedback.didnt}</p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* 10. Experience Feedback Aggregate */}
      <section id="section-10" className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-brand-blue font-mono text-sm font-bold">10</span>
            <div className="h-0.5 w-10 bg-brand-blue" />
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Voice of the SMB</span>
          </div>
          <h2 className="text-4xl font-extrabold mb-4 leading-tight">The Experience Feedback</h2>
          <p className="text-lg text-slate-400 mb-10 max-w-3xl">Aggregated themes from SMB leadership, IT managers, and end users describing the 2025 AI experience in their own words.</p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div>
              <p className="text-brand-green text-xs font-bold uppercase tracking-widest mb-5">Positive Themes (38%)</p>
              <div className="space-y-4">
                {[
                  { quote: "It became invisible. Nobody talks about email spell-check anymore — AI drafting became that.", source: "Marketing Director, 85-person firm" },
                  { quote: "Our developers got a 30% speed bump. No training needed. It just worked.", source: "CTO, 120-person SaaS company" },
                  { quote: "I stopped writing first drafts of anything. Everything starts with Claude now.", source: "Managing Partner, 40-person consultancy" },
                  { quote: "Meeting recaps in Teams Copilot alone justified the seat cost for our executives.", source: "COO, 200-person professional services firm" },
                ].map((q, i) => (
                  <div key={i} className="bg-white/5 rounded-xl p-5 border border-white/10">
                    <p className="text-slate-200 text-sm italic leading-relaxed mb-3">"{q.quote}"</p>
                    <p className="text-slate-500 text-xs">— {q.source}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-brand-red text-xs font-bold uppercase tracking-widest mb-5">Frustration Themes (62%)</p>
              <div className="space-y-4">
                {[
                  { quote: "We bought five AI tools in 2025. We use maybe two. The rest are auto-renewing subscriptions I need to cancel.", source: "COO, 60-person retailer" },
                  { quote: "The demos always show it working. The reality is 80% of what we need it to do, 20% wrong in ways we can't predict.", source: "Operations Manager, healthcare network" },
                  { quote: "Every department picked a different tool. Nobody told IT. Now we have a security review backlog.", source: "IT Director, 150-person firm" },
                  { quote: "Our customer service AI chatbot lasted three weeks before a complaint tweet forced us to pull it.", source: "CX Lead, ecommerce brand" },
                  { quote: "We spent $40K on tools and we still don't have a single AI workflow in production.", source: "CEO, 75-person agency" },
                ].map((q, i) => (
                  <div key={i} className="bg-white/5 rounded-xl p-5 border border-white/10">
                    <p className="text-slate-200 text-sm italic leading-relaxed mb-3">"{q.quote}"</p>
                    <p className="text-slate-500 text-xs">— {q.source}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-slate-500 text-xs italic">Quotes paraphrased and anonymized from SMB interviews, client engagements, and public forum posts (Reddit r/smallbusiness, r/sysadmin; G2/Capterra reviews). Roles and firm sizes preserved; specific company details removed.</p>
        </div>
      </section>

      {/* 11. Patterns */}
      <section id="section-11" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-brand-blue font-mono text-sm font-bold">11</span>
            <div className="h-0.5 w-10 bg-brand-blue" />
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Analysis</span>
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 leading-tight">The Patterns Behind the Frustration</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl">The difference between SMBs that got value from AI in 2025 and those that did not was almost never about tool selection. Six patterns separated outcomes.</p>

          <div className="space-y-5">
            {[
              { num: "1", pattern: "The Tool-First Mistake", body: "Organizations that picked a tool before defining a problem rarely got to production. Organizations that defined a problem first, then selected a tool, routinely got to production. Tool selection turned out to be the least important decision." },
              { num: "2", pattern: "The Integration Gap", body: "Tools used inside systems where work already happens (Microsoft 365, Google Workspace, GitHub, Notion) stuck. Tools that required switching to a separate app did not — regardless of the tool's underlying capability." },
              { num: "3", pattern: "The Data Readiness Underestimate", body: "SMBs that attempted document intelligence, customer service AI, or analytics AI discovered their data was not as clean, classified, or accessible as assumed. The 2–3 week integration became 2–3 months — or was abandoned." },
              { num: "4", pattern: "The Autonomous Agent Trap", body: "\"Deploy AI and it will handle itself\" was the most expensive marketing claim of 2025. Autonomous customer-facing agents, especially, consistently required more content preparation, escalation logic, and human oversight than advertised." },
              { num: "5", pattern: "The Shadow IT Accumulation", body: "Individual experimentation produced individual productivity gains. It also produced an inventory of unsanctioned tools, unmanaged subscriptions, and unknown data flows. Most SMBs enter 2026 with more AI SaaS than they can account for." },
              { num: "6", pattern: "The Absence of Measurement", body: "The organizations that got AI value measured something before they deployed. The organizations that did not cannot tell whether AI worked, cannot defend the investment, and cannot decide what to do in 2026. Measurement is the single most predictive indicator we see." },
            ].map((p, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6 border-l-4 border-brand-blue flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center shadow">
                  <span className="text-white font-black text-lg">{p.num}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{p.pattern}</h3>
                  <p className="text-slate-700 leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. What This Means for 2026 */}
      <section id="section-12" className="py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-brand-blue font-mono text-sm font-bold">12</span>
            <div className="h-0.5 w-10 bg-brand-blue" />
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Implications</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">What This Means for 2026</h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            The year of exploration is over. The year of rationalization has begun. SMBs entering 2026 with the frustration of 2025 have a specific set of decisions to make.
          </p>

          <div className="space-y-4 mb-10">
            {[
              { title: "Audit the AI SaaS you already own", body: "Most SMBs are paying for 2–4 AI subscriptions that are not being used. The first 2026 dollar of ROI is usually the dollar you stop spending." },
              { title: "Select two use cases; abandon the rest", body: "Focus delivers outcomes. Spreading across ten use cases delivers nothing. Pick two where success can be measured in 90 days." },
              { title: "Treat integration as the project", body: "The tool is 20% of the work. Getting it into workflow — with clean data, defined success criteria, and operational ownership — is 80%. Budget accordingly." },
              { title: "Establish governance before scaling", body: "An acceptable-use policy, an approved-tool list, and a review process are preconditions — not afterthoughts. The businesses that skip this in 2026 will discover why by 2027." },
              { title: "Engage a partner for production work", body: "Individual productivity AI can be self-serve. Production AI — deployed into workflow, measured against outcomes, governed over time — is not. This is the pattern that separates the 14% from the 78%." },
            ].map((r, i) => (
              <div key={i} className="bg-white/5 rounded-xl p-5 border border-white/10 flex items-start gap-4">
                <div className="flex-shrink-0 w-9 h-9 bg-brand-blue/20 rounded-lg flex items-center justify-center">
                  <span className="text-brand-blue font-bold">{i + 1}</span>
                </div>
                <div>
                  <p className="font-bold text-white mb-1">{r.title}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{r.body}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-lg text-slate-400 mb-10 italic">
            The path from 78% to 14% is well-traveled. The path from 14% to operational advantage is where 2026 will be won.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
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
              Rationalize Your AI Stack
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-700">
            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-4">Methodology</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              This brief synthesizes findings from <span className="arvintech-brand font-semibold text-white">arvintech</span> client engagements throughout 2025 (n=127 active SMB clients), aggregated SMB AI adoption surveys (public surveys from McKinsey, Gartner, Microsoft/LinkedIn Work Trend Index, and HubSpot State of AI reports), and qualitative review of G2, Capterra, and Reddit discussions across 2025. Tools mentioned are representative of the categories, not exhaustive. No vendor compensated <span className="arvintech-brand font-semibold text-white">arvintech</span> for placement. All experience quotes are paraphrased and anonymized.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
