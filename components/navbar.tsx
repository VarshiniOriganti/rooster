"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Offers", href: "/offers" },
    { label: "Catering", href: "/catering" },
    { label: "About us", href: "/about" },
    { label: "Feedback", href: "/feedback" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg border-b-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-28%20at%2011.18.30_8e726025-0rh8nhm2QwTy2SpDBUR3xcG1vUII72.jpg"
              alt="Rooster Logo"
              className="h-16 w-16 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-foreground font-medium hover:text-primary transition-colors duration-300 relative group text-sm"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Order Now Button */}
          <Link
            href="/menu"
            className="hidden md:block px-6 py-2 bg-secondary text-primary font-bold rounded-full hover:shadow-lg hover:shadow-secondary/50 transition-all duration-300 animate-pulse-glow"
          >
            Menu
          </Link>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-primary">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block px-4 py-2 text-foreground hover:bg-secondary/20 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/menu"
              className="block w-full px-4 py-2 bg-secondary text-primary font-bold rounded-lg mt-4 text-center"
            >
        
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
