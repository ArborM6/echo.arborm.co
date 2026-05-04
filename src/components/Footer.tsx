import React from 'react';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MountainDivider } from './MountainDivider';
export function Footer() {
  return (
    <footer className="relative w-full pt-16 pb-12 overflow-hidden">
      {/* faint ink-wash mountain watermark */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none"
        aria-hidden="true">
        
        <svg
          viewBox="0 0 1440 200"
          className="w-full h-full"
          preserveAspectRatio="none">
          
          <path
            d="M0,160 C80,140 160,150 240,135 C320,120 380,142 460,128 C540,115 600,140 680,128 C760,116 820,138 900,128 C980,118 1040,140 1120,130 C1200,120 1280,138 1360,130 C1400,126 1430,128 1440,128 L1440,200 L0,200 Z"
            fill="#4A4A47"
            opacity="0.05" />
          
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        {/* 双线书口装 — distinct from header's centered breath line */}
        <div aria-hidden="true">
          <div
            className="h-px w-full"
            style={{
              background: 'rgba(74, 74, 69, 0.16)'
            }} />
          
          <div
            className="h-px w-full mt-[3px]"
            style={{
              background: 'rgba(74, 74, 69, 0.08)'
            }} />
          
        </div>

        <div className="mt-14 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <div className="flex items-center gap-3">
              <span
                className="inline-flex items-center justify-center w-8 h-8 rounded-full overflow-hidden"
                style={{
                  border: '1px solid var(--hairline)'
                }}
                aria-hidden="true">
                
                <img
                  src="/logo-square.png"
                  alt=""
                  className="w-full h-full object-cover" />
                
              </span>
              <span className="flex items-baseline gap-2">
                <span className="brand-script text-3xl ink-text">回响</span>
                <span className="font-sans-cn text-[11px] tracking-[0.3em] ink-faint uppercase">
                  Echo
                </span>
              </span>
            </div>
            <p className="mt-5 font-song text-sm leading-[2] ink-soft max-w-sm">
              在合适的时间，
              <br />
              把生活的片刻，化成一段安静的消息。
            </p>
          </div>

          <div className="flex flex-col gap-8 md:flex-row md:gap-14 md:items-start">
            <div>
              <p className="font-song text-sm ink-text mb-3 tracking-wider">
                联系
              </p>
              <a
                href="mailto:support@arborm.com"
                className="inline-flex items-center gap-2 font-song text-[14px] ink-soft hover:ink-text transition-colors duration-500">
                
                <Mail className="w-4 h-4" strokeWidth={1.4} />
                support@arborm.com
              </a>
            </div>
            <div>
              <p className="font-song text-sm ink-text mb-3 tracking-wider">
                条款
              </p>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/privacy"
                    className="font-song text-[14px] ink-soft hover:ink-text transition-colors duration-500">
                    
                    隐私政策
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="font-song text-[14px] ink-soft hover:ink-text transition-colors duration-500">
                    
                    服务条款
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row md:items-center md:justify-center gap-x-4 gap-y-1.5 font-sans-cn text-[11px] ink-faint text-center">
          <span>© 2026 合肥阿博木科技有限公司 版权所有</span>
          <span className="hidden md:inline opacity-50">·</span>
          <a
            href="https://beian.miit.gov.cn/#/Integrated/index"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:ink-soft transition-colors duration-500">
            
            皖ICP备2026007885号
          </a>
          <a
            href="https://beian.mps.gov.cn/#/query/webSearch?code=34011102003969"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 hover:ink-soft transition-colors duration-500">
            
            <img
              src="/police-badge.png"
              alt=""
              aria-hidden="true"
              className="w-3.5 h-3.5 object-contain" />
            
            皖公网安备34011102003969号
          </a>
        </div>
      </div>
    </footer>);

}