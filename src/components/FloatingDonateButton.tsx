import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, X, Check, Shield, Gift } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function FloatingDonateButton() {
  const { language, t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  // Form and Donation States
  const [selectedAmount, setSelectedAmount] = useState<number | 'custom'>(1000);
  const [customAmount, setCustomAmount] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Monitor scroll height to show floating button only after scrolling past 300px
  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set Body overflow hidden when Modal is active
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const donationTiers = [
    { amount: 500, label: '₹500' },
    { amount: 1000, label: '₹1,000' },
    { amount: 2500, label: '₹2,500' },
    { amount: 5000, label: '₹5,000' },
  ];

  const handleDonateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const donationValue = selectedAmount === 'custom' ? Number(customAmount) : selectedAmount;
    
    if (!donationValue || donationValue <= 0 || !fullName || !email) {
      return;
    }

    setIsSubmitting(true);

    // 🚀 PAYMENT GATEWAY INTEGRATION GOES HERE
    // In the future, instead of a setTimeout, you will trigger the Razorpay window here:
    // const options = { key: "YOUR_RAZORPAY_KEY", amount: donationValue * 100, ... }
    // const rzp1 = new window.Razorpay(options);
    // rzp1.open();
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Auto close and reset after 4 seconds
      setTimeout(() => {
        setIsOpen(false);
        setIsSubmitted(false);
        setFullName('');
        setEmail('');
        setCustomAmount('');
        setSelectedAmount(1000);
      }, 4000);
    }, 1800);
  };

  return (
    <>
      {/* Floating Circular Action Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 30 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-40 bg-brand-accent hover:bg-white text-brand-green-950 h-14 w-14 rounded-full shadow-2xl flex items-center justify-center border-2 border-brand-green-950 cursor-pointer group"
            aria-label="Open donation options"
            title={t('nav.donate')}
          >
            <Heart className="h-6 w-6 fill-rose-600 stroke-rose-600 group-hover:scale-110 transition-transform duration-300" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Interactive Donation Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-brand-green-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col max-h-[90vh]"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              {/* Top Cover Banner */}
              <div className="bg-brand-green-950 text-white p-6 sm:p-8 relative">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>
                
                <div className="flex items-center space-x-2.5 text-brand-accent text-xs font-semibold uppercase tracking-widest mb-1">
                  <Gift className="h-4 w-4" />
                  <span>{t('footer.regTag')}</span>
                </div>
                
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white tracking-tight leading-snug">
                  {t('donate.title')}
                </h3>
                <p className="mt-2 font-sans text-brand-green-100/80 text-xs sm:text-sm leading-relaxed">
                  {t('donate.subtitle')}
                </p>
              </div>

              {/* Scrollable Content Form */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-gray-800">
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success-donate"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="text-center py-10 px-4 space-y-4"
                    >
                      <div className="inline-flex p-4 rounded-full bg-emerald-50 text-emerald-600 mb-2">
                        <Check className="h-10 w-10 stroke-[3]" />
                      </div>
                      <h4 className="font-display font-extrabold text-xl text-brand-green-950">
                        {t('donate.successTitle')}
                      </h4>
                      <p className="font-sans text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">
                        {t('donate.successText')}
                      </p>
                    </motion.div>
                  ) : (
                    <form key="form-donate" onSubmit={handleDonateSubmit} className="space-y-6">
                      
                      {/* Grid Selection Tiers */}
                      <div>
                        <span className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
                          {t('donate.select')}
                        </span>
                        <div className="grid grid-cols-2 gap-3">
                          {donationTiers.map((tier) => (
                            <button
                              key={tier.amount}
                              type="button"
                              onClick={() => setSelectedAmount(tier.amount)}
                              className={`py-3.5 px-4 rounded-2xl font-display font-extrabold text-sm border transition-all text-center cursor-pointer ${
                                selectedAmount === tier.amount
                                  ? 'bg-brand-green-950 text-brand-accent border-brand-green-950 shadow-md'
                                  : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100 hover:border-gray-300'
                              }`}
                            >
                              {tier.label}
                            </button>
                          ))}
                          <button
                            type="button"
                            onClick={() => setSelectedAmount('custom')}
                            className={`col-span-2 py-3.5 px-4 rounded-2xl font-display font-extrabold text-sm border transition-all text-center cursor-pointer ${
                              selectedAmount === 'custom'
                                ? 'bg-brand-green-950 text-brand-accent border-brand-green-950 shadow-md'
                                : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100 hover:border-gray-300'
                            }`}
                          >
                            {language === 'hi' ? 'कोई अन्य राशि (INR)' : 'Custom Donation Amount'}
                          </button>
                        </div>
                      </div>

                      {/* Custom Input */}
                      {selectedAmount === 'custom' && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="relative"
                        >
                          <input
                            type="number"
                            required
                            placeholder={language === 'hi' ? 'जैसे: 1500' : 'e.g. 1500'}
                            value={customAmount}
                            onChange={(e) => setCustomAmount(e.target.value)}
                            className="w-full bg-white border border-gray-200 focus:border-brand-green-700 rounded-xl px-4 py-3 outline-none text-sm transition-all shadow-sm"
                            min="100"
                          />
                          <span className="absolute right-4 top-3 text-sm text-gray-400 font-semibold">INR</span>
                        </motion.div>
                      )}

                      {/* Full Name & Email Input fields */}
                      <div className="space-y-4">
                        <span className="block text-xs font-bold uppercase tracking-wider text-gray-500">
                          {language === 'hi' ? 'दाता विवरण' : 'Donor Information'}
                        </span>
                        
                        <input
                          type="text"
                          required
                          placeholder={language === 'hi' ? 'आपका पूरा नाम *' : 'Your Full Name *'}
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full bg-white border border-gray-200 focus:border-brand-green-700 rounded-xl px-4 py-3 outline-none text-sm transition-all shadow-sm"
                        />

                        <input
                          type="email"
                          required
                          placeholder={language === 'hi' ? 'ईमेल पता *' : 'Email Address *'}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-white border border-gray-200 focus:border-brand-green-700 rounded-xl px-4 py-3 outline-none text-sm transition-all shadow-sm"
                        />
                      </div>

                      {/* Proceed Payment CTA button */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full inline-flex items-center justify-center space-x-2 bg-brand-accent hover:bg-brand-green-950 hover:text-white text-brand-green-950 px-6 py-4 rounded-xl font-display font-extrabold text-sm tracking-wider uppercase transition-all shadow-md cursor-pointer disabled:opacity-50"
                        >
                          <Shield className="h-4 w-4" />
                          <span>{isSubmitting ? (language === 'hi' ? 'प्रसंस्करण...' : 'Processing...') : t('donate.pay')}</span>
                        </button>
                      </div>

                    </form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}