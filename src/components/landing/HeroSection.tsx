
'use client';

import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform, useMotionValue, useSpring, type Variants } from 'framer-motion';
import { StaggerContainer, StaggerItem } from '../animations/motion-wrapper';
import { FloatingElement } from '../animations/scroll-animations';
import { Star } from 'lucide-react';
import React, { useEffect, useRef } from 'react';
import { IsometricBox } from '../icons/IsometricBox';
import { PackageFold } from '../icons/PackageFold';


function GridPattern(props: React.ComponentProps<typeof motion.div>) {
  return (
    <motion.div
      {...props}
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


const revealAnimation: Variants = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const buttonStaggerItemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } },
};

const starStaggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};


export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20, mass: 1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const mouseX = event.clientX - rect.left - rect.width / 2;
        const mouseY = event.clientY - rect.top - rect.height / 2;
        x.set(mouseX);
        y.set(mouseY);
      }
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    const currentRef = ref.current;
    if (currentRef) {
      currentRef.addEventListener('mousemove', handleMouseMove);
      currentRef.addEventListener('mouseleave',handleMouseLeave);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('mousemove', handleMouseMove);
        currentRef.removeEventListener('mouseleave',handleMouseLeave);
      }
    };
  }, [x, y]);

  const gridX = useTransform(springX, (v) => v / -5);
  const gridY = useTransform(springY, (v) => v / -5);
  const float1X = useTransform(springX, (v) => v / -10);
  const float1Y = useTransform(springY, (v) => v / -10);
  const float2X = useTransform(springX, (v) => v / 20);
  const float2Y = useTransform(springY, (v) => v / 20);
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.8, 1],
    [
      "inset(0% 0% 0% 0%)",
      "inset(0% 0% 0% 0%)",
      "inset(50% 50% 50% 50%)"
    ]
  );

  return (
    <section ref={ref} className="relative bg-gradient-to-r from-primary-foreground to-primary-dark text-white py-20 md:py-32 overflow-hidden">
      <GridPattern style={{ x: gridX, y: gridY }} />
      <FloatingElement style={{ x: float1X, y: float1Y }} className="absolute top-20 -left-20 opacity-50" >
        <IsometricBox className="w-64 h-64 text-primary/10 stroke-[0.5]" />
      </FloatingElement>
      <FloatingElement style={{ x: float2X, y: float2Y }} className="absolute bottom-10 -right-20 opacity-50">
        <PackageFold className="w-72 h-72 text-slate-500/10 stroke-[0.5]" />
      </FloatingElement>

        <motion.div
            style={{ clipPath }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            variants={{
              visible: { transition: { staggerChildren: 0.2, delayChildren: 0.4 } }
            }}
            initial="hidden"
            animate="visible"
          >
            <div className="overflow-hidden py-2">
              <motion.div variants={revealAnimation}>Soluciones de empaque</motion.div>
            </div>
            <div className="overflow-hidden py-2">
              <motion.div
                className="text-primary inline-block text-shadow-primary"
                variants={revealAnimation}
              >
                personalizadas
              </motion.div>
            </div>
          </motion.h1>

          <p className="max-w-3xl mx-auto mb-8 text-lg text-muted-foreground">
            Proveemos productos y soluciones de empaque personalizadas para
            artículos escolares, papelería, accesorios eléctricos, cosméticos,
            didácticos, mercería y más.
          </p>

          <StaggerContainer
            as="div"
            className="flex justify-center items-center flex-col sm:flex-row gap-4 mb-8"
            staggerChildren={0.15}
            delayChildren={0.7}
          >
            <StaggerItem variants={buttonStaggerItemVariants}>
              <motion.div
                className="hover:shadow-primary transition-shadow duration-300 rounded-md"
                whileHover={{ scale: 1.05 }}
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
            <StaggerItem variants={buttonStaggerItemVariants}>
              <motion.div
                className="hover:shadow-primary-muted transition-shadow duration-300 rounded-md"
                whileHover={{ scale: 1.05 }}
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
                <StaggerItem key={i} variants={starStaggerItemVariants}>
                  <Star className="w-5 h-5 text-yellow-400" fill="currentColor"/>
                </StaggerItem>
              ))}
               <StaggerItem variants={starStaggerItemVariants}>
                <p className="text-sm text-muted-foreground ml-2">Calificado 4.9/5 por más de 500 clientes</p>
              </StaggerItem>
          </StaggerContainer>
        </motion.div>
    </section>
  );
}
