import type { Metadata } from "next"
import { getClient } from "@/lib/clients"
import { pageMetadata } from "@/lib/seo"

type ClientSlugParams = { slug: string }

export function generateMetadata({ params }: { params: ClientSlugParams }): Metadata {
  const client = getClient(params.slug)

  if (!client) {
    return pageMetadata({
      title: "Client",
      description: "ArvinTech client work across managed IT, AI automation, and Next.js sites.",
      path: `/clients/${params.slug}`,
    })
  }

  return pageMetadata({
    title: client.name,
    description: client.description,
    path: `/clients/${params.slug}`,
  })
}

export default function ClientSlugLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
