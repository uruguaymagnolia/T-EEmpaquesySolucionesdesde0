'use server';

import prisma from '@/lib/prisma';
import type { CaseStudy } from '@prisma/client';

export async function getCaseStudies(): Promise<CaseStudy[]> {
  try {
    const caseStudies = await prisma.caseStudy.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return caseStudies;
  } catch (error) {
    console.error('Error fetching case studies:', error);
    return [];
  }
}

export async function getCaseStudyBySlug(
  slug: string
): Promise<CaseStudy | null> {
  try {
    const caseStudy = await prisma.caseStudy.findUnique({
      where: {
        slug: slug,
      },
    });
    return caseStudy;
  } catch (error) {
    console.error(`Error fetching case study with slug ${slug}:`, error);
    return null;
  }
}
