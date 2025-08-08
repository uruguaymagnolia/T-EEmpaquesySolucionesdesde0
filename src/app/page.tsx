import prisma from '@/lib/prisma';
import type { Product, CaseStudy } from '@prisma/client';
import ClientSectionsWrapper from '@/components/common/ClientSectionsWrapper';

export default async function HomePage() {
  const products: Product[] = await prisma.product.findMany({
    take: 10,
    orderBy: {
      createdAt: 'desc',
    },
  });

  const caseStudies: CaseStudy[] = await prisma.caseStudy.findMany({
    take: 3,
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div>
      <ClientSectionsWrapper products={products} caseStudies={caseStudies} />
    </div>
  );
}
