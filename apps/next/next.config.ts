import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["rizzui"],
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
