import React, { useMemo } from 'react';
import { Calendar } from 'lucide-react';
import { galleryData, captionTranslations, GalleryItem } from '../data/galleryData';
import { useLanguage } from '../context/LanguageContext';

export default function PrintCatalog() {
  const { language } = useLanguage();

  const groupedEvents = useMemo(() => {
    const groups: { [key: string]: { date?: string; caption?: string; photos: GalleryItem[] } } = {};
    galleryData.forEach(item => {
      const cleanDate = (item.date || 'nodate').trim().toLowerCase();
      const cleanCaption = (item.caption || 'nocaption').trim().toLowerCase();
      const key = `${cleanDate}-${cleanCaption}`;
      
      if (!groups[key]) {
        groups[key] = { date: item.date, caption: item.caption, photos: [] };
      }
      groups[key].photos.push(item);
    });
    return Object.values(groups);
  }, []);

  const getTranslatedCaption = (caption?: string, fallback?: string) => {
    if (!caption) return fallback;
    return (language === 'hi' && captionTranslations[caption]) 
      ? captionTranslations[caption] 
      : caption;
  };

  return (
    <div className="hidden print:block w-full bg-white text-black font-sans">
      
      {/* PAGE 1: THE COVER PAGE */}
      {/* min-h-screen and break-after-page forces this to be its own page */}
      <div className="min-h-screen flex flex-col items-center justify-center text-center break-after-page p-12 border-8 border-brand-green-950 m-8">
        <img 
          src="/prtham/images/logo.png" 
          alt="Pratham Shvaas Foundation Logo" 
          className="h-40 w-auto mb-12 object-contain"
        />
        <h1 className="text-6xl font-black text-brand-green-950 mb-4 tracking-tight uppercase">
          Impact Report
        </h1>
        <div className="w-32 h-2 bg-brand-accent mb-8 mx-auto"></div>
        <h2 className="text-3xl text-gray-800 font-medium mb-12">
          Pratham Shvaas Foundation
        </h2>
        <p className="text-xl text-gray-500 max-w-2xl font-light italic">
          Empowering communities, restoring dignity, and creating a world where every breath counts.
        </p>
        
        <div className="mt-32 text-gray-400 font-semibold tracking-widest uppercase">
          {new Date().getFullYear()} Catalog
        </div>
      </div>

      {/* PAGE 2+: THE INITIATIVES */}
      <div className="p-12">
        <div className="border-b-4 border-brand-green-950 pb-6 mb-12">
          <h2 className="text-4xl font-bold text-brand-green-950 uppercase tracking-wide">Our Initiatives</h2>
        </div>

        <div className="flex flex-col gap-16">
          {groupedEvents.map((event, index) => {
            const displayCaption = getTranslatedCaption(event.caption, "Community Initiative");
            
            return (
              <div key={`print-event-${index}`} className="break-inside-avoid flex flex-col gap-6">
                
                {/* Event Text */}
                <div className="border-l-8 border-brand-accent pl-6">
                  {event.date && (
                    <span className="flex items-center gap-2 text-brand-green-950 text-base font-bold uppercase tracking-widest mb-2">
                      <Calendar size={18} />
                      {event.date}
                    </span>
                  )}
                  <p className="text-2xl font-medium text-gray-900 leading-snug">
                    {displayCaption}
                  </p>
                </div>

                {/* Print-Optimized Photo Grid */}
                <div className="grid grid-cols-3 gap-6">
                  {event.photos.slice(0, 6).map((item) => (
                    <div key={`print-img-${item.id}`} className="aspect-[4/3] rounded-xl overflow-hidden shadow-sm border border-gray-100">
                      <img 
                        src={item.url} 
                        className="w-full h-full object-cover grayscale-[20%]" 
                        alt="" 
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Footer */}
        <div className="mt-16 pt-8 border-t-2 text-center text-sm text-gray-400 font-medium tracking-wide uppercase break-inside-avoid">
          <p>Pratham Shvaas Foundation • prathamshvaas.org</p>
        </div>
      </div>
    </div>
  );
}