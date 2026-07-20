import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Apple, Download } from 'lucide-react';
import { InkBackground } from './InkBackground';
import { PhoneMockup } from './PhoneMockup';
import { useLanguage } from '../i18n';

function AndroidIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M5 11a7 7 0 0 1 14 0v6H5z" />
      <line x1="8" y1="3" x2="9.5" y2="6" />
      <line x1="16" y1="3" x2="14.5" y2="6" />
      <circle cx="9" cy="13" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="15" cy="13" r="0.6" fill="currentColor" stroke="none" />
      <line x1="3" y1="12" x2="3" y2="17" />
      <line x1="21" y1="12" x2="21" y2="17" />
      <line x1="9" y1="17" x2="9" y2="20" />
      <line x1="15" y1="17" x2="15" y2="20" />
    </svg>
  );
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });
  const { t, locale } = useLanguage();

  // For animation: Chinese uses char-by-char, English uses word-by-word
  const titleText = t('hero.title');
  const isEnglish = locale === 'en';
  const titleUnits = isEnglish
    ? titleText.split(/(\s+)/).filter(Boolean) // split by whitespace, keep spaces
    : titleText.split('');

  return (
    <section
      ref={ref}
      className="relative min-h-[100vh] w-full overflow-hidden">
      
      <InkBackground variant="hero" scrollYProgress={scrollYProgress} />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-36 md:pt-32 pb-10 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          {/* text */}
          <div className="lg:col-span-7 z-10 lg:pl-16 xl:pl-24">
            <motion.p
              initial={{
                opacity: 0,
                y: 8
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 1.2,
                delay: 0.2,
                ease: 'easeOut'
              }}
              className="font-sans-cn text-xs tracking-[0.4em] ink-faint mb-6">
              
              {t('hero.subtitle')}
            </motion.p>

            <h1 className="font-song font-medium ink-text text-[2.4rem] sm:text-5xl md:text-6xl leading-[1.35] tracking-wide">
              {titleUnits.map((c, i) =>
              <motion.span
                key={i}
                initial={{
                  opacity: 0,
                  y: 14
                }}
                animate={{
                  opacity: 0.92,
                  y: 0
                }}
                transition={{
                  duration: 1.1,
                  delay: 0.4 + i * (isEnglish ? 0.08 : 0.06),
                  ease: 'easeOut'
                }}
                className="inline-block"
                style={c.trim() === '' ? { whiteSpace: 'pre' } : undefined}>
                
                  {c}
                </motion.span>
              )}
            </h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 10
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 1.4,
                delay: 1.4,
                ease: 'easeOut'
              }}
              className="mt-8 font-song text-[15px] md:text-base leading-[2] ink-soft max-w-xl">
              
              {t('hero.desc_1')}
              <br className="hidden md:block" />
              {t('hero.desc_2')}
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 10
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 1.4,
                delay: 1.7,
                ease: 'easeOut'
              }}
              className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[540px]"
              id="download">
              
              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  disabled
                  aria-label={t('hero.ios_aria')}
                  className="pill-ghost inline-flex items-center gap-3 w-full h-14 px-5 rounded-2xl cursor-not-allowed text-left"
                  style={{ opacity: 0.72 }}>
                  
                  <Apple className="w-5 h-5 flex-shrink-0" strokeWidth={1.5} />
                  <span className="min-w-0 flex-1">
                    <span className="block font-sans-cn text-[10px] tracking-[0.18em] ink-faint">
                      {t('hero.ios_label')}
                    </span>
                    <span className="block font-song text-sm">{t('hero.app_store_label')}</span>
                  </span>
                  <span className="font-sans-cn text-[10px] tracking-wider ink-faint">
                    {t('hero.coming_soon')}
                  </span>
                </button>
              </div>

              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  disabled
                  aria-label={t('hero.android_aria')}
                  className="pill-ghost inline-flex items-center gap-3 w-full h-14 px-5 rounded-2xl cursor-not-allowed text-left"
                  style={{ opacity: 0.72 }}>
                  <AndroidIcon className="w-5 h-5 flex-shrink-0" />
                  <span className="min-w-0 flex-1">
                    <span className="block font-sans-cn text-[10px] tracking-[0.18em] ink-faint">
                      {t('hero.android_label')}
                    </span>
                    <span className="block font-song text-sm">{t('hero.google_play_label')}</span>
                  </span>
                  <span className="font-sans-cn text-[10px] tracking-wider ink-faint">
                    {t('hero.coming_soon')}
                  </span>
                </button>
                <a
                  href="https://echo-static.arborm.co/echo-app-release.apk"
                  aria-label={t('hero.android_apk_aria')}
                  className="pill-ghost inline-flex items-center justify-center gap-2 w-full h-10 px-5 rounded-xl font-sans-cn text-xs tracking-wider">
                  
                  <Download className="w-3.5 h-3.5" strokeWidth={1.8} />
                  <span>{t('hero.android_apk_download')}</span>
                  <span className="opacity-60">·</span>
                  <span className="opacity-75">{t('hero.download_now')}</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
              transition={{
                duration: 2,
                delay: 2.2
              }}
              className="mt-10 flex items-center gap-4 ink-faint font-sans-cn text-[11px] tracking-widest">
              
              <span>{t('hero.tag_chinese')}</span>
              <span className="w-px h-3 bg-current opacity-30" />
              <span>{t('hero.tag_no_ads')}</span>
            </motion.div>
          </div>

          {/* phone */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 1.6,
              delay: 0.8,
              ease: 'easeOut'
            }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative z-10">
            
            <motion.div
              animate={{
                y: [0, -6, 0]
              }}
              transition={{
                duration: 8,
                ease: 'easeInOut',
                repeat: Infinity
              }}>
              
              <PhoneMockup
                imageSrc="/image.png"
                imageAlt="回响 - 白色主题" />
              
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* sliver hint of next section */}
      <div className="absolute bottom-0 inset-x-0 h-10 pointer-events-none">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-center">
          <span className="font-song text-xs ink-faint">{t('hero.bottom_hint')}</span>
        </div>
      </div>
    </section>);

}