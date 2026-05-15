import React, { useState, useRef, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage, type Locale } from '../i18n';

const options: { value: Locale; label: string }[] = [
  { value: 'zh-CN', label: '简体中文' },
  { value: 'zh-TW', label: '繁體中文' },
  { value: 'en', label: 'English' },
];

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div ref={ref} className="relative inline-flex">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Switch language"
        className="relative inline-flex items-center justify-center w-9 h-9 rounded-full ml-1 transition-colors duration-500"
        style={{
          border: '1px solid var(--hairline)',
          color: 'var(--ink-soft)',
          background: 'transparent',
        }}>
        <Globe className="w-4 h-4" strokeWidth={1.4} />
      </button>

      {open && (
        <div
          className="absolute right-0 top-full mt-2 rounded-xl overflow-hidden z-50"
          style={{
            background: 'var(--paper)',
            border: '1px solid var(--hairline)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
            minWidth: '140px',
            whiteSpace: 'nowrap',
          }}>
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => {
                setLocale(opt.value);
                setOpen(false);
              }}
              className="w-full text-left px-4 py-2.5 font-song text-sm transition-colors duration-300 flex items-center gap-2"
              style={{
                color: locale === opt.value ? 'var(--gold)' : 'var(--ink-soft)',
                background: locale === opt.value ? 'rgba(168,149,114,0.08)' : 'transparent',
              }}>
              {locale === opt.value && (
                <span
                  className="inline-block w-1 h-1 rounded-full flex-shrink-0"
                  style={{ background: 'var(--gold)' }}
                />
              )}
              <span>{opt.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
