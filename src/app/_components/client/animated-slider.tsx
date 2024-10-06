"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

const slides = [
  {
    image: "https://fastly.picsum.photos/id/140/2000/2000.jpg?hmac=p7mg1UE3BMr9DyYM71vdzMdrCnW0RZvwdxxOFNYG_IQ",
    title: "Welcome to Our Website",
    description: "Discover amazing products and services tailored just for you.",
  },
  {
    image: "https://fastly.picsum.photos/id/891/2000/2000.jpg?hmac=VEnnHrX0ZlXfqe5jD2npLqrZAFn32GAfWzIJXzYKxkE",
    title: "Explore Our Collection",
    description: "Find the perfect item from our wide range of selections.",
  },
  {
    image: "https://fastly.picsum.photos/id/314/2000/2000.jpg?hmac=i5U_UbMgsK1CpZMXm3vPYbpxLPSOwWbKtm3jJkcAY6M",
    title: "Join Our Community",
    description: "Be part of a growing network of satisfied customers.",
  },
]

export default function AnimatedHeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      if (isAutoPlaying) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
      }
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
    setIsAutoPlaying(false)
    setTimeout(() => {
        setIsAutoPlaying(true)
    }, 400)
  }

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
    setTimeout(() => {
        setIsAutoPlaying(true)
    }, 400)
  }

  return (
    <section className="relative w-full h-full overflow-hidden">
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
            src={slides[currentIndex]!.image}
            alt={`Slide ${currentIndex + 1}`}
            fill
            className="object-cover"
            priority
          />          
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center gap-y-64 md:gap-y-0 text-center text-background dark:text-primary p-4"
          >
            <motion.h2 initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5, staggerChildren: 0.5 }} className="text-4xl font-bold mb-4">{slides[currentIndex]!.title}</motion.h2>
            <motion.p initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5, staggerChildren: 0.5 }} className="text-xl max-w-2xl">{slides[currentIndex]!.description}</motion.p>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background dark:bg-secondary  bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-black dark:text-muted-foreground" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background dark:bg-secondary bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-black dark:text-muted-foreground" />
      </button>

      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
                setIsAutoPlaying(false)
                setTimeout(() => {
                    setIsAutoPlaying(true)
                }, 400)
              }}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-background dark:bg-foreground/50" : "bg-secondary dark:bg-secondary opacity-50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {isAutoPlaying &&<motion.div
        className="absolute bottom-0 left-0 h-1 bg-background dark:bg-primary"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 5, ease: "linear", repeat: Infinity }}
      />}
    </section>
  )
}