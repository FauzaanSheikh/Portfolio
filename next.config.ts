import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Uncomment and update if deploying to a subpath (e.g., username.github.io/repo-name)
  // basePath: '/Portfolio',
  // assetPrefix: '/Portfolio/',
};

export default nextConfig;
