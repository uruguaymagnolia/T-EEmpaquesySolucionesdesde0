'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  ScrollReveal,
  ScrollStaggerContainer,
  ScrollStaggerItem,
} from '@/components/animations/scroll-animations';

const faqData = [
  {
    question: '¿Qué tipo de materiales utilizan para los empaques?',
    answer:
      'Utilizamos una amplia variedad de materiales, desde cartón corrugado y plásticos reciclados hasta bioplásticos y materiales compostables. La elección del material depende de los requisitos de su producto, sus objetivos de sostenibilidad y su presupuesto.',
  },
  {
    question: '¿Ofrecen servicio de diseño de empaque personalizado?',
    answer:
      'Sí, el diseño a medida es una de nuestras especialidades. Nuestro equipo de diseñadores trabaja con usted para crear un empaque que no solo proteja su producto, sino que también refuerce su marca y atraiga a los consumidores.',
  },
  {
    question: '¿Cuál es el pedido mínimo para un empaque personalizado?',
    answer:
      'El pedido mínimo varía según la complejidad del diseño y los materiales seleccionados. Le recomendamos que se ponga en contacto con nuestro equipo de ventas para obtener una cotización detallada y discutir sus necesidades específicas.',
  },
  {
    question: '¿Cuánto tiempo tarda el proceso de prototipado?',
    answer:
      'Nuestro servicio de prototipado rápido nos permite entregar muestras físicas en cuestión de días. Esto le permite validar el diseño y la funcionalidad antes de comprometerse con una producción a gran escala, ahorrando tiempo y dinero.',
  },
  {
    question: '¿Cómo ayudan a las empresas a ser más sostenibles?',
    answer:
      'Ofrecemos consultoría y una amplia gama de materiales ecológicos para ayudar a las empresas a reducir su huella de carbono. Le guiamos en la transición hacia empaques 100% reciclables, biodegradables o compostables, sin sacrificar la calidad ni la protección.',
  },
];

const FAQSection: React.FC = () => {
  return (
    <ScrollReveal>
      <section className="bg-zinc-900 py-20 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Preguntas Frecuentes
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Aquí encontrará respuestas a las dudas más comunes sobre nuestros
              servicios y productos. Si no encuentra lo que busca, no dude en
              contactarnos.
            </p>
          </div>

          <ScrollStaggerContainer
            className="mx-auto mt-12 max-w-3xl space-y-3"
            staggerChildren={0.1}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <ScrollStaggerItem key={index}>
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <AccordionItem
                      value={`item-${index}`}
                      className="overflow-hidden rounded-lg border border-slate-800 bg-gradient-to-br from-slate-800 to-slate-900"
                    >
                      <AccordionTrigger className="p-5 text-left font-semibold text-white hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-5 pb-5 text-base text-gray-400">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                </ScrollStaggerItem>
              ))}
            </Accordion>
          </ScrollStaggerContainer>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default FAQSection;
