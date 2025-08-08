
'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import {
  Menu,
  X,
  Home,
  Package,
  ShoppingBag,
  Briefcase,
  HelpCircle,
  Mail,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  StaggerContainer,
  StaggerItem,
} from '@/components/animations/motion-wrapper';
import type { LucideIcon } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMenuOpen]);

  const navLinks: { href: string; label: string; icon: LucideIcon }[] = [
    { href: '/', label: 'Inicio', icon: Home },
    { href: '/soluciones', label: 'Soluciones', icon: Package },
    { href: '/products', label: 'Productos', icon: ShoppingBag },
    { href: '/proyectos', label: 'Proyectos', icon: Briefcase },
    {
      href: '/preguntas-frecuentes',
      label: 'Preguntas Frecuentes',
      icon: HelpCircle,
    },
    { href: '/contacto', label: 'Contacto', icon: Mail },
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

  const overlayVariants = {
    open: { opacity: 1, pointerEvents: 'auto' as const },
    closed: { opacity: 0, pointerEvents: 'none' as const },
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
                  className="relative text-gray-300 hover:text-white transition-colors py-2"
                >
                  {link.label}
                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-primary"
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
            <AnimatePresence mode="wait">
              <motion.div
                key={isMenuOpen ? 'x' : 'menu'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </AnimatePresence>
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-[#1a2435] shadow-2xl z-50 md:hidden"
            >
              <nav className="h-full flex flex-col">
                <div className="flex justify-between items-center p-4 border-b border-slate-700">
                    <Logo/>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        <X size={24} />
                    </Button>
                </div>
                <StaggerContainer
                  as="ul"
                  className="flex flex-col p-4 space-y-2"
                  staggerChildren={0.07}
                  delayChildren={0.2}
                >
                  {navLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <StaggerItem
                        as="li"
                        key={link.href}
                        className="w-full"
                      >
                        <Link
                          href={link.href}
                          className="flex items-center gap-3 w-full p-3 text-lg text-gray-300 hover:text-primary hover:bg-slate-700/50 rounded-md transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <Icon className="size-5" />
                          <span>{link.label}</span>
                        </Link>
                      </StaggerItem>
                    );
                  })}
                </StaggerContainer>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
