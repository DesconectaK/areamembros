
import type {NextConfig} from 'next';

const cspHeader = `
    default-src 'self';
    script-src 'self' ${process.env.NODE_ENV === 'development' ? "'unsafe-eval' 'unsafe-inline'" : ""};
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    img-src 'self' data: https://placehold.co https://drive.google.com;
    font-src 'self' https://fonts.gstatic.com https://fonts.googleapis.com;
    connect-src 'self';
    frame-ancestors 'self';
    form-action 'self';
    base-uri 'self';
    object-src 'none';
`.replace(/\s{2,}/g, ' ').trim();

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
    key: 'Content-Security-Policy',
    value: cspHeader,
  }
];

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
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
        source: '/(.*)', // Alterado de '/:path*' para '/(.*)' para cobrir todas as rotas de forma mais ampla
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
