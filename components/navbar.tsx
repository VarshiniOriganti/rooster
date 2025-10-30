"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Offers", href: "/offers" },
    { label: "Catering", href: "/catering" },
    { label: "About us", href: "/about" },
    { label: "Feedback", href: "/feedback" },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md bg-white/80 shadow-sm`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-28%20at%2011.18.30_8e726025-0rh8nhm2QwTy2SpDBUR3xcG1vUII72.jpg"
              alt="Rooster Logo"
              className="h-14 w-14 rounded-full border-2 border-white shadow-md group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-medium text-sm text-gray-800 hover:text-primary transition-colors duration-300 px-3 py-1.5 rounded-full hover:bg-white/50"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Order Now Button */}
          <Link
            href="/menu"
            className="hidden md:block px-6 py-2.5 font-bold rounded-full bg-primary text-white hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-primary/30"
          >
            Menu
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden text-gray-800"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 px-2 space-y-2 bg-white/95 rounded-lg mt-2 shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block px-4 py-2.5 text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/menu"
              className="block w-full px-4 py-2.5 bg-primary text-white font-bold text-center rounded-lg hover:bg-primary/90 transition-colors mt-3"
            >
              Order Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
