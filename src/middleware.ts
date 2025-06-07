
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Middleware desativado: permite todas as requisições.
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
