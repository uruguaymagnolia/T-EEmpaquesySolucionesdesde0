
'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { motion } from 'framer-motion';
import type { Project } from '@/lib/mock-projects';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      className="h-full"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <Link href={`/proyectos/${project.slug}`} className="group block h-full">
        <Card className="h-full overflow-hidden bg-slate-800/50 border-slate-700/50 flex flex-col">
          <div className="overflow-hidden">
            <Image
              src={project.imageUrl}
              alt={project.imageAlt}
              width={600}
              height={400}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <CardHeader>
            <div className='flex justify-between items-center'>
                <CardTitle className="text-xl group-hover:text-primary transition-colors text-white">
                    {project.title}
                </CardTitle>
                <Badge variant="secondary">{project.category}</Badge>
            </div>
            <CardDescription className="text-gray-400 pt-2">{project.description}</CardDescription>
          </CardHeader>
          <CardFooter className="mt-auto">
             <Button
              variant="link"
              className="text-primary p-0 h-auto"
            >
              Saber Más
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
}
