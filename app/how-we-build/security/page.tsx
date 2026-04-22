import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Why Next.js Sites Are More Secure | Security Deep Dive | arvintech",
  description:
    "A full explanation of the security advantages of a Next.js site on Vercel compared to WordPress and traditional CMS platforms—no exposed admin, no plugin attack surface, HTTPS by default.",
}

const sections = [
  {
    title: "The WordPress attack surface",
    body: [
      "WordPress powers a significant portion of the web, and for that reason it is also the most targeted CMS by automated scanners and attackers. A default WordPress install exposes several points of entry that a Next.js build simply does not have.",
      "The admin dashboard at /wp-admin is publicly reachable by anyone who knows the URL. Brute-force tools run credential-stuffing attacks against it continuously. Every site running WordPress has this problem unless the admin URL is hidden or IP-restricted, which requires additional configuration that many site owners never complete.",
      "The PHP application running on the server must be kept updated, as must each plugin. A single unpatched plugin—even a legitimate, well-regarded one—can introduce a remote code execution or SQL injection vulnerability. Because plugins are installed from a marketplace and can be abandoned by their authors, this is an ongoing maintenance risk, not a one-time setup.",
      "The MySQL database is a live, writable store connected to the running application. SQL injection attacks against insufficiently sanitized input can read, modify, or delete content. The database credentials live on the server, and a server compromise means those credentials are exposed.",
    ],
  },
  {
    title: "What this Next.js build does not have",
    body: [
      "There is no /wp-admin or equivalent. The site has no public login panel for content editing. Content changes go through the developer workflow in Cursor and Git—not through a browser-facing admin that a bot can probe with a credential list.",
      "There are no PHP plugins. This project has no WordPress plugin graph. Dependencies are standard npm packages declared in package.json, updated through normal package management, and audited with tools that flag known vulnerabilities in the dependency tree.",
      "For static pages (the majority of public-facing content), there is no database involved in serving a response at all. A visitor reading a page gets a pre-built file from Vercel's edge, not a document assembled by querying a live database. There is nothing to inject into.",
      "Secrets—API keys, database credentials, third-party tokens—live in Vercel's environment variable store, not in configuration files in the public web root. They are never embedded in the client-side bundle delivered to the browser.",
    ],
  },
  {
    title: "HTTPS and edge delivery by default",
    body: [
      "Every Vercel deployment, including preview URLs on branches, is served over TLS (HTTPS) automatically. There is no certificate purchase, renewal reminder, or Let's Encrypt script to maintain. The browser's secure connection indicator is on from the first deploy.",
      "Traffic between visitors and Vercel passes through Vercel's edge infrastructure, which can absorb large volumes of requests and apply rate limiting at the network layer before traffic reaches application code. This provides a baseline layer of DDoS mitigation that a self-hosted server on a single IP address does not have.",
      "HTTP security headers (Content-Security-Policy, X-Frame-Options, Referrer-Policy, and others) can be set in the Next.js configuration and applied globally across all routes without touching a server config file. They are version-controlled alongside the rest of the code.",
    ],
  },
  {
    title: "Private work stays private",
    body: [
      "Editing the site requires access to the Cursor IDE on a developer's machine and write access to the Git repository. That is a controlled, authenticated path—not a web login form exposed to the public internet.",
      "Git hosts (GitHub, GitLab, and similar) provide two-factor authentication, signed commits, branch protection rules, and audit logs as standard features. The history of every change to the site is recorded and attributable.",
      "Deploy keys and environment variables on Vercel are scoped to the project and not visible after they are set, even to team members with viewer access. A compromised credential does not automatically yield access to the production site's secrets.",
    ],
  },
  {
    title: "When the site does use a database",
    body: [
      "Features that require stored data (form submissions, user accounts, dynamic content) connect to a database through Next.js API routes or Server Components running on the host—never directly from the browser. Visitors cannot send raw SQL to the database. Queries are parameterized in application code before they reach the database layer.",
      "Using a managed database provider (Supabase, Neon, PlanetScale, or similar) means the database host itself is patched, backed up, and monitored by a dedicated team rather than a single developer maintaining a server. Row-level security rules can restrict what each authenticated user is allowed to read or write.",
      "Connection strings and database credentials are stored in Vercel environment variables. They are available to server-side code at runtime but never shipped to the client bundle, and they never appear in the Git repository.",
    ],
  },
  {
    title: "Compared to plain HTML",
    body: [
      "A folder of static HTML files on a shared host is small in attack surface in the same way—there is no CMS login, no running application to exploit. The difference is in the hosting control plane and the development workflow.",
      "Shared hosting typically comes with a cPanel or similar web admin, FTP access, and a phpMyAdmin interface—all of which are frequently targeted and require the site owner to keep credentials and software updated. A Next.js site on Vercel removes that layer entirely: there is no cPanel, no FTP, and no PHP environment to misconfigure.",
      "Adding dynamic features to a static HTML site usually means bolting on third-party scripts (chat widgets, form services, analytics) loaded from external domains, each of which introduces a supply-chain risk. A Next.js app handles those integrations in controlled server routes or vetted npm packages rather than arbitrary scripts injected into the page head.",
    ],
  },
] as const

export default function SecurityPage() {
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
        <div
          className="absolute top-40 right-20 w-12 h-12 bg-brand-green/20 rounded-lg -rotate-6 animate-float"
          style={{ animationDelay: "1s" }}
        />
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
            Why a Next.js site is more secure
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            A full comparison of attack surfaces: what WordPress exposes, what this build removes, and how HTTPS, edge delivery, and a controlled dev workflow change the security posture.
          </p>
        </div>
      </header>

      <section className="px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-5">The short version</h2>
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                {`Security on the web is mostly about reducing what an attacker can reach. A WordPress site has a public admin login, a live PHP application, a connected database, and a plugin ecosystem that must be continuously patched. A Next.js site on Vercel removes most of those surfaces for the public-facing site: no admin panel, no plugin runtime, no live database behind static pages, and no server for you to patch by hand.`}
              </p>
              <p>
                {`Private work—editing, deploying, secrets—lives in authenticated developer tooling (Cursor, Git, Vercel's environment variables), not in a browser-facing login form that a bot can try a million passwords against.`}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto space-y-8">
          {sections.map((section) => (
            <div key={section.title} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-5">{section.title}</h2>
              <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
                {section.body.map((p, i) => (
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
            Want to explore more about how this site is built?
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
