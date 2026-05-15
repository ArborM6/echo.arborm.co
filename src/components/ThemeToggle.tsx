import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useLanguage } from '../i18n';
type Theme = 'light' | 'dark';
function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  const saved = window.localStorage.getItem('echo-theme') as Theme | null;
  if (saved === 'light' || saved === 'dark') return saved;
  return 'light';
}
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const { t } = useLanguage();
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      window.localStorage.setItem('echo-theme', theme);
    } catch {}
  }, [theme]);
  const toggle = () => setTheme((t) => t === 'light' ? 'dark' : 'light');
  const isDark = theme === 'dark';
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? t('theme.to_light') : t('theme.to_dark')}
      className="relative inline-flex items-center justify-center w-9 h-9 rounded-full ml-1 md:ml-2 transition-colors duration-500"
      style={{
        border: '1px solid var(--hairline)',
        color: 'var(--ink-soft)',
        background: 'transparent'
      }}>
      
      <span
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center transition-all duration-500"
        style={{
          opacity: isDark ? 0 : 1,
          transform: isDark ?
          'rotate(-90deg) scale(0.6)' :
          'rotate(0) scale(1)'
        }}>
        
        <Sun className="w-4 h-4" strokeWidth={1.4} />
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center transition-all duration-500"
        style={{
          opacity: isDark ? 1 : 0,
          transform: isDark ? 'rotate(0) scale(1)' : 'rotate(90deg) scale(0.6)'
        }}>
        
        <Moon className="w-4 h-4" strokeWidth={1.4} />
      </span>
    </button>);

}