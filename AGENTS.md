# Manual de Agente para el Proyecto T&E Empaques y Soluciones

Este documento proporciona el contexto esencial para que los agentes de IA, como Jules, comprendan y trabajen eficazmente en este repositorio.

## 1. Descripción General del Proyecto

* **Propósito:** Aplicación web moderna para "T&E Empaques y Soluciones", una empresa que ofrece soluciones de empaque personalizadas.
* **Funcionalidad Principal:** Presentar un catálogo de productos y servicios, mostrar casos de éxito (proyectos), y facilitar el contacto a través de formularios.
* **Audiencia Objetivo:** Empresas que buscan proveedores de soluciones de empaque.

## 2. Stack Tecnológico Principal

* **Framework:** Next.js 15+ con App Router.
* **Lenguaje:** TypeScript.
* **Runtime y Herramientas:** Bun (usado como runtime, gestor de paquetes y ejecutor de tareas).
* **Base de Datos:** PostgreSQL.
* **ORM:** Prisma.
* **Estilos:** Tailwind CSS con `shadcn/ui` para los componentes base.
* **Animaciones:** Framer Motion.
* **Linting y Formato:** ESLint y Prettier.

## 3. Estructura de Directorios Clave

* `/src/app`: Contiene las rutas de la aplicación siguiendo la convención del App Router. Las carpetas definen las URL y los archivos `page.tsx` son los puntos de entrada.
* `/src/app/actions`: Server Actions de Next.js para mutaciones de datos y comunicación con la IA.
* `/src/components`: Componentes reutilizables de React. Se subdividen en `ui` (componentes genéricos de `shadcn/ui`), `landing` (componentes para la página principal), `sections` (secciones completas de una página), etc.
* `/src/lib`: Lógica de soporte, utilidades (`utils.ts`), conexión a la base de datos (`prisma.ts`) y datos estáticos/mock.
* `/src/hooks`: Hooks personalizados de React, como `use-toast`.
* `/prisma`: Contiene el esquema de la base de datos (`schema.prisma`).

## 4. Comandos Esenciales del Proyecto

Todos los comandos deben ejecutarse utilizando `bun`.

* **Iniciar el servidor de desarrollo:** `bun run dev`
* **Construir para producción:** `bun run build`
* **Ejecutar el servidor de producción:** `bun run start`
* **Ejecutar ESLint para análisis de código:** `bun eslint . --ext .js,.jsx,.ts,.tsx`
* **Formatear el código con Prettier:** (Añadir si existe un script) `bun run format`
* **Generar el cliente de Prisma:** `bun prisma generate`
* **Aplicar migraciones de Prisma:** `bun prisma db push`

## 5. Guía de Contribución para el Agente

Al generar o modificar código, sigue estas directrices:

* **Componentes:** Los nuevos componentes deben ser 'Client Components' (`'use client'`) solo si requieren interactividad o hooks de cliente. Prioriza los 'Server Components' para el fetching de datos y la renderización estática.
* **Estilos:** Utiliza las clases de Tailwind CSS y los componentes de `shadcn/ui` existentes. No escribas CSS personalizado a menos que sea estrictamente necesario.
* **Server Actions:** Para cualquier mutación de datos (ej. enviar un formulario), utiliza Server Actions definidas en `/src/app/actions`. No crees APIs de ruta tradicionales para esto.
* **Pruebas:** Al añadir pruebas, utiliza Jest y React Testing Library. Las pruebas deben ser específicas para la funcionalidad añadida.
* **Commits:** Los mensajes de commit deben seguir la especificación de Commits Convencionales (ej. `feat:`, `fix:`, `docs:`).

## 6. Configuración del Entorno

* Las dependencias del proyecto se instalan ejecutando `bun install`.
* Las variables de entorno se gestionan en un archivo `.env` (no incluido en el repositorio). Un archivo `.env.example` debe listar las variables requeridas, como `DATABASE_URL` y `NEXT_PUBLIC_Maps_API_KEY`.