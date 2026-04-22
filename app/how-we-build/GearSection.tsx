import Link from "next/link"

/* ── Gear geometry ─────────────────────────────────────────────────── */
const OR    = 168
const IR    = 125
const HUB   = 90
const TEETH = 16
const CD    = 293          // 2 × pitch-circle radius (OR+IR)/2 = 146.5

const GY   = 178
const PAD  = OR + 20       // 188
const GX   = [PAD, PAD + CD, PAD + 2 * CD]  // 188, 481, 774
const SVG_W = GX[2] + PAD  // 962
const SVG_H = GY + OR + 72 // 418

const HALF_PITCH = Math.PI / TEETH

function gearPoints(cx: number, offsetRad = 0): string {
  const pts: string[] = []
  const pitch = (2 * Math.PI) / TEETH
  for (let i = 0; i < TEETH; i++) {
    const a = i * pitch + offsetRad
    const pt = (frac: number, r: number) =>
      `${(cx + r * Math.cos(a + pitch * frac)).toFixed(2)},${(GY + r * Math.sin(a + pitch * frac)).toFixed(2)}`
    pts.push(pt(0.06, IR))
    pts.push(pt(0.22, OR))
    pts.push(pt(0.78, OR))
    pts.push(pt(0.94, IR))
  }
  return pts.join(" ")
}

/* ── Colour palette ────────────────────────────────────────────────── */
// Sapphire → Amethyst → Emerald
const GEARS = [
  {
    cx: GX[0], offset: 0,          dir:  1,
    // Sapphire blue
    gearFill:   "url(#gf1)",
    gearStroke: "#60a5fa",
    hubGrad:    "url(#hg1)",
    hubRing:    "url(#hr1)",
    glow:       "#3b82f6",
    num: "1",
    titleLines: ["SOFTWARE", "& PACKAGES"],
    descLines:  ["Next.js · React · TypeScript", "Tailwind · Radix UI · DB"],
  },
  {
    cx: GX[1], offset: HALF_PITCH, dir: -1,
    // Amethyst violet
    gearFill:   "url(#gf2)",
    gearStroke: "#a78bfa",
    hubGrad:    "url(#hg2)",
    hubRing:    "url(#hr2)",
    glow:       "#8b5cf6",
    num: "2",
    titleLines: ["CURSOR", "IDE"],
    descLines:  ["Built on VS Code", "AI woven into the editor"],
  },
  {
    cx: GX[2], offset: 0,          dir:  1,
    // Emerald green
    gearFill:   "url(#gf3)",
    gearStroke: "#34d399",
    hubGrad:    "url(#hg3)",
    hubRing:    "url(#hr3)",
    glow:       "#10b981",
    num: "3",
    titleLines: ["VERCEL", "HOSTING"],
    descLines:  ["Edge deploys · HTTPS default", "Preview URLs · Rollback"],
  },
]

const CARDS = [
  {
    href: "/how-we-build/software-stack",
    summary: "Every framework, UI library, and utility declared in code — auditable, version-controlled, and portable. No opaque plugin marketplace.",
    bg:     "bg-gradient-to-br from-blue-600 to-blue-900",
    border: "border-blue-700   hover:border-blue-400   hover:ring-2 hover:ring-blue-400/40",
    link:   "text-blue-200 hover:text-white",
    text:   "text-blue-100",
  },
  {
    href: "/how-we-build/cursor-ide",
    summary: "VS Code-compatible, AI-assisted code editor. The developer works on source files — not a browser dashboard. Nothing runs inside Cursor.",
    bg:     "bg-gradient-to-br from-violet-600 to-violet-950",
    border: "border-violet-700 hover:border-violet-400 hover:ring-2 hover:ring-violet-400/40",
    link:   "text-violet-200 hover:text-white",
    text:   "text-violet-100",
  },
  {
    href: "/how-we-build/vercel-hosting",
    summary: "Git push triggers a worldwide production build. HTTPS automatic, atomic deploys, instant rollback — no server to SSH into.",
    bg:     "bg-gradient-to-br from-emerald-600 to-emerald-950",
    border: "border-emerald-700 hover:border-emerald-400 hover:ring-2 hover:ring-emerald-400/40",
    link:   "text-emerald-200 hover:text-white",
    text:   "text-emerald-100",
  },
]

