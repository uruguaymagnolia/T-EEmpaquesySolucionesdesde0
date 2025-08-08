'use client';
import { useEffect, useState } from 'react';
import prisma from '@/lib/prisma';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { Product } from '@prisma/client';
import { ProductCard } from '@/components/landing/ProductCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

type ProductDetailsPageProps = {
  params: {
    slug: string;
  };
};

async function getProductBySlug(slug: string) {
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

async function getRelatedProducts(category: string, currentId: string) {
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

export default function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const fetchedProduct = await getProductBySlug(params.slug);
      if (fetchedProduct) {
        setProduct(fetchedProduct);
        const fetchedRelatedProducts = await getRelatedProducts(
          fetchedProduct.category,
          fetchedProduct.id
        );
        setRelatedProducts(fetchedRelatedProducts);
      } else {
        notFound();
      }
      setIsLoading(false);
    }
    fetchData();
  }, [params.slug]);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-900">
        <p className="text-white">Cargando...</p>
      </div>
    );
  }

  if (!product) {
    return notFound();
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-slate-900 text-white"
    >
      <div className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <Card className="overflow-hidden border-slate-700/50 bg-slate-800/50">
              <Image
                src={product.imageUrl}
                alt={product.imageAlt}
                width={800}
                height={600}
                className="h-auto w-full object-cover"
                data-ai-hint={product.dataAiHint ?? 'product image'}
              />
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col"
          >
            <Badge
              variant="default"
              className="mb-4 w-fit bg-primary/80 backdrop-blur-sm"
            >
              {product.category}
            </Badge>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              {product.name}
            </h1>
            <p className="mb-6 text-lg text-gray-300">
              {product.description}
            </p>

            <div className="mt-auto">
              <Link href="/contacto">
                <Button
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Solicitar Cotización
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-24">
            <h2 className="mb-8 text-center text-3xl font-bold">
              Productos Relacionados
            </h2>
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {relatedProducts.map((relatedProduct) => (
                  <CarouselItem
                    key={relatedProduct.id}
                    className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                  >
                    <div className="p-2">
                      <ProductCard product={relatedProduct} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 hidden sm:flex" />
              <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 hidden sm:flex" />
            </Carousel>
          </div>
        )}
      </div>
    </motion.div>
  );
}
