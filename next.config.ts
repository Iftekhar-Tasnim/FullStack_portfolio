import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
  // Suppress hydration warnings for browser extensions
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
