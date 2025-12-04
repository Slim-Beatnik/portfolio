import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactCompiler: true,
  cacheComponents: true,
  turbopack: {
    // always absolute, always project root
    root: path.resolve(__dirname),
  },
};

export default nextConfig;