'use server';

/**
 * @fileOverview An AI agent for suggesting content ideas and design variations.
 *
 * - suggestContentIdeas - A function that generates content suggestions.
 * - SuggestContentIdeasInput - The input type for the suggestContentIdeas function.
 * - SuggestContentIdeasOutput - The return type for the suggestContentIdeas function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestContentIdeasInputSchema = z.object({
  applicationStructure: z
    .string()
    .describe('The structure of the application, including sections and pages.'),
  userNeeds: z.string().describe('The specific needs and goals of the user.'),
});
export type SuggestContentIdeasInput = z.infer<typeof SuggestContentIdeasInputSchema>;

const SuggestContentIdeasOutputSchema = z.object({
  contentSuggestions: z
    .array(z.string())
    .describe('A list of content ideas or design variations.'),
});
export type SuggestContentIdeasOutput = z.infer<typeof SuggestContentIdeasOutputSchema>;

export async function suggestContentIdeas(input: SuggestContentIdeasInput): Promise<SuggestContentIdeasOutput> {
  return suggestContentIdeasFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestContentIdeasPrompt',
  input: {schema: SuggestContentIdeasInputSchema},
  output: {schema: SuggestContentIdeasOutputSchema},
  prompt: `You are an AI assistant specialized in suggesting content ideas and design variations for web applications.

  Based on the provided application structure and user needs, generate a list of creative and relevant content suggestions.

  Application Structure: {{{applicationStructure}}}
  User Needs: {{{userNeeds}}}

  Please provide a list of content ideas that align with the application structure and fulfill the user's needs. Give me multiple options. Focus on content that would be displayed on the main content area of the app.
  The response must be in Spanish.
  `,
});

const suggestContentIdeasFlow = ai.defineFlow(
  {
    name: 'suggestContentIdeasFlow',
    inputSchema: SuggestContentIdeasInputSchema,
    outputSchema: SuggestContentIdeasOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
