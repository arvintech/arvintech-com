import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Predictable Deploys | Deep Dive | arvintech",
  description:
    "How the Git and Vercel workflow keeps every deploy traceable, every preview shareable, and every feature decision tied to something you can try in a browser before it goes live.",
}

const sections = [
  {
    title: "Every deploy starts from a known state",
    body: [
      "The live site is not the product of accumulated manual edits to a running server. It is the output of a build from a specific commit in the Git repository. That means the live site is always traceable: you can look at the repository and know exactly what code is running in production, when it was merged, and who approved it.",
      "On a server that has been manually edited over time—files uploaded via FTP, settings changed in a WordPress admin, plugins activated and deactivated—the live state and the development state drift apart. It becomes hard to reproduce the production environment locally, and hard to know what is actually running. That problem does not exist when every deploy comes from a clean build.",
      "Vercel's build logs record what happened at every deploy: which commit triggered it, what the build output was, and whether any errors were encountered. If a deploy introduces a problem, the previous working version is one click away in the Vercel dashboard—or one revert commit in Git.",
    ],
  },
  {
    title: "Preview URLs: alpha and beta without extra infrastructure",
    body: [
      "Every branch or pull request in the repository can automatically get its own preview deployment on Vercel. The URL is stable for the life of that branch, updates when new commits are pushed to it, and is accessible to anyone with the link—no VPN, no staging server credentials, no build machine to spin up.",
      "This makes alpha testing straightforward. Internal team members or stakeholders can review a feature on a real URL before it is anywhere near production. Feedback can be given on the actual built experience, not a screenshot or a local demo that requires the reviewer to install software.",
      "Beta testing works the same way. A trusted client or a small group of users can be given the preview URL for a new feature branch. Their feedback comes in before the merge, which is the right time to make changes—not after the feature is live and rolled back becomes a bigger operation.",
      "The preview and the production build are produced by the same pipeline from the same configuration. What the reviewer sees on the preview URL is what users will see after the merge. There is no 'it worked on staging but broke in production' caused by environment differences.",
    ],
  },
  {
    title: "The feature decision loop",
    body: [
      "In a traditional setup—especially one involving a separate staging CMS or a manual FTP-based deploy—the path from 'should we include this feature?' to 'someone can try it in a browser' can take days. The developer builds locally, requests a deploy to staging, waits for the process, shares credentials, and waits for feedback.",
      "With the Git and Vercel workflow, that path is: implement in Cursor, push the branch, and share the preview URL—measured in minutes once the build completes (typically under two). The decision to ship or iterate is made on the actual feature in a browser, not on a written description of it.",
      "This compresses the feedback loop in a way that changes how features are evaluated. Early previews are cheap to produce and throw away. The team can try five different directions before committing to one, without each attempt requiring a staging deployment and a day of waiting.",
    ],
  },
  {
    title: "Branches, pull requests, and the merge gate",
    body: [
      "Work in progress stays on a branch. The main branch—the one that triggers production deploys—only receives changes through a pull request. A pull request is a formal request to merge, with a diff showing exactly what will change, a space for comments and review, and an approval step before anything moves.",
      "This is the point where code review happens: checking for logic errors, catching copy mistakes, confirming that the feature matches what was agreed in the client brief. The branch's preview URL is linked in the pull request, so reviewers can click through the actual experience while reading the diff.",
      "Branch protection rules on the Git host can enforce that a pull request has at least one approval, that automated checks pass, and that the branch is up to date with main before a merge is allowed. These are guardrails that prevent a hasty push from reaching production without review.",
    ],
  },
  {
    title: "Rollback when something goes wrong",
    body: [
      "No deploy pipeline prevents all mistakes. What predictability provides is a clear path back. Vercel keeps a history of all previous deployments, each tied to a commit. If a production deploy causes an issue, promoting the last known-good deployment takes seconds and does not require a developer to be at a machine running Git commands.",
      "At the Git level, reverting a merge is a standard operation that creates a new commit undoing the change. The revert goes through the same pull request and preview process as the original feature, so the rollback is also reviewed and traceable—not a panicked direct edit to a live file.",
      "Because the live site is always the product of a clean build, there is no partial state to reason about. Either the problematic code is in the build or it is not. That binary clarity makes incident response faster than debugging a server that has been edited in place.",
    ],
  },
  {
    title: "How this compares to a WordPress deployment",
    body: [
      "A WordPress site's state is split between the file system (theme files, plugin files, wp-config) and the database (posts, settings, plugin configuration). Deploying a change often means updating files on the server while the database retains settings from the previous version. Keeping these in sync is a manual coordination task that many small sites simply do not do well.",
      "WordPress staging plugins can replicate content between environments, but they are an additional layer of complexity rather than a built-in guarantee. Migrating a database between staging and production, maintaining content parity, and making sure plugin settings transfer correctly are recurring friction points that the Git and Vercel model sidesteps entirely.",
      "In the Next.js model, 'deployment' means running a build from a commit. The entire site—pages, API routes, configuration—is produced from that build, and the environment variables set in Vercel complete the picture. There is no database of CMS content to migrate separately, and no server-side state that can drift from what is in the repository.",
    ],
  },
] as const

export default function PredictableDeploysPage() {
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
            Predictable deploys
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Every deploy comes from a known Git commit. Preview URLs make alpha and beta testing free. Features are decided on real browser previews, not descriptions—and rollback is one click.
          </p>
        </div>
      </header>

      <section className="px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-5">The short version</h2>
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                {`The live site is always the output of a clean build from a specific commit. There is no server that has drifted under manual edits. Every branch gets a preview URL so features are reviewed on the real built experience before they are merged. If something goes wrong, the previous deploy is one click away in Vercel.`}
              </p>
              <p>
                {`The loop from "should we build this?" to "someone is trying it in a browser" is measured in minutes, not days. Decisions are made on evidence, not descriptions.`}
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
