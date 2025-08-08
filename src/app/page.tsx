import { CtaSection } from '@/components/landing/CtaSection';
import { FeaturedProjectsSection } from '@/components/landing/FeaturedProjectsSection';
import { HeroSection } from '@/components/landing/HeroSection';
import { ServicesSection } from '@/components/landing/ServicesSection';
import { ScrollReveal } from '@/components/animations/scroll-animations';
import { MapSection } from '@/components/landing/map-section';
import ProductCarouselSection from '@/components/sections/product-carousel-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import { StatsSection } from '@/components/sections/stats-section';
import FAQSection from '@/components/sections/faq-section';
import prisma from '@/lib/prisma';
import type { Product } from '@prisma/client';
import ContactFormSection from '@/components/sections/contact-form-section';

export default async function HomePage() {
  const products: Product[] = await prisma.product.findMany({
    take: 10,
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div>
      <HeroSection />
      <ScrollReveal>
        <ServicesSection id="soluciones" />
      </ScrollReveal>
      <ProductCarouselSection products={products} />
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
        <FAQSection />
      </ScrollReveal>
      <ScrollReveal>
        <ContactFormSection />
      </ScrollReveal>
      <ScrollReveal>
        <MapSection />
      </ScrollReveal>
    </div>
  );
}
