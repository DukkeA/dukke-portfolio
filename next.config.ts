import type { NextConfig } from "next";
import { profile } from "./src/content/profile";
import { isIndexable, site } from "./src/content/site";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    // The shared portrait is 1024px wide; avoid requesting upscaled copies.
    deviceSizes: [512, 640, 768, 1024],
    formats: ["image/avif", "image/webp"],
  },
  rewrites() {
    return [{ source: profile.cv.path, destination: profile.cv.assetPath }];
  },
  redirects() {
    return [
      {
        source: "/en",
        destination: "/",
        permanent: true,
      },
      {
        source: "/es",
        destination: "/",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "andres-duque\\.com" }],
        destination: `${site.url}/:path*`,
        permanent: true,
      },
    ];
  },
  headers() {
    const cvHeaders = [
      { key: "Content-Type", value: "application/pdf" },
      {
        key: "Content-Disposition",
        value: `inline; filename="${profile.cv.fileName}"`,
      },
      { key: "Content-Language", value: site.language },
      {
        key: "Link",
        value: `<${site.url}${profile.cv.path}>; rel="canonical"`,
      },
    ];

    return [
      ...(!isIndexable
        ? [
            {
              source: "/:path*",
              headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
            },
          ]
        : []),
      { source: profile.cv.path, headers: cvHeaders },
      { source: profile.cv.assetPath, headers: cvHeaders },
    ];
  },
};
export default nextConfig;
