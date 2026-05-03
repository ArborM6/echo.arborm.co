import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Apple } from 'lucide-react';
import { InkBackground } from './InkBackground';
import { PhoneMockup } from './PhoneMockup';
export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });
  const titleChars = [
  '让',
  '每',
  '一',
  '次',
  '提',
  '醒',
  '，',
  '都',
  '有',
  '诗',
  '意'];

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
              
              ECHO · 回 响
            </motion.p>

            <h1 className="font-song font-medium ink-text text-[2.4rem] sm:text-5xl md:text-6xl leading-[1.35] tracking-wide">
              {titleChars.map((c, i) =>
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
                  delay: 0.4 + i * 0.06,
                  ease: 'easeOut'
                }}
                className="inline-block">
                
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
              
              Echo 会在合适的时间，把天气、城市、设备状态
              <br className="hidden md:block" />
              与生活片刻，化成一段安静的消息。
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
              className="mt-10 flex flex-wrap items-center gap-4"
              id="download">
              
              <button
                type="button"
                disabled
                aria-label="下载 iOS 版 · 敬请期待"
                className="pill-ghost inline-flex items-center gap-2 px-6 py-3 rounded-full font-song text-sm cursor-not-allowed"
                style={{
                  opacity: 0.78
                }}>
                
                <Apple className="w-4 h-4" strokeWidth={1.6} />
                <span>下载 iOS 版</span>
                <span
                  className="ml-1 inline-flex items-center px-2 py-[1px] rounded-full text-[10px] tracking-[0.25em] font-sans-cn"
                  style={{
                    color: '#A89572',
                    background: 'rgba(168,149,114,0.12)',
                    border: '1px solid rgba(168,149,114,0.3)'
                  }}>
                  
                  敬请期待
                </span>
              </button>
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
              
              <span>iOS 16+</span>
              <span className="w-px h-3 bg-current opacity-30" />
              <span>中文</span>
              <span className="w-px h-3 bg-current opacity-30" />
              <span>无广告</span>
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
          <span className="font-song text-xs ink-faint">— 因 时 而 至 —</span>
        </div>
      </div>
    </section>);

}