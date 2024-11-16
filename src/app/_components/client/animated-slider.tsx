"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { api } from "@/trpc/react";

// const slides = [
//   {
//     image: "/total2.jpg",
//     title: "Precision-Crafted Staircase Systems",
//     description:
//       "Create a lasting impression with stairs that are as functional as they are visually stunning..",
//   },
//   {
//     image: "/totaleng5.webp",
//     title: "Delivering Precision and Quality in Every Turn",
//     description:
//       "Discover amazing products and services tailored just for you.",
//   },
//   {
//     image: "/slider1.jpg",
//     title: "Where Creativity Meets Cutting-Edge Engineering",
//     description: "Find the perfect item from our wide range of selections.",
//   },
//   {
//     image: "/totaleng.jpg",
//     title: "Explore Our Custom Architectural Steel Designs",
//     description: "Be part of a growing network of satisfied customers.",
//   },
// ];

export default function AnimatedHeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { data: slides } = api.slider.getAll.useQuery();
  useEffect(() => {
    const timer = setInterval(() => {
      if (isAutoPlaying) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides!.length);
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides!.length);
    setIsAutoPlaying(false);
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 400);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides!.length) % slides!.length,
    );
    setIsAutoPlaying(false);
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 400);
  };

  return (
    <section className="relative h-full w-full overflow-hidden">
      {slides && (
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={slides![currentIndex]!.image}
              alt={`Slide ${currentIndex + 1}`}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            <motion.div className="absolute inset-0 flex flex-col items-center justify-center gap-y-64 p-4 text-center text-background dark:text-primary md:gap-y-0">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5, staggerChildren: 0.5 }}
                className="mb-4 text-2xl font-bold md:text-7xl"
              >
                {slides![currentIndex]!.title}
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5, staggerChildren: 0.5 }}
                className="max-w-2xl text-2xl"
              >
                {slides![currentIndex]!.description}
              </motion.p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}

      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background bg-opacity-50 p-2 transition-all hover:bg-opacity-75 dark:bg-secondary"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-black dark:text-muted-foreground" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background bg-opacity-50 p-2 transition-all hover:bg-opacity-75 dark:bg-secondary"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-black dark:text-muted-foreground" />
      </button>

      <div className="absolute bottom-4 left-0 right-0">
        {slides && (
          <div className="flex justify-center space-x-2">
            {slides!.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                  setTimeout(() => {
                    setIsAutoPlaying(true);
                  }, 400);
                }}
                className={`h-3 w-3 rounded-full ${
                  index === currentIndex
                    ? "bg-background dark:bg-foreground/50"
                    : "bg-secondary opacity-50 dark:bg-secondary"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {isAutoPlaying && (
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-background dark:bg-primary"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear", repeat: Infinity }}
        />
      )}
    </section>
  );
}
