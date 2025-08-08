import type { LucideIcon } from 'lucide-react';
import { Package, ShieldCheck, Lightbulb, TrendingUp } from 'lucide-react';

export type Solution = {
  title: string;
  description: string;
  icon: LucideIcon;
  detailedDescription: string;
  keyFeatures: string[];
};

export const solutions: Solution[] = [
  {
    title: 'Diseño de Empaque a Medida',
    description: 'Creamos soluciones de empaque únicas que se adaptan perfectamente a su producto y fortalecen su marca.',
    icon: Package,
    detailedDescription: 'Nuestro equipo de diseñadores trabaja de la mano con usted para crear un empaque que no solo proteja su producto, sino que también comunique los valores de su marca y atraiga a los consumidores en el punto de venta. Desde la conceptualización hasta el diseño 3D, nos aseguramos de que cada detalle sea perfecto.',
    keyFeatures: ['Análisis de mercado', 'Diseño estructural', 'Selección de materiales', 'Branding y diseño gráfico'],
  },
  {
    title: 'Optimización de Costos',
    description: 'Analizamos sus procesos de empaque actuales para identificar oportunidades de ahorro sin sacrificar calidad.',
    icon: TrendingUp,
    detailedDescription: 'Realizamos una auditoría completa de su línea de empaque para encontrar eficiencias. Optimizamos el uso de materiales, reducimos el desperdicio y mejoramos la logística para disminuir sus costos operativos y aumentar su rentabilidad, manteniendo siempre la integridad y calidad del empaque.',
    keyFeatures: ['Auditoría de procesos', 'Rediseño para eficiencia', 'Negociación con proveedores', 'Logística de empaque'],
  },
  {
    title: 'Materiales Sustentables',
    description: 'Ofrecemos una amplia gama de materiales ecológicos para ayudarle a cumplir sus metas de sostenibilidad.',
    icon: ShieldCheck,
    detailedDescription: 'Le ayudamos a hacer la transición hacia un futuro más verde. Ofrecemos acceso a los últimos materiales reciclados, biodegradables y compostables del mercado, asegurando que su empaque sea tan amigable con el planeta como lo es con su producto, sin comprometer la protección o la estética.',
    keyFeatures: ['Catálogo de materiales ecológicos', 'Certificaciones de sostenibilidad', 'Análisis de ciclo de vida', 'Cumplimiento de normativas'],
  },
  {
    title: 'Prototipado Rápido',
    description: 'Visualice y pruebe su empaque antes de la producción en masa con nuestro servicio de prototipado ágil.',
    icon: Lightbulb,
    detailedDescription: 'No deje nada al azar. Con nuestro servicio de prototipado rápido, puede tener muestras físicas de su empaque en cuestión de días. Esto le permite realizar pruebas de ajuste, funcionalidad y diseño, asegurando que el producto final sea exactamente lo que necesita antes de invertir en una producción a gran escala.',
    keyFeatures: ['Modelado 3D', 'Muestras físicas funcionales', 'Pruebas de resistencia y ajuste', 'Iteraciones de diseño rápidas'],
  },
];
