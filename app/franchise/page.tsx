"use client"

import { useEffect, useRef } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const franchiseSteps = [
  {
    step: "1",
    title: "Submit Application",
    description: "Fill out our franchise application form with your details and business experience",
  },
  {
    step: "2",
    title: "Initial Review",
    description: "Our team reviews your application and qualifications",
  },
  {
    step: "3",
    title: "Discovery Call",
    description: "Discuss franchise opportunity, investment, and support",
  },
  {
    step: "4",
    title: "Site Selection",
    description: "We help you find the perfect location for your franchise",
  },
  {
    step: "5",
    title: "Training",
    description: "Comprehensive training on operations, management, and quality",
  },
  {
    step: "6",
    title: "Grand Opening",
    description: "Launch your Rooster franchise with full support",
  },
]

export default function FranchisePage() {
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

      {/* Franchise Hero */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-20 text-center">
        <h1 className="text-5xl font-bold text-secondary mb-4">Franchise Opportunities</h1>
        <p className="text-xl text-secondary/90">Join the Rooster family and grow your business</p>
      </section>

      {/* Why Franchise */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Why Franchise with Rooster?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Proven Business Model", desc: "Successful track record with established systems" },
              { title: "Comprehensive Support", desc: "Training, marketing, and operational support" },
              { title: "Strong Brand", desc: "Recognized brand with loyal customer base" },
              { title: "Quality Products", desc: "Premium ingredients and consistent quality" },
              { title: "Marketing Support", desc: "National and local marketing campaigns" },
              { title: "Ongoing Training", desc: "Continuous staff and management training" },
            ].map((item, idx) => (
              <div key={idx} data-animate className="bg-card border-2 border-secondary rounded-lg p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Details */}
      <section className="bg-card py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Investment Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div data-animate className="border-2 border-secondary rounded-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Initial Investment</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span>Franchise Fee</span>
                  <span className="font-bold text-secondary">₹25,000</span>
                </li>
                <li className="flex justify-between">
                  <span>Equipment & Setup</span>
                  <span className="font-bold text-secondary">₹50,000 - ₹75,000</span>
                </li>
                <li className="flex justify-between">
                  <span>Inventory</span>
                  <span className="font-bold text-secondary">₹10,000 - ₹15,000</span>
                </li>
                <li className="flex justify-between border-t-2 border-secondary pt-3 mt-3">
                  <span className="font-bold">Total</span>
                  <span className="font-bold text-secondary text-lg">₹85,000 - ₹115,000</span>
                </li>
              </ul>
            </div>

            <div data-animate className="border-2 border-secondary rounded-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">What We Provide</h3>
              <ul className="space-y-2">
                {[
                  "Complete training program",
                  "Site selection assistance",
                  "Equipment supplier relationships",
                  "Marketing materials & support",
                  "Operational manuals",
                  "Ongoing technical support",
                  "Menu development",
                  "Quality assurance program",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-secondary mr-2 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Franchise Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {franchiseSteps.map((item, idx) => (
              <div key={idx} data-animate className="relative">
                <div className="bg-secondary text-primary rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-secondary to-secondary/80 py-16 px-4 md:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-4">Ready to Join Rooster?</h2>
          <p className="text-primary/90 mb-8">Start your franchise journey today</p>
          <button className="bg-primary text-secondary font-bold py-4 px-8 rounded-lg hover:bg-primary/90 transition-colors text-lg">
            Apply Now
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
