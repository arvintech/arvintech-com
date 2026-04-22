import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Step 5 · Ongoing Updates | Client Workflow | arvintech",
  description:
    "How maintenance and change requests work with a Next.js site — no WordPress dashboard, just a clean request → implement → approve → deploy loop.",
}

export default function OngoingPage() {
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

      <header className="pt-28 pb-14 px-6 bg-gradient-to-br from-slate-100 via-white to-slate-50 border-b border-slate-200">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-6 flex-wrap">
            <Link href="/how-we-build" className="hover:text-brand-blue transition-colors">How We Build</Link>
            <span>/</span>
            <Link href="/how-we-build" className="hover:text-brand-blue transition-colors">Client Workflow</Link>
            <span>/</span>
            <span className="text-slate-600 font-medium">Step 5</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-9 h-9 rounded-full bg-slate-200 text-slate-700 text-sm font-bold flex items-center justify-center shrink-0">5</span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Repeat the Loop</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-balance">Ongoing updates</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Every change after launch follows the same disciplined cycle — not ad-hoc edits directly on a live server. The loop is the same whether it is a one-word copy fix or a new feature section.
          </p>
        </div>
      </header>

      <main className="px-6 py-14">
        <div className="max-w-3xl mx-auto space-y-10">

          {/* The loop */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-6">The maintenance loop</h2>
            <div className="space-y-0">
              {[
                { n: "A", label: "Client sends a request", desc: "In any practical form — email, document, meeting notes, phone call, or a simple text. No special tool or portal required." },
                { n: "B", label: "Developer implements in source", desc: "The change is made in the Next.js codebase in Cursor, on a branch, with a clear commit message. The source of truth is Git, not a live database." },
                { n: "C", label: "Client approves on a preview", desc: "A preview link is shared when a review step makes sense. The client checks the result in a real browser before anything goes to production." },
                { n: "D", label: "Commit, push, deploy", desc: "Once approved, the branch is merged to main. Vercel builds and the change goes live. The public site advances in traceable steps." },
              ].map((item, i, arr) => (
                <div key={item.n} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-slate-800 text-white text-xs font-bold flex items-center justify-center shrink-0">
                      {item.n}
                    </div>
                    {i < arr.length - 1 && <div className="w-0.5 flex-1 bg-slate-200 my-1" />}
                  </div>
                  <div className={`pb-6 ${i < arr.length - 1 ? "" : ""}`}>
                    <p className="font-semibold text-slate-800 mb-1">{item.label}</p>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-2 flex items-center gap-2 text-sm text-slate-400 pl-12">
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Repeats for every change request
            </div>
          </section>

          <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">How this differs from WordPress</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-red-500">WordPress-style</p>
                {[
                  "Log in to a browser-facing admin panel",
                  "Edit content or install plugins directly on the live server",
                  "Changes go live immediately — no version control",
                  "Risk of breaking the live site mid-edit",
                  "Plugin updates can introduce conflicts or vulnerabilities",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5 shrink-0">✕</span>
                    <p className="text-sm text-slate-600">{t}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-green-600">This workflow</p>
                {[
                  "Client sends a request in any form",
                  "Developer implements in source on a branch",
                  "Change is previewed and approved before going live",
                  "Every deploy is a traceable, reversible Git commit",
                  "No admin panel, no plugins, no public login surface",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                    <p className="text-sm text-slate-600">{t}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Scheduled update days and urgent requests</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              For ongoing clients, the contract includes a designated update day each period — a recurring scheduled window where routine service requests (a text change, a new section, a small fix) are handled as part of the agreement.
            </p>
            <p className="text-slate-600 leading-relaxed">
              If a request is urgent and cannot wait for the next scheduled day, off-schedule work is available at an agreed hourly rate — charged upon the client&apos;s explicit approval before any work begins. There are no surprise invoices.
            </p>
          </section>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/how-we-build/workflow/agree" className="inline-flex items-center gap-2 btn-green text-base px-6 py-3">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Back to Step 1: Agree on the outcome
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
