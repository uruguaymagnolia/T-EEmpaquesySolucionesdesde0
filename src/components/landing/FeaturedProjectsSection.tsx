'use client';

import { CaseStudyCard } from './CaseStudyCard';
import {
  ScrollStaggerContainer,
} from '../animations/scroll-animations';
import type { CaseStudy } from '@prisma/client';
import { AnimatedButton } from './AnimatedButton';
import { motion, type Variants } from 'framer-motion';

export default function FeaturedProjectsSection({
  id,
  caseStudies,
}: {
  id?: string;
  caseStudies: CaseStudy[];
}) {
  const cardVariants: Variants = {
    hidden: (i: number) => ({
      opacity: 0,
      x: i % 3 === 0 ? -50 : i % 3 === 2 ? 50 : 0,
      y: i % 3 === 1 ? 20 : 0,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <section id={id} className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Casos de Éxito
          </h2>
          <p className="text-lg text-gray-300 mt-4">
            Estamos orgullosos del impacto que hemos generado para nuestros
            clientes.
          </p>
        </div>
        <ScrollStaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          staggerChildren={0.1}
        >
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <CaseStudyCard caseStudy={study} />
            </motion.div>
          ))}
        </ScrollStaggerContainer>
        <div className="text-center mt-16">
          <AnimatedButton href="/proyectos" text="Ver todos los proyectos" />
        </div>
      </div>
    </section>
  );
}
