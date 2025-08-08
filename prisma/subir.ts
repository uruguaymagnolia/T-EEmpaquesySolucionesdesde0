import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();
const dataDir = path.join(__dirname, 'datos');

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

async function main() {
  console.log('Iniciando la carga de datos...');

  // Limpiar las tablas existentes
  await prisma.product.deleteMany();
  console.log('Tabla "Product" limpiada.');
  await prisma.caseStudy.deleteMany();
  console.log('Tabla "CaseStudy" limpiada.');
  await prisma.solution.deleteMany();
  console.log('Tabla "Solution" limpiada.');

  // Cargar Productos
  try {
    const productsPath = path.join(dataDir, 'product.json');
    const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
    const productsToCreate = productsData.map((p: any) => ({
      ...p,
      slug: slugify(p.name),
    }));
    await prisma.product.createMany({ data: productsToCreate });
    console.log(`${productsData.length} productos cargados exitosamente.`);
  } catch (error) {
    console.error('Error cargando productos:', error);
  }

  // Cargar Casos de Estudio
  try {
    const caseStudiesPath = path.join(dataDir, 'caseStudy.json');
    const caseStudiesData = JSON.parse(fs.readFileSync(caseStudiesPath, 'utf-8'));
    const caseStudiesToCreate = caseStudiesData.map((cs: any) => ({
        ...cs,
        slug: slugify(cs.title),
    }));
    await prisma.caseStudy.createMany({ data: caseStudiesToCreate });
    console.log(`${caseStudiesData.length} casos de estudio cargados exitosamente.`);
  } catch (error) {
    console.error('Error cargando casos de estudio:', error);
  }

  // Cargar Soluciones
  try {
    const solutionsPath = path.join(dataDir, 'solutions.json');
    const solutionsData = JSON.parse(fs.readFileSync(solutionsPath, 'utf-8'));
     const solutionsToCreate = solutionsData.map((s: any) => ({
        ...s,
        slug: slugify(s.title),
    }));
    await prisma.solution.createMany({ data: solutionsToCreate });
    console.log(`${solutionsData.length} soluciones cargadas exitosamente.`);
  } catch (error) {
    console.error('Error cargando soluciones:', error);
  }

  console.log('Carga de datos finalizada.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
