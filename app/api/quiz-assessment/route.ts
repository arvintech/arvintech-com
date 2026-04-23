import Anthropic from "@anthropic-ai/sdk"

export const runtime = "nodejs"
export const maxDuration = 60

const SYSTEM_PROMPT = `You are an expert web strategist at Mission Web Studio (part of ArvinTech). 
A prospective client has just completed a website needs assessment quiz. 
Based on their answers, give them a personalized, honest, and specific assessment.

Guidelines:
- Write 3–4 short paragraphs in plain, conversational English — no bullet points, no headers
- Be specific: reference details from their actual answers (business type, team size, ecommerce, subscriptions, budget, etc.)
- Be honest: if a simpler platform might serve them better right now, say so
- End with a clear, warm recommendation about next steps
- Do not mention scores or numbers
- Do not use phrases like "Based on your answers" — just speak directly to their situation
- Tone: confident, helpful, no hype`

export async function POST(req: Request) {
  const { answers, level } = await req.json() as {
    answers: { question: string; answer: string }[]
    level: string
  }

  const answersText = answers
    .map((a) => `Q: ${a.question}\nA: ${a.answer}`)
    .join("\n\n")

  const userMessage = `Here are the quiz responses from a prospective client:\n\n${answersText}\n\nOverall fit level determined by scoring: ${level}.\n\nWrite a personalized assessment for this prospect.`

  const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
  })

  const stream = anthropic.messages.stream({
    model: "claude-sonnet-4-20250514",
    max_tokens: 600,
    system: SYSTEM_PROMPT,
    messages: [{ role: "user", content: userMessage }],
  })

  const encoder = new TextEncoder()

  const readable = new ReadableStream({
    async start(controller) {
      try {
        for await (const event of stream) {
          if (
            event.type === "content_block_delta" &&
            event.delta.type === "text_delta"
          ) {
            controller.enqueue(
              encoder.encode(`data: ${JSON.stringify({ text: event.delta.text })}\n\n`)
            )
          }
        }
        controller.enqueue(encoder.encode("data: [DONE]\n\n"))
        controller.close()
      } catch (err) {
        const message = err instanceof Error ? err.message : "An unexpected error occurred"
        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify({ error: message })}\n\n`)
        )
        controller.close()
      }
    },
  })

  return new Response(readable, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  })
}
