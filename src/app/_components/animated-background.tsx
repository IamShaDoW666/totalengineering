"use client"

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"

export default function AnimatedBackgroundSection() {
  const { scrollYProgress } = useScroll()
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100])
  const rotateRange = useTransform(scrollYProgress, [0, 1], [0, 360])
  const opacityRange = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.5, 0.3])

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-primary/20 to-primary-foreground">
      <motion.svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ opacity: opacityRange }}
      >
        <motion.path
          d="M0,0 C25,50 75,50 100,0 V100 H0 Z"
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="0.5"
          style={{ y: yRange, rotate: rotateRange }}
        />
        <motion.path
          d="M0,100 C25,50 75,50 100,100 V0 H0 Z"
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="0.5"
          style={{ y: yRange, rotate: rotateRange }}
        />
      </motion.svg>

      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <Card className="w-full max-w-4xl mx-auto bg-background/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-6">
              Innovative Solutions
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-8">
              Transforming ideas into reality with cutting-edge technology
            </p>
            <div className="flex justify-center space-x-4">
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                Get Started
              </button>
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                Learn More
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}