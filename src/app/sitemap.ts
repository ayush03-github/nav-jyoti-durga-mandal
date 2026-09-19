import { MetadataRoute } from 'next';
import { getAllContent } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://njdm.org';

  const staticPages = [
    '',
    '/bhajans',
    '/aartis',
    '/chalisa',
    '/search',
    '/about',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const allContent = getAllContent();
  const contentPages = allContent.map(item => {
    let prefix = '/bhajans';
    if (item.type === 'aarti') prefix = '/aartis';
    else if (item.type === 'chalisa') prefix = '/chalisa';

    return {
      url: `${baseUrl}${prefix}/${item.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: item.featured ? 0.9 : 0.7,
    };
  });

  return [...staticPages, ...contentPages];
}
