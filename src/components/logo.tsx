'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function Logo() {
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <Link
        href="/"
        className="flex items-center gap-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <Image
          src="/Logo_TyE.svg"
          alt="T & E Tecnología y Empaque Logo"
          width={120}
          height={40}
          className="h-10 sm:h-12 w-auto"
        />
        <div className="hidden sm:flex flex-col">
          <h1 className="text-base sm:text-xl font-bold text-primary leading-tight">
            Tecnología y Empaque
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground leading-tight">
            Soluciones de empaque a su medida
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
