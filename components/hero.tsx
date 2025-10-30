"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY
        heroRef.current.style.backgroundPosition = `center ${scrollY * 0.5}px`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-primary via-primary/90 to-background overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-8 animate-fade-in-up">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-28%20at%2011.18.30_8e726025-0rh8nhm2QwTy2SpDBUR3xcG1vUII72.jpg"
            alt="Rooster Logo"
            className="h-48 w-48 mx-auto rounded-full shadow-2xl animate-float"
          />
        </div>

        {/* Tagline */}
        <h1
          className="text-5xl md:text-7xl font-bold text-secondary mb-4 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Just As You Like It
        </h1>

        <p className="text-xl md:text-2xl text-white mb-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          Fresh ingredients, fast service, unforgettable taste
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <Link
            href="/menu"
            className="px-8 py-4 bg-secondary text-primary font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-secondary/50 transition-all duration-300 animate-pulse-glow"
          >
            Menu
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-secondary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-secondary rounded-full animate-bounce"></div>
        </div>
      </div> */}
    </section>
  )
}
