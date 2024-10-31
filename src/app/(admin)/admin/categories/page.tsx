"use client"

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
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Pencil, PlusCircle, Trash2 } from "lucide-react";
import { CategoryCreateModal } from "../components/category-form";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import TableSkeleton from "../components/table-skeleton";
import { api } from "@/trpc/react";
const CategoriesPage = () => {
  const utils = api.useUtils();
  const categories = api.category.getAll.useQuery();
  const { mutate } = api.category.delete.useMutation({
    onSuccess: async () => {
      await utils.category.getAll.invalidate();
    },
  });
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex-1 p-8">
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
                      <Button variant="outline" size="icon" className="mr-2">
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
    </div>
  );
};

export default CategoriesPage;
