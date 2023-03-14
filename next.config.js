/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /* basePath: process.env.GITHUB_ACTIONS ? "/ruskcanele" : "", */
  trailingSlash: true,
  optimizeFonts: true
};

module.exports = nextConfig;
