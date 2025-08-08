'use client';

import React, { useState } from 'react';
import {
  APIProvider,
  Map,
  AdvancedMarker,
} from '@vis.gl/react-google-maps';
import { ScrollReveal } from '@/components/animations/scroll-animations';
import { companyData } from '@/lib/data';
import { AnimatePresence, motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Logo } from '../logo';
import { Mail, MapPin, Phone } from 'lucide-react';

const containerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '1rem',
  border: '1px solid rgba(71, 85, 105, 0.5)',
};

const position = {
  lat: companyData.location.lat,
  lng: companyData.location.lng,
};

export function MapSection() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const [infoWindowOpen, setInfoWindowOpen] = useState(false);

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
            Encuéntranos en el <span className="text-primary">Mapa</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Visita nuestras instalaciones o contáctanos directamente.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <motion.div
          whileHover={{
            boxShadow: '0 0 25px rgba(154, 218, 52, 0.2)',
            y: -5,
          }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="relative h-[60vh] min-h-[500px] bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-slate-700/50 overflow-hidden"
        >
          <APIProvider apiKey={apiKey}>
            <Map
              style={containerStyle}
              defaultCenter={position}
              defaultZoom={15}
              gestureHandling={'greedy'}
              disableDefaultUI={true}
              mapId="t-and-e-map"
              onClick={() => setInfoWindowOpen(false)}
            >
              <AdvancedMarker
                position={position}
                onClick={() => setInfoWindowOpen(true)}
              >
                <motion.div
                  className="relative"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'easeInOut',
                  }}
                >
                  <div className="absolute -inset-2 rounded-full bg-primary/30 blur-md" />
                  <div className="relative w-12 h-12 rounded-full bg-slate-900 border-2 border-primary p-2 shadow-lg">
                     <Logo />
                  </div>
                </motion.div>
                <AnimatePresence>
                  {infoWindowOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.95 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-80"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Card className="border-slate-700 bg-slate-900/80 backdrop-blur-md shadow-2xl">
                        <CardHeader>
                          <Logo />
                        </CardHeader>
                        <CardContent className="space-y-3 text-sm">
                          <div className="flex items-start gap-3">
                            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span className="text-gray-300">
                              {companyData.address}
                            </span>
                          </div>
                          <div className="flex items-start gap-3">
                            <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <a
                              href={companyData.phone.href}
                              className="text-gray-300 hover:text-primary transition-colors"
                            >
                              {companyData.phone.number}
                            </a>
                          </div>
                          <div className="flex items-start gap-3">
                            <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <a
                              href={`mailto:${companyData.email}`}
                              className="text-gray-300 hover:text-primary transition-colors"
                            >
                              {companyData.email}
                            </a>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )}
                </AnimatePresence>
              </AdvancedMarker>
            </Map>
          </APIProvider>
        </motion.div>
      </ScrollReveal>
    </section>
  );
}

<Card className="w-80 border-slate-700 bg-slate-900/80 backdrop-blur-md shadow-2xl">
  <CardHeader>
    <Logo />
  </CardHeader>
  <CardContent className="space-y-3 text-sm">
    <div className="flex items-start gap-3">
      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
      <span className="text-gray-300">{companyData.address}</span>
    </div>
    <div className="flex items-start gap-3">
      <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
      <a
        href={companyData.phone.href}
        className="text-gray-300 hover:text-primary transition-colors"
      >
        {companyData.phone.number}
      </a>
    </div>
    <div className="flex items-start gap-3">
      <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
      <a
        href={`mailto:${companyData.email}`}
        className="text-gray-300 hover:text-primary transition-colors"
      >
        {companyData.email}
      </a>
    </div>
  </CardContent>
</Card>
