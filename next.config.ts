import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactStrictMode: false,
    typescript: {
        ignoreBuildErrors: false,
    },
    allowedDevOrigins: ["192.168.88.28"]
};

export default nextConfig;
