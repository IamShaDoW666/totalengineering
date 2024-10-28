"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Package, LayoutGrid, PlusCircle, Pencil, Trash2 } from "lucide-react"

export default function AdminDashboard() {
  const [categories, setCategories] = useState([
    { id: 1, name: "Electronics" },
    { id: 2, name: "Clothing" },
    { id: 3, name: "Books" },
  ])

  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", category: "Electronics", price: 999.99 },
    { id: 2, name: "T-Shirt", category: "Clothing", price: 19.99 },
    { id: 3, name: "Novel", category: "Books", price: 9.99 },
  ])

  const [editingCategory, setEditingCategory] = useState(null)
  const [editingProduct, setEditingProduct] = useState(null)

  const handleAddCategory = (name: string) => {
    const newCategory = { id: categories.length + 1, name }
    setCategories([...categories, newCategory])
  }

  const handleEditCategory = (id: number, name: string) => {
    setCategories(categories.map(cat => cat.id === id ? { ...cat, name } : cat))
  }

  const handleDeleteCategory = (id: number) => {
    setCategories(categories.filter(cat => cat.id !== id))
  }

  const handleAddProduct = (name: string, category: string, price: string) => {
    const newProduct = { id: products.length + 1, name, category, price: parseFloat(price) }
    setProducts([...products, newProduct])
  }

  const handleEditProduct = (id: number, name: string, category: string, price: string) => {
    setProducts(products.map(prod => prod.id === id ? { ...prod, name, category, price: parseFloat(price) } : prod))
  }

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter(prod => prod.id !== id))
  }

  return (
    <div className="flex h-screen bg-secondary">
      {/* Sidebar */}
      <aside className="w-64 bg-background shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-foreground">Admin Dashboard</h1>
        </div>
        <nav className="mt-4">
          <a href="#categories" className="flex items-center px-4 py-2 text-foreground hover:bg-secondary">
            <LayoutGrid className="mr-2" size={20} />
            Categories
          </a>
          <a href="#products" className="flex items-center px-4 py-2 text-foreground hover:bg-secondary">
            <Package className="mr-2" size={20} />
            Products
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        <Tabs defaultValue="categories">
          <TabsList>
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
          </TabsList>

          {/* Categories Tab */}
          <TabsContent value="categories">
            <div className="mb-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold">Categories</h2>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <PlusCircle className="mr-2" size={20} />
                    Add Category
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New Category</DialogTitle>
                  </DialogHeader>

                    <Label htmlFor="name">Category Name</Label>
                    <Input id="name" name="name" required />
                    <Button  className="mt-4">Add Category</Button>
               
                </DialogContent>
              </Dialog>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {categories.map((category) => (
                  <TableRow key={category.id}>
                    <TableCell>{category.id}</TableCell>
                    <TableCell>{category.name}</TableCell>
                    <TableCell>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="icon" className="mr-2">
                            <Pencil size={16} />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Edit Category</DialogTitle>
                          </DialogHeader>
                        
                            <Label htmlFor="edit-name">Category Name</Label>
                            <Input id="edit-name" name="name" defaultValue={category.name} required />
                            <Button type="submit" className="mt-4">Update Category</Button>
                        
                        </DialogContent>
                      </Dialog>
                      <Button variant="outline" size="icon" onClick={() => handleDeleteCategory(category.id)}>
                        <Trash2 size={16} />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>

          {/* Products Tab */}
          <TabsContent value="products">
            <div className="mb-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold">Products</h2>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <PlusCircle className="mr-2" size={20} />
                    Add Product
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New Product</DialogTitle>
                  </DialogHeader>
                 
                    <Label htmlFor="product-name">Product Name</Label>
                    <Input id="product-name" name="name" required />
                    <Label htmlFor="product-category">Category</Label>
                    <Input id="product-category" name="category" required />
                    <Label htmlFor="product-price">Price</Label>
                    <Input id="product-price" name="price" type="number" step="0.01" required />
                    <Button type="submit" className="mt-4">Add Product</Button>
           
                </DialogContent>
              </Dialog>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>{product.id}</TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>${product.price.toFixed(2)}</TableCell>
                    <TableCell>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="icon" className="mr-2">
                            <Pencil size={16} />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Edit Product</DialogTitle>
                          </DialogHeader>
                       
                            <Label htmlFor="edit-product-name">Product Name</Label>
                            <Input id="edit-product-name" name="name" defaultValue={product.name} required />
                            <Label htmlFor="edit-product-category">Category</Label>
                            <Input id="edit-product-category" name="category" defaultValue={product.category} required />
                            <Label htmlFor="edit-product-price">Price</Label>
                            <Input id="edit-product-price" name="price" type="number" step="0.01" defaultValue={product.price} required />
                            <Button type="submit" className="mt-4">Update Product</Button>
                  
                        </DialogContent>
                      </Dialog>
                      <Button variant="outline" size="icon" onClick={() => handleDeleteProduct(product.id)}>
                        <Trash2 size={16} />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}