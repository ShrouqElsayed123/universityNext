/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      canvas: false,
    };
    return config;
  },
  images: {
    domains: ['i.pinimg.com'], // أضف أي دومينات أخرى تحتاجها
  },
};

export default nextConfig;
