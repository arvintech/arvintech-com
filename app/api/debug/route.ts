export const runtime = "nodejs"

export async function GET() {
  const key = process.env.ANTHROPIC_API_KEY ?? ""
  return Response.json({
    keyPresent: !!key,
    keyLength: key.length,
    keyStart: key.slice(0, 20),
    keyEnd: key.slice(-6),
  })
}
