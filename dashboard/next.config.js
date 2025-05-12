
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/devflow-dashboard',
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
