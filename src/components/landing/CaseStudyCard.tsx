'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { CaseStudy } from '@/lib/mock-case-studies';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
};

const MotionCard = motion(Card);

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Link href={`/proyectos/${caseStudy.slug}`} className="group block h-full">
      <MotionCard
        className="h-full overflow-hidden"
        whileHover={{ y: -8, scale: 1.03 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <div className="overflow-hidden">
          <Image
            src={caseStudy.imageUrl}
            alt={caseStudy.imageAlt}
            width={600}
            height={400}
            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
            data-ai-hint="case study image"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-xl group-hover:text-primary transition-colors">
            {caseStudy.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{caseStudy.shortDescription}</p>
        </CardContent>
      </MotionCard>
    </Link>
  );
}
