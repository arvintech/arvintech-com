"use client"

import Image from "next/image"
import Link from "next/link"

// Client data
const clients = [
  {
    id: "metrobox-cargo",
    name: "Metrobox Cargo",
    industry: "Logistics & Shipping",
    description: "Door to door service to the Philippines. International cargo and logistics solutions.",
    logo: "/clients/metrobox-cargo-logo.jpg",
    hasLogo: true,
    color: "brand-red"
  },
  {
    id: "michael-glafkides",
    name: "Dr. Michael Glafkides Plastic Surgery",
    industry: "Healthcare",
    description: "Board Certified Plastic & Reconstructive Surgeon in San Mateo, CA. Harvard Medical School graduate with 30 years experience.",
    logo: "/clients/michael-glafkides-logo.png",
    website: "https://www.drglafkides.com",
    useIcon: "face",
    color: "brand-green"
  },
  {
    id: "adonais-mercy-house",
    name: "Adonais Mercy House",
    industry: "Non-Profit",
    description: "Providing life-saving care and dignity to impoverished children with cancer in the Philippines.",
    logo: "/clients/adonais-mercy-house-logo.png",
    hasLogo: true,
    color: "brand-yellow",
    website: "https://v0-adonais-mercy-house.vercel.app"
  },
  {
    id: "hallanna-management",
    name: "Hallanna Management Corporation",
    industry: "Property Management",
    description: "Professional property and real estate management.",
    logo: "/clients/hallanna-management-logo.png",
    color: "brand-red"
  },
  {
    id: "galaxaco-group",
    name: "Galaxaco Group",
    industry: "Business Services",
    description: "Diversified business solutions and consulting.",
    logo: "/clients/galaxaco-group-logo.png",
    color: "brand-blue"
  },
  {
    id: "a-black-tie-affair",
    name: "A Black Tie Affair",
    industry: "Events & Hospitality",
    description: "Premium event planning and hospitality services.",
    logo: "/clients/a-black-tie-affair-logo.avif",
    hasLogo: true,
    website: "https://ablacktieaffairinc.com",
    color: "brand-green"
  },
  {
    id: "jeepneystop",
    name: "Jeepneystop",
    industry: "Transportation Tech",
    description: "Modern transportation solutions and technology.",
    logo: "/clients/jeepneystop-logo.png",
    color: "brand-yellow"
  },
  {
    id: "farmersexchange",
    name: "Farmers Exchange",
    industry: "Agriculture",
    description: "Connecting farmers directly to consumers.",
    logo: "/clients/farmersexchange-logo.png",
    color: "brand-red"
  },
  {
    id: "sololegalcrm",
    name: "Solo Legal CRM",
    industry: "Legal Tech",
    description: "CRM solutions built for solo legal practitioners.",
    logo: "/clients/sololegalcrm-logo.png",
    color: "brand-blue"
  },
  {
    id: "contra-costa-firefighters",
    name: "Contra Costa Firefighters",
    industry: "Public Safety",
    description: "Serving and protecting Contra Costa County communities with courage and dedication.",
    logo: "/clients/contra-costa-firefighters-logo.webp",
    hasLogo: true,
    color: "brand-red"
  }
]

