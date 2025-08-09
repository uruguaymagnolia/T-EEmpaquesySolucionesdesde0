
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
          <ScrollStaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Columna 1: Logo y Redes Sociales */}
            <ScrollStaggerItem className="space-y-4">
              <Logo />
              <p className="text-muted-foreground text-sm">
                Soluciones de empaque innovadoras y personalizadas para potenciar
                su marca y proteger su producto.
              </p>
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
            </ScrollStaggerItem>

            {/* Columna 2: Navegación */}
            <ScrollStaggerItem>
              <AnimatedTitle>Navegación</AnimatedTitle>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <motion.div
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href={link.href}
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <link.icon size={16} />
                        <span>{link.label}</span>
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </ScrollStaggerItem>

            {/* Columna 3: Legal */}
            <ScrollStaggerItem>
               <AnimatedTitle>Legal</AnimatedTitle>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <motion.div
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href={link.href}
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <link.icon size={16} />
                        <span>{link.label}</span>
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </ScrollStaggerItem>

            {/* Columna 4: Contacto */}
            <ScrollStaggerItem>
               <AnimatedTitle>Ponerse en contacto</AnimatedTitle>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-muted-foreground" />
                   <a
                    href={googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    {companyData.address}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={16} className="mt-0.5 shrink-0 text-muted-foreground" />
                  <motion.div
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <a
                      href={`mailto:${companyData.email}`}
                      className="hover:text-primary transition-colors"
                    >
                      {companyData.email}
                    </a>
                  </motion.div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={16} className="mt-0.5 shrink-0 text-muted-foreground" />
                  <motion.div
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <a
                      href={companyData.phone.href}
                      className="hover:text-primary transition-colors"
                    >
                      {companyData.phone.number}
                    </a>
                  </motion.div>
                </li>
              </ul>
            </ScrollStaggerItem>
          </ScrollStaggerContainer>

          <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
            <p>
              &copy; {isClient ? new Date().getFullYear() : '2024'} T & E Empaques y Soluciones.
              Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </ScrollReveal>
  );
}
