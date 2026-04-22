import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Software Stack | Next.js, React, Tailwind & More | arvintech",
  description:
    "A practical map of the packages and frameworks in this project — how they fit together and what each one does.",
}

const packages = [
  {
    group: "Foundation",
    color: "blue",
    items: [
      { name: "Next.js 15", role: "Application framework", detail: "File-based routing, React Server & Client Components, API routes, and the production build the host runs. The spine of the codebase." },
      { name: "React 19", role: "UI layer", detail: "Components, state, and hooks. Every interactive element on the page is a React component." },
      { name: "TypeScript 5", role: "Type safety", detail: "Static typing on top of JavaScript. Larger refactors stay safer and editors give better autocomplete across the whole project." },
    ],
  },
  {
    group: "Styling & UI",
    color: "violet",
    items: [
      { name: "Tailwind CSS", role: "Utility-first styling", detail: "Design tokens and layout utilities. Ships only the CSS classes actually used on the page — no dead weight." },
      { name: "Radix UI", role: "Accessible component primitives", detail: "Dialogs, navigation menus, and form controls with correct ARIA attributes built in. No custom wheel-reinventing for accessibility." },
      { name: "Geist", role: "Font family", detail: "Vercel's clean, modern typeface — optimised for both screen readability and branding consistency." },
      { name: "lucide-react", role: "Icon set", detail: "Consistent SVG icons used throughout the UI. Lightweight and tree-shakeable." },
      { name: "next-themes", role: "Light / dark mode", detail: "Handles theme switching without flash-of-wrong-theme on load." },
    ],
  },
  {
    group: "Forms & Validation",
    color: "amber",
    items: [
      { name: "react-hook-form", role: "Form state management", detail: "Performant form handling without unnecessary re-renders. Pairs with Zod for validated submissions." },
      { name: "Zod", role: "Schema validation", detail: "Type-safe runtime validation for form input, API responses, and environment variables. Errors surface early and clearly." },
    ],
  },
  {
    group: "Data & Connectivity",
    color: "green",
    items: [
      { name: "Supabase / PostgreSQL", role: "Database layer (when needed)", detail: "Much of the site is static — a visitor reading a page does not need a live database. When features require saved records, sign-in, or real queries, Supabase provides managed PostgreSQL, authentication, and HTTP APIs addressed from the app with environment keys. It is a deliberate dependency you add, not a hidden part of a page builder." },
      { name: "Fetch / HTTPS", role: "API connectivity", detail: "Route handlers and serverless functions call external services over HTTPS. Secrets stay in environment variables, never in the browser bundle." },
      { name: "@anthropic-ai/sdk", role: "AI model access", detail: "Available for API routes that need model-backed behaviour — smart search, content generation, or automation hooks. Separate from the static public shell of most pages." },
    ],
  },
  {
    group: "Analytics & Utilities",
    color: "slate",
    items: [
      { name: "@vercel/analytics", role: "First-party traffic", detail: "Measures page views and referrers without a third-party cookie banner. Data stays with the project." },
      { name: "Recharts / date-fns / sonner", role: "Charts, dates, toasts", detail: "Lightweight utilities for data visualisation, date formatting, and notification toasts where a page needs them." },
      { name: "class-variance-authority / tailwind-merge / clsx", role: "Class name helpers", detail: "Keep conditional Tailwind class lists maintainable and conflict-free across component variants." },
    ],
  },
]

const colorMap: Record<string, { badge: string; dot: string; border: string }> = {
  blue:   { badge: "bg-blue-100 text-blue-700",   dot: "bg-blue-500",   border: "border-blue-200" },
  violet: { badge: "bg-violet-100 text-violet-700", dot: "bg-violet-500", border: "border-violet-200" },
  amber:  { badge: "bg-amber-100 text-amber-700",  dot: "bg-amber-500",  border: "border-amber-200" },
  green:  { badge: "bg-green-100 text-green-700",  dot: "bg-green-500",  border: "border-green-200" },
  slate:  { badge: "bg-slate-100 text-slate-600",  dot: "bg-slate-400",  border: "border-slate-200" },
}

export default function SoftwareStackPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/arvintech-blocks-logo.png" alt="ArvinTech" width={40} height={40} className="w-10 h-10" />
            <span className="text-xl font-bold arvintech-brand">arvintech</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/how-we-build" className="text-slate-600 hover:text-brand-green transition-colors text-sm">How We Build</Link>
            <Link href="/work-with-us" className="px-4 py-2 bg-brand-green text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-medium">Work With Us</Link>
          </div>
        </div>
      </nav>

      <header className="pt-28 pb-14 px-6 bg-gradient-to-br from-blue-50 via-white to-slate-50 border-b border-slate-200">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-6 flex-wrap">
            <Link href="/how-we-build" className="hover:text-brand-blue transition-colors">How We Build</Link>
            <span>/</span>
            <span className="text-slate-600 font-medium">Software Stack</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 text-sm font-bold flex items-center justify-center shrink-0">1</span>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Software &amp; Packages</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-balance">What runs in the app</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            A practical map of the frameworks, UI libraries, and utilities declared in the project. Nothing here is a WordPress plugin — every item is an explicit package wired in code.
          </p>
        </div>
      </header>

      <main className="px-6 py-14">
        <div className="max-w-3xl mx-auto space-y-10">
          {packages.map((group) => {
            const cl = colorMap[group.color]
            return (
              <section key={group.group}>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`w-2.5 h-2.5 rounded-full ${cl.dot} shrink-0`} />
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">{group.group}</h2>
                </div>
                <div className="space-y-3">
                  {group.items.map((pkg) => (
                    <div key={pkg.name} className={`bg-white rounded-2xl border ${cl.border} shadow-sm p-5`}>
                      <div className="flex items-start gap-3 flex-wrap">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${cl.badge} shrink-0`}>{pkg.name}</span>
                        <span className="text-xs font-semibold text-slate-400 pt-1">{pkg.role}</span>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed mt-3">{pkg.detail}</p>
                    </div>
                  ))}
                </div>
              </section>
            )
          })}

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/how-we-build/cursor-ide" className="inline-flex items-center gap-2 btn-green text-base px-6 py-3">
              Next: Cursor IDE
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/how-we-build" className="inline-flex items-center justify-center rounded-xl border border-slate-300 text-slate-600 text-base px-6 py-3 hover:bg-slate-100 transition-colors font-medium">
              Back to overview
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
