import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const enquiryRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string().email(),
        message: z.string(),
      }),
    )
    .mutation(async ({ctx, input}) => {
        return ctx.db.enquiry.create({data: input})
    }),
});
