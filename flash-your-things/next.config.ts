import type { NextConfig } from 'next';

const basePath = process.env.NODE_ENV === 'production' ? (process.env.PAGES_BASE_PATH || '/fyt-website') : '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
