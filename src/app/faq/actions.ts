// src/app/faq/actions.ts
'use server';
import { generateFAQAnswers, type GenerateFAQAnswersOutput } from '@/ai/flows/generate-faq-answers';

export async function handleGenerateFaq(topic: string, numQuestions: number): Promise<GenerateFAQAnswersOutput | { error: string }> {
  if (!topic || !numQuestions) {
    return { error: 'الرجاء إدخال الموضوع وعدد الأسئلة.' };
  }
  
  try {
    const result = await generateFAQAnswers({ topic, numQuestions: Number(numQuestions) });
    return result;
  } catch (e) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred';
    return { error: `فشل في إنشاء الأسئلة: ${errorMessage}` };
  }
}
