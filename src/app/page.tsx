import { HeroSection } from "@/components/landing/HeroSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { CtaSection } from "@/components/landing/CtaSection";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <CtaSection />
    </div>
  );
}
