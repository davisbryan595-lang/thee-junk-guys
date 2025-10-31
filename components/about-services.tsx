"use client"

import type React from "react"
import { useState } from "react"
import { Truck, Hammer, Lightbulb, CheckCircle } from "lucide-react"

export function AboutServices() {
  const [expanded, setExpanded] = useState<number | null>(null)
  const services = [
    {
      icon: Truck,
      title: "Junk Removal",
      description:
        "Fast, efficient removal of household and commercial junk. We handle everything from furniture to appliances.",
      href: "/services/junk-removal",
    },
    {
      icon: Hammer,
      title: "Light Demolition",
      description:
        "Professional demolition services for small to medium projects. Safe, clean, and compliant with all regulations.",
      href: "/services/light-demolition",
    },
    {
      icon: Lightbulb,
      title: "Christmas Light Installation",
      description:
        "Professional holiday lighting installation to make your property shine. Design, installation, and takedown included.",
      href: "/services/christmas-light-installation",
    },
  ]

  const detailsByTitle: Record<string, string[]> = {
    "Junk Removal": [
      "Same-day and next-day pickups",
      "Residential and commercial cleanouts",
      "Eco-friendly disposal and donations",
      "Heavy lifting and loading included",
      "Transparent upfront pricing",
    ],
    "Light Demolition": [
      "Site protection and dust control",
      "Interior wall, cabinet, and fixture removal",
      "Decks, sheds, and play-sets",
      "Flooring and tile tear-out",
      "Debris hauling and clean-up",
    ],
    "Christmas Light Installation": [
      "Custom design and layout",
      "Commercial-grade LED lights",
      "Professional installation",
      "Seasonal maintenance",
      "Takedown and storage options",
    ],
  }

  return (
    <>
      {/* About Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-balance">
                About <span className="text-accent">TheeJunkGuys</span>
              </h2>
              <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                Founded by Conner Coy, TheeJunkGuys is your trusted partner for junk removal, light demolition, and
                holiday lighting services across the Charlotte area. We pride ourselves on professionalism, efficiency,
                and customer satisfaction.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                With years of experience and a dedicated team, we handle every project with care and precision. Whether
                you need a quick cleanup or a major demolition, we've got you covered.
              </p>
              <div className="flex gap-4">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-accent">500+</div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </div>
                <div className="flex-1">
                  <div className="text-3xl font-bold text-accent">4</div>
                  <div className="text-sm text-gray-400">Service Areas</div>
                </div>
                <div className="flex-1">
                  <div className="text-3xl font-bold text-accent">5★</div>
                  <div className="text-sm text-gray-400">Customer Rating</div>
                </div>
              </div>
            </div>
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent rounded-xl blur-xl opacity-50" />
              <img
                src="/a2.jpg"
                alt="TheeJunkGuys team"
                className="relative rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-balance">
              Our <span className="text-accent">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive solutions for all your junk removal and demolition needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="group relative bg-slate-900/50 border border-gray-700 rounded-xl p-8 hover:border-accent transition-all duration-300"
                  style={{
                    '--glow-color': 'hsl(142.5, 100%, 50%, 0.2)'
                  } as React.CSSProperties}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed">{service.description}</p>

                    <div className="mt-6 pt-6 border-t border-gray-700 group-hover:border-accent/50 transition-colors duration-300">
                      <button
                        type="button"
                        onClick={() => setExpanded(expanded === index ? null : index)}
                        aria-expanded={expanded === index}
                        className="inline-flex items-center text-accent font-semibold hover:gap-2 transition-all duration-300"
                      >
                        {expanded === index ? "Hide Details ←" : "Learn More →"}
                      </button>
                      {expanded === index && (
                        <div className="mt-6">
                          <ul className="grid sm:grid-cols-2 gap-3">
                            {detailsByTitle[service.title].map((item) => (
                              <li key={item} className="flex items-center gap-2 text-gray-300">
                                <CheckCircle className="w-4 h-4 text-accent" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-6">
                            <a href="#contact" className="inline-flex items-center px-4 py-2 bg-accent text-black font-bold rounded-lg hover:glow-accent-md transition-all duration-300">
                              Get a Free Quote
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Service Areas */}
          <div className="mt-20 pt-20 border-t border-gray-700">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Service <span className="text-accent">Areas</span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {["Charlotte", "China Grove", "Concord", "Mooresville"].map((area) => (
                <div
                  key={area}
                  className="bg-slate-900/50 border border-gray-700 rounded-lg p-6 text-center hover:border-accent hover:bg-slate-900/80 transition-all duration-300"
                >
                  <p className="text-white font-semibold">{area}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}