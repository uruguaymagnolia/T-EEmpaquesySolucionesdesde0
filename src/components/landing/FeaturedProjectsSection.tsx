
import Link from 'next/link';
import { caseStudies } from '@/lib/mock-case-studies';
import { CaseStudyCard } from './CaseStudyCard';
import { Button } from '@/components/ui/button';

export function FeaturedProjectsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          Casos de Éxito
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Estamos orgullosos del impacto que hemos generado para nuestros clientes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.slice(0, 3).map((study) => (
            <CaseStudyCard key={study.id} caseStudy={study} />
          ))}
        </div>
        <div className="text-center">
          <Link href="/proyectos">
            <Button variant="outline">Ver todos los proyectos</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
