const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: {
      allowedOrigins: ["*"]
    }
  },
  images: {
    domains: ['images.clerk.dev', 'img.clerk.com']
  }
};

module.exports = withNextIntl(nextConfig);

