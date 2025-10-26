import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages (user/organization site)
  // For lucaslnrr.github.io, do NOT use basePath
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
