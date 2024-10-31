"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package, LayoutGrid, PlusCircle, Pencil, Trash2 } from "lucide-react";
import { api } from "@/trpc/react";
import TableSkeleton from "./table-skeleton";
import { CategoryCreateModal } from "./category-form";

export default function AdminDashboard() {
  const utils = api.useUtils();
  const categories = api.category.getAll.useQuery();
  const { mutate } = api.category.delete.useMutation({
    onSuccess: async () => {
      await utils.category.getAll.invalidate();
    },
  });
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", category: "Electronics", price: 999.99 },
    { id: 2, name: "T-Shirt", category: "Clothing", price: 19.99 },
    { id: 3, name: "Novel", category: "Books", price: 9.99 },
  ]);

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter((prod) => prod.id !== id));
  };

  return (
    <main className="flex-1 overflow-auto p-8">
      <Tabs defaultValue="categories">
        <TabsList>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
        </TabsList>

        {/* Categories Tab */}
        <TabsContent value="categories">
          <div className="mb-4 flex items-center justify-between">
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
                <CategoryCreateModal />
              </DialogContent>
            </Dialog>
          </div>
          {categories.data ? (
            <Table>
              <TableHeader>
                <TableRow className="rounded-t bg-background/35 hover:bg-background/35">
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {categories.data?.map((category) => (
                  <TableRow
                    className="bg-background/50 hover:bg-background"
                    key={category.id}
                  >
                    <TableCell>{category.id}</TableCell>
                    <TableCell>{category.name}</TableCell>
                    <TableCell>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="mr-2"
                          >
                            <Pencil size={16} />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Edit Category</DialogTitle>
                          </DialogHeader>

                          <Label htmlFor="edit-name">Category Name</Label>
                          <Input
                            id="edit-name"
                            name="name"
                            defaultValue={category.name}
                            required
                          />
                          <Button type="submit" className="mt-4">
                            Update Category
                          </Button>
                        </DialogContent>
                      </Dialog>
                      <Dialog open={isOpen}>
                        <DialogTrigger asChild>
                          <Button
                            onClick={() => setIsOpen(true)}
                            variant="outline"
                            size="icon"
                          >
                            <Trash2 size={16} />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Are you sure?</DialogTitle>
                          </DialogHeader>
                          <div className="flex items-center justify-around py-8">
                            <Button
                              onClick={() => {
                                mutate(category.id);
                                setIsOpen(false);
                              }}
                              className="w-1/3"
                              variant={"destructive"}
                            >
                              Delete
                            </Button>
                            <DialogClose asChild>
                              <Button className="w-1/3" variant={"outline"}>
                                Cancel
                              </Button>
                            </DialogClose>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <TableSkeleton />
          )}
        </TabsContent>

        {/* Products Tab */}
        <TabsContent value="products">
          <div className="mb-4 flex items-center justify-between">
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
                <Input
                  id="product-price"
                  name="price"
                  type="number"
                  step="0.01"
                  required
                />
                <Button type="submit" className="mt-4">
                  Add Product
                </Button>
              </DialogContent>
            </Dialog>
          </div>
          <Table>
            <TableHeader>
              <TableRow className="rounded-t bg-background/35 hover:bg-background/35">
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow
                  key={product.id}
                  className="bg-background/50 hover:bg-background"
                >
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
                        <Input
                          id="edit-product-name"
                          name="name"
                          defaultValue={product.name}
                          required
                        />
                        <Label htmlFor="edit-product-category">Category</Label>
                        <Input
                          id="edit-product-category"
                          name="category"
                          defaultValue={product.category}
                          required
                        />
                        <Label htmlFor="edit-product-price">Price</Label>
                        <Input
                          id="edit-product-price"
                          name="price"
                          type="number"
                          step="0.01"
                          defaultValue={product.price}
                          required
                        />
                        <Button type="submit" className="mt-4">
                          Update Product
                        </Button>
                      </DialogContent>
                    </Dialog>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleDeleteProduct(product.id)}
                    >
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
  );
}
