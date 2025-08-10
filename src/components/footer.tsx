
'use client';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import {
  Facebook,
  Instagram,
  Linkedin,
  Home,
  Package,
  ShoppingBag,
  Briefcase,
  Mail,
  Shield,
  FileText,
  MapPin,
  Phone,
} from 'lucide-react';
import { companyData } from '@/lib/data';
import {
  ScrollReveal,
  ScrollStaggerContainer,
  ScrollStaggerItem,
} from './animations/scroll-animations';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const footerLinks = [
  { href: '/', label: 'Inicio', icon: Home },
  { href: '/soluciones', label: 'Soluciones', icon: Package },
  { href: '/products', label: 'Productos', icon: ShoppingBag },
  { href: '/proyectos', label: 'Proyectos', icon: Briefcase },
  { href: '/contacto', label: 'Contacto', icon: Mail },
];

const legalLinks = [
  {
    href: '/politica-de-privacidad',
    label: 'Política de Privacidad',
    icon: Shield,
  },
  {
    href: '/terminos-de-servicio',
    label: 'Términos de Servicio',
    icon: FileText,
  },
];

const socialLinks = [
  {
    href: companyData.socials.facebook,
    label: 'Facebook',
    icon: Facebook,
  },
  {
    href: companyData.socials.linkedin,
    label: 'LinkedIn',
    icon: Linkedin,
  },
  {
    href: companyData.socials.instagram,
    label: 'Instagram',
    icon: Instagram,
  },
];

const AnimatedTitle = ({ children }: { children: React.ReactNode }) => (
  <motion.h2
    className="font-semibold text-primary text-lg md:text-xl mb-4 relative inline-block"
    initial="rest"
    whileHover="hover"
    animate="rest"
  >
    {children}
    <motion.div
      className="absolute bottom-0 left-0 h-[2px] bg-primary"
      variants={{
        rest: { width: 0 },
        hover: { width: '100%' },
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    />
  </motion.h2>
);

export function Footer() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${companyData.location.lat},${companyData.location.lng}`;

  return (
    <ScrollReveal>
      <footer className="relative bg-background-dark text-white border-t border-border/50">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col items-center text-center">
            {/* Nivel 1: Marca */}
            <ScrollStaggerItem className="mb-8">
              <Logo />
              <p className="text-muted-foreground text-sm mt-4 max-w-md">
                Soluciones de empaque innovadoras y personalizadas para potenciar
                su marca y proteger su producto.
              </p>
            </ScrollStaggerItem>

            {/* Nivel 2: Navegación Principal */}
            <ScrollStaggerItem className="mb-8">
              <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <motion.div
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href={link.href}
                        className="text-lg text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </ScrollStaggerItem>

            {/* Nivel 3: Contacto y Redes Sociales */}
            <ScrollStaggerItem className="mb-8">
              <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-muted-foreground">
                {/* Contacto */}
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <a
                    href={googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <MapPin size={16} />
                    <span>{companyData.address}</span>
                  </a>
                  <a
                    href={`mailto:${companyData.email}`}
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <Mail size={16} />
                    <span>{companyData.email}</span>
                  </a>
                  <a
                    href={companyData.phone.href}
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <Phone size={16} />
                    <span>{companyData.phone.number}</span>
                  </a>
                </div>
                {/* Separador */}
                <div className="hidden md:block h-6 w-px bg-border"></div>
                {/* Redes Sociales */}
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      whileHover={{ scale: 1.2, rotate: -10 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </ScrollStaggerItem>

            {/* Nivel 4: Legal y Copyright */}
            <div className="w-full border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
              <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-4 text-xs">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <p>
                &copy; {isClient ? new Date().getFullYear() : '2024'} T & E Empaques y Soluciones.
                Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </ScrollReveal>
  );
}
