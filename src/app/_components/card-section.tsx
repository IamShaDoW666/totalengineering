"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Database, Radio, CalendarRange, Zap, LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

const specs = [
  {
    title: "Processor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: Database,
  },
  {
    title: "Battery Life",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam tortor, tincidunt eget viverra",
    icon: Radio,
  },
  {
    title: "Connectivity",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.dolor sit amet, consectetur adipiscing elit.",
    icon: CalendarRange,
  },
  {
    title: "Fast Charging",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam tortor, tincidunt eget viverra",
    icon: Zap,
  },
];

const SpecCard = ({
  title,
  description,
  icon: Icon,
  index,
}: {
  title: string;
  description: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.1, transition: { duration: 0.1, ease: "easeIn" } }}
    transition={{ duration: 0.3, delay: index * 0.15 }}
  >
    <Card className="h-full pb-16 cursor-pointer transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <Icon className="mb-2 h-16 w-16 text-primary" />
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  </motion.div>
);

export default function CardSection() {
  return (
    <section
      className="bg-secondary py-12"
      style={{ height: "calc(100vh - 64px)" }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold text-primary sm:text-4xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Values and Goals
        </motion.h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {specs.map((spec, index) => (
            <SpecCard key={spec.title} {...spec} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
