
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
        {/* Vturb Speed Optimization Links - GUIA ESSENCIAL PARA PAIS */}
        <link rel="preload" href="https://scripts.converteai.net/203430db-ad79-48e2-a8e6-4634be611b23/players/684594984440c57b2970977a/player.js" as="script" />
        <link rel="preload" href="https://scripts.converteai.net/lib/js/smartplayer/v1/smartplayer.min.js" as="script" />
        <link rel="preload" href="https://images.converteai.net/203430db-ad79-48e2-a8e6-4634be611b23/players/684594984440c57b2970977a/thumbnail.jpg" as="image" />
        <link rel="preload" href="https://cdn.converteai.net/203430db-ad79-48e2-a8e6-4634be611b23/68459494e902f4ba338486d4/main.m3u8" as="fetch" />

        {/* Vturb Speed Optimization Links - CALENDÁRIO DE ATIVIDADES */}
        <link rel="preload" href="https://scripts.converteai.net/203430db-ad79-48e2-a8e6-4634be611b23/players/68460bc50cb5938a2b623a22/player.js" as="script" />
        {/* smartplayer.min.js is likely redundant if already loaded by the first video, but included per user's provided code */}
        <link rel="preload" href="https://scripts.converteai.net/lib/js/smartplayer/v1/smartplayer.min.js" as="script" />
        <link rel="preload" href="https://images.converteai.net/203430db-ad79-48e2-a8e6-4634be611b23/players/68460bc50cb5938a2b623a22/thumbnail.jpg" as="image" />
        <link rel="preload" href="https://cdn.converteai.net/203430db-ad79-48e2-a8e6-4634be611b23/68460bc19e7c5a8cbd6feea1/main.m3u8" as="fetch" />
        
        {/* Generic Vturb DNS Prefetch (already present, no duplication needed unless domains change) */}
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

    