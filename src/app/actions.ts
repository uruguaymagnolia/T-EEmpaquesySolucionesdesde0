'use server';

import { suggestContentIdeas, type SuggestContentIdeasOutput } from '@/ai/flows/suggest-content-ideas';
import { z } from 'zod';

const applicationStructure = `
- Barra Lateral de Navegación: Inicio, Productos, Servicios, Contacto.
- Área de Contenido Principal: Muestra el contenido de la sección activa.
- Pie de página: Información de copyright.
`;

const schema = z.object({
  userNeeds: z.string().min(10, { message: 'Por favor, describe tus necesidades con más detalle (mínimo 10 caracteres).' }),
});

export type FormState = {
  message: string | null;
  data: SuggestContentIdeasOutput | null;
  error: boolean;
}

export async function getSuggestions(prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = schema.safeParse({
    userNeeds: formData.get('userNeeds'),
  });
  
  if (!validatedFields.success) {
    return {
      message: validatedFields.error.flatten().fieldErrors.userNeeds?.[0] || 'Error de validación.',
      data: null,
      error: true,
    }
  }

  try {
    const result = await suggestContentIdeas({
      applicationStructure,
      userNeeds: validatedFields.data.userNeeds,
    });
    return {
      message: 'Sugerencias generadas exitosamente.',
      data: result,
      error: false
    };
  } catch (e) {
    console.error(e);
    return {
      message: 'Ha ocurrido un error al generar las sugerencias. Por favor, intenta de nuevo.',
      data: null,
      error: true,
    };
  }
}
