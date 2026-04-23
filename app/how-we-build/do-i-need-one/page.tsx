"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"

const questions = [
  {
    id: "current_site",
    question: "What is your current website situation?",
    options: [
      { label: "I have no website yet", score: 3 },
      { label: "I have a WordPress site that feels slow or hard to manage", score: 3 },
      { label: "I have a basic website that rarely changes", score: 1 },
      { label: "I have a modern site I'm happy with", score: 0 },
    ],
  },
  {
    id: "content_updates",
    question: "How often does your site content need to change?",
    options: [
      { label: "Rarely — a few times per year", score: 1 },
      { label: "Monthly — pages, copy, or offers update regularly", score: 2 },
      { label: "Weekly or more — active blog, news, or products", score: 3 },
      { label: "I need clients or staff to update content themselves", score: 0 },
    ],
  },
  {
    id: "security",
    question: "How important is site security to your business?",
    options: [
      { label: "Critical — I handle sensitive client data or transactions", score: 3 },
      { label: "Important — I've had security issues or worry about them", score: 3 },
      { label: "Moderate — I'd like it secure but haven't thought much about it", score: 2 },
      { label: "Low priority right now", score: 0 },
    ],
  },
  {
    id: "performance",
    question: "How much does page speed matter to your visitors?",
    options: [
      { label: "A lot — slow pages lose me leads or sales", score: 3 },
      { label: "It matters — I've heard my site is slow", score: 2 },
      { label: "Somewhat — I'd prefer fast but haven't measured it", score: 1 },
      { label: "Not a current priority", score: 0 },
    ],
  },
  {
    id: "ai_features",
    question: "Are you interested in AI-powered features on your site?",
    options: [
      { label: "Yes — I want chat, automation, or AI integrations now or soon", score: 3 },
      { label: "Maybe — I'm curious but haven't decided what I'd use", score: 2 },
      { label: "Not yet — standard web features are enough for now", score: 1 },
      { label: "No — not relevant to my business", score: 0 },
    ],
  },
  {
    id: "growth",
    question: "How do you expect your site to grow over the next 2 years?",
    options: [
      { label: "Significantly — new features, portals, or integrations", score: 3 },
      { label: "Moderately — more pages and content", score: 2 },
      { label: "Slightly — a few tweaks here and there", score: 1 },
      { label: "It will stay roughly the same", score: 0 },
    ],
  },
  {
    id: "wordpress_pain",
    question: "Have you experienced any of these with WordPress or similar platforms?",
    options: [
      { label: "Yes — hacked site, plugin conflicts, or update breakages", score: 3 },
      { label: "Yes — the admin feels cluttered and hard to manage", score: 2 },
      { label: "Somewhat — minor frustrations but nothing major", score: 1 },
      { label: "No — I've had no issues or I'm not on WordPress", score: 0 },
    ],
  },
  {
    id: "dev_relationship",
    question: "Are you comfortable working with a developer rather than editing the site yourself?",
    options: [
      { label: "Yes — I'd rather send requests and get results without touching the site", score: 3 },
      { label: "Mostly — I'd want occasional access to change simple text myself", score: 1 },
      { label: "I need to manage most updates myself without a developer", score: -2 },
      { label: "I need full control of the site without any technical dependency", score: -3 },
    ],
  },
  {
    id: "business_type",
    question: "What best describes your business?",
    options: [
      { label: "Ecommerce store or online marketplace", score: 3 },
      { label: "Service-based business (consulting, professional, hospitality)", score: 2 },
      { label: "Non-profit, charity, or community organization", score: 1 },
      { label: "Content site, blog, or personal portfolio", score: 0 },
    ],
  },
  {
    id: "ecommerce",
    question: "Do you sell products or services online?",
    options: [
      { label: "Yes — large or complex catalog (hundreds of products)", score: 3 },
      { label: "Yes — small catalog (under 50 products)", score: 2 },
      { label: "Not yet, but planning to sell online soon", score: 1 },
      { label: "No, we don't sell online", score: 0 },
    ],
  },
  {
    id: "site_count",
    question: "How many websites do you currently manage or need?",
    options: [
      { label: "Three or more", score: 3 },
      { label: "Two", score: 2 },
      { label: "One", score: 1 },
      { label: "None yet — starting from scratch", score: 0 },
    ],
  },
  {
    id: "team_size",
    question: "How many people work in your business?",
    options: [
      { label: "50 or more", score: 3 },
      { label: "10–49", score: 2 },
      { label: "2–9", score: 1 },
      { label: "Just me", score: 0 },
    ],
  },
  {
    id: "marketing_budget",
    question: "Do you have a dedicated marketing budget?",
    options: [
      { label: "Yes — $5,000 or more per month", score: 3 },
      { label: "Yes — $2,000–$4,999 per month", score: 2 },
      { label: "Yes — under $2,000 per month", score: 1 },
      { label: "No dedicated budget yet", score: 0 },
    ],
  },
  {
    id: "online_advertising",
    question: "Do you run or want to run online advertising?",
    options: [
      { label: "Yes — actively running Google, Meta, or YouTube ads", score: 3 },
      { label: "Yes — planning to start paid ads soon", score: 2 },
      { label: "Maybe — open to it but haven't decided", score: 1 },
      { label: "No — not interested in paid advertising", score: 0 },
    ],
  },
  {
    id: "social_presence",
    question: "How active is your social media marketing presence?",
    options: [
      { label: "Very active — regular posts, engaged following, paid social", score: 3 },
      { label: "Somewhat active — occasional posts but no real strategy", score: 2 },
      { label: "Minimal — a profile exists but rarely used", score: 1 },
      { label: "None — not on social media", score: 0 },
    ],
  },
  {
    id: "members_users",
    question: "Do you have members, registered users, or a community?",
    options: [
      { label: "Yes — with logins, profiles, or role-based access", score: 3 },
      { label: "Yes — basic newsletter or mailing list subscribers", score: 2 },
      { label: "Not yet, but I want to build one", score: 1 },
      { label: "No — it's a public-only site", score: 0 },
    ],
  },
  {
    id: "subscription",
    question: "Do you want a subscription or recurring billing model?",
    options: [
      { label: "Yes — memberships, SaaS, or recurring service plans", score: 3 },
      { label: "Yes — a simple newsletter or content subscription", score: 2 },
      { label: "Maybe — I'd like to explore it", score: 1 },
      { label: "No — one-time purchases or no billing needed", score: 0 },
    ],
  },
  {
    id: "custom_function",
    question: "Would you like a custom function built into your website?",
    subtext: "Custom functions go beyond standard pages — think client portals, employee dashboards, booking systems, or internal tools.",
    options: [
      { label: "Yes — both a customer-facing portal and an employee or internal portal", score: 3 },
      { label: "Yes — a customer-facing portal (bookings, accounts, client self-service)", score: 2 },
      { label: "Yes — an internal employee or team portal only", score: 1 },
      { label: "No — standard pages and content are all I need", score: 0 },
    ],
  },
  {
    id: "ai_support",
    question: "Do you need AI-powered front-line support on your site?",
    subtext: "Front-line AI handles quick questions (under 5 min) instantly — filtering them before they reach your team.",
    options: [
      { label: "Yes — handle most queries automatically, escalate complex ones to humans", score: 3 },
      { label: "Yes — answer FAQs and basic questions instantly, 24/7", score: 2 },
      { label: "Maybe — I'm interested but haven't decided", score: 1 },
      { label: "No — human support or a contact form is enough", score: 0 },
    ],
  },
] as const

