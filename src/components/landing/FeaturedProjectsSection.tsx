'use server';

import Link from 'next/link';
import { CaseStudyCard } from './CaseStudyCard';
import { Button } from '@/components/ui/button';
import {
  ScrollStaggerContainer,
  ScrollStaggerItem,
} from '../animations/scroll-animations';
import prisma from '@/lib/prisma';
import type { CaseStudy } from '@prisma/client';
import { AnimatedButton } from './AnimatedButton';

export async function FeaturedProjectsSection({ id }: { id?: string }) {
  const caseStudies: CaseStudy[] = await prisma.caseStudy.findMany({
    take: 3,
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <section id={id} className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          Casos de Éxito
        </h2>
        <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto mb-12">
          Estamos orgullosos del impacto que hemos generado para nuestros
          clientes.
        </p>
        <ScrollStaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study) => (
            <ScrollStaggerItem key={study.id}>
              <CaseStudyCard caseStudy={study} />
            </ScrollStaggerItem>
          ))}
        </ScrollStaggerContainer>
        <div className="text-center">
          <AnimatedButton />
        </div>
      </div>
    </section>
  );
}
