import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function CtaSection() {
  return (
    <section className="py-16 md:py-24 bg-background-alt">
      <div className="container mx-auto px-4">
        <div className="bg-background-light/50 backdrop-blur-sm border border-border/50 p-8 md:p-12 rounded-lg shadow-lg flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-foreground">
              ¿Listos para transformar su empaque?
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Nuestro equipo de expertos está preparado para crear la solución perfecta que su producto merece.
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex-shrink-0">
            <Link href="/contacto">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Solicitar una Cotización
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
