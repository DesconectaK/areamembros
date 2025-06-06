
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Temporariamente desabilitar a autenticação para desenvolvimento de outras funcionalidades.
  // Isso permitirá o acesso a todas as páginas sem login.
  // A página de login (/login) em si ainda funcionará e redirecionará
  // para a página principal se as credenciais corretas forem inseridas.
  // return NextResponse.next(); // Linha que desabilitava a autenticação agora está comentada

  // Lógica de autenticação original (agora ativa)
  const authToken = request.cookies.get('auth_token')?.value;
  const { pathname } = request.nextUrl;

  const publicPaths = ['/login'];
  const isPublicPath = publicPaths.some(path => pathname.startsWith(path));

  if (authToken && isPublicPath) {
    // Se autenticado e tentando acessar a página de login, redirecionar para home
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (!authToken && !isPublicPath) {
    // Se não autenticado e tentando acessar uma página protegida, redirecionar para login
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images (public images folder)
     * - manifest.json (PWA manifest)
     * - robots.txt (SEO)
     * - site.webmanifest
     */
    '/((?!api|_next/static|_next/image|favicon.ico|images|manifest.json|robots.txt|site.webmanifest).*)',
  ],
};
