"use client"

import { useEffect, useRef } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const specialOffers = [
  {
    title: "Buy 2 Pizzas, Get 1 Free",
    description: "Valid on all pizza sizes",
    discount: "50% OFF",
    color: "from-red-300 to-red-400",
    icon: "🍕",
  },
  {
    title: "Burger Combo Deal",
    description: "Burger + Fries + Drink",
    discount: "30% OFF",
    color: "from-orange-300 to-orange-400",
    icon: "🍔",
  },
  {
    title: "Family Feast",
    description: "2 Pizzas + 2 Burgers + Sides",
    discount: "40% OFF",
    color: "from-yellow-300 to-yellow-400",
    icon: "👨‍👩‍👧‍👦",
  },
  {
    title: "Sandwich Special",
    description: "Buy 1 Get 1 Half Price",
    discount: "50% OFF",
    color: "from-green-300 to-green-400",
    icon: "🥪",
  },
  {
    title: "Ice Cream Party",
    description: "6 Scoops for the price of 4",
    discount: "33% OFF",
    color: "from-pink-300 to-pink-400",
    icon: "🍦",
  },
  {
    title: "Maggi Mania",
    description: "3 Maggi Bowls + Free Drink",
    discount: "35% OFF",
    color: "from-purple-300 to-purple-400",
    icon: "🍜",
  },
]

const timeOffers = [
  {
    time: "Breakfast Special",
    period: "7 AM - 11 AM",
    offer: "Free Coffee with any sandwich",
  },
  {
    time: "Lunch Rush",
    period: "12 PM - 2 PM",
    offer: "20% off on all combo meals",
  },
  {
    time: "Afternoon Snack",
    period: "3 PM - 5 PM",
    offer: "Buy 1 Maggi, Get 1 Free",
  },
  {
    time: "Dinner Delight",
    period: "6 PM - 9 PM",
    offer: "Free dessert with orders above ₹25",
  },
  {
    time: "Late Night",
    period: "9 PM - 11 PM",
    offer: "15% off on all items",
  },
]

export default function OffersPage() {
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

      {/* Offers Hero */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-20 text-center">
        <h1 className="text-5xl font-bold text-secondary mb-4">Special Offers</h1>
        <p className="text-xl text-secondary/90">Don't miss out on our amazing deals</p>
      </section>

      {/* Special Offers Grid */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Today's Specials</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {specialOffers.map((offer, idx) => (
              <div
                key={idx}
                data-animate
                className={`bg-gradient-to-br ${offer.color} rounded-lg p-8 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden`}
              >
                <div className="absolute top-4 right-4 text-4xl">{offer.icon}</div>
                <div className="relative z-10">
                  <div className="text-5xl font-bold mb-2 text-green-600 opacity-70">{offer.discount}</div>
                  <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                  <p className="text-white/90 mb-4">{offer.description}</p>
                  <button className="w-full bg-white text-primary font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors">
                    Claim Offer
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Time-Based Offers */}
          <div data-animate>
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">Time-Based Offers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {timeOffers.map((offer, idx) => (
                <div
                  key={idx}
                  className="bg-card border-2 border-secondary rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-primary mb-2">{offer.time}</h3>
                  <p className="text-sm text-secondary font-semibold mb-3">{offer.period}</p>
                  <p className="text-muted-foreground">{offer.offer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
