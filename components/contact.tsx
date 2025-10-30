"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", phone: "", message: "" })
    alert("Thank you for your message! We will get back to you soon.")
  }

  return (
    <section id="contact" className="py-20 bg-background" data-animate>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-primary mb-4">Get In Touch</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">Have questions? We'd love to hear from you</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-in-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-foreground font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-primary rounded-lg focus:outline-none focus:border-secondary"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-foreground font-semibold mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-primary rounded-lg focus:outline-none focus:border-secondary"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label className="block text-foreground font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-primary rounded-lg focus:outline-none focus:border-secondary resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-secondary font-bold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-secondary text-primary">
                  <Phone size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-1">Phone</h3>
                <p className="text-foreground">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-secondary text-primary">
                  <Mail size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-1">Email</h3>
                <p className="text-foreground">hello@rooster.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-secondary text-primary">
                  <MapPin size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-1">Location</h3>
                <p className="text-foreground">123 Food Street, Flavor City, FC 12345</p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 rounded-lg overflow-hidden h-64 bg-gray-200">
              <img src="/map-location-restaurant.jpg" alt="Location Map" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
