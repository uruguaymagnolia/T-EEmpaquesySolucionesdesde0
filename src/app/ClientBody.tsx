/* eslint-disable no-undef */
'use client';

import React, { useEffect } from 'react';

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Definimos las clases que queremos asegurar en el body
    const baseClasses = 'font-sans antialiased relative overflow-x-hidden bg-background-dark';
    
    // Aplicamos solo las clases base para evitar conflictos de hidratación con extensiones
    if (document.body.className !== baseClasses) {
      document.body.className = baseClasses;
    }
  }, []);

  return <>{children}</>;
}
