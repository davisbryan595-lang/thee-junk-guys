/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Allow HMR requests from the hosted preview origin
  allowedDevOrigins: [
    "https://381016d924034bb2a67e03a9c5dda7ce-6833e982992c439da099619da.fly.dev",
  ],
}

export default nextConfig
