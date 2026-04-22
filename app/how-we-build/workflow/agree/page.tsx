import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Step 1 · Agree on the Outcome | Client Workflow | arvintech",
  description:
    "How a project brief becomes a concrete scope: goals, existing site assessment, complexity conversation, and what 'done' looks like before any code is written.",
}

const nav = [
  { label: "Build in Cursor & Git", href: "/how-we-build/workflow/build", dir: "next" },
]

export default function AgreeOnOutcomePage() {
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

      {/* Breadcrumb + hero */}
      <header className="pt-28 pb-14 px-6 bg-gradient-to-br from-blue-50 via-white to-slate-50 border-b border-slate-200">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-6 flex-wrap">
            <Link href="/how-we-build" className="hover:text-brand-blue transition-colors">How We Build</Link>
            <span>/</span>
            <Link href="/how-we-build" className="hover:text-brand-blue transition-colors">Client Workflow</Link>
            <span>/</span>
            <span className="text-slate-600 font-medium">Step 1</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 text-sm font-bold flex items-center justify-center shrink-0">1</span>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Brief &amp; Scope</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-balance">Agree on the outcome</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Before any code is written, both sides need to understand the goal, the starting point, and what "done" actually means.
          </p>
        </div>
      </header>

      <main className="px-6 py-14">
        <div className="max-w-3xl mx-auto space-y-10">

          <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">The brief</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The client describes the business goal — a new page, copy change, lead form, or design tweak. The clearer the brief, the faster the first version lands. You do not need to be technical or write in a specific format.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Clients are encouraged to sketch ideas in any tool they are comfortable with: a Word document with rough page outlines, a Canva frame showing colors and layout, a hand-drawn photo, or annotated screenshots of sites they like. A shared visual reference is far easier to develop from than translating everything from words alone.
            </p>
          </section>

          <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">The existing site conversation</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Early in the process there is a practical conversation about whether a current site already exists — URL, who hosts it, what it does today, and what must be preserved, replaced, or retired.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              An honest look at how complex that site is sets expectations for effort, risk, and timeline.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "Simple", desc: "A few static pages, a contact form, basic info — low risk, fast to migrate or rebuild." },
                { label: "Moderate", desc: "A blog, a few integrated tools, or a custom design — needs planning and a defined scope." },
                { label: "Complex", desc: "An online store, member logins, or many integrations — requires a detailed assessment before quoting." },
                { label: "Unknown", desc: "The client isn't sure what the site does technically — discovery work clarifies this before anything is scoped." },
              ].map((item) => (
                <div key={item.label} className="rounded-xl bg-slate-50 border border-slate-200 p-4">
                  <p className="font-semibold text-slate-800 mb-1">{item.label}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Turning a goal into a scope</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The developer turns the brief into a concrete scope: which routes, components, and content need to change, and what "done" looks like. There is no mystery CMS; the plan maps directly to files in the repository and a path to preview the result.
            </p>
            <p className="text-slate-600 leading-relaxed">
              This is also where the development builds an initial version of the site in Cursor — a real, clickable test-drive that turns the discussion into something both sides can see and react to before any contract is signed.
            </p>
          </section>

          {/* Next step */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/how-we-build/workflow/build"
              className="inline-flex items-center gap-2 btn-green text-base px-6 py-3"
            >
              Next: Build in Cursor &amp; Git
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
