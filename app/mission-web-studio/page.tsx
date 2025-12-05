"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function MissionWebStudioPage() {
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/arvintech-blocks-logo.png"
                alt="ArvinTech"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-xl font-bold arvintech-brand">arvintech</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/about" className="text-slate-600 hover:text-brand-green transition-colors">About</Link>
              <Link href="/clients" className="text-slate-600 hover:text-brand-green transition-colors">Clients</Link>
              <Link href="/support" className="text-slate-600 hover:text-brand-green transition-colors">Support</Link>
              <Link href="/work-with-us" className="px-5 py-2 bg-brand-green text-white rounded-lg hover:bg-green-600 transition-colors font-medium">
                Work With Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-brand-blue/10 via-white to-brand-green/10 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-brand-blue/20 rounded-xl rotate-12 animate-float" />
        <div className="absolute top-40 right-20 w-12 h-12 bg-brand-green/20 rounded-lg -rotate-6 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/4 w-10 h-10 bg-brand-yellow/20 rounded-md rotate-45 animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Logo/Icon */}
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-brand-blue to-brand-green rounded-2xl shadow-2xl mb-8 animate-float">
            <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-brand-blue via-brand-green to-brand-blue bg-clip-text text-transparent">
              Mission Web Studio
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-8">
            Full-service web development that amplifies your mission. 
            Built on modern technology with powerful features for growth.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-brand-blue/10 text-brand-blue rounded-full text-sm font-medium">Next.js</span>
            <span className="px-4 py-2 bg-brand-green/10 text-brand-green rounded-full text-sm font-medium">SEO Optimized</span>
            <span className="px-4 py-2 bg-brand-yellow/10 text-yellow-700 rounded-full text-sm font-medium">Automation</span>
            <span className="px-4 py-2 bg-brand-red/10 text-brand-red rounded-full text-sm font-medium">Customer Portal</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Who We Build For</h2>
            <p className="text-xl text-slate-600">Specialized solutions for organizations that make a difference</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Non-Profit Websites */}
            <div 
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-brand-green overflow-hidden"
              onMouseEnter={() => setHoveredService('nonprofit')}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-green to-brand-blue" />
              
              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-brand-green/20 to-brand-green/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Non-Profit & Faith</h3>
              <p className="text-slate-600 mb-6">
                Empowering churches, charities, and community organizations with beautiful, 
                purpose-driven websites that inspire action and build community.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-slate-700">
                  <div className="w-2 h-2 bg-brand-green rounded-full" />
                  Donation & Giving Platforms
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <div className="w-2 h-2 bg-brand-green rounded-full" />
                  Event & Volunteer Management
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <div className="w-2 h-2 bg-brand-green rounded-full" />
                  Member Portals & Directories
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <div className="w-2 h-2 bg-brand-green rounded-full" />
                  Sermon & Media Libraries
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <div className="w-2 h-2 bg-brand-green rounded-full" />
                  Newsletter & Email Campaigns
                </li>
              </ul>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brand-green/10 text-brand-green text-sm rounded-full">Churches</span>
                <span className="px-3 py-1 bg-brand-green/10 text-brand-green text-sm rounded-full">Charities</span>
                <span className="px-3 py-1 bg-brand-green/10 text-brand-green text-sm rounded-full">NGOs</span>
              </div>
            </div>

            {/* Restaurant, Catering, Events */}
            <div 
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-brand-red overflow-hidden"
              onMouseEnter={() => setHoveredService('restaurant')}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red to-brand-yellow" />
              
              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-brand-red/20 to-brand-red/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Restaurant & Events</h3>
              <p className="text-slate-600 mb-6">
                Stunning digital experiences for restaurants, caterers, and event venues 
                that showcase your offerings and drive bookings.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-slate-700">
                  <div className="w-2 h-2 bg-brand-red rounded-full" />
                  Online Ordering & Menus
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <div className="w-2 h-2 bg-brand-red rounded-full" />
                  Reservation Systems
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <div className="w-2 h-2 bg-brand-red rounded-full" />
                  Catering Quote Requests
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <div className="w-2 h-2 bg-brand-red rounded-full" />
                  Event Calendar & Booking
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <div className="w-2 h-2 bg-brand-red rounded-full" />
                  Photo & Video Galleries
                </li>
              </ul>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brand-red/10 text-brand-red text-sm rounded-full">Restaurants</span>
                <span className="px-3 py-1 bg-brand-red/10 text-brand-red text-sm rounded-full">Catering</span>
                <span className="px-3 py-1 bg-brand-red/10 text-brand-red text-sm rounded-full">Venues</span>
              </div>
            </div>

            {/* Professional Business */}
            <div 
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-brand-blue overflow-hidden"
              onMouseEnter={() => setHoveredService('professional')}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue to-brand-green" />
              
              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-brand-blue/20 to-brand-blue/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Professional Services</h3>
              <p className="text-slate-600 mb-6">
                Sophisticated websites for accountants, lawyers, engineers, and architects 
                that establish credibility and generate leads.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-slate-700">
                  <div className="w-2 h-2 bg-brand-blue rounded-full" />
                  Client Portals & Dashboards
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <div className="w-2 h-2 bg-brand-blue rounded-full" />
                  Appointment Scheduling
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <div className="w-2 h-2 bg-brand-blue rounded-full" />
                  Document Management
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <div className="w-2 h-2 bg-brand-blue rounded-full" />
                  Project Portfolios
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <div className="w-2 h-2 bg-brand-blue rounded-full" />
                  Secure Billing Integration
                </li>
              </ul>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue text-sm rounded-full">Lawyers</span>
                <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue text-sm rounded-full">Accountants</span>
                <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue text-sm rounded-full">Engineers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It's Built Section */}
      <section className="py-20 px-6 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="px-4 py-2 bg-brand-green/20 text-brand-green rounded-full text-sm font-medium mb-6 inline-block">
              Under The Hood
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How It&apos;s Built</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Modern architecture with customer-facing components designed for growth
            </p>
          </div>

          {/* Tech Stack */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.251 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.572 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Next.js Foundation</h3>
                  <p className="text-slate-400">React framework for production</p>
                </div>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Every Mission Web Studio site is built on Next.js — the React framework trusted by 
                Netflix, TikTok, and Nike. This means blazing-fast performance, excellent SEO, 
                and a foundation that scales with your business.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-white/10 rounded-lg text-sm">Server Components</span>
                <span className="px-3 py-1 bg-white/10 rounded-lg text-sm">Edge Runtime</span>
                <span className="px-3 py-1 bg-white/10 rounded-lg text-sm">ISR</span>
                <span className="px-3 py-1 bg-white/10 rounded-lg text-sm">API Routes</span>
              </div>
            </div>
            
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-brand-red rounded-full" />
                <div className="w-3 h-3 bg-brand-yellow rounded-full" />
                <div className="w-3 h-3 bg-brand-green rounded-full" />
              </div>
              <pre className="text-sm text-slate-300 overflow-x-auto">
<code>{`// Your site, amplified
import { CustomerPortal } from '@arvintech/components'
import { Analytics, Billing } from '@arvintech/services'

export default function Dashboard() {
  return (
    <CustomerPortal>
      <Analytics real-time />
      <Billing stripe-integrated />
      <Support ai-powered />
    </CustomerPortal>
  )
}`}</code>
              </pre>
            </div>
          </div>

          {/* Customer-Facing Components */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Billing */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-brand-green/50 transition-colors">
              <div className="w-14 h-14 bg-brand-green/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Billing & Payments</h3>
              <p className="text-slate-400 mb-4">
                Integrated payment processing with Stripe. Accept donations, subscriptions, 
                invoices, and one-time payments seamlessly.
              </p>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Recurring billing
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Invoice generation
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  QuickBooks Online sync
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Payment analytics
                </li>
              </ul>
            </div>

            {/* Customer Service */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-brand-blue/50 transition-colors">
              <div className="w-14 h-14 bg-brand-blue/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Customer Service</h3>
              <p className="text-slate-400 mb-4">
                Intelligence Amplified Incident Manager helps you deliver support services 
                fast and consistent—keeping your team efficient and customers happy.
              </p>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Incident tracking
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Response templates
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Service consistency
                </li>
              </ul>
            </div>

            {/* Data Inference */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-brand-yellow/50 transition-colors">
              <div className="w-14 h-14 bg-brand-yellow/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Data & Analytics</h3>
              <p className="text-slate-400 mb-4">
                Smart insights from your customer data. Understand behavior, predict trends, 
                and make data-driven decisions.
              </p>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Real-time dashboards
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Behavior tracking
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  AI predictions
                </li>
              </ul>
            </div>

            {/* SEO & Web Ads */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-brand-red/50 transition-colors">
              <div className="w-14 h-14 bg-brand-red/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">SEO & Web Ads</h3>
              <p className="text-slate-400 mb-4">
                Get found and grow your audience. Strategic SEO optimization and targeted 
                ad campaigns that drive real results.
              </p>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  On-page SEO optimization
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Google & Meta Ads
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Conversion tracking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Next.js Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-brand-blue/10 text-brand-blue rounded-full text-sm font-semibold mb-4">THE TECHNOLOGY</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Why <span className="text-brand-blue">Next.js</span>?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The modern framework powering the web's fastest, most intelligent websites.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            {/* What is Next.js */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200">
              <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.251 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.572 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">What is Next.js?</h3>
              <p className="text-slate-600 mb-4">
                Next.js is a React-based framework created by Vercel that enables developers to build 
                <strong> fast, scalable, and SEO-friendly</strong> web applications. It's the technology 
                behind some of the world's most visited websites.
              </p>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Server-Side Rendering (SSR)</strong> — Pages load instantly with pre-rendered content</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Static Site Generation (SSG)</strong> — Lightning-fast pages served from CDN</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>API Routes</strong> — Backend functionality built right into your site</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Image Optimization</strong> — Automatic image compression and lazy loading</span>
                </li>
              </ul>
            </div>

            {/* Why We Use It Now */}
            <div className="bg-gradient-to-br from-brand-green/5 to-brand-blue/5 rounded-2xl p-8 border border-brand-green/20">
              <div className="w-14 h-14 bg-brand-green rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Why We Use It Now</h3>
              <p className="text-slate-600 mb-4">
                The web has evolved. Users expect <strong>instant loading, mobile-first experiences, 
                and seamless interactions</strong>. Next.js delivers all of this out of the box.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-white rounded-lg">
                  <div className="text-3xl font-bold text-brand-green">100</div>
                  <div className="text-sm text-slate-600">Perfect Lighthouse scores achievable</div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-white rounded-lg">
                  <div className="text-3xl font-bold text-brand-blue">50%</div>
                  <div className="text-sm text-slate-600">Faster than traditional React apps</div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-white rounded-lg">
                  <div className="text-3xl font-bold text-brand-yellow">∞</div>
                  <div className="text-sm text-slate-600">Scales infinitely with serverless</div>
                </div>
              </div>
            </div>
          </div>

          {/* WordPress Comparison */}
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-3 py-1 bg-brand-yellow/20 text-brand-yellow text-sm font-semibold rounded-full mb-4">HONEST COMPARISON</span>
                <h3 className="text-3xl font-bold mb-4">What About WordPress?</h3>
                <p className="text-slate-300 mb-6">
                  WordPress powers 43% of the web—and for good reason. It's proven, familiar, and has a massive 
                  ecosystem. <strong className="text-white">We still build WordPress sites when it makes sense.</strong>
                </p>
                <p className="text-slate-300">
                  But for businesses that need <strong className="text-brand-green">speed, security, and AI-ready architecture</strong>, 
                  Next.js is the clear choice. Here's why:
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                  <span className="text-slate-300">Security Vulnerabilities</span>
                  <div className="flex gap-4">
                    <span className="text-red-400 font-semibold">WordPress: High</span>
                    <span className="text-brand-green font-semibold">Next.js: Low</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                  <span className="text-slate-300">Page Load Speed</span>
                  <div className="flex gap-4">
                    <span className="text-yellow-400 font-semibold">WordPress: 2-4s</span>
                    <span className="text-brand-green font-semibold">Next.js: &lt;1s</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                  <span className="text-slate-300">Hosting Costs</span>
                  <div className="flex gap-4">
                    <span className="text-yellow-400 font-semibold">WordPress: $$</span>
                    <span className="text-brand-green font-semibold">Next.js: $</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                  <span className="text-slate-300">AI Integration</span>
                  <div className="flex gap-4">
                    <span className="text-red-400 font-semibold">WordPress: Limited</span>
                    <span className="text-brand-green font-semibold">Next.js: Native</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Architecture Design */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-brand-blue/10 text-brand-blue rounded-full text-sm font-semibold mb-4">ARCHITECTURE</span>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Mission Web Architecture Design
              </h3>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                A modern, modular architecture built for performance, scalability, and AI integration.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Frontend Layer */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-brand-blue">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Frontend Layer</h4>
                <p className="text-slate-600 text-sm mb-4">React components with server-side rendering for instant loads.</p>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• Next.js 14+ App Router</li>
                  <li>• Tailwind CSS styling</li>
                  <li>• Responsive design system</li>
                  <li>• Client portal components</li>
                </ul>
              </div>

              {/* API Layer */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-brand-green">
                <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">API Layer</h4>
                <p className="text-slate-600 text-sm mb-4">Serverless functions for business logic and integrations.</p>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• Next.js API routes</li>
                  <li>• Stripe payment processing</li>
                  <li>• QuickBooks Online sync</li>
                  <li>• Email automation</li>
                </ul>
              </div>

              {/* Data Layer */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-brand-yellow">
                <div className="w-12 h-12 bg-brand-yellow/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Data Layer</h4>
                <p className="text-slate-600 text-sm mb-4">Flexible database solutions for any scale.</p>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• PostgreSQL / Supabase</li>
                  <li>• Real-time subscriptions</li>
                  <li>• Document storage</li>
                  <li>• Analytics tracking</li>
                </ul>
              </div>
            </div>
          </div>

          {/* AI Future Compatibility */}
          <div className="bg-gradient-to-br from-purple-900 via-slate-900 to-blue-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-semibold mb-4">FUTURE-READY</span>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Built for the <span className="text-brand-green">AI Age</span>
                </h3>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                  Every Mission Web site is architected for seamless AI integration—today and tomorrow.
                </p>
              </div>

              {/* First Row - 3 Columns */}
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
                  <div className="w-10 h-10 bg-brand-blue/20 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h4 className="font-bold mb-2">Smart Document Processing</h4>
                  <p className="text-sm text-slate-400">AI-powered extraction from PDFs, images, and forms.</p>
                </div>

                <div className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
                  <div className="w-10 h-10 bg-brand-yellow/20 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="font-bold mb-2">Predictive Analytics</h4>
                  <p className="text-sm text-slate-400">ML models for forecasting, recommendations, and insights.</p>
                </div>

                <div className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
                  <div className="w-10 h-10 bg-brand-red/20 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h4 className="font-bold mb-2">Workflow Automation</h4>
                  <p className="text-sm text-slate-400">AI agents that handle repetitive tasks automatically.</p>
                </div>
              </div>

              {/* Second Row - 5 Columns */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <div className="bg-white/5 backdrop-blur rounded-xl p-5 border border-white/10">
                  <div className="w-8 h-8 bg-violet-500/20 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-sm mb-1">Rapid Development</h4>
                  <p className="text-xs text-slate-400">AI-enhanced programming stacks.</p>
                </div>

                <div className="bg-white/5 backdrop-blur rounded-xl p-5 border border-white/10">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-sm mb-1">Payment Gateways</h4>
                  <p className="text-xs text-slate-400">Stripe, QuickBooks integrations.</p>
                </div>

                <div className="bg-white/5 backdrop-blur rounded-xl p-5 border border-white/10">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-sm mb-1">User Access</h4>
                  <p className="text-xs text-slate-400">Role-based permissions.</p>
                </div>

                <div className="bg-white/5 backdrop-blur rounded-xl p-5 border border-white/10">
                  <div className="w-8 h-8 bg-brand-green/20 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-4 h-4 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-sm mb-1">AI Chat</h4>
                  <p className="text-xs text-slate-400">GPT-4, Claude models.</p>
                </div>

                <div className="bg-white/5 backdrop-blur rounded-xl p-5 border border-white/10">
                  <div className="w-8 h-8 bg-pink-500/20 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-4 h-4 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-sm mb-1">Email & SMS</h4>
                  <p className="text-xs text-slate-400">Automated campaigns.</p>
                </div>

                <div className="bg-white/5 backdrop-blur rounded-xl p-5 border border-white/10">
                  <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-sm mb-1">Geolocation</h4>
                  <p className="text-xs text-slate-400">Maps & store finders.</p>
                </div>

                <div className="bg-white/5 backdrop-blur rounded-xl p-5 border border-white/10">
                  <div className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-sm mb-1">Content & Proofing</h4>
                  <p className="text-xs text-slate-400">AI-powered posting.</p>
                </div>

                <div className="bg-white/5 backdrop-blur rounded-xl p-5 border border-white/10">
                  <div className="w-8 h-8 bg-rose-500/20 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-4 h-4 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-sm mb-1">SEO & Ads</h4>
                  <p className="text-xs text-slate-400">A/B testing automation.</p>
                </div>

                <div className="bg-white/5 backdrop-blur rounded-xl p-5 border border-white/10">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-sm mb-1">Messenger & Zoom</h4>
                  <p className="text-xs text-slate-400">Video integrations.</p>
                </div>

                <div className="bg-white/5 backdrop-blur rounded-xl p-5 border border-white/10">
                  <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-sm mb-1">Complex Menus</h4>
                  <p className="text-xs text-slate-400">Multi-level navigation.</p>
                </div>

                <div className="bg-white/5 backdrop-blur rounded-xl p-5 border border-white/10">
                  <div className="w-8 h-8 bg-teal-500/20 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-sm mb-1">Pricing Tables</h4>
                  <p className="text-xs text-slate-400">Dynamic pricing displays.</p>
                </div>

                <div className="bg-white/5 backdrop-blur rounded-xl p-5 border border-white/10">
                  <div className="w-8 h-8 bg-sky-500/20 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-sm mb-1">Fully Responsive</h4>
                  <p className="text-xs text-slate-400">Mobile, tablet & PC ready.</p>
                </div>

                <div className="bg-white/5 backdrop-blur rounded-xl p-5 border border-white/10">
                  <div className="w-8 h-8 bg-slate-500/20 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-sm mb-1">Print Formatting</h4>
                  <p className="text-xs text-slate-400">Print-ready page layouts.</p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-lg text-slate-300 mb-6">
                  Your website isn't just a brochure—it's the <strong className="text-white">foundation of your AI-powered business</strong>.
                </p>
                <Link href="/support" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-green text-white rounded-xl font-semibold hover:bg-green-600 transition-colors">
                  Build Your AI-Ready Site
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-brand-blue via-brand-green to-brand-blue">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Your Mission?</h2>
          <p className="text-xl text-white/80 mb-8">
            Let&apos;s create a website that amplifies your impact and grows with your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/work-with-us" 
              className="px-8 py-4 bg-white text-brand-blue rounded-xl font-bold hover:bg-slate-100 transition-colors shadow-lg"
            >
              Start Your Project
            </Link>
            <Link 
              href="/clients" 
              className="px-8 py-4 bg-white/10 text-white rounded-xl font-bold hover:bg-white/20 transition-colors border border-white/30"
            >
              View Our Work
            </Link>
          </div>
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

