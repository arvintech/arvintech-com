"use client"

import Link from "next/link"

/* ── colour tokens ───────────────────────────────────────────────── */
const c = {
  blue:   { border: "border-blue-200",   ring: "ring-blue-300",   bg: "bg-white",  accent: "bg-blue-600",  accentLight: "bg-blue-50",  text: "text-blue-600",   tag: "bg-blue-50 text-blue-600 border-blue-200" },
  violet: { border: "border-violet-200", ring: "ring-violet-300", bg: "bg-white",  accent: "bg-violet-600",accentLight: "bg-violet-50",text: "text-violet-600", tag: "bg-violet-50 text-violet-600 border-violet-200" },
  amber:  { border: "border-amber-200",  ring: "ring-amber-300",  bg: "bg-white",  accent: "bg-amber-500", accentLight: "bg-amber-50", text: "text-amber-600",  tag: "bg-amber-50 text-amber-600 border-amber-200" },
  green:  { border: "border-green-200",  ring: "ring-green-300",  bg: "bg-white",  accent: "bg-green-600", accentLight: "bg-green-50", text: "text-green-600",  tag: "bg-green-50 text-green-600 border-green-200" },
  slate:  { border: "border-slate-200",  ring: "ring-slate-300",  bg: "bg-white",  accent: "bg-slate-600", accentLight: "bg-slate-50", text: "text-slate-600",  tag: "bg-slate-50 text-slate-600 border-slate-200" },
} as const
type Color = keyof typeof c

/* ── Arrow connector ─────────────────────────────────────────────── */
function ArrowDown({ color = "slate" }: { color?: "slate" | "green" }) {
  const track = color === "green" ? "bg-green-300" : "bg-slate-200"
  const head  = color === "green" ? "#4ade80" : "#cbd5e1"
  return (
    <div className="flex justify-center py-0.5">
      <div className="flex flex-col items-center">
        <div className={`w-0.5 h-7 ${track}`} />
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="-mt-px">
          <path d="M7 10 L0 2 L3.5 2 L3.5 0 L10.5 0 L10.5 2 L14 2 Z" fill={head} />
        </svg>
      </div>
    </div>
  )
}

/* ── Process node card ───────────────────────────────────────────── */
function ProcessNode({ step, slug, label, desc, color, who }: {
  step: number; slug: string; label: string; desc: string; color: Color; who: string
}) {
  const cl = c[color]
  return (
    <div className="flex justify-center">
      <Link
        href={`/how-we-build/workflow/${slug}`}
        className={`group relative w-full rounded-2xl border ${cl.border} ${cl.bg}
          shadow-sm hover:shadow-lg hover:ring-2 ${cl.ring}
          transition-all duration-200 overflow-hidden`}
      >
        {/* Left colour accent bar */}
        <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl ${cl.accent}`} />

        <div className="flex items-center gap-4 px-5 py-4 pl-6">
          {/* Step circle */}
          <span className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-black text-white shadow-sm ${cl.accent}`}>
            {step}
          </span>

          <div className="min-w-0 flex-1">
            <p className="font-bold text-slate-900 text-sm leading-snug">{label}</p>
            <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{desc}</p>
          </div>

          {/* Who tag + chevron */}
          <div className="flex flex-col items-end gap-1.5 shrink-0">
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${cl.tag}`}>
              {who}
            </span>
            <svg className={`w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity ${cl.text}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  )
}

