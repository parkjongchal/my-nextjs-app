/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: '/',
    unoptimized: true,
  },
};

module.exports = nextConfig;
