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
import { ScrollReveal } from './animations/scroll-animations';
import { companyData } from '@/lib/data';

export function Footer() {
  return (
    <ScrollReveal>
      <footer className="bg-[#1a2435] text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Columna 1: Logo y Redes Sociales */}
            <div>
              <Logo />
              <p className="mt-4 text-gray-400 text-sm">
                Soluciones de empaque innovadoras y personalizadas para potenciar
                su marca y proteger su producto.
              </p>
              <div className="flex space-x-4 mt-4">
                <Link
                  href={companyData.socials.facebook}
                  aria-label="Facebook"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook size={20} />
                </Link>
                <Link
                  href={companyData.socials.linkedin}
                  aria-label="LinkedIn"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </Link>
                <Link
                  href={companyData.socials.instagram}
                  aria-label="Instagram"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram size={20} />
                </Link>
              </div>
            </div>

            {/* Columna 2: Navegación */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Navegación</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Home size={16} />
                    <span>Inicio</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/soluciones"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Package size={16} />
                    <span>Soluciones</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <ShoppingBag size={16} />
                    <span>Productos</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/proyectos"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Briefcase size={16} />
                    <span>Proyectos</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contacto"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Mail size={16} />
                    <span>Contacto</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Columna 3: Legal */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/politica-de-privacidad"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Shield size={16} />
                    <span>Política de Privacidad</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terminos-de-servicio"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <FileText size={16} />
                    <span>Términos de Servicio</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Columna 4: Contacto */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Ponerse en contacto</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="mt-0.5 shrink-0" />
                  <span>{companyData.address}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail size={16} className="mt-0.5 shrink-0" />
                  <a
                    href={`mailto:${companyData.email}`}
                    className="hover:text-white transition-colors"
                  >
                    {companyData.email}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Phone size={16} className="mt-0.5 shrink-0" />
                  <a
                    href={companyData.phone.href}
                    className="hover:text-white transition-colors"
                  >
                    {companyData.phone.number}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
            <p suppressHydrationWarning>
              &copy; {new Date().getFullYear()} T & E Empaques y Soluciones.
              Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </ScrollReveal>
  );
}