/* ── Decision diamond ────────────────────────────────────────────── */
function DecisionDiamond({ label }: { label: string }) {
  return (
    <div className="flex justify-center py-3">
      <div className="relative w-48 h-48 flex items-center justify-center">
        {/* Outer shadow layer */}
        <div className="absolute inset-2 bg-amber-400/20 rotate-45 rounded-lg blur-md" />
        {/* Diamond face */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-400 rotate-45 rounded-lg shadow-md" />
        {/* Label */}
        <div className="relative z-10 text-center px-8">
          <svg className="w-5 h-5 text-amber-500 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-sm font-black text-amber-800 leading-snug">{label}</p>
        </div>
      </div>
    </div>
  )
}

/* ── Branch label row (below diamond) ───────────────────────────── */
function BranchLabels() {
  return (
    <div className="flex justify-between items-start px-2 -mt-1 mb-1">
      <div className="flex flex-col items-center gap-0.5">
        <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">No</span>
        <span className="text-[9px] text-slate-400 font-medium">revise</span>
      </div>
      <div className="flex flex-col items-center gap-0.5">
        <span className="text-[10px] font-black text-green-600 uppercase tracking-widest">Yes ↓</span>
        <span className="text-[9px] text-slate-400 font-medium">proceed</span>
      </div>
    </div>
  )
}

/* ── Inline status chip ──────────────────────────────────────────── */
function Chip({ children, variant }: { children: React.ReactNode; variant: "green" | "blue" | "end" }) {
  const styles = {
    green: "bg-green-50 border-green-200 text-green-700 shadow-sm",
    blue:  "bg-blue-50 border-blue-200 text-brand-blue shadow-sm",
    end:   "bg-slate-100 border-slate-300 text-slate-500",
  }
  return (
    <div className="flex justify-center">
      <div className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border text-xs font-bold ${styles[variant]}`}>
        {children}
      </div>
    </div>
  )
}

/* ── Main ────────────────────────────────────────────────────────── */
export default function WorkflowDiagram() {
  return (
    <div className="mt-8 rounded-3xl bg-gradient-to-b from-slate-50 to-white border border-slate-200 shadow-sm p-6 md:p-10">

      <div className="relative flex justify-center">

        {/* ── Revise-loop: left dashed red line ────────────────────
            Visually connects the "No" exit of the diamond back to Step 2.
        ──────────────────────────────────────────────────────────── */}
        <div
          className="absolute left-1/2 z-20"
          style={{
            transform: "translateX(calc(-384px / 2 - 28px))",
            top: "calc(42px + 42px + 80px + 42px + 80px + 42px + 80px + 36px + 120px)",
          }}
          aria-hidden
        >
          <svg width="32" height="2"><line x1="0" y1="1" x2="32" y2="1" stroke="#f87171" strokeWidth="2" strokeDasharray="5 3" /></svg>
          <svg width="2" height="204" className="-mt-px"><line x1="1" y1="0" x2="1" y2="204" stroke="#f87171" strokeWidth="2" strokeDasharray="5 3" /></svg>
          <svg width="32" height="12" className="-mt-px">
            <line x1="0" y1="6" x2="22" y2="6" stroke="#f87171" strokeWidth="2" strokeDasharray="5 3" />
            <polygon points="32,6 20,1 20,11" fill="#f87171" />
          </svg>
          <p className="text-[9px] font-black text-red-400 mt-1 uppercase tracking-widest whitespace-nowrap">revise</p>
        </div>

        {/* ── Chart column ─────────────────────────────────────────── */}
        <div className="w-full max-w-96 flex flex-col">

          {/* START pill */}
          <Chip variant="end">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Client contacts developer
          </Chip>

          <ArrowDown />

          <ProcessNode step={1} slug="agree"
            label="Agree on the outcome"
            desc="Brief, goals, existing site complexity"
            color="blue" who="Client + Developer" />

          <ArrowDown />

          <ProcessNode step={2} slug="build"
            label="Build in Cursor & Git"
            desc="Real, clickable test-drive on a branch"
            color="violet" who="Developer" />

          <ArrowDown />

          <ProcessNode step={3} slug="preview"
            label="Preview URL generated"
            desc="Vercel creates a shareable build link"
            color="amber" who="Developer" />

          <ArrowDown />

          <DecisionDiamond label="Client approves?" />

          <BranchLabels />

          <ArrowDown color="green" />

          <Chip variant="green">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            Contract signed
          </Chip>

          <ArrowDown />

          <ProcessNode step={4} slug="deploy"
            label="Merge & go live"
            desc="Branch merges — Vercel deploys worldwide in seconds"
            color="green" who="Developer + Vercel" />

          <ArrowDown />

          <ProcessNode step={5} slug="ongoing"
            label="Ongoing — next change request"
            desc="The same loop repeats for every update after launch"
            color="slate" who="Client → Developer" />

          <div className="flex justify-center py-2">
            <div className="w-0.5 h-6 bg-slate-200" />
          </div>

          <Chip variant="blue">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Loops back to Step 1
          </Chip>

          <div className="flex justify-center py-2">
            <div className="w-0.5 h-4 bg-slate-200" />
          </div>

          <Chip variant="end">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 10h.01M15 10h.01M9.75 15a3.75 3.75 0 006.5 0" />
            </svg>
            End of cycle
          </Chip>

        </div>
      </div>

      {/* Legend */}
      <div className="mt-8 pt-5 border-t border-slate-200 flex flex-wrap justify-center gap-x-8 gap-y-2">
        {[
          { swatch: <span className="w-4 h-3.5 rounded border border-slate-300 bg-white inline-block shrink-0 shadow-sm" />, label: "Process step — click to open" },
          { swatch: <span className="w-3.5 h-3.5 bg-amber-100 border-2 border-amber-400 rotate-45 inline-block shrink-0 rounded-sm" />, label: "Decision point" },
          { swatch: <span className="border-t-2 border-dashed border-red-400 w-6 inline-block" />, label: "Revise (No)" },
          { swatch: <span className="border-t-2 border-dashed border-blue-400 w-6 inline-block" />, label: "Repeat cycle" },
        ].map(({ swatch, label }) => (
          <span key={label} className="flex items-center gap-2 text-xs text-slate-400 font-medium">
            {swatch}
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}
