'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import {
  FloatingElement,
  ParallaxText,
  ScrollReveal,
} from '@/components/animations/scroll-animations';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

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

const TestimonialsSection: React.FC = () => {
   const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );
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

          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-6xl mx-auto mt-12"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
             opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-4">
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
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
                          &quot;{testimonial.quote}&quot;
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
                    </Card>
                  </motion.div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 hidden sm:flex" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 hidden sm:flex" />
          </Carousel>
        </div>
      </section>
    </ScrollReveal>
  );
};
export default TestimonialsSection;
