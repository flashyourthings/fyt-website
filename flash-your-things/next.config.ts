import type { NextConfig } from "next";

const config: NextConfig = {
  output: 'export', // Enables static HTML export
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flashyourthings.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  trailingSlash: true, // Adds trailing slashes to URLs
  reactStrictMode: true,
  poweredByHeader: false, // Removes X-Powered-By header
  compress: true, // Enables gzip compression
};

export default config;
