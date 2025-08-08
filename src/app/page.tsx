import { CtaSection } from '@/components/landing/CtaSection';
import { FeaturedProjectsSection } from '@/components/landing/FeaturedProjectsSection';
import { HeroSection } from '@/components/landing/HeroSection';
import { ServicesSection } from '@/components/landing/ServicesSection';
import { ScrollReveal } from '@/components/animations/scroll-animations';
import { MapSection } from '@/components/landing/map-section';
import ProductCarouselSection from '@/components/sections/product-carousel-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import { StatsSection } from '@/components/sections/stats-section';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <ScrollReveal>
        <ServicesSection id="soluciones" />
      </ScrollReveal>
      <ScrollReveal>
        <ProductCarouselSection />
      </ScrollReveal>
      <ScrollReveal>
        <CtaSection />
      </ScrollReveal>
      <ScrollReveal>
        <StatsSection />
      </ScrollReveal>
      <ScrollReveal>
        <FeaturedProjectsSection id="proyectos" />
      </ScrollReveal>
      <ScrollReveal>
        <TestimonialsSection />
      </ScrollReveal>
      <ScrollReveal>
        <MapSection />
      </ScrollReveal>
    </div>
  );
}
