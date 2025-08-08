'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#1a2435] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Columna 1: Logo y Redes Sociales */}
          <div>
            <Logo />
            <p className="mt-4 text-gray-400 text-sm">
              Soluciones de empaque innovadoras y personalizadas para potenciar
              su marca y proteger su producto.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link
                href="#"
                aria-label="Facebook"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="#"
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
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/soluciones"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Soluciones
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Productos
                </Link>
              </li>
              <li>
                <Link
                  href="/proyectos"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Proyectos
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contacto
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
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/terminos-de-servicio"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Términos de Servicio
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Ponerse en contacto</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-start">
                <span className="font-semibold mr-2">Dir:</span>
                <span>Calle Ficticia 123, Ciudad, País</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Email:</span>
                <a
                  href="mailto:contacto@tempaques.com"
                  className="hover:text-white transition-colors"
                >
                  contacto@tempaques.com
                </a>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Tel:</span>
                <a
                  href="tel:+123456789"
                  className="hover:text-white transition-colors"
                >
                  +1 (234) 567-89
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
          <p>
            &copy; {currentYear} T & E Empaques y Soluciones. Todos
            los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}