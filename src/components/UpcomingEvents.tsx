import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { upcomingEvents } from '../data';
import { Calendar, MapPin, Clock, Check, Sparkles, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function UpcomingEvents() {
  const { language, t } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    selectedEventId: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.selectedEventId) {
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        selectedEventId: '',
      });

      // Clear success indicator after 6 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 6000);
    }, 1500);
  };

  const handleQuickSelectEvent = (eventTitle: string, eventId: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedEventId: eventId,
    }));
    const formElement = document.getElementById('volunteer-registration-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section id="upcoming-events" className="py-24 bg-white text-gray-800 relative overflow-hidden">
      {/* Decorative leaf shapes */}
      <div className="absolute top-0 right-0 -mr-24 opacity-[0.02] pointer-events-none select-none">
        <svg width="400" height="400" viewBox="0 0 100 100" fill="currentColor" className="text-brand-green-950">
          <path d="M50 10 C30 30, 20 60, 50 90 C80 60, 70 30, 50 10 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-brand-accent bg-brand-green-950/5 px-4 py-1.5 rounded-full inline-flex items-center space-x-2"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>{t('nav.causes')}</span>
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-4 font-display font-bold text-3xl sm:text-4xl text-brand-green-950 tracking-tight"
          >
            {t('upcoming.heading')}
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
            {t('upcoming.subheading')}
          </motion.p>
        </div>

        {/* Responsive Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Timeline list of activities (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-brand-green-100 space-y-12">
              {upcomingEvents.map((event, index) => {
                const title = language === 'hi' ? event.titleHi : event.title;
                const description = language === 'hi' ? event.descriptionHi : event.description;
                const date = language === 'hi' ? event.dateHi : event.date;
                const location = language === 'hi' ? event.locationHi : event.location;
                const time = language === 'hi' ? event.timeHi : event.time;

                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="relative"
                  >
                    {/* Timeline Node Icon/Bullet */}
                    <span className="absolute -left-[35px] sm:-left-[43px] top-1.5 flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-brand-green-950 border-4 border-white text-brand-accent shadow-sm">
                      <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-brand-accent" />
                    </span>

                    <div className="bg-brand-green-50/40 hover:bg-brand-green-50/80 border border-brand-green-100 rounded-2xl p-6 transition-all duration-300 shadow-sm hover:shadow-md">
                      {/* Date details */}
                      <div className="inline-flex items-center space-x-2 bg-brand-green-800/10 text-brand-green-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{date}</span>
                      </div>

                      <h3 className="font-display font-bold text-lg sm:text-xl text-brand-green-950 leading-snug">
                        {title}
                      </h3>

                      <p className="mt-2 font-sans text-gray-600 text-sm leading-relaxed">
                        {description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 mt-4 border-t border-brand-green-100/50 text-xs sm:text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-brand-green-700 shrink-0" />
                          <span className="font-medium truncate">{location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-brand-green-700 shrink-0" />
                          <span className="font-medium">{time}</span>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 flex justify-end">
                        <button
                          onClick={() => handleQuickSelectEvent(title, event.id)}
                          className="text-xs font-semibold text-brand-green-800 hover:text-brand-green-950 underline underline-offset-4 cursor-pointer"
                        >
                          {language === 'hi' ? 'चुनें और पंजीकरण करें' : 'Select & Register'}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Inline Volunteer Registration Form (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-brand-green-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-brand-green-900 relative overflow-hidden"
            id="volunteer-registration-form"
          >
            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full blur-2xl pointer-events-none" />
            
            <h3 className="font-display font-bold text-2xl text-brand-accent mb-2">
              {t('register.title')}
            </h3>
            <p className="font-sans text-brand-green-100/80 text-sm leading-relaxed mb-6">
              {t('register.desc')}
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-5">
              
              {/* Event Picker Select Field */}
              <div>
                <label htmlFor="reg-event" className="block text-xs font-semibold uppercase tracking-wider text-brand-green-200 mb-2">
                  {t('register.eventField')}
                </label>
                <select
                  id="reg-event"
                  name="selectedEventId"
                  required
                  value={formData.selectedEventId}
                  onChange={handleInputChange}
                  className="w-full bg-brand-green-900 border border-brand-green-800 focus:border-brand-accent focus:outline-none rounded-xl px-4 py-3 text-sm text-white focus:ring-1 focus:ring-brand-accent transition-all cursor-pointer"
                >
                  <option value="" disabled className="bg-brand-green-950 text-brand-green-300">
                    {t('register.selectPlaceholder')}
                  </option>
                  {upcomingEvents.map((event) => (
                    <option
                      key={event.id}
                      value={event.id}
                      className="bg-brand-green-950 text-white"
                    >
                      {language === 'hi' ? event.titleHi : event.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Full Name */}
              <div>
                <label htmlFor="reg-fullname" className="block text-xs font-semibold uppercase tracking-wider text-brand-green-200 mb-2">
                  {t('register.nameField')}
                </label>
                <input
                  type="text"
                  id="reg-fullname"
                  name="fullName"
                  required
                  placeholder={language === 'hi' ? 'जैसे: राहुल कुमार' : 'e.g. John Doe'}
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full bg-brand-green-900 border border-brand-green-800 focus:border-brand-accent focus:outline-none rounded-xl px-4 py-3 text-sm placeholder-brand-green-400 text-white focus:ring-1 focus:ring-brand-accent transition-all"
                />
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="reg-email" className="block text-xs font-semibold uppercase tracking-wider text-brand-green-200 mb-2">
                  {t('register.emailField')}
                </label>
                <input
                  type="email"
                  id="reg-email"
                  name="email"
                  required
                  placeholder="e.g. name@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-brand-green-900 border border-brand-green-800 focus:border-brand-accent focus:outline-none rounded-xl px-4 py-3 text-sm placeholder-brand-green-400 text-white focus:ring-1 focus:ring-brand-accent transition-all"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="reg-phone" className="block text-xs font-semibold uppercase tracking-wider text-brand-green-200 mb-2">
                  {t('register.phoneField')}
                </label>
                <input
                  type="tel"
                  id="reg-phone"
                  name="phone"
                  required
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-brand-green-900 border border-brand-green-800 focus:border-brand-accent focus:outline-none rounded-xl px-4 py-3 text-sm placeholder-brand-green-400 text-white focus:ring-1 focus:ring-brand-accent transition-all"
                />
              </div>

              {/* Submit Button & Inline Success Messages */}
              <div className="pt-2">
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="bg-emerald-800 border border-emerald-600 rounded-xl p-4 flex items-start space-x-3 text-emerald-100"
                    >
                      <Check className="h-5 w-5 text-brand-accent shrink-0 mt-0.5 stroke-[3]" />
                      <p className="text-xs font-medium font-sans">
                        {t('register.successText')}
                      </p>
                    </motion.div>
                  ) : (
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="group w-full inline-flex items-center justify-center space-x-2 bg-brand-accent text-brand-green-950 hover:bg-white px-6 py-3.5 rounded-xl font-display font-bold text-sm transition-all shadow-md cursor-pointer disabled:opacity-50"
                    >
                      <Send className="h-4 w-4 shrink-0" />
                      <span>{isSubmitting ? t('register.btnSending') : t('register.btnSend')}</span>
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
