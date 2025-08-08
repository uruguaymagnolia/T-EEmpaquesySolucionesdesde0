import Link from 'next/link';
import { Logo } from '@/components/logo';

export function Header() {
  return (
    <header className="bg-[#1a2435] text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <Logo />
        <nav>
          <ul className="flex items-center space-x-6">
            <li>
              <Link href="/" className="hover:text-gray-300 transition-colors">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/soluciones" className="hover:text-gray-300 transition-colors">
                Soluciones
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-gray-300 transition-colors">
                Productos
              </Link>
            </li>
            <li>
              <Link href="/proyectos" className="hover:text-gray-300 transition-colors">
                Proyectos
              </Link>
            </li>
            <li>
              <Link href="/preguntas-frecuentes" className="hover:text-gray-300 transition-colors">
                Preguntas Frecuentes
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-gray-300 transition-colors">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
