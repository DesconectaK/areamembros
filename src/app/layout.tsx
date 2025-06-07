
import type { Metadata } from 'next';
import './globals.css';
import { BottomNavigationBar } from '@/components/layout/bottom-navigation-bar';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';
import React from 'react';
import { ClientLayoutEffects } from '@/components/layout/client-layout-effects';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter', // Opcional: se você quiser usar como variável CSS
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
    <html lang="pt-BR" className={cn("dark", inter.variable)}>
      <head>
        {/* metadata.robots will be handled by Next.js, but explicit meta tag can remain if desired */}
        {/* <meta name="robots" content="noindex, nofollow" /> */}
        {/* As fontes do Google agora são gerenciadas pelo next/font */}
      </head>
      <body
        suppressHydrationWarning
        className={cn(
        "font-body antialiased flex flex-col min-h-screen bg-background text-foreground",
        // Se você definiu inter.variable, pode usá-lo aqui ou diretamente no fontFamily do tailwind.config.ts
        // Se não usou variable, o next/font aplica a fonte globalmente se for o caso.
        // Para tailwind, você pode configurar 'font-body' para usar 'var(--font-inter)'
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
