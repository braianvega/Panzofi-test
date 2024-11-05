import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wallpapers-clan.com'
      },
    ]
  }

};

export default nextConfig;
