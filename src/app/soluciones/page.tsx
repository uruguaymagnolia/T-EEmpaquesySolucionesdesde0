'use server';

import prisma from '@/lib/prisma';
import type { Solution } from '@prisma/client';
import { SolucionesPageContent } from './content';

export default async function SolucionesPage() {
  const solutions: Solution[] = await prisma.solution.findMany({
    orderBy: {
      createdAt: 'asc',
    },
  });

  return <SolucionesPageContent solutions={solutions} />;
}
