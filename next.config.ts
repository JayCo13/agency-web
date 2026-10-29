import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      // Blog image uploads go through a Server Action; the default 1MB body
      // limit rejects most photos. Match the Supabase bucket's 10MB cap.
      bodySizeLimit: "10mb",
    },
  },
  // Project screenshots were renamed from numbers (1.webp…) to descriptive
  // names for image search; keep the old URLs working.
  async redirects() {
    return [
      { source: "/projects/1.webp", destination: "/projects/thi-ielts-tren-may-ielts-mock-test-platform.webp", permanent: true },
      { source: "/projects/3.webp", destination: "/projects/thi-ielts-tren-may-listening-test-room.webp", permanent: true },
      { source: "/projects/2.webp", destination: "/projects/thi-ielts-tren-may-revenue-dashboard.webp", permanent: true },
      { source: "/projects/4.webp", destination: "/projects/blank-fensterladen-shutter-configurator.webp", permanent: true },
      { source: "/projects/5.webp", destination: "/projects/blank-fensterladen-configurator-shutter-type.webp", permanent: true },
      { source: "/projects/6.webp", destination: "/projects/blank-fensterladen-configurator-wood-type.webp", permanent: true },
      { source: "/projects/7.webp", destination: "/projects/cardversehub-trading-card-marketplace.webp", permanent: true },
      { source: "/projects/8.webp", destination: "/projects/cardversehub-card-price-history.webp", permanent: true },
      { source: "/projects/9.webp", destination: "/projects/cardversehub-soccer-card-listings.webp", permanent: true },
      { source: "/projects/10.webp", destination: "/projects/tam-nguon-book-online-bookstore.webp", permanent: true },
      { source: "/projects/12.webp", destination: "/projects/tam-nguon-book-product-listing.webp", permanent: true },
      { source: "/projects/11.webp", destination: "/projects/tam-nguon-book-revenue-admin.webp", permanent: true },
      { source: "/projects/bb-1.webp", destination: "/projects/bb-brandworks-agency-website.webp", permanent: true },
      { source: "/projects/bb-2.webp", destination: "/projects/bb-brandworks-clients.webp", permanent: true },
    ];
  },
};

export default nextConfig;
