
export type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  slug: string;
  category: string;
};

function slugify(text: string): string {
  return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
}

const projectEntries: Omit<Project, 'slug'>[] = [
    {
    id: '1',
    title: 'Empaque Innovador para Cosméticos',
    description: 'Desarrollo de un empaque premium que aumentó las ventas en un 30% y mejoró la percepción de la marca.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageAlt: 'Empaque de cosméticos de lujo',
    category: 'Cosméticos',
  },
  {
    id: '2',
    title: 'Solución Sostenible para Alimentos',
    description: 'Implementación de empaques 100% biodegradables que redujeron la huella de carbono del cliente en un 45%.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageAlt: 'Empaque sostenible para alimentos frescos',
    category: 'Alimentos',
  },
  {
    id: '3',
    title: 'Optimización de Empaque para Electrónica',
    description: 'Rediseño de empaques para productos electrónicos, logrando una reducción de costos del 20% y mayor protección.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageAlt: 'Empaque protector para un dispositivo electrónico',
    category: 'Electrónica',
  },
  {
    id: '4',
    title: 'Packaging para Juguetes Didácticos',
    description: 'Diseño de cajas con ventanas de acetato para una nueva línea de juguetes educativos, mejorando la visibilidad en tienda.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageAlt: 'Caja colorida para un juguete educativo',
    category: 'Juguetería',
  },
  {
    id: '5',
    title: 'Empaque Termo Contraíble para Promociones',
    description: 'Creación de packs "2x1" utilizando empaque termo contraíble para una exitosa campaña de ventas en supermercados.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageAlt: 'Dos productos agrupados con plástico termo contraíble',
    category: 'Promociones',
  },
    {
    id: '6',
    title: 'Soportes de Exhibición para Perfumería',
    description: 'Diseño de soportes a medida para una línea de fragancias de alta gama, mejorando la presentación en el punto de venta.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageAlt: 'Soporte elegante para un frasco de perfume',
    category: 'Retail',
  },
];


export const projects: Project[] = projectEntries.map(p => ({
  ...p,
  slug: slugify(p.title),
}));
