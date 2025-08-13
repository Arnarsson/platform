import {useTranslations} from 'next-intl';
import {Link} from '@/src/i18n/navigation';
import Button from "@/components/ui/button";

export default function NotFoundPage() {
  const t = useTranslations('Errors.404');
  
  return (
    <div className="text-center space-y-8 py-16">
      <div className="space-y-4">
        <h1 className="text-6xl font-bold text-gray-400">404</h1>
        <h2 className="text-2xl font-semibold">{t('title')}</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto">
          {t('message')}
        </p>
      </div>
      
      <div className="flex justify-center gap-4">
        <Link href="/" className="btn btn-primary">
          {t('backHome')}
        </Link>
        <Link href="/learn" className="btn btn-secondary">
          Browse Learning
        </Link>
      </div>
    </div>
  );
}