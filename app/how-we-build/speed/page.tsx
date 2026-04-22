import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Why Next.js Sites Are Fast | Speed Deep Dive | arvintech",
  description:
    "A full explanation of why a Next.js site on Vercel is fast—covering Next.js, React, Tailwind CSS, PostgreSQL, and the edge delivery model.",
}

const technologies = [
  {
    name: "Next.js",
    role: "Application framework",
    summary:
      "Compiles pages at build time and code-splits automatically so visitors only load what they need.",
    detail: [
      "Next.js sits at the top of the stack. When the project is built, it pre-renders as many pages as possible into finished HTML so the server can hand the browser a ready document—no template engine running on every request, no database call to assemble a layout that never changes.",
      "For pages that do need fresh data (user dashboards, search results), Next.js supports server-side rendering and React Server Components so the data-fetching happens close to the database on the host, not inside the visitor's browser.",
      "Automatic code-splitting means every page gets only the JavaScript it needs. A visitor reading the home page does not download the bundle for the contact form or the admin routes. Smaller payloads reach the browser faster, parse faster, and consume less memory on the device.",
      "Turbopack (the dev-mode bundler used in this project) also makes the local development loop faster: changes in Cursor appear in the browser preview in milliseconds rather than seconds, so iteration is quicker.",
    ],
  },
  {
    name: "React",
    role: "UI layer",
    summary:
      "Updates only the parts of the page that changed, without a full reload.",
    detail: [
      "React introduced a virtual DOM—a lightweight in-memory description of what the UI should look like. When something changes (a user clicks a button, new data arrives), React computes the minimal set of DOM updates needed and applies only those. The rest of the page stays untouched.",
      "In practice this means navigating between pages, opening modals, and refreshing data-driven sections all feel instant because the browser is not tearing down and rebuilding the whole document from scratch.",
      "React 19 (used here) also supports concurrent rendering: React can work on low-priority updates in the background and interrupt them if something more urgent arrives, keeping the interface responsive under load.",
      "Server Components, a newer React feature baked into Next.js, let the server render component trees and stream HTML to the browser progressively. Critical content shows up early; optional UI fills in behind it.",
    ],
  },
  {
    name: "Tailwind CSS",
    role: "Styling",
    summary:
      "Ships only the CSS classes actually used—no bloat, no cascade overhead.",
    detail: [
      "Traditional CSS frameworks ship a large stylesheet and then expect developers to override the defaults. The visitor's browser downloads hundreds of kilobytes of rules, most of which never apply to the page being viewed.",
      "Tailwind scans the project at build time, finds every class name in use, and generates a stylesheet containing only those classes. On a typical marketing site this results in a CSS file measured in tens of kilobytes, not hundreds. Smaller stylesheets parse faster and render faster.",
      "Because styles are declared directly on elements in the markup, the browser's cascade resolver does not have to trace through layers of parent rules to determine which styles apply. What you see in the HTML is what the browser renders.",
      "PostCSS and autoprefixer (part of this build) further process the output to add any vendor prefixes needed for older browsers, so the production file is clean and cross-browser without extra manual work.",
    ],
  },
  {
    name: "PostgreSQL",
    role: "Database (when data is needed)",
    summary:
      "Decades of query optimization, efficient indexing, and server-side access so data-backed pages stay fast.",
    detail: [
      "Most of this site's public pages are static content that does not require a database at all. When dynamic data is needed—form submissions, user accounts, stored records—PostgreSQL (Postgres) is the preferred database for this stack.",
      "Postgres has over 35 years of active development focused on reliability and query performance. Its query planner analyzes every SQL statement and chooses an efficient execution path. Proper indexes on frequently queried columns mean the database reads only the rows it needs, not the whole table.",
      "Critically, the database is never called directly from the visitor's browser. Queries go through Next.js API routes or Server Components running on the host. This keeps credentials off the public internet and makes it possible to cache query results at the Vercel edge—so repeated requests for the same data do not always reach the database at all.",
      "Connection pooling (commonly via PgBouncer or a managed provider like Supabase, Neon, or PlanetScale's Postgres offering) keeps the number of simultaneous database connections manageable under traffic, preventing the bottleneck that kills many WordPress-style sites under load.",
    ],
  },
  {
    name: "Vercel edge network",
    role: "Delivery and hosting",
    summary:
      "Global distribution so pages are served from a location close to each visitor.",
    detail: [
      "Vercel runs a global content delivery network (CDN) with dozens of edge locations worldwide. Static assets—HTML, CSS, JavaScript, images—are copied to all of them on each deploy. A visitor in Tokyo is served from a data center near them, not from a server in Virginia.",
      "For dynamic requests (server functions, API routes), Vercel also offers edge functions that run computation at the nearest location rather than routing every request back to a single origin. Latency drops proportionally with physical distance, which is a meaningful improvement for international visitors.",
      "Vercel's infrastructure also handles HTTP/2 and HTTP/3 automatically, which allows multiple resources to be downloaded in parallel over a single connection. Browsers can request the HTML, CSS, JavaScript, and images for a page simultaneously rather than waiting for each one in sequence.",
      "Automatic HTTPS is included: every domain and preview URL is served over TLS with no configuration needed, which browsers also use to prioritize connection speed.",
    ],
  },
] as const

export default function SpeedPage() {
  return (
    <div className="min-h-screen bg-slate-50">
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

      <header className="pt-32 pb-16 px-6 bg-gradient-to-br from-brand-blue/10 via-white to-brand-green/10 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-16 h-16 bg-brand-blue/20 rounded-xl rotate-12 animate-float" />
        <div className="absolute top-40 right-20 w-12 h-12 bg-brand-green/20 rounded-lg -rotate-6 animate-float" style={{ animationDelay: "1s" }} />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <Link
            href="/how-we-build#advantages"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:text-brand-green transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to How We Build
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 text-balance">
            Why a Next.js site is fast
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            A full explanation of the technologies, delivery model, and architectural decisions that make pages feel instant—from the framework to the database to the edge network.
          </p>
        </div>
      </header>

      <section className="px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-5">The short version</h2>
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                {`Speed on the web comes down to two things: how much work the server does before the browser gets anything, and how far the files have to travel. A Next.js site on Vercel is designed to minimize both. Pages are pre-built where possible so the server does not assemble them fresh on every request, and Vercel's global edge network means visitors are served from a location near them, not from a single central machine.`}
              </p>
              <p>
                {`The technologies below each contribute to that result in a specific way. They are not interchangeable marketing terms—each one removes a particular bottleneck.`}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto space-y-8">
          {technologies.map((tech) => (
            <div key={tech.name} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-10">
              <div className="flex flex-col sm:flex-row sm:items-start sm:gap-6 mb-6">
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-1">{tech.role}</p>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">{tech.name}</h2>
                  <p className="text-slate-500 text-base italic">{tech.summary}</p>
                </div>
              </div>
              <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
                {tech.detail.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white/80 mb-6 text-lg">
            Want to explore more about how this site is built and why each piece of the stack was chosen?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/how-we-build" className="inline-flex items-center justify-center btn-green text-lg px-8 py-4">
              How We Build
            </Link>
            <Link
              href="/work-with-us"
              className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-colors text-lg px-8 py-4"
            >
              Work With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
