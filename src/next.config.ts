import type { NextConfig } from "next";
// import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

// export default function nextConfig(phase: string, { defaultConfig }: { defaultConfig: unknown }): NextConfig {
//   const baseConfig = {
//     distDir: "dist",
//   }

//   if (phase === PHASE_DEVELOPMENT_SERVER) {
//     return {
//       ...baseConfig,
//     }
//   }

//   return {
//     ...baseConfig,
//     output: "export",
//   }
// };

const nextConfig: NextConfig = {
  distDir: "dist",
  output: "export",
  images: { unoptimized: true }
}

export default nextConfig