import type { MetadataRoute } from "next";
import { destinations } from "@/content";
import { absoluteUrl } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/about", "/contact", ...destinations.map((d) => `/${d.slug}`), "/privacy"];
  return paths.map((path) => ({ url: absoluteUrl(path) }));
}
