
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
  weight: ['400'], 
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
        {/* Vturb Speed Optimization Links */}
        <link rel="preload" href="https://scripts.converteai.net/203430db-ad79-48e2-a8e6-4634be611b23/players/684571184440c57b29707b22/player.js" as="script" />
        <link rel="preload" href="https://scripts.converteai.net/lib/js/smartplayer/v1/smartplayer.min.js" as="script" />
        <link rel="preload" href="https://images.converteai.net/203430db-ad79-48e2-a8e6-4634be611b23/players/684571184440c57b29707b22/thumbnail.jpg" as="image" />
        <link rel="preload" href="https://cdn.converteai.net/203430db-ad79-48e2-a8e6-4634be611b23/68457114cc0bad7373a1e313/main.m3u8" as="fetch" />
        <link rel="dns-prefetch" href="https://cdn.converteai.net" />
        <link rel="dns-prefetch" href="https://scripts.converteai.net" />
        <link rel="dns-prefetch" href="https://images.converteai.net" />
        <link rel="dns-prefetch" href="https://api.vturb.com.br" />
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
