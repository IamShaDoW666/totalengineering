'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import {motion} from 'framer-motion'
export default function ImageContentSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="space-y-4 md:space-y-6">
            <motion.h2
            initial={{y: "40%", opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.8}}
             className="text-3xl dark:text-primary font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Transform Your Digital Presence
            </motion.h2>
            <motion.p
             initial={{y: "40%", opacity: 0}}
             whileInView={{y: 0, opacity: 1}}
             transition={{duration: 0.8, delay: 0.2}}
             className="max-w-[600px] text-primary-foreground/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our cutting-edge solutions empower businesses to thrive in the digital landscape. 
              With innovative technologies and expert guidance, we help you stay ahead of the curve.
            </motion.p>
            <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.8, delay: 0.3}}
            className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="outline" className="text-primary">Learn More</Button>
            </motion.div>
          </div>
          <motion.div
          initial={{x: "50%", opacity: 0}}
          whileInView={{x: 0, opacity: 1}}
          transition={{duration: 0.6, ease: 'anticipate'}}
           className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last">
            <Image
              alt="Digital Transformation"
              className="object-cover"
              height="600"
              src={`https://picsum.photos/300/300`}
              style={{
                aspectRatio: "800/600",
                objectFit: "cover",
              }}
              width="800"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}