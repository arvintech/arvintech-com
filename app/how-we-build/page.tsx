import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import WorkflowDiagram from "./WorkflowDiagram"
import GearSection from "./GearSection"

export const metadata: Metadata = {
  title: "How We Build the Site | Next.js & Vercel | arvintech",
  description:
    "This site is built in Next.js with Cursor and deployed on Vercel — not a traditional WordPress-style CMS. Learn how it works and why that matters.",
}

const processSteps = [
  {
    title: "Create and edit in Cursor",
    body:
      "Content and design live in the same workflow as the code. Cursor is an AI-assisted editor where I shape pages and features directly, with the model helping write and refine the underlying React and Next.js code.",
  },
  {
    title: "Review and refine locally",
    body:
      "Changes stay in the project until you are ready. You can preview the real site experience before anything is published, without logging into a separate “site admin” on the public internet.",
  },
  {
    title: "Publish with a push to Vercel",
    body:
      "When it is time to go live, updates are pushed to the host. Vercel runs a fresh production build and rolls out the new version worldwide in seconds across its global network.",
  },
  {
    title: "The live site is the build output",
    body:
      "Visitors get pre-rendered, optimized pages. There is no WordPress-style dashboard or database serving every page request in the same way a traditional CMS might.",
  },
] as const


const advantages: {
  title: string
  description: string | readonly string[]
}[] = [
  {
    title: "Speed",
    description: [
      "Pages are pre-built at deploy time and served from Vercel’s global edge network—so the browser gets a finished document from a location near the visitor, not a server assembling the page on the fly.",
      "Next.js compiles and code-splits each page so visitors only load what they need. React updates only what changed without reloading the whole document. Tailwind ships only the CSS classes in use. PostgreSQL, when data is needed, handles queries efficiently over a secure server route—never from the browser directly.",
    ] as const,
  },
  {
    title: "Security",
    description: [
      "There is no public admin login, no plugin runtime, and no live database behind static pages. The attack surfaces that make WordPress sites common targets simply are not present in this build.",
      "Private work—editing, deploying, secrets—lives in authenticated developer tooling (Cursor, Git, Vercel environment variables), not in a browser-facing login form. HTTPS and edge delivery are on by default from the first deploy.",
    ] as const,
  },
  {
    title: "Flexibility",
    description: [
      "The site is code-first: layouts, integrations, and experiments are implemented in the project itself, not constrained by what a theme vendor chose to support.",
      "New AI providers, third-party APIs, and product features all follow the same path: write the code, review it, deploy it—no plugin marketplace, no theme ceiling.",
    ] as const,
  },
  {
    title: "AI-ready site development",
    description: [
      "Cursor’s AI has full context on the project. Smart UI, automation hooks, and model integrations can go from idea to working code in days—because the model understands the existing codebase and writes code that fits it.",
      "The developer reviews, tests, and ships through the normal Git and Vercel workflow. AI compresses the drafting phase; quality judgment stays constant.",
    ] as const,
  },
  {
    title: "Predictable deploys",
    description: [
      "Every deploy is a clean build from a specific Git commit—no server drifting under manual edits. Branches get their own preview URL, making alpha and beta testing free of staging infrastructure.",
      "From ‘should we build this?’ to ‘someone is trying it in a browser’ is minutes. If something goes wrong in production, the previous deploy is one click away in Vercel.",
    ] as const,
  },
] as const

