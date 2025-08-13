'use client';

import {usePathname, useRouter} from '@/src/i18n/navigation';
import {locales} from '@/src/i18n/navigation';
import {useSearchParams} from 'next/navigation';
import {useLocale, useTranslations} from 'next-intl';

export default function LanguageSwitcher() {
  const t = useTranslations('Language');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleLanguageChange = (newLocale: string) => {
    const params = searchParams ? `?${searchParams.toString()}` : '';
    router.replace(`${pathname}${params}`, {locale: newLocale});
  };

  return (
    <div role="group" aria-label={t('toggleLanguage')} className="flex gap-1">
      {locales.map((loc) => {
        const isActive = locale === loc;
        return (
          <button
            key={loc}
            onClick={() => handleLanguageChange(loc)}
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