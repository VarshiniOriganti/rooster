"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const offers = [
  {
    id: 1,
    title: "Buy 2 Pizzas, Get 1 Free",
    description: "Valid on all pizza sizes",
    discount: "33% OFF",
    color: "from-primary to-primary/80",
  },
  {
    id: 2,
    title: "Burger Combo Deal",
    description: "Burger + Fries + Drink",
    discount: "25% OFF",
    color: "from-secondary to-secondary/80",
  },
  {
    id: 3,
    title: "Ice Cream Special",
    description: "Buy 3, Get 1 Free",
    discount: "25% OFF",
    color: "from-primary to-secondary",
  },
  {
    id: 4,
    title: "Family Feast",
    description: "Mix & Match any 5 items",
    discount: "30% OFF",
    color: "from-secondary to-primary",
  },
]

export default function Offers() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % offers.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % offers.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + offers.length) % offers.length)

  return (
    <section id="offers" className="py-20 bg-primary/5" data-animate>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-primary mb-4">Today's Offers</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">Don't miss out on our amazing deals</p>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {offers.map((offer) => (
                <div
                  key={offer.id}
                  className={`min-w-full relative text-white`}
                >
                  <div
                    className={`bg-gradient-to-r ${offer.color} px-12 py-16 flex items-center justify-between shadow-none`}
                    style={{
                      clipPath: "polygon(0 0, 96% 0, 100% 50%, 96% 100%, 0 100%, 4% 50%)",
                    }}
                  >
                    <div className="relative z-10">
                      <h3 className="text-4xl font-bold mb-2">{offer.title}</h3>
                      <p className="text-xl/7 opacity-90">{offer.description}</p>
                    </div>
                    <div className="relative z-10">
                      <div className="text-6xl font-extrabold text-green-600 opacity-70">{offer.discount}</div>
                    </div>
                    <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                      <div className="bg-white text-primary font-semibold px-6 py-3 rounded-full shadow-lg ring-1 ring-black/5">
                        {offer.discount}
                      </div>
                    </div>
                    <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
                    <div className="absolute -right-10 -bottom-10 h-44 w-44 rounded-full bg-black/10 blur-2xl" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-3 rounded-full transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-3 rounded-full transition-all"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {offers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide ? "bg-primary w-10" : "bg-primary/30 w-3"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

