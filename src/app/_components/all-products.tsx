'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Link from 'next/link'

interface Product {
  id: number
  name: string
  description: string
  image: string
  category: string | undefined
}

const categories = ['All', 'Electronics', 'Clothing', 'Books', 'Home & Garden']

export default function AllProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const productsPerPage = 8
  const [totalPages, setTotalPages] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('All')

  useEffect(() => {
    // Simulating an API call to fetch products
    const fetchProducts = async () => {
      // In a real application, this would be an API call
      const dummyProducts: Product[] = Array.from({ length: 32 }, (_, i) => ({
        id: i + 1,
        name: `Product ${i + 1}`,
        description: `A brief description of Product ${i + 1}`,
        image: `https://fastly.picsum.photos/id/62/200/200.jpg?hmac=IdjAu94sGce82DBYTMbOYzXr7kup1tYqdr0bHkRDWUs`,
        category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1]
      }))
      setProducts(dummyProducts)
      setFilteredProducts(dummyProducts)
      setTotalPages(Math.ceil(dummyProducts.length / productsPerPage))
    }
    // eslint-disable-next-line
    fetchProducts()
  }, [])

  useEffect(() => {
    const filtered = selectedCategory === 'All'
      ? products
      : products.filter(product => product.category === selectedCategory)
    setFilteredProducts(filtered)
    setTotalPages(Math.ceil(filtered.length / productsPerPage))
    setCurrentPage(1)
  }, [selectedCategory, products])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  const getCurrentPageProducts = () => {
    const startIndex = (currentPage - 1) * productsPerPage
    const endIndex = startIndex + productsPerPage
    return filteredProducts.slice(startIndex, endIndex)
  }

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage)
    window.scrollTo(0, 0)
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
  }

  return (
    <div className="mx-auto px-4 py-12 bg-background">
      <h1 className="text-4xl font-light mb-12 text-center text-foreground">Our Products</h1>
      <div className="mb-8 flex justify-end">
        <Select onValueChange={handleCategoryChange} value={selectedCategory}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <motion.div
        key={currentPage}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {getCurrentPageProducts().map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
          <motion.div
            key={product.id}
            className="bg-secondary rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            >
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="w-full h-64 object-cover"
              />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-foreground/80">{product.name}</h2>
              <p className="text-sm text-muted-foreground">{product.description}</p>
            </div>
          </motion.div>
              </Link>
        ))}
      </motion.div>
      
      <div className="mt-12 flex justify-center items-center space-x-4">
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          variant="outline"
          size="icon"
          aria-label="Previous page"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <span className="text-sm text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          variant="outline"
          size="icon"
          aria-label="Next page"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}