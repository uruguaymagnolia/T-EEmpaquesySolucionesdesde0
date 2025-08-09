import { ProductsContent } from '@/components/landing/ProductsContent';
import prisma from '@/lib/prisma';
import type { Product } from '@prisma/client';
import ProductosHero from '@/components/heroes/ProductosHero';

export default async function ProductsPage() {
  const products: Product[] = await prisma.product.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div>
      <ProductosHero />
      <div className="bg-slate-900">
        <ProductsContent products={products} />
      </div>
    </div>
  );
}
