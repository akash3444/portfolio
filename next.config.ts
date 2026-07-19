import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://github.com/akash3444.png")],
  },
}

export default nextConfig
