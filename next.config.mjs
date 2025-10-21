/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Allow HMR requests from the hosted preview origin
  allowedDevOrigins: ["https://*.fly.dev"],
}

export default nextConfig
