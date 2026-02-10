import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {},

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "shared.akamai.steamstatic.com" },
      { protocol: "https", hostname: "images.contentstack.io" },
      { protocol: "https", hostname: "cdn2.unrealengine.com" },
      { protocol: "https", hostname: "gaming-cdn.com" },
      { protocol: "https", hostname: "i.postimg.cc" },
      { protocol: "https", hostname: "wiki.leagueoflegends.com" },
    ]
  }
};

export default nextConfig
