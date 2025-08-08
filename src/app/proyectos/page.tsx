'use client';
import { CaseStudyCard } from '@/components/landing/CaseStudyCard';
import {
  ScrollReveal,
  ScrollStaggerContainer,
  ScrollStaggerItem,
} from '@/components/animations/scroll-animations';
import { motion } from 'framer-motion';
import { getCaseStudies } from './actions';
import { useEffect, useState } from 'react';
import type { CaseStudy } from '@prisma/client';

export default function ProjectsPage() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      setLoading(true);
      const studies = await getCaseStudies();
      setCaseStudies(studies);
      setLoading(false);
    };
    fetchCaseStudies();
  }, []);

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
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="bg-slate-800/50 rounded-lg p-4 animate-pulse">
                  <div className="bg-slate-700/50 h-48 w-full rounded-md mb-4"></div>
                  <div className="bg-slate-700/50 h-6 w-3/4 rounded-md mb-2"></div>
                  <div className="bg-slate-700/50 h-4 w-full rounded-md"></div>
                </div>
              ))}
            </div>
          ) : (
            <ScrollStaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <ScrollStaggerItem key={study.id}>
                  <CaseStudyCard caseStudy={study} />
                </ScrollStaggerItem>
              ))}
            </ScrollStaggerContainer>
          )}
        </ScrollReveal>
      </main>
    </div>
  );
}
