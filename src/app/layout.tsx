
import type { Metadata } from 'next';
import './globals.css';
import { BottomNavigationBar } from '@/components/layout/bottom-navigation-bar';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';
import React from 'react';
import { ClientLayoutEffects } from '@/components/layout/client-layout-effects';
import { Archivo_Black } from 'next/font/google';

const archivo_black = Archivo_Black({ 
  subsets: ['latin'],
  weight: ['400'], // Archivo Black has only one weight, '400', which is its "Black" style
  display: 'swap',
  variable: '--font-archivo-black',
});

export const metadata: Metadata = {
  title: 'Navegação Persistente App',
  description: 'App com navegação persistente no rodapé',
  robots: 'noindex, nofollow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={cn("dark", archivo_black.variable)}>
      <head>
        {/* metadata.robots will be handled by Next.js */}
      </head>
      <body
        suppressHydrationWarning
        className={cn(
        "font-body antialiased flex flex-col min-h-screen bg-background text-foreground"
      )}>
        <ClientLayoutEffects />
        <main className="flex-grow pb-nav-height">
          {children}
        </main>
        <BottomNavigationBar />
        <Toaster />
      </body>
    </html>
  );
}
