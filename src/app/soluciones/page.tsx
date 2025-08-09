'use server';

import prisma from '@/lib/prisma';
import type { Solution } from '@prisma/client';
import { SolucionesPageContent } from './content';
import SolucionesHero from '@/components/heroes/SolucionesHero';

export default async function SolucionesPage() {
  const solutions: Solution[] = await prisma.solution.findMany({
    orderBy: {
      createdAt: 'asc',
    },
  });

  return (
    <>
      <SolucionesHero />
      <SolucionesPageContent solutions={solutions} />
    </>
  );
}
