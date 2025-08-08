
'use client';
import type { Product } from '@prisma/client';
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
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="h-full"
    >
      <Link href={`/products/${product.slug}`} className="block h-full group">
        <Card className="h-full overflow-hidden bg-slate-800/50 border-slate-700/50 flex flex-col">
          <div className="relative overflow-hidden aspect-[4/3]">
            <Image
              src={product.imageUrl}
              alt={product.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              data-ai-hint={product.dataAiHint ?? 'product image'}
            />
            <Badge
              variant="default"
              className="absolute top-2 right-2 bg-primary/80 backdrop-blur-sm"
            >
              {product.category}
            </Badge>
          </div>
          <CardHeader>
            <CardTitle className="text-white">{product.name}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-muted-foreground text-sm">
              {product.description}
            </p>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
