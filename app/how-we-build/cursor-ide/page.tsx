import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Cursor IDE | VS Code-Based Development Environment | arvintech",
  description:
    "Cursor is the IDE of choice — built on VS Code, with AI woven into the editing workflow. Not WordPress, not a CMS, just a professional code editor.",
}

const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    label: "Built on VS Code",
    desc: "Standardised on the most-used code editor in the industry. Every VS Code shortcut, theme, and compatible extension works out of the box. Any developer familiar with VS Code is immediately productive.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    label: "AI built into the editor",
    desc: "Suggestions, refactors, and code generation happen in context — inside the file, next to the code — not in a separate chat window disconnected from the repo. The AI sees the full project structure.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    label: "Integrated terminal & Git",
    desc: "Run build commands, push to GitHub, and review diffs without leaving the editor. The full development loop — write, test, commit, push — stays in one window.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
    ),
    label: "Plain files, fully portable",
    desc: "The project is text files in folders — readable by any editor, stored in Git, and fully portable. No proprietary database, no locked-in format.",
  },
]

export default function CursorIdePage() {
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

      <header className="pt-28 pb-14 px-6 bg-gradient-to-br from-violet-50 via-white to-slate-50 border-b border-slate-200">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-6 flex-wrap">
            <Link href="/how-we-build" className="hover:text-brand-blue transition-colors">How We Build</Link>
            <span>/</span>
            <span className="text-slate-600 font-medium">Cursor IDE</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-9 h-9 rounded-full bg-violet-100 text-violet-700 text-sm font-bold flex items-center justify-center shrink-0">2</span>
            <span className="text-xs font-bold uppercase tracking-wider text-violet-600">Development Tools · IDE</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-balance">The Cursor development environment</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Cursor is the IDE of choice — built on VS Code, the industry standard, with AI woven directly into the editing workflow.
          </p>
          <div className="flex flex-wrap gap-2 mt-5">
            {["IDE", "Built on VS Code", "AI-assisted", "Industry standard"].map((t) => (
              <span key={t} className="px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-xs font-semibold">{t}</span>
            ))}
          </div>
        </div>
      </header>

      <main className="px-6 py-14">
        <div className="max-w-3xl mx-auto space-y-8">

          <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">What an IDE is</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              An IDE — Integrated Development Environment — is the application a developer opens to read, write, and navigate source code. It is not a website you log into. It runs on the developer&apos;s computer and opens the project&apos;s files directly.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Cursor is the specific IDE used for this project. It is built directly on top of VS Code — the most widely used code editor in the industry — which means the same keyboard shortcuts, file explorer, split-pane layout, and extension model millions of developers already know. The codebase it opens is plain text files in folders: readable by any editor, stored in Git, and fully portable.
            </p>
          </section>

          <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-5">Key capabilities</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f.label} className="flex gap-3 rounded-xl bg-violet-50 border border-violet-100 p-4">
                  <div className="shrink-0 mt-0.5 text-violet-600">{f.icon}</div>
                  <div>
                    <p className="font-semibold text-slate-800 mb-1 text-sm">{f.label}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">VS Code compatibility — why it matters</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Because Cursor is VS Code at its core, it is not a proprietary black box. Settings, themes, and most VS Code extensions transfer directly. If the project ever moved to a different developer, they could open the same repository in VS Code, WebStorm, or any editor — nothing about the project is coupled to Cursor specifically.
            </p>
            <p className="text-slate-600 leading-relaxed">
              That portability is part of what the stack is designed for: the code is the asset, not the tool used to write it.
            </p>
          </section>

          <section className="rounded-xl border-l-4 border-violet-300 bg-violet-50 p-6 space-y-3">
            <p className="font-bold text-slate-800">This is not WordPress — and that matters</p>
            <p className="text-slate-600 leading-relaxed text-sm">
              Cursor does not install WordPress plugins, themes, or a database. The public site does not &quot;run inside&quot; Cursor. Cursor is the workshop where the developer edits the codebase before changes are committed to Git and deployed to the host in part 3.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              There is no plugin marketplace in the WordPress sense. Capabilities are added as explicit code dependencies, environment variables, or new files in the repository — all readable, auditable, and version-controlled. Nothing is bolted on silently.
            </p>
          </section>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/how-we-build/vercel-hosting" className="inline-flex items-center gap-2 btn-green text-base px-6 py-3">
              Next: Vercel Hosting
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/how-we-build/software-stack" className="inline-flex items-center justify-center rounded-xl border border-slate-300 text-slate-600 text-base px-6 py-3 hover:bg-slate-100 transition-colors font-medium">
              ← Software stack
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
