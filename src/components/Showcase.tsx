import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { PhoneMockup } from './PhoneMockup';
import { InkBackground } from './InkBackground';
import { MountainDivider } from './MountainDivider';
import { useLanguage } from '../i18n';

export function Showcase() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  const { t } = useLanguage();

  const screens = [
  {
    key: 'white',
    caption: t('showcase.white'),
    offset: 'lg:translate-y-0',
    imageSrc: "/image.png"
  },
  {
    key: 'dark',
    caption: t('showcase.dark'),
    offset: 'lg:translate-y-10',
    imageSrc: "/image-1.png"
  },
  {
    key: 'ink',
    caption: t('showcase.ink'),
    offset: 'lg:-translate-y-6',
    imageSrc: "/image-2.png"
  }];

  return (
    <section
      ref={ref}
      id="showcase"
      className="relative w-full pt-16 md:pt-20 pb-16 md:pb-20 overflow-hidden">
      
      <InkBackground variant="soft" scrollYProgress={scrollYProgress} />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 z-10">
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
          className="text-center max-w-2xl mx-auto">
          
          <p className="font-sans-cn text-[11px] tracking-[0.4em] ink-faint mb-4">
            {t('showcase.label')}
          </p>
          <h2 className="font-song text-3xl md:text-4xl ink-text leading-relaxed">
            {t('showcase.title')}
          </h2>
          <p className="mt-6 font-song text-sm md:text-base leading-[2] ink-soft">
            {t('showcase.desc')}
          </p>
          <div className="mt-8">
            <MountainDivider />
          </div>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 items-center justify-items-center">
          {screens.map((s, i) =>
          <motion.div
            key={s.key}
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              margin: '-80px'
            }}
            transition={{
              duration: 1.4,
              delay: i * 0.15,
              ease: 'easeOut'
            }}
            className={`flex flex-col items-center transform ${s.offset}`}>
            
              <PhoneMockup
              imageSrc={s.imageSrc}
              imageAlt={`Echo - ${s.caption}`}
              scale={0.85} />
            
              <p className="mt-6 font-song text-base ink-text tracking-[0.4em]">
                {s.caption}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}