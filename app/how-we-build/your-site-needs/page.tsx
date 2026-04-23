import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "What Your Site Needs | Mission Web Studio | arvintech",
  description:
    "A plain-language breakdown of everything that goes into a modern website — hosting, dev stack, dev effort, backups, security, and maintenance.",
}

const stack = [
  {
    color: "brand-blue",
    bg: "bg-brand-blue/10",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    ),
    title: "Framework — Next.js",
    effort: "Foundation",
    desc: "Every site is built on Next.js, the React framework used by Netflix, TikTok, and GitHub. It handles routing, rendering, image optimization, and API routes out of the box — no plugins needed.",
    items: ["React server & client components", "File-based routing", "Built-in image & font optimization", "API routes for backend logic"],
  },
  {
    color: "brand-green",
    bg: "bg-brand-green/10",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    ),
    title: "Hosting — Vercel Edge",
    effort: "Included",
    desc: "Deployed on Vercel's global edge network — the same infrastructure that serves billions of requests per day. Pages load from the closest data center to your visitor, anywhere in the world.",
    items: ["Global CDN (100+ edge locations)", "Automatic HTTPS / SSL", "Zero-downtime deploys", "Preview URLs for every change"],
  },
  {
    color: "brand-yellow",
    bg: "bg-brand-yellow/10",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
    ),
    title: "Database — Supabase / Postgres",
    effort: "When needed",
    desc: "For sites that need user accounts, form submissions, or dynamic data, we connect a Postgres database via Supabase — fully managed, with real-time subscriptions and row-level security built in.",
    items: ["Managed PostgreSQL", "Real-time data subscriptions", "Row-level security (RLS)", "REST + GraphQL APIs"],
  },
  {
    color: "brand-red",
    bg: "bg-brand-red/10",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    ),
    title: "Security — Zero Admin Exposure",
    effort: "Built in",
    desc: "There is no WordPress dashboard, plugin ecosystem, or database-driven login page exposed to the internet. The attack surface that causes most site hacks simply does not exist.",
    items: ["No public CMS admin panel", "No plugin update vulnerabilities", "Git-controlled deployments", "Environment secrets never in the browser"],
  },
]

const phases = [
  {
    phase: "01",
    title: "Discovery & Architecture",
    weeks: "1–2 weeks",
    color: "border-brand-blue",
    badge: "bg-brand-blue/10 text-brand-blue",
    tasks: [
      "Define pages, features, and integrations",
      "Choose data stack (static vs database)",
      "Set up repo, Vercel project, and domain",
      "Agree on content structure and design direction",
    ],
  },
  {
    phase: "02",
    title: "Build & Review",
    weeks: "2–6 weeks",
    color: "border-brand-green",
    badge: "bg-brand-green/10 text-brand-green",
    tasks: [
      "Build all pages and components",
      "Connect forms, payments, or CMS as needed",
      "Review preview deployments together",
      "SEO metadata, Open Graph, and schema markup",
    ],
  },
  {
    phase: "03",
    title: "Launch",
    weeks: "1 week",
    color: "border-brand-yellow",
    badge: "bg-brand-yellow/10 text-yellow-700",
    tasks: [
      "Point domain DNS to Vercel",
      "Final performance and accessibility audit",
      "Submit sitemap to Google Search Console",
      "Go live — zero downtime",
    ],
  },
  {
    phase: "04",
    title: "Ongoing Maintenance",
    weeks: "Monthly",
    color: "border-brand-red",
    badge: "bg-brand-red/10 text-brand-red",
    tasks: [
      "Dependency and framework updates",
      "Content and copy changes",
      "Performance monitoring via Vercel Analytics",
      "New features added in sprints",
    ],
  },
]

const extras = [
  {
    title: "Domain & DNS",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />,
    desc: "Your domain registered via Cloudflare or Namecheap, pointed to Vercel with full HTTPS auto-renewed.",
  },
  {
    title: "Backups",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />,
    desc: "Every deploy is a snapshot. Roll back to any previous version instantly — Git is the backup. Database snapshots run daily via Supabase.",
  },
  {
    title: "Email & Transactional",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
    desc: "Transactional email (receipts, confirmations, notifications) via Resend or SendGrid — reliable delivery with open-rate tracking.",
  },
  {
    title: "Analytics",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />,
    desc: "Privacy-friendly visitor analytics via Vercel Analytics or Plausible — no cookie banners, no Google sending your data elsewhere.",
  },
  {
    title: "Payments",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />,
    desc: "Stripe for one-time payments, subscriptions, and invoicing — connected via Next.js API routes with webhook handling built in.",
  },
  {
    title: "AI Support Layer",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />,
    desc: "Front-line AI chat powered by Claude (Anthropic) — handles quick questions under 5 minutes instantly, 24/7, filtering them before they reach your team.",
  },
]

