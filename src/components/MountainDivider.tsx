import React from 'react';
type Props = {
  className?: string;
  opacity?: number;
};
export function MountainDivider({ className = '', opacity = 0.35 }: Props) {
  return (
    <div
      className={`flex items-center justify-center w-full ${className}`}
      aria-hidden="true">
      
      <div className="h-px flex-1 divider-glow" />
      <svg
        width="80"
        height="18"
        viewBox="0 0 80 18"
        fill="none"
        className="mx-3">
        
        <path
          d="M2 14 L18 4 L28 11 L40 2 L52 11 L62 5 L78 14"
          stroke="#4A4A45"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={opacity}
          fill="none" />
        
      </svg>
      <div className="h-px flex-1 divider-glow" />
    </div>);

}