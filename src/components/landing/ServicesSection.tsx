'use client';
import { motion } from 'framer-motion';
import {
  ScrollStaggerContainer,
  ScrollStaggerItem,
} from '../animations/scroll-animations';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ArrowRight, type LucideIcon } from 'lucide-react';
import type { Solution } from '@prisma/client';
import * as lucideIcons from 'lucide-react';

const icons = {
  Gift: lucideIcons.Gift,
  Sparkles: lucideIcons.Sparkles,
  PackageCheck: lucideIcons.PackageCheck,
  Shrink: lucideIcons.Shrink,
  Flame: lucideIcons.Flame,
  PackagePlus: lucideIcons.PackagePlus,
  Square: lucideIcons.Square,
  Component: lucideIcons.Component,
};

function getIcon(name: string): LucideIcon {
  return (icons as any)[name] || icons.Component;
}

export function ServicesSection({
  id,
  solutions,
}: {
  id?: string;
  solutions: Solution[];
}) {
  return (
    <section id={id} className="py-16 md:py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          Nuestros Servicios de Empaque
        </h2>
        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-12">
          Ofrecemos una amplia gama de soluciones de empaque y embalaje
          diseñadas para satisfacer las necesidades específicas de su negocio.
        </p>
        <ScrollStaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          staggerChildren={0.1}
        >
          {solutions.map((solution, index) => {
            const Icon = getIcon(solution.icon);
            return (
              <ScrollStaggerItem key={index} className="h-full">
                <motion.div
                  whileHover={{ scale: 1.03, y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="text-left p-6 border border-slate-700/50 rounded-lg shadow-sm h-full bg-slate-900 flex flex-col group"
                >
                  <div className="flex-shrink-0">
                    <Icon className="h-12 w-12 text-[#9ada34] mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {solution.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {solution.description}
                    </p>
                  </div>
                  <div className="mt-auto pt-4">
                    <Button
                      asChild
                      variant="link"
                      className="text-primary p-0 h-auto opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Link href={`/soluciones/${solution.slug}`}>
                        Saber más
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              </ScrollStaggerItem>
            );
          })}
        </ScrollStaggerContainer>
      </div>
    </section>
  );
}
