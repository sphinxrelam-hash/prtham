import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { generateGalleryItems, GalleryItem } from '../data/galleryData';

export default function PastEventsGallery() {
  const [visibleCount, setVisibleCount] = useState(12);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const observerTarget = useRef<HTMLDivElement>(null);
  
  const galleryItems = useMemo(() => generateGalleryItems(), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + 12, galleryItems.length));
        }
      },
      { threshold: 0.1 }
    );
    if (observerTarget.current) observer.observe(observerTarget.current);
    return () => observer.disconnect();
  }, [galleryItems.length]);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* The section heading is kept for context, but captions are gone */}
        <div className="columns-1 sm:columns-2 lg:columns-4 gap-4">
          {galleryItems.slice(0, visibleCount).map((item) => (
            <GalleryCard key={item.id} item={item} onClick={() => setSelectedImage(item)} />
          ))}
        </div>
        <div ref={observerTarget} className="h-10" />
      </div>

      <AnimatePresence>
        {selectedImage && (
          <Lightbox item={selectedImage} onClose={() => setSelectedImage(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function GalleryCard({ item, onClick }: { item: GalleryItem, onClick: () => void }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <motion.div 
      className="mb-4 overflow-hidden rounded-2xl cursor-pointer relative group"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <img 
        src={item.url} 
        onLoad={() => setLoaded(true)}
        className={`transition-all duration-700 w-full ${loaded ? 'blur-0' : 'blur-xl'}`}
        alt="" 
      />
      {/* Hover overlay is now minimal, no text */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
    </motion.div>
  );
}

function Lightbox({ item, onClose }: { item: GalleryItem, onClose: () => void }) {
  useEffect(() => { 
    document.body.style.overflow = 'hidden'; 
    return () => { document.body.style.overflow = ''; }; 
  }, []);
  
  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" 
      onClick={onClose}
    >
      <button className="absolute top-8 right-8 text-white z-50" onClick={onClose}>
        <X size={32} />
      </button>
      <img src={item.url} className="max-h-[90vh] object-contain" alt="" />
      {/* All caption div elements have been removed */}
    </motion.div>
  );
}