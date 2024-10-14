"use client"

import { useState } from 'react'
import Image from 'next/image'
import type { Image as ImageType } from '@prisma/client'

type ProductGalleryProps = {
  images: ImageType[]
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="space-y-4">
      <div className="relative aspect-square overflow-hidden rounded-lg">
        <Image
          src={images[selectedImage]?.path ?? ''}
          alt="Product image"
          fill
          className="object-cover"
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative aspect-square overflow-hidden rounded-lg ${
              selectedImage === index ? 'ring-2 ring-primary' : ''
            }`}
          >
            <Image
              src={image.path}
              alt={`Product thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}