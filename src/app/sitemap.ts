import type { MetadataRoute } from "next";
import { profile } from "@/content/profile";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${site.url}/`, images: [`${site.url}${profile.image}`] },
    { url: `${site.url}${profile.cv.path}` },
  ];
}
