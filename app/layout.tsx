import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import { ThemeProvider } from "@/providers/theme-provider";
import { I18nProvider } from "@/providers/i18n-provider";
import { Lang } from "@/lib/i18n/translations";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "HARKA",
  description: "Learn. Teach. Thrive.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = cookies();
  const initialLang = (cookieStore.get("lang")?.value as Lang) || "en";
  return (
    <ClerkProvider>
      <html lang={initialLang} suppressHydrationWarning>
        <body>
          <ThemeProvider>
            <I18nProvider initialLang={initialLang}>
              <Navbar />
              <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
            </I18nProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

