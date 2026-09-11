/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Serve AVIF first (smaller than WebP at equal visual quality), falling
    // back to WebP, then the original format — no change to source quality,
    // just a smaller wire format when the visitor's browser supports it.
    formats: ["image/avif", "image/webp"],
    // Optimized-image responses default to a 60s cache; these are static
    // marketing assets that only change on redeploy, so cache them for a
    // year like Next already does for hashed /_next/static/* files.
    minimumCacheTTL: 31536000,
    // Our own trusted brand SVGs are served through next/image.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // `next start` only sets long-lived immutable caching for hashed
  // /_next/static/* build output — plain files under /public (our product
  // photos, brand SVGs, and placeholder PDFs) are served with no explicit
  // cache policy otherwise. These are static assets replaced only on
  // redeploy, so cache them for a year too.
  async headers() {
    const immutable = [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }];
    return [
      { source: "/images/:path*", headers: immutable },
      { source: "/docs/:path*", headers: immutable },
    ];
  },
};

export default nextConfig;
