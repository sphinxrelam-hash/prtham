import React from 'react';
import { motion } from 'motion/react';
import { teamMembers, generalMembers } from '../data';
import { Twitter, Linkedin, Mail, Heart, User, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Team() {
  const { language, t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section id="team" className="py-24 bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Main Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-3xl sm:text-4xl text-brand-green-950 tracking-tight"
          >
            {t('team.heading')}
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
            {t('team.subheading')}
          </motion.p>
        </div>

        {/* 1. Board of Directors Subheading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent bg-brand-green-950/5 px-4 py-1.5 rounded-full inline-flex items-center space-x-2">
            <User className="h-3.5 w-3.5 text-brand-accent" />
            <span>{t('about.boardTitle')}</span>
          </span>
          <p className="mt-2 text-xs sm:text-sm text-gray-500 font-sans">
            {t('about.boardSub')}
          </p>
        </div>

        {/* Staggered Board Members Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member) => {
            const name = language === 'hi' ? member.nameHi : member.name;
            const role = language === 'hi' ? member.roleHi : member.role;
            const bio = language === 'hi' ? member.bioHi : member.bio;

            return (
              <motion.div
                key={member.id}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="group bg-white border border-gray-100 rounded-3xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
              >
                {/* Decorative Corner Shape */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-green-50 rounded-bl-full -z-10 transition-colors group-hover:bg-brand-green-100/50" />

                <div>
                  {/* Circular profile picture container */}
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <div className="absolute inset-0 rounded-full bg-brand-green-100 scale-105 group-hover:scale-110 group-hover:bg-brand-accent transition-all duration-300" />
                    <div className="relative rounded-full w-full h-full overflow-hidden border-4 border-white shadow-inner">
                      <img
                        src={member.imageUrl}
                        alt={name}
                        className="w-full h-full object-cover object-center grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>

                  {/* Name & Role */}
                  <h3 className="font-display font-bold text-lg text-brand-green-950 group-hover:text-brand-green-700 transition-colors duration-200">
                    {name}
                  </h3>
                  <p className="font-display font-semibold text-[11px] uppercase tracking-wider text-brand-accent mt-1.5 mb-4 leading-relaxed">
                    {role}
                  </p>

                  {/* Bio */}
                  <p className="font-sans text-gray-600 text-xs sm:text-sm leading-relaxed px-1 line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                    {bio}
                  </p>
                </div>

                {/* Social links (appear on card hover) */}
                <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-center space-x-4 opacity-0 transform translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {member.socials.twitter && (
                    <a
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-gray-50 hover:bg-brand-green-50 text-gray-500 hover:text-brand-green-700 transition-colors cursor-pointer"
                      aria-label="Twitter link"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  )}
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-gray-50 hover:bg-brand-green-50 text-gray-500 hover:text-brand-green-700 transition-colors cursor-pointer"
                      aria-label="LinkedIn link"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  {member.socials.email && (
                    <a
                      href={`mailto:${member.socials.email}`}
                      className="p-2 rounded-full bg-gray-50 hover:bg-brand-green-50 text-gray-500 hover:text-brand-green-700 transition-colors cursor-pointer"
                      aria-label="Email link"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* 2. General Members & Core Staff Subheading */}
        <div className="text-center max-w-2xl mx-auto mt-24 mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-green-700 bg-brand-green-950/5 px-4 py-1.5 rounded-full inline-flex items-center space-x-2">
            <Users className="h-3.5 w-3.5 text-brand-green-700" />
            <span>{t('about.generalTitle')}</span>
          </span>
          <p className="mt-2 text-xs sm:text-sm text-gray-500 font-sans">
            {t('about.generalSub')}
          </p>
        </div>

        {/* General Members Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {generalMembers.map((member) => {
            const name = language === 'hi' ? member.nameHi : member.name;
            const role = language === 'hi' ? member.roleHi : member.role;

            return (
              <motion.div
                key={member.id}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className="bg-white border border-gray-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="flex items-center space-x-3.5">
                  <div className="h-10 w-10 rounded-full bg-brand-green-50 flex items-center justify-center text-brand-green-800 font-display font-extrabold text-xs">
                    {name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm sm:text-base text-brand-green-950">
                      {name}
                    </h4>
                    <p className="font-sans text-gray-500 text-xs mt-0.5 leading-snug">
                      {role}
                    </p>
                  </div>
                </div>
                {member.joinedYear && (
                  <div className="mt-4 pt-2.5 border-t border-gray-50 flex justify-between items-center text-[10px] text-gray-400 font-mono">
                    <span>{language === 'hi' ? 'सदस्यता वर्ष' : 'Member Since'}</span>
                    <span className="font-semibold text-brand-green-700">{member.joinedYear}</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer Footnote */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-brand-green-800 text-xs sm:text-sm font-medium">
            <Heart className="h-4 w-4 text-brand-accent fill-brand-accent" />
            <span>{t('team.footnote')}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
