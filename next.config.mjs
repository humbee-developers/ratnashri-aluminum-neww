/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/next-home", // ✅ tells Next.js your static site lives under /next-home
  assetPrefix: "/next-home/", // ✅ prefixes all _next/static/ paths
  trailingSlash: true, // ✅ ensures paths end with '/' (helps cPanel & Apache)
};
export default nextConfig;
