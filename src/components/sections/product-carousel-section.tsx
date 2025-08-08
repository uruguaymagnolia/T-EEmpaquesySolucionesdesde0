'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/animations/scroll-animations';
import type { Product } from '@prisma/client';
import { cn } from '@/lib/utils';
import { ProductCard } from '../landing/ProductCard';

type ProductCarouselSectionProps = {
  products: Product[];
};

const ProductCarouselSection: React.FC<ProductCarouselSectionProps> = ({
  products,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    onSelect(); // Set initial index

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  if (!products || products.length === 0) {
    return null;
  }

  const slideVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <ScrollReveal>
      <section className="bg-slate-900 py-20 sm:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Nuestros Productos Destacados
          </h2>
          <div className="relative mt-12">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex -ml-4">
                {products.map((product, index) => (
                  <motion.div
                    className="min-w-0 flex-shrink-0 flex-grow-0 basis-full pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                    key={product.id}
                    variants={slideVariants}
                    initial="hidden"
                    animate={emblaApi?.selectedScrollSnap() === index ? 'visible' : 'hidden'}
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 w-full">
               <div className="hidden md:flex justify-between items-center w-full">
                <Button
                    isIconOnly
                    onClick={scrollPrev}
                    className="group h-12 w-12 rounded-full bg-primary/80 text-primary-foreground shadow-lg transition-all duration-300 hover:scale-110 hover:bg-primary -ml-6"
                    aria-label="Anterior"
                >
                    <ChevronLeft className="h-6 w-6 transition-transform duration-300 group-hover:-translate-x-1" />
                </Button>
                <Button
                    isIconOnly
                    onClick={scrollNext}
                    className="group h-12 w-12 rounded-full bg-primary/80 text-primary-foreground shadow-lg transition-all duration-300 hover:scale-110 hover:bg-primary -mr-6"
                    aria-label="Siguiente"
                >
                    <ChevronRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
             <div className="mt-8 flex justify-center gap-2">
              {products.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={cn(
                    'h-2 w-8 rounded-full transition-colors duration-300',
                    index === selectedIndex ? 'bg-primary' : 'bg-slate-700'
                  )}
                  aria-label={`Ir a la diapositiva ${index + 1}`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default ProductCarouselSection;
