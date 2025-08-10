
import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

// Tipos para los datos de los archivos JSON
type ProductData = {
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  dataAiHint?: string;
};

type CaseStudyData = {
  title: string;
  shortDescription: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  problem: string;
  solution: string;
  results: string;
  dataAiHint?: string;
};

type User = {
  id: string;
  username: string;
  password?: string;
  avatarUrl: string;
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

async function main() {
  console.log(`Start seeding ...`);

  // Cargar datos desde los archivos JSON
  const products: ProductData[] = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'data', 'products.json'), 'utf-8')
  );
  const caseStudies: CaseStudyData[] = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'data', 'caseStudies.json'), 'utf-8')
  );
  const users: User[] = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'data', 'users.json'), 'utf-8')
  );

  // Limpiar datos existentes
  await prisma.product.deleteMany();
  console.log('Deleted records in product table');

  await prisma.caseStudy.deleteMany();
  console.log('Deleted records in case study table');

  await prisma.user.deleteMany();
  console.log('Deleted records in user table');

  // Seed Products
  const productsToCreate = products.map((productData) => ({
    ...productData,
    slug: slugify(productData.name),
  }));

  await prisma.product.createMany({
    data: productsToCreate,
  });
  console.log(`Seeded ${products.length} products`);

  // Seed Case Studies
  const caseStudiesToCreate = caseStudies.map((caseStudyData) => ({
    ...caseStudyData,
    slug: slugify(caseStudyData.title),
  }));

  await prisma.caseStudy.createMany({
    data: caseStudiesToCreate,
  });
  console.log(`Seeded ${caseStudies.length} case studies`);

  // Seed Users
  await prisma.user.createMany({
    data: users,
  });
  console.log(`Seeded ${users.length} users`);

  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
