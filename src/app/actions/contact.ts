'use server';

import prisma from '@/lib/prisma';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres.'),
  email: z.string().email('Por favor, introduce un email válido.'),
  message: z
    .string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres.'),
});

export type FormState = {
  message: string;
  status: 'idle' | 'success' | 'error';
};

export async function createMessage(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = formSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    const errorMessages = validatedFields.error.flatten().fieldErrors;
    const firstError =
      Object.values(errorMessages)[0]?.[0] || 'Error de validación.';
    return {
      message: firstError,
      status: 'error',
    };
  }

  const { name, email, message } = validatedFields.data;

  try {
    await prisma.message.create({
      data: {
        name,
        email,
        message,
      },
    });

    return {
      message: 'Gracias por tu mensaje. Te responderemos pronto.',
      status: 'success',
    };
  } catch (e) {
    console.error(e);
    return {
      message:
        'Ha ocurrido un error al enviar el mensaje. Por favor, inténtalo de nuevo.',
      status: 'error',
    };
  }
}
