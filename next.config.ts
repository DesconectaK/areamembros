
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
];

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // unoptimized: true, // Ensure this is removed for standard Netlify/Vercel builds
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
        source: '/(.*)',
        headers: securityHeaders,
      },
      {
        source: '/images/:path*', // Targets all files under the public/images directory
        headers: [
          {
            key: 'Cache-Control',
            // Cache for 7 days in browser, browser must revalidate after that.
            value: 'public, max-age=604800, must-revalidate',
          },
        ],
      },
    ];
  },
  // Ensure 'output: "export"' is NOT present for standard Netlify/Vercel builds
};

export default nextConfig;
