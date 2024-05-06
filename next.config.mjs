/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "opencat.app",
      },
    ],
  },
};

export default nextConfig;
