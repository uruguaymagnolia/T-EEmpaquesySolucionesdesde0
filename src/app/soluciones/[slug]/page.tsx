'use server';

import { notFound } from 'next/navigation';
import prisma from '@/lib/prisma';
import type { Solution } from '@prisma/client';
import { SolutionClientPage } from './client-page';

async function getSolutionBySlug(slug: string): Promise<Solution | null> {
  return prisma.solution.findUnique({ where: { slug } });
}

async function getRelatedSolutions(
  currentSlug: string
): Promise<Solution[]> {
  return prisma.solution.findMany({
    where: { NOT: { slug: currentSlug } },
    take: 3,
  });
}

type SolutionDetailsPageProps = {
  params: {
    slug: string;
  };
};

export default async function SolutionDetailsPage({
  params,
}: SolutionDetailsPageProps) {
  const [solution, relatedSolutions] = await Promise.all([
    getSolutionBySlug(params.slug),
    getRelatedSolutions(params.slug),
  ]);

  if (!solution) {
    notFound();
  }

  return (
    <SolutionClientPage
      solution={solution}
      relatedSolutions={relatedSolutions}
    />
  );
}
