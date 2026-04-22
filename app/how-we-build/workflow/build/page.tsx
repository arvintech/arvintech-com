import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Step 2 · Build in Cursor & Git | Client Workflow | arvintech",
  description:
    "How a Next.js site is built in Cursor on a Git branch — a real, clickable test drive you can review in a browser before any contract is signed.",
}

export default function BuildPage() {
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

      <header className="pt-28 pb-14 px-6 bg-gradient-to-br from-violet-50 via-white to-slate-50 border-b border-slate-200">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-6 flex-wrap">
            <Link href="/how-we-build" className="hover:text-brand-blue transition-colors">How We Build</Link>
            <span>/</span>
            <Link href="/how-we-build" className="hover:text-brand-blue transition-colors">Client Workflow</Link>
            <span>/</span>
            <span className="text-slate-600 font-medium">Step 2</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-9 h-9 rounded-full bg-violet-100 text-violet-700 text-sm font-bold flex items-center justify-center shrink-0">2</span>
            <span className="text-xs font-bold uppercase tracking-wider text-violet-600">Test-Drive Build</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-balance">Build in Cursor &amp; Git</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Think of this step as a test drive — a real, functional site you can open in a browser and react to before any deal is finalised.
          </p>
        </div>
      </header>

      <main className="px-6 py-14">
        <div className="max-w-3xl mx-auto space-y-10">

          <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Why a test drive, not a mockup</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Static mockups in Figma or Canva are useful for colour and layout discussions, but they do not tell you how the page actually feels when you navigate it, how fast it loads, or whether the copy reads naturally in context. This step skips straight to the real thing.
            </p>
            <p className="text-slate-600 leading-relaxed">
              From the discussions in step 1 — goals, the existing site, and its complexity — the developer builds an initial version of the Next.js site in Cursor. It lives on a Git branch so you can open it in a browser, click around, and feel how it works. Real feedback surfaces here: pages that need reordering, copy that lands wrong, features that should or should not be there — all before any final agreement or production deploy.
            </p>
          </section>

          <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">How Cursor is used</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Cursor is an AI-assisted code editor — the IDE — where the developer writes and edits the Next.js source directly. The AI model helps write boilerplate, suggest component structures, and speed up refactors. The developer decides what actually goes into the codebase and what gets committed to Git.
            </p>
            <p className="text-slate-600 leading-relaxed">
              There is no WordPress plugin or theme to configure — each component is explicit code in the repository. What you see on the site is a direct product of what is in the source files.
            </p>
          </section>

          <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Git branches and commit history</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Work happens on a named branch — not directly on the production line. Each meaningful change is committed with a clear message, so the full history of what was done, when, and why is readable and reversible. If something goes wrong, rolling back is straightforward.
            </p>
            <div className="rounded-xl bg-slate-900 text-slate-100 p-5 font-mono text-sm space-y-1 overflow-x-auto">
              <p><span className="text-slate-400">$</span> git checkout -b feature/new-services-page</p>
              <p><span className="text-slate-400">$</span> git commit -m <span className="text-green-400">"add services page with pricing section"</span></p>
              <p><span className="text-slate-400">$</span> git commit -m <span className="text-green-400">"update hero copy per client brief"</span></p>
              <p><span className="text-slate-400">$</span> git push origin feature/new-services-page</p>
            </div>
            <p className="text-slate-500 text-sm mt-4 leading-relaxed">
              Pushing the branch is also what triggers the preview build in step 3 — the host sees the push and creates a shareable URL.
            </p>
          </section>

          <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">What happens before the contract is signed</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The test-drive phase happens <em>before</em> a formal project contract. Both sides can see and react to something real, which makes the scope conversation much more concrete. Once the preview is reviewed and the direction is agreed, that is when the formal agreement is written to match — covering scope, timeline, payment, and ownership.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Signing the contract is the green light to merge toward production. More on that in step 3.
            </p>
          </section>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/how-we-build/workflow/preview" className="inline-flex items-center gap-2 btn-green text-base px-6 py-3">
              Next: Review on a preview URL
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/how-we-build/workflow/agree" className="inline-flex items-center justify-center rounded-xl border border-slate-300 text-slate-600 text-base px-6 py-3 hover:bg-slate-100 transition-colors font-medium">
              ← Step 1: Agree on the outcome
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
