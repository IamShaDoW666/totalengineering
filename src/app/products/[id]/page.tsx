import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Metadata } from 'next'
// import { ProductGallery } from './components/product-gallery'
// import { AddToCartButton } from './components/add-to-cart-button'
// import { ProductReviews } from './components/product-reviews'
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ProductGallery } from './components/product-gallery'

async function getProduct(id: string) {
  // In a real application, this would be an API call or database query
  const products = [
    { 
      id: '1', 
      name: "Premium Wireless Headphones", 
      price: 299.99, 
      description: "Experience crystal-clear audio with our premium wireless headphones. Featuring advanced noise-cancellation technology, comfortable over-ear design, and long-lasting battery life.",
      category: "Electronics",
      rating: 4.5,
      stock: 50,
      images: [
        "https://picsum.photos/300/300",
        "https://fastly.picsum.photos/id/140/2000/2000.jpg?hmac=p7mg1UE3BMr9DyYM71vdzMdrCnW0RZvwdxxOFNYG_IQ",
        "https://picsum.photos/300/300",
      ]
    },
    { 
        id: '2', 
        name: "Premium Wireless Headphones", 
        price: 299.99, 
        description: "Experience crystal-clear audio with our premium wireless headphones. Featuring advanced noise-cancellation technology, comfortable over-ear design, and long-lasting battery life.",
        category: "Electronics",
        rating: 4.5,
        stock: 50,
        images: [
          "https://picsum.photos/300/300",
          "https://picsum.photos/300/300",
          "https://picsum.photos/300/300",
        ]
      },
      { 
        id: '3', 
        name: "Premium Wireless Headphones", 
        price: 299.99, 
        description: "Experience crystal-clear audio with our premium wireless headphones. Featuring advanced noise-cancellation technology, comfortable over-ear design, and long-lasting battery life.",
        category: "Electronics",
        rating: 4.5,
        stock: 50,
        images: [
          "https://picsum.photos/300/300",
          "https://picsum.photos/300/300",
          "https://picsum.photos/300/300",
        ]
      }
    // ... other products
  ]
  
  const product = products.find(p => p.id === id)
  if (!product) return null
  return product
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = await getProduct(params.id)
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
  const product = await getProduct(params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto py-16 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProductGallery images={product.images} />
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-xl font-semibold mt-2">${product.price.toFixed(2)}</p>
          </div>
          <Badge>{product.category}</Badge>
          <p className="text-gray-600">{product.description}</p>
          <div className="flex items-center space-x-2">
            <span className="text-yellow-500">★★★★☆</span>
            <span>{product.rating} out of 5</span>
          </div>
          <div>
            <span className={product.stock > 0 ? "text-green-600" : "text-red-600"}>
              {product.stock > 0 ? "In Stock" : "Out of Stock"}
            </span>
          </div>
          {/* <AddToCartButton productId={product.id} stock={product.stock} /> */}
        </div>
      </div>
      <Separator className="my-8" />
      {/* <ProductReviews productId={product.id} /> */}
    </div>
  )
}