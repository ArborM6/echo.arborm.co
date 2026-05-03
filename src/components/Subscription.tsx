import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { MountainDivider } from './MountainDivider';
const perks = ['更多主题', '更多字体', '专属头像', '充足生成额度'];
type Row = {
  feature: string;
  free: string;
  pro: string;
};
const rows: Row[] = [
{
  feature: '定时消息',
  free: '✓',
  pro: '✓'
},
{
  feature: '主题',
  free: '基础',
  pro: '所有'
},
{
  feature: '字体',
  free: '基础',
  pro: '所有'
},
{
  feature: '文字风格',
  free: '基础',
  pro: '所有'
},
{
  feature: '配图风格',
  free: '无法生图',
  pro: '所有'
},
{
  feature: '手动额度',
  free: '1 条',
  pro: '3 条'
},
{
  feature: '专属头像',
  free: '—',
  pro: '✓'
}];

export function Subscription() {
  const [open, setOpen] = useState(false);
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
            
            ECHO · PRO
          </p>
          <h2 className="font-song text-3xl md:text-4xl ink-text leading-relaxed">
            若你愿意走得更远一些
          </h2>
          <p className="mt-6 font-song text-sm md:text-base leading-[2] ink-soft">
            Pro 会为你打开更多主题、更多字体，
            <br />
            以及一份充足而从容的生成额度。
          </p>
          <p className="mt-5 font-song text-sm md:text-[15px] leading-[2] ink-faint italic">
            像在山中多备一盏灯，
            <br className="md:hidden" />
            让长夜里的字句，仍能温柔地落下。
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
              
              {open ? '收起对比' : '了解 Pro'}
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
                    
                      <div className="px-5 py-4">功能</div>
                      <div className="px-5 py-4 text-center">免费</div>
                      <div
                      className="px-5 py-4 text-center"
                      style={{
                        color: 'var(--gold)'
                      }}>
                      
                        PRO
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