import type { MetadataRoute } from "next";
import { absoluteUrl, siteUrl } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  // Stay out of search engines until the real domain is set.
  if (!siteUrl) return { rules: { userAgent: "*", disallow: "/" } };
  return { rules: { userAgent: "*", allow: "/", disallow: "/api/" }, sitemap: absoluteUrl("/sitemap.xml") };
}
