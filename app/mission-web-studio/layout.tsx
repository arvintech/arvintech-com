import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mission Web Studio | ArvinTech - AI-Powered Web Development",
  description: "Full-service Next.js web development with AI integration. Part of ArvinTech's core offerings: Amplified Operations, Amplified Customer Communications, IT Infrastructure Support, and Mission Web. Build fast, secure, AI-ready websites.",
  keywords: [
    "Mission Web",
    "ArvinTech",
    "Next.js development",
    "AI-powered websites",
    "Amplified Operations",
    "Amplified Customer Communications", 
    "IT Infrastructure Support",
    "web development",
    "AI integration",
    "QuickBooks integration",
    "payment gateways",
    "Stripe integration",
    "SEO optimization",
    "business websites",
    "small business web development",
    "React development",
    "modern web apps"
  ],
  openGraph: {
    title: "Mission Web Studio | ArvinTech",
    description: "AI-powered web development. Fast, secure, and built for the future. Amplify your business with ArvinTech's Mission Web.",
    type: "website",
  },
}

export default function MissionWebLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

