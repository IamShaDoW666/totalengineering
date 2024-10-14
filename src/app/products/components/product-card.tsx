"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Product } from "@prisma/client";

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      key={product.id}
      className="overflow-hidden rounded-lg bg-secondary shadow-sm transition-shadow duration-300 hover:shadow-md"
      variants={itemVariants}
      whileHover={{ y: -5 }}
    >
      <Image
        src={""}
        alt={product.name}
        width={300}
        height={300}
        className="h-64 w-full object-cover"
      />
      <div className="p-6">
        <h2 className="mb-2 text-xl font-semibold text-foreground/80">
          {product.name}
        </h2>
        <p className="text-sm text-muted-foreground">{product.description}</p>
      </div>
    </motion.div>
  );
}
