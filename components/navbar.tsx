"use client";
import {Link} from "@/src/i18n/navigation";
import ThemeToggle from "@/components/ui/theme-toggle";
import LanguageSwitcher from "@/components/language-switcher";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import {useTranslations} from 'next-intl';

export default function Navbar() {
  const t = useTranslations('Navigation');
  return (
    <header className="sticky top-0 z-20 border-b border-gray-200/60 dark:border-gray-800 backdrop-blur bg-white/70 dark:bg-gray-950/70">
      <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-3">
        <Link href="/" className="font-semibold tracking-tight text-brand-700 dark:text-brand-300">HARKA</Link>
        <nav className="ml-4 flex flex-1 items-center gap-4 text-sm">
          <Link className="hover:underline" href="/learn/ai-kompas">{t("learn")}</Link>
          <Link className="hover:underline" href="/community/power-hour">Community</Link>
          <Link className="hover:underline" href="/pricing">{t("pricing")}</Link>
          <div className="flex-1" />
          <Link className="hover:underline" href="/learn/dashboard">Dashboard</Link>
          <Link className="hover:underline" href="/teach/dashboard">{t("teach")}</Link>
          <Link className="hover:underline" href="/admin/quick-access">Admin</Link>
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          {(process.env.NODE_ENV !== 'test' && process.env.PLAYWRIGHT_TEST !== 'true') && (
            <>
              <SignedOut>
                <SignInButton>
                  <button className="btn btn-primary text-xs">{t("signIn")}</button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </>
          )}
          {(process.env.NODE_ENV === 'test' || process.env.PLAYWRIGHT_TEST === 'true') && (
            <button className="btn btn-primary text-xs">{t("signIn")}</button>
          )}
        </div>
      </div>
    </header>
  );
}

