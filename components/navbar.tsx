"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 z-40 w-full bg-black/95 backdrop-blur border-b border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/thee-fYDHq4JEJLm2JDC4rcgPJBpMgeiMKH.jpg"
              alt="TheeJunkGuys Logo"
              width={50}
              height={50}
              className="h-12 w-12 object-contain"
            />
            <span className="text-white font-bold text-lg hidden sm:inline">TheeJunkGuys</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-300 hover:text-accent transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:704-470-5889"
              className="px-6 py-2 bg-accent text-black font-bold rounded-lg hover:glow-accent-md transition-all duration-300"
            >
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-accent p-2 hover:bg-slate-900 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-700 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-4 py-2 text-gray-300 hover:text-accent hover:bg-slate-900 rounded-lg transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:704-470-5889"
              className="block px-4 py-2 bg-accent text-black font-bold rounded-lg text-center hover:glow-accent-md transition-all duration-300"
            >
              Call Now
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
