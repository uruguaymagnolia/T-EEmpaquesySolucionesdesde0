import type { LucideIcon } from 'lucide-react';
import { Gift, Sparkles, PackageCheck, Shrink, Flame, PackagePlus, Square } from 'lucide-react';

export type Solution = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const solutions: Solution[] = [
  {
    title: "Cunas Contenedoras a Medida",
    description: "Diseño y fabricación de cunas para estuches de obsequio, asegurando una presentación y protección impecables.",
    icon: Gift,
  },
  {
    title: "Soportes para Cosméticos",
    description: "Creamos soportes a medida para cajas de perfumes y cosméticos, realzando el valor y la estética de su producto.",
    icon: Sparkles,
  },
  {
    title: "Empaques Blister",
    description: "Desarrollamos empaques tipo blister para una excelente visibilidad y seguridad del producto en el punto de venta.",
    icon: PackageCheck,
  },
  {
    title: "Embalaje Skin Pack",
    description: "Empaque al vacío que se adhiere a su producto, ofreciendo una presentación atractiva y altamente segura.",
    icon: Shrink,
  },
  {
    title: "Empaque Termo Contraíble",
    description: "Soluciones de embalaje con película termo contraíble para agrupar, proteger y promocionar sus productos.",
    icon: Flame,
  },
  {
    title: "Armado de Promociones y Kits",
    description: "Servicio de empaquetado de kits y ofertas especiales para sus campañas de marketing y ventas estacionales.",
    icon: PackagePlus,
  },
  {
    title: "Armado de Cajas y Ventanas",
    description: "Servicio de armado de cajas y colocación de ventanas de acetato para una presentación de producto superior.",
    icon: Square,
  },
];
