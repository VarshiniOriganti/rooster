"use client"

import { useEffect, useRef } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Menu from "@/components/menu"
import About from "@/components/about"
import OrderNow from "@/components/order-now"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
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
      <Hero />
      <Menu />
      <About />
      <OrderNow />
      <Contact />
      <Footer />
    </main>
  )
}