export default function ClientsPage() {
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
              <Link href="/news" className="text-foreground/70 hover:text-brand-green transition-colors font-medium">
                News
              </Link>
              <Link href="/work-with-us" className="btn-green text-sm">
                Work With Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-8 bg-brand-green rounded-lg" />
              <div className="w-8 h-8 bg-brand-blue rounded-lg" />
              <div className="w-8 h-8 bg-brand-yellow rounded-lg" />
              <div className="w-8 h-8 bg-brand-red rounded-lg" />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              <span className="h1-rainbow">Our Clients</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Proud partnerships with businesses across industries. 
              We build together, grow together, and amplify success together.
            </p>
          </div>
        </div>
      </section>

      {/* Client Portal Notice */}
      <section className="py-8 px-6 bg-brand-green/10 border-y border-brand-green/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-4 text-center">
            <div className="w-3 h-3 bg-brand-green rounded-full animate-pulse" />
            <p className="text-foreground/80">
              <span className="font-semibold text-brand-green">Client Portal Coming Soon</span> — 
              Secure access to project specs, communications, and real-time updates.
            </p>
          </div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client) => (
              <Link 
                key={client.id} 
                href={`/clients/${client.id}`}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-transparent hover:border-brand-green/30 transition-all duration-300 h-full flex flex-col">
                  {/* Logo */}
                  <div className="w-full h-32 bg-slate-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-50 transition-colors overflow-hidden">
                    {client.hasLogo ? (
                      <Image
                        src={client.logo}
                        alt={`${client.name} logo`}
                        width={200}
                        height={100}
                        className="object-contain max-h-28 p-2"
                      />
                    ) : client.useIcon === "face" ? (
                      <div className="text-center">
                        <div className="w-20 h-20 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto">
                          <svg className="w-12 h-12 text-brand-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            {/* Face profile silhouette */}
                            <path d="M12 2C8 2 6 5 6 8c0 1.5.5 3 1.5 4-.5.5-1 1.5-1.5 3-.5 2 0 4 1 5h10c1-1 1.5-3 1-5-.5-1.5-1-2.5-1.5-3 1-1 1.5-2.5 1.5-4 0-3-2-6-6-6z" strokeLinecap="round" strokeLinejoin="round"/>
                            {/* Eye */}
                            <circle cx="10" cy="9" r="1" fill="currentColor"/>
                            {/* Gentle smile */}
                            <path d="M9 13c1.5 1 3.5 1 5 0" strokeLinecap="round"/>
                            {/* Sparkle/enhancement symbol */}
                            <path d="M17 4l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" fill="currentColor" stroke="none"/>
                          </svg>
                        </div>
                      </div>
                    ) : client.useIcon === "fire" ? (
                      <div className="text-center">
                        <div className="w-20 h-20 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto">
                          <svg className="w-12 h-12 text-brand-red" viewBox="0 0 24 24" fill="currentColor">
                            {/* Fire/Flame icon */}
                            <path d="M12 23c-3.866 0-7-3.134-7-7 0-2.5 1.5-4.5 3-6 .5-.5 1-1.5 1-2.5 0-.5.5-1 1-1s1 .5 1 1c0 1.5.5 2.5 1.5 3.5 1.5 1.5 2.5 3 2.5 5 0 .5.5 1 1 1s1-.5 1-1c0-1-.5-2-1-3-.5-1-.5-2 0-3 .5-1 1-2 1-3.5 0-.5.5-1 1-1s1 .5 1 1c0 2-1 3.5-1 5 0 2 1.5 3.5 1.5 6 0 3.866-3.134 7-7 7z"/>
                            {/* Inner flame */}
                            <path d="M12 20c-1.657 0-3-1.343-3-3 0-1 .5-2 1-2.5.5-.5 1-1 1-1.5 0-.276.224-.5.5-.5s.5.224.5.5c0 .5.5 1 1 1.5.5.5 1 1.5 1 2.5 0 1.657-1.343 3-3 3z" fill="#FCD34D"/>
                          </svg>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center">
                        <div className={`w-16 h-16 bg-${client.color}/20 rounded-xl flex items-center justify-center mx-auto mb-2`}>
                          <span className={`text-2xl font-bold text-${client.color}`}>
                            {client.name.charAt(0)}
                          </span>
                        </div>
                        <span className="text-xs text-slate-400">Logo Placeholder</span>
                      </div>
                    )}
                  </div>

                  {/* Client Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-green transition-colors">
                        {client.name}
                      </h3>
                    </div>
                    <span className={`inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full mb-4`}>
                      {client.industry}
                    </span>
                    <p className="text-slate-600 text-sm mb-4">
                      {client.description}
                    </p>
                    {client.website && (
                      <a 
                        href={client.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-xs text-brand-blue hover:text-blue-700 font-medium mb-2"
                      >
                        Visit Site
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>

                  {/* View Details */}
                  <div className="flex items-center text-brand-green font-semibold text-sm group-hover:gap-2 transition-all">
                    <span>View Details</span>
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Our Client Family?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Let's explore how ArvinTech can amplify your business with tailored solutions and dedicated partnership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/support" 
              className="bg-brand-green text-white px-8 py-4 rounded-xl font-semibold hover:bg-brand-green/90 transition-all hover:scale-105"
            >
              Get Started
            </Link>
            <Link 
              href="/about" 
              className="bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6 border-t border-slate-800">
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

