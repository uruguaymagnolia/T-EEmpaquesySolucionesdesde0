
'use client';

import { ScrollReveal } from '@/components/animations/scroll-animations';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function PoliticaDePrivacidadPage() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString('es-ES'));
  }, []);

  return (
    <div className="bg-slate-900 text-gray-300">
      <header className="bg-gradient-to-r from-[#1a2435] to-[#0e413b] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Política de Privacidad
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto"
          >
            Última actualización: {currentDate}
          </motion.p>
        </div>
      </header>

      <main className="py-16 md:py-24">
        <ScrollReveal className="container mx-auto px-4 max-w-4xl space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              1. Introducción
            </h2>
            <p>
              Bienvenido a T & E Empaques y Soluciones. Nos comprometemos a
              proteger su privacidad. Esta Política de Privacidad explica cómo
              recopilamos, usamos, divulgamos y salvaguardamos su información
              cuando visita nuestro sitio web. Lea esta política de privacidad
              detenidamente. Si no está de acuerdo con los términos de esta
              política de privacidad, no acceda al sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              2. Información que Recopilamos
            </h2>
            <p>
              Podemos recopilar información sobre usted de varias maneras. La
              información que podemos recopilar en el Sitio incluye:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>
                <strong>Datos Personales:</strong> Información de identificación
                personal, como su nombre, dirección de correo electrónico y
                número de teléfono, que nos proporciona voluntariamente cuando se
                registra en el Sitio o cuando elige participar en diversas
                actividades relacionadas con el Sitio, como contactarnos a
                través de nuestro formulario.
              </li>
              <li>
                <strong>Datos Derivados:</strong> Información que nuestros
                servidores recopilan automáticamente cuando accede al Sitio, como
                su dirección IP, su tipo de navegador, su sistema operativo, sus
                tiempos de acceso y las páginas que ha visto directamente antes y
                después de acceder al Sitio.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              3. Uso de la Información
            </h2>
            <p>
              Tener información precisa sobre usted nos permite brindarle una
              experiencia fluida, eficiente y personalizada. Específicamente,
              podemos usar la información recopilada sobre usted a través del
              Sitio para:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>
                Responder a sus solicitudes de productos y servicios y a sus
                consultas.
              </li>
              <li>Enviarle un correo electrónico de confirmación.</li>
              <li>
                Administrar sorteos, promociones, encuestas u otras
                características del sitio.
              </li>
              <li>
                Mejorar nuestro sitio web y nuestros esfuerzos de marketing.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              4. Compartir su Información
            </h2>
            <p>
              No compartiremos su información con terceros para sus fines de
              marketing. Podemos compartir la información que hemos recopilado
              sobre usted en ciertas situaciones. Su información puede ser
              divulgada de la siguiente manera:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>
                <strong>Por Ley o para Proteger Derechos:</strong> Si creemos que
                la divulgación de información sobre usted es necesaria para
                responder a un proceso legal, para investigar o remediar
                posibles violaciones de nuestras políticas, o para proteger los
                derechos, la propiedad y la seguridad de otros, podemos compartir
                su información según lo permita o exija cualquier ley, regla o
                regulación aplicable.
              </li>
              <li>
                <strong>Proveedores de Servicios de Terceros:</strong> Podemos
                compartir su información con terceros que realizan servicios
                para nosotros o en nuestro nombre, incluido el procesamiento de
                pagos, el análisis de datos, el envío de correos electrónicos,
                los servicios de alojamiento, el servicio al cliente y la
                asistencia de marketing.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              5. Sus Derechos
            </h2>
            <p>
              Usted tiene derecho a acceder, corregir o eliminar su información
              personal. También puede tener derecho a oponerse o restringir
              ciertos tipos de procesamiento de su información. Para ejercer
              estos derechos, contáctenos utilizando la información de contacto a
              continuación.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              6. Cambios a esta Política
            </h2>
            <p>
              Nos reservamos el derecho de realizar cambios a esta Política de
              Privacidad en cualquier momento y por cualquier motivo. Le
              alertaremos sobre cualquier cambio actualizando la fecha de "Última
              actualización" de esta Política de Privacidad. Se le anima a
              revisar periódicamente esta Política de Privacidad para mantenerse
              informado de las actualizaciones.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              7. Contacto
            </h2>
            <p>
              Si tiene preguntas o comentarios sobre esta Política de Privacidad,
              contáctenos en:
              <br />
              <a
                href="mailto:contacto@tempaques.com"
                className="text-primary hover:underline"
              >
                contacto@tempaques.com
              </a>
            </p>
          </section>
        </ScrollReveal>
      </main>
    </div>
  );
}
