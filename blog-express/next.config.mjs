/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "blogger-pwdk.vercel.app",
      },
      {
        hostname: "www.blogger.com",
      },
      {
        hostname: "localhost",
      },
      {
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
