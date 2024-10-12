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
              Expert Fabrication Services in Coimbatore
            </motion.h2>
            <motion.p
             initial={{y: "40%", opacity: 0}}
             whileInView={{y: 0, opacity: 1}}
             transition={{duration: 0.8, delay: 0.2}}
             className="max-w-[600px] text-primary-foreground/70 md:text-xl/relaxed lg:text-lg/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Welcome to Total Engineering, your trusted partner for high-quality fabrication services in Coimbatore. With years of experience in the industry, we specialize in delivering customized solutions that meet the unique needs of our clients.
              
              
          
          
                             
              Our workshop features cutting-edge equipment that ensures precision and efficiency in every project.
                      
              Our team of experienced engineers and fabricators are dedicated to producing high-quality results, no matter the complexity of the job.
              We understand that every project is unique. Our facility is designed to accommodate custom orders and tailor solutions to meet your specific needs.
           
        
          </motion.p>
          
            <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.8, delay: 0.3}}
            className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="text-lg">Get Started</Button>
              <Button size="lg" variant="outline" className="text-primary text-lg">Learn More</Button>
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
              src={`/11.png`}
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