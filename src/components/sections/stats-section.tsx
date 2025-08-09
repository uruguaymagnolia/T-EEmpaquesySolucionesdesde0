'use client';

import React from 'react';
import {
  ScrollReveal,
  ScrollStaggerContainer,
  ScrollStaggerItem,
} from '@/components/animations/scroll-animations';
import { AnimatedCounter } from '@/components/common/AnimatedCounter';

const stats = [
  {
    value: 20,
    label: 'Años de Experiencia',
    suffix: '+',
  },
  {
    value: 500,
    label: 'Clientes Satisfechos',
    suffix: '+',
  },
  {
    value: 1200,
    label: 'Proyectos Completados',
    suffix: '+',
  },
  {
    value: 99,
    label: 'Tasa de Retención',
    suffix: '%',
  },
];

export function StatsSection() {
  return (
    <ScrollReveal>
      <section className="bg-background-alt py-20 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              Nuestros números nos respaldan
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Décadas de experiencia y cientos de clientes felices son nuestra
              mejor garantía de calidad y compromiso.
            </p>
          </div>

          <ScrollStaggerContainer
            className="mt-12 grid grid-cols-1 gap-6 text-center sm:grid-cols-2 lg:grid-cols-4"
            staggerChildren={0.15}
          >
            {stats.map((stat, index) => (
              <ScrollStaggerItem key={index}>
                <div className="rounded-xl border border-border/30 bg-background-light/30 p-8 backdrop-blur-sm">
                  <div className="text-5xl font-extrabold text-primary">
                    <AnimatedCounter value={stat.value} />
                    <span>{stat.suffix}</span>
                  </div>
                  <p className="mt-2 text-lg text-muted-foreground">{stat.label}</p>
                </div>
              </ScrollStaggerItem>
            ))}
          </ScrollStaggerContainer>
        </div>
      </section>
    </ScrollReveal>
  );
}
