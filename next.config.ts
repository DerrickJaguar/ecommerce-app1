import type { NextConfig } from "next";

module.exports = {
  reactStrictMode: true,
  experimental: {
    
  },
  env: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: 'pk_test_bWFueS1yaGluby00Ny5jbGVyay5hY2NvdW50cy5kZXYk',
    CLERK_SECRET_KEY: 'sk_test_ViNhGkGOx2eFAvr5YtkhLa8Ks6a6P9bWsU71ennh4k',
  },
};

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

export default nextConfig;
