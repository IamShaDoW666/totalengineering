import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const categoryRouter = createTRPCRouter({
    getAll: publicProcedure.query(({ctx}) => {
        return ctx.db.category.findMany()
    }),

    getById: publicProcedure.input(z.string()).query((async ({ctx, input}) => {
        return ctx.db.category.findUnique({where: {id: parseInt(input)}})
    }))
})