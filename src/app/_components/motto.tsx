"use client"

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"

const useScrollProgress = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPosition = window.scrollY
      const newProgress = scrollPosition / totalHeight
      setProgress(newProgress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return progress
}

export default function MottoSection() {
  const scrollProgress = useScrollProgress()
  const { scrollYProgress } = useScroll()
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-primary to-primary-foreground"
        style={{ y: backgroundY }}
      />
      <div className="relative z-10 flex items-center justify-center h-full">
        <Card className="w-full max-w-4xl mx-auto bg-transparent shadow-none">
          <CardContent className="p-6">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center text-primary-foreground"
              style={{ y: textY, opacity }}
            >
              Innovate. Create. Elevate.
            </motion.h1>
            <motion.p 
              className="mt-4 text-xl sm:text-2xl text-center text-primary-foreground/80"
              style={{ y: textY, opacity }}
            >
              Empowering your journey to digital excellence
            </motion.p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}