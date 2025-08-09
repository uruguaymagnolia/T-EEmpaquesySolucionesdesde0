"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactoHero = () => {
  const iconVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 10,
        delay: i * 0.2,
      },
    }),
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Contáctanos para tus Soluciones de Empaque
          </motion.h1>
          <motion.p
            className="mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Estamos listos para ayudarte a encontrar la mejor solución para tu negocio.
          </motion.p>
          <div className="mt-12 flex justify-center space-x-8">
            <motion.div custom={0} initial="hidden" animate="visible" variants={iconVariants}>
              <Phone className="h-10 w-10 text-blue-500" />
            </motion.div>
            <motion.div custom={1} initial="hidden" animate="visible" variants={iconVariants}>
              <Mail className="h-10 w-10 text-green-500" />
            </motion.div>
            <motion.div custom={2} initial="hidden" animate="visible" variants={iconVariants}>
              <MapPin className="h-10 w-10 text-red-500" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactoHero;
