"use client"

import { useState } from "react"
import Image from "next/image"
import { Phone, ArrowRight } from "lucide-react"

export function Hero() {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black via-slate-900 to-black overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 grid-accent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row items-center gap-8">
        {/* Left: Text */}
        <div className="flex-1 animate-slide-in-left">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 text-balance leading-tight">
            Haul It. <span className="text-accent animate-neon-glow">Demo It.</span> Light It Up.
          </h1>

          <p className="text-xl text-gray-300 mb-8 text-balance max-w-lg">
            Professional junk removal, light demolition, and Christmas light installation serving Charlotte, China
            Grove, Concord, and Mooresville.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:704-470-5889"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-black font-bold rounded-lg hover:glow-accent-lg transition-all duration-300 transform hover:scale-105"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <Phone size={20} />
              Call Now: 704-470-5889
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-accent text-accent font-bold rounded-lg hover:bg-accent hover:text-black transition-all duration-300"
            >
              Get a Quote
              <ArrowRight size={20} />
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-gray-700">
            <div>
              <div className="text-3xl font-bold text-accent">24/7</div>
              <div className="text-sm text-gray-400">Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">4</div>
              <div className="text-sm text-gray-400">Service Areas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">100%</div>
              <div className="text-sm text-gray-400">Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="flex-1 max-w-sm mx-auto lg:mx-0">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent rounded-xl blur-xl opacity-50" />
            <Image
              src="/h1.jpg"
              alt="Junk removal in action"
              width={400}
              height={400}
              className="relative rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Floating CTA for Mobile */}
      <div className="fixed bottom-6 right-6 z-50 lg:hidden">
        <a
          href="tel:704-470-5889"
          className="flex items-center justify-center w-16 h-16 bg-accent text-black rounded-full shadow-lg hover:glow-accent-lg transition-all duration-300 font-bold text-sm"
        >
          <Phone size={24} />
        </a>
      </div>
    </section>
  )
}