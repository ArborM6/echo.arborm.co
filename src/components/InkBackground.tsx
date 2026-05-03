import React from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
type Props = {
  variant?: 'hero' | 'soft';
  scrollYProgress?: MotionValue<number>;
};
export function InkBackground({ variant = 'hero', scrollYProgress }: Props) {
  // fallback static motion value if none provided
  const defaultScroll = useScroll().scrollYProgress;
  const progress = scrollYProgress ?? defaultScroll;
  const yFar = useTransform(progress, [0, 1], [0, -10]);
  const yMid = useTransform(progress, [0, 1], [0, -20]);
  const yNear = useTransform(progress, [0, 1], [0, -30]);
  const intensity = variant === 'soft' ? 0.55 : 1;
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true">
      
      {/* mist clouds — soft ellipses */}
      <div className="absolute inset-x-0 bottom-[35%] h-[40%] mist-drift">
        <svg
          viewBox="0 0 1200 200"
          className="w-[140%] -translate-x-[20%] h-full"
          preserveAspectRatio="none">
          
          <defs>
            <radialGradient id="mist1" cx="50%" cy="50%" r="50%">
              <stop
                offset="0%"
                stopColor="#FFFFFF"
                stopOpacity={0.9 * intensity} />
              
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse cx="200" cy="120" rx="260" ry="36" fill="url(#mist1)" />
          <ellipse cx="700" cy="90" rx="320" ry="28" fill="url(#mist1)" />
          <ellipse cx="1050" cy="140" rx="220" ry="32" fill="url(#mist1)" />
        </svg>
      </div>

      {/* far mountains */}
      <motion.div
        style={{
          y: yFar
        }}
        className="absolute inset-x-0 bottom-0 h-[55%]">
        
        <svg
          viewBox="0 0 1440 400"
          className="w-full h-full"
          preserveAspectRatio="none">
          
          <path
            d="M0,300 C90,260 160,280 240,250 C310,225 360,235 430,215 C520,190 580,205 660,180 C740,155 810,170 890,150 C980,128 1050,142 1130,125 C1220,106 1300,118 1380,108 L1440,105 L1440,400 L0,400 Z"
            fill="#6B6B66"
            opacity={0.1 * intensity} />
          
        </svg>
      </motion.div>

      {/* mid mountains with pavilion silhouette */}
      <motion.div
        style={{
          y: yMid
        }}
        className="absolute inset-x-0 bottom-0 h-[42%]">
        
        <svg
          viewBox="0 0 1440 400"
          className="w-full h-full"
          preserveAspectRatio="none">
          
          <path
            d="M0,330 C70,310 130,290 200,300 C270,310 320,260 410,255 C500,250 540,295 620,285 C700,275 760,235 840,245 C920,255 980,300 1070,295 C1160,290 1230,250 1310,265 C1370,275 1410,290 1440,290 L1440,400 L0,400 Z"
            fill="#4A4A45"
            opacity={0.13 * intensity} />
          
          {/* tiny pavilion silhouette */}
          <g
            transform="translate(880, 248)"
            fill="#4A4A45"
            opacity={0.32 * intensity}>
            
            <path d="M0,8 L6,0 L18,0 L24,8 Z" />
            <rect x="4" y="8" width="16" height="2" />
            <rect x="6" y="10" width="3" height="10" />
            <rect x="15" y="10" width="3" height="10" />
            <line
              x1="2"
              y1="20"
              x2="22"
              y2="20"
              stroke="#4A4A45"
              strokeWidth="1" />
            
          </g>
        </svg>
      </motion.div>

      {/* near mountains with brushy irregular edge */}
      <motion.div
        style={{
          y: yNear
        }}
        className="absolute inset-x-0 bottom-0 h-[28%]">
        
        <svg
          viewBox="0 0 1440 400"
          className="w-full h-full"
          preserveAspectRatio="none">
          
          <path
            d="M0,360 C60,340 110,355 180,345 C240,337 280,318 360,322 C430,326 470,355 550,348 C630,341 690,302 770,310 C860,319 920,360 1010,355 C1090,351 1150,322 1230,330 C1310,338 1380,355 1440,348 L1440,400 L0,400 Z"
            fill="#4A4A45"
            opacity={0.18 * intensity} />
          
        </svg>
      </motion.div>

      {/* foreground mist drift slow */}
      <div className="absolute inset-x-0 bottom-[10%] h-[25%] mist-drift-slow">
        <svg
          viewBox="0 0 1200 160"
          className="w-[140%] -translate-x-[20%] h-full"
          preserveAspectRatio="none">
          
          <defs>
            <radialGradient id="mist2" cx="50%" cy="50%" r="50%">
              <stop
                offset="0%"
                stopColor="#FFFFFF"
                stopOpacity={0.8 * intensity} />
              
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse cx="350" cy="80" rx="380" ry="30" fill="url(#mist2)" />
          <ellipse cx="900" cy="100" rx="300" ry="26" fill="url(#mist2)" />
        </svg>
      </div>

      {/* birds */}
      <div className="absolute top-[18%] left-0 bird-1">
        <svg width="34" height="14" viewBox="0 0 34 14" fill="none">
          <path
            d="M2 10 Q8 2 14 10 Q20 2 26 10"
            stroke="#4A4A45"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.55"
            fill="none" />
          
        </svg>
      </div>
      <div className="absolute top-[26%] left-0 bird-2">
        <svg width="26" height="10" viewBox="0 0 26 10" fill="none">
          <path
            d="M1 7 Q6 1 11 7 Q16 1 21 7"
            stroke="#4A4A45"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.45"
            fill="none" />
          
        </svg>
      </div>
      <div className="absolute top-[14%] left-0 bird-3">
        <svg width="22" height="9" viewBox="0 0 22 9" fill="none">
          <path
            d="M1 6 Q5 1 9 6 Q13 1 17 6"
            stroke="#4A4A45"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.4"
            fill="none" />
          
        </svg>
      </div>
    </div>);

}