import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import type { ReactNode } from 'react';
import { ThemeProvider } from "@/providers/theme-provider";
import Navbar from "@/components/navbar";

export async function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'da'}];
}

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: 'en' | 'da'}>;
}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Meta'});
  
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function RootLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{locale: 'en' | 'da'}>;
}) {
  const {locale} = await params;
  const messages = await getMessages();

  const content = (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Navbar />
            <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );

  // Skip ClerkProvider during testing
  if (process.env.NODE_ENV === 'test' || process.env.PLAYWRIGHT_TEST === 'true') {
    return content;
  }

  return (
    <ClerkProvider>
      {content}
    </ClerkProvider>
  );
}