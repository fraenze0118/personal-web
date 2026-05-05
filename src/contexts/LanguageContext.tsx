import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { LocaleText } from "../types";

type Lang = "zh" | "en";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
  loc: (text: LocaleText) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "zh",
  toggleLang: () => {},
  t: (key: string) => key,
  loc: (text: LocaleText) => text.zh,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const stored = localStorage.getItem("lang");
    return stored === "en" ? "en" : "zh";
  });

  // Also set html lang attribute
  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    localStorage.setItem("lang", lang);
  }, [lang]);

  const toggleLang = () => setLang((l) => (l === "zh" ? "en" : "zh"));

  const t = (key: string): string => {
    const val = translations[lang][key];
    return val ?? key;
  };

  const loc = (text: LocaleText): string => text[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t, loc }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

/* ── Translation dictionary ── */

type TranslationMap = Record<string, string>;

const translations: Record<Lang, TranslationMap> = {
  zh: {
    "hero.greeting": "你好，世界()",
    "hero.cta.projects": "查看项目",
    "hero.cta.contact": "联系我",
    "contact.intro": "欢迎通过邮件联系我，或在这些平台找到我：",
    "footer.built": 'echo "使用 React 构建"',
    "footer.rights": "版权所有",
  },
  en: {
    "hero.greeting": "hello.world()",
    "hero.cta.projects": "View Projects",
    "hero.cta.contact": "Get in Touch",
    "contact.intro": "Get in touch via email or find me on these platforms:",

    "footer.built": 'echo "Built with React"',
    "footer.rights": "All rights reserved",
  },
};
