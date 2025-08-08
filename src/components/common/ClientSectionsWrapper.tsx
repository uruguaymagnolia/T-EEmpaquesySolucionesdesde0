'use client';

import { CtaSection } from '@/components/landing/CtaSection';
import FeaturedProjectsSection from '@/components/landing/FeaturedProjectsSection';
import { HeroSection } from '@/components/landing/HeroSection';
import { ServicesSection } from '@/components/landing/ServicesSection';
import { ScrollReveal } from '@/components/animations/scroll-animations';
import { MapSection } from '@/components/landing/map-section';
import ProductCarouselSection from '@/components/sections/product-carousel-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import { StatsSection } from '@/components/sections/stats-section';
import FAQSection from '@/components/sections/faq-section';
import ContactFormSection from '@/components/sections/contact-form-section';
import type { Product, CaseStudy, Solution } from '@prisma/client';

type ClientSectionsWrapperProps = {
  products: Product[];
  caseStudies: CaseStudy[];
  solutions: Solution[];
};

export default function ClientSectionsWrapper({
  products,
  caseStudies,
  solutions,
}: ClientSectionsWrapperProps) {
  return (
    <>
      <HeroSection />
      <ScrollReveal>
        <ServicesSection id="soluciones" solutions={solutions} />
      </ScrollReveal>
      <ProductCarouselSection products={products} />
      <ScrollReveal>
        <CtaSection />
      </ScrollReveal>
      <ScrollReveal>
        <StatsSection />
      </ScrollReveal>
      <ScrollReveal>
        <FeaturedProjectsSection id="proyectos" caseStudies={caseStudies} />
      </ScrollReveal>
      <ScrollReveal>
        <TestimonialsSection />
      </ScrollReveal>
      <ScrollReveal>
        <FAQSection />
      </ScrollReveal>
      <ScrollReveal>
        <ContactFormSection />
      </ScrollReveal>
      <ScrollReveal>
        <MapSection />
      </ScrollReveal>
    </>
  );
}
