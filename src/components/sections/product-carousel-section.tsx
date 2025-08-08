'use client';

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/animations/scroll-animations';

const products = [
  {
    title: 'Proyecto Alpha',
    description:
      'Una solución de empaque innovadora para la industria de bebidas.',
    image: '/placeholder.svg',
    imageAlt: 'Imagen del Proyecto Alpha',
  },
  {
    title: 'Iniciativa Beta',
    description:
      'Diseño de empaque sostenible utilizando materiales 100% reciclados.',
    image: '/placeholder.svg',
    imageAlt: 'Imagen de la Iniciativa Beta',
  },
  {
    title: 'Concepto Gamma',
    description: 'Empaque de lujo para una nueva línea de productos cosméticos.',
    image: '/placeholder.svg',
    imageAlt: 'Imagen del Concepto Gamma',
  },
  {
    title: 'Desarrollo Delta',
    description:
      'Optimización de la logística de empaque para reducir la huella de carbono.',
    image: '/placeholder.svg',
    imageAlt: 'Imagen del Desarrollo Delta',
  },
  {
    title: 'Plataforma Epsilon',
    description:
      'Una nueva tecnología de empaque inteligente con seguimiento integrado.',
    image: '/placeholder.svg',
    imageAlt: 'Imagen de la Plataforma Epsilon',
  },
];

const ProductCarouselSection: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <ScrollReveal>
      <section className="bg-slate-900 py-20 sm:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Nuestros Proyectos Destacados
          </h2>
          <div className="relative mt-12">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {products.map((product, index) => (
                  <div
                    className="relative min-w-0 flex-shrink-0 flex-grow-0 basis-full pl-4 md:basis-1/2 lg:basis-1/3"
                    key={index}
                  >
                    <div className="overflow-hidden rounded-lg border border-slate-700/50 bg-slate-800/50 p-4 backdrop-blur-sm">
                      <div className="relative mb-4 h-56 w-full overflow-hidden rounded">
                        <Image
                          src={product.image}
                          alt={product.imageAlt}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-300 group-hover:scale-110"
                          data-ai-hint="product image"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {product.title}
                      </h3>
                      <p className="mt-2 text-gray-300">
                        {product.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute top-1/2 hidden -translate-y-1/2 items-center justify-between md:flex w-full">
              <motion.div
                initial={{ x: 20 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -left-4"
              >
                <Button
                  isIconOnly
                  onClick={scrollPrev}
                  className="group h-12 w-12 rounded-full bg-green-400/80 text-black shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-400"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="h-6 w-6 transition-transform duration-300 group-hover:-translate-x-1" />
                </Button>
              </motion.div>
              <motion.div
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -right-4"
              >
                <Button
                  isIconOnly
                  onClick={scrollNext}
                  className="group h-12 w-12 rounded-full bg-green-400/80 text-black shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-400"
                  aria-label="Siguiente"
                >
                  <ChevronRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default ProductCarouselSection;
