import Link from 'next/link';
import prisma from '@/lib/prisma';
import { CaseStudyCard } from '@/components/landing/CaseStudyCard';

export default async function ProjectsPage() {
  const caseStudies = await prisma.caseStudy.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div className="bg-slate-900">
      <header className="bg-gradient-to-r from-[#1a2435] to-[#0e413b] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Casos de Éxito</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Descubra cómo hemos ayudado a nuestros clientes a alcanzar sus
            metas con soluciones de empaque innovadoras y efectivas.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} caseStudy={study} />
          ))}
        </div>
      </main>
    </div>
  );
}
