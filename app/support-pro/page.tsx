"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/Footer"

type Message = {
  role: "user" | "assistant"
  text: string
}

export default function SupportProPage() {
  const [showChatbox, setShowChatbox] = useState(false)
  const [chatInput, setChatInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", text: "Hi! I'm your IA Support Pro assistant powered by Claude. How can I help you today?" },
  ])
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = async () => {
    const trimmed = chatInput.trim()
    if (!trimmed || isLoading) return

    const userMessage: Message = { role: "user", text: trimmed }
    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setChatInput("")
    setIsLoading(true)

    const assistantMessage: Message = { role: "assistant", text: "" }
    setMessages((prev) => [...prev, assistantMessage])

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      })

      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`)
      }

      const reader = res.body?.getReader()
      const decoder = new TextDecoder()

      if (!reader) throw new Error("No response stream")

      let accumulated = ""

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value, { stream: true })
        const lines = chunk.split("\n")

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const data = line.slice(6)
            if (data === "[DONE]") break

            try {
              const parsed = JSON.parse(data)
              if (parsed.error) {
                accumulated = `Sorry, something went wrong: ${parsed.error}`
              } else if (parsed.text) {
                accumulated += parsed.text
              }
              setMessages((prev) => {
                const updated = [...prev]
                updated[updated.length - 1] = { role: "assistant", text: accumulated }
                return updated
              })
            } catch {
              // skip malformed SSE chunks
            }
          }
        }
      }
    } catch {
      setMessages((prev) => {
        const updated = [...prev]
        updated[updated.length - 1] = {
          role: "assistant",
          text: "Sorry, I couldn't reach the server. Please try again or email support@intelligenceamplifier.ai.",
        }
        return updated
      })
    } finally {
      setIsLoading(false)
      inputRef.current?.focus()
    }
  }

  const handleOpenChatbox = () => {
    setShowChatbox(true)
    setTimeout(() => {
      document.getElementById("support-pro-chatbox")?.scrollIntoView({ behavior: "smooth", block: "start" })
      inputRef.current?.focus()
    }, 100)
  }

  return (
    <div className="min-h-screen bg-background blocks-pattern">
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/arvintech-blocks-logo.png"
                alt="ArvinTech"
                width={48}
                height={48}
                className="w-12 h-12"
                priority
              />
              <span className="text-2xl font-bold arvintech-brand">arvintech</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/support" className="text-foreground/70 hover:text-brand-green transition-colors font-medium">
                Support
              </Link>
              <Link href="/support-pro" className="text-brand-green font-semibold">
                IA Support Pro
              </Link>
              <Link href="/work-with-us" className="btn-green text-sm">
                Work With Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-r from-orange-500 to-amber-500 p-8 md:p-12 text-white shadow-2xl">
            <p className="inline-block px-4 py-1 rounded-full bg-white/20 text-sm font-semibold mb-4">
              PREMIUM SUPPORT
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">IA Support Pro</h1>
            <p className="text-white/90 text-lg max-w-3xl">
              Fast, personalized help for AI tools, prompts, workflows, and technical troubleshooting.
              Get one-on-one guidance to solve issues and build better systems with confidence.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleOpenChatbox}
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-emerald-600 font-bold rounded-full hover:bg-emerald-50 transition-colors"
              >
                Request IA Support Pro
              </button>
              <Link
                href="/support"
                className="inline-flex items-center justify-center px-6 py-3 border border-white/40 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                Back to Support
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="bg-card rounded-2xl p-6 shadow-lg">
              <h2 className="text-lg font-bold mb-2">Prompt Strategy</h2>
              <p className="text-foreground/70 text-sm">
                Improve prompt quality for better outputs across Claude, ChatGPT, and Gemini.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-lg">
              <h2 className="text-lg font-bold mb-2">Workflow Automation</h2>
              <p className="text-foreground/70 text-sm">
                Build repeatable AI workflows to save time and reduce manual work.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-lg">
              <h2 className="text-lg font-bold mb-2">Troubleshooting</h2>
              <p className="text-foreground/70 text-sm">
                Resolve technical issues quickly with guided remote and hands-on support.
              </p>
            </div>
          </div>

          {showChatbox && (
            <div id="support-pro-chatbox" className="mt-8 bg-card rounded-2xl p-6 shadow-xl border border-border">
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold">IA Support Pro</h2>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Powered by Claude
                  </span>
                </div>
                <a
                  href="mailto:support@intelligenceamplifier.ai?subject=IA%20Support%20Pro%20Request"
                  className="text-sm text-emerald-600 hover:underline"
                >
                  Or email support
                </a>
              </div>

              <div className="h-96 overflow-y-auto rounded-xl bg-secondary/40 p-4 space-y-3">
                {messages.map((message, index) => (
                  <div
                    key={`${message.role}-${index}`}
                    className={`max-w-[85%] rounded-xl px-4 py-3 text-sm whitespace-pre-wrap ${
                      message.role === "user"
                        ? "ml-auto bg-emerald-600 text-white"
                        : "bg-white border border-border text-foreground"
                    }`}
                  >
                    {message.text}
                    {isLoading && index === messages.length - 1 && message.role === "assistant" && !message.text && (
                      <span className="inline-flex gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 animate-bounce" style={{ animationDelay: "0ms" }} />
                        <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 animate-bounce" style={{ animationDelay: "150ms" }} />
                        <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 animate-bounce" style={{ animationDelay: "300ms" }} />
                      </span>
                    )}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              <div className="mt-4 flex gap-3">
                <input
                  ref={inputRef}
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) handleSendMessage()
                  }}
                  placeholder={isLoading ? "Waiting for response..." : "Ask anything about AI tools, prompts, workflows..."}
                  disabled={isLoading}
                  className="flex-1 rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:opacity-50"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isLoading || !chatInput.trim()}
                  className="px-5 py-3 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "..." : "Send"}
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
