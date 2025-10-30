"use client"

import { useState, useEffect } from "react"
import { ShoppingCart } from "lucide-react"

const offers = [
  {
    id: 1,
    title: "Buy 2 Pizzas, Get 1 Free",
    description: "Valid on all pizza sizes",
    discount: "50% OFF",
    color: "from-yellow-400 to-orange-400",
  },
  {
    id: 2,
    title: "Burger Bonanza",
    description: "Buy any burger, get fries free",
    discount: "FREE FRIES",
    color: "from-red-400 to-pink-400",
  },
  {
    id: 3,
    title: "Sandwich Special",
    description: "Get 30% off on all sandwiches",
    discount: "30% OFF",
    color: "from-green-400 to-emerald-400",
  },
  {
    id: 4,
    title: "Ice Cream Delight",
    description: "Buy 1, Get 1 at 50% off",
    discount: "50% OFF",
    color: "from-blue-400 to-cyan-400",
  },
  {
    id: 5,
    title: "Maggi Magic",
    description: "Free upgrade to premium Maggi",
    discount: "FREE UPGRADE",
    color: "from-purple-400 to-pink-400",
  },
]

export default function OrderNow() {
  const [activeOffer, setActiveOffer] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveOffer((prev) => (prev + 1) % offers.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="order-now" className="py-20 bg-gradient-to-b from-background to-primary/10" data-animate>
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-primary mb-4">Today's Offers</h2>
          <p className="text-xl text-muted-foreground">Don't miss out on our amazing deals</p>
        </div>

        {/* Animated Moving Offers */}
        <div className="mb-16">
          <div className="relative h-40 overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-primary/80 p-8 shadow-2xl">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-secondary to-transparent"></div>
            </div>

            {/* Offers carousel */}
            <div className="relative h-full flex items-center justify-between">
              {offers.map((offer, index) => (
                <div
                  key={offer.id}
                  className={`absolute inset-0 flex items-center justify-between px-8 transition-all duration-1000 ${
                    index === activeOffer ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
                  }`}
                >
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-secondary mb-2">{offer.title}</h3>
                    <p className="text-lg text-secondary/90">{offer.description}</p>
                  </div>
                  <div className="flex-shrink-0 ml-8">
                    <div
                      className={`bg-yellow-400 rounded-2xl px-8 py-6 shadow-lg transform hover:scale-105 transition-transform`}
                    >
                      <p className="text-white font-bold text-2xl text-center">{offer.discount}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Offer indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {offers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveOffer(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeOffer ? "w-8 bg-secondary" : "w-2 bg-secondary/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Offer Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {offers.map((offer, index) => (
            <div
              key={offer.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Animated background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${offer.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              {/* Content */}
              <div className="relative p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-primary flex-1">{offer.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{offer.description}</p>
                </div>

                {/* Discount badge */}
                <div className={`bg-yellow-400 rounded-lg px-4 py-2 text-center mb-4`}>
                  <p className="text-white font-bold text-sm">{offer.discount}</p>
                </div>
              </div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Limited time offers! Order now and enjoy delicious food at unbeatable prices.
          </p>
          <button className="bg-gradient-to-r from-primary to-primary/80 text-secondary font-bold py-4 px-12 rounded-full text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <ShoppingCart className="inline mr-2" size={24} />
            start your choice
          </button>
        </div>
      </div>
    </section>
  )
}
