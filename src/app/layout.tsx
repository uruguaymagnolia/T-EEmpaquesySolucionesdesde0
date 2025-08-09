import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/Header';
import { Footer } from '@/components/footer';
import { ScrollProgress } from '@/components/animations/scroll-animations';
import { CustomParticles } from '@/components/background/custom-particles';
import { BackToTopButton } from '@/components/common/BackToTopButton';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'T & E Empaques y Soluciones',
  description: 'Soluciones de empaque innovadoras y personalizadas.',
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable}`}>
       <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1a2435" />
      </head>
      <body className="font-sans antialiased relative overflow-x-hidden bg-background-dark">
        <ScrollProgress />
        <CustomParticles />
        <div className="flex flex-col min-h-screen relative z-10">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
        <BackToTopButton />
      </body>
    </html>
  );
}
