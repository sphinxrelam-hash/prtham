import React from 'react';
import { motion } from 'motion/react';
import { Eye, Target, CheckCircle2, ShieldAlert, Heart, Compass } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function AboutAndVision() {
  const { language, t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background soft ambient vectors */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-green-50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Badge & Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-brand-accent bg-brand-green-950/5 px-4 py-1.5 rounded-full inline-flex items-center space-x-2"
          >
            <Compass className="h-4 w-4 text-brand-accent animate-spin" style={{ animationDuration: '6s' }} />
            <span>{t('about.heading')}</span>
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 font-display font-bold text-3xl sm:text-4xl text-brand-green-950 tracking-tight"
          >
            {t('about.title')}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="h-1 w-20 bg-brand-accent mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Full Introduction details */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col justify-center space-y-6"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-video mb-4 group">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80"
                alt="Pratham Shvaas Foundation field action"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green-950/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <span className="font-display font-bold text-xs uppercase bg-brand-accent text-brand-green-950 px-3 py-1 rounded-full">
                  Uttarakhand Activism
                </span>
                <span className="font-mono text-xs text-brand-green-100 font-semibold uppercase tracking-wider">
                  Established 2024
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-display font-bold text-2xl text-brand-green-950 leading-snug">
                {language === 'hi' ? 'जमीनी स्तर पर बदलाव लाने की हमारी प्रतिबद्धता' : 'Our Grassroots Pledge of Dedicated Community Service'}
              </h3>
              <p className="font-sans text-gray-600 text-base leading-relaxed">
                {t('about.desc')}
              </p>
              
              {/* Highlight Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  { en: '100% Transparent Governance', hi: '100% पारदर्शी प्रशासन' },
              
                  { en: 'Compassionate Local Volunteers', hi: 'स्थानीय समर्पित स्वयंसेवक' },
                  { en: 'Direct Grassroots Impact', hi: 'सीधा जमीनी स्तर पर प्रभाव' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5 text-sm text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-brand-green-700 flex-shrink-0" />
                    <span>{language === 'hi' ? item.hi : item.en}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Goal & Vision stacking boxes */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col justify-between gap-8"
          >
            {/* Vision Block */}
            <div className="bg-brand-green-50/50 hover:bg-brand-green-50 border border-brand-green-100/50 p-8 rounded-3xl transition-all duration-300 flex flex-col sm:flex-row gap-5 items-start">
              <div className="bg-brand-green-800 text-white p-4 rounded-2xl flex-shrink-0 shadow-md">
                <Eye className="h-6 w-6 text-brand-accent" />
              </div>
              <div className="space-y-2">
                <h3 className="font-display font-extrabold text-xl text-brand-green-950 tracking-tight">
                  {t('about.visionTitle')}
                </h3>
                <p className="font-sans text-gray-600 text-sm leading-relaxed">
                  {t('about.visionDesc')}
                </p>
              </div>
            </div>

            {/* Goal & Mission Block */}
            <div className="bg-amber-50/40 hover:bg-amber-50/70 border border-amber-100/40 p-8 rounded-3xl transition-all duration-300 flex flex-col sm:flex-row gap-5 items-start">
              <div className="bg-brand-accent text-brand-green-950 p-4 rounded-2xl flex-shrink-0 shadow-md">
                <Target className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="font-display font-extrabold text-xl text-brand-green-950 tracking-tight">
                  {t('about.goalTitle')}
                </h3>
                <p className="font-sans text-gray-600 text-sm leading-relaxed">
                  {t('about.goalDesc')}
                </p>
                
                {/* Visual bullet points for Goals */}
                <div className="grid grid-cols-1 gap-2 pt-3">
                  {[
                    { title: 'Quality Education', desc: 'Sponsoring scholastic kits, tuition centers, and digital training classes.' },
                    { title: 'Health camps', desc: 'Conducting pediatric lung and wellness check-ups across communities.' },
                    { title: 'Self-reliance', desc: 'Equipping women with vocational skills like sewing and financial literacy.' }
                  ].map((bullet, bIdx) => (
                    <div key={bIdx} className="text-xs text-gray-600 flex items-start space-x-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-accent mt-1.5 flex-shrink-0" />
                      <span>
                        <strong className="text-brand-green-950">
                          {language === 'hi'
                            ? bullet.title === 'Quality Education' ? 'गुणवत्तापूर्ण शिक्षा: ' : bullet.title === 'Health camps' ? 'स्वास्थ्य शिविर: ' : 'आत्मनिर्भरता: '
                            : `${bullet.title}: `}
                        </strong>
                        {language === 'hi'
                          ? bullet.title === 'Quality Education' ? 'शैक्षिक किटों, ट्यूशन सेंटरों और डिजिटल कौशल कक्षाओं का आयोजन।' : bullet.title === 'Health camps' ? 'बाल चिकित्सा फेफड़ों की जांच और सुदूर क्षेत्रों में स्वास्थ्य शिविर।' : 'महिलाओं को सिलाई कला और वित्तीय कौशल से लैस करना।'
                          : bullet.desc}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
