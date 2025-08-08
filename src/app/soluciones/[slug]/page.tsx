'use server';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft, type LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ScrollReveal } from '@/components/animations/scroll-animations';
import type { Solution } from '@prisma/client';
import prisma from '@/lib/prisma';
import * as lucideIcons from 'lucide-react';
import { SolutionClientPage } from './client-page';

const icons = {
  Gift: lucideIcons.Gift,
  Sparkles: lucideIcons.Sparkles,
  PackageCheck: lucideIcons.PackageCheck,
  Shrink: lucideIcons.Shrink,
  Flame: lucideIcons.Flame,
  PackagePlus: lucideIcons.PackagePlus,
  Square: lucideIcons.Square,
  Component: lucideIcons.Component,
};

function getIcon(name: string): LucideIcon {
  return (icons as any)[name] || icons.Component;
}

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

  const Icon = getIcon(solution.icon);

  return (
    <SolutionClientPage
      solution={solution}
      relatedSolutions={relatedSolutions}
      Icon={Icon}
    />
  );
}
