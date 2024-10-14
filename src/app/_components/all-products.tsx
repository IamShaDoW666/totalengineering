"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { api } from "@/trpc/react";
import ProductSkeleton from "../products/components/products-skeleton";

export default function AllProducts() {
  const [selectedCategory, setSelectedCategory] = useState<
    string | undefined
  >();
  const products = api.product.getAll.useQuery(selectedCategory);
  const categories = api.category.getAll.useQuery();
  console.log(categories)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="mx-auto bg-background px-4 py-12">
      <h1 className="text-center text-4xl text-primary">
        Our Products
      </h1>
      <div className="mb-8 flex justify-end">
        <Select
          onValueChange={handleCategoryChange}
          value={selectedCategory ?? ""}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem key={0} value="0">
              All
            </SelectItem>
            {categories.data?.map((category) => (
              <SelectItem key={category.id} value={category.id.toString()}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {products.data ? (
        <motion.div
          className="container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {products.data?.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id}>
              <motion.div
                key={product.id}
                className="overflow-hidden rounded-lg bg-secondary shadow-sm transition-shadow duration-300 hover:shadow-md"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <Image
                  src={product.images[0]?.path ?? ""}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="h-64 w-full object-cover"
                />
                <div className="p-6">
                  <h2 className="mb-2 text-xl font-semibold text-foreground/80">
                    {product.name}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {product.description}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      ) : (
        <ProductSkeleton />
      )}
    </div>
  );
}
