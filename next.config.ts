import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/visa_apply",
        destination: "/visa/apply", 
        permanent: true, 
      },
      {
        source: "/country_detail",
        destination: "/country/detail", 
        permanent: true, 
      },
    ];
  },
};

export default nextConfig;