'use client';

import { ServicesSection } from '@/components/landing/ServicesSection';
import { motion } from 'framer-motion';
import type { Solution } from '@prisma/client';

export function SolucionesPageContent({
  solutions,
}: {
  solutions: Solution[];
}) {
  return (
    <div className="bg-slate-950">
      <header className="bg-gradient-to-r from-[#1a2435] to-[#0e413b] text-white py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold">Nuestras Soluciones</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Descubra cómo podemos optimizar su proceso de empaque de principio a
            fin con nuestra gama de servicios especializados.
          </p>
        </motion.div>
      </header>
      <main>
        <ServicesSection solutions={solutions} />
      </main>
    </div>
  );
}
