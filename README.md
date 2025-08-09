# T & E Empaques y Soluciones

Este es el repositorio para la aplicación web de T & E Empaques y Soluciones, una plataforma moderna construida con Next.js, diseñada para mostrar el catálogo de productos, casos de éxito y soluciones de empaque de la empresa. El proyecto destaca por su interfaz dinámica, su arquitectura robusta y la integración de un asistente de contenido basado en inteligencia artificial con Google Genkit.

## Tabla de Contenidos

- [Características Principales](#características-principales)
- [Stack Tecnológico](#stack-tecnológico)
- [Guía de Inicio Rápido](#guía-de-inicio-rápido)
  - [Prerrequisitos](#prerrequisitos)
  - [Instalación](#instalación)
- [Scripts Disponibles](#scripts-disponibles)
- [Despliegue](#despliegue)
- [Licencia](#licencia)

## Características Principales

- **Páginas Dinámicas**: Renderizado del lado del servidor (SSR) para productos, soluciones y proyectos, utilizando rutas dinámicas para un rendimiento y SEO óptimos.
- **Arquitectura Híbrida**: Uso extensivo de React Server Components (RSC) para el fetching de datos con Prisma y Client Components para la interactividad, optimizando la carga de JavaScript.
- **Server Actions**: Gestión segura y eficiente de mutaciones de datos, como el envío del formulario de contacto y la generación de sugerencias del asistente de IA.
- **Asistente de Contenido con IA**: Integración con Google Genkit y el modelo de IA Gemini para sugerir ideas de contenido dinámicamente, ayudando a los administradores a enriquecer el sitio.
- **Base de Datos con Prisma**: ORM moderno para gestionar la base de datos PostgreSQL, con modelos para `Productos`, `Casos de Éxito`, `Soluciones` y `Mensajes`.
- **UI Moderna y Animada**: Interfaz de usuario construida con Tailwind CSS y componentes de Shadcn UI, enriquecida con animaciones fluidas y significativas gracias a Framer Motion.
- **PWA (Progressive Web App)**: Configurada para ser instalable en dispositivos móviles a través de un `manifest.json` y un Service Worker (`sw.js`), mejorando la experiencia del usuario.

## Stack Tecnológico

La aplicación está construida con un stack de tecnologías moderno y de alto rendimiento.

| Categoría              | Tecnología                                                               |
| ---------------------- | ------------------------------------------------------------------------ |
| **Framework**          | [Next.js](https://nextjs.org/) 15 (App Router, Turbopack)                |
| **Lenguaje**           | [TypeScript](https://www.typescriptlang.org/)                            |
| **Estilos**            | [Tailwind CSS](https://tailwindcss.com/), [Shadcn UI](https://ui.shadcn.com/), [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate) |
| **ORM / Base de Datos**| [Prisma](https://www.prisma.io/), [PostgreSQL](https://www.postgresql.org/) |
| **Formularios**        | [React Hook Form](https://react-hook-form.com/), [Zod](https://zod.dev/)     |
| **Inteligencia Artificial** | [Google Genkit](https://firebase.google.com/docs/genkit), [Gemini](https://ai.google.dev/) |
| **Animaciones**        | [Framer Motion](https://www.framer.com/motion/)                          |
| **Entorno de Desarrollo**| [Bun](https://bun.sh/) |
| **Despliegue**         | [Netlify](https://www.netlify.com/)                                      |

## Guía de Inicio Rápido

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno de desarrollo local.

### Prerrequisitos

- Asegúrate de tener [Bun](https://bun.sh/) instalado en tu sistema.

### Instalación

1.  **Clonar el Repositorio**
    ```bash
    git clone https://github.com/uruguaymagnolia/t-eempaquesysolucionesdesde0.git
    cd t-eempaquesysolucionesdesde0
    ```

2.  **Instalar Dependencias**
    ```bash
    bun install
    ```

3.  **Configurar Variables de Entorno**
    Crea un archivo `.env.local` en la raíz del proyecto copiando el archivo de ejemplo:
    ```bash
    cp .env.example .env.local
    ```
    Abre `.env.local` y añade tus propias credenciales para la base de datos y las APIs de Google.

4.  **Configurar la Base de Datos**
    Sincroniza el esquema de Prisma con tu base de datos y puebla las tablas con los datos iniciales.
    ```bash
    # Sincroniza el esquema
    bunx prisma db push

    # Puebla la base de datos con datos de ejemplo
    bunx prisma db seed
    ```
    *Nota: `bunx prisma generate` se ejecuta automáticamente después de la instalación de dependencias gracias al script `postinstall`.*

5.  **Ejecutar el Servidor de Desarrollo**
    Inicia la aplicación en modo de desarrollo.
    ```bash
    bun run dev
    ```
    La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## Scripts Disponibles

| Script       | Descripción                                                                 |
| ------------ | --------------------------------------------------------------------------- |
| `bun run dev`  | Inicia el servidor de desarrollo de Next.js con Turbopack.                  |
| `bun run build`| Compila la aplicación para producción.                                      |
| `bun run start`| Inicia un servidor de producción de Next.js.                                |
| `bun run lint` | Ejecuta ESLint para analizar el código en busca de errores y advertencias.  |
| `bun run seed` | Puebla la base de datos con los datos definidos en `prisma/seed.ts`.        |
| `bun db:export`| Exporta los datos de la base de datos a archivos JSON (ver `prisma/bajar.ts`). |

## Despliegue

Este proyecto está configurado para un despliegue continuo en **Netlify**. Cada vez que se hace un push a la rama `main`, Netlify compila y despliega automáticamente la última versión del sitio. La configuración de compilación se encuentra en el archivo `netlify.toml`.

## Licencia

Distribuido bajo la Licencia MIT. Ver `LICENSE` para más información.
