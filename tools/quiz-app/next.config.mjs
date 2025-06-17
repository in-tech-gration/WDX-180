/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "v1",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
