import withPWAInit from "@ducanh2912/next-pwa";

/** @type {import('next').NextConfig} */

const withPWA = withPWAInit({
  dest: "public",
});

const nextConfig = {
  reactStrictMode: true,

  // 👇 THIS FIXES THE VERCEL BUILD ERROR
  turbopack: {},

  images: {
    domains: ["m.media-amazon.com"],
  },
};

export default withPWA({
  ...nextConfig,
});
