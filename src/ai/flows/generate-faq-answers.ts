'use server';

/**
 * @fileOverview A flow to generate answers to frequently asked questions.
 *
 * - generateFAQAnswers - A function that generates answers to FAQs.
 * - GenerateFAQAnswersInput - The input type for the generateFAQAnswers function.
 * - GenerateFAQAnswersOutput - The return type for the generateFAQAnswers function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateFAQAnswersInputSchema = z.object({
  topic: z.string().describe('The topic for which to generate FAQs.'),
  numQuestions: z.number().describe('The number of questions to generate.'),
});
export type GenerateFAQAnswersInput = z.infer<typeof GenerateFAQAnswersInputSchema>;

const GenerateFAQAnswersOutputSchema = z.object({
  faqList: z.array(
    z.object({
      question: z.string().describe('The generated question.'),
      answer: z.string().describe('The generated answer.'),
    })
  ).
describe('A list of frequently asked questions and their answers.'),
});
export type GenerateFAQAnswersOutput = z.infer<typeof GenerateFAQAnswersOutputSchema>;

export async function generateFAQAnswers(input: GenerateFAQAnswersInput): Promise<GenerateFAQAnswersOutput> {
  return generateFAQAnswersFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateFAQAnswersPrompt',
  input: {schema: GenerateFAQAnswersInputSchema},
  output: {schema: GenerateFAQAnswersOutputSchema},
  prompt: `You are an expert at creating FAQs for a given topic.

  Generate {{numQuestions}} frequently asked questions and answers about {{topic}}.

  Format the questions and answers as a JSON array of objects, where each object has a "question" and "answer" field.
  `,
});

const generateFAQAnswersFlow = ai.defineFlow(
  {
    name: 'generateFAQAnswersFlow',
    inputSchema: GenerateFAQAnswersInputSchema,
    outputSchema: GenerateFAQAnswersOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
