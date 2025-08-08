'use client';

import { motion, type Variants } from 'framer-motion';
import type { ElementType, ReactNode } from 'react';

// A wrapper that applies a simple fade-in or slide-in animation
export function MotionWrapper({
  children,
  className,
  ...variants
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) {
  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants || defaultVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type StaggerContainerProps = {
  children: ReactNode;
  className?: string;
  staggerChildren?: number;
  delayChildren?: number;
  as?: ElementType;
};

// A container for staggered animations
export const StaggerContainer = ({
  children,
  className,
  staggerChildren = 0.1,
  delayChildren = 0,
  as: Component = 'div',
}: StaggerContainerProps) => {
  const variants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };

  const MotionComponent = motion(Component);

  return (
    // @ts-ignore
    <MotionComponent
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
};


type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  [key: string]: any;
};

// An item for staggered animations
export const StaggerItem = ({
  children,
  className,
  as: Component = 'div',
  ...variants
}: StaggerItemProps) => {
  const defaultVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const MotionComponent = motion(Component);

  return (
    // @ts-ignore
    <MotionComponent
      variants={variants.variants || defaultVariants}
      className={className}
    >
      {children}
    </MotionComponent>
  );
};
