
'use client';

import { ScrollReveal } from '@/components/animations/scroll-animations';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function TerminosDeServicioPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
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
            Términos de Servicio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto"
          >
            Última actualización: {isClient ? new Date().toLocaleDateString('es-ES') : '24 de Julio, 2024'}
          </motion.p>
        </div>
      </header>

      <main className="relative py-16 md:py-24">
        <ScrollReveal className="container mx-auto px-4 max-w-4xl space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              1. Aceptación de los Términos
            </h2>
            <p>
              Al acceder y utilizar nuestro sitio web y servicios, usted acepta
              y se compromete a cumplir con estos Términos de Servicio y todas
              las leyes y regulaciones aplicables. Si no está de acuerdo con
              alguno de estos términos, tiene prohibido usar o acceder a este
              sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              2. Uso del Servicio
            </h2>
            <p>
              Se le concede un permiso limitado, no exclusivo y no transferible
              para acceder y utilizar el servicio para fines personales y no
              comerciales, sujeto a estos Términos. No debe utilizar el servicio
              para ningún propósito ilegal o no autorizado.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              3. Propiedad Intelectual
            </h2>
            <p>
              El Servicio y su contenido original, características y
              funcionalidad son y seguirán siendo propiedad exclusiva de T & E
              Empaques y Soluciones y sus licenciantes. El servicio está
              protegido por derechos de autor, marcas registradas y otras leyes
              tanto de nuestro país como de países extranjeros.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              4. Limitación de Responsabilidad
            </h2>
            <p>
              En ningún caso T & E Empaques y Soluciones, ni sus directores,
              empleados, socios, agentes, proveedores o afiliados, serán
              responsables de ningún daño indirecto, incidental, especial,
              consecuente o punitivo, incluyendo, entre otros, la pérdida de
              ganancias, datos, uso, buena voluntad u otras pérdidas
              intangibles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              5. Ley Aplicable
            </h2>
            <p>
              Estos Términos se regirán e interpretarán de acuerdo con las leyes
              de nuestro país, sin tener en cuenta sus disposiciones sobre
              conflicto de leyes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              6. Cambios a los Términos
            </h2>
            <p>
              Nos reservamos el derecho, a nuestra sola discreción, de modificar
              o reemplazar estos Términos en cualquier momento. Si una revisión
              es material, intentaremos proporcionar un aviso con al menos 30
              días de anticipación antes de que entren en vigor los nuevos
              términos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              7. Contacto
            </h2>
            <p>
              Si tiene alguna pregunta sobre estos Términos, por favor
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
