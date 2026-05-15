import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export type Locale = 'zh-CN' | 'zh-TW' | 'en';

const STORAGE_KEY = 'echo-lang';

function detectBrowserLocale(): Locale {
  try {
    const langs = navigator.languages || [navigator.language];
    for (const lang of langs) {
      const l = lang.toLowerCase();
      if (l === 'zh-tw' || l === 'zh-hant' || l.startsWith('zh-hant')) return 'zh-TW';
      if (l === 'zh-cn' || l === 'zh-hans' || l.startsWith('zh-hans') || l === 'zh') return 'zh-CN';
      if (l.startsWith('en')) return 'en';
    }
  } catch {}
  return 'zh-CN';
}

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'zh-CN';
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (saved === 'zh-CN' || saved === 'zh-TW' || saved === 'en') return saved;
  } catch {}
  return detectBrowserLocale();
}

type LanguageContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextValue>({
  locale: 'zh-CN',
  setLocale: () => {},
  t: (k) => k,
});

export const useLanguage = () => useContext(LanguageContext);

// We lazy-import the translations to keep this file small
import { translations } from './locales';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try { window.localStorage.setItem(STORAGE_KEY, l); } catch {}
  }, []);

  useEffect(() => {
    // Update html lang attribute
    const langMap: Record<Locale, string> = {
      'zh-CN': 'zh-CN',
      'zh-TW': 'zh-TW',
      'en': 'en',
    };
    document.documentElement.lang = langMap[locale];
  }, [locale]);

  const t = useCallback((key: string): string => {
    const dict = translations[locale];
    return (dict as Record<string, string>)[key] || key;
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
