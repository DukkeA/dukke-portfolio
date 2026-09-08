import type { MetadataRoute } from "next";
import { profile } from "@/content/profile";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: site.url }, { url: `${site.url}${profile.cv.path}` }];
}
