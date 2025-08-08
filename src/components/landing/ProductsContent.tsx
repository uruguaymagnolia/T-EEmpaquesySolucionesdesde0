
'use client';

import { useState } from 'react';
import { products, type Product } from '@/lib/mock-products';
import { Button } from '@/components/ui/button';
import { ProductCard } from './ProductCard';
import { AnimatePresence, motion } from 'framer-motion';

const categories = [
  'Todos',
  ...Array.from(new Set(products.map((p) => p.category))),
];

export function ProductsContent() {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredProducts =
    activeCategory === 'Todos'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex justify-center flex-wrap gap-2 mb-12">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? 'default' : 'ghost'}
            onClick={() => setActiveCategory(category)}
            className="capitalize"
          >
            {category}
          </Button>
        ))}
      </div>
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
