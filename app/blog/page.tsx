"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/Footer"

export default function BlogPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business Intelligence",
      excerpt:
        "Exploring how artificial intelligence is revolutionizing data analysis and decision-making processes in modern enterprises.",
      author: "Dr. Sarah Chen",
      date: "December 15, 2024",
      category: "AI & Technology",
      readTime: "8 min read",
      image: "/ai-business-intelligence-dashboard.jpg",
      featured: true,
    },
    {
      id: 2,
      title: "Building Scalable Cloud Infrastructure",
      excerpt: "Best practices for designing and implementing cloud solutions that grow with your business needs.",
      author: "Michael Rodriguez",
      date: "December 12, 2024",
      category: "Cloud Computing",
      readTime: "6 min read",
      image: "/cloud-infrastructure-servers.jpg",
      featured: false,
    },
    {
      id: 3,
      title: "Digital Transformation Success Stories",
      excerpt: "Real-world case studies of companies that successfully navigated their digital transformation journey.",
      author: "Jennifer Park",
      date: "December 10, 2024",
      category: "Digital Strategy",
      readTime: "10 min read",
      image: "/digital-transformation-office.jpg",
      featured: false,
    },
    {
      id: 4,
      title: "Cybersecurity in the Age of Remote Work",
      excerpt:
        "Essential security measures and best practices for protecting your organization in a distributed workforce.",
      author: "Alex Thompson",
      date: "December 8, 2024",
      category: "Security",
      readTime: "7 min read",
      image: "/cybersecurity-remote-work.png",
      featured: false,
    },
    {
      id: 5,
      title: "Machine Learning for Small Businesses",
      excerpt: "How small and medium enterprises can leverage machine learning to compete with larger corporations.",
      author: "Dr. Sarah Chen",
      date: "December 5, 2024",
      category: "AI & Technology",
      readTime: "9 min read",
      image: "/machine-learning-small-business.jpg",
      featured: false,
    },
    {
      id: 6,
      title: "The Evolution of Web Development",
      excerpt: "From static HTML to modern frameworks: a journey through the changing landscape of web development.",
      author: "David Kim",
      date: "December 3, 2024",
      category: "Web Development",
      readTime: "5 min read",
      image: "/web-development-coding.png",
      featured: false,
    },
  ]

  const categories = ["All", "AI & Technology", "Cloud Computing", "Digital Strategy", "Security", "Web Development"]

  const categoryColors: Record<string, string> = {
    "AI & Technology": "brand-green",
    "Cloud Computing": "brand-blue",
    "Digital Strategy": "brand-yellow",
    "Security": "brand-red",
    "Web Development": "brand-blue",
  }

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter((post) => post.category === selectedCategory)

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = selectedCategory === "All" 
    ? blogPosts.filter((post) => !post.featured)
    : filteredPosts.filter((post) => !post.featured)

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
              <Link href="/news" className="text-foreground/70 hover:text-brand-green transition-colors font-medium">
                News
              </Link>
              <Link href="/blog" className="text-brand-green font-semibold">
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
        <div className="absolute top-32 right-10 w-24 h-24 bg-brand-blue/10 rounded-2xl rotate-12 animate-float" />
        <div className="absolute bottom-10 left-10 w-20 h-20 bg-brand-yellow/10 rounded-xl -rotate-12 animate-float delay-200" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className={`transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="block-green" />
              <div className="block-blue" />
              <div className="block-yellow" />
              <div className="block-red" />
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
              <span className="h1-candy">arvintech</span>
              <span className="text-foreground"> Blog</span>
            </h1>
            <p className="text-2xl text-brand-green mb-4 font-medium">Insights, Innovation, and Intelligence</p>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Stay ahead of the curve with expert insights on AI, technology trends, and digital transformation strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`flex flex-wrap justify-center gap-4 transition-all duration-700 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-brand-green text-white shadow-lg"
                    : "bg-card text-foreground/70 hover:bg-secondary border border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === "All" && (
        <section className="py-8 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Featured Article</h2>
            <div className={`bg-card rounded-3xl overflow-hidden shadow-xl card-hover transition-all duration-700 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="md:flex">
                <div className="md:w-1/2 relative h-64 md:h-auto min-h-[300px]">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-green text-white px-4 py-2 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-brand-green text-sm font-medium">{featuredPost.category}</span>
                    <span className="text-foreground/50 text-sm">{featuredPost.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 hover:text-brand-green transition-colors cursor-pointer">
                    {featuredPost.title}
                  </h3>
                  <p className="text-foreground/70 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center">
                        <span className="text-white font-medium text-sm">
                          {featuredPost.author.split(" ").map((n) => n[0]).join("")}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-sm">{featuredPost.author}</p>
                        <p className="text-foreground/50 text-xs">{featuredPost.date}</p>
                      </div>
                    </div>
                    <button className="btn-green text-sm">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">
            {selectedCategory === "All" ? "Latest Articles" : `${selectedCategory} Articles`}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <article
                key={post.id}
                className={`bg-card rounded-2xl overflow-hidden shadow-lg card-hover transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`bg-${categoryColors[post.category] || "brand-green"} text-white px-3 py-1 rounded-full text-sm`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-foreground/50 text-sm">{post.readTime}</span>
                    <span className="text-foreground/50 text-sm">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 hover:text-brand-green transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-foreground/60 mb-4 text-sm">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center">
                        <span className="text-white font-medium text-xs">
                          {post.author.split(" ").map((n) => n[0]).join("")}
                        </span>
                      </div>
                      <span className="text-foreground/60 text-sm">{post.author}</span>
                    </div>
                    <button className="text-brand-green hover:underline text-sm font-medium">
                      Read →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-blue via-brand-green to-brand-blue bg-[length:200%_100%] animate-[gradient-shift_8s_ease_infinite] p-12 text-center text-white transition-all duration-700 delay-600 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-lg rotate-12" />
            <div className="absolute bottom-4 left-4 w-10 h-10 bg-white/20 rounded-xl -rotate-12" />
            
            <h3 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">Stay Updated</h3>
            <p className="text-white/90 mb-8 relative z-10">
              Subscribe to our newsletter and never miss the latest insights on AI, technology, and digital innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto relative z-10">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
              />
              <button className="bg-white text-brand-blue px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105">
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
