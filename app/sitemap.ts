import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/uslugi",
    "/google-ads",
    "/meta-ads",
    "/seo",
    "/strony-www",
    "/o-nas",
    "/kontakt",
  ]

  const lastModified = new Date()

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/kontakt" ? 0.9 : 0.8,
  }))
}
