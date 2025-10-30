"use client"

import { Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-primary text-secondary py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-28%20at%2011.18.30_8e726025-0rh8nhm2QwTy2SpDBUR3xcG1vUII72.jpg"
                alt="Rooster Logo"
                className="h-12 w-12 rounded-full"
              />
              <span className="text-2xl font-bold">Rooster</span>
            </div>
            <p className="text-secondary/80">Just As You Like It</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-secondary/80">
              <li>
                <a href="#menu" className="hover:text-secondary transition">
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-secondary transition">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-secondary transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold text-lg mb-4">Hours</h4>
            <ul className="space-y-2 text-secondary/80">
              <li>Mon - Fri: 10am - 10pm</li>
              <li>Sat - Sun: 11am - 11pm</li>
              <li>Holidays: 12pm - 9pm</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-lg mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:scale-110 transition-transform">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary/80 text-sm"> 2025 Rooster. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 px-6 py-2 bg-secondary text-primary font-bold rounded-full hover:shadow-lg transition-all"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  )
}
