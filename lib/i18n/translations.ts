export type Lang = "en" | "da";

export const translations: Record<Lang, Record<string, string>> = {
  en: {
    app_name: "HARKA",
    tagline: "Learn. Teach. Thrive.",
    get_started: "Get started",
    sign_in: "Sign in",
    sign_out: "Sign out",
    pricing: "Pricing",
    community: "Community",
    learn: "Learn",
    teach: "Teach",
    admin: "Admin",
    dashboard: "Dashboard",
    courses: "Courses",
    profile: "Profile",
    language: "Language",
    theme: "Theme",
    light: "Light",
    dark: "Dark",
    ai_compass: "AI Compass",
    power_hour: "Power Hour",
    quick_access: "Quick Access",
    upload: "Upload",
    users: "Users",
    content: "Content",
    access_note:
      "To get admin, set your Clerk public metadata to { role: 'admin' }.",
  },
  da: {
    app_name: "HARKA",
    tagline: "Lær. Lær fra dig. Blomstr.",
    get_started: "Kom i gang",
    sign_in: "Log ind",
    sign_out: "Log ud",
    pricing: "Priser",
    community: "Fællesskab",
    learn: "Lær",
    teach: "Undervis",
    admin: "Admin",
    dashboard: "Oversigt",
    courses: "Kurser",
    profile: "Profil",
    language: "Sprog",
    theme: "Tema",
    light: "Lyst",
    dark: "Mørkt",
    ai_compass: "AI-kompas",
    power_hour: "Power Hour",
    quick_access: "Hurtig adgang",
    upload: "Upload",
    users: "Brugere",
    content: "Indhold",
    access_note:
      "For at få admin, sæt din Clerk public metadata til { role: 'admin' }.",
  },
};

export function t(lang: Lang, key: string) {
  return translations[lang]?.[key] ?? key;
}

