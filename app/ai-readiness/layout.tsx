import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Readiness with Intelligence Amplifier | ArvinTech",
  description:
    "Prepare your business for the AI era with Intelligence Amplifier assessment, strategy, and implementation planning.",
  openGraph: {
    title: "AI Readiness with Intelligence Amplifier | ArvinTech",
    description:
      "Assessment, IA platform deployment, custom AI strategy, and team onboarding from ArvinTech.",
    type: "website",
  },
}

export default function AIReadinessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