export default function HowWeBuildPage() {
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
              <Link href="/about" className="text-slate-600 hover:text-brand-green transition-colors">
                About
              </Link>
              <Link href="/clients" className="text-slate-600 hover:text-brand-green transition-colors">
                Clients
              </Link>
              <Link href="/support" className="text-slate-600 hover:text-brand-green transition-colors">
                Support
              </Link>
              <Link
                href="/work-with-us"
                className="px-5 py-2 bg-brand-green text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
              >
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
          <p className="text-sm font-semibold text-brand-blue uppercase tracking-wider mb-3">Next.js site</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 text-balance">
            How this site is built
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            A short, non-technical overview of what powers these pages, how updates go live, and why that approach has real advantages.
          </p>
        </div>
      </header>

      <section className="px-6 pb-20 -mt-4">
        {/* Plain-terms intro card — stays narrow for readability */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">In plain terms</h2>
            <p className="text-slate-900 text-lg font-semibold leading-relaxed mb-5">
              This site is built with Next.js and hosted with Vercel.
            </p>
            <div className="space-y-5 text-slate-600 text-lg leading-relaxed">
              <p>
                {`The site isn't a WordPress-style website where someone logs in to a dashboard and types posts. It's built in Cursor — an AI-assisted editor where I work on the site's content and design directly, with the AI helping write the underlying code.`}
              </p>
              <p>
                {`When I'm ready to publish, the changes push to Vercel, which rebuilds the site and puts the update live worldwide in seconds.`}
              </p>
              <p>
                {`The result is a site that's faster, more secure, and more flexible than a traditional CMS, because there's no database or admin panel exposed to the internet — the live site is essentially a pre-built, high-performance version of the source files.`}
              </p>
            </div>
          </div>
        </div>

        {/* Gear section — wider container so gears can maximise */}
        <div className="max-w-6xl mx-auto">
          <GearSection />
        </div>
      </section>

      <section className="py-20 px-6 bg-white border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Development process</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From local editing to a global deploy — a straightforward pipeline without a traditional CMS in the middle.
            </p>
          </div>
          <ol className="space-y-8">
            {processSteps.map((step, i) => (
              <li
                key={step.title}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 p-6 rounded-2xl bg-slate-50 border border-slate-100"
              >
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-green text-lg font-bold text-white"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="py-20 px-6 bg-slate-50 border-y border-slate-200"
        aria-labelledby="client-developer-workflow-heading"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h2
              id="client-developer-workflow-heading"
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-balance"
            >
              Client and developer workflow
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {`How a business request becomes a live update without a WordPress admin in the middle. The client approves on real URLs; the developer keeps the source of truth in Git and the host in part 3 above.`}
            </p>
          </div>

          {/* Process illustration — click any step for a deep dive */}
          <WorkflowDiagram />
        </div>
      </section>

      <section
        className="py-20 px-6 bg-gradient-to-b from-slate-100/80 to-slate-50 border-y border-slate-200/80"
        aria-labelledby="nextjs-not-wordpress-heading"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2
              id="nextjs-not-wordpress-heading"
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-balance"
            >
              Sites built with Next.js are not WordPress sites
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              WordPress is a fine product for many use cases, but a Next.js site is a different class of system. The labels are not interchangeable: one is a PHP and database application with a web admin, the other is a modern web application you ship as a build from source.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white border border-slate-200 p-6 md:p-8 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-2">What a typical WordPress site is</h3>
              <p className="text-lg font-semibold text-slate-900 mb-4">A CMS in the original sense</p>
              <ul className="space-y-3 text-slate-600 text-sm md:text-base leading-relaxed list-disc pl-5">
                <li>You log in to a dashboard on the web to create posts and pages, often with a WYSIWYG or block editor.</li>
                <li>PHP runs on the server, themes and plugins extend behavior, and content usually lives in a MySQL (or similar) database.</li>
                <li>That admin URL, plugin set, and database are part of how the public site is produced and updated.</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-brand-blue/10 to-brand-green/10 border-2 border-brand-green/20 p-6 md:p-8 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-brand-blue mb-2">What this Next.js site is</h3>
              <p className="text-lg font-semibold text-slate-900 mb-4">A compiled web app, not a browser-based CMS for day-to-day editing</p>
              <ul className="space-y-3 text-slate-700 text-sm md:text-base leading-relaxed list-disc pl-5">
                <li>Content and design are edited in a developer workflow (here, in Cursor) and versioned in source, not in a &quot;posts&quot; table you log into to type articles.</li>
                <li>The production site is the output of a build—static and server components as designed—delivered on Vercel, without WordPress, PHP, or a WordPress plugin graph on the host.</li>
                <li>So when we say the site is built in Next.js, we mean a different stack entirely: it is <strong>not</strong> a WordPress site wearing a new theme, and the migration path to or from WordPress is a real project, not a toggle.</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <Link
              href="#advantages"
              className="btn-green text-lg px-8 py-4 inline-flex items-center justify-center gap-2"
            >
              Go deeper
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-6 scroll-mt-28">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Advantages</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Why a Next.js site on Vercel, maintained from Cursor, compares favorably to a classic CMS for this kind of build.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {advantages.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                {Array.isArray(item.description) ? (
                  <div className="space-y-3 text-slate-600 leading-relaxed text-sm md:text-base flex-1">
                    {item.description.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base flex-1">{item.description}</p>
                )}
                {item.title === "Speed" && (
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <Link
                      href="/how-we-build/speed"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:text-brand-green transition-colors"
                    >
                      Full speed deep dive
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                )}
                {item.title === "Security" && (
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <Link
                      href="/how-we-build/security"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:text-brand-green transition-colors"
                    >
                      Full security deep dive
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                )}
                {item.title === "Flexibility" && (
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <Link
                      href="/how-we-build/flexibility"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:text-brand-green transition-colors"
                    >
                      Full flexibility deep dive
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                )}
                {item.title === "AI-ready site development" && (
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <Link
                      href="/how-we-build/ai-ready"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:text-brand-green transition-colors"
                    >
                      Full AI-ready deep dive
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                )}
                {item.title === "Predictable deploys" && (
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <Link
                      href="/how-we-build/predictable-deploys"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:text-brand-green transition-colors"
                    >
                      Full deploys deep dive
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WordPress Comparison */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-3 py-1 bg-brand-yellow/20 text-brand-yellow text-sm font-semibold rounded-full mb-4">HONEST COMPARISON</span>
                <h3 className="text-3xl font-bold mb-4">What About WordPress?</h3>
                <p className="text-slate-300 mb-6">
                  WordPress powers 43% of the web—and for good reason. It&apos;s proven, familiar, and has a massive
                  ecosystem. <strong className="text-white">We still build WordPress sites when it makes sense.</strong>
                </p>
                <p className="text-slate-300">
                  But for businesses that need <strong className="text-brand-green">speed, security, and AI-ready architecture</strong>,
                  Next.js is the clear choice. Here&apos;s why:
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                  <span className="text-slate-300">Security Vulnerabilities</span>
                  <div className="flex gap-4">
                    <span className="text-red-400 font-semibold">WordPress: High</span>
                    <span className="text-brand-green font-semibold">Next.js: Low</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                  <span className="text-slate-300">Page Load Speed</span>
                  <div className="flex gap-4">
                    <span className="text-yellow-400 font-semibold">WordPress: 2-4s</span>
                    <span className="text-brand-green font-semibold">Next.js: &lt;1s</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                  <span className="text-slate-300">Hosting Costs</span>
                  <div className="flex gap-4">
                    <span className="text-yellow-400 font-semibold">WordPress: $$</span>
                    <span className="text-brand-green font-semibold">Next.js: $</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                  <span className="text-slate-300">AI Integration</span>
                  <div className="flex gap-4">
                    <span className="text-red-400 font-semibold">WordPress: Limited</span>
                    <span className="text-brand-green font-semibold">Next.js: Native</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evaluation CTA */}
      <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-brand-blue via-brand-blue/90 to-brand-green">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -top-10 -left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

        <div className="relative max-w-2xl mx-auto text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-5">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Quick self-assessment
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 text-balance leading-tight">
            I want one —<br className="hidden sm:block" /> but do I need one?
          </h2>

          <p className="text-white/70 text-lg leading-relaxed mb-3">
            Eight questions. No email required.
          </p>
          <p className="text-white/90 text-lg leading-relaxed mb-10">
            Get an honest answer about whether a Next.js site fits where your business is right now.
          </p>

          {/* Pill stats row */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["8 questions", "~2 minutes", "No sign-up", "Instant result"].map((pill) => (
              <span
                key={pill}
                className="px-4 py-1.5 rounded-full bg-white/15 border border-white/30 text-sm font-medium text-white"
              >
                {pill}
              </span>
            ))}
          </div>

          <Link
            href="/how-we-build/do-i-need-one"
            className="inline-flex items-center gap-2 bg-white text-brand-blue font-bold rounded-xl text-lg px-10 py-4 shadow-lg hover:bg-white/90 hover:shadow-xl transition-all"
          >
            Take the evaluation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white/80 mb-6 text-lg">
            Want a mission-focused site built on the same kind of modern stack? Explore the full service offering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/mission-web-studio"
              className="inline-flex items-center justify-center btn-green text-lg px-8 py-4"
            >
              Mission Pages Studio
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-colors text-lg px-8 py-4"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
