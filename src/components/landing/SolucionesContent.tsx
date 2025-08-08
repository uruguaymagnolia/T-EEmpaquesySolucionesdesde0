import { solutions } from '@/lib/mock-solutions';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Check } from 'lucide-react';

export function SolucionesContent() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {solutions.map((solution) => {
          const Icon = solution.icon;
          return (
            <Card key={solution.title} className="flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4">
                <Icon className="size-10 text-primary" />
                <CardTitle className="text-2xl">{solution.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-muted-foreground mb-4">
                  {solution.detailedDescription}
                </p>
                <div className="mt-auto">
                  <h4 className="font-semibold mb-2 text-foreground">
                    Características Clave
                  </h4>
                  <ul className="space-y-2">
                    {solution.keyFeatures.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="size-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
