import { ContactForm } from '@/components/landing/ContactForm';
import { companyData } from '@/lib/data';
import { Mail, Phone, MapPin } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import ContactoHero from '@/components/heroes/ContactoHero';

export default function ContactoPage() {
  return (
    <div className="bg-background-dark">
      <ContactoHero />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Información de Contacto */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Información de Contacto
                </h2>
                <p className="text-muted-foreground mb-6">
                  Complete el formulario y nuestro equipo se pondrá en contacto
                  con usted en las próximas 24 horas.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <a
                      href={`mailto:${companyData.email}`}
                      className="text-foreground hover:text-primary transition"
                    >
                      {companyData.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <a
                      href={companyData.phone.href}
                      className="text-foreground hover:text-primary transition"
                    >
                      {companyData.phone.number}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <p className="text-foreground">{companyData.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario de Contacto */}
            <Card className="bg-slate-800/50 border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white">
                  Envíenos un mensaje
                </CardTitle>
                <CardDescription>
                  Nos encantaría saber de usted.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
