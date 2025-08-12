"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Lang, t } from "@/lib/i18n/translations";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: string) => string;
};

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ initialLang, children }: { initialLang: Lang; children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);
  const router = useRouter();

  const setLang = (l: Lang) => {
    setLangState(l);
    // persist in cookie for SSR and in localStorage for client
    try {
      document.cookie = `lang=${l}; Path=/; Max-Age=${60 * 60 * 24 * 365}; SameSite=Lax`;
      localStorage.setItem("lang", l);
    } catch {}
    router.refresh();
  };

  useEffect(() => {
    console.log("[I18nProvider] mounted with", { lang: initialLang });
  }, [initialLang]);

  const value = useMemo<Ctx>(() => ({
    lang,
    setLang,
    t: (k: string) => t(lang, k),
  }), [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

