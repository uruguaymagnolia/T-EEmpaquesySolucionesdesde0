import prisma from '@/lib/prisma';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type ProjectDetailsPageProps = {
  params: {
    slug: string;
  };
};

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const caseStudy = await prisma.caseStudy.findUnique({
    where: {
      slug: params.slug,
    },
  });

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="bg-slate-900 text-white">
      <header className="relative h-[40vh] min-h-[300px] w-full">
        <Image
          src={caseStudy.imageUrl}
          alt={caseStudy.imageAlt}
          layout="fill"
          objectFit="cover"
          className="opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent" />
        <div className="container mx-auto flex h-full items-end p-4">
          <div className="relative z-10 max-w-4xl pb-8">
            <Badge
              variant="default"
              className="mb-4 bg-primary/80 backdrop-blur-sm"
            >
              {caseStudy.category}
            </Badge>
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
              {caseStudy.title}
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              {caseStudy.shortDescription}
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <Card className="border-slate-700/50 bg-slate-800/50">
              <CardHeader>
                <CardTitle className="text-3xl text-primary">
                  El Desafío
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>{caseStudy.problem}</p>
              </CardContent>
            </Card>

            <Card className="mt-8 border-slate-700/50 bg-slate-800/50">
              <CardHeader>
                <CardTitle className="text-3xl text-primary">
                  Nuestra Solución
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>{caseStudy.solution}</p>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-1">
            <Card className="sticky top-24 border-slate-700/50 bg-slate-800/50">
              <CardHeader>
                <CardTitle className="text-3xl text-primary">
                  Resultados Clave
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {(caseStudy.results || '').split(',').map((result, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-400" />
                      <span className="text-gray-300">{result.trim()}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  const caseStudies = await prisma.caseStudy.findMany({
    select: { slug: true },
  });

  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}
