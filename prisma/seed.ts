import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  for (let i = 0; i < 4; i++) {
    const category = await prisma.category.create({data: {
      name: faker.commerce.productAdjective(),
    }})
    for (let j = 0; j < 8; j++) {
  
      const product = await prisma.product.create({
        data: {
          name: faker.commerce.productName(),
          description: faker.commerce.productDescription(),
          categoryid: category.id,
        },
      });

      for (let k = 0; k < 4; k++) {
        await prisma.image.create({data: {path: faker.image.url(), productId: product.id}})
      }
    }
  }

  console.log('Random products seeded successfully.');
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })