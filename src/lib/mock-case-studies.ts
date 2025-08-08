
export type CaseStudy = {
  id: string;
  title: string;
  shortDescription: string;
  imageUrl: string;
  imageAlt: string;
  slug: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'Empaque Innovador para Cosméticos',
    shortDescription: 'Desarrollo de un empaque premium que aumentó las ventas en un 30% y mejoró la percepción de la marca.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageAlt: 'Empaque de cosméticos',
    slug: 'empaque-cosmeticos-premium',
  },
  {
    id: '2',
    title: 'Solución Sostenible para Alimentos',
    shortDescription: 'Implementación de empaques 100% biodegradables que redujeron la huella de carbono del cliente en un 45%.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageAlt: 'Empaque sostenible para alimentos',
    slug: 'solucion-sostenible-alimentos',
  },
  {
    id: '3',
    title: 'Optimización de Empaque para Electrónica',
    shortDescription: 'Rediseño de empaques para productos electrónicos, logrando una reducción de costos del 20% y mayor protección.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageAlt: 'Empaque para productos electrónicos',
    slug: 'optimizacion-empaque-electronica',
  },
];
