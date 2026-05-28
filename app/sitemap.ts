import type { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://deai-style-diagnosis-site.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/diagnosis', '/matching-apps', '/articles', '/articles/before-starting-matching-apps', '/fortune', '/privacy', '/terms', '/contact', '/advertising'];
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
