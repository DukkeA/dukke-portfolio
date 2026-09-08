import type { NextConfig } from "next";
import { profile } from "./src/content/profile";
import { isIndexable, site } from "./src/content/site";

const nextConfig: NextConfig = {
  devIndicators: false,
  rewrites() {
    return [{ source: profile.cv.path, destination: profile.cv.assetPath }];
  },
  redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www\\.andres-duque\\.com" }],
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
