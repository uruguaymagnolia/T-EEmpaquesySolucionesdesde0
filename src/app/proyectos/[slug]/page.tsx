'use server';

import { notFound } from 'next/navigation';
import { getCaseStudyBySlug } from '../actions';
import { ProjectDetailsClientPage } from './client-page';

type ProjectDetailsPageProps = {
  params: {
    slug: string;
  };
};

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const caseStudy = await getCaseStudyBySlug(params.slug);

  if (!caseStudy) {
    notFound();
  }

  return <ProjectDetailsClientPage caseStudy={caseStudy} />;
}
