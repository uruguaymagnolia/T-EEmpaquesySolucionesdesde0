
# Prompt Integral de Optimización y Modernización del Proyecto

## Objetivo General

El objetivo de este prompt es realizar una optimización integral de la aplicación web actual, enfocándonos en tres pilares clave: **rendimiento web de élite**, una **experiencia de usuario (UX) moderna y fluida**, y la **calidad y mantenibilidad del código**. Se busca mejorar drásticamente las métricas de Core Web Vitals (LCP, TBT, CLS), asegurar un diseño perfectamente responsivo y elevar la estética visual con animaciones sutiles y profesionales.

---

### 1. Optimización de Rendimiento Web (Core Web Vitals)

#### **1.1. Largest Contentful Paint (LCP) - Renderizado Prioritario**

El objetivo es reducir el LCP por debajo de los 2.5 segundos.

*   **Acción 1: Optimización de la Carga de Fuentes.**
    *   **Archivo:** `src/app/layout.tsx`
    *   **Verificación:** Asegúrate de que la fuente `Inter` importada desde `next/font/google` tenga la propiedad `display: 'swap'`. Esto es crucial para que el navegador muestre el texto con una fuente de sistema mientras se carga la fuente personalizada, evitando el bloqueo del renderizado.

*   **Acción 2: Eliminación de Animaciones Bloqueantes.**
    *   **Archivo:** `src/components/landing/HeroSection.tsx`
    *   **Directriz:** El texto principal (título `<h1>` y párrafo `<p>`) debe ser visible de inmediato. Elimina cualquier componente de `framer-motion` (`StaggerContainer`, `StaggerItem`, `motion.div`, etc.) que envuelva a estos elementos textuales. Deben ser renderizados como etiquetas JSX estándar (`<h1>`, `<p>`) sin ninguna propiedad de animación (`initial`, `animate`, `variants`, `transition`).
    *   **Nota:** Las animaciones en elementos no críticos para el LCP, como los botones o las estrellas de calificación, pueden permanecer.

*   **Acción 3: Priorización de la Imagen del Héroe (si aplica).**
    *   Si la sección del Héroe contuviera una imagen principal, asegúrate de que el componente `next/image` tenga la propiedad `priority={true}` para indicarle a Next.js que la cargue de manera prioritaria.

#### **1.2. Total Blocking Time (TBT) - Minimizar Trabajo del Hilo Principal**

El objetivo es reducir el TBT, asegurando que la página sea interactiva rápidamente.

*   **Acción 1: Carga Diferida (Lazy Loading) de Componentes.**
    *   **Archivo:** `src/components/common/ClientSectionsWrapper.tsx`
    *   **Directriz:** Identifica los componentes pesados que no son visibles en la carga inicial (below-the-fold), como `TestimonialsSection`, `FAQSection`, `ContactFormSection` y especialmente `MapSection`.
    *   **Implementación:** Utiliza `next/dynamic` para importarlos de forma diferida. Para el mapa, que depende de APIs de cliente, asegúrate de usar `ssr: false`.

*   **Acción 2: Placeholders para Carga Diferida.**
    *   **Archivo:** `src/components/common/ClientSectionsWrapper.tsx`
    *   **Directriz:** Para cada componente cargado con `next/dynamic`, provee un `loading` placeholder. Utiliza el componente `Skeleton` de `shadcn/ui` para mostrar una representación visual del componente mientras se carga. Esto mejora la UX y previene el Cumulative Layout Shift (CLS).

#### **1.3. Cumulative Layout Shift (CLS) - Estabilidad Visual**

El objetivo es mantener un CLS cercano a cero.

*   **Acción 1:** Asegúrate de que todas las imágenes (`next/image`) tengan definidas sus propiedades `width` y `height` para que el navegador pueda reservar el espacio adecuado antes de que se carguen.
*   **Acción 2:** Confirma que el uso de Skeletons para los componentes de carga diferida coincide en tamaño con el componente final para evitar saltos en el layout.

---

### 2. Diseño Responsivo y Modernización de la UI/UX

*   **Acción 1: Auditoría y Refinamiento Responsivo.**
    *   **Directriz:** Revisa cada página (`/`, `/productos`, `/proyectos`, `/soluciones`, `/contacto`, etc.) en los tres principales breakpoints: móvil, tablet y escritorio.
    *   **Puntos a verificar:** Consistencia en márgenes y paddings, legibilidad del texto, espaciado de elementos de la cuadrícula (grid) y comportamiento correcto de los componentes interactivos como el menú de navegación.

*   **Acción 2: Modernización de Animaciones.**
    *   **Directriz:** Las animaciones deben ser sutiles y funcionales, mejorando la experiencia sin afectar el rendimiento.
    *   **Componentes:** Revisa las animaciones en `ScrollStaggerContainer`, `ScrollReveal`, y las interacciones `whileHover` en tarjetas y botones.
    *   **Implementación:** Utiliza transiciones de tipo `spring` para dar una sensación más natural y física a las interacciones. Asegúrate de que las animaciones de entrada (`initial`, `animate`) se activen solo cuando el componente entra en el viewport (`whileInView`) para no afectar la carga inicial.

*   **Acción 3: Integración de Estilos y Consistencia del Tema.**
    *   **Archivos:** `tailwind.config.ts` y `src/app/globals.css`.
    *   **Directriz:** El diseño debe ser impulsado por el tema definido en `globals.css` a través de variables CSS HSL. Evita el uso de colores "mágicos" o hardcodeados en los componentes.
    *   **Verificación:**
        *   En `globals.css`, asegúrate de que las variables `--primary`, `--secondary`, `--background`, `--foreground`, `--accent`, etc., definan la paleta de colores principal de la marca.
        *   En `tailwind.config.ts`, confirma que la sección `colors` está configurada para usar estas variables CSS (`'hsl(var(--primary))'`).
        *   En los componentes (`.tsx`), utiliza las clases semánticas de Tailwind (ej. `bg-primary`, `text-foreground`) en lugar de clases como `bg-green-500` o `text-slate-900`. Esto asegura que si se cambia el tema en `globals.css`, todo el sitio se actualiza de manera consistente.
