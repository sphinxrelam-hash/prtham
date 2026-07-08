import React, { useState } from 'react';
import { Wind, Heart, Facebook, Instagram, Twitter, Linkedin, ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Logo from './Logo';

export default function Footer() {
  const { language, t } = useLanguage();
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => {
      setSubscribed(false);
    }, 5000);
  };

  return (
    <footer className="bg-brand-green-950 text-gray-300 font-sans border-t border-brand-green-900">
      
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* NGO Brand Statement */}
        <div className="space-y-4">
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, '#home')}
            className="flex items-center space-x-3 group transform transition-transform duration-200 hover:scale-[1.02]"
          >
            <Logo size="sm" variant="horizontal" scrolled={false} />
          </a>
          <p className="text-xs sm:text-sm text-gray-300/80 leading-relaxed pt-2">
            {t('footer.brandSub')}
          </p>
          <div className="pt-2">
            <span className="inline-block bg-brand-green-900 text-brand-accent text-xs font-bold px-3 py-1.5 rounded-lg border border-brand-green-800/50">
              {t('footer.regTag')}
            </span>
          </div>
        </div>

        {/* Quick Navigate Links */}
        <div className="space-y-4">
          <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">
            {t('footer.navHeader')}
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm">
            {[
              { label: t('nav.home'), href: '#home' },
              { label: t('nav.initiatives'), href: '#causes' },
              { label: t('nav.gallery'), href: '#gallery' },
              { label: t('nav.ourTeam'), href: '#team' },
              { label: t('nav.contact'), href: '#contact' },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="hover:text-brand-accent transition-colors duration-200 text-gray-300/85 cursor-pointer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal & Impact */}
        <div className="space-y-4">
          <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">
            {t('footer.careHeader')}
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300/85">
            {t('footer.domains').split('|').map((domain, index) => (
              <li key={index}>{domain}</li>
            ))}
          </ul>
        </div>

        {/* Newsletter Signup / Community Action */}
        <div className="space-y-4">
          <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">
            {t('footer.updateHeader')}
          </h4>
          <p className="text-xs sm:text-sm text-gray-300/80 leading-relaxed">
            {t('footer.updateSub')}
          </p>
          <div className="pt-2">
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('footer.placeholder')}
                  className="bg-brand-green-900 border border-brand-green-800 rounded-l-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-accent w-full"
                  aria-label="Newsletter email input"
                />
                <button
                  type="submit"
                  className="bg-brand-accent hover:bg-brand-accent-hover text-brand-green-950 font-display font-bold text-xs px-4 rounded-r-xl transition-colors cursor-pointer"
                >
                  {t('footer.join')}
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-brand-accent font-medium animate-pulse mt-1.5">
                  {language === 'hi'
                    ? 'प्रथम श्वास समाचार पत्र की सदस्यता लेने के लिए धन्यवाद!'
                    : 'Thank you for subscribing to the Pratham Shvaas newsletter!'}
                </p>
              )}
            </form>
          </div>
        </div>

      </div>

      {/* Middle Bar: Social & Action Icons */}
      <div className="border-t border-brand-green-900/60 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          {[
            { icon: <Facebook className="h-4 w-4" />, href: 'https://facebook.com', label: 'Facebook' },
            { icon: <Instagram className="h-4 w-4" />, href: 'https://instagram.com', label: 'Instagram' },
            { icon: <Twitter className="h-4 w-4" />, href: 'https://twitter.com', label: 'Twitter' },
            { icon: <Linkedin className="h-4 w-4" />, href: 'https://linkedin.com', label: 'LinkedIn' },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-brand-green-900 hover:bg-brand-accent rounded-full text-gray-300 hover:text-brand-green-950 transition-all shadow-inner cursor-pointer"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Back to Top Button */}
        <button
          onClick={handleScrollToTop}
          className="group inline-flex items-center space-x-2 bg-brand-green-900 hover:bg-brand-accent text-gray-300 hover:text-brand-green-950 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all shadow-md cursor-pointer"
        >
          <span>{t('footer.backTop')}</span>
          <ArrowUp className="h-3.5 w-3.5 transform group-hover:-translate-y-0.5 transition-transform" />
        </button>

      </div>

      {/* Bottom Copyright Notice Bar */}
      <div className="bg-brand-green-950/70 border-t border-brand-green-900/40 text-center py-6 text-xs text-gray-400/80 font-sans tracking-wide">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>{t('footer.copyright')}</p>
          <p className="font-medium text-brand-accent">
            {t('footer.motto')}
          </p>
        </div>
      </div>

    </footer>
  );
}
