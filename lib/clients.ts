export type ClientSeo = {
  slug: string
  name: string
  industry: string
  description: string
}

export const CLIENTS: ClientSeo[] = [
  {
    slug: "metrobox-cargo",
    name: "Metrobox Cargo",
    industry: "Logistics & Shipping",
    description:
      "International cargo and logistics solutions. ArvinTech built shipment tracking, notifications, and a customer portal for Metrobox Cargo.",
  },
  {
    slug: "michael-glafkides",
    name: "Dr. Michael Glafkides Plastic Surgery",
    industry: "Healthcare",
    description:
      "Board-certified plastic surgery practice in San Mateo. ArvinTech designed the medical website, galleries, and patient inquiry flow.",
  },
  {
    slug: "adonais-mercy-house",
    name: "Adonais Mercy House",
    industry: "Non-Profit",
    description:
      "Nonprofit care for children with cancer in the Philippines. ArvinTech built the donor site, donation flow, and impact storytelling.",
  },
  {
    slug: "hallanna-management",
    name: "Hallanna Management Corporation",
    industry: "Property Management",
    description:
      "Property and real estate management. ArvinTech delivered tenant communications, maintenance tracking, and owner reporting tools.",
  },
  {
    slug: "galaxaco-group",
    name: "Galaxaco Group",
    industry: "Business Services",
    description:
      "Diversified business services company. ArvinTech built the corporate web presence and internal communications tools.",
  },
  {
    slug: "a-black-tie-affair",
    name: "A Black Tie Affair",
    industry: "Events & Hospitality",
    description:
      "Premium event planning. ArvinTech built the event showcase site, inquiry system, and portfolio galleries.",
  },
  {
    slug: "jeepneystop",
    name: "Jeepneystop",
    industry: "Transportation Tech",
    description:
      "Transportation technology for public transit. ArvinTech supported platform, routing, and passenger information systems.",
  },
  {
    slug: "farmersexchange",
    name: "Farmers Exchange",
    industry: "Agriculture",
    description:
      "Direct farm-to-consumer marketplace. ArvinTech built ordering, farmer onboarding, and delivery coordination tools.",
  },
  {
    slug: "sololegalcrm",
    name: "Solo Legal CRM",
    industry: "Legal Tech",
    description:
      "CRM for solo legal practitioners. ArvinTech supported the SaaS platform, client portal, and billing workflows.",
  },
  {
    slug: "contra-costa-firefighters",
    name: "Contra Costa Firefighters",
    industry: "Public Safety",
    description:
      "Firefighters serving Contra Costa County. ArvinTech built the union website, member portal, and communications hub.",
  },
  {
    slug: "wisereads",
    name: "WiseReads",
    industry: "Publishing & Literature",
    description:
      "Classical literature, condensed and reimagined. ArvinTech built the Next.js reading experience and catalog.",
  },
  {
    slug: "one-daily-classic",
    name: "One Daily Classic",
    industry: "Music & Media",
    description:
      "One classic, every day. ArvinTech built the daily editorial site for mobile reading and sharing.",
  },
  {
    slug: "intelligence-amplifier",
    name: "Intelligence Amplifier",
    industry: "AI & Technology",
    description:
      "Practical AI guidance for individuals and teams. ArvinTech supports the content platform and related properties.",
  },
]

export function getClient(slug: string): ClientSeo | undefined {
  return CLIENTS.find((client) => client.slug === slug)
}
