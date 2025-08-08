import prisma from '../src/lib/prisma';
import { products } from '../src/lib/mock-products';
import { caseStudies } from '../src/lib/mock-case-studies';

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

    // Clear existing data
    await prisma.product.deleteMany();
    console.log('Deleted records in product table');

    await prisma.caseStudy.deleteMany();
    console.log('Deleted records in case study table');

    // Seed Products
    const productsToCreate = products.map(({ id, name, ...productData }) => ({
        ...productData,
        name,
        slug: slugify(name),
    }));
    await prisma.product.createMany({
        data: productsToCreate,
    });
    console.log(`Seeded ${products.length} products`);

    // Seed Case Studies
    const caseStudiesToCreate = caseStudies.map(({ id, title, ...caseStudyData }) => ({
        ...caseStudyData,
        title,
        slug: slugify(title),
    }));

    await prisma.caseStudy.createMany({
        data: caseStudiesToCreate,
    });
    console.log(`Seeded ${caseStudies.length} case studies`);

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
