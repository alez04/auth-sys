/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    JWT_SECRET: "alez04/auth-sys",
  },
  experimental: { appDir: true },
};

module.exports = nextConfig;
