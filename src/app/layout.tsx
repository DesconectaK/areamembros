import type { Metadata } from 'next';
import './globals.css';
import { BottomNavigationBar } from '@/components/layout/bottom-navigation-bar';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Navegação Persistente App',
  description: 'App com navegação persistente no rodapé',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body 
        suppressHydrationWarning // Added to handle potential server-injected attributes
        className={cn(
        "font-body antialiased flex flex-col min-h-screen bg-background text-foreground"
      )}>
        <main className="flex-grow pb-nav-height">
          {children}
        </main>
        <BottomNavigationBar />
        <Toaster />
      </body>
    </html>
  );
}
