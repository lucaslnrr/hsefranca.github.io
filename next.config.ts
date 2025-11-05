import type { NextConfig } from "next";

const basePathEnv = process.env.NEXT_PUBLIC_BASE_PATH || "";
const useBasePath = basePathEnv !== "";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages
  output: "export",
  images: {
    unoptimized: true,
  },
  // Use basePath/assetPrefix only when provided (e.g., project pages)
  ...(useBasePath ? { basePath: basePathEnv } : {}),
  ...(useBasePath ? { assetPrefix: basePathEnv } : {}),
  // Optional but helpful for static hosting of nested routes
  trailingSlash: true,
};

export default nextConfig;