type QuestionId = typeof questions[number]["id"]
type Answers = Partial<Record<QuestionId, number>>

function getResult(score: number, answered: number): {
  level: "strong" | "good" | "possible" | "notyet"
  headline: string
  summary: string
  cta: string
  ctaHref: string
} {
  if (answered < questions.length) {
    return {
      level: "good",
      headline: "Answer all questions for your result",
      summary: "",
      cta: "",
      ctaHref: "",
    }
  }
  if (score >= 38) {
    return {
      level: "strong",
      headline: "A strong fit",
      summary:
        "Your answers point clearly toward a Next.js site. You have real pain points with your current setup, care about performance and security, and are open to working through a developer—which is exactly the workflow this stack is built for. The advantages (speed, security, flexibility, AI-readiness) align directly with what you need.",
      cta: "Start the conversation",
      ctaHref: "/work-with-us",
    }
  }
  if (score >= 21) {
    return {
      level: "good",
      headline: "A good fit with some things to consider",
      summary:
        "Most of your needs align well with a Next.js site. There may be one or two areas—content update frequency or self-service requirements—where the tradeoffs deserve a closer look before committing. A conversation about your specific situation will clarify whether the workflow fits.",
      cta: "Let's talk through it",
      ctaHref: "/work-with-us",
    }
  }
  if (score >= 7) {
    return {
      level: "possible",
      headline: "Possible, but worth a conversation first",
      summary:
        "A Next.js site could work for your situation, but there are gaps—particularly if you need to update content frequently without developer involvement, or if a simpler solution would serve you just as well. It's worth talking through what you actually need before deciding on the stack.",
      cta: "Let's discuss your needs",
      ctaHref: "/work-with-us",
    }
  }
  return {
    level: "notyet",
    headline: "Maybe not the right fit right now",
    summary:
      "Your answers suggest that self-service content management is a high priority, or that a simpler platform might serve your needs better at this stage. A Next.js site works best when there is a developer relationship in place and the site is expected to grow in complexity. That may not match where you are today—and that's fine.",
    cta: "Still have questions? Talk to us",
    ctaHref: "/work-with-us",
  }
}

