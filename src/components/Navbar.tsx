import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Heart, Wind, Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollY) {
        const parsedScroll = parseInt(scrollY, 10);
        if (!isNaN(parsedScroll)) {
          window.scrollTo(0, parsedScroll * -1);
        }
      }
    }
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  const navItems = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.initiatives'), href: '#causes' },
    { label: t('nav.gallery'), href: '#gallery' },
    { label: t('nav.ourTeam'), href: '#team' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, '#home')}
            className="flex items-center space-x-3 group -ml-2 md:-ml-4 transform transition-transform duration-200 hover:scale-[1.02]"
          >
            <Logo size="sm" variant="horizontal" scrolled={scrolled} />
          </a>

          {/* Desktop Navigation Links & Controls */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className={`font-sans text-[15px] font-medium transition-all relative py-1 hover:text-brand-green-600 ${
                  scrolled ? 'text-gray-700' : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}

            {/* Language Switch Selector Toggle */}
            <div className={`flex items-center space-x-1 p-0.5 rounded-full border transition-colors ${
              scrolled 
                ? 'bg-brand-green-50 border-brand-green-100' 
                : 'bg-white/10 border-white/10'
            }`}>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded-full text-[10px] font-bold transition-all cursor-pointer ${
                  language === 'en'
                    ? scrolled ? 'bg-brand-green-900 text-white shadow-sm' : 'bg-brand-accent text-brand-green-950 shadow-sm'
                    : scrolled ? 'text-gray-500 hover:text-brand-green-800' : 'text-white/75 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('hi')}
                className={`px-2 py-1 rounded-full text-[10px] font-bold transition-all cursor-pointer ${
                  language === 'hi'
                    ? scrolled ? 'bg-brand-green-900 text-white shadow-sm' : 'bg-brand-accent text-brand-green-950 shadow-sm'
                    : scrolled ? 'text-gray-500 hover:text-brand-green-800' : 'text-white/75 hover:text-white'
                }`}
              >
                हिन्दी
              </button>
            </div>

            {/* Donate CTA Button with Pulse */}
            <motion.a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="inline-flex items-center space-x-2 bg-brand-accent hover:bg-brand-accent-hover text-brand-green-950 px-5 py-2.5 rounded-full font-display font-semibold text-sm shadow-md transition-all"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart className="h-4 w-4 fill-brand-green-950 animate-pulse" />
              <span>{t('nav.support')}</span>
            </motion.a>
          </div>

          {/* Mobile hamburger button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Quick Mobile Language Switcher */}
            <div className={`flex items-center space-x-1 p-0.5 rounded-full border transition-colors ${
              scrolled 
                ? 'bg-brand-green-50 border-brand-green-100' 
                : 'bg-white/10 border-white/10'
            }`}>
              <button
                onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
                className={`px-2.5 py-1 rounded-full text-[10px] font-bold transition-all cursor-pointer flex items-center space-x-1 ${
                  scrolled ? 'bg-brand-green-800 text-white' : 'bg-brand-accent text-brand-green-950'
                }`}
              >
                <Languages className="h-3 w-3" />
                <span>{language === 'en' ? 'HI' : 'EN'}</span>
              </button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none transition-colors ${
                scrolled ? 'text-brand-green-950 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-white border-t border-gray-100 shadow-xl overflow-y-auto max-h-[calc(100vh-80px)]"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-brand-green-700 hover:bg-brand-green-50 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              
              {/* Language selection info inside mobile menu */}
              <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100 mt-4">
                <span className="text-sm font-medium text-gray-500 flex items-center space-x-1.5">
                  <Languages className="h-4 w-4 text-brand-green-700" />
                  <span>Choose Language / भाषा चुनें:</span>
                </span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => { setLanguage('en'); setIsOpen(false); }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      language === 'en' ? 'bg-brand-green-800 text-white' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => { setLanguage('hi'); setIsOpen(false); }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      language === 'hi' ? 'bg-brand-green-800 text-white' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    हिन्दी
                  </button>
                </div>
              </div>

              <div className="pt-2 px-4">
                <a
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, '#contact')}
                  className="w-full flex items-center justify-center space-x-2 bg-brand-accent hover:bg-brand-accent-hover text-brand-green-950 py-3 rounded-xl font-display font-semibold shadow-md transition-all"
                >
                  <Heart className="h-4 w-4 fill-brand-green-950" />
                  <span>{t('nav.donate')}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
