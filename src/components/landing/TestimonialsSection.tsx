'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import {
  ScrollStaggerContainer,
  ScrollStaggerItem,
} from '../animations/scroll-animations';

const testimonials = [
  {
    quote:
      'La calidad y el diseño de los empaques superaron nuestras expectativas. Nuestro producto ahora destaca en el anaquel y hemos visto un aumento notable en las ventas.',
    name: 'Ana Sofía Rey',
    company: 'Directora de Marketing, Cosméticos BellezaPura',
  },
  {
    quote:
      'El equipo de T&E nos guió en la transición a materiales 100% reciclables. Su experiencia en sostenibilidad fue clave para nuestro proyecto.',
    name: 'Carlos Mendoza',
    company: 'Gerente de Operaciones, Alimentos Frescos S.A.',
  },
  {
    quote:
      'Necesitábamos una solución de empaque resistente y a la vez económica para nuestros componentes electrónicos. T&E entregó un diseño perfecto que redujo nuestros costos.',
    name: 'Laura Jiménez',
    company: 'Jefa de Compras, TechGadgets',
  },
  {
    quote:
      'El proceso de prototipado fue increíblemente rápido y nos permitió hacer ajustes antes de la producción masiva. Un servicio impecable y muy profesional.',
    name: 'Javier Torres',
    company: 'Fundador, Juguetes Creativos',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Lo que dicen nuestros clientes
        </h2>
        <ScrollStaggerContainer>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <ScrollStaggerItem key={index}>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <Card className="h-full flex flex-col justify-between">
                        <CardContent className="p-6 flex-grow">
                          <blockquote className="text-lg italic text-gray-700 border-l-4 border-[#9ada34] pl-4">
                            {testimonial.quote}
                          </blockquote>
                          <div className="mt-4">
                            <p className="font-semibold text-gray-800">
                              {testimonial.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {testimonial.company}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                </ScrollStaggerItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 hidden sm:flex" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 hidden sm:flex" />
          </Carousel>
        </ScrollStaggerContainer>
      </div>
    </section>
  );
}
