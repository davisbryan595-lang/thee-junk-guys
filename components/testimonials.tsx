"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

export function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      content:
        "TheeJunkGuys made my garage cleanup so easy! They were professional, efficient, and left everything spotless. Highly recommend!",
      rating: 5,
    },
    {
      name: "Mike Chen",
      role: "Property Manager",
      content:
        "We've used TheeJunkGuys for multiple commercial properties. Their team is reliable, affordable, and always on time. Great service!",
      rating: 5,
    },
    {
      name: "Jennifer Martinez",
      role: "Business Owner",
      content:
        "The Christmas light installation was absolutely stunning! They handled everything from design to installation. Worth every penny.",
      rating: 5,
    },
    {
      name: "David Thompson",
      role: "Homeowner",
      content:
        "Quick response, fair pricing, and excellent work. TheeJunkGuys is the real deal. They made my renovation cleanup hassle-free.",
      rating: 5,
    },
    {
      name: "Lisa Anderson",
      role: "Contractor",
      content:
        "I recommend TheeJunkGuys to all my clients. Their light demolition work is precise and professional. Always a pleasure to work with.",
      rating: 5,
    },
  ]

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-balance">
            What Our <span className="text-accent">Customers</span> Say
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real feedback from satisfied clients across our service areas
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="bg-slate-900/50 border border-gray-700 rounded-2xl p-8 sm:p-12 min-h-80 flex flex-col justify-between hover:border-accent/50 transition-colors duration-300">
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                <Star key={i} size={20} className="fill-accent text-accent" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-xl text-gray-200 mb-8 leading-relaxed italic">
              "{testimonials[activeTestimonial].content}"
            </p>

            {/* Author */}
            <div>
              <p className="text-white font-bold text-lg">{testimonials[activeTestimonial].name}</p>
              <p className="text-accent text-sm">{testimonials[activeTestimonial].role}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-slate-900 hover:bg-accent hover:text-black text-accent rounded-lg transition-all duration-300 hover:glow-accent-md"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? "bg-accent w-8 glow-accent-sm"
                      : "bg-gray-600 w-2 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 bg-slate-900 hover:bg-accent hover:text-black text-accent rounded-lg transition-all duration-300 hover:glow-accent-md"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid sm:grid-cols-3 gap-6 mt-16 pt-16 border-t border-gray-700">
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">500+</div>
            <p className="text-gray-300">Happy Customers</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">5★</div>
            <p className="text-gray-300">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">24/7</div>
            <p className="text-gray-300">Available Service</p>
          </div>
        </div>
      </div>
    </section>
  )
}
