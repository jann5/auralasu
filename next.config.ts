import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // To generuje HTML/JS/JSON zamiast serwera Node
  images: {
    unoptimized: true, // Wymagane przy 'export' na zwykły hosting
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
};

export default nextConfig;