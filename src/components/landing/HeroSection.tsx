import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-[#1a2435] to-[#0e413b] text-white py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Soluciones de empaque <span className="text-[#9ada34]">personalizadas para su negocio</span>
        </h1>
        <p className="max-w-3xl mx-auto mb-8 text-lg text-gray-300">
          Proveemos productos y soluciones de empaque personalizadas para artículos escolares, papelería, accesorios eléctricos, cosméticos, didácticos, mercería y más.
        </p>
        <div className="flex justify-center items-center gap-4 mb-8">
          <Link href="/contacto">
            <Button
              variant="default"
              className="bg-[#9ada34] text-[#1a2435] hover:bg-opacity-90 hover:bg-[#9ada34]"
            >
              Solicitar cotización
            </Button>
          </Link>
          <Link href="/products">
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#1a2435]"
            >
              Ver nuestros productos
            </Button>
          </Link>
        </div>
        <p className="text-sm text-gray-400">
          Soluciones de empaque confiables para empresas importadoras
        </p>
      </div>
    </section>
  );
}
