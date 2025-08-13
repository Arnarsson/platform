import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import {Link} from '@/src/i18n/navigation';
import {useTranslations} from 'next-intl';

export default function HomePage() {
  const t = useTranslations('Homepage');
  
  return (
    <div className="space-y-8">
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold tracking-tight">{t('title')}</h1>
        <p className="mt-3 text-gray-600 dark:text-gray-300">{t('subtitle')}</p>
        <div className="mt-6 flex justify-center gap-3">
          <Link href="/learn/dashboard" className="btn btn-primary">{t('getStarted')}</Link>
          <Link href="/pricing" className="btn btn-secondary">{t('pricing')}</Link>
        </div>
      </section>
      <section className="grid gap-4 md:grid-cols-3">
        <Card>
          <h3 className="font-semibold">{t('learn.title')}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">{t('learn.description')}</p>
          <div className="mt-3"><Link href="/learn/ai-kompas" className="btn btn-secondary">{t('learn.cta')}</Link></div>
        </Card>
        <Card>
          <h3 className="font-semibold">{t('teach.title')}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">{t('teach.description')}</p>
          <div className="mt-3"><Link href="/teach/dashboard" className="btn btn-secondary">{t('teach.cta')}</Link></div>
        </Card>
        <Card>
          <h3 className="font-semibold">{t('community.title')}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">{t('community.description')}</p>
          <div className="mt-3"><Link href="/community/power-hour" className="btn btn-secondary">{t('community.cta')}</Link></div>
        </Card>
      </section>
    </div>
  );
}