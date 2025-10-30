"use client"

import { useEffect, useRef } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const cateringPackages = [
  {
    name: "Small Party",
    guests: "10-20 people",
    price: "₹199",
    items: ["2 Large Pizzas", "1 Burger Platter", "1 Sandwich Platter", "Drinks & Desserts"],
  },
  {
    name: "Medium Gathering",
    guests: "20-50 people",
    price: "₹399",
    items: ["4 Large Pizzas", "2 Burger Platters", "2 Sandwich Platters", "Sides & Drinks", "Dessert Selection"],
  },
  {
    name: "Large Event",
    guests: "50-100 people",
    price: "₹799",
    items: [
      "8 Large Pizzas",
      "4 Burger Platters",
      "4 Sandwich Platters",
      "Full Sides",
      "Drinks & Desserts",
      "Setup & Service",
    ],
  },
  {
    name: "Corporate Event",
    guests: "100+ people",
    price: "Custom Quote",
    items: [
      "Customizable Menu",
      "Professional Setup",
      "Full Service Staff",
      "Beverages",
      "Dessert Bar",
      "Cleanup Included",
    ],
  },
]

export default function CateringPage() {
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

      {/* Catering Hero */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-20 text-center">
        <h1 className="text-5xl font-bold text-secondary mb-4">Catering & Events</h1>
        <p className="text-xl text-secondary/90">Make your event delicious with Rooster catering</p>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 md:px-8 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Why Choose Rooster Catering?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Fresh Ingredients", desc: "Quality ingredients prepared fresh" },
              { title: "Customizable Menus", desc: "Tailor packages to your needs" },
              { title: "Professional Service", desc: "Experienced catering staff" },
              { title: "Competitive Pricing", desc: "Best value for your budget" },
            ].map((item, idx) => (
              <div key={idx} data-animate className="text-center p-6 border-2 border-secondary rounded-lg">
                <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catering Packages */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Our Catering Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cateringPackages.map((pkg, idx) => (
              <div
                key={idx}
                data-animate
                className="bg-card border-2 border-secondary rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-2xl font-bold text-primary mb-2">{pkg.name}</h3>
                <p className="text-secondary font-semibold mb-4">{pkg.guests}</p>
                <p className="text-3xl font-bold text-green-600 mb-6">{pkg.price}</p>
                <ul className="space-y-2 mb-6">
                  {pkg.items.map((item, i) => (
                    <li key={i} className="text-muted-foreground flex items-start">
                      <span className="text-secondary mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-secondary text-primary font-bold py-3 rounded-lg hover:bg-secondary/90 transition-colors">
              
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-secondary to-secondary/80 py-16 px-4 md:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-4">Need a Custom Package?</h2>
          <p className="text-primary/90 mb-8">Contact us for personalized catering solutions</p>
          <button className="bg-primary text-secondary font-bold py-4 px-8 rounded-lg hover:bg-primary/90 transition-colors text-lg">
            Get a Quote
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
