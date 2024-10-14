import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
// import { ProductGallery } from './components/product-gallery'
// import { AddToCartButton } from './components/add-to-cart-button'
// import { ProductReviews } from './components/product-reviews'
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ProductGallery } from './components/product-gallery'
import { api } from '@/trpc/server'

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = await api.product.getById({id: parseInt(params.id)})
  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }
  return {
    title: product.name,
    description: product.description,
  }
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await api.product.getById({id: parseInt(params.id)})

  if (!product) {
    notFound()
    
  }

  return (
    <div className="container mx-auto py-16 mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProductGallery images={product.images} />
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            {/* <p className="text-xl font-semibold mt-2">${product.price.toFixed(2)}</p> */}
          </div>
          <Badge>{product.category?.name}</Badge>
          <p className="text-gray-600">{product.description}</p>
          <div className="flex items-center space-x-2">
            <span className="text-yellow-500">★★★★☆</span>
            {/* <span>{product.rating} out of 5</span> */}
          </div>
          {/* <div>
            <span className={product.stock > 0 ? "text-green-600" : "text-red-600"}>
              {product.stock > 0 ? "In Stock" : "Out of Stock"}
            </span>
          </div> */}
          {/* <AddToCartButton productId={product.id} stock={product.stock} /> */}
        </div>
      </div>
      <Separator className="my-8" />
      {/* <ProductReviews productId={product.id} /> */}
    </div>
  )
}