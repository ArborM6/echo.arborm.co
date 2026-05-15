import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { MountainDivider } from './MountainDivider';
import { useLanguage } from '../i18n';

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const { t } = useLanguage();

  const items = [
  {
    q: t('faq.q1'),
    a: t('faq.a1')
  },
  {
    q: t('faq.q2'),
    a: t('faq.a2')
  }];

  return (
    <section
      id="faq"
      className="relative w-full pt-16 md:pt-20 pb-16 md:pb-20 overflow-hidden"
      style={{
        background:
        'linear-gradient(180deg, rgba(74,74,71,0) 0%, rgba(74,74,71,0) 30%, rgba(74,74,71,0.05) 75%, rgba(74,74,71,0.08) 100%)'
      }}>
      
      {/* faint distant ink mountains as background texture */}
      <div
        className="absolute inset-x-0 bottom-0 h-2/3 pointer-events-none"
        aria-hidden="true">
        
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-full"
          preserveAspectRatio="none">
          
          <path
            d="M0,240 C90,210 170,225 250,205 C330,185 390,200 470,180 C550,160 610,180 700,165 C790,150 860,168 940,155 C1020,142 1090,160 1170,148 C1260,134 1340,152 1440,142 L1440,320 L0,320 Z"
            fill="#4A4A47"
            opacity="0.05" />
          
          <path
            d="M0,275 C70,250 140,265 220,250 C300,235 360,260 450,250 C540,240 600,265 690,255 C780,245 850,265 930,255 C1020,244 1090,265 1180,255 C1270,245 1340,260 1440,255 L1440,320 L0,320 Z"
            fill="#4A4A47"
            opacity="0.07" />
          
        </svg>
      </div>

      {/* a few drifting mist ellipses */}
      <div
        className="absolute inset-x-0 bottom-[20%] h-32 pointer-events-none mist-drift-slow"
        aria-hidden="true">
        
        <svg
          viewBox="0 0 1200 120"
          className="w-[140%] -translate-x-[20%] h-full"
          preserveAspectRatio="none">
          
          <defs>
            <radialGradient id="faqMist" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse cx="280" cy="60" rx="320" ry="22" fill="url(#faqMist)" />
          <ellipse cx="850" cy="70" rx="280" ry="20" fill="url(#faqMist)" />
        </svg>
      </div>

      <div className="relative max-w-3xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 16
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            margin: '-100px'
          }}
          transition={{
            duration: 1.2,
            ease: 'easeOut'
          }}
          className="text-center">
          
          <p className="font-sans-cn text-[11px] tracking-[0.4em] ink-faint mb-4">
            {t('faq.label')}
          </p>
          <div className="mb-6">
            <MountainDivider opacity={0.3} />
          </div>
          <h2 className="font-song text-3xl md:text-4xl ink-text leading-relaxed">
            {t('faq.title')}
          </h2>
        </motion.div>

        <ul className="mt-16 md:mt-20">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <motion.li
                key={i}
                initial={{
                  opacity: 0,
                  y: 12
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true,
                  margin: '-60px'
                }}
                transition={{
                  duration: 1,
                  delay: i * 0.08,
                  ease: 'easeOut'
                }}
                className="border-b"
                style={{
                  borderColor: 'rgba(74,74,69,0.12)'
                }}>
                
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left group">
                  
                  <span className="font-song text-base md:text-lg ink-text tracking-wide">
                    {it.q}
                  </span>
                  <motion.span
                    animate={{
                      rotate: isOpen ? 180 : 0
                    }}
                    transition={{
                      duration: 0.5,
                      ease: 'easeOut'
                    }}
                    className="ink-faint group-hover:ink-soft transition-colors duration-500 shrink-0">
                    
                    <ChevronDown className="w-5 h-5" strokeWidth={1.4} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen &&
                  <motion.div
                    key="content"
                    id={`faq-panel-${i}`}
                    initial={{
                      height: 0,
                      opacity: 0
                    }}
                    animate={{
                      height: 'auto',
                      opacity: 1
                    }}
                    exit={{
                      height: 0,
                      opacity: 0
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="overflow-hidden">
                    
                      <p className="pb-7 pr-10 font-song text-[15px] leading-[2.1] ink-soft">
                        {it.a}
                      </p>
                    </motion.div>
                  }
                </AnimatePresence>
              </motion.li>);

          })}
        </ul>
      </div>
    </section>);

}