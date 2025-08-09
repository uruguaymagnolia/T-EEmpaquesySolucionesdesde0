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

const MotionLink = motion(Link);

export function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${companyData.location.lat},${companyData.location.lng}`;
  return (
    <ScrollReveal>
      <footer className="bg-slate-950 text-white border-t border-slate-700/50">
        <div className="container mx-auto px-4 py-12">
          <ScrollStaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Columna 1: Logo y Redes Sociales */}
            <ScrollStaggerItem className="space-y-4">
              <Logo />
              <p className="text-gray-400 text-sm">
                Soluciones de empaque innovadoras y personalizadas para potenciar
                su marca y proteger su producto.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <MotionLink
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-gray-400 hover:text-primary transition-colors"
                    whileHover={{ scale: 1.2, rotate: -10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon size={20} />
                  </MotionLink>
                ))}
              </div>
            </ScrollStaggerItem>

            {/* Columna 2: Navegación */}
            <ScrollStaggerItem>
              <h2 className="font-semibold text-white text-lg mb-4">
                Navegación
              </h2>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <MotionLink
                      href={link.href}
                      className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <link.icon size={16} />
                      <span>{link.label}</span>
                    </MotionLink>
                  </li>
                ))}
              </ul>
            </ScrollStaggerItem>

            {/* Columna 3: Legal */}
            <ScrollStaggerItem>
              <h2 className="font-semibold text-white text-lg mb-4">Legal</h2>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <MotionLink
                      href={link.href}
                      className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <link.icon size={16} />
                      <span>{link.label}</span>
                    </MotionLink>
                  </li>
                ))}
              </ul>
            </ScrollStaggerItem>

            {/* Columna 4: Contacto */}
            <ScrollStaggerItem>
              <h2 className="font-semibold text-white text-lg mb-4">
                Ponerse en contacto
              </h2>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-gray-400" />
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
                  <Mail size={16} className="mt-0.5 shrink-0 text-gray-400" />
                  <MotionLink
                    href={`mailto:${companyData.email}`}
                    className="hover:text-primary transition-colors"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {companyData.email}
                  </MotionLink>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={16} className="mt-0.5 shrink-0 text-gray-400" />
                  <MotionLink
                    href={companyData.phone.href}
                    className="hover:text-primary transition-colors"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {companyData.phone.number}
                  </MotionLink>
                </li>
              </ul>
            </ScrollStaggerItem>
          </ScrollStaggerContainer>

          <div className="border-t border-slate-700 mt-8 pt-6 text-center text-sm text-gray-500">
            <p>
              &copy; {year} T & E Empaques y Soluciones.
              Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </ScrollReveal>
  );
}