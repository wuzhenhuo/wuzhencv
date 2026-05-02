import { SiteNav } from "@/components/site-nav"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SelectedWorks } from "@/components/selected-works"
import { ExhibitionsSection } from "@/components/exhibitions-section"
import { PublicationsSection } from "@/components/publications-section"
import { TeachingSection } from "@/components/teaching-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <HeroSection />
        <AboutSection />
        <SelectedWorks />
        <ExhibitionsSection />
        <PublicationsSection />
        <TeachingSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
