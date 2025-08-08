
'use client';
import type { Product } from '@/lib/mock-products';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="h-full"
    >
      <Link href={`/products/${product.slug}`} className="block h-full group">
        <Card className="h-full overflow-hidden">
          <div className="relative overflow-hidden">
            <Image
              src={product.imageUrl}
              alt={product.imageAlt}
              width={400}
              height={300}
              className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-300 group-hover:scale-110"
              data-ai-hint="product image"
            />
            <Badge
              variant="default"
              className="absolute top-2 right-2 bg-primary/80 backdrop-blur-sm"
            >
              {product.category}
            </Badge>
          </div>
          <CardHeader>
            <CardTitle>{product.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              {product.description}
            </p>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
