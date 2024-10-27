"use client"

import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import Image from "next/image"
import InfiniteSlider from './infinite-slider'

const galleryItems = [
  { id: 1, src: "/2-1.png", alt: "Gallery Image 1",title: "" },
  { id: 2, src: "/5.png", alt: "Gallery Image 2",title: "" },
  { id: 3, src: "/7.png", alt: "Gallery Image 3",title: "" },
  { id: 4, src: "/9.png", alt: "Gallery Image 4",title: "" },
  { id: 5, src: "/23.png", alt: "Gallery Image 5",title: "" },
  { id: 6, src: "/23.png", alt: "Gallery Image 6",title: "" },
  { id: 7, src: "/total3.jpeg",alt: "Gallery Image 6",title: "" },
  { id: 8, src: "/total4.jpeg",alt: "Gallery Image 6",title: "" },
  { id: 9, src: "/total5.jpeg",alt: "Gallery Image 6",title: "" },
  { id: 10, src: "/total6.jpeg",alt: "Gallery Image 6",title: "" },
  { id: 11, src: "/total7.jpeg",alt: "Gallery Image 6",title: "" },
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
                        className="w-full h-72 object-cover"
                      />
                      <h1 className='text-center text-2xl py-4'>{item.title}</h1>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={1000}
                    height={800}
                    className="w-full h-120 object-contain"
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