'use client';

import Link from 'next/link';
import { caseStudies } from '@/lib/mock-case-studies';
import { CaseStudyCard } from './CaseStudyCard';
import { Button } from '@/components/ui/button';
import {
  ScrollStaggerContainer,
  ScrollStaggerItem,
} from '../animations/scroll-animations';
import { motion } from 'framer-motion';

export function FeaturedProjectsSection({ id }: { id?: string }) {
  return (
    <section id={id} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          Casos de Éxito
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Estamos orgullosos del impacto que hemos generado para nuestros clientes.
        </p>
        <ScrollStaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.slice(0, 3).map((study) => (
            <ScrollStaggerItem key={study.id}>
              <CaseStudyCard caseStudy={study} />
            </ScrollStaggerItem>
          ))}
        </ScrollStaggerContainer>
        <div className="text-center">
          <Link href="/proyectos">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Ver todos los proyectos
              </Button>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
}
