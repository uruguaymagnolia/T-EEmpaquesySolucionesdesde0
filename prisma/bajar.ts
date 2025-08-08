import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();
const outputDir = path.join(__dirname, 'datos');

async function main() {
  console.log('Iniciando exportación de datos...');

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log(`Directorio creado: ${outputDir}`);
  }

  const modelNames = ['product', 'caseStudy']; 

  for (const modelName of modelNames) {
    try {
      // @ts-ignore
      const records = await prisma[modelName].findMany();
      const filePath = path.join(outputDir, `${modelName}.json`);
      
      fs.writeFileSync(filePath, JSON.stringify(records, null, 2));
      console.log(`Datos de la tabla '${modelName}' exportados a ${filePath}`);
    } catch (error) {
      console.error(`Error exportando la tabla '${modelName}':`, error);
    }
  }

  console.log('Exportación de datos finalizada.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });