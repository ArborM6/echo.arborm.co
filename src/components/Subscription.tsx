import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { MountainDivider } from './MountainDivider';
import { useLanguage } from '../i18n';

export function Subscription() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const perks = [t('sub.perk1'), t('sub.perk2'), t('sub.perk3'), t('sub.perk4')];

  const rows = [
  { feature: t('sub.row_schedule'), free: '✓', pro: '✓' },
  { feature: t('sub.row_theme'), free: t('sub.val_basic'), pro: t('sub.val_all') },
  { feature: t('sub.row_font'), free: t('sub.val_basic'), pro: t('sub.val_all') },
  { feature: t('sub.row_style'), free: t('sub.val_basic'), pro: t('sub.val_all') },
  { feature: t('sub.row_image'), free: t('sub.val_no_image'), pro: t('sub.val_all') },
  { feature: t('sub.row_manual'), free: t('sub.val_1'), pro: t('sub.val_3') },
  { feature: t('sub.row_avatar'), free: '—', pro: '✓' }];

  return (
    <section
      id="subscription"
      className="relative w-full pt-16 md:pt-20 pb-16 md:pb-20"
      style={{
        background: 'var(--section-alt)'
      }}>
      
      <div className="max-w-2xl mx-auto px-6 md:px-10 text-center">
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
          }}>
          
          <p
            className="font-sans-cn text-[11px] tracking-[0.4em] mb-4"
            style={{
              color: 'var(--gold)'
            }}>
            
            {t('sub.label')}
          </p>
          <h2 className="font-song text-3xl md:text-4xl ink-text leading-relaxed">
            {t('sub.title')}
          </h2>
          <p className="mt-6 font-song text-sm md:text-base leading-[2] ink-soft">
            {t('sub.desc_1')}
            <br />
            {t('sub.desc_2')}
          </p>
          <p className="mt-5 font-song text-sm md:text-[15px] leading-[2] ink-faint italic">
            {t('sub.poetic_1')}
            <br className="md:hidden" />
            {t('sub.poetic_2')}
          </p>

          <div className="mt-10">
            <MountainDivider opacity={0.4} />
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-6 max-w-md mx-auto">
            {perks.map((p, i) =>
            <motion.li
              key={p}
              initial={{
                opacity: 0,
                y: 8
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 1,
                delay: 0.2 + i * 0.1,
                ease: 'easeOut'
              }}
              className="font-song text-base ink-text flex items-center justify-center gap-2">
              
                <span
                className="inline-block w-1 h-1 rounded-full"
                style={{
                  background: 'var(--gold)'
                }} />
              
                {p}
              </motion.li>
            )}
          </ul>

          <motion.div
            initial={{
              opacity: 0
            }}
            whileInView={{
              opacity: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 1.2,
              delay: 0.6
            }}
            className="mt-12">
            
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="pro-comparison-panel"
              className="pill-ghost inline-flex items-center gap-2 px-7 py-3 rounded-full font-song text-sm"
              style={{
                borderColor: 'rgba(168,149,114,0.38)',
                color: 'var(--gold)'
              }}>
              
              {open ? t('sub.collapse') : t('sub.expand')}
              <motion.span
                animate={{
                  rotate: open ? 180 : 0
                }}
                transition={{
                  duration: 0.5,
                  ease: 'easeOut'
                }}
                className="inline-flex">
                
                <ChevronDown className="w-4 h-4" strokeWidth={1.4} />
              </motion.span>
            </button>
          </motion.div>

          <AnimatePresence initial={false}>
            {open &&
            <motion.div
              key="panel"
              id="pro-comparison-panel"
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
              
                <div className="mt-10 mx-auto max-w-xl text-left">
                  <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: 'var(--paper)',
                    border: '1px solid var(--hairline)'
                  }}>
                  
                    {/* Header row */}
                    <div
                    className="grid grid-cols-[1.3fr_1fr_1fr] font-sans-cn text-[11px] tracking-[0.3em] ink-faint"
                    style={{
                      borderBottom: '1px solid var(--hairline-soft)'
                    }}>
                    
                      <div className="px-5 py-4">{t('sub.col_feature')}</div>
                      <div className="px-5 py-4 text-center">{t('sub.col_free')}</div>
                      <div
                      className="px-5 py-4 text-center"
                      style={{
                        color: 'var(--gold)'
                      }}>
                      
                        {t('sub.col_pro')}
                      </div>
                    </div>
                    {/* Rows */}
                    {rows.map((r, i) =>
                  <div
                    key={r.feature}
                    className="grid grid-cols-[1.3fr_1fr_1fr] items-center font-song text-[14px]"
                    style={{
                      borderBottom:
                      i < rows.length - 1 ?
                      '1px solid var(--hairline-soft)' :
                      'none'
                    }}>
                    
                        <div className="px-5 py-4 ink-text">{r.feature}</div>
                        <div className="px-5 py-4 text-center ink-soft">
                          {r.free}
                        </div>
                        <div
                      className="px-5 py-4 text-center"
                      style={{
                        color: 'var(--gold)'
                      }}>
                      
                          {r.pro}
                        </div>
                      </div>
                  )}
                  </div>
                </div>
              </motion.div>
            }
          </AnimatePresence>
        </motion.div>
      </div>
    </section>);

}