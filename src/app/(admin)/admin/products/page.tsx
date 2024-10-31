"use client";
import React, { useState } from "react";
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
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Pencil, PlusCircle, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { api } from "@/trpc/react";
import TableSkeleton from "../components/table-skeleton";
const ProductsPage = () => {
  const { data: products } = api.product.getAll.useQuery();
  return (
    <div className="flex-1 p-8">
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
      {products ? (
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
                <TableCell>{product.category?.name}</TableCell>
                <TableCell>$50</TableCell>
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
                        defaultValue={product.category?.name}
                        required
                      />

                      <Button type="submit" className="mt-4">
                        Update Product
                      </Button>
                    </DialogContent>
                  </Dialog>
                  <Button variant="outline" size="icon">
                    <Trash2 size={16} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <TableSkeleton />
      )}
    </div>
  );
};

export default ProductsPage;
