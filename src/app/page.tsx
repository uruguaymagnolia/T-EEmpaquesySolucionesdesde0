
import { HeroSection } from "@/components/landing/HeroSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { CtaSection } from "@/components/landing/CtaSection";
import { FeaturedProjectsSection } from "@/components/landing/FeaturedProjectsSection";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <CtaSection />
      <FeaturedProjectsSection />
    </div>
  );
}
