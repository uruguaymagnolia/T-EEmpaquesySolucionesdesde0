"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ProductosHero = () => {
  return (
    <section className="relative bg-white dark:bg-gray-900">
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold leading-none sm:text-5xl"
        >
          Explora Nuestro Catálogo Completo de{" "}
          <span className="text-blue-600 dark:text-blue-400">
            Productos de Empaque
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 mb-8 text-lg sm:mb-12"
        >
          Calidad y variedad en cada empaque, diseñados para proteger y realzar tus productos.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          className="w-full"
        >
          <Image
            src="https://images.unsplash.com/photo-1595126334341-419317535426?q=80&w=2070&auto=format&fit=crop"
            alt="Productos de empaque"
            width={800}
            height={400}
            className="w-full rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ProductosHero;
