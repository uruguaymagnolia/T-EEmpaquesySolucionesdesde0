'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { getSuggestions, type FormState } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Loader2, FileText } from 'lucide-react';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

const initialState: FormState = {
  message: null,
  data: null,
  error: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generando...
        </>
      ) : (
        <>
          <Lightbulb className="mr-2 h-4 w-4" />
          Generar Ideas
        </>
      )}
    </Button>
  );
}

export default function AIContentSuggester() {
  const [state, formAction] = useFormState(getSuggestions, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if(state.message && state.error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.message,
      })
    }
  }, [state, toast]);


  return (
    <div className="mx-auto max-w-3xl">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Lightbulb className="text-primary" />
            <span>Asistente de Contenido IA</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-muted-foreground">
            Describe las necesidades de tu cliente o el objetivo de tu contenido, y nuestra IA te
            proporcionará algunas ideas creativas para empezar.
          </p>
          <form action={formAction} className="space-y-4">
            <Textarea
              name="userNeeds"
              placeholder="Ej: 'Necesito contenido para una nueva línea de empaques ecológicos para alimentos. El objetivo es destacar que son biodegradables y seguros para el contacto con alimentos...'"
              rows={5}
              required
              className="resize-none"
            />
            <div className="flex justify-end">
              <SubmitButton />
            </div>
          </form>
        </CardContent>
      </Card>

      {state.data?.contentSuggestions && state.data.contentSuggestions.length > 0 && (
        <div className="mt-8 space-y-6">
            <h2 className="text-2xl font-semibold text-center">Ideas de Contenido Sugeridas</h2>
            <div className="grid gap-4 md:grid-cols-2">
            {state.data.contentSuggestions.map((suggestion, index) => (
                <Card key={index} className="transform transition-transform hover:scale-105">
                <CardHeader className="flex flex-row items-center gap-3 space-y-0 pb-2">
                    <div className="p-2 rounded-full bg-primary/10">
                        <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-medium">Sugerencia #{index + 1}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{suggestion}</p>
                </CardContent>
                </Card>
            ))}
            </div>
        </div>
      )}
    </div>
  );
}
