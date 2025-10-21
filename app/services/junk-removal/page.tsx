import { Truck, CheckCircle, Clock } from "lucide-react"
import { ContactFooter } from "@/components/contact-footer"

export default function JunkRemovalPage() {
  const benefits = [
    "Same-day and next-day pickups",
    "Residential and commercial cleanouts",
    "Eco-friendly disposal and donations",
    "Heavy lifting and loading included",
    "Transparent upfront pricing",
  ]

  return (
    <main>
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-black via-slate-900 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-6 mb-8">
            <div className="w-14 h-14 bg-accent/20 rounded-lg flex items-center justify-center">
              <Truck className="w-7 h-7 text-accent" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">Junk Removal</h1>
              <p className="text-gray-300 text-lg max-w-2xl">
                Fast, professional junk removal for homes, offices, construction sites, and more. We haul it all—so you don’t have to.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <div className="bg-slate-900/50 border border-gray-700 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">What We Take</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-300">
                  {[
                    "Furniture & mattresses",
                    "Appliances",
                    "Electronics",
                    "Yard waste",
                    "Construction debris",
                    "Garage/basement cleanouts",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="bg-slate-900/50 border border-gray-700 rounded-2xl p-8 h-full">
                <h2 className="text-2xl font-bold text-white mb-4">Why Choose Us</h2>
                <ul className="space-y-3 text-gray-300">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-accent" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <a href="#contact" className="inline-flex items-center px-6 py-3 bg-accent text-black font-bold rounded-lg hover:glow-accent-md transition-all duration-300">
                    Get a Free Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactFooter />
    </main>
  )
}
