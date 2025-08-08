'use client';

import { motion, type Variants } from 'framer-motion';

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

// A container for staggered animations
export const StaggerContainer = ({
  children,
  className,
  staggerChildren = 0.1,
  delayChildren = 0,
}: {
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
  delayChildren?: number;
}) => {
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
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// An item for staggered animations
export const StaggerItem = ({
  children,
  className,
  ...variants
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => {
  const defaultVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div variants={variants || defaultVariants} className={className}>
      {children}
    </motion.div>
  );
};
