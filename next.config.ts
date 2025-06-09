
import type {NextConfig} from 'next';

const securityHeaders = [
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains', // 1 year
  },
  {
    key: 'Permissions-Policy',
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), gyroscope=(), magnetometer=(), accelerometer=()",
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  }
  // Content-Security-Policy foi removido temporariamente para corrigir problemas de carregamento.
  // Se necessário, pode ser reintroduzido com uma política cuidadosamente testada.
];

const nextConfig: NextConfig = {
  output: 'export', // Adicionado para permitir a exportação estática
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // Para 'next export', a otimização de imagens padrão do Next.js não é suportada.
                        // As imagens serão servidas como estão, ou você pode usar um loader de terceiros.
                        // Manter isso como true garante que o `next export` funcione sem erros de imagem.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
