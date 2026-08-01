import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Plus, Calendar, Maximize2 } from 'lucide-react';
import { galleryData, GalleryItem, captionTranslations } from '../data/galleryData';
import { useLanguage } from '../context/LanguageContext';

const shuffledRibbonPhotos = [...galleryData].sort(() => 0.5 - Math.random());

const isValidDate = (dateStr?: string) => {
  if (!dateStr) return false;
  const lower = dateStr.toLowerCase().trim();
  return !['community', 'health camp', 'education', 'awareness', 'environment'].includes(lower);
};

// --- MARQUEE RIBBON ---
const MarqueeRow = ({ items, onImageClick }: { items: GalleryItem[], onImageClick: (item: GalleryItem) => void }) => {
  const scrollDuration = items.length * 4.5;

  return (
    <div className="flex w-max overflow-hidden py-8 group/row cursor-pointer">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: scrollDuration, repeat: Infinity, ease: 'linear' }}
        style={{ pointerEvents: 'auto' }}
        className="flex gap-6 px-3 hover:[animation-play-state:paused]"
      >
        {[...items, ...items].map((item, i) => (
          <div 
            key={`ribbon-${item.id}-${i}`} 
            onClick={() => onImageClick(item)}
            className="w-80 sm:w-96 h-56 flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative group/card"
          >
            <img 
              src={item.url} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105" 
              alt="Pratham Shvaas Initiative highlight" 
              loading="lazy"
            />
            {isValidDate(item.date) && (
              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 z-10">
                <Calendar size={12} />
                {item.date}
              </div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// --- INSTAGRAM-STYLE SLIDER ---
const EventSlider = ({ photos, onImageClick }: { photos: GalleryItem[], onImageClick: (item: GalleryItem) => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + photos.length) % photos.length);
  };

  const currentPhoto = photos[currentIndex];

  return (
    <div className="relative w-full h-[300px] sm:h-[450px] bg-gray-100 rounded-2xl overflow-hidden shadow-md group">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={currentIndex}
          src={currentPhoto.url}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -10000) {
              paginate(1);
            } else if (swipe > 10000) {
              paginate(-1);
            }
          }}
          className="absolute inset-0 w-full h-full object-cover cursor-grab active:cursor-grabbing"
          alt="Event highlight"
        />
      </AnimatePresence>

      {/* Expand / Lightbox Button */}
      <button 
        onClick={() => onImageClick(currentPhoto)}
        className="absolute top-4 right-4 bg-black/40 hover:bg-brand-accent backdrop-blur-md text-white p-2 rounded-full transition-colors z-10 opacity-0 group-hover:opacity-100"
      >
        <Maximize2 size={20} />
      </button>

      {/* Navigation Arrows & Indicators (Only show if > 1 photo) */}
      {photos.length > 1 && (
        <>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-900 p-2 rounded-full shadow-lg transition-all z-10 opacity-0 group-hover:opacity-100"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-900 p-2 rounded-full shadow-lg transition-all z-10 opacity-0 group-hover:opacity-100"
            onClick={() => paginate(1)}
          >
            <ChevronRight size={24} />
          </button>

          {/* Smart Indicator: Dots for few photos, Numbers for many */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center gap-1.5 z-10 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-md">
            {photos.length <= 8 ? (
              photos.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`transition-all duration-300 rounded-full ${
                    idx === currentIndex 
                      ? 'w-2 h-2 bg-white' 
                      : 'w-1.5 h-1.5 bg-white/50'
                  }`}
                />
              ))
            ) : (
              <span className="text-white text-xs font-bold px-1 tracking-widest">
                {currentIndex + 1} / {photos.length}
              </span>
            )}
          </div>
        </>
      )}
    </div>
  );
};

