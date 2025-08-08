'use client';

import React from 'react';
import {
  APIProvider,
  Map,
  AdvancedMarker,
} from '@vis.gl/react-google-maps';
import { ScrollReveal } from '@/components/animations/scroll-animations';
import { companyData } from '@/lib/data';
import { motion } from 'framer-motion';

const containerStyle = {
  width: '100%',
  height: '500px',
  borderRadius: '1rem',
  border: '1px solid rgba(71, 85, 105, 0.5)',
};

const position = {
  lat: companyData.location.lat,
  lng: companyData.location.lng,
};

export function MapSection() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return (
      <div className="flex items-center justify-center h-[500px] text-gray-400">
        La clave API de Google Maps no está configurada.
      </div>
    );
  }

  return (
    <section
      id="ubicacion"
      className="py-20 px-6 max-w-7xl mx-auto relative z-20"
    >
      <ScrollReveal>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Encuéntranos en el <span className="text-green-400">Mapa</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Visita nuestras instalaciones o contáctanos directamente.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <motion.div
          whileHover={{
            boxShadow: '0 0 25px rgba(16, 185, 129, 0.2)',
            y: -5,
          }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-slate-700/50 overflow-hidden"
        >
          <APIProvider apiKey={apiKey}>
            <Map
              style={containerStyle}
              defaultCenter={position}
              defaultZoom={15}
              gestureHandling={'greedy'}
              disableDefaultUI={true}
              mapId="t-and-e-map"
            >
              <AdvancedMarker position={position} />
            </Map>
          </APIProvider>
        </motion.div>
      </ScrollReveal>
    </section>
  );
}
