import { formSchema } from "~/lib/consts";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const emailRouter = createTRPCRouter({
  sendContactEmail: publicProcedure
    .input(formSchema)
    .mutation(async ({ input }) => {
      console.log("HI", input);
    }),
});
