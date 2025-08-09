'use server';
import type { CaseStudy } from '@prisma/client';
import { CaseStudyCard } from '@/components/landing/CaseStudyCard';
import {
  ScrollReveal,
  ScrollStaggerContainer,
  ScrollStaggerItem,
} from '@/components/animations/scroll-animations';
import { motion } from 'framer-motion';
import { getCaseStudies } from './actions';

export default async function ProjectsPage() {
  const caseStudies: CaseStudy[] = await getCaseStudies();

  return (
    <div className="bg-slate-950">
      <header className="bg-gradient-to-r from-[#1a2435] to-[#0e413b] text-white py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold">Nuestros Proyectos</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Descubra cómo hemos ayudado a nuestros clientes a alcanzar sus
            metas con soluciones de empaque innovadoras y efectivas.
          </p>
        </motion.div>
      </header>

      <main className="container mx-auto px-4 py-16 md:py-24">
        <ScrollReveal>
          {caseStudies.length > 0 ? (
            <ScrollStaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <ScrollStaggerItem key={study.id}>
                  <CaseStudyCard caseStudy={study} />
                </ScrollStaggerItem>
              ))}
            </ScrollStaggerContainer>
          ) : (
            <div className="text-center text-gray-400">
              No hay proyectos para mostrar en este momento.
            </div>
          )}
        </ScrollReveal>
      </main>
    </div>
  );
}
