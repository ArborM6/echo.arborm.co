import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Footer } from './Footer';
import { LanguageToggle } from './LanguageToggle';
import { MountainDivider } from './MountainDivider';
import { useLanguage } from '../i18n';
type Props = {
  title: string;
  updatedAt: string;
  children: React.ReactNode;
  label?: string;
  noIndex?: boolean;
  versionInfo?: string;
};
export function LegalLayout({ title, updatedAt, children, label, noIndex, versionInfo }: Props) {
  const { t } = useLanguage();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (noIndex) {
      let meta = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = 'robots';
        document.head.appendChild(meta);
      }
      meta.content = 'noindex';
      return () => {
        if (meta && meta.parentNode) meta.parentNode.removeChild(meta);
      };
    }
  }, [noIndex]);
  return (
    <div
      className="relative w-full min-h-screen overflow-x-hidden"
      style={{
        background: 'var(--paper)'
      }}>
      
      {/* simplified nav */}
      <header
        className="fixed top-0 inset-x-0 z-40"
        style={{
          background: 'var(--nav-bg)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderBottom: '1px solid var(--hairline-soft)'
        }}>
        
        <div className="max-w-4xl mx-auto px-6 md:px-10 py-3 md:py-3.5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <span
              className="inline-flex items-center justify-center w-[26px] h-[26px] rounded-full overflow-hidden"
              style={{
                border: '1px solid var(--hairline)'
              }}
              aria-hidden="true">
              
              <img
                src="/logo-square.png"
                alt=""
                className="w-full h-full object-cover" />
              
            </span>
            <span className="flex items-baseline gap-2">
              <span className="brand-script text-3xl ink-text">回响</span>
              <span className="font-sans-cn text-[11px] tracking-[0.3em] ink-faint uppercase">
                Echo
              </span>
            </span>
          </Link>
          <nav className="flex items-center gap-2" aria-label={t('legal.back')}>
            <Link
              to="/"
              className="inline-flex items-center gap-1 font-song text-sm ink-soft hover:ink-text transition-colors duration-500">
              
              <ChevronLeft className="w-4 h-4" strokeWidth={1.4} />
              {t('legal.back')}
            </Link>
            <LanguageToggle />
          </nav>
        </div>
      </header>

      <main className="relative max-w-3xl mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-16 md:pb-24">
        <motion.div
          initial={{
            opacity: 0,
            y: 12
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 1.2,
            ease: 'easeOut'
          }}>
          
          <p className="font-sans-cn text-[11px] tracking-[0.4em] ink-faint mb-4">
            {label || t('legal.privacy_label')}
          </p>
          <h1 className="font-song text-3xl md:text-4xl ink-text leading-relaxed">
            {title}
          </h1>
          {updatedAt !== '' && (
            <p className="mt-4 font-song text-sm ink-faint">
              {t('legal.updated')} · {updatedAt}
              {versionInfo && <span> · {versionInfo}</span>}
            </p>
          )}
          <div className="mt-8">
            <MountainDivider opacity={0.3} />
          </div>
        </motion.div>

        <motion.article
          initial={{
            opacity: 0,
            y: 16
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 1.4,
            delay: 0.2,
            ease: 'easeOut'
          }}
          className="mt-12 md:mt-16 legal-prose font-song ink-text">
          
          {children}
        </motion.article>
      </main>

      <Footer />
    </div>);

}