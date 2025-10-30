"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import About from "@/components/about"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* About Hero */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16 text-center">
        <h1 className="text-5xl font-bold text-secondary mb-2">About Us</h1>
        <p className="text-secondary/90">Learn more about Rooster</p>
      </section>

      {/* About Content */}
      <About />

      <Footer />
    </main>
  )
}
