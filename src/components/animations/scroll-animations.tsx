'use client';

import {
  motion,
  useInView,
  useScroll,
  type Variants,
  useTransform,
} from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
};

// A component to reveal content as it scrolls into view
export function ScrollReveal({
  children,
  className,
  variants,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
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
export function ScrollProgress({ className }: { className?: string }) {
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
  [key: string]: unknown;
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
  [key: string]: unknown;
}) => {
  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div variants={defaultVariants} className={className} {...props}>
      {children}
    </motion.div>
  );
};

export const FloatingElement = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: unknown;
}) => {
  const [duration, setDuration] = useState(20);

  useEffect(() => {
    setDuration(Math.random() * 5 + 15);
  }, []);

  return (
    <motion.div
      animate={{
        y: ['-5%', '5%', '-5%'],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration: duration,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'mirror',
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const ParallaxText = ({
  children,
  className,
  speed = 0.5,
}: {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${-100 * speed}%`]);

  return (
    <div
      ref={ref}
      className={cn('overflow-hidden', className)}
      style={{ position: 'relative' }}
    >
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
};
