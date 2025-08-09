'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  ScrollReveal,
  ScrollStaggerContainer,
  ScrollStaggerItem,
} from '../animations/scroll-animations';
import { createMessage, type FormState } from '@/app/actions/contact';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres.'),
  email: z.string().email('Por favor, introduce un email válido.'),
  message: z
    .string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres.'),
});

type FormData = z.infer<typeof formSchema>;

const initialState: FormState = {
  message: '',
  status: 'idle',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
      size="lg"
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Enviando...
        </>
      ) : (
        'Enviar Mensaje'
      )}
    </Button>
  );
}

const ContactFormSection: React.FC = () => {
  const { toast } = useToast();
  const [state, formAction] = useActionState(createMessage, initialState);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  React.useEffect(() => {
    if (state.status === 'success') {
      toast({
        title: '¡Mensaje Enviado!',
        description: state.message,
        variant: 'default',
      });
      form.reset();
    } else if (state.status === 'error') {
      toast({
        title: 'Error al enviar',
        description: state.message,
        variant: 'destructive',
      });
    }
  }, [state, toast, form]);

  return (
    <ScrollReveal>
      <section className="bg-background-light py-20 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              Contáctanos
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              ¿Tienes alguna pregunta o quieres empezar un proyecto? Envíanos un
              mensaje.
            </p>
          </div>

          <ScrollStaggerContainer
            className="mx-auto mt-12 max-w-xl"
            staggerChildren={0.1}
          >
            <motion.div
              whileHover={{
                boxShadow: '0 0 25px hsla(var(--primary), 0.3)',
                y: -5,
              }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="rounded-xl border border-border/50 bg-background-light/50 p-6 sm:p-8 backdrop-blur-sm"
            >
              <Form {...form}>
                <form
                  action={async (formData) => {
                    const valid = await form.trigger();
                    if (valid) {
                      formAction(formData);
                    }
                  }}
                  className="space-y-6"
                >
                  <ScrollStaggerItem>
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Nombre</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Tu nombre completo"
                              {...field}
                              className="bg-background-dark/50 border-border text-foreground"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </ScrollStaggerItem>
                  <ScrollStaggerItem>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">
                            Correo Electrónico
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="tu@email.com"
                              {...field}
                              className="bg-background-dark/50 border-border text-foreground"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </ScrollStaggerItem>
                  <ScrollStaggerItem>
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Mensaje</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="¿En qué podemos ayudarte?"
                              rows={5}
                              {...field}
                              className="resize-none bg-background-dark/50 border-border text-foreground"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </ScrollStaggerItem>
                  <ScrollStaggerItem>
                    <SubmitButton />
                  </ScrollStaggerItem>
                </form>
              </Form>
            </motion.div>
          </ScrollStaggerContainer>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default ContactFormSection;
