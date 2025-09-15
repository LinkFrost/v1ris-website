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

const formInputs: Record<string, { label: string; description: string }> = {
  name: { label: "Name", description: "Your name/username" },
  email: {
    label: "Email Address",
    description: "Valid email address that I can reach you back at",
  },
  subject: { label: "Subject", description: "The nature of your request" },
  details: { label: "Details", description: "Self explanatory" },
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
    <section className="responsiveContainer pt-4">
      <Card className="border-slate-500 bg-gray-900/90 backdrop-blur-sm">
        <CardContent className="p-8">
          <Form {...form}>
            <form
              className="mb-8 flex flex-col gap-8 text-white"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              {Object.keys(formInputs).map((input) => (
                <FormField
                  key={input}
                  control={form.control}
                  name={input as "name" | "email" | "subject" | "details"}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{formInputs[input]?.label}</FormLabel>

                      <FormControl>
                        <Input {...field} />
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
