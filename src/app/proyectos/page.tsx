
'use server';
import type { CaseStudy } from '@prisma/client';
import { getCaseStudies } from './actions';
import { ProjectsPageContent } from './content';

export default async function ProjectsPage() {
  const caseStudies: CaseStudy[] = await getCaseStudies();

  return <ProjectsPageContent caseStudies={caseStudies} />;
}
