import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Why Next.js Sites Are Flexible | Flexibility Deep Dive | arvintech",
  description:
    "A full explanation of the flexibility advantages of a code-first Next.js site—custom layouts, third-party integrations, AI APIs, and adaptability without plugin or theme constraints.",
}

const sections = [
  {
    title: "Code-first means no ceiling",
    body: [
      "On a template-driven CMS, flexibility is determined by what the theme author and plugin developers chose to support. If you need a layout that falls outside the theme's options, you are either modifying someone else's PHP—which breaks on the next theme update—or installing a page-builder plugin that introduces its own constraints.",
      "A Next.js site starts from code you own. Every page, layout, and component is written to do exactly what is needed, not adapted from a generic template. There is no theme vendor to wait on and no plugin marketplace to browse. If a design needs a three-column section that fades in on scroll with a live data feed, that is something you build, not something you hope a plugin ships.",
      "This ownership also extends to performance. A template often ships JavaScript, CSS, and markup that applies to every possible layout a theme might use, whether your site uses those features or not. A code-first project ships only what is in it.",
    ],
  },
  {
    title: "Layouts and design",
    body: [
      "Components in React are composable. A section, a card, a navigation pattern, a form—each is a self-contained piece that can be reused, combined, and customized independently. Changing the way a component looks across the entire site is a change in one file, not a search-and-replace through a database of post metadata.",
      "Responsive behavior, animation, and interactive states are all expressed directly in the component. There is no theme settings panel that overrides your intentions based on options you did not know existed. What the developer writes is what the browser renders.",
      "A/B testing and experimentation can be implemented as real feature flags or split routes in Next.js, with the test logic in the application code rather than in a third-party plugin that requires a paid tier and an external dashboard to manage.",
    ],
  },
  {
    title: "Third-party integrations",
    body: [
      "Connecting a WordPress site to a third-party service usually means finding a plugin someone built for that service, checking when it was last updated, installing it, and trusting that it does not conflict with the other plugins already running. For many integrations, the plugin option does not exist at all.",
      "A Next.js app connects to third-party services the same way any modern web application does: over HTTPS, using the service's official SDK or REST/GraphQL API, called from a server route so credentials stay off the client. The Stripe SDK, the Anthropic SDK, a custom business intelligence API, a CRM webhook receiver—these are all npm packages or fetch calls, not plugin installs.",
      "When a service changes its API or releases a new SDK version, updating the integration is a normal package upgrade. There is no third-party plugin author standing between the service and the site.",
    ],
  },
  {
    title: "AI agents and APIs",
    body: [
      "The AI API landscape moves fast. New models, new providers, new capabilities, and breaking API changes happen on a timescale of weeks, not quarters. A site built on a plugin-based CMS can only use AI features that a plugin author has chosen to expose, in the shape the plugin author chose, updated when the plugin author gets around to it.",
      "A Next.js app accesses AI APIs directly. The Anthropic Claude SDK, OpenAI, Mistral, Google Gemini, and any other provider with a REST API or npm package can be called from a server route. The site in this repo already has a working AI chat route built on the Anthropic SDK—a capability that required no plugin install and no third-party dashboard.",
      "Streaming responses, function calling, tool use, multi-step agent workflows, retrieval-augmented generation with a vector store—these are all achievable in a Next.js app because the application layer is real code, not a configuration interface built by a plugin author for an older version of a model.",
      "When a better model or a lower-cost provider becomes available, swapping it in is a dependency change and a few lines of code. The site follows the AI ecosystem's pace, not the pace of a plugin marketplace.",
    ],
  },
  {
    title: "Adaptability over time",
    body: [
      "Software requirements change. A site that starts as a marketing brochure may need a member portal a year later. A contact form may evolve into a full intake workflow with email automation and CRM sync. These additions are normal scope expansions for a code-first application: new routes, new API connections, new database tables.",
      "On a CMS, the same expansion often requires switching page builders, hiring a specialist in a particular WordPress stack, or migrating to a different CMS entirely. The site is hostage to the decisions made when the theme was chosen.",
      "Because the Next.js project is source code in a Git repository, the codebase can grow with the business. A new feature is a branch, a pull request, a review, and a deploy—the same workflow regardless of how much the scope has grown from the original site.",
    ],
  },
  {
    title: "What flexibility requires from the team",
    body: [
      "A code-first approach is not a free lunch. It asks for a developer who can read and write the codebase, review dependencies, and make deliberate decisions about what is added. The flexibility that comes from owning the code is only useful if someone understands the code.",
      "For clients, this means the relationship with the developer matters. Clear briefs, review of preview builds, and a feedback loop (described in the client workflow section) replace the ability to log into a dashboard and edit things directly. That is the tradeoff: less self-service in the moment, more capability and fewer surprises over time.",
      "For arvintech projects specifically, the workflow is designed so clients stay informed and in control of direction without needing to touch the code. The developer handles the implementation; the client approves it. That separation is what makes large-scale flexibility achievable without creating confusion.",
    ],
  },
] as const

export default function FlexibilityPage() {
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
            Why a Next.js site is flexible
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            What it means to own the code instead of a theme—custom layouts, real integrations, AI APIs without plugin limits, and a codebase that grows with the business.
          </p>
        </div>
      </header>

      <section className="px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-5">The short version</h2>
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                {`Flexibility in a CMS is bounded by what the theme and plugin authors decided to support. Flexibility in a code-first Next.js project is bounded by what is technically possible in a web application—which is a much larger space. New layouts, new integrations, new AI providers, and new product features all follow the same path: write the code, review it, deploy it.`}
              </p>
              <p>
                {`The cost of that flexibility is that someone needs to understand and maintain the code. The client workflow is designed to keep that responsibility clearly with the developer while keeping the client in control of direction.`}
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
