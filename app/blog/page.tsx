"use client"

import { useEffect, useRef } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const blogPosts = [
  {
    title: "The Art of Perfect Pizza Making",
    date: "October 25, 2024",
    category: "Recipes",
    excerpt: "Learn the secrets behind our perfectly crafted pizzas and how we achieve that ideal crust every time.",
    image: "🍕",
  },
  {
    title: "Farm to Table: Our Ingredient Journey",
    date: "October 20, 2024",
    category: "Sourcing",
    excerpt: "Discover how we source the freshest ingredients from local farms to ensure quality in every bite.",
    image: "🌾",
  },
  {
    title: "Customer Stories: Your Favorite Rooster Moments",
    date: "October 15, 2024",
    category: "Community",
    excerpt: "Read heartwarming stories from our loyal customers about their favorite Rooster experiences.",
    image: "❤️",
  },
  {
    title: "Behind the Scenes: A Day in Our Kitchen",
    date: "October 10, 2024",
    category: "Operations",
    excerpt: "Take a peek into our bustling kitchen and meet the talented team that makes Rooster special.",
    image: "👨‍🍳",
  },
  {
    title: "Nutrition Guide: Eating Healthy at Rooster",
    date: "October 5, 2024",
    category: "Health",
    excerpt: "Explore our nutritious options and learn how to make healthier choices without sacrificing taste.",
    image: "🥗",
  },
  {
    title: "Seasonal Specials: What's New This Fall",
    date: "September 30, 2024",
    category: "Menu",
    excerpt: "Discover our exciting new fall menu items featuring seasonal ingredients and flavors.",
    image: "🍂",
  },
]

export default function BlogPage() {
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
        }
      })
    }, observerOptions)

    const elements = mainRef.current?.querySelectorAll("[data-animate]")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <main ref={mainRef} className="min-h-screen bg-background">
      <Navbar />

      {/* Blog Hero */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-20 text-center">
        <h1 className="text-5xl font-bold text-secondary mb-4">Rooster Blog</h1>
        <p className="text-xl text-secondary/90">Stories, recipes, and insights from our kitchen</p>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, idx) => (
              <article
                key={idx}
                data-animate
                className="bg-card border-2 border-secondary/20 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="bg-gradient-to-r from-secondary to-secondary/80 h-32 flex items-center justify-center text-6xl">
                  {post.image}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <button className="text-secondary font-bold hover:text-secondary/80 transition-colors">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-card py-16 px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">Subscribe to Our Blog</h2>
          <p className="text-muted-foreground mb-8">
            Get the latest recipes, stories, and updates delivered to your inbox
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border-2 border-secondary rounded-lg focus:outline-none focus:border-primary"
            />
            <button className="bg-secondary text-primary font-bold px-8 py-3 rounded-lg hover:bg-secondary/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
