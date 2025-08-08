'use client';
import { useEffect, useState } from 'react';
import type { CaseStudy } from '@prisma/client';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getCaseStudyBySlug } from '../actions';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type ProjectDetailsPageProps = {
  params: {
    slug: string;
  };
};

export default function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCaseStudy = async () => {
      setLoading(true);
      const study = await getCaseStudyBySlug(params.slug);
      if (!study) {
        notFound();
      }
      setCaseStudy(study);
      setLoading(false);
    };

    fetchCaseStudy();
  }, [params.slug]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-900">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-dashed border-primary"></div>
      </div>
    );
  }

  if (!caseStudy) {
    return notFound();
  }

  const results = (caseStudy.results || '')
    .split(',')
    .map((r) => r.trim())
    .filter(Boolean);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="bg-slate-900 text-white"
    >
      <header className="relative h-[50vh] min-h-[350px] w-full">
        <div className="absolute inset-0">
          <Image
            src={caseStudy.imageUrl}
            alt={caseStudy.imageAlt}
            fill
            className="object-cover opacity-30"
            priority
            data-ai-hint={caseStudy.dataAiHint ?? 'project image'}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto flex h-full flex-col justify-end p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl pb-12"
          >
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
          </motion.div>
        </div>
      </header>

      <main className="container mx-auto max-w-6xl p-4 py-16">
        <div className="mb-8">
            <Link href="/proyectos">
                <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver a Proyectos
                </Button>
            </Link>
        </div>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8 lg:col-span-2"
          >
            <Card className="border-slate-700/50 bg-slate-800/50">
              <CardHeader>
                <CardTitle className="text-3xl text-primary">
                  El Desafío
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 prose prose-invert max-w-none">
                <p>{caseStudy.problem}</p>
              </CardContent>
            </Card>

            <Card className="border-slate-700/50 bg-slate-800/50">
              <CardHeader>
                <CardTitle className="text-3xl text-primary">
                  Nuestra Solución
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 prose prose-invert max-w-none">
                <p>{caseStudy.solution}</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24">
              <Card className="border-slate-700/50 bg-slate-800/50">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    Resultados Clave
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {results.map((result, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-400" />
                        <span className="text-gray-300">{result}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </main>
    </motion.div>
  );
}
