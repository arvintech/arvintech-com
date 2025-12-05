"use client"

import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

// Client data (in production, this would come from a database or CMS)
const clientsData: Record<string, {
  name: string
  industry: string
  tagline: string
  description: string
  logo: string
  color: string
  services: string[]
  howTheyUse: string[]
  website?: string
  hasLogo?: boolean
}> = {
  "metrobox-cargo": {
    name: "Metrobox Cargo",
    industry: "Logistics & Shipping",
    tagline: "Moving the world, one container at a time",
    description: "Metrobox Cargo is an international cargo and logistics solutions provider specializing in efficient, reliable shipping services across global markets. They handle everything from small parcels to large-scale freight operations.",
    logo: "/clients/metrobox-cargo-logo.jpg",
    hasLogo: true,
    color: "brand-blue",
    services: [
      "Custom web portal for shipment tracking",
      "Automated notification systems",
      "Customer communication platform",
      "Business intelligence dashboards"
    ],
    howTheyUse: [
      "Real-time shipment tracking for customers",
      "Automated status updates via email and SMS",
      "Analytics dashboard for operational insights",
      "Client portal for document management"
    ]
  },
  "michael-glafkides": {
    name: "Dr. Michael Glafkides Plastic Surgery",
    industry: "Healthcare",
    tagline: "Experience Compassionate Care & Surgical Excellence",
    description: "Dr. Glafkides is a Board Certified Plastic & Reconstructive Surgeon with 30 years in private practice. A Harvard Medical School graduate who trained at UC San Diego in General Surgery and St. Francis Memorial Hospital in Plastic Surgery. Located in San Mateo, CA, specializing in breast augmentation, reconstruction, facelift, rhinoplasty, and more.",
    logo: "/clients/michael-glafkides-logo.png",
    color: "brand-green",
    website: "https://www.drglafkides.com",
    services: [
      "Professional medical website design",
      "Before/After photo gallery system",
      "Patient testimonials showcase",
      "SEO optimization for healthcare",
      "Mobile-responsive design"
    ],
    howTheyUse: [
      "Showcase procedures and expertise",
      "Display patient testimonials",
      "Before & After photo galleries",
      "Contact and consultation requests",
      "Location and hours information"
    ]
  },
  "adonais-mercy-house": {
    name: "Adonais Mercy House",
    industry: "Non-Profit",
    tagline: "Compassion for Children in Their Final Battles",
    description: "A 501(c)(3) nonprofit providing life-saving care and dignity to impoverished children with cancer in the Philippines. Through their partnership with Mary Johnston Hospital in Tondo, Manila, they provide treatment, pediatric hospice care, and holistic support to families who cannot afford medical care.",
    logo: "/clients/adonais-mercy-house-logo.png",
    hasLogo: true,
    color: "brand-yellow",
    website: "https://v0-adonais-mercy-house.vercel.app",
    services: [
      "Non-profit website development",
      "Donor portal system",
      "Donation management",
      "Impact storytelling platform"
    ],
    howTheyUse: [
      "Online donation processing",
      "Volunteer sign-up and scheduling",
      "Event promotion and registration",
      "Impact reporting and transparency"
    ]
  },
  "hallanna-management": {
    name: "Hallanna Management Corporation",
    industry: "Property Management",
    tagline: "Excellence in property stewardship",
    description: "Hallanna Management Corporation specializes in professional property and real estate management services. They manage residential and commercial properties with a focus on maximizing value and tenant satisfaction.",
    logo: "/clients/hallanna-management-logo.png",
    color: "brand-red",
    services: [
      "Property management portal",
      "Tenant communication system",
      "Maintenance request tracking",
      "Financial reporting dashboards"
    ],
    howTheyUse: [
      "Online rent collection",
      "Maintenance ticket management",
      "Tenant portal for communications",
      "Owner reporting and analytics"
    ]
  },
  "galaxaco-group": {
    name: "Galaxaco Group",
    industry: "Business Services",
    tagline: "Diversified solutions for modern business",
    description: "Galaxaco Group is a diversified business services company offering consulting, operations support, and strategic solutions across multiple industries.",
    logo: "/clients/galaxaco-group-logo.png",
    color: "brand-blue",
    services: [
      "Corporate website development",
      "Internal communications platform",
      "Business process automation",
      "Client relationship management"
    ],
    howTheyUse: [
      "Multi-division web presence",
      "Internal team collaboration",
      "Automated workflow processes",
      "Client project tracking"
    ]
  },
  "a-black-tie-affair": {
    name: "A Black Tie Affair",
    industry: "Events & Hospitality",
    tagline: "Creating unforgettable moments",
    description: "A Black Tie Affair is a premium event planning and hospitality company specializing in elegant, memorable experiences for corporate and private events.",
    logo: "/clients/a-black-tie-affair-logo.avif",
    hasLogo: true,
    website: "https://ablacktieaffairinc.com",
    color: "brand-green",
    services: [
      "Event showcase website",
      "Booking and inquiry system",
      "Portfolio gallery management",
      "Social media integration"
    ],
    howTheyUse: [
      "Online event inquiries",
      "Portfolio presentation",
      "Client testimonial showcase",
      "Event calendar management"
    ]
  },
  "jeepneystop": {
    name: "Jeepneystop",
    industry: "Transportation Tech",
    tagline: "Modernizing Philippine transportation",
    description: "Jeepneystop is a transportation technology company working to modernize and improve public transit systems with innovative solutions and digital platforms.",
    logo: "/clients/jeepneystop-logo.png",
    color: "brand-yellow",
    services: [
      "Transportation platform development",
      "Route mapping and optimization",
      "Passenger information systems",
      "Mobile app development"
    ],
    howTheyUse: [
      "Real-time route tracking",
      "Passenger booking system",
      "Driver management platform",
      "Analytics and reporting"
    ]
  },
  "farmersexchange": {
    name: "Farmers Exchange",
    industry: "Agriculture",
    tagline: "Farm to table, direct connection",
    description: "Farmers Exchange connects farmers directly with consumers, eliminating middlemen and ensuring fair prices for both producers and buyers of fresh agricultural products.",
    logo: "/clients/farmersexchange-logo.png",
    color: "brand-red",
    services: [
      "E-commerce marketplace platform",
      "Farmer onboarding system",
      "Order management tools",
      "Delivery coordination"
    ],
    howTheyUse: [
      "Online marketplace for produce",
      "Farmer inventory management",
      "Customer ordering system",
      "Delivery tracking and logistics"
    ]
  },
  "sololegalcrm": {
    name: "Solo Legal CRM",
    industry: "Legal Tech",
    tagline: "Empowering solo practitioners",
    description: "Solo Legal CRM provides customer relationship management solutions specifically designed for solo legal practitioners and small law firms, streamlining client management and case tracking.",
    logo: "/clients/sololegalcrm-logo.png",
    color: "brand-blue",
    services: [
      "SaaS platform development",
      "Legal workflow automation",
      "Client portal integration",
      "Billing and invoicing system"
    ],
    howTheyUse: [
      "Client intake and management",
      "Case tracking and deadlines",
      "Document management",
      "Time tracking and billing"
    ]
  },
  "contra-costa-firefighters": {
    name: "Contra Costa Firefighters",
    industry: "Public Safety",
    tagline: "Courage. Commitment. Community.",
    description: "Contra Costa Firefighters serve and protect the communities of Contra Costa County with dedication and bravery. Their mission is to safeguard lives, property, and the environment through emergency response, fire prevention, and community education.",
    logo: "/clients/contra-costa-firefighters-logo.webp",
    hasLogo: true,
    color: "brand-red",
    services: [
      "Union website and communications platform",
      "Member portal and resources hub",
      "Event coordination system",
      "Emergency notification integration"
    ],
    howTheyUse: [
      "Member communications and updates",
      "Union news and announcements",
      "Event registration and scheduling",
      "Resource library and documentation",
      "Community outreach coordination"
    ]
  }
}

