// app/sitemap.ts
import { GameAlt } from '@/lib/data';
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl =  
    process.env.NEXT_PUBLIC_DOMAIN_URL || "https://linuxgamesalt.com";

  // Define your core static routes
  const staticRoutes = ['', 'browse', '/about', '/privacy', '/terms', '/contact'].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Example: Dynamic Game Routes
  // In a real scenario, you'd fetch your database of "Bad Game vs Good Game" pairs
  // const comparisons = await getPopularComparisons();
  const dynamicRoutes = GameAlt.map((pair) => ({
    url: `${siteUrl}/compare/${pair.badId}/${pair.goodId}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}