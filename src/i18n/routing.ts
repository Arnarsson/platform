import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'da'] as const,
  defaultLocale: 'en',
  // Localized pathnames for SEO-friendly Danish URLs
  pathnames: {
    '/': '/',
    '/learn': {en: '/learn', da: '/laer'},
    '/learn/ai-kompas': {en: '/learn/ai-kompas', da: '/laer/ai-kompas'},
    '/learn/dashboard': {en: '/learn/dashboard', da: '/laer/dashboard'},
    '/learn/courses': {en: '/learn/courses', da: '/laer/kurser'},
    '/pricing': {en: '/pricing', da: '/priser'},
    '/company': {en: '/company', da: '/om'},
    '/contact': {en: '/contact', da: '/kontakt'},
    '/community/power-hour': {en: '/community/power-hour', da: '/faellesskab/power-hour'},
    '/admin/dashboard': {en: '/admin/dashboard', da: '/admin/dashboard'},
    '/admin/users': {en: '/admin/users', da: '/admin/brugere'},
    '/admin/content': {en: '/admin/content', da: '/admin/indhold'},
    '/admin/courses': {en: '/admin/courses', da: '/admin/kurser'},
    '/admin/quick-access': {en: '/admin/quick-access', da: '/admin/hurtig-adgang'},
    '/teach/dashboard': {en: '/teach/dashboard', da: '/undervis/dashboard'},
    '/teach/upload': {en: '/teach/upload', da: '/undervis/upload'},
    '/teacher-access': {en: '/teacher-access', da: '/laerer-adgang'},
    '/profile': {en: '/profile', da: '/profil'}
  }
});

export type AppLocale = (typeof routing)['locales'][number];