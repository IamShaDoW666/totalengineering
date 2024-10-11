"use client"

import { useEffect, useState } from "react"
import { motion, useAnimation, useMotionValue } from "framer-motion"
import Image from "next/image"

const images = [
  "https://picsum.photos/300/300",
  "https://picsum.photos/300/300",
  "https://picsum.photos/300/300",
  "https://picsum.photos/300/300",
  "https://picsum.photos/300/300",
]

function useInfiniteSlider(images: string[], duration = 50) {
  const controls = useAnimation()
  const x = useMotionValue(0)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const calculateWidth = () => {
      const imageWidth = 110 // Adjust this value based on your image width
      const gap = 16 // Adjust this value based on your gap between images
      return images.length * (imageWidth + gap)
    }

    setWidth(calculateWidth())
  }, [images])

  useEffect(() => {
    if (width > 0) {
      controls.start({
        x: -width,
        transition: {
          duration,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        },
      }).catch((e) => {
        console.log(e)
      })
    }
  }, [controls, width, duration])

  return { x, controls, width }
}

export default function InfiniteSlider() {
  const { x, controls, width } = useInfiniteSlider(images)

  return (
    <div className="w-full overflow-hidden bg-background py-4 mx-auto">
            <h3 className="text-center py-8 text-3xl text-primary font-semibold">Our Partners</h3>
      <motion.div
        className="flex gap-16"
        style={{ x, width: width * 2 }}
        animate={controls}
      >
        {[...images, ...images, ...images].map((src, index) => (
          <div key={index} className="flex-shrink-0 hover:shadow hover:scale-105 transition-all duration-300">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              width={110}
              height={60}
              className="rounded-lg object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}