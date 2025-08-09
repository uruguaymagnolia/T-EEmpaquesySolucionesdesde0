'use client';

import type { Product, CaseStudy, Solution } from '@prisma/client';
import dynamic from 'next/dynamic';
import { HeroSection } from '@/components/landing/HeroSection';
import { ServicesSection } from '@/components/landing/ServicesSection';
import ProductCarouselSection from '@/components/sections/product-carousel-section';
import { CtaSection } from '@/components/landing/CtaSection';
import { StatsSection } from '@/components/sections/stats-section';
import FeaturedProjectsSection from '@/components/landing/FeaturedProjectsSection';
import ContactFormSection from '@/components/sections/contact-form-section';
import { Skeleton } from '@/components/ui/skeleton';
import LazyMapWrapper from '@/components/common/LazyMapWrapper';

const LazyTestimonials = dynamic(
  () => import('@/components/sections/testimonials-section'),
  {
    loading: () => <Skeleton className="h-[500px] w-full" />,
  }
);

const LazyFAQ = dynamic(() => import('@/components/sections/faq-section'), {
  loading: () => <Skeleton className="h-[600px] w-full" />,
});

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
      <LazyTestimonials />
      <LazyFAQ />
      <ContactFormSection />
      <LazyMapWrapper />
    </>
  );
}
