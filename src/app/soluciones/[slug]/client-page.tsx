'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft, type LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ScrollReveal } from '@/components/animations/scroll-animations';
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

type SolutionClientPageProps = {
  solution: Solution;
  relatedSolutions: Solution[];
  Icon: LucideIcon;
};

export function SolutionClientPage({
  solution,
  relatedSolutions,
  Icon,
}: SolutionClientPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-slate-900 text-gray-300"
    >
      <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
              delay: 0.2,
            }}
            className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10"
          >
            <Icon className="h-10 w-10 text-green-400" />
          </motion.div>
          <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {solution.title}
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-400">
            {solution.description}
          </p>
        </div>
      </header>

      <main className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="mb-8">
          <Link href="/soluciones">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a Soluciones
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-white">
                Descripción Detallada
              </h2>
              <p className="mt-4 text-lg leading-relaxed">
                {solution.detailedDescription}
              </p>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-1">
            <ScrollReveal className="sticky top-24">
              <Card className="border-slate-700/50 bg-slate-800/50">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">
                    Beneficios Clave
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {solution.keyFeatures.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contacto" className="block pt-4">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        size="lg"
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        Solicitar Cotización
                      </Button>
                    </motion.div>
                  </Link>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>

        {relatedSolutions.length > 0 && (
          <ScrollReveal className="mt-24">
            <h2 className="mb-8 text-center text-3xl font-bold text-white">
              Otras Soluciones
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedSolutions.map((related) => {
                const RelatedIcon = getIcon(related.icon);
                return (
                  <motion.div
                    key={related.slug}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <Link href={`/soluciones/${related.slug}`}>
                      <Card className="group flex h-full flex-col border-slate-700/50 bg-slate-800/50 transition-colors hover:border-primary/50">
                        <CardHeader className="flex-row items-center gap-4">
                          <RelatedIcon className="h-8 w-8 text-primary" />
                          <CardTitle className="text-xl text-white transition-colors group-hover:text-primary">
                            {related.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <p>{related.description}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </ScrollReveal>
        )}
      </main>
    </motion.div>
  );
}
