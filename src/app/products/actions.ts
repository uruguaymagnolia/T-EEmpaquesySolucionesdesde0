'use server';

import prisma from '@/lib/prisma';
import type { Product } from '@prisma/client';

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const product = await prisma.product.findUnique({
    where: {
      slug: slug,
    },
  });

  if (!product) {
    return null;
  }
  return product;
}

export async function getRelatedProducts(
  category: string,
  currentId: string
): Promise<Product[]> {
  const products = await prisma.product.findMany({
    where: {
      category: category,
      id: {
        not: currentId,
      },
    },
    take: 5,
  });
  return products;
}
