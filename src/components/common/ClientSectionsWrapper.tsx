'use client';

import dynamic from 'next/dynamic';
import { CtaSection } from '@/components/landing/CtaSection';
import FeaturedProjectsSection from '@/components/landing/FeaturedProjectsSection';
import { HeroSection } from '@/components/landing/HeroSection';
import { ServicesSection } from '@/components/landing/ServicesSection';
import { ScrollReveal } from '@/components/animations/scroll-animations';
import ProductCarouselSection from '@/components/sections/product-carousel-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import { StatsSection } from '@/components/sections/stats-section';
import FAQSection from '@/components/sections/faq-section';
import ContactFormSection from '@/components/sections/contact-form-section';
import type { Product, CaseStudy, Solution } from '@prisma/client';
import { Skeleton } from '@/components/ui/skeleton';

const MapSection = dynamic(
  () => import('@/components/landing/map-section').then(mod => mod.MapSection),
  {
    ssr: false, // El mapa es un componente de solo cliente, no necesita renderizarse en el servidor.
    loading: () => (
      <div className="container mx-auto px-4 py-16 text-center">
        <Skeleton className="h-[500px] w-full max-w-7xl mx-auto rounded-lg" />
      </div>
    ),
  }
);


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
