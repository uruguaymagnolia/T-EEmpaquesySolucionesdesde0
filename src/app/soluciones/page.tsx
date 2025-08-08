import { ServicesSection } from '@/components/landing/ServicesSection';
import prisma from '@/lib/prisma';
import type { Solution } from '@prisma/client';

export default async function SolucionesPage() {
  const solutions: Solution[] = await prisma.solution.findMany({
    orderBy: {
      createdAt: 'asc',
    },
  });

  return (
    <div className="bg-slate-950">
      <header className="bg-gradient-to-r from-[#1a2435] to-[#0e413b] text-white py-16 md:py-24">
        <div
          className="container mx-auto px-4 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold">Nuestras Soluciones</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Descubra cómo podemos optimizar su proceso de empaque de principio a
            fin con nuestra gama de servicios especializados.
          </p>
        </div>
      </header>
      <main>
        <ServicesSection solutions={solutions} />
      </main>
    </div>
  );
}
