"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedCounter } from "@/components/common/AnimatedCounter";

const ProyectosHero = () => {
  return (
    <div className="relative bg-gray-100 dark:bg-gray-800 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Nuestros Casos de Éxito Hablan por Sí Mismos
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Experiencia en soluciones de empaque para diversas industrias.
          </p>
        </motion.div>
      </div>
      <div className="relative mt-16">
        <div className="container mx-auto">
            <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-center lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
                <div className="flex flex-col items-center">
                    <dt className="text-base leading-7 text-gray-600 dark:text-gray-400">Proyectos Completados</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                        <AnimatedCounter value={150} />+
                    </dd>
                </div>
                <div className="flex flex-col items-center">
                    <dt className="text-base leading-7 text-gray-600 dark:text-gray-400">Años de Experiencia</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                        <AnimatedCounter value={10} />+
                    </dd>
                </div>
                <div className="flex flex-col items-center">
                    <dt className="text-base leading-7 text-gray-600 dark:text-gray-400">Clientes Satisfechos</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                        <AnimatedCounter value={50} />+
                    </dd>
                </div>
            </dl>
        </div>
      </div>
    </div>
  );
};

export default ProyectosHero;