const levelStyles = {
  strong: {
    bg: "bg-brand-green/10 border-brand-green/30",
    badge: "bg-brand-green text-white",
    badgeText: "Strong fit",
  },
  good: {
    bg: "bg-brand-blue/10 border-brand-blue/30",
    badge: "bg-brand-blue text-white",
    badgeText: "Good fit",
  },
  possible: {
    bg: "bg-brand-yellow/10 border-brand-yellow/30",
    badge: "bg-yellow-500 text-white",
    badgeText: "Worth discussing",
  },
  notyet: {
    bg: "bg-slate-100 border-slate-300",
    badge: "bg-slate-500 text-white",
    badgeText: "Maybe not yet",
  },
}

export default function DoINeedOnePage() {
  const [answers, setAnswers] = useState<Answers>({})
  const [aiText, setAiText] = useState("")
  const [aiLoading, setAiLoading] = useState(false)
  const [aiError, setAiError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const resultRef = useRef<HTMLDivElement>(null)
  const hasFetched = useRef(false)

  const answered = Object.keys(answers).length
  const score = Object.values(answers).reduce((a, b) => a + b, 0)
  const result = getResult(score, answered)
  const allAnswered = answered === questions.length

  useEffect(() => {
    if (!allAnswered || hasFetched.current) return
    hasFetched.current = true
    setAiLoading(true)
    setAiText("")
    setAiError(null)

    const answersPayload = questions.map((q) => {
      const selectedScore = answers[q.id as QuestionId]
      const selectedOption = q.options.find((o) => o.score === selectedScore)
      return {
        question: q.question,
        answer: selectedOption?.label ?? "",
      }
    })

    fetch("/api/quiz-assessment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answers: answersPayload, level: result.level }),
    }).then(async (res) => {
      if (!res.ok || !res.body) {
        setAiError("Could not load your assessment. Please try again.")
        setAiLoading(false)
        return
      }
      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let buffer = ""
      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        buffer += decoder.decode(value, { stream: true })
        const lines = buffer.split("\n")
        buffer = lines.pop() ?? ""
        for (const line of lines) {
          if (!line.startsWith("data: ")) continue
          const data = line.slice(6).trim()
          if (data === "[DONE]") { setAiLoading(false); continue }
          try {
            const parsed = JSON.parse(data)
            if (parsed.error) { setAiError(parsed.error); setAiLoading(false) }
            else if (parsed.text) setAiText((prev) => prev + parsed.text)
          } catch { /* ignore malformed chunks */ }
        }
      }
      setAiLoading(false)
      setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100)
    }).catch(() => {
      setAiError("Network error. Please try again.")
      setAiLoading(false)
    })
  }, [allAnswered, answers, result.level])

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/arvintech-blocks-logo.png" alt="ArvinTech" width={40} height={40} className="w-10 h-10" />
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

      {/* Hero */}
      <header className="pt-32 pb-16 px-6 bg-gradient-to-br from-brand-blue/10 via-white to-brand-green/10 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-16 h-16 bg-brand-blue/20 rounded-xl rotate-12 animate-float" />
        <div className="absolute top-40 right-20 w-12 h-12 bg-brand-green/20 rounded-lg -rotate-6 animate-float" style={{ animationDelay: "1s" }} />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <Link
            href="/how-we-build"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:text-brand-green transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            How We Build
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 text-balance">
            Do I need a Next.js site?
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-4">
            {`You want one. But is it the right fit for where your business is right now?`}
          </p>
          <p className="text-base text-slate-500 leading-relaxed mb-4">
            Answer 19 quick questions and get an honest assessment. No email required.
          </p>
          <p className="inline-flex items-center gap-2 text-xs text-slate-400 bg-slate-100 rounded-full px-4 py-2">
            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Your answers are confidential — nothing is stored or saved anywhere.
          </p>
        </div>
      </header>

      {/* Progress bar */}
      <div className="sticky top-[72px] z-40 bg-white border-b border-slate-200 px-6 py-3">
        <div className="max-w-2xl mx-auto flex items-center gap-4">
          <span className="text-xs font-semibold text-slate-500 shrink-0">{answered} / {questions.length} answered</span>
          <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-brand-green rounded-full transition-all duration-500"
              style={{ width: `${(answered / questions.length) * 100}%` }}
            />
          </div>
          {allAnswered ? (
            <span className="text-xs font-bold text-brand-green shrink-0">Complete</span>
          ) : (
            <span className="hidden sm:inline-flex items-center gap-1 text-xs text-slate-400 shrink-0">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Confidential · nothing saved
            </span>
          )}
        </div>
      </div>

      {/* Questions */}
      <section className="px-6 py-12">
        <div className="max-w-2xl mx-auto space-y-8">
          {questions.map((q, qi) => {
            const selected = answers[q.id as QuestionId]
            return (
              <div
                key={q.id}
                className={`bg-white rounded-2xl border shadow-sm p-6 md:p-8 transition-all ${
                  selected !== undefined ? "border-brand-green/40" : "border-slate-200"
                }`}
              >
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Question {qi + 1} of {questions.length}
                </p>
                <h2 className="text-lg md:text-xl font-semibold text-slate-900 mb-1">{q.question}</h2>
                {"subtext" in q && q.subtext && (
                  <p className="text-sm text-slate-500 mb-5 leading-relaxed">{q.subtext}</p>
                )}
                {!("subtext" in q && q.subtext) && <div className="mb-5" />}
                <div className="space-y-3">
                  {q.options.map((opt) => {
                    const isSelected = selected === opt.score && selected !== undefined
                    return (
                      <button
                        key={opt.label}
                        onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: opt.score }))}
                        className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all text-sm md:text-base font-medium ${
                          isSelected
                            ? "border-brand-green bg-brand-green/10 text-brand-green"
                            : "border-slate-200 hover:border-brand-blue/40 hover:bg-slate-50 text-slate-700"
                        }`}
                      >
                        {opt.label}
                      </button>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Result */}
      {allAnswered && (
        <section className="px-6 pb-20" ref={resultRef}>
          <div className="max-w-2xl mx-auto">
            <div className={`rounded-2xl border-2 p-8 md:p-10 ${levelStyles[result.level].bg}`}>
              <div className="flex items-center gap-3 mb-6">
                <span className={`px-4 py-1.5 rounded-full text-sm font-bold ${levelStyles[result.level].badge}`}>
                  {levelStyles[result.level].badgeText}
                </span>
                <span className="text-slate-400 text-sm">Score: {score} / {questions.length * 3}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{result.headline}</h2>

              {/* AI-generated assessment */}
              <div className="mb-8 min-h-[80px]">
                {aiLoading && aiText === "" && (
                  <div className="flex items-center gap-3 text-slate-500">
                    <svg className="w-5 h-5 animate-spin text-brand-green" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    <span className="text-base">Preparing your personalised assessment…</span>
                  </div>
                )}
                {aiError && (
                  <p className="text-red-600 text-base">{aiError}</p>
                )}
                {aiText && (
                  <div className="text-slate-600 text-lg leading-relaxed space-y-4">
                    {aiText.split("\n\n").filter(Boolean).map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                    {aiLoading && (
                      <span className="inline-block w-1.5 h-5 bg-brand-green rounded-sm animate-pulse align-middle ml-0.5" />
                    )}
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={result.ctaHref} className="btn-green text-lg px-8 py-4 inline-flex items-center justify-center">
                  {result.cta}
                </Link>
                <Link
                  href="/how-we-build/your-site-needs"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-slate-300 text-slate-700 font-semibold hover:bg-slate-100 transition-colors text-lg px-8 py-4"
                >
                  What your site needs
                </Link>
                <button
                  onClick={async () => {
                    const shareText = `I just took the "Do I need a Next.js site?" quiz — result: ${result.headline}. Try it yourself:`
                    const url = typeof window !== "undefined" ? window.location.href : ""
                    if (typeof navigator !== "undefined" && navigator.share) {
                      try {
                        await navigator.share({ title: "Do I need a Next.js site?", text: shareText, url })
                      } catch { /* user cancelled */ }
                    } else {
                      await navigator.clipboard.writeText(`${shareText} ${url}`)
                      setCopied(true)
                      setTimeout(() => setCopied(false), 2500)
                    }
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-slate-200 text-slate-600 hover:border-brand-green hover:text-brand-green transition-all text-sm font-semibold"
                >
                  {copied ? (
                    <>
                      <svg className="w-4 h-4 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Copied!
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                      Share result
                    </>
                  )}
                </button>
                <button
                  onClick={() => {
                    setAnswers({})
                    setAiText("")
                    setAiError(null)
                    hasFetched.current = false
                  }}
                  className="inline-flex items-center justify-center text-sm text-slate-400 hover:text-slate-600 transition-colors underline underline-offset-4"
                >
                  Start over
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 px-6 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white/80 mb-6 text-lg">Not sure yet? Let us walk you through it.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/how-we-build/your-site-needs" className="inline-flex items-center justify-center btn-green text-lg px-8 py-4">
              What your site needs
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