export default function ClientPage() {
  const params = useParams()
  const slug = params.slug as string
  const client = clientsData[slug]

  if (!client) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Client Not Found</h1>
          <Link href="/clients" className="text-brand-green hover:underline">
            ← Back to Clients
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/arvintech-blocks-logo.png"
                alt="ArvinTech"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <span className="text-2xl font-bold arvintech-brand">arvintech</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/about" className="text-foreground/70 hover:text-brand-green transition-colors font-medium">
                About
              </Link>
              <Link href="/clients" className="text-brand-green font-medium">
                Clients
              </Link>
              <Link href="/support" className="text-foreground/70 hover:text-brand-green transition-colors font-medium">
                Support
              </Link>
              <Link href="/work-with-us" className="btn-green text-sm">
                Work With Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="pt-24 pb-4 px-6 bg-slate-50 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-slate-500 hover:text-brand-green">Home</Link>
            <span className="text-slate-400">/</span>
            <Link href="/clients" className="text-slate-500 hover:text-brand-green">Clients</Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-900 font-medium">{client.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className={`inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6`}>
                {client.industry}
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                {client.name}
              </h1>
              <p className="text-xl text-slate-300 mb-6 italic">
                "{client.tagline}"
              </p>
              <p className="text-lg text-slate-400 leading-relaxed mb-6">
                {client.description}
              </p>
              {client.website && (
                <a 
                  href={client.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-xl font-semibold hover:bg-slate-100 transition-colors"
                >
                  Visit Website
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
            <div className="flex justify-center">
              {/* Logo */}
              {client.hasLogo ? (
                <div className="w-64 h-64 bg-white rounded-3xl flex items-center justify-center border-2 border-white/20 p-6">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    width={200}
                    height={200}
                    className="object-contain max-w-full max-h-full"
                  />
                </div>
              ) : (
                <div className="w-64 h-64 bg-white/10 rounded-3xl flex items-center justify-center border-2 border-white/20">
                  <div className="text-center">
                    <div className={`w-24 h-24 bg-${client.color}/30 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <span className="text-5xl font-bold text-white">
                        {client.name.charAt(0)}
                      </span>
                    </div>
                    <span className="text-sm text-white/50">Logo Placeholder</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Client Portal Notice */}
      <section className="py-6 px-6 bg-amber-50 border-y border-amber-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-4 text-center">
            <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <p className="text-amber-800">
              <span className="font-semibold">Client Portal Access</span> — 
              Secure login coming soon for project specs, communications, and updates.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* What We Do With Them */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 bg-${client.color} rounded-xl flex items-center justify-center`}>
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-slate-900">What We Do With Them</h2>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border">
                <ul className="space-y-4">
                  {client.services.map((service, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className={`w-6 h-6 bg-${client.color}/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <svg className={`w-4 h-4 text-${client.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* How They Use ArvinTech */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 bg-${client.color} rounded-xl flex items-center justify-center`}>
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-slate-900">How They Use <span className="arvintech-brand">arvintech</span></h2>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border">
                <ul className="space-y-4">
                  {client.howTheyUse.map((use, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className={`w-6 h-6 bg-${client.color}/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <span className={`text-xs font-bold text-${client.color}`}>{index + 1}</span>
                      </div>
                      <span className="text-slate-700">{use}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Stats */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900">Partnership Overview</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className={`w-16 h-16 bg-${client.color}/10 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <svg className={`w-8 h-8 text-${client.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">Active</div>
              <div className="text-sm text-slate-500">Partnership Status</div>
            </div>
            <div className="text-center">
              <div className={`w-16 h-16 bg-${client.color}/10 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <svg className={`w-8 h-8 text-${client.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">{client.services.length}</div>
              <div className="text-sm text-slate-500">Services Provided</div>
            </div>
            <div className="text-center">
              <div className={`w-16 h-16 bg-${client.color}/10 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <svg className={`w-8 h-8 text-${client.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">Amplified</div>
              <div className="text-sm text-slate-500">Business Status</div>
            </div>
            <div className="text-center">
              <div className={`w-16 h-16 bg-${client.color}/10 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <svg className={`w-8 h-8 text-${client.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">Dedicated</div>
              <div className="text-sm text-slate-500">Support Level</div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Clients */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <Link 
            href="/clients" 
            className="inline-flex items-center gap-2 text-brand-green font-semibold hover:gap-3 transition-all"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Clients
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/arvintech-blocks-logo.png"
                alt="ArvinTech"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-lg font-bold arvintech-brand">arvintech</span>
            </Link>
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} arvintech.com. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-brand-green rounded-sm" />
              <div className="w-3 h-3 bg-brand-blue rounded-sm" />
              <div className="w-3 h-3 bg-brand-yellow rounded-sm" />
              <div className="w-3 h-3 bg-brand-red rounded-sm" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

