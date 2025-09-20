import { formSchema } from "~/lib/consts";
import { createTRPCRouter, publicProcedure } from "../trpc";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { env } from "~/env";
import { toast } from "sonner";

export const emailRouter = createTRPCRouter({
  sendContactEmail: publicProcedure
    .input(formSchema)
    .mutation(async ({ input }) => {
      const { name, email, subject, details } = input;

      const emailTransport = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: env.GMAIL_APP_FROM_EMAIL,
          pass: env.GMAIL_APP_PASSWORD,
        },
      });

      const mailOptions: Mail.Options = {
        from: env.GMAIL_APP_FROM_EMAIL,
        to: env.GMAIL_APP_TO_EMAIL,
        subject: `v1ris Contact Form: ${name} - ${subject}`,
        text: `From: ${email}\n\n${details}`,
      };

      await emailTransport.sendMail(mailOptions);
    }),
});
