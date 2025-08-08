import { SolucionesContent } from '@/components/landing/SolucionesContent';

export default function SolucionesPage() {
  return (
    <div>
      <header className="bg-gradient-to-r from-[#1a2435] to-[#0e413b] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Soluciones a la Medida para su Empresa
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Descubra cómo podemos optimizar su proceso de empaque de principio a fin.
          </p>
        </div>
      </header>
      <SolucionesContent />
    </div>
  );
}
