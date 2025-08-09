'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface LogoProps {
  scrolled?: boolean;
}

export function Logo({ scrolled = false }: LogoProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <Link
        href="/"
        className="flex items-center gap-2 rounded-md focus-outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <Image
          src="/Logo_TyE.svg"
          alt="T & E Tecnología y Empaque Logo"
          width={120}
          height={40}
          className={`w-auto shrink-0 transition-all duration-300 ease-in-out ${
            scrolled ? 'h-10' : 'h-10 sm:h-12'
          }`}
          sizes="120px"
          priority
        />
        <div
          className={`flex flex-col transition-all duration-300 ease-in-out ${
            scrolled ? 'opacity-0 w-0' : 'opacity-100 w-auto'
          } overflow-hidden`}
        >
          <h1 className="text-base sm:text-xl font-bold text-primary leading-tight whitespace-nowrap">
            Tecnología y Empaque
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground leading-tight whitespace-nowrap">
            Soluciones de empaque a su medida
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
