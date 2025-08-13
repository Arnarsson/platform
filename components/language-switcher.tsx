'use client';

import {usePathname, useRouter} from '@/src/i18n/navigation';
import {routing, AppLocale} from '@/src/i18n/routing';
import {useSearchParams} from 'next/navigation';
import {useLocale, useTranslations} from 'next-intl';
import {useEffect, useState} from 'react';

export default function LanguageSwitcher() {
  const t = useTranslations('Language');
  const locale = useLocale();
  const pathname = usePathname();
  const search = useSearchParams();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const switchTo = (newLocale: AppLocale) => {
    if (!mounted) return;
    
    // Persist choice - next-intl middleware will read this
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000;SameSite=Lax`;
    
    // Force reload to current page with new locale
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/[^\/]+/, `/${newLocale}`);
    window.location.href = newPath + window.location.search;
  };

  if (!mounted) {
    // Return a placeholder during SSR to prevent hydration mismatch
    return (
      <div role="group" aria-label="Language" className="flex gap-1">
        {routing.locales.map((loc) => (
          <button
            key={loc}
            disabled
            className="min-w-11 min-h-11 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-300"
          >
            {loc === 'en' ? 'EN' : 'DA'}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div role="group" aria-label={t('toggleLanguage')} className="flex gap-1">
      {routing.locales.map((loc) => {
        const isActive = locale === loc;
        return (
          <button
            key={loc}
            onClick={() => switchTo(loc)}
            aria-pressed={isActive}
            className={`
              min-w-11 min-h-11 px-3 py-2 
              border border-gray-300 dark:border-gray-600
              rounded-md text-sm font-medium
              transition-colors duration-150
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
              hover:bg-gray-100 dark:hover:bg-gray-700
              ${isActive 
                ? 'bg-blue-50 text-blue-700 border-blue-300 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-700' 
                : 'bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-300'
              }
            `}
            title={loc === 'en' ? t('english') : t('danish')}
          >
            {loc === 'en' ? 'EN' : 'DA'}
          </button>
        );
      })}
    </div>
  );
}