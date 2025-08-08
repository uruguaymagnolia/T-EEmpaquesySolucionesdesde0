
export type CaseStudy = {
  id: string;
  title: string;
  shortDescription: string;
  imageUrl: string;
  imageAlt: string;
  slug: string;
  category: string;
  problem: string;
  solution: string;
  results: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'Empaque Innovador para Cosméticos',
    shortDescription: 'Desarrollo de un empaque premium que aumentó las ventas en un 30% y mejoró la percepción de la marca.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageAlt: 'Empaque de cosméticos',
    slug: 'empaque-cosmeticos-premium',
    category: 'Cosméticos',
    problem: 'El cliente necesitaba un empaque que reflejara la alta calidad de su nueva línea de productos de lujo.',
    solution: 'Diseñamos una caja rígida con acabados premium, un cierre magnético y una cuna interna a medida para el producto.',
    results: 'Aumento del 30% en ventas y mejora significativa en la percepción de la marca como un producto de lujo.'
  },
  {
    id: '2',
    title: 'Solución Sostenible para Alimentos',
    shortDescription: 'Implementación de empaques 100% biodegradables que redujeron la huella de carbono del cliente en un 45%.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageAlt: 'Empaque sostenible para alimentos',
    slug: 'solucion-sostenible-alimentos',
    category: 'Alimentos',
    problem: 'La marca buscaba reducir su impacto ambiental y atraer a consumidores conscientes de la sostenibilidad.',
    solution: 'Migramos sus empaques plásticos a una solución de bioplástico compostable con tintas a base de agua.',
    results: 'Reducción del 45% en la huella de carbono y un aumento del 20% en la base de clientes jóvenes.'
  },
  {
    id: '3',
    title: 'Optimización de Empaque para Electrónica',
    shortDescription: 'Rediseño de empaques para productos electrónicos, logrando una reducción de costos del 20% y mayor protección.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageAlt: 'Empaque para productos electrónicos',
    slug: 'optimizacion-empaque-electronica',
    category: 'Electrónica',
    problem: 'Los costos de empaque eran elevados y los productos sufrían daños durante el transporte.',
    solution: 'Creamos un diseño de caja optimizado que utiliza menos material y una cuna interna de cartón corrugado para una mayor protección.',
    results: 'Reducción de costos del 20% y disminución de los daños en transporte en un 90%.'
  },
];
