
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login | Navegação Persistente App',
  description: 'Faça login para acessar a aplicação.',
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // O layout raiz (src/app/layout.tsx) já define as tags <html>, <head> e <body>.
  // Layouts aninhados não devem renderizá-las novamente.
  // A estilização específica da página de login (fundo preto, etc.) é aplicada
  // dentro do componente da página em src/app/login/page.tsx.
  return <>{children}</>;
}
