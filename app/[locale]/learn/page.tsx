import {useTranslations} from 'next-intl';
import Card from "@/components/ui/card";
import {Link} from '@/src/i18n/navigation';

export default function LearnPage() {
  const t = useTranslations('Learn');
  
  return (
    <div className="space-y-8">
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold tracking-tight">{t('title')}</h1>
        <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{t('subtitle')}</p>
      </section>
      
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <h3 className="font-semibold mb-2">{t('dashboard')}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            Track your learning progress and access personalized content.
          </p>
          <Link href="/learn/dashboard" className="btn btn-primary">
            {t('getStarted')}
          </Link>
        </Card>
        
        <Card>
          <h3 className="font-semibold mb-2">{t('courses')}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            Browse structured courses on AI governance and ethics.
          </p>
          <Link href="/learn/courses" className="btn btn-secondary">
            Browse
          </Link>
        </Card>
        
        <Card>
          <h3 className="font-semibold mb-2">{t('aiCompass')}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            Get personalized guidance on AI implementation.
          </p>
          <Link href="/learn/ai-kompas" className="btn btn-secondary">
            Start Guide
          </Link>
        </Card>
      </section>
      
      <section className="border-t pt-8">
        <h2 className="text-2xl font-semibold mb-6">Recent Resources</h2>
        <div className="space-y-4">
          {/* This would be populated from CMS/API */}
          <div className="border rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800">
            <h3 className="font-medium">Getting Started with AI Ethics</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              A comprehensive introduction to ethical AI principles.
            </p>
            <span className="text-xs text-gray-500 mt-2 block">5 {t('readingTime')}</span>
          </div>
          <div className="border rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800">
            <h3 className="font-medium">Implementing GDPR in AI Systems</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              Practical steps for GDPR compliance in machine learning.
            </p>
            <span className="text-xs text-gray-500 mt-2 block">8 {t('readingTime')}</span>
          </div>
        </div>
      </section>
    </div>
  );
}