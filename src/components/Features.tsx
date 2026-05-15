import React from 'react';
import { motion } from 'framer-motion';
import { Mountain, Droplet, Bookmark, Leaf } from 'lucide-react';
import { MountainDivider } from './MountainDivider';
import { useLanguage } from '../i18n';

export function Features() {
  const { t } = useLanguage();

  const features = [
  {
    icon: <Mountain className="w-6 h-6" strokeWidth={1.2} />,
    title: t('features.item1_title'),
    desc: t('features.item1_desc')
  },
  {
    icon: <Droplet className="w-6 h-6" strokeWidth={1.2} />,
    title: t('features.item2_title'),
    desc: t('features.item2_desc')
  },
  {
    icon: <Bookmark className="w-6 h-6" strokeWidth={1.2} />,
    title: t('features.item3_title'),
    desc: t('features.item3_desc')
  },
  {
    icon: <Leaf className="w-6 h-6" strokeWidth={1.2} />,
    title: t('features.item4_title'),
    desc: t('features.item4_desc')
  }];

  return (
    <section
      id="features"
      className="relative w-full pt-20 md:pt-28 pb-20 md:pb-28"
      style={{
        background: 'var(--section-alt)'
      }}>
      
      <div className="max-w-6xl mx-auto px-6 md:px-10">
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
            {t('features.label')}
          </p>
          <h2 className="font-song text-3xl md:text-4xl ink-text leading-relaxed">
            {t('features.title_1')}
            <br className="md:hidden" />
            {t('features.title_2')}
          </h2>
          <p className="mt-6 font-song text-sm md:text-base leading-[2] ink-soft">
            {t('features.desc_1')}
            <br className="md:hidden" />
            {t('features.desc_2')}
          </p>
          <div className="mt-10">
            <MountainDivider />
          </div>
        </motion.div>

        <div className="mt-24 md:mt-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-4 relative">
          {features.map((f, i) =>
          <motion.div
            key={f.title}
            initial={{
              opacity: 0,
              y: 20
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
              duration: 1.2,
              delay: i * 0.15,
              ease: 'easeOut'
            }}
            className="relative px-6 text-center lg:text-left">
            
              {/* vertical ink line between desktop columns */}
              {i > 0 &&
            <div
              className="hidden lg:block absolute left-0 top-2 bottom-2 w-px"
              style={{
                background:
                'linear-gradient(to bottom, transparent, rgba(74,74,69,0.18), transparent)'
              }} />

            }
              <div
              className="ink-soft mb-5 inline-flex items-center justify-center w-12 h-12 rounded-full"
              style={{
                background: 'rgba(242,234,218,0.5)',
                border: '1px solid rgba(74,74,69,0.10)'
              }}>
              
                {f.icon}
              </div>
              <h3 className="font-song text-xl ink-text tracking-wider mb-3">
                {f.title}
              </h3>
              <p className="font-song text-sm leading-[2] ink-soft">{f.desc}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}