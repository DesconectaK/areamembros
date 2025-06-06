
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get('auth_token')?.value;
  const { pathname } = request.nextUrl;

  const publicPaths = ['/login'];
  const isPublicPath = publicPaths.some(path => pathname.startsWith(path));

  // Se o usuário está autenticado (tem o cookie) e tenta acessar a página de login,
  // redireciona para a página principal.
  if (authToken && isPublicPath) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Se o usuário NÃO está autenticado e tenta acessar uma página protegida,
  // NÃO vamos mais redirecionar para o login. O acesso será permitido.
  // O "login" é uma formalidade.
  // if (!authToken && !isPublicPath) {
  //   return NextResponse.redirect(new URL('/login', request.url));
  // }

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
