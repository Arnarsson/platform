"use client";
import Button from "./button";
import { useI18n } from "@/providers/i18n-provider";

export default function LangToggle() {
  const { lang, setLang } = useI18n();
  const next = lang === "en" ? "da" : "en";
  return (
    <Button variant="secondary" onClick={() => setLang(next)} aria-label="Toggle language">
      {lang.toUpperCase()}
    </Button>
  );
}

