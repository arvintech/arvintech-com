import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Step 4 · Merge and Go Live | Client Workflow | arvintech",
  description:
    "How an approved branch merges to main, triggers a Vercel production build, and pushes the new version worldwide in seconds.",
}

export default function DeployPage() {
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
            <Link href="/work-with-us" className="px-4 py-2 bg-brand-green text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-medium">
              Work With Us
            </Link>
          </div>
        </div>
      </nav>

      <header className="pt-28 pb-14 px-6 bg-gradient-to-br from-green-50 via-white to-slate-50 border-b border-slate-200">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-6 flex-wrap">
            <Link href="/how-we-build" className="hover:text-brand-blue transition-colors">How We Build</Link>
            <span>/</span>
            <Link href="/how-we-build" className="hover:text-brand-blue transition-colors">Client Workflow</Link>
            <span>/</span>
            <span className="text-slate-600 font-medium">Step 4</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-9 h-9 rounded-full bg-green-100 text-green-700 text-sm font-bold flex items-center justify-center shrink-0">4</span>
            <span className="text-xs font-bold uppercase tracking-wider text-green-600">Production Deploy</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-balance">Merge and go live</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Contract signed. Preview approved. The branch merges to main and Vercel pushes the new version to the global edge — in seconds.
          </p>
        </div>
      </header>

      <main className="px-6 py-14">
        <div className="max-w-3xl mx-auto space-y-10">

          <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">What triggers the production build</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              When the feature branch is merged into <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-slate-700">main</code>, Vercel detects the push automatically and starts a fresh production build. No manual deploy step, no FTP, no server SSH session.
            </p>
            <div className="rounded-xl bg-slate-900 text-slate-100 p-5 font-mono text-sm space-y-1 overflow-x-auto">
              <p><span className="text-slate-400">$</span> git checkout main</p>
              <p><span className="text-slate-400">$</span> git merge feature/new-services-page</p>
              <p><span className="text-slate-400">$</span> git push origin main</p>
              <p className="text-slate-400 mt-2"># Vercel detects push → runs build → deploys to edge</p>
              <p className="text-green-400"># ✓ Production updated worldwide</p>
            </div>
          </section>

          <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">What Vercel does</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Vercel runs <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-slate-700">next build</code> on its infrastructure, producing optimised static pages and serverless function bundles. The output is distributed to data centres on a global edge network — so visitors are served from a location physically close to them.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "HTTPS by default", desc: "Every deploy gets a valid SSL certificate automatically. No configuration required." },
                { label: "Atomic deploys", desc: "The new version goes live all at once — no partially-updated state visible to visitors." },
                { label: "Instant rollback", desc: "Any previous production deploy can be reinstated in one click from the Vercel dashboard." },
                { label: "Traceable to a commit", desc: "Every production deploy maps to an exact Git commit. What went live and when is always knowable." },
              ].map((item) => (
                <div key={item.label} className="rounded-xl bg-slate-50 border border-slate-200 p-4">
                  <p className="font-semibold text-slate-800 mb-1">{item.label}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">The live site is the build output</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Visitors receive pre-rendered, optimised pages from the edge. There is no WordPress admin layer or database assembling HTML on every page request. The site that went through preview and testing is exactly the site that is live — not a separate environment that might behave differently.
            </p>
            <p className="text-slate-600 leading-relaxed">
              What the public sees is always traceable to a specific version of the code. That predictability is one of the main structural advantages over a traditional CMS workflow.
            </p>
          </section>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/how-we-build/workflow/ongoing" className="inline-flex items-center gap-2 btn-green text-base px-6 py-3">
              Next: Ongoing updates
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/how-we-build/workflow/preview" className="inline-flex items-center justify-center rounded-xl border border-slate-300 text-slate-600 text-base px-6 py-3 hover:bg-slate-100 transition-colors font-medium">
              ← Step 3: Review on a preview URL
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
