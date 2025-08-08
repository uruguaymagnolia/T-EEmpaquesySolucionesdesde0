'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/soluciones', label: 'Soluciones' },
    { href: '/products', label: 'Productos' },
    { href: '/proyectos', label: 'Proyectos' },
    { href: '/preguntas-frecuentes', label: 'Preguntas Frecuentes' },
    { href: '/contacto', label: 'Contacto' },
  ];

  return (
    <header className="bg-[#1a2435] text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <Logo />
        <nav className="hidden md:flex">
          <ul className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-gray-300 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
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
      {isMenuOpen && (
        <div className="md:hidden bg-[#1a2435] absolute w-full left-0 top-16">
          <nav>
            <ul className="flex flex-col items-center space-y-4 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-gray-300 transition-colors text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
