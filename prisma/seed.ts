import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { title } from "process";

const prisma = new PrismaClient();

async function main() {
  for (let i = 0; i < 4; i++) {
    const category = await prisma.category.create({
      data: {
        name: faker.commerce.productAdjective(),
      },
    });
    for (let j = 0; j < 8; j++) {
      const product = await prisma.product.create({
        data: {
          name: faker.commerce.productName(),
          description: faker.commerce.productDescription(),
          categoryid: category.id,
        },
      });

      for (let k = 0; k < 4; k++) {
        await prisma.image.create({
          data: { path: faker.image.url(), productId: product.id },
        });
      }
    }
  }

  console.log("Random products seeded successfully.");
  const sliders = [
    {
      image: "/total2.jpg",
      title: "Precision-Crafted Staircase Systems",
      description:
        "Create a lasting impression with stairs that are as functional as they are visually stunning..",
    },
    {
      image: "/totaleng5.webp",
      title: "Delivering Precision and Quality in Every Turn",
      description:
        "Discover amazing products and services tailored just for you.",
    },
    {
      image: "/slider1.jpg",
      title: "Where Creativity Meets Cutting-Edge Engineering",
      description: "Find the perfect item from our wide range of selections.",
    },
    {
      image: "/totaleng.jpg",
      title: "Explore Our Custom Architectural Steel Designs",
      description: "Be part of a growing network of satisfied customers.",
    },
  ];

  sliders.map(async (slider) => {
    await prisma.slider.create({
      data: {
        title: slider.title,
        description: slider.description,
        image: slider.image,
      },
    });
  });

  console.log("Sliders seeded successfully.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
