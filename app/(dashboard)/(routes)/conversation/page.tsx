"use client";

import * as z from 'zod';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import Heading from "@/components/heading";
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { formSchema } from './constants';
import { Button } from '@/components/ui/button';

export default function ConversationPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: ""
    },
  });
  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  }

  return (
    <div className="">
      <Heading
        title="Conversation"
        description="Our most advanced conversation"
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="p-8 lg:px-8 ">
        <div >
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm
              grid grid-cols-12 gap-2">
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className='col-span-12 lg:col-span-10'>
                    <FormControl className='m-0 p-2'>
                      <Input
                        className='border-o outline-none
                      focus-visible:ring-0
                      focus-visible:ring-transparent'
                        disabled={isLoading}
                        placeholder='What do you want to know?'
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button className='col-span-12 lg:col-span-2 w-full'
                disabled={isLoading}
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          Messages Content
        </div>

      </div>
    </div>
  )
}