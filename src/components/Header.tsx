'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  StaggerContainer,
  StaggerItem,
} from '@/components/animations/motion-wrapper';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/#soluciones', label: 'Soluciones' },
    { href: '/products', label: 'Productos' },
    { href: '/#proyectos', label: 'Proyectos' },
    { href: '/preguntas-frecuentes', label: 'Preguntas Frecuentes' },
    { href: '/contacto', label: 'Contacto' },
  ];

  const mobileMenuVariants = {
    open: {
      x: 0,
      transition: { type: 'spring', stiffness: 300, damping: 30 },
    },
    closed: {
      x: '100%',
      transition: { type: 'spring', stiffness: 300, damping: 30 },
    },
  };

  return (
    <header className="bg-[#1a2435] text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <Logo />
        <nav className="hidden md:flex">
          <StaggerContainer
            as="ul"
            className="flex items-center space-x-6"
            staggerChildren={0.1}
          >
            {navLinks.map((link) => (
              <StaggerItem as="li" key={link.href}>
                <Link
                  href={link.href}
                  className="relative text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                  <motion.div
                    className="absolute bottom-[-4px] left-0 h-0.5 bg-primary"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </nav>
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden bg-[#1a2435] absolute w-full left-0 top-16 shadow-lg"
          >
            <nav>
              <StaggerContainer
                as="ul"
                className="flex flex-col items-center space-y-4 py-4"
                staggerChildren={0.07}
                delayChildren={0.2}
              >
                {navLinks.map((link) => (
                  <StaggerItem as="li" key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-primary transition-colors text-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
