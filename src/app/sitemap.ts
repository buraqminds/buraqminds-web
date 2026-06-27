import { MetadataRoute } from "next"
import { services } from "@/content/services"
import { projects } from "@/content/projects"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://buraqminds.com"
  const staticRoutes = [
    "/", "/about", "/contact", "/portfolio",
    "/blog", "/privacy", "/terms", "/cookies"
  ].map(path => ({
    url: base + path,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.8,
  }))
  const serviceRoutes = services.map(s => ({
    url: base + "/services/" + s.slug,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))
  const projectRoutes = projects.map(p => ({
    url: base + "/portfolio/" + p.slug,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))
  return [...staticRoutes, ...serviceRoutes, ...projectRoutes]
}
