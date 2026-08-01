import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ContactFormData } from '../types';

export default function Contact() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.message) {
      return; 
    }

    const emailSubject = encodeURIComponent(formData.subject || "New Inquiry from Pratham Shvaas Website");
    const emailBody = encodeURIComponent(
      `Name: ${formData.fullName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    // This opens the user's email client directly
    window.location.href = `mailto:psfdehradun@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    
    // Show a brief success message on the form and reset fields
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-white text-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-3xl sm:text-4xl text-brand-green-950 tracking-tight"
          >
            {t('contact.heading')}
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
            className="mt-4 font-sans text-gray-600 leading-relaxed text-base sm:text-lg"
          >
            {t('contact.subheading')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 bg-gray-50 border border-gray-100 p-8 sm:p-10 rounded-3xl shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="relative">
                <input
                  type="text"
                  name="fullName"
                  id="contact-fullname"
                  required
                  placeholder=" "
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="peer w-full bg-white border border-gray-200 focus:border-brand-green-700 rounded-xl px-4 pt-6 pb-2 outline-none text-sm transition-all shadow-sm"
                />
                <label
                  htmlFor="contact-fullname"
                  className="absolute left-4 top-4 text-gray-400 text-xs sm:text-sm font-medium transition-all pointer-events-none origin-left transform -translate-y-0.5 scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3.5 peer-focus:scale-75 peer-focus:text-brand-green-700 peer-[:not(:placeholder-shown)]:-translate-y-3.5 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:text-brand-green-700"
                >
                  {t('contact.nameField')}
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  id="contact-email"
                  required
                  placeholder=" "
                  value={formData.email}
                  onChange={handleInputChange}
                  className="peer w-full bg-white border border-gray-200 focus:border-brand-green-700 rounded-xl px-4 pt-6 pb-2 outline-none text-sm transition-all shadow-sm"
                />
                <label
                  htmlFor="contact-email"
                  className="absolute left-4 top-4 text-gray-400 text-xs sm:text-sm font-medium transition-all pointer-events-none origin-left transform -translate-y-0.5 scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3.5 peer-focus:scale-75 peer-focus:text-brand-green-700 peer-[:not(:placeholder-shown)]:-translate-y-3.5 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:text-brand-green-700"
                >
                  {t('contact.emailField')}
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  id="contact-subject"
                  placeholder=" "
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="peer w-full bg-white border border-gray-200 focus:border-brand-green-700 rounded-xl px-4 pt-6 pb-2 outline-none text-sm transition-all shadow-sm"
                />
                <label
                  htmlFor="contact-subject"
                  className="absolute left-4 top-4 text-gray-400 text-xs sm:text-sm font-medium transition-all pointer-events-none origin-left transform -translate-y-0.5 scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3.5 peer-focus:scale-75 peer-focus:text-brand-green-700 peer-[:not(:placeholder-shown)]:-translate-y-3.5 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:text-brand-green-700"
                >
                  {t('subjectField')}
                </label>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  id="contact-message"
                  required
                  rows={4}
                  placeholder=" "
                  value={formData.message}
                  onChange={handleInputChange}
                  className="peer w-full bg-white border border-gray-200 focus:border-brand-green-700 rounded-xl px-4 pt-6 pb-2 outline-none text-sm transition-all shadow-sm resize-none"
                />
                <label
                  htmlFor="contact-message"
                  className="absolute left-4 top-4 text-gray-400 text-xs sm:text-sm font-medium transition-all pointer-events-none origin-left transform -translate-y-0.5 scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3.5 peer-focus:scale-75 peer-focus:text-brand-green-700 peer-[:not(:placeholder-shown)]:-translate-y-3.5 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:text-brand-green-700"
                >
                  {t('contact.messageField')}
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className={`w-full relative flex items-center justify-center space-x-2 font-display font-bold py-4 px-6 rounded-xl shadow-md transition-all cursor-pointer ${
                    isSubmitted
                      ? 'bg-emerald-600 text-white shadow-emerald-200'
                      : 'bg-brand-green-800 hover:bg-brand-green-950 text-white'
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <motion.div
                        key="submitted"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center space-x-2"
                      >
                        <CheckCircle className="h-5 w-5 text-white animate-bounce" />
                        <span>Opening Email App...</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="idle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center space-x-2"
                      >
                        <Send className="h-4 w-4" />
                        <span>{t('contact.btnSend')}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-5 space-y-8 bg-brand-green-950 text-white p-8 sm:p-10 rounded-3xl shadow-lg relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-brand-green-900/40 -z-10" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-accent/10 rounded-full blur-2xl" />

            <div>
              <h3 className="font-display font-bold text-2xl text-brand-accent">
                {t('contact.hq')}
              </h3>
              <p className="mt-2 text-sm text-brand-green-100 font-sans leading-relaxed">
                {t('contact.hqDesc')}
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/10 rounded-xl text-brand-accent">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
                    {t('contact.locationLabel')}
                  </h4>
                  <p className="text-sm text-gray-300 font-sans mt-1 leading-relaxed">
                    9/17, Mohit Vihar, Shakti Enclave, Kaonli, Sanjai Colony, Dehradun- 248001
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/10 rounded-xl text-brand-accent">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
                    {t('contact.phoneLabel')}
                  </h4>
                  <p className="text-sm text-gray-300 font-sans mt-1">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/10 rounded-xl text-brand-accent">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
                    {t('contact.emailLabel')}
                  </h4>
                  <p className="text-sm text-gray-300 font-sans mt-1">
                    psfdehradun@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center space-x-3 text-brand-green-100 text-xs font-semibold">
              <Clock className="h-4 w-4 text-brand-accent" />
              <span>{t('contact.response')}</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}