import type React from "react"
import type { Metadata } from "next"
import { GeistMono } from "geist/font/mono"
import { Sora, Space_Grotesk, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sora",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "ArvinTech - Amplify Your Mind",
  description: "An innovative approach to AI—Collaboration, not replacement. Building intelligent solutions that amplify human potential.",
  generator: "Next.js",
  keywords: ["AI", "technology", "consulting", "digital transformation", "intelligence amplification"],
  icons: {
    icon: "/arvintech-blocks-logo.png",
    shortcut: "/arvintech-blocks-logo.png",
    apple: "/arvintech-blocks-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${spaceGrotesk.variable} ${poppins.variable} ${GeistMono.variable} font-sans`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
