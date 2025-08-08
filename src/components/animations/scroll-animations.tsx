'use client';

import {
  motion,
  useInView,
  useScroll,
  type Variants,
} from 'framer-motion';
import React, { useRef } from 'react';
import { cn } from '@/lib/utils';

// A component to reveal content as it scrolls into view
export function ScrollReveal({
  children,
  className,
  ...variants
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants || defaultVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// A component to display a scroll progress bar
export function ScrollProgress({
  className,
}: {
  className?: string;
}) {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className={cn(
        'fixed top-0 left-0 right-0 h-1 bg-primary origin-[0%]',
        className
      )}
      style={{ scaleX: scrollYProgress, zIndex: 100 }}
    />
  );
}

export const ScrollStaggerContainer = ({
    children,
    className,
    staggerChildren = 0.1,
    delayChildren = 0,
    ...props
  }: {
    children: React.ReactNode;
    className?: string;
    staggerChildren?: number;
    delayChildren?: number;
    [key: string]: any;
  }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
  
    const variants: Variants = {
      hidden: {},
      visible: {
        transition: {
          staggerChildren,
          delayChildren,
        },
      },
    };
  
    return (
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  };
  
  export const ScrollStaggerItem = ({
    children,
    className,
    ...props
  }: {
    children: React.ReactNode;
    className?: string;
    [key: string]: any;
  
  }) => {
    const defaultVariants: Variants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    };
  
    return (
      <motion.div
        variants={defaultVariants}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  };