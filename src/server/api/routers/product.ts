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
});
