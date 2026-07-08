import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Wind, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Logo from './Logo';

export default function Hero() {
  const { language, t } = useLanguage();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScrollDown = () => {
    const nextSection = document.querySelector('#causes');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-green-950 text-white"
    >
      {/* Background Image with Dark Professional Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=1920"
          alt="Clean forest air sun rays background"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-green-950/80 via-brand-green-950/75 to-brand-green-950/90" />
      </div>

      {/* Decorative Floating Blobs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-brand-green-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl animate-pulse" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 sm:pt-20">
        {/* Animated Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="font-display font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight leading-tight max-w-4xl mx-auto"
        >
          {language === 'hi' ? (
            <>समुदायों का सशक्तिकरण, <span className="text-brand-accent">जीवन का रूपांतरण।</span></>
          ) : (
            <>Empowering Communities, <span className="text-brand-accent">Transforming Lives.</span></>
          )}
        </motion.h1>

        {/* Animated Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="mt-6 font-sans text-base sm:text-xl text-gray-200/90 max-w-3xl mx-auto leading-relaxed"
        >
          {t('hero.desc')}
        </motion.p>

        {/* Interactive Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-brand-accent hover:bg-brand-accent-hover text-brand-green-950 font-display font-bold px-8 py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            <Wind className="h-5 w-5 animate-pulse" />
            <span>{t('hero.ctaJoin')}</span>
          </a>
          <a
            href="#causes"
            onClick={(e) => handleScrollTo(e, '#causes')}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 font-display font-semibold px-8 py-4 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5"
          >
            <span>{t('hero.ctaImpact')}</span>
          </a>
        </motion.div>
      </div>

      {/* Animated Bouncing Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center">
        <motion.button
          onClick={handleScrollDown}
          className="flex flex-col items-center text-gray-300 hover:text-white transition-colors cursor-pointer focus:outline-none"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <span className="text-[10px] uppercase tracking-widest font-semibold mb-1 opacity-70">
            {t('hero.scroll')}
          </span>
          <ChevronDown className="h-6 w-6 text-brand-accent" />
        </motion.button>
      </div>
    </section>
  );
}
