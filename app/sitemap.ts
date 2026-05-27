import type { MetadataRoute } from 'next';

const baseUrl = 'https://example.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/diagnosis', '/matching-apps', '/articles', '/fortune', '/privacy', '/terms', '/contact', '/advertising'];
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
