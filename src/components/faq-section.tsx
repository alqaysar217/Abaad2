'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2, Wand2 } from 'lucide-react';

import { handleGenerateFaq } from '@/app/faq/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import type { GenerateFAQAnswersOutput } from '@/ai/flows/generate-faq-answers';

const formSchema = z.object({
  topic: z.string().min(2, { message: 'الموضوع مطلوب.' }),
  numQuestions: z.coerce.number().min(1, { message: 'يجب أن يكون العدد 1 على الأقل.' }).max(10, { message: 'الحد الأقصى هو 10 أسئلة.' }),
});

export function FaqSection() {
  const [faqList, setFaqList] = useState<GenerateFAQAnswersOutput['faqList']>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: 'الدورات التدريبية',
      numQuestions: 5,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setFaqList([]);
    const result = await handleGenerateFaq(values.topic, values.numQuestions);
    setIsLoading(false);

    if ('error' in result) {
      toast({
        title: 'حدث خطأ',
        description: result.error,
        variant: 'destructive',
      });
    } else if (result.faqList) {
      setFaqList(result.faqList);
    }
  }

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-1">
        <Card>
          <CardHeader>
            <CardTitle>إنشاء أسئلة شائعة</CardTitle>
            <CardDescription>
              استخدم الذكاء الاصطناعي لإنشاء إجابات لأسئلة الطلاب والمدربين حول أي موضوع.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="topic"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>الموضوع</FormLabel>
                      <FormControl>
                        <Input placeholder="مثال: التسجيل في المعهد" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="numQuestions"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>عدد الأسئلة</FormLabel>
                      <FormControl>
                        <Input type="number" min="1" max="10" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
                  إنشاء الأسئلة
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
      <div className="lg:col-span-2">
        {isLoading && (
          <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-muted-foreground">
            <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
            <p>جاري إنشاء الأسئلة...</p>
          </div>
        )}
        {!isLoading && faqList.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full min-h-[300px] bg-secondary rounded-lg text-muted-foreground p-8">
            <p className="text-center">سيتم عرض الأسئلة والأجوبة التي تم إنشاؤها هنا.</p>
          </div>
        )}
        {faqList.length > 0 && (
          <Accordion type="single" collapsible className="w-full">
            {faqList.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-right">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </div>
  );
}
