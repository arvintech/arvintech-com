import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Automation & Integration | ArvinTech",
  description:
    "Deploy intelligent automation systems that reduce manual work and improve operational efficiency with modern AI tools.",
  openGraph: {
    title: "AI Automation & Integration | ArvinTech",
    description:
      "Workflow automation, AI assistant deployment, custom integration, and process optimization from ArvinTech.",
    type: "website",
  },
}

export default function AIAutomationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
