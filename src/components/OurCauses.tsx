import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Activity, Sparkles, Users, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function OurCauses() {
  const { t } = useLanguage();

  const causes = [
    {
      id: 'education',
      icon: BookOpen,
      title: t('causes.edu.title'),
      desc: t('causes.edu.desc'),
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50 text-blue-700 border-blue-100',
    },
    {
      id: 'health',
      icon: Activity,
      title: t('causes.health.title'),
      desc: t('causes.health.desc'),
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    },
    {
      id: 'women',
      icon: Sparkles,
      title: t('causes.women.title'),
      desc: t('causes.women.desc'),
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50 text-amber-700 border-amber-100',
    },
    {
      id: 'youth',
      icon: Users,
      title: t('causes.youth.title'),
      desc: t('causes.youth.desc'),
      color: 'from-violet-500 to-fuchsia-600',
      bgColor: 'bg-violet-50 text-violet-700 border-violet-100',
    },
  ];

  const handleCtaClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="causes" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-green-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-brand-accent bg-brand-green-950/5 px-4 py-1.5 rounded-full"
          >
            {t('nav.initiatives')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 font-display font-bold text-3xl sm:text-4xl text-brand-green-950 tracking-tight"
          >
            {t('causes.heading')}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="h-1 w-20 bg-brand-accent mx-auto mt-4 rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-5 font-sans text-gray-600 leading-relaxed text-base sm:text-lg"
          >
            {t('causes.subheading')}
          </motion.p>
        </div>

        {/* Causes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {causes.map((cause, index) => {
            const IconComponent = cause.icon;
            return (
              <motion.div
                key={cause.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: index * 0.1, duration: 0.6, type: 'spring', stiffness: 60 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between h-full"
                id={`cause-card-${cause.id}`}
              >
                {/* Floating decorative gradient ball */}
                <div className={`absolute -right-16 -top-16 w-32 h-32 rounded-full bg-gradient-to-br ${cause.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                <div>
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl border ${cause.bgColor} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-6 w-6 stroke-[2.5]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-lg text-brand-green-950 mb-3 group-hover:text-brand-green-700 transition-colors duration-200">
                    {cause.title}
                  </h3>

                  {/* Desc */}
                  <p className="font-sans text-gray-600 text-sm leading-relaxed mb-6">
                    {cause.desc}
                  </p>
                </div>

                {/* Learn More indicator */}
                <div className="pt-4 border-t border-gray-50 flex items-center justify-end text-xs font-semibold text-brand-green-800 group-hover:text-brand-green-950 transition-colors">
                  <button
                    onClick={handleCtaClick}
                    className="inline-flex items-center space-x-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>{t('hero.ctaJoin')}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
