"use client";

import { motion } from "framer-motion";
import { HelpCircle, MessageSquare } from "lucide-react";

const PreguntasFrecuentesHero = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
            className="flex items-center justify-center space-x-4 mb-4"
          >
            <HelpCircle className="h-12 w-12 text-blue-500" />
            <MessageSquare className="h-12 w-12 text-green-500" />
          </motion.div>
          <motion.h1
            className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            ¿Tienes Dudas? Encuentra las Respuestas Aquí
          </motion.h1>
          <motion.p
            className="mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Aclaramos tus preguntas más frecuentes para que tengas toda la información que necesitas.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default PreguntasFrecuentesHero;
