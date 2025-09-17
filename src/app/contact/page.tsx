"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Card, CardContent } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { api } from "~/trpc/react";
import { formSchema } from "~/lib/consts";
import Link from "next/link";
import { Textarea } from "~/components/ui/textarea";

const formInputs: Record<string, { label: string; description: string }> = {
  name: { label: "Name", description: "(required)" },
  email: {
    label: "Email Address",
    description: "(required)",
  },
  subject: { label: "Subject", description: "(required)" },
  details: { label: "Details", description: "(required)" },
};

export default function Contact() {
  const { mutate, error } = api.email.sendContactEmail.useMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      details: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    mutate(values);
  };

  return (
    <section className="responsiveContainer flex flex-col gap-4 pt-4">
      <h1 className="font-nippo text-5xl font-semibold text-gray-900 text-shadow-white">
        Contact
      </h1>

      <Card className="mb-4 border-slate-500 bg-gray-900/90 backdrop-blur-sm">
        <CardContent className="px-8">
          <Form {...form}>
            <form
              className="flex flex-col gap-8 text-white"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <p>
                Want to work together? Fill out this form and I'll get back to
                you! Be sure to check out how I handle commissions{" "}
                <Link
                  href="/commissions"
                  className="text-blue-200 underline hover:text-blue-400"
                >
                  here
                </Link>{" "}
                as well.
              </p>

              {Object.keys(formInputs).map((input) => (
                <FormField
                  key={input}
                  control={form.control}
                  name={input as "name" | "email" | "subject" | "details"}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{formInputs[input]?.label}</FormLabel>

                      <FormControl>
                        {input === "details" ? (
                          <Textarea {...field} className="h-28 resize-none" />
                        ) : (
                          <Input {...field} />
                        )}
                      </FormControl>

                      <FormDescription>
                        {formInputs[input]?.description}
                      </FormDescription>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
              <Button variant="secondary">Submit</Button>
            </form>
          </Form>

          {error?.data?.zodError?.fieldErrors.title && (
            <span className="mb-8 text-red-500">
              {error.data.zodError.fieldErrors.title}
            </span>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
