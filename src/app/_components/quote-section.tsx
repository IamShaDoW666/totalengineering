"use client"

import { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
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

const QuoteSection = () => {
    const scrollProgress = useScrollProgress()
    const { scrollYProgress } = useScroll()
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    
    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
    const textY = useTransform(scrollYProgress, [0, 1], ['-100%', '100%'])
    const textYSecond = useTransform(scrollYProgress, [0, 0.7], ['-200%', '200%'])
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])
    const pathLength = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  return (
    <section style={{ height: "calc(100vh - 64px)" }} ref={ref} className="relative h-screen w-full overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-secondary to-primary-foreground"
        style={{ y: backgroundY }}
      />
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path
          d="M0,0 Q50,50 100,0 V100 Q50,50 0,100 Z"
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="0.5"
          style={{ pathLength, scaleX: -1 }}
        />
      </svg>
      <div className="relative z-10 flex items-center justify-center h-full">
        <Card className="w-full max-w-4xl border-0 mx-auto bg-transparent shadow-none">
          <CardContent className="p-6">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center text-primary"
              style={{ y: textY, opacity }}
            //   initial={{ opacity: 0, y: 50 }}
            //   animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Innovate. Create. Elevate.
            </motion.h1>
            <motion.p 
              className="mt-4 text-xl sm:text-2xl text-center text-primary/80"
              style={{ y: textYSecond, opacity }}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Empowering your journey to digital excellence
            </motion.p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default QuoteSection;
