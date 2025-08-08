'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function AnimatedButton({ href, text }: { href: string; text: string }) {
  return (
    <motion.div
        whileHover={{ scale: 1.05, boxShadow: '0 0 20px hsla(var(--primary), 0.3)' }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <Link href={href}>
        <Button
          variant="outline"
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        >
          {text}
        </Button>
      </Link>
    </motion.div>
  );
}
