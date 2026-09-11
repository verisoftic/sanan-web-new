/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Serve AVIF first (smaller than WebP at equal visual quality), falling
    // back to WebP, then the original format — no change to source quality,
    // just a smaller wire format when the visitor's browser supports it.
    formats: ["image/avif", "image/webp"],
    // Our own trusted brand SVGs are served through next/image.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
