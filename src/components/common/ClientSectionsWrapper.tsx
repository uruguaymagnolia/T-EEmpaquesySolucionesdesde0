'use client';

import type { Product, CaseStudy, Solution } from '@prisma/client';
import { HeroSection } from '@/components/landing/HeroSection';
import { ServicesSection } from '@/components/landing/ServicesSection';
import ProductCarouselSection from '@/components/sections/product-carousel-section';
import { CtaSection } from '@/components/landing/CtaSection';
import { StatsSection } from '@/components/sections/stats-section';
import FeaturedProjectsSection from '@/components/landing/FeaturedProjectsSection';
import ContactFormSection from '@/components/sections/contact-form-section';
import LazyMapWrapper from '@/components/common/LazyMapWrapper';
import TestimonialsSection from '@/components/sections/testimonials-section';
import FAQSection from '@/components/sections/faq-section';

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
      <ServicesSection id="soluciones" solutions={solutions} />
      <ProductCarouselSection products={products} />
      <CtaSection />
      <StatsSection />
      <FeaturedProjectsSection id="proyectos" caseStudies={caseStudies} />
      <TestimonialsSection />
      <FAQSection />
      <ContactFormSection />
      <LazyMapWrapper />
    </>
  );
}