const effortTable = [
  { site: "Brochure / landing page", pages: "3–5", db: "No", auth: "No", weeks: "1–2 wks", level: "bg-brand-green/20 text-brand-green" },
  { site: "Service business site", pages: "5–10", db: "Optional", auth: "No", weeks: "2–4 wks", level: "bg-brand-blue/20 text-brand-blue" },
  { site: "Ecommerce store", pages: "10–20+", db: "Yes", auth: "Optional", weeks: "4–8 wks", level: "bg-brand-yellow/20 text-yellow-700" },
  { site: "Member portal / SaaS", pages: "15–30+", db: "Yes", auth: "Yes", weeks: "6–12 wks", level: "bg-brand-red/20 text-brand-red" },
  { site: "Multi-site / franchise", pages: "Multiple", db: "Yes", auth: "Yes", weeks: "Custom", level: "bg-purple-100 text-purple-700" },
]

export default function YourSiteNeedsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/arvintech-blocks-logo.png" alt="ArvinTech" width={40} height={40} className="w-10 h-10" />
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
      </nav>

      {/* Hero */}
      <header className="pt-32 pb-16 px-6 bg-gradient-to-br from-brand-blue/10 via-white to-brand-green/10 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-16 h-16 bg-brand-blue/20 rounded-xl rotate-12 animate-float" />
        <div className="absolute top-40 right-20 w-12 h-12 bg-brand-green/20 rounded-lg -rotate-6 animate-float" style={{ animationDelay: "1s" }} />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <Link
            href="/how-we-build/do-i-need-one"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:text-brand-green transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Do I need a Next.js site?
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 text-balance">
            What your site actually needs
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-4">
            Hosting, dev stack, dev effort, backups, security, and everything in between — explained in plain language.
          </p>
          <p className="text-base text-slate-500">
            No jargon. No upselling. Just a clear picture of what goes into building and running a modern website.
          </p>
        </div>
      </header>

      {/* Dev Stack */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-brand-blue/10 text-brand-blue rounded-full text-sm font-semibold mb-4">THE STACK</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What we build with</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Every layer is chosen for reliability, speed, and long-term maintainability — not trend-chasing.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {stack.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 ${s.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <svg className={`w-6 h-6 text-${s.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {s.icon}
                    </svg>
                  </div>
                  <div>
                    <span className={`text-xs font-bold uppercase tracking-wider text-${s.color}`}>{s.effort}</span>
                    <h3 className="text-lg font-bold text-slate-900">{s.title}</h3>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{s.desc}</p>
                <ul className="space-y-1.5">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-500">
                      <svg className={`w-4 h-4 text-${s.color} flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dev effort table */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-brand-green/10 text-brand-green rounded-full text-sm font-semibold mb-4">DEV EFFORT</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How long does it take?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Timelines depend on scope, not the technology. Here&apos;s a realistic breakdown by site type.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-6 py-4 font-semibold text-slate-700">Site type</th>
                  <th className="text-left px-6 py-4 font-semibold text-slate-700">Pages</th>
                  <th className="text-left px-6 py-4 font-semibold text-slate-700">Database</th>
                  <th className="text-left px-6 py-4 font-semibold text-slate-700">Auth</th>
                  <th className="text-left px-6 py-4 font-semibold text-slate-700">Build time</th>
                </tr>
              </thead>
              <tbody>
                {effortTable.map((row, i) => (
                  <tr key={row.site} className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${row.level}`}>{row.site}</span>
                    </td>
                    <td className="px-6 py-4 text-slate-600">{row.pages}</td>
                    <td className="px-6 py-4 text-slate-600">{row.db}</td>
                    <td className="px-6 py-4 text-slate-600">{row.auth}</td>
                    <td className="px-6 py-4 font-semibold text-slate-900">{row.weeks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-4 text-center">
            Timelines assume one developer and client feedback within 48 hrs. AI-assisted development (Cursor) cuts these by ~30–40%.
          </p>
        </div>
      </section>

      {/* Build phases */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-brand-yellow/10 text-yellow-700 rounded-full text-sm font-semibold mb-4">THE PROCESS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How a build unfolds</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Four phases from brief to launch — and what happens after.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {phases.map((p) => (
              <div key={p.phase} className={`bg-white rounded-2xl border-t-4 ${p.color} border border-slate-200 p-6 shadow-sm`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-black text-slate-100">{p.phase}</span>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${p.badge}`}>{p.weeks}</span>
                </div>
                <h3 className="font-bold text-slate-900 mb-3">{p.title}</h3>
                <ul className="space-y-2">
                  {p.tasks.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-xs text-slate-500 leading-relaxed">
                      <span className="w-1 h-1 rounded-full bg-slate-300 mt-1.5 flex-shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extras grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-brand-red/10 text-brand-red rounded-full text-sm font-semibold mb-4">EVERYTHING ELSE</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The full picture</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The pieces that make a site production-ready — not extras to bolt on later.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {extras.map((e) => (
              <div key={e.title} className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
                <div className="w-10 h-10 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-4 shadow-sm">
                  <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {e.icon}
                  </svg>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{e.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to scope your project?</h2>
          <p className="text-slate-400 text-lg mb-8">
            Tell us what you&apos;re building and we&apos;ll map out exactly what you need — stack, timeline, and cost.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/work-with-us" className="inline-flex items-center justify-center btn-green text-lg px-8 py-4">
              Start the conversation
            </Link>
            <Link
              href="/how-we-build/do-i-need-one"
              className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-colors text-lg px-8 py-4"
            >
              Retake the quiz
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
