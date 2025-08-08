'use client'

import React, { useCallback } from 'react'
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api'
import { ScrollReveal } from '@/components/animations/scroll-animations'
import { companyData } from '@/lib/data'

const containerStyle = {
  width: '100%',
  height: '500px',
  borderRadius: '1rem', // rounded-xl
  border: '1px solid rgba(71, 85, 105, 0.5)' // border-slate-700/50
}

const center = {
  lat: companyData.location.lat,
  lng: companyData.location.lng
}

export function MapSection() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  })

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    // Puedes hacer cosas con el mapa aquí si lo necesitas
  }, [])

  const onUnmount = useCallback(function callback(map: google.maps.Map) {
    // Limpieza si es necesario
  }, [])

  return (
    <section id="ubicacion" className="py-20 px-6 max-w-7xl mx-auto relative z-20">
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
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-slate-700/50 overflow-hidden">
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={15}
              onLoad={onLoad}
              onUnmount={onUnmount}
              options={{
                disableDefaultUI: true,
                zoomControl: true,
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
              }}
            >
              <MarkerF position={center} />
            </GoogleMap>
          ) : (
            <div className="flex items-center justify-center h-[500px] text-gray-400">
              Cargando mapa...
            </div>
          )}
        </div>
      </ScrollReveal>
    </section>
  )
}
