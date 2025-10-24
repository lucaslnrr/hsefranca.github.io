import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages
  output: "export",
  basePath: "/hsefranca.github.io",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
