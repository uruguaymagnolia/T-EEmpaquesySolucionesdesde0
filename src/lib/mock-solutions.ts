import type { LucideIcon } from 'lucide-react';
import { Gift, Sparkles, PackageCheck, Shrink, Flame, PackagePlus, Square } from 'lucide-react';
import { slugify } from '@/lib/utils';

export type Solution = {
  title: string;
  description: string;
  icon: LucideIcon;
  detailedDescription: string;
  keyFeatures: string[];
  slug: string;
};

const solutionEntries: Omit<Solution, 'slug'>[] = [
  {
    title: "Cunas Contenedoras a Medida",
    description: "Diseño y fabricación de cunas para estuches de obsequio, asegurando una presentación y protección impecables.",
    icon: Gift,
    detailedDescription: 'Creamos soportes internos termoformados que se ajustan perfectamente a la forma de sus productos. Esto no solo brinda una presentación elegante, sino que también ofrece la máxima protección durante el transporte, minimizando el riesgo de daños y mejorando la experiencia de unboxing para el cliente final.',
    keyFeatures: ['Diseño 3D preciso', 'Materiales de alta calidad', 'Acabados personalizables', 'Protección superior'],
  },
  {
    title: "Soportes para Cosméticos",
    description: "Creamos soportes a medida para cajas de perfumes y cosméticos, realzando el valor y la estética de su producto.",
    icon: Sparkles,
    detailedDescription: 'Realzamos la presentación de sus cosméticos con soportes diseñados a medida. Estos soportes no solo organizan y exhiben el producto de forma atractiva, sino que también comunican lujo y calidad, elementos clave en la industria de la belleza para captar la atención del consumidor.',
    keyFeatures: ['Diseño elegante y funcional', 'Mejora la exhibición en tienda', 'Amplia gama de materiales', 'Refuerza la identidad de marca'],
  },
  {
    title: "Empaques Blister",
    description: "Desarrollamos empaques tipo blister para una excelente visibilidad y seguridad del producto en el punto de venta.",
    icon: PackageCheck,
    detailedDescription: 'El empaque tipo blister es ideal para una amplia gama de productos, desde artículos de ferretería hasta productos farmacéuticos. Ofrece una barrera protectora contra la humedad y el polvo, al mismo tiempo que permite una visibilidad clara del producto, lo que aumenta la confianza del consumidor y facilita la decisión de compra.',
    keyFeatures: ['Alta visibilidad del producto', 'Protección contra manipulación', 'Adaptable a cualquier forma', 'Optimizado para colgar en exhibidores'],
  },
  {
    title: "Embalaje Skin Pack",
    description: "Empaque al vacío que se adhiere a su producto, ofreciendo una presentación atractiva y altamente segura.",
    icon: Shrink,
    detailedDescription: 'El sistema Skin Pack utiliza una película plástica que se sella al vacío sobre una base de cartón, creando un empaque seguro y visualmente impactante. Es una solución perfecta para productos con formas irregulares o para kits que contienen múltiples piezas, ya que mantiene todo en su lugar y lo protege eficazmente.',
    keyFeatures: ['Fijación segura de productos', 'Presentación limpia y profesional', 'Ideal para kits y multipacks', 'Reduce el uso de material de empaque'],
  },
  {
    title: "Empaque Termo Contraíble",
    description: "Soluciones de embalaje con película termo contraíble para agrupar, proteger y promocionar sus productos.",
    icon: Flame,
    detailedDescription: 'Utilizamos película termo contraíble de alta calidad para agrupar productos, crear packs promocionales o simplemente añadir una capa extra de protección y brillo. Este método es versátil, económico y eficiente, adaptándose a una gran variedad de formas y tamaños de productos para un acabado profesional.',
    keyFeatures: ['Agrupación de productos para ofertas', 'Protección contra polvo y rayaduras', 'Acabado brillante y profesional', 'Aplicación rápida y eficiente'],
  },
  {
    title: "Armado de Promociones y Kits",
    description: "Servicio de empaquetado de kits y ofertas especiales para sus campañas de marketing y ventas estacionales.",
    icon: PackagePlus,
    detailedDescription: 'Nos encargamos del proceso completo de armado de sus promociones, desde la recepción de los productos hasta el empaquetado final. Nuestro servicio de maquila le permite escalar su producción rápidamente para campañas estacionales, lanzamientos o ofertas especiales, asegurando una entrega a tiempo y con la máxima calidad.',
    keyFeatures: ['Gestión logística completa', 'Flexibilidad y escalabilidad', 'Control de calidad riguroso', 'Optimización de tiempos y costos'],
  },
  {
    title: "Armado de Cajas y Ventanas",
    description: "Servicio de armado de cajas y colocación de ventanas de acetato para una presentación de producto superior.",
    icon: Square,
    detailedDescription: 'Un empaque bien armado es clave para la percepción de calidad. Ofrecemos el servicio de armado de cajas de cartón y la colocación precisa de ventanas de acetato. Esto permite a los consumidores ver el producto interior, combinando la protección del cartón con la visibilidad del plástico, ideal para juguetes, regalos y electrónicos.',
    keyFeatures: ['Acabado manual de alta calidad', 'Ventanas de acetato claras y resistentes', 'Mejora la experiencia en el punto de venta', 'Asegura la integridad estructural del empaque'],
  },
];


export const solutions: Solution[] = solutionEntries.map(s => ({
  ...s,
  slug: slugify(s.title),
}));