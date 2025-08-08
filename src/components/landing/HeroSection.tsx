'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { StaggerContainer, StaggerItem } from '../animations/motion-wrapper';

export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-[#1a2435] to-[#0e413b] text-white py-20 md:py-32 overflow-hidden">
      <StaggerContainer
        className="container mx-auto px-4 text-center"
        staggerChildren={0.2}
      >
        <StaggerItem
          as="h1"
          className="text-4xl md:text-6xl font-bold mb-4"
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
          Soluciones de empaque{' '}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5, type: 'spring' }}
            className="text-primary inline-block"
          >
            personalizadas para su negocio
          </motion.span>
        </StaggerItem>
        <StaggerItem
          as="p"
          className="max-w-3xl mx-auto mb-8 text-lg text-gray-300"
        >
          Proveemos productos y soluciones de empaque personalizadas para
          artículos escolares, papelería, accesorios eléctricos, cosméticos,
          didácticos, mercería y más.
        </StaggerItem>
        <StaggerContainer
          as="div"
          className="flex justify-center items-center flex-col sm:flex-row gap-4 mb-8"
          staggerChildren={0.1}
          delayChildren={0.4}
        >
          <StaggerItem>
            <Link href="/contacto">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="default"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Solicitar cotización
                </Button>
              </motion.div>
            </Link>
          </StaggerItem>
          <StaggerItem>
            <Link href="/products">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Ver nuestros productos
                </Button>
              </motion.div>
            </Link>
          </StaggerItem>
        </StaggerContainer>
        <StaggerItem
          as="p"
          className="text-sm text-gray-400"
        >
          Soluciones de empaque confiables para empresas importadoras
        </StaggerItem>
      </StaggerContainer>
    </section>
  );
}
