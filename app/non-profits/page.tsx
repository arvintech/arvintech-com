import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Websites for Nonprofits | Mission-Focused Next.js Sites | arvintech",
  description:
    "Fast, secure nonprofit sites on Next.js—donor trust, programs, events, and volunteering without a fragile WordPress stack. Built and deployed the same way we describe on How we build.",
}

const focusAreas = [
  {
    title: "Mission and programs",
    body: "Clear storytelling for what you do, who you serve, and how to get involved—structured so staff can request updates and you still ship through a clean deploy pipeline.",
  },
  {
    title: "Donors and volunteers",
    body: "Donation and email links, event pages, and signup flows that point to the tools you already use (CRM, email, ticketing)—without bolting a heavy CMS onto your public site.",
  },
  {
    title: "Trust and uptime",
    body: "Pre-rendered pages, HTTPS by default, and no public WordPress admin reduce the risks small teams often carry. Changes are reviewed and deployed intentionally, not edited live in production.",
  },
] as const

type EngagementStep = {
  title: string
  body: string
  bulletsHeading?: string
  bullets?: readonly string[]
}

const engagementSteps: EngagementStep[] = [
  {
    title: "Content and structure",
    body: "You own the mission and messaging; we map it into navigation, pages, and components that are easy for donors to scan and navigate.",
    bullets: [
      "Continuous life stories—chapters that update on a rhythm you set (for example weekly)—so supporters follow a child or family’s journey without one-off, stale profiles.",
      "Structure that separates evergreen mission pages from timely updates, with clear paths back to give, volunteer, or learn more.",
    ],
  },
  {
    title: "Optimized for speed and mobile readiness",
    body: "Static and server-rendered pages, lean JavaScript, and responsive layouts are defaults—not afterthoughts—so supporters on phones get quick loads, readable type, and tap-friendly calls to action.",
    bullets: [
      "Fast hosting on a global edge network so pages resolve quickly for donors anywhere your mission reaches.",
      "AI-enabled workflows where they help—draft support, search, and internal tooling—without turning your public site into an experiment.",
      "Mobile-ready on real devices we care about in QA—iPhone and Samsung Galaxy class phones—so tap targets, type, and forms hold up in the wild.",
    ],
  },
  {
    title: "Donation efficiency",
    body: "Giving paths are kept short and obvious: prominent CTAs, trustworthy copy, and direct links to the processor or campaign tools you already use—so fewer drop-offs between intent and completion.",
    bullets: [
      "Mobile-ready checkout with Stripe so supporters can complete a gift from a phone without friction.",
      "One-time and subscription giving, with tiered recurring levels you can tune to your campaign.",
      "Self-serve donation receipts donors can download and retain for tax filing—with your org’s details baked in.",
    ],
  },
  {
    title: "Community focus",
    body: "We design touchpoints so children, parents, and major donors stay meaningfully connected—private updates, stewarded storytelling, and invitations to engage that respect families while keeping sponsors close to the impact they make possible.",
    bullets: [
      "A protected list of child beneficiaries, surfaced only to the audiences your policies allow (staff, guardians, designated major donors).",
      "Current status for each child—in treatment, follow-up, hospice, memorial, or other chapters you define—kept accurate for stewardship and aligned with what families are comfortable sharing.",
    ],
  },
  {
    title: "Integrated ecommerce store",
    body: "When merch or fundraising products matter, the store feels like part of your site—shared navigation, look-and-feel, and mission story—while checkout and inventory stay on the commerce platform your team already trusts.",
    bullets: [
      "Ecommerce included for mission-driven retail—think a thrift shop and a farmers market—with inventory, variants, and fulfillment flows your volunteers can run.",
      "Shared branding and navigation with the rest of your nonprofit site so supporters do not feel bounced to a totally different product when they shop for good.",
    ],
  },
  {
    title: "Preview, then publish",
    body: "Changes ride through preview builds and review before they hit production—no logging into a public CMS to hope nothing breaks.",
    bullets: [
      "Weekly rhythm by default: you preview on a staging URL, approve, and we ship on a scheduled weekly deploy—clear expectations for staff and volunteers.",
      "Routine update requests are included in your hosting fee within that cadence (copy, images, sections)—so maintenance stays simple to budget.",
      "Emergency updates when it truly cannot wait— incorrect donor-facing details, compliance fixes, or breakage—handled outside the weekly window.",
    ],
  },
  {
    title: "Handoff you can explain",
    body: "You get a short picture of what runs where (stack, forms, campaigns) so staff and volunteers know how to request updates—without becoming accidental sysadmins.",
    bulletsHeading: "The hard stuff",
    bullets: [
      "SEO—structure, metadata, internal linking, and speed habits—documented in plain language so your team knows what supports search and what belongs to your content rhythm.",
      "Analytics—goals for donations and forms, campaign UTMs, and funnels your treasurer or board can actually interpret when you report impact.",
      "Social marketing—Open Graph titles and images, consistent previews when volunteers share links, and tracking-ready URLs for fundraising pushes.",
    ],
  },
]

