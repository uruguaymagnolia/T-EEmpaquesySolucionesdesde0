import { CtaSection } from '@/components/landing/CtaSection';
import { FeaturedProjectsSection } from '@/components/landing/FeaturedProjectsSection';
import { HeroSection } from '@/components/landing/HeroSection';
import { ServicesSection } from '@/components/landing/ServicesSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { ScrollReveal } from '@/components/animations/scroll-animations';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <ScrollReveal>
        <ServicesSection id="soluciones" />
      </ScrollReveal>
      <ScrollReveal>
        <CtaSection />
      </ScrollReveal>
      <ScrollReveal>
        <FeaturedProjectsSection id="proyectos" />
      </ScrollReveal>
      <ScrollReveal>
        <TestimonialsSection />
      </ScrollReveal>
    </div>
  );
}
