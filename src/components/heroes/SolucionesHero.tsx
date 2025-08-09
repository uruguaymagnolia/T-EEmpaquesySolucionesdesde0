"use client";

import { motion } from "framer-motion";
import { Package, Settings, Lightbulb, Zap } from "lucide-react";

const SolucionesHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.5,
      },
    },
  };

  return (
    <motion.section
      className="relative overflow-hidden bg-gray-50 dark:bg-gray-900"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 text-center sm:py-32 lg:px-8">
        <motion.h1
          className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
          variants={itemVariants}
        >
          Encuentra la Solución de Empaque Perfecta para tu Negocio
        </motion.h1>
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300"
          variants={itemVariants}
        >
          Ofrecemos soluciones innovadoras y personalizadas que se adaptan a tus necesidades, optimizando tus procesos y protegiendo tus productos.
        </motion.p>
        <motion.div
          className="mt-12 flex justify-center space-x-6 sm:space-x-10"
          variants={containerVariants}
        >
          <motion.div variants={iconVariants} className="flex flex-col items-center space-y-2">
            <div className="rounded-full bg-white p-4 shadow-lg dark:bg-gray-800">
              <Package className="h-8 w-8 text-blue-500" />
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Empaques</span>
          </motion.div>
          <motion.div variants={iconVariants} className="flex flex-col items-center space-y-2">
            <div className="rounded-full bg-white p-4 shadow-lg dark:bg-gray-800">
              <Settings className="h-8 w-8 text-green-500" />
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Personalización</span>
          </motion.div>
          <motion.div variants={iconVariants} className="flex flex-col items-center space-y-2">
            <div className="rounded-full bg-white p-4 shadow-lg dark:bg-gray-800">
              <Lightbulb className="h-8 w-8 text-yellow-500" />
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Innovación</span>
          </motion.div>
           <motion.div variants={iconVariants} className="flex flex-col items-center space-y-2">
            <div className="rounded-full bg-white p-4 shadow-lg dark:bg-gray-800">
              <Zap className="h-8 w-8 text-purple-500" />
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Eficiencia</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SolucionesHero;
