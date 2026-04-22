import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Step 3 · Review on a Preview URL | Client Workflow | arvintech",
  description:
    "How preview builds work: a shareable URL, client review in a real browser, scope decisions, and what goes into the project contract before merge.",
}

const contractItems = [
  {
    title: "Scope of work",
    body: "Exactly which pages, sections, and features are included. Anything beyond that agreed scope is a change order — not a silent expansion of the original price.",
  },
  {
    title: "Timeline and milestones",
    body: "When a first draft is expected, when the client review window opens, and a target launch date. Milestones keep both sides accountable.",
  },
  {
    title: "Payment terms",
    body: "Total price, deposit, when remaining payments are due, and what happens if a payment is missed. No hidden costs; additional charges require a signed change order.",
  },
  {
    title: "Ownership of code and assets",
    body: "On completion and full payment, the client owns the finished site and its source code. No ambiguity about who controls the repository or domain after the project closes.",
  },
  {
    title: "Responsibilities split",
    body: "What the developer delivers and what the client supplies — copy, images, brand guidelines, third-party credentials. Client delays can affect the timeline and the contract says so.",
  },
  {
    title: "Revision rounds",
    body: "A defined number of revision rounds is included in the base price. Additional rounds beyond that are billed at the standard hourly rate.",
  },
  {
    title: "Exit terms",
    body: "What happens if either party ends the engagement early — what work has been done, what is owed, and how files and access are transferred.",
  },
  {
    title: "Hosting, domain, and maintenance",
    body: "Provider, domain registration, and who manages renewals are written down. Ongoing clients get a designated update day each period; urgent off-schedule work is billed hourly upon approval.",
  },
]

export default function PreviewPage() {
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

      <header className="pt-28 pb-14 px-6 bg-gradient-to-br from-amber-50 via-white to-slate-50 border-b border-slate-200">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-6 flex-wrap">
            <Link href="/how-we-build" className="hover:text-brand-blue transition-colors">How We Build</Link>
            <span>/</span>
            <Link href="/how-we-build" className="hover:text-brand-blue transition-colors">Client Workflow</Link>
            <span>/</span>
            <span className="text-slate-600 font-medium">Step 3</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-9 h-9 rounded-full bg-amber-100 text-amber-700 text-sm font-bold flex items-center justify-center shrink-0">3</span>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Preview &amp; Contract</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-balance">Review on a preview URL</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            A push to the branch produces a shareable URL — not just a localhost window only the developer can see. The client opens a real browser link and checks it before anything goes to production.
          </p>
        </div>
      </header>

      <main className="px-6 py-14">
        <div className="max-w-3xl mx-auto space-y-10">

          <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">What a preview build is</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              When a branch is pushed to the host, Vercel automatically runs a build from that exact commit and produces a unique, public URL for that version of the site. It is a static snapshot of the pages as they would look in production — not a developer's local server that requires being on the same machine or network.
            </p>
            <p className="text-slate-600 leading-relaxed">
              The client receives a link. They open it in any browser, on any device, and check copy, layout, images, and behavior. Feedback can come back in any format — annotated screenshot, voice note, email, or a quick call.
            </p>
          </section>

          <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">App features are scoped deliberately</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Interactive or app-style functions — forms, search, member log-in, third-party integrations — are explicitly scoped during the preview phase and written into the contract. They are not tacked on later by surprise.
            </p>
            <p className="text-slate-600 leading-relaxed">
              For a straight marketing site with contact forms and static pages, the complexity is low and the preview often speaks for itself. For a site with a customer portal, bookings, or payment flows, the scope conversation is longer and the contract reflects that.
            </p>
          </section>

          <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-5">What the project contract covers</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Once the preview is approved and both parties are aligned, a formal project contract is submitted. It is not boilerplate — it is written to the specific engagement. Signing it is the green light: it confirms scope, timeline, and terms, and authorises the developer to merge toward production.
            </p>
            <div className="space-y-4">
              {contractItems.map((item) => (
                <div key={item.title} className="border-l-4 border-amber-300 pl-4">
                  <p className="font-semibold text-slate-800 mb-1">{item.title}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/how-we-build/workflow/deploy" className="inline-flex items-center gap-2 btn-green text-base px-6 py-3">
              Next: Merge and go live
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/how-we-build/workflow/build" className="inline-flex items-center justify-center rounded-xl border border-slate-300 text-slate-600 text-base px-6 py-3 hover:bg-slate-100 transition-colors font-medium">
              ← Step 2: Build in Cursor &amp; Git
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
