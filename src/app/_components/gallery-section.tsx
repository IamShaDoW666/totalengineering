"use client"

import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import Image from "next/image"
import InfiniteSlider from './infinite-slider'

const galleryItems = [
  { id: 1, src: "https://fastly.picsum.photos/id/140/2000/2000.jpg?hmac=p7mg1UE3BMr9DyYM71vdzMdrCnW0RZvwdxxOFNYG_IQ", alt: "Gallery Image 1" },
  { id: 2, src: "https://fastly.picsum.photos/id/859/500/500.jpg?hmac=N-60r-0gejf53svwG2w7EGU1JDpL5zOd-gJZTSsxVyw", alt: "Gallery Image 2" },
  { id: 3, src: "https://fastly.picsum.photos/id/160/500/500.jpg?hmac=LwWd1t8fc3efiUs2ani3PlzylhPR1S5r4Ze68UO8cw4", alt: "Gallery Image 3" },
  { id: 4, src: "https://fastly.picsum.photos/id/469/500/500.jpg?hmac=BHkrKLd_URIkqjZ1czEQW8VU6jk4NBixFMVPNud2LPg", alt: "Gallery Image 4" },
  { id: 5, src: "https://fastly.picsum.photos/id/650/500/500.jpg?hmac=2_B-FRq64ubwHauceT-OqNzNdwiWoU1DbaAgwS8peD4", alt: "Gallery Image 5" },
  { id: 6, src: "https://fastly.picsum.photos/id/38/500/500.jpg?hmac=P2ck2JJoFY6U4RS1VwfQve2kzwgG-1D_6PwXf-oi5jo", alt: "Gallery Image 6" },
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
                  <Card className="overflow-hidden w-3/4 mx-auto cursor-pointer transition-transform duration-300 hover:scale-105">
                    <CardContent className="p-0">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={500}
                        height={500}
                        className="w-full h-auto object-cover"
                      />
                      <h1 className='text-center py-4'>Hwllo</h1>
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