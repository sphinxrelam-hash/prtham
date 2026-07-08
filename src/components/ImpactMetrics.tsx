import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Users, Trees, Landmark, HeartHandshake } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface CounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

function Counter({ target, suffix = '', duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      // Ease out quad
      const easedPercentage = percentage * (2 - percentage);
      const currentValue = Math.floor(startValue + easedPercentage * (target - startValue));

      setCount(currentValue);

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="font-display font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl text-white">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function ImpactMetrics() {
  const { t } = useLanguage();

  const stats = [
    {
      id: 'volunteers',
      icon: Users,
      target: 580,
      suffix: '+',
      label: t('impact.counter1'),
    },
    {
      id: 'trees',
      icon: Trees,
      target: 1250,
      suffix: '+',
      label: t('impact.counter2'),
    },
    {
      id: 'acres',
      icon: Landmark,
      target: 185,
      suffix: '+',
      label: t('impact.counter3'),
    },
    {
      id: 'screenings',
      icon: HeartHandshake,
      target: 3500,
      suffix: '+',
      label: t('impact.counter4'),
    },
  ];

  return (
    <section id="impact" className="py-24 bg-brand-green-950 text-white relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green-900/20 rounded-full blur-3xl pointer-events-none" />

      {/* Earthy Grid Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none select-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-brand-accent bg-white/5 px-4 py-1.5 rounded-full"
          >
            {t('nav.impact')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 font-display font-bold text-3xl sm:text-4xl text-white tracking-tight"
          >
            {t('impact.heading')}
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
            className="mt-5 font-sans text-brand-green-100/80 leading-relaxed text-base sm:text-lg"
          >
            {t('impact.subheading')}
          </motion.p>
        </div>

        {/* Counter Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => {
            const IconComp = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center p-6 bg-white/5 rounded-3xl border border-white/10 hover:border-brand-accent/20 hover:bg-white/10 transition-all duration-300 group"
                id={`stat-card-${stat.id}`}
              >
                {/* Floating Icon circle */}
                <div className="p-4 rounded-2xl bg-white/10 text-brand-accent mb-6 transform group-hover:scale-110 group-hover:bg-brand-accent group-hover:text-brand-green-950 transition-all duration-300">
                  <IconComp className="h-6 w-6 stroke-[2]" />
                </div>

                {/* Counter */}
                <Counter target={stat.target} suffix={stat.suffix} />

                {/* Label */}
                <span className="mt-3 font-display font-semibold text-xs sm:text-sm text-brand-green-200 group-hover:text-white transition-colors duration-200">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
