
'use server';
import type { CaseStudy } from '@prisma/client';
import { getCaseStudies } from './actions';
import { ProjectsPageContent } from './content';
import ProyectosHero from '@/components/heroes/ProyectosHero';

export default async function ProjectsPage() {
  const caseStudies: CaseStudy[] = await getCaseStudies();

  return (
    <>
      <ProyectosHero />
      <ProjectsPageContent caseStudies={caseStudies} />
    </>
  );
}
