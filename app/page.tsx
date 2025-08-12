import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import Link from "next/link";
import { cookies } from "next/headers";
import { Lang, t } from "@/lib/i18n/translations";

export default function HomePage() {
  const lang = (cookies().get("lang")?.value as Lang) || "en";
  return (
    <div className="space-y-8">
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold tracking-tight">{t(lang, "app_name")}</h1>
        <p className="mt-3 text-gray-600 dark:text-gray-300">{t(lang, "tagline")}</p>
        <div className="mt-6 flex justify-center gap-3">
          <Link href="/learn/dashboard" className="btn btn-primary">{t(lang, "get_started")}</Link>
          <Link href="/pricing" className="btn btn-secondary">{t(lang, "pricing")}</Link>
        </div>
      </section>
      <section className="grid gap-4 md:grid-cols-3">
        <Card>
          <h3 className="font-semibold">{t(lang, "learn")}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Structured courses and AI guidance.</p>
          <div className="mt-3"><Link href="/learn/ai-kompas" className="btn btn-secondary">{t(lang, "ai_compass")}</Link></div>
        </Card>
        <Card>
          <h3 className="font-semibold">{t(lang, "teach")}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Upload lessons and manage cohorts.</p>
          <div className="mt-3"><Link href="/teach/dashboard" className="btn btn-secondary">{t(lang, "dashboard")}</Link></div>
        </Card>
        <Card>
          <h3 className="font-semibold">{t(lang, "community")}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Live sessions and collaborative practice.</p>
          <div className="mt-3"><Link href="/community/power-hour" className="btn btn-secondary">{t(lang, "power_hour")}</Link></div>
        </Card>
      </section>
    </div>
  );
}

