import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      // Blog image uploads go through a Server Action; the default 1MB body
      // limit rejects most photos. Match the Supabase bucket's 10MB cap.
      bodySizeLimit: "10mb",
    },
  },
};

export default nextConfig;
