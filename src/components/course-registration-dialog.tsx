'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Course } from '@/lib/types';

const formSchema = z.object({
  name: z.string().min(2, { message: 'الاسم مطلوب.' }),
  phone: z.string().min(9, { message: 'رقم الهاتف مطلوب وصحيح.' }),
});

type CourseRegistrationDialogProps = {
  course: Course;
};

export function CourseRegistrationDialog({ course }: CourseRegistrationDialogProps) {
  const [open, setOpen] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const message = `أرغب بالتسجيل في دورة: ${course.title}\n\nالاسم: ${values.name}\nالهاتف: ${values.phone}\nالمجال: ${course.category}`;
    const whatsappUrl = `https://wa.me/967776999568?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    setOpen(false);
    form.reset();
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="w-full animate-pulse">التسجيل عبر واتساب</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>التسجيل في دورة: {course.title}</DialogTitle>
          <DialogDescription>
            الرجاء إدخال بياناتك لإكمال التسجيل عبر واتساب.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>الاسم الكامل</FormLabel>
                  <FormControl>
                    <Input placeholder="مثال: أحمد علي" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>رقم الهاتف (مع فتح الخط)</FormLabel>
                  <FormControl>
                    <Input placeholder="مثال: 967776999568" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <DialogFooter>
                <DialogClose asChild>
                    <Button type="button" variant="secondary">إلغاء</Button>
                </DialogClose>
                <Button type="submit">إرسال عبر واتساب</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