// --- MAIN COMPONENT ---
export default function PastEventsGallery() {
  const { t, language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [visibleEventCount, setVisibleEventCount] = useState(4);

  const groupedEvents = useMemo(() => {
    const groups: { [key: string]: { date?: string; caption?: string; photos: GalleryItem[] } } = {};
    
    galleryData.forEach(item => {
      // 1. Skip utterly empty entries or missing URLs
      if (!item || !item.url || item.url.trim() === '') return;

      const rawDate = item.date || '';
      const rawCaption = item.caption || 'Event';

      // 2. ULTRA-AGGRESSIVE KEY GENERATION
      // Removes ALL spaces and punctuation. 'Health Camp!' and 'Health   camp' both become 'healthcamp'
      const dateKey = isValidDate(rawDate) ? rawDate.toLowerCase().replace(/[^a-z0-9]/g, '') : 'anydate';
      const captionKey = rawCaption.toLowerCase().replace(/[^a-z0-9]/g, '');
      
      const key = `${dateKey}-${captionKey}`;
      
      if (!groups[key]) {
        groups[key] = { 
          date: isValidDate(rawDate) ? item.date : undefined, 
          caption: item.caption, 
          photos: [] 
        };
      } else {
        // If this photo has a valid date but the group didn't have one yet, steal it for the group
        if (!groups[key].date && isValidDate(rawDate)) {
          groups[key].date = item.date;
        }
      }

      // 3. Check for duplicates by URL or ID
      const isDuplicate = groups[key].photos.some(
        (existing) => existing.url === item.url || existing.id === item.id
      );

      // 4. Add if not a duplicate
      if (!isDuplicate) {
        groups[key].photos.push(item);
      }
    });
    
    // 5. Ensure we only return groups that actually have photos
    return Object.values(groups).filter(group => group.photos.length > 0);
  }, []);

  const visibleEvents = groupedEvents.slice(0, visibleEventCount);

  const getTranslatedCaption = (caption?: string, fallback?: string) => {
    if (!caption) return fallback;
    return (language === 'hi' && captionTranslations[caption]) 
      ? captionTranslations[caption] 
      : caption;
  };

  return (
    <section id="gallery" className="py-24 bg-gray-50">
      
      <div className="max-w-7xl mx-auto px-4 text-center mb-12 relative z-10">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-green-950 mb-6 tracking-tight">
          {t('nav.gallery')}
        </h2>
        <div className="w-24 h-1.5 bg-brand-accent mx-auto rounded-full mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          The stories behind our initiatives, captured in moments.
        </p>
      </div>
      
      <div 
        className="w-full relative mb-20"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)'
        }}
      >
        <MarqueeRow items={shuffledRibbonPhotos} onImageClick={setSelectedImage} />
      </div>

      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h3 className="text-2xl font-display font-bold text-gray-900">Event Archives</h3>
          <span className="text-sm font-medium text-gray-500 bg-gray-200 px-3 py-1 rounded-full">
            {groupedEvents.length} Events
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
          {visibleEvents.map((event, index) => {
            const displayCaption = getTranslatedCaption(event.caption, "Community Initiative");
            
            return (
              <div key={`event-${index}`} className="flex flex-col gap-4 bg-white p-4 md:p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                
                <div className="flex flex-col gap-2 mb-2">
                  {isValidDate(event.date) && (
                    <span className="inline-flex items-center gap-1.5 text-brand-accent text-sm font-bold uppercase tracking-wider">
                      <Calendar size={14} />
                      {event.date}
                    </span>
                  )}
                  <p className="text-lg font-medium text-gray-800 leading-tight">
                    {displayCaption}
                  </p>
                </div>

                <EventSlider photos={event.photos} onImageClick={setSelectedImage} />
                
              </div>
            );
          })}
        </div>

        {visibleEventCount < groupedEvents.length && (
          <div className="mt-20 text-center">
            <button 
              onClick={() => setVisibleEventCount((prev) => prev + 4)}
              className="inline-flex items-center gap-2 bg-white text-brand-green-950 border-2 border-brand-green-950 px-8 py-3 rounded-full font-bold hover:bg-brand-green-50 transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              <Plus size={20} />
              Load More Events
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedImage && <Lightbox item={selectedImage} items={galleryData} onClose={() => setSelectedImage(null)} language={language} />}
      </AnimatePresence>
    </section>
  );
}

// --- LIGHTBOX ---
function Lightbox({ item, items, onClose, language }: { item: GalleryItem, items: GalleryItem[], onClose: () => void, language: string }) {
  const [index, setIndex] = useState(() => items.findIndex(i => i.id === item.id));

  useEffect(() => { 
    document.body.style.overflow = 'hidden'; 
    return () => { document.body.style.overflow = ''; }; 
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setIndex((prev) => (prev + 1) % items.length);
      if (e.key === 'ArrowLeft') setIndex((prev) => (prev - 1 + items.length) % items.length);
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [items.length, onClose]);

  const activeItem = items[index];
  
  const displayCaption = language === 'hi' && activeItem.caption && captionTranslations[activeItem.caption]
    ? captionTranslations[activeItem.caption]
    : (activeItem.caption || "Beautiful moments captured during our community initiatives.");

  return (
    <motion.div 
      className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center backdrop-blur-sm" 
      onClick={onClose}
    >
      <button className="absolute top-6 right-6 md:top-8 md:right-8 text-white z-50 hover:text-brand-accent transition-colors cursor-pointer" onClick={onClose}>
        <X size={40} />
      </button>
      
      <button className="absolute left-2 md:left-10 text-white p-4 z-50 hover:text-brand-accent transition-colors cursor-pointer" onClick={(e) => { e.stopPropagation(); setIndex((prev) => (prev - 1 + items.length) % items.length); }}>
        <ChevronLeft size={48} />
      </button>

      <div className="relative w-full h-[70vh] flex items-center justify-center p-4 md:p-10">
        <AnimatePresence mode="wait">
          <motion.img 
            key={activeItem.id}
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            src={activeItem.url} 
            className="max-w-full max-h-full object-contain drop-shadow-2xl rounded-sm" 
            onClick={(e) => e.stopPropagation()} 
          />
        </AnimatePresence>
      </div>

      <div className="h-[30vh] w-full max-w-4xl px-4 md:px-8 flex items-start pt-6 justify-center" onClick={(e) => e.stopPropagation()}>
        <AnimatePresence mode="wait">
          <motion.div 
            key={`cap-${activeItem.id}`}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.15 }}
            className="text-center bg-white/10 backdrop-blur-md px-6 md:px-10 py-4 md:py-5 rounded-2xl border border-white/20 shadow-2xl max-w-3xl"
          >
            {isValidDate(activeItem.date) && (
              <span className="inline-flex items-center justify-center gap-1.5 text-brand-accent text-xs uppercase tracking-widest font-bold mb-2">
                <Calendar size={14} />
                {activeItem.date}
              </span>
            )}
            <p className="text-white text-base md:text-lg font-medium leading-relaxed tracking-wide shadow-black drop-shadow-md">
              {displayCaption}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <button className="absolute right-2 md:right-10 text-white p-4 z-50 hover:text-brand-accent transition-colors cursor-pointer" onClick={(e) => { e.stopPropagation(); setIndex((prev) => (prev + 1) % items.length); }}>
        <ChevronRight size={48} />
      </button>
    </motion.div>
  );
}