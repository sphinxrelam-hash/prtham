import React, { useState } from 'react';
import { motion } from 'motion/react';
import { yearlyEvents } from '../data';
import { Calendar, Award, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function YearlyEvents() {
  const { language, t } = useLanguage();
  const [selectedYear, setSelectedYear] = useState<string>('All');

  const years = ['All', '2024', '2025', '2026'];

  const filteredEvents = selectedYear === 'All'
    ? yearlyEvents
    : yearlyEvents.filter((ev) => ev.year === selectedYear);

  return (
    <section id="yearly-events" className="py-24 bg-white text-gray-800 relative">
      {/* Soft visual background blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-green-50/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-brand-accent bg-brand-green-950/5 px-4 py-1.5 rounded-full inline-flex items-center space-x-2"
          >
            <Sparkles className="h-3.5 w-3.5 text-brand-accent" />
            <span>{t('about.yearlyTitle')}</span>
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 font-display font-bold text-3xl sm:text-4xl text-brand-green-950 tracking-tight"
          >
            {language === 'hi' ? 'वर्ष-दर-वर्ष हमारे ऐतिहासिक मील के पत्थर' : 'Our Year-to-Year Milestones of Hope & Action'}
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
            className="mt-4 font-sans text-gray-600 leading-relaxed text-sm sm:text-base"
          >
            {t('about.yearlySub')}
          </motion.p>
        </div>

        {/* Year Filter Controls */}
        <div className="flex justify-center space-x-3 mb-16">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-5 py-2 rounded-full font-display font-bold text-xs sm:text-sm transition-all shadow-sm cursor-pointer ${
                selectedYear === year
                  ? 'bg-brand-green-950 text-white shadow-md'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
              }`}
            >
              {year === 'All' ? (language === 'hi' ? 'सभी वर्ष' : 'All Years') : year}
            </button>
          ))}
        </div>

        {/* Chronological Alternate Timeline */}
        <div className="relative border-l-2 border-brand-green-100 md:border-l-0 md:before:absolute md:before:left-1/2 md:before:top-0 md:before:bottom-0 md:before:w-[2px] md:before:bg-brand-green-100/80 space-y-16">
          {filteredEvents.map((event, index) => {
            const isEven = index % 2 === 0;
            const title = language === 'hi' ? event.titleHi : event.title;
            const description = language === 'hi' ? event.descriptionHi : event.description;
            const impact = language === 'hi' ? event.impactHi : event.impact;

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, type: 'spring', stiffness: 70 }}
                className={`relative flex flex-col md:flex-row items-stretch w-full ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Center Badge (Only on desktop md: and up) */}
                <div className="absolute left-[-11px] md:left-1/2 md:transform md:-translate-x-1/2 top-4 z-10">
                  <div className="h-5 w-5 rounded-full border-4 border-white bg-brand-accent shadow-md ring-4 ring-brand-green-50 animate-pulse" />
                </div>

                {/* Left/Right Blank spacing block on desktop */}
                <div className="hidden md:block md:w-1/2" />

                {/* Content Card Side */}
                <div className="w-full md:w-1/2 pl-6 md:pl-0 md:px-10">
                  <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col md:flex-col group">
                    
                    {/* Picture Block */}
                    <div className="relative h-60 w-full overflow-hidden">
                      <img
                        src={event.imageUrl}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-green-950/80 to-transparent" />
                      
                      {/* Floating Year Tag */}
                      <span className="absolute top-4 right-4 bg-brand-accent text-brand-green-950 font-display font-extrabold text-sm px-4 py-1.5 rounded-full shadow-md">
                        {event.year}
                      </span>
                    </div>

                    {/* Content Block */}
                    <div className="p-6 sm:p-8 space-y-4">
                      <div className="flex items-center space-x-2 text-brand-green-700 text-xs font-semibold uppercase tracking-wider font-mono">
                        <Calendar className="h-4 w-4" />
                        <span>{language === 'hi' ? `वर्ष ${event.year}` : `FY ${event.year}`}</span>
                      </div>

                      <h3 className="font-display font-bold text-lg sm:text-xl text-brand-green-950 leading-snug">
                        {title}
                      </h3>

                      <p className="font-sans text-gray-600 text-sm leading-relaxed">
                        {description}
                      </p>

                      {/* Impact Footer Block */}
                      {impact && (
                        <div className="mt-4 pt-4 border-t border-gray-50 flex items-center space-x-2.5">
                          <div className="bg-emerald-50 text-emerald-800 p-1.5 rounded-lg flex-shrink-0">
                            <Award className="h-4 w-4" />
                          </div>
                          <span className="text-xs sm:text-sm font-semibold text-emerald-900 leading-tight">
                            {impact}
                          </span>
                        </div>
                      )}
                    </div>

                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
