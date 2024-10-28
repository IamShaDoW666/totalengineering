import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
export const categoryRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.category.findMany();
  }),

  create: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.category.create({ data: input });
    }),

  delete: publicProcedure.input(z.number()).mutation(async ({ ctx, input }) => {
    return await ctx.db.category.delete({ where: { id: input } });
  }),

  update: publicProcedure.input(z.object({id: z.number(), category: z.object({name: z.string().optional()})})).mutation(async({ctx,input}) => {
    return await ctx.db.category.update({data: {name: input.category.name}, where: {id: input.id}})
  }),

  getById: publicProcedure.input(z.string()).query(async ({ ctx, input }) => {
    return ctx.db.category.findUnique({ where: { id: parseInt(input) } });
  }),
});
