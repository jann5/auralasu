import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist", // Eksportuj do folderu 'dist' zamiast '.next'
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  // Upewnij się, że wszystkie dynamiczne ścieżki są generowane
  trailingSlash: true,
};

export default nextConfig;
