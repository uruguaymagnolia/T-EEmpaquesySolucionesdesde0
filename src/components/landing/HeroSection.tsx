'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { StaggerContainer, StaggerItem } from '../animations/motion-wrapper';
import { FloatingElement } from '../animations/scroll-animations';
import { Star } from 'lucide-react';

function GridPattern() {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(154,218,52,0.08),transparent_40%)]" />
      <svg
        className="absolute inset-0 h-full w-full stroke-slate-700/50 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="83fd4e5a-9d52-4224-a64E-101Fc2ad32b6"
            width={100}
            height={100}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-4224-a64E-101Fc2ad32b6)" />
      </svg>
    </motion.div>
  );
}


export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-[#1a2435] to-[#0e413b] text-white py-20 md:py-32 overflow-hidden">
      <GridPattern />
      <FloatingElement className="absolute top-20 -left-20 w-64 h-64 bg-primary/10 rounded-full opacity-50 blur-3xl" >
        <div/>
      </FloatingElement>
      <FloatingElement className="absolute bottom-10 -right-20 w-72 h-72 bg-slate-500/10 rounded-full opacity-50 blur-3xl">
        <div/>
      </FloatingElement>

      <StaggerContainer
        className="container mx-auto px-4 text-center relative z-10"
        staggerChildren={0.2}
      >
        <StaggerItem
          as="h1"
          className="text-4xl md:text-6xl font-bold mb-4"
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: 'spring', bounce: 0.2 } },
          }}
        >
          Soluciones de empaque{' '}
          <motion.span
            className="text-primary inline-block"
            initial={{ opacity: 0, y: -20, filter: 'blur(5px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.6, duration: 0.5, type: 'spring' }}
            style={{ textShadow: '0 0 15px hsla(var(--primary), 0.5)' }}
          >
            personalizadas
          </motion.span>
        </StaggerItem>
        <StaggerItem
          as="p"
          className="max-w-3xl mx-auto mb-8 text-lg text-gray-300"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 }},
          }}
        >
          Proveemos productos y soluciones de empaque personalizadas para
          artículos escolares, papelería, accesorios eléctricos, cosméticos,
          didácticos, mercería y más.
        </StaggerItem>
        <StaggerContainer
          as="div"
          className="flex justify-center items-center flex-col sm:flex-row gap-4 mb-8"
          staggerChildren={0.15}
          delayChildren={0.7}
        >
          <StaggerItem variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } } }}>
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px hsla(var(--primary), 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg border border-primary/50"
              >
                Solicitar cotización
              </Button>
            </motion.div>
          </StaggerItem>
          <StaggerItem variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } } }}>
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px hsla(var(--primary), 0.2)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Ver nuestros productos
              </Button>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
        <StaggerContainer
          className="flex items-center justify-center space-x-2"
          staggerChildren={0.1}
          delayChildren={1.2}
        >
            {Array.from({ length: 5 }).map((_, i) => (
              <StaggerItem key={i} variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 }}}>
                <Star className="w-5 h-5 text-yellow-400" fill="currentColor"/>
              </StaggerItem>
            ))}
             <StaggerItem variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 }}}>
              <p className="text-sm text-gray-400 ml-2">Calificado 4.9/5 por más de 500 clientes</p>
            </StaggerItem>
        </StaggerContainer>
      </StaggerContainer>
    </section>
  );
}
