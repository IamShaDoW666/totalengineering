import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
export const sliderRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.slider.findMany();
  }),

  create: publicProcedure
    .input(
      z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.slider.create({ data: input });
    }),

  delete: publicProcedure.input(z.number()).mutation(async ({ ctx, input }) => {
    return await ctx.db.slider.delete({ where: { id: input } });
  }),

  update: publicProcedure
    .input(
      z.object({
        id: z.number(),
        slider: z.object({ name: z.string().optional() }),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.slider.update({
        data: { title: input.slider.name },
        where: { id: input.id },
      });
    }),

  getById: publicProcedure.input(z.string()).query(async ({ ctx, input }) => {
    return ctx.db.slider.findUnique({ where: { id: parseInt(input) } });
  }),
});
