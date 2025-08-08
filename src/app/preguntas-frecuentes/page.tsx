
'use client';

import FAQSection from '@/components/sections/faq-section';
import { motion } from 'framer-motion';

export default function PreguntasFrecuentesPage() {
  return (
    <div className="bg-slate-900 text-gray-300">
      <header className="bg-gradient-to-r from-[#1a2435] to-[#0e413b] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Preguntas Frecuentes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto"
          >
            Encuentre respuestas a las dudas más comunes sobre nuestros
            servicios y productos.
          </motion.p>
        </div>
      </header>

      <main className="py-16 md:py-24">
        <FAQSection />
      </main>
    </div>
  );
}
