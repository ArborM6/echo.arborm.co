import React from 'react';
/**
 * Subtle breath between major page sections.
 * Just a single ultra-thin line fading at both ends — no ornament,
 * to differentiate from the decorative MountainDivider used inside sections.
 */
export function SectionSeam() {
  return (
    <div className="relative w-full py-1" aria-hidden="true">
      <div className="max-w-2xl mx-auto px-6 md:px-10">
        <div
          className="h-px w-full"
          style={{
            background:
            'linear-gradient(90deg, transparent 0%, rgba(74, 74, 69, 0.14) 50%, transparent 100%)'
          }} />
        
      </div>
    </div>);

}