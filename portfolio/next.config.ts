import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/Anit-port-ms',
  assetPrefix: '/Anit-port-ms/',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
