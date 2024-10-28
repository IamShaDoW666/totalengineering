import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { z } from "zod";

export const productRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(z.string().optional())
    .query(async ({ ctx, input }) => {
      if (input && input != "0") {
        return await ctx.db.product.findMany({
          include: { category: true, images: true },
          where: { categoryid: parseInt(input) },
        });
      }

      return await ctx.db.product.findMany({
        include: { category: true, images: true },
      });
    }),

  getById: publicProcedure
    .input(
      z.object({
        id: z.number(),
      }),
    )
    .query(async ({ ctx, input }) => {
      return await ctx.db.product.findUnique({
        where: { id: input.id },
        include: {
          category: true,
          images: true,
        },
      });
    }),

  create: publicProcedure
    .input(z.object({ name: z.string(), description: z.string().optional(), categoryId: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.product.create({ data: input });
    }),

  delete: publicProcedure.input(z.number()).mutation(async ({ ctx, input }) => {
    return await ctx.db.product.delete({ where: { id: input } });
  }),

  update: publicProcedure
    .input(
      z.object({
        id: z.number(),
        product: z.object({ name: z.string(), description: z.string().optional(), categoryId: z.number() }),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.product.update({
        data: input.product,
        where: { id: input.id },
      });
    }),
});