export default function NonProfitsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="pt-28 pb-14 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white border-b border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold text-brand-green uppercase tracking-wider mb-3">Mission-driven sites</p>
          <h1 className="text-4xl md:text-5xl font-bold text-balance mb-5">Websites built for nonprofits</h1>
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            The same Next.js and Vercel approach we document in{" "}
            <Link href="/how-we-build" className="text-white font-semibold underline-offset-4 hover:underline">
              How we build the site
            </Link>
            —tailored for boards, staff, and constituents who need clarity, speed, and predictable updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/mission-web-studio"
              className="inline-flex justify-center items-center rounded-xl bg-brand-green text-slate-900 font-semibold px-6 py-3 hover:bg-green-400 transition-colors"
            >
              Mission Pages Studio
            </Link>
            <Link
              href="/support"
              className="inline-flex justify-center items-center rounded-xl border border-white/30 text-white font-semibold px-6 py-3 hover:bg-white/10 transition-colors"
            >
              Talk about your project
            </Link>
          </div>
        </div>
      </header>

      <section className="py-14 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border-2 border-brand-yellow/50 bg-white p-8 md:p-10 shadow-sm ring-1 ring-amber-100/80">
            <p className="text-sm font-semibold text-amber-800/90 uppercase tracking-wider mb-3">In focus</p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 text-balance">Adonais Mercy House</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              A 501(c)(3) nonprofit providing care and dignity to impoverished children with cancer in the Philippines—treatment,
              pediatric hospice, and family support alongside Mary Johnston Hospital in Manila.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <a
                href="https://adonaiscercyhouse.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center rounded-xl bg-brand-yellow text-slate-900 font-semibold px-6 py-3 hover:brightness-95 transition-[filter]"
              >
                Visit adonaiscercyhouse.org
              </a>
              <Link
                href="/clients/adonais-mercy-house"
                className="inline-flex justify-center items-center text-slate-700 font-semibold hover:text-slate-900 underline-offset-4 hover:underline"
              >
                Partnership details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-balance">What we optimize for</h2>
          <ul className="space-y-8">
            {focusAreas.map((item) => (
              <li key={item.title}>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 text-balance">The Details</h2>
          <p className="text-slate-600 leading-relaxed mb-10 max-w-3xl">
            Nonprofit teams rarely want more tooling—they want clarity. Here is how we keep the build legible while still shipping something polished.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {engagementSteps.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200/90 bg-white p-6 md:p-7 shadow-sm ring-1 ring-slate-100/80 h-full flex flex-col"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-3 leading-snug">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-[15px] md:text-base">{item.body}</p>
                {item.bullets ? (
                  <div className="mt-4 space-y-3 border-t border-slate-100 pt-4">
                    {item.bulletsHeading ? (
                      <p className="text-sm font-semibold text-slate-900 uppercase tracking-wide">{item.bulletsHeading}</p>
                    ) : null}
                    <ul className="space-y-2 text-slate-600 text-[15px] md:text-base leading-relaxed list-disc pl-5">
                      {item.bullets.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
          <p className="mt-12 text-slate-600 leading-relaxed max-w-3xl">
            Ready to talk scope?{" "}
            <Link href="/support" className="text-brand-blue font-semibold hover:underline">
              Start a conversation
            </Link>{" "}
            or read{" "}
            <Link href="/how-we-build" className="text-brand-blue font-semibold hover:underline">
              how we build the site
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 text-balance">Fits your mission, not a generic template</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            We scope navigation, content sections, and integrations around how your organization actually operates—then keep the technical story simple so your team is not stuck maintaining plugins.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/how-we-build" className="text-brand-blue font-semibold hover:underline">
              Read how the stack works →
            </Link>
            <Link href="/" className="text-slate-600 font-semibold hover:text-slate-900">
              Back to home →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
