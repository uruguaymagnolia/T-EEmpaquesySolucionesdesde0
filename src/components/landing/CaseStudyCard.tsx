'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import type { CaseStudy } from '@prisma/client';

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
};

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Link href={`/proyectos/${caseStudy.slug}`} className="group block h-full">
      <motion.div
        className="h-full"
        whileHover={{ y: -8, scale: 1.03 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <Card className="h-full overflow-hidden bg-slate-800 border-slate-700/50">
          <div className="overflow-hidden">
            <Image
              src={caseStudy.imageUrl}
              alt={caseStudy.imageAlt}
              width={600}
              height={400}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
              data-ai-hint={caseStudy.dataAiHint ?? 'case study image'}
            />
          </div>
          <CardHeader>
            <CardTitle className="text-xl group-hover:text-primary transition-colors text-white">
              {caseStudy.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">{caseStudy.shortDescription}</p>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
}
