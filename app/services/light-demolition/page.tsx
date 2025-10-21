import { Hammer, ShieldCheck, CheckCircle } from "lucide-react"
import { ContactFooter } from "@/components/contact-footer"

export default function LightDemolitionPage() {
  const scope = [
    "Interior wall removal",
    "Cabinet and fixture tear-outs",
    "Decks, sheds, play-sets",
    "Tile, carpet, and flooring removal",
    "Bathroom and kitchen demo",
  ]

  return (
    <main>
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-black via-slate-900 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-6 mb-8">
            <div className="w-14 h-14 bg-accent/20 rounded-lg flex items-center justify-center">
              <Hammer className="w-7 h-7 text-accent" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">Light Demolition</h1>
              <p className="text-gray-300 text-lg max-w-2xl">
                Safe, clean, and efficient demolition for small to medium projects. We prep the site and handle disposal.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <div className="bg-slate-900/50 border border-gray-700 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Typical Projects</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-300">
                  {scope.map((item) => (
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
                <h2 className="text-2xl font-bold text-white mb-4">Our Process</h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-300">
                  <li>Site walkthrough and safety planning</li>
                  <li>Protective coverings and dust control</li>
                  <li>Careful dismantling and debris removal</li>
                  <li>Thorough clean-up and haul away</li>
                </ol>
                <div className="mt-6 flex items-center gap-2 text-gray-300">
                  <ShieldCheck className="w-5 h-5 text-accent" />
                  Fully insured and compliant with local guidelines
                </div>
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
