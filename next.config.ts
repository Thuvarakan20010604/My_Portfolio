import type { NextConfig } from "next";

const repo = "My_Portfolio"; // e.g. "thuvarakan-portfolio"

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // basePath: `/${repo}`,
  //assetPrefix: `/${repo}/`,
};

export default nextConfig;
