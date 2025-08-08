
export type Product = {
  id: string;
  name: string;
  category: 'Empaques para Alimentos' | 'Empaques Cosméticos' | 'Empaques Industriales';
  description: string;
  imageUrl: string;
  imageAlt: string;
  slug: string;
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

const productEntries: Omit<Product, 'slug'>[] = [
    // Empaques para Alimentos
    {
      id: 'prod-1',
      name: 'Bolsa Stand-Up Pouch para Café',
      category: 'Empaques para Alimentos',
      description: 'Bolsa con barrera de alta protecci√≥n para mantener la frescura del café, con cierre resellable.',
      imageUrl: 'https://placehold.co/600x400.png',
      imageAlt: 'Bolsa de café stand-up pouch',
    },
    {
      id: 'prod-2',
      name: 'Envase Termoformado para Ensaladas',
      category: 'Empaques para Alimentos',
      description: 'Envase de PET reciclado, transparente y resistente, ideal para ensaladas y alimentos frescos.',
      imageUrl: 'https://placehold.co/600x400.png',
      imageAlt: 'Envase para ensaladas',
    },
    {
      id: 'prod-3',
      name: 'Caja para Pizza de Cartón Corrugado',
      category: 'Empaques para Alimentos',
      description: 'Caja resistente que mantiene la temperatura y la integridad de la pizza durante el transporte.',
      imageUrl: 'https://placehold.co/600x400.png',
      imageAlt: 'Caja para pizza',
    },
    // Empaques Cosméticos
    {
      id: 'prod-4',
      name: 'Frasco de Vidrio para Crema Facial',
      category: 'Empaques Cosméticos',
      description: 'Elegante frasco de vidrio esmerilado con tapa de bambú, transmite lujo y sostenibilidad.',
      imageUrl: 'https://placehold.co/600x400.png',
      imageAlt: 'Frasco de vidrio para crema',
    },
    {
      id: 'prod-5',
      name: 'Tubo Flexible para Protector Solar',
      category: 'Empaques Cosméticos',
      description: 'Tubo de PE con alta capacidad de decoraci√≥n, f√°cil de usar y perfecto para productos en crema.',
      imageUrl: 'https://placehold.co/600x400.png',
      imageAlt: 'Tubo para protector solar',
    },
    {
      id: 'prod-6',
      name: 'Caja Plegadiza para Perfume',
      category: 'Empaques Cosméticos',
      description: 'Caja de cartulina premium con acabados metalizados y relieve para una presentaci√≥n de alta gama.',
      imageUrl: 'https://placehold.co/600x400.png',
      imageAlt: 'Caja para perfume',
    },
    // Empaques Industriales
    {
      id: 'prod-7',
      name: 'Saco de Polipropileno para Granos',
      category: 'Empaques Industriales',
      description: 'Saco tejido de alta resistencia para el almacenamiento y transporte seguro de granos y materiales a granel.',
      imageUrl: 'https://placehold.co/600x400.png',
      imageAlt: 'Saco de polipropileno',
    },
    {
      id: 'prod-8',
      name: 'Film Estirable para Paletizar',
      category: 'Empaques Industriales',
      description: 'Película estirable de alta adherencia para asegurar y proteger cargas en pallets durante el env√≠o.',
      imageUrl: 'https://placehold.co/600x400.png',
      imageAlt: 'Rollo de film para paletizar',
    },
    {
      id: 'prod-9',
      name: 'Contenedor IBC para Líquidos',
      category: 'Empaques Industriales',
      description: 'Contenedor de 1000 litros para el transporte y almacenamiento de líquidos industriales, con jaula de acero.',
      imageUrl: 'https://placehold.co/600x400.png',
      imageAlt: 'Contenedor IBC',
    },
  ];

  export const products: Product[] = productEntries.map(p => ({
      ...p,
      slug: slugify(p.name)
  }))
