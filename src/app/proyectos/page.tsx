
'use client';

import { ProjectCard } from '@/components/landing/ProjectCard';
import { projects } from '@/lib/mock-projects';
import {
  ScrollReveal,
  ScrollStaggerContainer,
  ScrollStaggerItem,
} from '@/components/animations/scroll-animations';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
  return (
    <div className="bg-slate-900">
      <header className="bg-gradient-to-r from-[#1a2435] to-[#0e413b] text-white py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold">Nuestros Proyectos</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Descubra cómo hemos ayudado a nuestros clientes a alcanzar sus
            metas con soluciones de empaque innovadoras y efectivas.
          </p>
        </motion.div>
      </header>

      <main className="container mx-auto px-4 py-16 md:py-24">
        <ScrollReveal>
          <ScrollStaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ScrollStaggerItem key={project.id}>
                <ProjectCard project={project} />
              </ScrollStaggerItem>
            ))}
          </ScrollStaggerContainer>
        </ScrollReveal>
      </main>
    </div>
  );
}
