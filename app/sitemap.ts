import {MetadataRoute} from 'next';

const host = 'https://www.ethos-ai.cc';
const locales = ['en', 'da'];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    '/',
    '/learn',
    '/learn/ai-kompas', 
    '/learn/dashboard',
    '/learn/courses',
    '/pricing',
    '/company',
    '/contact',
    '/admin/dashboard',
    '/admin/users',
    '/admin/content', 
    '/admin/courses',
    '/admin/quick-access',
    '/teach/dashboard',
    '/teach/upload',
    '/teacher-access',
    '/profile'
  ];

  return pages.flatMap((path) =>
    locales.map((locale) => ({
      url: `${host}/${locale}${path}`,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${host}/${l}${path}`])
        )
      },
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: path === '/' ? 1 : 0.8
    }))
  );
}