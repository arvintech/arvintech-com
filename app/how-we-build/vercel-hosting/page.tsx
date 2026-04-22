import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Vercel Hosting | Global Edge, Serverless, Instant Deploys | arvintech",
  description:
    "How Vercel hosts this site — Git-connected deployments, a global edge network, HTTPS by default, serverless functions, and instant rollbacks.",
}

const hostingFeatures = [
  {
    label: "Git-connected deploys",
    desc: "Every push to the repository triggers a fresh build automatically. No FTP, no manual deploy step, no SSH session. The site advances in step with the code.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
      </svg>
    ),
  },
  {
    label: "Global edge network",
    desc: "The built site is distributed across Vercel's data centres worldwide. Visitors are served from a location near them — one of the reasons pages load quickly regardless of where the visitor is.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: "HTTPS by default",
    desc: "Every deploy — production and preview — gets a valid SSL certificate automatically. No certificate management or Certbot cron jobs required.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    label: "Atomic deploys",
    desc: "The new version goes live all at once. Visitors never see a partially-updated site mid-deploy — the switchover is instant and complete.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    label: "Instant rollback",
    desc: "Any previous production deploy can be reinstated in one click from the Vercel dashboard. Every deploy maps to an exact Git commit — what went live and when is always traceable.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
      </svg>
    ),
  },
  {
    label: "Serverless functions",
    desc: "When a page or API needs server-side code, Vercel runs it as a short-lived serverless function — not an always-on machine. The model is 'run this when asked', which scales automatically and costs nothing at rest.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    ),
  },
]

export default function VercelHostingPage() {
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

      <header className="pt-28 pb-14 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 border-b border-slate-700">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-6 flex-wrap">
            <Link href="/how-we-build" className="hover:text-white transition-colors">How We Build</Link>
            <span>/</span>
            <span className="text-slate-200 font-medium">Vercel Hosting</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-9 h-9 rounded-full bg-white/10 text-white text-sm font-bold flex items-center justify-center shrink-0 border border-white/20">3</span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Live Hosting</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">What Vercel does as the host</h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Vercel is a cloud platform built for Next.js — the same company helps maintain the framework. It turns a Git push into a worldwide production deploy in seconds.
          </p>
          <div className="flex flex-wrap gap-2 mt-5">
            {["Global edge", "HTTPS by default", "Git-connected", "Serverless", "Instant rollback"].map((t) => (
              <span key={t} className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-semibold border border-white/20">{t}</span>
            ))}
          </div>
        </div>
      </header>

      <main className="px-6 py-14">
        <div className="max-w-3xl mx-auto space-y-8">

          <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">How hosting works here</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              You do not rent a single server to log into and patch by hand. Vercel connects to the project&apos;s Git repository and watches it. When the developer pushes a change, Vercel automatically runs <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-slate-700">next build</code> on its infrastructure, producing optimised static pages and serverless function bundles. Those outputs are then distributed across the global edge network.
            </p>
            <p className="text-slate-600 leading-relaxed">
              The live site is a clean build from the repository — not a server that has drifted under manual edits over months. What the public sees is always traceable to a specific Git commit.
            </p>
          </section>

          <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-5">What Vercel provides</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {hostingFeatures.map((f) => (
                <div key={f.label} className="flex gap-3 rounded-xl bg-slate-50 border border-slate-200 p-4">
                  <div className="shrink-0 mt-0.5 text-slate-600">{f.icon}</div>
                  <div>
                    <p className="font-semibold text-slate-800 mb-1 text-sm">{f.label}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Preview deployments</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Every branch push — not just pushes to main — gets its own unique preview URL. This is how the client reviews work before it goes to production: a real browser link that matches exactly what will ship, not a developer&apos;s localhost that requires being on the same machine.
            </p>
            <div className="rounded-xl bg-slate-900 text-slate-100 p-5 font-mono text-xs space-y-1.5 overflow-x-auto">
              <p className="text-slate-400"># Push a feature branch</p>
              <p><span className="text-slate-400">$</span> git push origin feature/new-services-page</p>
              <p className="text-green-400 mt-1">✓ Vercel preview deploy: https://arvintech-abc123.vercel.app</p>
              <p className="text-slate-400 mt-1"># Client reviews at that URL, then approves</p>
              <p><span className="text-slate-400">$</span> git merge feature/new-services-page &amp;&amp; git push origin main</p>
              <p className="text-green-400">✓ Production updated worldwide</p>
            </div>
          </section>

          <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">How the three parts connect</h2>
            <div className="flex flex-col gap-3">
              {[
                { n: "1", label: "Software stack", desc: "The packages and frameworks that make up the app." },
                { n: "2", label: "Cursor IDE", desc: "Where the developer writes and edits the source code." },
                { n: "3", label: "Vercel", desc: "Watches the repo, builds the output, and serves it worldwide." },
              ].map((item) => (
                <div key={item.n} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="w-7 h-7 rounded-full bg-slate-800 text-white text-xs font-bold flex items-center justify-center shrink-0">{item.n}</span>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">{item.label}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/how-we-build" className="inline-flex items-center gap-2 btn-green text-base px-6 py-3">
              Back to How We Build
            </Link>
            <Link href="/how-we-build/cursor-ide" className="inline-flex items-center justify-center rounded-xl border border-slate-300 text-slate-600 text-base px-6 py-3 hover:bg-slate-100 transition-colors font-medium">
              ← Cursor IDE
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
