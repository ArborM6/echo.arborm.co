import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
export function Nav() {
  const location = useLocation();
  const onHome = location.pathname === '/';
  const links = [
  {
    label: '功能',
    href: '/#features'
  },
  {
    label: '体验',
    href: '/#showcase'
  },
  {
    label: '订阅',
    href: '/#subscription'
  },
  {
    label: '答疑',
    href: '/#faq'
  }];

  const handleBrandClick = (e: React.MouseEvent) => {
    if (onHome) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };
  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -8
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 1.2,
        ease: 'easeOut'
      }}
      className="fixed top-0 inset-x-0 z-40"
      style={{
        background: 'var(--nav-bg)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)'
      }}>
      
      {/* faint ink-wash mountain watermark — full width, echoing the footer */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-10 pointer-events-none overflow-hidden">
        
        <svg
          viewBox="0 0 1440 60"
          className="w-full h-full"
          preserveAspectRatio="none">
          
          <path
            d="M0,42 C90,18 180,46 280,22 C380,-2 460,40 560,18 C660,-4 740,42 840,20 C940,-2 1020,40 1120,22 C1220,4 1320,42 1410,26 C1425,23 1435,24 1440,24 L1440,60 L0,60 Z"
            fill="#4A4A47"
            opacity="0.06" />
          
        </svg>
      </div>
      {/* breath line — full width, fades from center outward */}
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 bottom-0 h-px pointer-events-none"
        style={{
          background:
          'linear-gradient(90deg, transparent 0%, rgba(74, 74, 69, 0.12) 50%, transparent 100%)'
        }} />
      

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-3 md:py-3.5 flex items-center justify-between">
        {/* Brand */}
        <Link
          to="/"
          onClick={handleBrandClick}
          aria-label="回响 Echo · 回到顶部"
          className="flex items-center gap-3 group">
          
          {/* Brand logo */}
          <span
            className="relative inline-flex items-center justify-center w-[26px] h-[26px] rounded-full overflow-hidden"
            aria-hidden="true"
            style={{
              border: '1px solid var(--hairline)'
            }}>
            
            <img
              src="/logo-square.png"
              alt=""
              className="w-full h-full object-cover" />
            
          </span>

          <span className="flex items-baseline gap-2 transition-opacity duration-500 group-hover:opacity-90">
            <span className="brand-script text-2xl md:text-[26px] ink-text leading-none">
              回响
            </span>
            <span className="hidden sm:inline-block w-px h-3 bg-current opacity-25" />
            <span className="font-sans-cn text-[10px] md:text-[11px] tracking-[0.32em] ink-faint uppercase">
              Echo
            </span>
          </span>
        </Link>

        {/* Right side */}
        <nav className="flex items-center gap-1 md:gap-2">
          {onHome &&
          links.map((l) =>
          <a
            key={l.label}
            href={l.href}
            className="relative font-song text-sm ink-soft hover:ink-text transition-colors duration-500 px-3 py-1.5 group/link">
            
                <span>{l.label}</span>
                {/* animated underline */}
                <span
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-0.5 h-px w-4 origin-center scale-x-0 group-hover/link:scale-x-100 transition-transform duration-500 ease-out"
              style={{
                background: 'rgba(74, 74, 69, 0.45)'
              }} />
            
              </a>
          )}

          {/* Divider */}
          {onHome &&
          <span
            aria-hidden="true"
            className="hidden sm:inline-block w-px h-3.5 mx-1 md:mx-2"
            style={{
              background: 'rgba(74, 74, 69, 0.18)'
            }} />

          }

          {/* Company link */}
          <a
            href="https://arborm.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group/company inline-flex items-center gap-1.5 font-song text-sm ink-soft hover:ink-text transition-colors duration-500 px-3 py-1.5"
            aria-label="访问阿博木公司主页">
            
            <span>阿博木</span>
            <ArrowUpRight
              className="w-3.5 h-3.5 transition-transform duration-500 group-hover/company:translate-x-0.5 group-hover/company:-translate-y-0.5"
              strokeWidth={1.4} />
            
          </a>

          {/* Theme toggle */}
          <ThemeToggle />
        </nav>
      </div>
    </motion.header>);

}