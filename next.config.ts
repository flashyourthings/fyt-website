import type { NextConfig } from 'next';

// Set by the deploy workflow from actions/configure-pages, e.g. "/fyt-website".
// Empty for local dev and for a custom domain.
const basePath = process.env.PAGES_BASE_PATH || '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
