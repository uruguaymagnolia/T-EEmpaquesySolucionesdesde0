'use client';

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import {
  FloatingElement,
  ParallaxText,
  ScrollReveal,
} from '@/components/animations/scroll-animations';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    quote:
      'La calidad y el diseño de los empaques superaron nuestras expectativas. Nuestro producto ahora destaca en el anaquel y hemos visto un aumento notable en las ventas.',
    name: 'Ana Sofía Rey',
    company: 'Directora de Marketing, Cosméticos BellezaPura',
    rating: 5,
  },
  {
    quote:
      'El equipo de T&E nos guió en la transición a materiales 100% reciclables. Su experiencia en sostenibilidad fue clave para nuestro proyecto y ahora nuestra marca es más fuerte.',
    name: 'Carlos Mendoza',
    company: 'Gerente de Operaciones, Alimentos Frescos S.A.',
    rating: 5,
  },
  {
    quote:
      'Necesitábamos una solución de empaque resistente y a la vez económica para nuestros componentes electrónicos. T&E entregó un diseño perfecto que redujo nuestros costos en un 20%.',
    name: 'Laura Jiménez',
    company: 'Jefa de Compras, TechGadgets',
    rating: 4,
  },
  {
    quote:
      'El proceso de prototipado fue increíblemente rápido y nos permitió hacer ajustes antes de la producción masiva. Un servicio impecable y muy profesional de principio a fin.',
    name: 'Javier Torres',
    company: 'Fundador, Juguetes Creativos',
    rating: 5,
  },
   {
    quote:
      'La atención al detalle y la disposición para encontrar soluciones creativas es lo que distingue a T&E. Estamos muy satisfechos con el resultado final de nuestro empaque.',
    name: 'Roberto Ponce',
    company: 'CEO, Delicias Gourmet',
    rating: 5,
  },
];

const DotButton = ({ selected, onClick, index }: {selected: boolean, onClick: () => void, index: number}) => (
  <button
    aria-label={`Ir al testimonio ${index + 1}`}
    className={cn(
      'h-3 w-3 rounded-full mx-1 transition-all duration-300',
      selected ? 'bg-primary scale-125' : 'bg-slate-700'
    )}
    type="button"
    onClick={onClick}
  />
);


const TestimonialsSection: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [
    emblaApi,
  ]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);


  return (
    <ScrollReveal>
      <section className="relative overflow-hidden bg-slate-900 py-20 sm:py-24">
        <FloatingElement className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-green-500/10 blur-3xl">
          <div />
        </FloatingElement>
        <FloatingElement className="absolute -bottom-48 -right-48 h-96 w-96 rounded-full bg-slate-500/10 blur-3xl">
          <div />
        </FloatingElement>
        <ParallaxText speed={0.3}>
          <Quote className="absolute right-1/2 top-1/2 h-96 w-96 -translate-y-1/2 translate-x-1/2 text-green-500/5" />
        </ParallaxText>

        <div className="container relative mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Lo que dicen nuestros clientes
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
              La satisfacción de nuestros clientes es nuestra mejor carta de
              presentación.
            </p>
          </div>

          <div className="mt-12 overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="min-w-0 flex-shrink-0 flex-grow-0 basis-full md:basis-1/2 lg:basis-1/3 px-4"
                >
                  {motion.create().div
                    animate={{ 
                      scale: index === selectedIndex ? 1 : 0.85,
                      opacity: index === selectedIndex ? 1 : 0.5,
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="h-full"
                  >
                    <Card className="h-full border-slate-700/50 bg-slate-800/50 p-6 backdrop-blur-sm">
                      <CardContent className="p-0">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${
                                i < testimonial.rating
                                  ? 'text-yellow-400'
                                  : 'text-gray-600'
                              }`}
                              fill={
                                i < testimonial.rating
                                  ? 'currentColor'
                                  : 'transparent'
                              }
                            />
                          ))}
                        </div>
                        <blockquote className="mt-4 text-lg text-gray-300">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="mt-6">
                          <p className="font-bold text-white">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-gray-400">
                            {testimonial.company}
                          </p>
                        </div>
                      </CardContent>
                    </Card>}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
           <div className="flex justify-center mt-6">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                index={index}
                selected={index === selectedIndex}
                onClick={() => scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};
export default TestimonialsSection;
