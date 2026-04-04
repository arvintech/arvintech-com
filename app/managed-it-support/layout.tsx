import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Managed IT Support | ArvinTech",
  description:
    "Remote IT support, security monitoring, backups, and system maintenance. Your technology infrastructure, professionally managed.",
  openGraph: {
    title: "Managed IT Support | ArvinTech",
    description:
      "24/7 remote support, security monitoring, automated backups, and system updates for your business.",
    type: "website",
  },
}

export default function ManagedITSupportLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
