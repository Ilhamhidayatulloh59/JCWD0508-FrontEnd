/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "blogger-pwdk.vercel.app",
      },
      {
        hostname: "www.blogger.com",
      }
    ],
  },
};

export default nextConfig;