function MeshDot({ x }: { x: number }) {
  return (
    <g>
      <circle cx={x} cy={GY} r={13}  fill="#1e293b" opacity="0.15" />
      <circle cx={x} cy={GY} r={7}   fill="#334155" />
      <circle cx={x} cy={GY} r={3.5} fill="#94a3b8" />
    </g>
  )
}

export default function GearSection() {
  return (
    <div className="mt-8">
      <div className="flex justify-center overflow-x-auto pb-1">
        <svg
          viewBox={`0 0 ${SVG_W} ${SVG_H}`}
          width="100%"
          style={{ maxWidth: SVG_W, overflow: "visible", minWidth: 360 }}
          aria-hidden
        >
          <defs>
            {/* Drop shadow */}
            <filter id="gs" x="-14%" y="-14%" width="128%" height="128%">
              <feDropShadow dx="0" dy="5" stdDeviation="8" floodColor="#0f172a" floodOpacity="0.18" />
            </filter>

            {/* Hub glow filter */}
            <filter id="hglow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="10" result="blur" />
            </filter>

            {/* ── Sapphire (gear 1) ── */}
            <radialGradient id="gf1" gradientUnits="userSpaceOnUse"
              cx={GX[0]} cy={GY} r={OR}>
              <stop offset="0%"   stopColor="#bfdbfe" />
              <stop offset="70%"  stopColor="#dbeafe" />
              <stop offset="100%" stopColor="#eff6ff" />
            </radialGradient>
            <radialGradient id="hg1" gradientUnits="userSpaceOnUse"
              cx={GX[0] - 22} cy={GY - 28} r={HUB * 1.5}>
              <stop offset="0%"   stopColor="#93c5fd" />
              <stop offset="45%"  stopColor="#2563eb" />
              <stop offset="100%" stopColor="#1e3a8a" />
            </radialGradient>
            <linearGradient id="hr1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"   stopColor="#93c5fd" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>

            {/* ── Amethyst (gear 2) ── */}
            <radialGradient id="gf2" gradientUnits="userSpaceOnUse"
              cx={GX[1]} cy={GY} r={OR}>
              <stop offset="0%"   stopColor="#ddd6fe" />
              <stop offset="70%"  stopColor="#ede9fe" />
              <stop offset="100%" stopColor="#faf5ff" />
            </radialGradient>
            <radialGradient id="hg2" gradientUnits="userSpaceOnUse"
              cx={GX[1] - 22} cy={GY - 28} r={HUB * 1.5}>
              <stop offset="0%"   stopColor="#c4b5fd" />
              <stop offset="45%"  stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#4c1d95" />
            </radialGradient>
            <linearGradient id="hr2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"   stopColor="#c4b5fd" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>

            {/* ── Emerald (gear 3) ── */}
            <radialGradient id="gf3" gradientUnits="userSpaceOnUse"
              cx={GX[2]} cy={GY} r={OR}>
              <stop offset="0%"   stopColor="#a7f3d0" />
              <stop offset="70%"  stopColor="#d1fae5" />
              <stop offset="100%" stopColor="#f0fdf4" />
            </radialGradient>
            <radialGradient id="hg3" gradientUnits="userSpaceOnUse"
              cx={GX[2] - 22} cy={GY - 28} r={HUB * 1.5}>
              <stop offset="0%"   stopColor="#6ee7b7" />
              <stop offset="45%"  stopColor="#059669" />
              <stop offset="100%" stopColor="#064e3b" />
            </radialGradient>
            <linearGradient id="hr3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"   stopColor="#6ee7b7" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>

          {/* Background rail */}
          <line x1={GX[0]} y1={GY} x2={GX[2]} y2={GY}
            stroke="#e2e8f0" strokeWidth="3" strokeDasharray="8 10" />

          {/* Gears */}
          {GEARS.map((g) => {
            const pts  = gearPoints(g.cx, g.offset)
            const from = g.dir === 1 ? `0 ${g.cx} ${GY}` : `360 ${g.cx} ${GY}`
            const to   = g.dir === 1 ? `360 ${g.cx} ${GY}` : `0 ${g.cx} ${GY}`
            const anim = {
              attributeName: "transform", attributeType: "XML" as const,
              type: "rotate" as const, from, to, dur: "22s", repeatCount: "indefinite" as const,
            }
            return (
              <g key={g.num}>
                {/* Ambient glow behind hub */}
                <circle cx={g.cx} cy={GY} r={HUB + 30} fill={g.glow} opacity="0.12" filter="url(#hglow)" />
                <circle cx={g.cx} cy={GY} r={HUB + 12} fill={g.glow} opacity="0.10" />

                <g filter="url(#gs)">
                  {/* Gear body */}
                  <polygon points={pts} fill={g.gearFill}
                    stroke={g.gearStroke} strokeWidth="2.5" strokeLinejoin="round">
                    <animateTransform {...anim} />
                  </polygon>

                  {/* Hub ring — gradient metallic ring */}
                  <circle cx={g.cx} cy={GY} r={HUB + 8}
                    fill={g.hubRing} stroke="none" opacity="0.6">
                    <animateTransform {...anim} />
                  </circle>

                  {/* Hub face — gradient sphere effect */}
                  <circle cx={g.cx} cy={GY} r={HUB} fill={g.hubGrad}>
                    <animateTransform {...anim} />
                  </circle>

                  {/* Specular highlight — small bright arc top-left */}
                  <ellipse cx={g.cx - 22} cy={GY - 26} rx={22} ry={14}
                    fill="white" opacity="0.18">
                    <animateTransform {...anim} />
                  </ellipse>
                </g>

                {/* ── Static text (no rotation) ── */}
                <text x={g.cx} y={GY - 34} textAnchor="middle"
                  fill="white" fontSize="38" fontWeight="900"
                  fontFamily="system-ui,-apple-system,sans-serif"
                  style={{ filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.35))" }}>
                  {g.num}
                </text>

                {g.titleLines.map((line, li) => (
                  <text key={li} x={g.cx} y={GY - 7 + li * 19}
                    textAnchor="middle"
                    fill="rgba(255,255,255,0.92)" fontSize="13.5" fontWeight="800"
                    fontFamily="system-ui,-apple-system,sans-serif" letterSpacing="1.2">
                    {line}
                  </text>
                ))}

                {/* Divider */}
                <line x1={g.cx - 44} y1={GY + 30} x2={g.cx + 44} y2={GY + 30}
                  stroke="rgba(255,255,255,0.28)" strokeWidth="1.5" />

                {g.descLines.map((line, li) => (
                  <text key={li} x={g.cx} y={GY + 46 + li * 17}
                    textAnchor="middle"
                    fill="rgba(255,255,255,0.65)" fontSize="11.5" fontWeight="500"
                    fontFamily="system-ui,-apple-system,sans-serif">
                    {line}
                  </text>
                ))}
              </g>
            )
          })}

          {/* Mesh-point indicators */}
          <MeshDot x={(GX[0] + GX[1]) / 2} />
          <MeshDot x={(GX[1] + GX[2]) / 2} />

          {/* Connector stubs to cards */}
          {GX.map((x, i) => (
            <g key={i}>
              <line x1={x} y1={GY + OR + 12} x2={x} y2={SVG_H - 10}
                stroke="#e2e8f0" strokeWidth="2" strokeDasharray="5 6" />
              <path d={`M ${x - 7} ${SVG_H - 18} L ${x} ${SVG_H - 5} L ${x + 7} ${SVG_H - 18}`}
                fill="none" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round" />
            </g>
          ))}
        </svg>
      </div>

      {/* Content cards */}
      <div className="grid sm:grid-cols-3 gap-4 mt-1">
        {CARDS.map((card, i) => (
          <Link key={i} href={card.href}
            className={`group flex flex-col rounded-2xl border shadow-md overflow-hidden transition-all duration-200 ${card.bg} ${card.border} hover:shadow-xl hover:scale-[1.02]`}>
            <div className="flex flex-col flex-1 p-6 gap-4">
              <p className={`text-sm leading-relaxed flex-1 ${card.text}`}>{card.summary}</p>
              <span className={`inline-flex items-center gap-1.5 text-xs font-bold transition-all group-hover:gap-2.5 ${card.link}`}>
                Read more
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
