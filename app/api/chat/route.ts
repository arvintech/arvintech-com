import Anthropic from "@anthropic-ai/sdk"

export const runtime = "nodejs"
export const maxDuration = 60

const SYSTEM_PROMPT = `You are IA Support Pro, a friendly and knowledgeable AI support assistant for ArvinTech. Your expertise covers:

- AI tools (Claude, ChatGPT, Gemini) — prompt engineering, best practices, and troubleshooting
- Workflow automation — helping users build repeatable AI-powered workflows
- Technical troubleshooting — diagnosing and resolving technical issues
- IT infrastructure guidance

Keep responses concise, helpful, and professional. Use short paragraphs. If you don't know something, say so honestly and suggest the user contact the team at support@intelligenceamplifier.ai for specialized help.`

export async function POST(req: Request) {
  const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
  })
  const { messages } = await req.json()

  const stream = anthropic.messages.stream({
    model: "claude-sonnet-4-20250514",
    max_tokens: 1024,
    system: SYSTEM_PROMPT,
    messages: messages.map((m: { role: string; text: string }) => ({
      role: m.role as "user" | "assistant",
      content: m.text,
    })),
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
        const message =
          err instanceof Error ? err.message : "An unexpected error occurred"
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
