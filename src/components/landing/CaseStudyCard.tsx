
import Link from 'next/link';
import Image from 'next/image';
import type { CaseStudy } from '@/lib/mock-case-studies';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
};

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Link href={`/proyectos/${caseStudy.slug}`} className="group block">
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <Image
          src={caseStudy.imageUrl}
          alt={caseStudy.imageAlt}
          width={600}
          height={400}
          className="w-full h-auto object-cover"
          data-ai-hint="case study image"
        />
        <CardHeader>
          <CardTitle className="text-xl group-hover:text-primary transition-colors">
            {caseStudy.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{caseStudy.shortDescription}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
