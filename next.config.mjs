/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  // Smaller dev cold starts and faster refresh on macOS (Apple Silicon): Turbopack via `next dev --turbo`
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
}

export default nextConfig