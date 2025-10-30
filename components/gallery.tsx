"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function Gallery() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)

  const beforeAfterPairs = [
    {
      title: "Residential Junk Removal",
      before: "/hg1.jpg",
      after: "/hg2.jpg",
    },
    {
      title: "Commercial Cleanup",
      before: "/hg3.jpg",
      after: "/hg4.jpg",
    },
    {
      title: "Christmas Light Installation",
      before: "/hg5.jpg",
      after: "/hg6.jpg",
    },
    {
      title: "Light Demolition Project",
      before: "/hg7.jpg",
      after: "/hg8.jpg",
    },
  ]

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % beforeAfterPairs.length)
    setSliderPosition(50)
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + beforeAfterPairs.length) % beforeAfterPairs.length)
    setSliderPosition(50)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }

  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-balance">
            Our <span className="text-accent">Work</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">See the transformation we bring to every project</p>
        </div>

        {/* Before/After Slider */}
        <div className="mb-12">
          <div
            className="relative w-full aspect-video rounded-xl overflow-hidden cursor-col-resize group"
            onMouseMove={handleMouseMove}
          >
            {/* After Image */}
            <Image
              src={beforeAfterPairs[activeSlide].after}
              alt="After"
              fill
              className="object-cover"
            />

            {/* Before Image */}
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPosition}%` }}>
              <Image
                src={beforeAfterPairs[activeSlide].before}
                alt="Before"
                fill
                className="object-cover"
              />
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-accent transition-all duration-100"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg group-hover:glow-accent-sm">
                <div className="flex gap-1">
                  <ChevronLeft size={20} className="text-black" />
                  <ChevronRight size={20} className="text-black" />
                </div>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 bg-black/70 px-4 py-2 rounded-lg">
              <p className="text-accent font-semibold text-sm">BEFORE</p>
            </div>
            <div className="absolute top-4 right-4 bg-black/70 px-4 py-2 rounded-lg">
              <p className="text-accent font-semibold text-sm">AFTER</p>
            </div>

            {/* Project Title */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur px-6 py-4 rounded-lg">
              <h3 className="text-white font-bold text-lg">{beforeAfterPairs[activeSlide].title}</h3>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevSlide}
              className="p-3 bg-slate-900 hover:bg-accent hover:text-black text-accent rounded-lg transition-all duration-300 hover:glow-accent-md"
              aria-label="Previous project"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-2">
              {beforeAfterPairs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveSlide(index)
                    setSliderPosition(50)
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeSlide
                      ? "bg-accent w-8 glow-accent-sm"
                      : "bg-gray-600 w-2 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 bg-slate-900 hover:bg-accent hover:text-black text-accent rounded-lg transition-all duration-300 hover:glow-accent-md"
              aria-label="Next project"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "/hg9.jpg",
            "/hg10.jpg",
            "/hg11.jpg",
            "/hg12.jpg",
            "/hg13.jpg",
            "/hg14.jpg",
            "/hg15.jpg",
            "/hg16.jpg",
          ].map((src, i) => (
            <div key={i} className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer">
              <Image
                src={src}
                alt={`Gallery image ${i + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <ChevronRight size={24} className="text-black" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}