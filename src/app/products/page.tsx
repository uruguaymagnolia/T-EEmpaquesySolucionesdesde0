import { ProductsContent } from '@/components/landing/ProductsContent';
import prisma from '@/lib/prisma';
import type { Product } from '@prisma/client';

export default async function ProductsPage() {
  const products: Product[] = await prisma.product.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div>
      <header className="bg-gradient-to-r from-[#1a2435] to-[#0e413b] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Nuestro Catálogo de Productos
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Explore nuestra amplia gama de soluciones de empaque diseñadas para
            proteger y realzar su producto.
          </p>
        </div>
      </header>
      <ProductsContent products={products} />
    </div>
  );
}
