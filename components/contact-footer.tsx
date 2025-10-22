"use client"

import type React from "react"
import { useState } from "react"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Send } from "lucide-react"

export function ContactFooter() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "junk-removal",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("https://formsubmit.co/ajax/theejunkguys@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...formData,
          _subject: "New Inquiry from The Linkage Digital Website",
          _template: "table",
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", phone: "", email: "", service: "junk-removal", message: "" })
        setTimeout(() => setSubmitted(false), 4000)
      } else {
        alert("Submission failed. Please try again later.")
      }
    } catch (error) {
      console.error("FormSubmit Error:", error)
      alert("An error occurred. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-balance">
              Get Your <span className="text-accent">Free Quote</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Contact us today for a no-obligation estimate. We respond within 24 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-slate-900/50 border border-gray-700 rounded-2xl p-8 hover:border-accent/50 transition-colors duration-300">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-white font-semibold mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-colors duration-300"
                      placeholder="704-470-5889"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-white font-semibold mb-2">
                    Service Type
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-black border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-accent focus:outline-none transition-colors duration-300"
                  >
                    <option value="junk-removal">Junk Removal</option>
                    <option value="light-demolition">Light Demolition</option>
                    <option value="christmas-lights">Christmas Light Installation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-black border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full ${
                    loading ? "bg-gray-600" : "bg-accent hover:glow-accent-lg"
                  } text-black font-bold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group`}
                >
                  {loading ? "Sending..." : <>
                    <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                    Book Your Cleanup Now
                  </>}
                </button>

                {submitted && (
                  <div className="bg-accent/20 border border-accent rounded-lg p-4 text-accent text-center font-semibold">
                    ✅ Thank you! We'll be in touch within 24 hours.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-slate-900/50 border border-gray-700 rounded-2xl p-8 hover:border-accent/50 transition-colors duration-300">
                <div className="flex gap-4 mb-6">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Call Us</h3>
                    <a href="tel:704-470-5889" className="text-accent hover:underline">
                      704-470-5889
                    </a>
                    <p className="text-gray-400 text-sm mt-1">Available 24/7</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/50 border border-gray-700 rounded-2xl p-8 hover:border-accent/50 transition-colors duration-300">
                <div className="flex gap-4 mb-6">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Email Us</h3>
                    <a href="mailto:theejunkguys@gmail.com" className="text-accent hover:underline">
                      theejunkguys@gmail.com
                    </a>
                    <p className="text-gray-400 text-sm mt-1">Response within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/50 border border-gray-700 rounded-2xl p-8 hover:border-accent/50 transition-colors duration-300">
                <div className="flex gap-4 mb-6">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Service Areas</h3>
                    <p className="text-gray-300">Charlotte, China Grove, Concord, Mooresville</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-gray-700">
                <p className="text-white font-semibold mb-4">Follow Us</p>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-slate-900 border border-gray-700 rounded-lg flex items-center justify-center text-accent hover:bg-accent hover:text-black transition-all duration-300 hover:shadow-[0_0_15px_hsl(142.5_100%_50%_/_0.4)]" aria-label="Facebook">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-slate-900 border border-gray-700 rounded-lg flex items-center justify-center text-accent hover:bg-accent hover:text-black transition-all duration-300 hover:shadow-[0_0_15px_hsl(142.5_100%_50%_/_0.4)]" aria-label="Instagram">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-slate-900 border border-gray-700 rounded-lg flex items-center justify-center text-accent hover:bg-accent hover:text-black transition-all duration-300 hover:shadow-[0_0_15px_hsl(142.5_100%_50%_/_0.4)]" aria-label="Twitter">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-700 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">TheeJunkGuys</h3>
              <p className="text-gray-400 text-sm">Professional junk removal and demolition services.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#services" className="hover:text-accent transition-colors">Junk Removal</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Light Demolition</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Christmas Lights</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Gallery</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="tel:704-470-5889" className="hover:text-accent transition-colors">704-470-5889</a></li>
                <li><a href="mailto:theejunkguys@gmail.com" className="hover:text-accent transition-colors">theejunkguys@gmail.com</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; 2025 TheeJunkGuys. All rights reserved. | Owned by Conner Coy
            </p>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <a href="#" className="text-gray-400 hover:text-accent text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-accent text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
