import { Button } from "@/components/ui/button";
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
import { api } from "@/trpc/server";
import Image from "next/image";
import TableSkeleton from "../components/table-skeleton";
import { PlusCircle } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { uploadImage } from "@/lib/server-utils";

export default async function AdminSliderPage() {
  const sliders = await api.slider.getAll();
  return (
    <div className="mx-auto w-full p-8">
      <div className="flex justify-between px-12">
        <h2 className="text-2xl font-bold">Sliders</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="mr-2" size={20} />
              Add Slider
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Slider</DialogTitle>
            </DialogHeader>

            <form
              action={async (e) => {
                "use server";
                const image = await uploadImage(e.get("image") as File);
                await api.slider.create({
                  title: e.get("title")?.toString() ?? "",
                  description: e.get("description")?.toString() ?? "",
                  image,
                });
              }}
            >
              <Label htmlFor="slider-title">Title</Label>
              <Input id="slider-title" name="title" required />
              <Label htmlFor="slider-description">Description</Label>
              <Textarea id="slider-description" name="description" required />
              <Label htmlFor="slider-image">Image</Label>
              <Input id="slider-image" name="image" type="file" required />
              <Button type="submit" className="mt-4">
                Add Slider
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      {sliders ? (
        <Table className="mx-auto my-12 w-4/5 max-w-5xl">
          <TableHeader className="rounded bg-background">
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-primary-foreground">
            {sliders.map((slider) => (
              <TableRow key={slider.id}>
                <TableCell>{slider.id}</TableCell>
                <TableCell>{slider!.title}</TableCell>
                <TableCell>{slider.description}</TableCell>
                <TableCell>
                  <Image
                    src={slider!.image}
                    alt={slider!.title}
                    width={100}
                    height={80}
                  />
                </TableCell>
                <TableCell className="flex items-center gap-4">
                  <Button>Edit</Button>
                  <Button variant={"outline"}>Delete</Button>
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
}
