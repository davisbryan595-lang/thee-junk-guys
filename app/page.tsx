import { Hero } from "@/components/hero"
import { AboutServices } from "@/components/about-services"
import { Gallery } from "@/components/gallery"
import { Testimonials } from "@/components/testimonials"
import { ContactFooter } from "@/components/contact-footer"

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutServices />
      <Gallery />
      <Testimonials />
      <ContactFooter />
    </main>
  )
}
