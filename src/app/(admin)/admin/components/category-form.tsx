"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { categoryCreateSchema } from "@/schema";
import { api } from "@/trpc/react";
import SuccessAlert from "@/app/_components/success-alert";

export function CategoryCreateModal() {
  const utils = api.useUtils();
  const { mutate, isPending, isSuccess } =
    api.category.create.useMutation({
      onSuccess: async () => {
        await utils.category.getAll.invalidate();
      },
    });
  const form = useForm<z.infer<typeof categoryCreateSchema>>({
    resolver: zodResolver(categoryCreateSchema),
    defaultValues: {
      name: "",
    },
  });

  function onSubmit(values: z.infer<typeof categoryCreateSchema>) {
    mutate({ name: values.name });
    form.setValue("name", "");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Category Name" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        {isSuccess && <SuccessAlert message={"Category Added!"} />}
        <Button disabled={isPending} type="submit" className="mt-4 w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
}
