'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    image: "/slider4.jpg",
    alt: "Slide 1"
  },
  {
    image: "/slider5.jpg",
    alt: "Slide 2"
  },
  {
    image: "/slider6.jpg",
    alt: "Slide 3"
  }
]

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative w-full h-full">
      <AnimatePresence initial={false} custom={currentSlide}>
        <motion.img
          key={currentSlide}
          src={slides[currentSlide]?.image}
          alt={slides[currentSlide]?.alt}
          className="absolute w-full h-full object-cover rounded-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 transform -translate-y-1/2"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 transform -translate-y-1/2"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}

export default function HeroPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center min-h-[calc(100vh-4rem)]">
        <div className="h-[400px] md:h-[600px]">
          <Slider />
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          Metal Fabrication for Over 25 Years
          </h1>
          <p className="text-muted-foreground text-lg">
          At TotalEngineering LLC, we pride ourselves on our state-of-the-art workshop facility, equipped with advanced machinery and technology that enable us to deliver exceptional turning and metal fabrication services. Our commitment to quality and innovation has made us a trusted partner for clients across various industries.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center text-lg">
              <svg
                className="w-4 h-4 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Advanced Technology: Our workshop features cutting-edge equipment that ensures precision and efficiency in every project.
            </li>
            <li className="flex items-center text-lg">
              <svg
                className="w-4 h-4 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Skilled Workforce: Our team of experienced engineers and fabricators are dedicated to producing high-quality results, no matter the complexity of the job.
            </li>
            <li className="flex items-center text-lg">
              <svg
                className="w-4 h-4 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Customized Solutions: We understand that every project is unique. Our facility is designed to accommodate custom orders and tailor solutions to meet your specific needs.
            </li>
          </ul>
          <Button size="lg">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  )
}