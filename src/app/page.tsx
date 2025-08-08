import { CtaSection } from '@/components/landing/CtaSection';
import { FeaturedProjectsSection } from '@/components/landing/FeaturedProjectsSection';
import { HeroSection } from '@/components/landing/HeroSection';
import { ServicesSection } from '@/components/landing/ServicesSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <ServicesSection id="soluciones" />
      <CtaSection />
      <FeaturedProjectsSection id="proyectos" />
      <TestimonialsSection />
    </div>
  );
}
