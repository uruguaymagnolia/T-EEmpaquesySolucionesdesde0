'use server';

import type { Product, CaseStudy, Solution } from '@prisma/client';
import prisma from '@/lib/prisma';
import ClientSectionsWrapper from '@/components/common/ClientSectionsWrapper';

export default async function HomePage() {
  const products: Product[] = [];
  const caseStudies: CaseStudy[] = [];
  const solutions: Solution[] = [];

  return (
    <ClientSectionsWrapper
      products={products}
      caseStudies={caseStudies}
      solutions={solutions}
    />
  );
}
