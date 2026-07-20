import React from 'react';
import {
  Bookmark,
  Flower2,
  Settings,
  ChevronLeft,
  Type,
  Globe,
  Image as ImageIcon,
  Palette,
  Heart,
  Trash2 } from
'lucide-react';
import { MountainDivider } from './MountainDivider';
type Screen = 'reading' | 'settings' | 'collection';
type Props = {
  screen?: Screen;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
  scale?: number;
};
export function PhoneMockup({
  screen = 'reading',
  imageSrc,
  imageAlt = '',
  className = '',
  scale = 1
}: Props) {
  const useImage = Boolean(imageSrc);
  return (
    <div
      className={`relative ${className}`}
      style={{
        width: 280 * scale,
        height: 580 * scale
      }}>
      
      {/* phone frame */}
      <div
        className="relative w-full h-full rounded-[44px] p-[6px]"
        style={{
          background: 'linear-gradient(160deg, #d4d4d2, #a8a8a4)',
          boxShadow:
          '0 1px 0 rgba(255,255,255,0.5) inset, 0 18px 40px -20px rgba(58,58,56,0.28)'
        }}>
        
        <div
          className="relative w-full h-full rounded-[38px] overflow-hidden"
          style={{
            background: '#FFFFFF'
          }}>
          
          {useImage ?
          <img
            src={imageSrc}
            alt={imageAlt}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy" /> :


          <>
              {/* notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#2b2b28] rounded-b-2xl z-30" />

              {/* paper grain inside */}
              <div
              className="absolute inset-0 opacity-60 pointer-events-none"
              style={{
                backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/><feColorMatrix values='0 0 0 0 0.29 0 0 0 0 0.29 0 0 0 0 0.27 0 0 0 0.06 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")"
              }} />
            

              {/* status bar */}
              <div className="absolute top-0 inset-x-0 h-10 flex items-end justify-between px-6 pb-1 text-[10px] ink-soft font-sans-cn z-20">
                <span>9:41</span>
                <span className="opacity-0">·</span>
                <span className="tracking-tight">●●● ▮</span>
              </div>

              {screen === 'reading' && <ReadingScreen />}
              {screen === 'settings' && <SettingsScreen />}
              {screen === 'collection' && <CollectionScreen />}
            </>
          }
        </div>
      </div>
    </div>);

}
function PhoneInkBg() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <svg
        viewBox="0 0 280 200"
        className="absolute top-10 inset-x-0 w-full"
        preserveAspectRatio="none">
        
        <path
          d="M0,140 C40,120 70,130 110,115 C150,100 180,118 220,108 C250,100 270,108 280,105 L280,0 L0,0 Z"
          fill="#6B6B66"
          opacity="0.08" />
        
        <path
          d="M0,160 C30,150 60,140 100,148 C140,156 180,138 220,148 C250,156 270,150 280,152 L280,200 L0,200 Z"
          fill="#4A4A45"
          opacity="0.10" />
        
      </svg>
      <svg
        viewBox="0 0 280 100"
        className="absolute bottom-20 inset-x-0 w-full"
        preserveAspectRatio="none">
        
        <path
          d="M0,80 C40,60 80,70 120,55 C160,40 200,60 240,50 C260,45 280,52 280,52 L280,100 L0,100 Z"
          fill="#4A4A45"
          opacity="0.13" />
        
      </svg>
    </div>);

}
function ReadingScreen() {
  return (
    <div className="absolute inset-0 flex flex-col">
      <PhoneInkBg />
      <div className="relative pt-12 px-5 flex items-center justify-between text-[10px] ink-faint font-sans-cn">
        <span>北京 · 子夜</span>
        <span>Echo</span>
      </div>

      <div className="relative flex-1 flex flex-col items-center justify-center px-7 text-center">
        <p
          className="font-song text-[15px] leading-[2] ink-text"
          style={{
            letterSpacing: '0.05em'
          }}>
          
          子夜将至，
          <br />
          城市的灯火一盏盏熄灭，
          <br />
          愿你此刻
          <br />
          也能把心放下。
        </p>
        <div className="mt-6 w-full">
          <MountainDivider opacity={0.3} />
        </div>
        <p className="mt-6 text-[10px] ink-faint font-sans-cn tracking-widest">
          ECHO · 2026.05.01
        </p>
      </div>

      <div className="relative pb-7 flex items-center justify-center gap-7">
        <RoundIcon>
          <Bookmark className="w-4 h-4" strokeWidth={1.4} />
        </RoundIcon>
        <RoundIcon highlight>
          <Flower2 className="w-5 h-5" strokeWidth={1.3} />
        </RoundIcon>
        <RoundIcon>
          <Settings className="w-4 h-4" strokeWidth={1.4} />
        </RoundIcon>
      </div>
    </div>);

}
function SettingsScreen() {
  const items: Array<{
    icon: React.ReactNode;
    label: string;
    value: string;
  }> = [
  {
    icon: <Palette className="w-4 h-4" strokeWidth={1.4} />,
    label: '主题',
    value: '宣纸'
  },
  {
    icon: <Type className="w-4 h-4" strokeWidth={1.4} />,
    label: '字体',
    value: '宋体'
  },
  {
    icon: <Globe className="w-4 h-4" strokeWidth={1.4} />,
    label: '语言',
    value: '中文'
  },
  {
    icon: <ImageIcon className="w-4 h-4" strokeWidth={1.4} />,
    label: '图片风格',
    value: '水墨'
  }];

  return (
    <div className="absolute inset-0 flex flex-col">
      <PhoneInkBg />
      <div className="relative pt-12 px-5 flex items-center justify-between text-[10px] ink-faint font-sans-cn">
        <ChevronLeft className="w-3.5 h-3.5" strokeWidth={1.4} />
        <span className="font-song text-[12px] ink-text">设置</span>
        <span className="w-3.5" />
      </div>

      <div className="relative flex-1 px-5 pt-6 space-y-1">
        {items.map((it) =>
        <div
          key={it.label}
          className="flex items-center justify-between py-3 border-b"
          style={{
            borderColor: 'rgba(74,74,69,0.10)'
          }}>
          
            <div className="flex items-center gap-3 ink-soft">
              {it.icon}
              <span className="font-song text-[12px] ink-text">{it.label}</span>
            </div>
            <span className="font-song text-[11px] ink-faint">{it.value}</span>
          </div>
        )}
        <div className="pt-6">
          <MountainDivider opacity={0.25} />
        </div>
        <p className="text-center text-[10px] ink-faint font-sans-cn pt-4 tracking-widest">
          回响 ECHO · v 1.4
        </p>
      </div>

      <div className="relative pb-7" />
    </div>);

}
function CollectionScreen() {
  const items = [
  '愿你被这世界温柔以待。',
  '雨落屋檐，时间慢了下来。',
  '清晨第一缕风，是为你而来。',
  '城市未眠，心已安放。'];

  return (
    <div className="absolute inset-0 flex flex-col">
      <PhoneInkBg />
      <div className="relative pt-12 px-5 flex items-center justify-between text-[10px] ink-faint font-sans-cn">
        <ChevronLeft className="w-3.5 h-3.5" strokeWidth={1.4} />
        <span className="font-song text-[12px] ink-text">收藏</span>
        <Heart className="w-3.5 h-3.5" strokeWidth={1.4} />
      </div>

      <div className="relative flex-1 px-5 pt-5 space-y-3 overflow-hidden">
        {items.map((t, i) =>
        <div key={i} className="rounded-2xl px-4 py-4 frosted-paper">
            <p className="font-song text-[12px] leading-[1.9] ink-text">{t}</p>
            <div className="mt-2 flex items-center justify-between text-[9px] ink-faint font-sans-cn">
              <span>2026.04.{20 + i}</span>
              <Trash2 className="w-3 h-3" strokeWidth={1.4} />
            </div>
          </div>
        )}
      </div>

      <div className="relative pb-7 flex items-center justify-center gap-7 pt-3">
        <RoundIcon>
          <Bookmark className="w-4 h-4" strokeWidth={1.4} />
        </RoundIcon>
        <RoundIcon>
          <Flower2 className="w-5 h-5" strokeWidth={1.3} />
        </RoundIcon>
        <RoundIcon highlight>
          <Heart className="w-4 h-4" strokeWidth={1.4} />
        </RoundIcon>
      </div>
    </div>);

}
function RoundIcon({
  children,
  highlight = false



}: {children: React.ReactNode;highlight?: boolean;}) {
  return (
    <div
      className="w-9 h-9 rounded-full flex items-center justify-center"
      style={{
        background: highlight ?
        'rgba(168,149,114,0.14)' :
        'rgba(242,234,218,0.6)',
        border: '1px solid rgba(74,74,69,0.14)',
        color: highlight ? '#A89572' : '#4A4A47'
      }}>
      
      {children}
    </div>);

}