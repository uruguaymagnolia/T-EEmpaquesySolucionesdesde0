
import type { LucideIcon } from 'lucide-react';
import { Package, ShieldCheck, Lightbulb, TrendingUp } from 'lucide-react';

export type Solution = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const solutions: Solution[] = [
  {
    title: 'Diseño de Empaque a Medida',
    description: 'Creamos soluciones de empaque únicas que se adaptan perfectamente a su producto y fortalecen su marca.',
    icon: Package,
  },
  {
    title: 'Optimización de Costos',
    description: 'Analizamos sus procesos de empaque actuales para identificar oportunidades de ahorro sin sacrificar calidad.',
    icon: TrendingUp,
  },
  {
    title: 'Materiales Sustentables',
    description: 'Ofrecemos una amplia gama de materiales ecológicos para ayudarle a cumplir sus metas de sostenibilidad.',
    icon: ShieldCheck,
  },
  {
    title: 'Prototipado Rápido',
    description: 'Visualice y pruebe su empaque antes de la producción en masa con nuestro servicio de prototipado ágil.',
    icon: Lightbulb,
  },
];
