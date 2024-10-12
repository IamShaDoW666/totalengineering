"use client"

import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import Image from "next/image"
import InfiniteSlider from './infinite-slider'
import { title } from 'process'

const galleryItems = [
  { id: 1, src: "/2-1.png", alt: "Gallery Image 1",title: "hello" },
  { id: 2, src: "/5.png", alt: "Gallery Image 2",title: "hello2" },
  { id: 3, src: "/7.png", alt: "Gallery Image 3",title: "hello3" },
  { id: 4, src: "/9.png", alt: "Gallery Image 4",title: "hello4" },
  { id: 5, src: "/23.png", alt: "Gallery Image 5",title: "hello5" },
  { id: 6, src: "/23.png", alt: "Gallery Image 6",title: "hello6" },
]

export default function GallerySection() {
  // const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section className="bg-background px-8 sm:px-4 md:px-2 py-12">      
      <div className="px-4 md:px-6 mx-auto">
        <h2 className="text-3xl text-primary/80 font-bold tracking-tighter sm:text-4xl text-center mb-12">Our Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="overflow-hidden w-full md:w-3/4 mx-auto cursor-pointer transition-transform duration-300 hover:scale-105">
                    <CardContent className="p-0">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={500}
                        height={500}
                        className="w-full h-auto object-cover"
                      />
                      <h1 className='text-center text-2xl py-4'>{item.title}</h1>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-xl">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain"
                  />
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
      <InfiniteSlider />
    </section>
  )
}