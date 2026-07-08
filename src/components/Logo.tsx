import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'emblem' | 'full' | 'horizontal' | 'vertical';
  scrolled?: boolean;
}

export default function Logo({
  className = '',
  size = 'md',
  variant = 'full',
  scrolled = false,
}: LogoProps) {
  // Size mapping for the lotus emblem (wider aspect ratio to match the logo)
  const sizeMap = {
    sm: 'h-8 w-22',
    md: 'h-12 w-32',
    lg: 'h-16 w-44',
    xl: 'h-24 w-66',
  };

  const emblemSize = sizeMap[size];

  // Title and subtitle typography scales proportional to size
  const titleSizeMap = {
    sm: 'text-[13px] sm:text-[14px] tracking-tight font-black',
    md: 'text-sm sm:text-base tracking-normal font-black',
    lg: 'text-lg sm:text-xl tracking-wide font-black',
    xl: 'text-2xl sm:text-3xl tracking-wider font-black',
  };

  const subtitleSizeMap = {
    sm: 'text-[9px] sm:text-[10px] tracking-[0.24em] mt-0.5 font-bold',
    md: 'text-[11px] tracking-[0.25em] mt-1 font-bold',
    lg: 'text-sm tracking-[0.3em] mt-1.5 font-bold',
    xl: 'text-base sm:text-lg tracking-[0.4em] mt-2 font-bold',
  };

  // Render the beautiful 3D stereoscopic dual-layer lotus flower
  const renderLotus = () => (
    <div className={`relative ${emblemSize} shrink-0`}>
      {/* Cyan Shadow Layer (stereoscopic offset, changes to clean dark shadow when scrolled) */}
      <svg
        viewBox="0 0 100 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className={`absolute inset-0 w-full h-full transform -translate-x-[2px] translate-y-[1px] transition-colors duration-300 ${
          scrolled ? 'text-brand-green-950/20' : 'text-brand-cyan-glow'
        }`}
      >
        <g stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Central Petal */}
          <path d="M 50,75 C 44,55 44,20 50,5 C 56,20 56,55 50,75 Z" />
          {/* Left Flanking Petal */}
          <path d="M 50,75 C 38,58 20,40 28,25 C 36,35 44,55 50,75 Z" />
          {/* Right Flanking Petal */}
          <path d="M 50,75 C 62,58 80,40 72,25 C 64,35 56,55 50,75 Z" />
          {/* Left Base Petal */}
          <path d="M 50,75 C 30,78 10,75 12,60 C 22,50 38,62 50,75 Z" />
          {/* Right Base Petal */}
          <path d="M 50,75 C 70,78 90,75 88,60 C 78,50 62,62 50,75 Z" />
        </g>
      </svg>

      {/* Coral Main Layer */}
      <svg
        viewBox="0 0 100 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full text-brand-coral"
      >
        <g stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Central Petal */}
          <path d="M 50,75 C 44,55 44,20 50,5 C 56,20 56,55 50,75 Z" />
          {/* Left Flanking Petal */}
          <path d="M 50,75 C 38,58 20,40 28,25 C 36,35 44,55 50,75 Z" />
          {/* Right Flanking Petal */}
          <path d="M 50,75 C 62,58 80,40 72,25 C 64,35 56,55 50,75 Z" />
          {/* Left Base Petal */}
          <path d="M 50,75 C 30,78 10,75 12,60 C 22,50 38,62 50,75 Z" />
          {/* Right Base Petal */}
          <path d="M 50,75 C 70,78 90,75 88,60 C 78,50 62,62 50,75 Z" />
        </g>
      </svg>
    </div>
  );

  if (variant === 'emblem') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        {renderLotus()}
      </div>
    );
  }

  if (variant === 'horizontal' || variant === 'vertical') {
    return (
      <div className={`flex flex-col items-center justify-center text-center ${className}`}>
        {renderLotus()}
        <div className="flex flex-col items-center mt-1">
          <span
            className={`font-display font-black uppercase transition-colors duration-300 leading-tight ${titleSizeMap[size]} ${
              scrolled ? 'text-brand-green-950' : 'text-white'
            }`}
          >
            Pratham Shvaas
          </span>
          <span
            className={`uppercase font-bold leading-none transition-colors duration-300 ${subtitleSizeMap[size]} ${
              scrolled ? 'text-brand-green-800' : 'text-brand-cyan-glow'
            }`}
          >
            Foundation
          </span>
        </div>
      </div>
    );
  }

  // Default 'full' variant matches the uploaded logo: emblem centered, black line (or theme line), text below
  return (
    <div className={`flex flex-col items-center justify-center text-center ${className}`}>
      {renderLotus()}
      
      {/* Separator Line */}
      <div 
        className={`w-full max-w-[280px] h-[3px] my-3 rounded-full transition-colors duration-300 ${
          scrolled ? 'bg-brand-green-950' : 'bg-white'
        }`}
      />
      
      {/* Logo Text */}
      <span
        className={`font-display font-black text-sm sm:text-base uppercase tracking-[0.08em] transition-colors duration-300 ${
          scrolled ? 'text-brand-green-800' : 'text-white'
        }`}
      >
        Pratham Shvaas Foundation
      </span>
    </div>
  );
}
