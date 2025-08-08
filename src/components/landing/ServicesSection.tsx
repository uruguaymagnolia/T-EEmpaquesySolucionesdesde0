'use client';
import { solutions } from '@/lib/mock-solutions';
import { motion } from 'framer-motion';
import {
  ScrollStaggerContainer,
  ScrollStaggerItem,
} from '../animations/scroll-animations';

export function ServicesSection({ id }: { id?: string }) {
  return (
    <section id={id} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          Nuestros Servicios
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Ofrecemos un abanico de servicios para llevar su empaque al siguiente
          nivel.
        </p>
        <ScrollStaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          staggerChildren={0.15}
        >
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <ScrollStaggerItem key={index}>
                <motion.div
                  whileHover={{ scale: 1.03, y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="text-center p-6 border border-gray-200 rounded-lg shadow-sm h-full"
                >
                  <Icon className="h-12 w-12 text-[#9ada34] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600">{solution.description}</p>
                </motion.div>
              </ScrollStaggerItem>
            );
          })}
        </ScrollStaggerContainer>
      </div>
    </section>
  );
}
