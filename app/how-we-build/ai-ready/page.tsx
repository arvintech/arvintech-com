import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AI-Ready Site Development | Deep Dive | arvintech",
  description:
    "How building a Next.js site in Cursor makes sophisticated AI features achievable in days—smart UI, automation hooks, model integrations, and a real web surface that grows with the product.",
}

const sections = [
  {
    title: "What AI-ready means in practice",
    body: [
      "An AI-ready site is not a site that has a chatbot widget pasted in from a third-party script. It is a web application whose server layer can call AI models, process responses, store results, and present them to users—using the same codebase, the same deploy pipeline, and the same review process as everything else on the site.",
      "Because this project is a real Next.js application, those capabilities are built-in possibilities, not add-ons. A server route can call the Anthropic Claude API, stream the response to the browser, log the interaction to a database, and return structured data for the UI to render. All of that is production-grade code in the repository, not a plugin configured through a dashboard.",
      "This repo already includes a working AI API route (`app/api/chat/route.ts`) built on the Anthropic SDK. It took no plugin install and no third-party service account beyond the API key in Vercel's environment variables.",
    ],
  },
  {
    title: "Cursor as the development environment",
    body: [
      "Cursor is an AI-assisted IDE built on the same foundation as VS Code. The AI model in Cursor has context on the full project: file structure, open files, recent changes, and the broader codebase. It does not just autocomplete lines—it can draft entire components, refactor across files, explain unfamiliar code, and write tests based on what already exists.",
      "For web development specifically, this means features that would take a developer a week of manual implementation—a streaming chat interface, a form that triggers a workflow, a page that pulls from a new API—can reach a working first draft in hours. The developer's job shifts from writing every line to directing, reviewing, and refining what the model produces.",
      "The key word is reviewing. Cursor-generated code is real code that runs in production. It needs to be read, tested, and understood by the developer before it ships, the same as any other code. The speed comes from the drafting phase, not from skipping the review.",
    ],
  },
  {
    title: "Types of AI features this stack supports",
    body: [
      "Conversational interfaces. A streaming chat backed by a language model, with conversation history stored in the database and context managed in the server route. The UI updates in real time as tokens arrive, using React's streaming support and Next.js server-sent events or the Vercel AI SDK.",
      "Document and content processing. API routes can receive uploaded documents, send them to a model for extraction or classification, and return structured results to the user. This is useful for intake forms, quote generators, and content analysis tools.",
      "Automation hooks. Server routes can trigger on form submissions, webhooks, or scheduled jobs—running a model call as part of a workflow rather than an interactive experience. An email summary, an anomaly detection alert, or a generated report are all achievable without a separate automation platform.",
      "Retrieval-augmented generation (RAG). Combining a vector database (Pinecone, pgvector on Postgres, or similar) with a language model allows the site to answer questions grounded in specific documents or data sets. Responses reference your content, not the model's general training.",
      "Structured output and form intelligence. Models can be prompted to return JSON that matches a TypeScript type, which the application validates and uses like any other API response. This makes AI a data source that plugs into existing UI components rather than a black box that outputs unstructured text.",
    ],
  },
  {
    title: "Days instead of weeks",
    body: [
      "The compressed timeline is real but comes with a qualifier: it applies to features that map well to the model's strengths and to a codebase the developer understands. Greenfield UI that involves known patterns—forms, data display, navigation, modals—can move from brief to working preview quickly because the model can draft competent starting points for those patterns.",
      "Complex business logic, novel integrations, or features that involve debugging unfamiliar third-party APIs still require human judgment and iteration. The timeline improves but does not collapse to zero. A realistic expectation is that AI assistance compresses implementation time significantly for common patterns and meaningfully for harder ones, while the review and quality bar stays constant.",
      "For clients this means a tighter loop between describing a feature and seeing a working version of it. The test drive phase in the client workflow benefits directly: early previews of AI-backed features can be reviewed and redirected before significant implementation work has accumulated.",
    ],
  },
  {
    title: "What it asks of the development process",
    body: [
      "AI-assisted development shifts the bottleneck from writing code to reviewing it. The developer needs to read what the model produces, understand it well enough to catch logical errors or security issues, and be willing to discard drafts that are plausible-looking but wrong.",
      "Generated code can be confidently wrong. A model may produce a component that renders correctly in one state and fails silently in another, or an API handler that works for the happy path but does not handle errors. The test suite, the preview build, and code review are the quality gates—none of them disappear because the code was AI-generated.",
      "The Git workflow is especially important in this context. Because changes can be drafted quickly, the discipline of committing only reviewed and tested work—on a branch, with a clear message, reviewed before merge—keeps the production history clean and the deploy trustworthy. The speed of the drafting phase is only useful if the review phase keeps pace.",
    ],
  },
  {
    title: "Staying current as models improve",
    body: [
      "The AI model landscape is changing faster than any previous technology layer in web development. New models, new APIs, new pricing tiers, and new capabilities appear on timescales of weeks. A site that calls a model through an official SDK can upgrade to a new model with a configuration change. A site locked to a plugin-based integration is dependent on the plugin author making that update.",
      "This project uses the Anthropic SDK as a direct dependency. Updating to a new Claude model version is a one-line change in the route file and a version bump in package.json. Testing the new behavior is a branch and a preview. The site stays at the frontier of what models can do without waiting for a plugin author.",
      "The same applies to switching providers. If a competitor releases a model that performs better for a specific use case, the migration path is changing an SDK import and an API call, not replacing a CMS plugin and reconfiguring a third-party dashboard.",
    ],
  },
] as const

export default function AiReadyPage() {
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
            AI-ready site development
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            How building in Cursor on a real Next.js codebase makes sophisticated AI features achievable in days—and what that actually requires of the development process.
          </p>
        </div>
      </header>

      <section className="px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-5">The short version</h2>
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                {`Cursor's AI has full context on the project. A developer can describe a feature—a streaming chat, a document processor, a form that triggers a model call—and get a working first draft quickly, because the model understands the existing codebase and can write code that fits it. The developer reviews, tests, and ships the result through the normal Git and Vercel workflow.`}
              </p>
              <p>
                {`Features that would take a week to write manually can reach a reviewable first draft in a day. That compression is real for common patterns. Review, testing, and quality judgment stay constant—AI assistance speeds up the drafting, not the thinking.`}
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
            Want to explore more about how this site is built or work with arvintech on an AI-capable project?
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
