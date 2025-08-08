import { ContactForm } from '@/components/landing/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactoPage() {
  return (
    <>
      <header className="bg-gradient-to-r from-[#1a2435] to-[#0e413b] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Contáctenos</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Estamos aquí para ayudarle. Envíenos un mensaje o visítenos.
          </p>
        </div>
      </header>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Información de Contacto */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Información de Contacto
                </h2>
                <p className="text-gray-600 mb-6">
                  Complete el formulario y nuestro equipo se pondrá en contacto
                  con usted en las próximas 24 horas.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <a
                      href="mailto:contacto@tempaques.com"
                      className="text-gray-800 hover:text-primary transition"
                    >
                      contacto@tempaques.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <a
                      href="tel:+123456789"
                      className="text-gray-800 hover:text-primary transition"
                    >
                      +1 (234) 567-89
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <p className="text-gray-800">
                      Calle Ficticia 123, Ciudad, País
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario de Contacto */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Envíenos un mensaje
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
