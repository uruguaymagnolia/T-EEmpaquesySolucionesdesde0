# T & E Empaques y Soluciones - Technical Blueprint

## 🧬 Project DNA
Content Platform / Business Landing Page (Showcase for industrial packaging solutions, products, and case studies)

## 🛠️ Stack Tecnológico
- **Framework:** Next.js 15 (App Router, Turbopack)
- **Lenguaje:** TypeScript (Strict)
- **Base de Datos:** PostgreSQL (managed via Prisma ORM)
- **Autenticación:** No implementada (Preparado para Firebase/Genkit)
- **UI/UX:** Tailwind CSS + Shadcn UI + Radix UI

## 🎯 Feature Set
- [x] **Páginas Dinámicas:** Renderizado del lado del servidor (SSR) para catálogos de productos, soluciones y casos de éxito.
- [x] **Arquitectura Híbrida:** Uso optimizado de React Server Components (RSC) para fetching y Client Components para interactividad.
- [x] **Asistente de Contenido con IA:** Integración con Google Genkit y Gemini para sugerencias creativas de contenido.
- [x] **Server Actions:** Gestión segura de formularios de contacto y lógica de negocio en el servidor.
- [x] **PWA (Progressive Web App):** Configuración completa para instalación en dispositivos móviles y soporte offline básico.
- [x] **Visualización de Datos:** Integración de Recharts para posibles dashboards o métricas.
- [x] **Animaciones Avanzadas:** Experiencia de usuario enriquecida con Framer Motion, partículas personalizadas y efectos de scroll.

## 💾 Data Model (TypeScript / Prisma)

```typescript
// Product Entity
interface Product {
  id: string;          // cuid()
  name: string;        // Unique
  slug: string;        // Unique
  description: string;
  imageUrl: string;
  imageAlt: string;
  dataAiHint?: string; // Metadata for AI generation
  category: string;
}

// Case Study Entity
interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  imageUrl: string;
  imageAlt: string;
  problem: string;
  solution: string;
  results: string;
  category: string;
}

// Contact Message
interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

// Solution Entity
interface Solution {
  id: string;
  title: string;
  slug: string;
  description: string;
  detailedDescription: string;
  icon: string;
  keyFeatures: string[]; // Array of strings
}
```

## 🎨 UI/UX Design System
- **Tone:** Profesional, Tecnológico y Minimalista.
- **Typography:** Inter (Variable Font).
- **Special Components:**
  - **Framer Motion:** Para transiciones fluidas y Scroll Reveal.
  - **Custom Particles:** Fondo interactivo dinámico.
  - **MegaMenu:** Navegación compleja para catálogo extenso.
  - **Lucide React:** Set de iconos consistente.

## 🚨 Best Practices Detectadas
- **Next.js 15 App Router:** Estructura moderna de directorios y ruteo.
- **Strict TypeScript:** Tipado fuerte en todo el proyecto.
- **Zod Validation:** Validación robusta de esquemas para entradas de usuario y AI.
- **Prisma Accelerate:** Configurado para optimización de consultas a BD.
- **Middleware:** Redirección automática a HTTPS en producción.
- **Multi-Cloud Deployment:** Configuraciones listas para Netlify (`netlify.toml`) y Firebase App Hosting (`apphosting.yaml`).
- **PWA Ready:** Manifest y Service Worker configurados.

## ⚠️ Technical Debt / Issues Detectados
- **Linting:** Existen advertencias y errores de variables no utilizadas en componentes clave (`page.tsx`, `footer.tsx`).
- **Type Checking:** Inconsistencias detectadas en tipos de `framer-motion` (Variants) y referencias a módulos faltantes (`@/lib/mock-projects`).
