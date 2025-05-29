import { EnhancedHeroSection } from "@/components/enhanced-hero-section"
import { AboutSection } from "@/components/about-section"
import { EnhancedSkillsSection } from "@/components/enhanced-skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { DesignGallery } from "@/components/design-gallery"
import { CertificationsSection } from "@/components/certifications-section"
import { VolunteeringSection } from "@/components/volunteering-section"
import { EnhancedContactSection } from "@/components/enhanced-contact-section"
import { EnhancedNavigation } from "@/components/enhanced-navigation"
import { Footer } from "@/components/footer"
import { TechBackground } from "@/components/tech-background"
import { FloatingElements } from "@/components/floating-elements"
import { ScrollProgress } from "@/components/scroll-progress"
import { PageTransition } from "@/components/page-transition"

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background relative">
        <ScrollProgress />
        <TechBackground />
        <FloatingElements />
        <div className="relative z-10">
          <EnhancedNavigation />
          <main>
            <EnhancedHeroSection />
            <AboutSection />
            <EnhancedSkillsSection />
            <ProjectsSection />
            <DesignGallery />
            <CertificationsSection />
            <VolunteeringSection />
            <EnhancedContactSection />
          </main>
          <Footer />
        </div>
      </div>
    </PageTransition>
  )
}
