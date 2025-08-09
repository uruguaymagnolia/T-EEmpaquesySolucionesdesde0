
'use client';

import FAQSection from '@/components/sections/faq-section';
import PreguntasFrecuentesHero from '@/components/heroes/PreguntasFrecuentesHero';

export default function PreguntasFrecuentesPage() {
  return (
    <div>
      <PreguntasFrecuentesHero />
      <main className="py-16 md:py-24 bg-slate-900 text-gray-300">
        <FAQSection />
      </main>
    </div>
  );
}
