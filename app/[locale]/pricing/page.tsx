import {useTranslations} from 'next-intl';
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";

export default function PricingPage() {
  const t = useTranslations('Pricing');
  
  const plans = [
    {
      id: 'starter',
      popular: false
    },
    {
      id: 'team', 
      popular: true
    },
    {
      id: 'enterprise',
      popular: false
    }
  ];
  
  return (
    <div className="space-y-8">
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold tracking-tight">{t('title')}</h1>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          Choose the plan that fits your organization's needs.
        </p>
      </section>
      
      <section className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <Card key={plan.id} className={`relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {t(`${plan.id}.subtitle`)}
                </span>
              </div>
            )}
            
            <div className="text-center space-y-4 pt-6">
              <h3 className="text-xl font-semibold">{t(`${plan.id}.title`)}</h3>
              <div className="text-3xl font-bold">{t(`${plan.id}.price`)}</div>
              
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                {Array.from({length: 3}, (_, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    {t(`${plan.id}.features.${i}`)}
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.popular ? 'primary' : 'secondary'} 
                className="w-full mt-6"
              >
                {plan.id === 'enterprise' ? t('contactSales') : t('getStarted')}
              </Button>
            </div>
          </Card>
        ))}
      </section>
      
      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          <details className="border rounded-lg p-4">
            <summary className="font-medium cursor-pointer">
              How do you handle data privacy?
            </summary>
            <div className="mt-3 text-sm text-gray-600 dark:text-gray-300">
              We take data privacy seriously and offer DPA agreements for Enterprise customers. 
              All data is encrypted in transit and at rest, and we're GDPR compliant.
            </div>
          </details>
          
          <details className="border rounded-lg p-4">
            <summary className="font-medium cursor-pointer">
              Can I switch plans later?
            </summary>
            <div className="mt-3 text-sm text-gray-600 dark:text-gray-300">
              Yes, you can upgrade or downgrade your plan at any time. 
              Changes take effect at the next billing cycle.
            </div>
          </details>
          
          <details className="border rounded-lg p-4">
            <summary className="font-medium cursor-pointer">
              Do you offer training and support?
            </summary>
            <div className="mt-3 text-sm text-gray-600 dark:text-gray-300">
              All plans include documentation and email support. 
              Team and Enterprise plans include priority support and optional training sessions.
            </div>
          </details>
        </div>
      </section>
    </div>
  );
}