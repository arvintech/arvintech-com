"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/Footer"

export default function NewsPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const featuredArticle = {
    id: 1,
    title: "ArvinTech Launches Revolutionary AI-Powered Business Intelligence Platform",
    excerpt:
      "Our latest innovation combines machine learning with human expertise to deliver unprecedented insights for enterprise decision-making.",
    date: "December 15, 2024",
    category: "Product Launch",
    image: "/ai-business-intelligence-dashboard.jpg",
    readTime: "5 min read",
  }

  const newsArticles = [
    {
      id: 2,
      title: "The Future of Human-AI Collaboration in Enterprise",
      excerpt:
        "Exploring how artificial intelligence amplifies human capabilities rather than replacing them in modern business environments.",
      date: "December 12, 2024",
      category: "Industry Insights",
      readTime: "3 min read",
    },
    {
      id: 3,
      title: "ArvinTech Partners with Leading Universities for AI Research",
      excerpt:
        "New collaboration aims to advance ethical AI development and create next-generation intelligent systems.",
      date: "December 10, 2024",
      category: "Partnerships",
      readTime: "4 min read",
    },
    {
      id: 4,
      title: "Digital Transformation Success Stories: Client Spotlight",
      excerpt:
        "How our intelligence amplification solutions helped Fortune 500 companies achieve 300% productivity gains.",
      date: "December 8, 2024",
      category: "Case Studies",
      readTime: "6 min read",
    },
    {
      id: 5,
      title: "Cybersecurity in the Age of AI: Best Practices",
      excerpt: "Essential security considerations when implementing AI systems in enterprise environments.",
      date: "December 5, 2024",
      category: "Security",
      readTime: "4 min read",
    },
    {
      id: 6,
      title: "ArvinTech Wins 'Innovation of the Year' Award",
      excerpt: "Recognition for our groundbreaking work in human-centric artificial intelligence solutions.",
      date: "December 1, 2024",
      category: "Awards",
      readTime: "2 min read",
    },
  ]

  const categories = ["All", "Product Launch", "Industry Insights", "Partnerships", "Case Studies", "Security", "Awards"]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categoryColors: Record<string, string> = {
    "Product Launch": "brand-green",
    "Industry Insights": "brand-blue",
    "Partnerships": "brand-yellow",
    "Case Studies": "brand-red",
    "Security": "brand-blue",
    "Awards": "brand-green",
  }

  return (
    <div className="min-h-screen bg-background blocks-pattern">
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
                priority
              />
              <span className="text-2xl font-bold arvintech-brand">arvintech</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/about" className="text-foreground/70 hover:text-brand-green transition-colors font-medium">
                About
              </Link>
              <Link href="/support" className="text-foreground/70 hover:text-brand-green transition-colors font-medium">
                Support
              </Link>
              <Link href="/news" className="text-brand-green font-semibold">
                News
              </Link>
              <Link href="/blog" className="text-foreground/70 hover:text-brand-green transition-colors font-medium">
                Blog
              </Link>
              <Link href="/work-with-us" className="btn-green text-sm">
                Work With Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute top-32 left-10 w-20 h-20 bg-brand-green/10 rounded-xl rotate-12 animate-float" />
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-brand-blue/10 rounded-lg -rotate-12 animate-float delay-200" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className={`transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="block-green" />
              <div className="block-blue" />
              <div className="block-yellow" />
              <div className="block-red" />
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 h1-fire">Latest News & Updates</h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Stay informed about <span className="arvintech-brand">arvintech</span>'s latest innovations, industry insights, and company milestones
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-700 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="bg-card rounded-3xl overflow-hidden shadow-xl card-hover">
              <div className="md:flex">
                <div className="md:w-1/2 relative h-64 md:h-auto">
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-brand-green text-white rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-brand-green text-sm font-medium">{featuredArticle.category}</span>
                    <span className="text-foreground/50 text-sm">•</span>
                    <span className="text-foreground/50 text-sm">{featuredArticle.readTime}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{featuredArticle.title}</h2>
                  <p className="text-foreground/70 mb-6">{featuredArticle.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground/50 text-sm">{featuredArticle.date}</span>
                    <button className="btn-green text-sm">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`flex flex-wrap gap-3 justify-center transition-all duration-700 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-brand-green text-white shadow-lg"
                    : "bg-card text-foreground/70 hover:bg-secondary hover:text-foreground border border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles
              .filter((article) => selectedCategory === "All" || article.category === selectedCategory)
              .map((article, index) => (
              <div
                key={article.id}
                className={`bg-card rounded-2xl p-6 shadow-lg card-hover border-t-4 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ 
                  animationDelay: `${400 + index * 100}ms`,
                  borderTopColor: `var(--${categoryColors[article.category] || "brand-green"})`
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 bg-${categoryColors[article.category] || "brand-green"}/10 text-${categoryColors[article.category] || "brand-green"} rounded-full text-xs font-medium`}>
                    {article.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 hover:text-brand-green transition-colors cursor-pointer">
                  {article.title}
                </h3>
                <p className="text-foreground/60 mb-6 text-sm">{article.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-3 text-sm text-foreground/50">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <button className="text-brand-green hover:underline text-sm font-medium">
                    Read →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-green via-brand-blue to-brand-green bg-[length:200%_100%] animate-[gradient-shift_8s_ease_infinite] p-12 text-center text-white transition-all duration-700 delay-600 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-lg rotate-12" />
            <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/20 rounded-xl -rotate-12" />
            
            <h3 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">Stay Updated</h3>
            <p className="text-white/90 mb-8 relative z-10">
              Subscribe to our newsletter for the latest news, insights, and product updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto relative z-10">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
              />
              <button className="bg-white text-brand-green px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
