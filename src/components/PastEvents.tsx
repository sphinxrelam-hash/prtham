import React from 'react';
import { motion } from 'motion/react';
import { pastEvents } from '../data';
import { Calendar, Award, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function PastEvents() {
  const { language, t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <section id="past-events" className="py-24 bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-3xl sm:text-4xl text-brand-green-950 tracking-tight"
          >
            {t('past.heading')}
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
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-4 font-sans text-gray-600 leading-relaxed text-base sm:text-lg"
          >
            {t('past.subheading')}
          </motion.p>
        </div>

        {/* Media Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {pastEvents.map((event) => {
            const title = language === 'hi' ? event.titleHi : event.title;
            const description = language === 'hi' ? event.descriptionHi : event.description;
            const date = language === 'hi' ? event.dateHi : event.date;
            const category = language === 'hi' ? event.categoryHi : event.category;
            const impact = language === 'hi' ? event.impactHi : event.impact;

            return (
              <motion.div
                key={event.id}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="group relative h-96 rounded-2xl overflow-hidden shadow-md bg-white border border-gray-100 flex flex-col justify-end"
              >
                {/* Event Image */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={event.imageUrl}
                    alt={title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Visual Vignette gradient overlay (always visible but darker on hover) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-green-950/90 via-brand-green-950/40 to-transparent group-hover:from-brand-green-950/95 group-hover:via-brand-green-950/70 transition-all duration-300" />
                </div>

                {/* Tag Category (Floating top-left) */}
                <div className="absolute top-4 left-4 z-10 bg-brand-green-900/80 backdrop-blur-md text-brand-green-50 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-white/10">
                  {category}
                </div>

                {/* Event Card Information (Dynamic Slide/Fade Content) */}
                <div className="relative z-10 p-6 flex flex-col h-full justify-end">
                  {/* Always visible header summary */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-brand-accent text-xs font-semibold">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{date}</span>
                    </div>
                    <h3 className="font-display font-bold text-base sm:text-lg text-white leading-snug group-hover:text-brand-accent transition-colors">
                      {title}
                    </h3>
                  </div>

                  {/* Visible only on hover - smooth height & opacity entry */}
                  <div className="h-0 opacity-0 overflow-hidden group-hover:h-auto group-hover:opacity-100 group-hover:mt-3 transition-all duration-300">
                    <p className="text-gray-200 text-xs leading-relaxed font-sans font-light">
                      {description}
                    </p>
                    
                    {impact && (
                      <div className="mt-4 pt-3 border-t border-white/10 flex items-center space-x-2 text-brand-accent text-xs font-bold uppercase tracking-wider">
                        <Award className="h-4 w-4" />
                        <span>{impact}</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Dynamic Highlight Counter Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-brand-green-950 to-brand-green-900 p-8 rounded-3xl text-white shadow-xl flex flex-col md:flex-row items-center justify-between border border-brand-green-800/40"
        >
          <div className="space-y-2 text-center md:text-left mb-6 md:mb-0">
            <h4 className="font-display font-bold text-xl sm:text-2xl text-brand-accent">
              {t('past.ctaBoxTitle')}
            </h4>
            <p className="font-sans text-gray-200 text-sm max-w-2xl leading-relaxed">
              {t('past.ctaBoxSub')}
            </p>
          </div>
          <a
            href="#contact"
            className="flex items-center space-x-2 bg-brand-accent hover:bg-brand-accent-hover text-brand-green-950 font-display font-bold px-6 py-3 rounded-xl transition-all shadow-md"
          >
            <span>{t('past.ctaBoxBtn')}</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
