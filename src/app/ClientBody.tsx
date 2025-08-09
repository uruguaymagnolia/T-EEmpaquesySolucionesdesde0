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
    
    // Aplicamos las clases base en el cliente para evitar conflictos de hidratación
    document.body.className = baseClasses;
    
  }, []);

  return <>{children}</>;
}
