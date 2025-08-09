'use client';

import dynamic from 'next/dynamic';
import { HeroSection } from '@/components/landing/HeroSection';
import { ServicesSection } from '@/components/landing/ServicesSection';
import { ScrollReveal } from '@/components/animations/scroll-animations';
import ProductCarouselSection from '@/components/sections/product-carousel-section';
import type { Product, CaseStudy, Solution } from '@prisma/client';
import { Skeleton } from '@/components/ui/skeleton';

const MapSection = dynamic(
  () => import('@/components/landing/map-section').then((mod) => mod.MapSection),
  {
    ssr: false,
    loading: () => (
      <div className="container mx-auto px-4 py-16 text-center">
        <Skeleton className="h-[500px] w-full max-w-7xl mx-auto rounded-lg" />
      </div>
    ),
  }
);

const TestimonialsSection = dynamic(
  () => import('@/components/sections/testimonials-section'),
  {
    loading: () => (
      <div className="container mx-auto px-4 py-16">
        <Skeleton className="h-[400px] w-full rounded-lg" />
      </div>
    ),
  }
);

const FAQSection = dynamic(
  () => import('@/components/sections/faq-section'),
  {
    loading: () => (
      <div className="container mx-auto px-4 py-16">
        <Skeleton className="h-[500px] w-full rounded-lg" />
      </div>
    ),
  }
);

const ContactFormSection = dynamic(
  () => import('@/components/sections/contact-form-section'),
  {
    loading: () => (
      <div className="container mx-auto px-4 py-16">
        <Skeleton className="h-[600px] w-full rounded-lg" />
      </div>
    ),
  }
);

const LazyCtaSection = dynamic(
  () => import('@/components/landing/CtaSection').then((mod) => mod.CtaSection),
  {
    loading: () => <Skeleton className="h-[250px] w-full" />,
  }
);

const LazyStatsSection = dynamic(
  () =>
    import('@/components/sections/stats-section').then(
      (mod) => mod.StatsSection
    ),
  {
    loading: () => <Skeleton className="h-[400px] w-full" />,
  }
);

const LazyFeaturedProjectsSection = dynamic(
  () => import('@/components/landing/FeaturedProjectsSection'),
  {
    loading: () => <Skeleton className="h-[600px] w-full" />,
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
      <LazyCtaSection />
      <LazyStatsSection />
      <LazyFeaturedProjectsSection id="proyectos" caseStudies={caseStudies} />
      <TestimonialsSection />
      <FAQSection />
      <ContactFormSection />
      <MapSection />
    </>
  );
}
