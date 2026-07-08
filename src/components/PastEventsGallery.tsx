import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Layers, Minimize2, ZoomIn, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface GalleryItem {
  id: number;
  url: string;
  title: string;
  titleHi: string;
  category: string;
  categoryHi: string;
  heightClass: string;
  summary?: string;
  summaryHi?: string;
}

// Write a function that programmatically generates the array of 52 gallery items
function generateGalleryItems(): GalleryItem[] {
  const baseUnsplashIds = [
    'photo-1542601906990-b4d3fb778b09', // bio shields / planting
    'photo-1466692476868-aef1dfb1e735', // bio forestation
    'photo-1551076805-e1869033e561', // screening / medical
    'photo-1515187029135-18ee286d815b', // community education / youth
    'photo-1584515979956-d9f6e5d09982', // respiratory help / clinic
    'photo-1427504494785-3a9ca7044f45', // classroom air science
    'photo-1576091160399-112ba8d25d1d', // pediatric screening
    'photo-1464822759023-fed622ff2c3b', // clear mountain air
    'photo-1509099836639-18ba1795216d', // children play clean air
    'photo-1488521787991-ed7bbaae773c', // municipal school support
    'photo-1532938911079-1b06ac7ceec7', // healthcare exam
    'photo-1526256262350-7da7584cf5eb', // doctors consultation
    'photo-1508962914676-134849a727f0', // community gather
    'photo-1511632765486-a01980e01a18'  // youth group action
  ];

  const categories = [
    { en: 'Health Screening', hi: 'स्वास्थ्य जांच' },
    { en: 'Micro-Foresting', hi: 'सूक्ष्म-वनीकरण' },
    { en: 'School Workshops', hi: 'स्कूल कार्यशालाएं' },
    { en: 'Air Science Kits', hi: 'वायु विज्ञान किट' },
    { en: 'Community Action', hi: 'सामुदायिक अभियान' }
  ];

  const titles = [
    { en: 'Pediatric Pulmonology Diagnostic Camp', hi: 'बाल चिकित्सा पल्मोनोलॉजी जांच शिविर' },
    { en: 'Oxygen-Rich Bio-Shield Plantation', hi: 'ऑक्सीजन-समृद्ध बायो-शील्ड वृक्षारोपण' },
    { en: 'Classroom Eco-Purifier Installation', hi: 'कक्षा में इको-प्यूरीफायर स्थापना' },
    { en: 'School PM2.5 Air Science Tutorial', hi: 'स्कूल PM2.5 वायु विज्ञान ट्यूटोरियल' },
    { en: 'Asthma Inhaler Distribution Drive', hi: 'अस्थमा इनहेलर वितरण अभियान' },
    { en: 'Municipal Playground Habitat Cleanup', hi: 'नगर निगम खेल के मैदान की पर्यावरण सफाई' },
    { en: 'Clean Air Awareness Parent Workshop', hi: 'स्वच्छ वायु जागरूकता अभिभावक कार्यशाला' },
    { en: 'School Ventilation Monitoring Setup', hi: 'स्कूल वेंटिलेशन निगरानी सेटअप' }
  ];

  const summaries = [
    {
      en: 'Our specialist pulmonologists conduct comprehensive clinical spirometry assessments, screen children for pediatric asthma, and distribute clean nebulization kits directly to families in need.',
      hi: 'हमारे विशेषज्ञ पल्मोनोलॉजिस्ट व्यापक क्लिनिकल स्पाइरोमेट्री जांच करते हैं, बच्चों में अस्थमा की जांच करते हैं, और जरूरतमंद परिवारों को सीधे नेबुलाइज़र किट वितरित करते हैं।'
    },
    {
      en: 'Our youth volunteers plant dense belts of indigenous oxygenating flora around urban peripheral highways to filter vehicular emissions and restore biodiversity.',
      hi: 'हमारे युवा स्वयंसेवक वाहनों के उत्सर्जन को फ़िल्टर करने और जैव विविधता को बहाल करने के लिए शहरी परिधीय राजमार्गों के आसपास स्वदेशी पौधों की घनी बेल्ट लगाते हैं।'
    },
    {
      en: 'Deploying custom-designed, low-cost bio-filtration modules inside regional public school classrooms to actively capture particulate matter and safeguard student respiratory health.',
      hi: 'पार्टिकुलेट मैटर को सक्रिय रूप से पकड़ने और छात्रों के श्वसन स्वास्थ्य की रक्षा के लिए सरकारी स्कूलों की कक्षाओं में कम लागत वाले बायो-फिल्ट्रेशन मॉड्यूल स्थापित किए गए।'
    },
    {
      en: 'Interactive scholastic workshops introducing middle-school children to micro-sensor kits, mapping air quality indices, and teaching actionable habits to minimize pollutant exposure.',
      hi: 'हाई स्कूल के बच्चों को माइक्रो-सेंसर किट से परिचित कराने, वायु गुणवत्ता सूचकांक को मापने और प्रदूषक जोखिम को कम करने के लिए शैक्षिक कार्यशालाएं।'
    },
    {
      en: 'Connecting diagnostic camp patients with critical, high-grade medical inhalers, spacers, and preventive medical counsel at absolutely zero cost to the recipient.',
      hi: 'निदान शिविर के मरीजों को बिल्कुल शून्य लागत पर महत्वपूर्ण चिकित्सा इनहेलर, स्पेसर और निवारक चिकित्सा परामर्श से सीधे जोड़ना।'
    },
    {
      en: 'Grassroots community initiatives focused on deep physical debris removal and setting up eco-friendly trash segregation bins near schools to protect child play zones.',
      hi: 'बच्चों के खेल क्षेत्रों की सुरक्षा के लिए स्कूलों के पास गहरे कचरे को हटाने और पर्यावरण-अनुकूल कचरा पृथक्करण डिब्बे स्थापित करने की जमीनी पहल।'
    },
    {
      en: 'Gathering neighborhood elders and parents to share practical guidance on maintaining smoke-free kitchens, ventilating households, and early symptoms of respiratory fatigue.',
      hi: 'पड़ोस के बुजुर्गों और अभिभावकों को धुआं रहित रसोई बनाए रखने, घरों में हवादार व्यवस्था और श्वसन संबंधी थकान के शुरुआती लक्षणों पर व्यावहारिक मार्गदर्शन।'
    },
    {
      en: 'Installing real-time, low-power particulate sensors in high-density corridors to continuously track indoor air indicators and empower local school boards with clean air data.',
      hi: 'इंडोर वायु संकेतकों को लगातार ट्रैक करने और स्थानीय स्कूल बोर्डों को डेटा के साथ सशक्त बनाने के लिए उच्च-घनत्व वाले गलियारों में वास्तविक समय सेंसर स्थापित करना।'
    }
  ];

  const heightClasses = [
    'h-64', 'h-72', 'h-80', 'h-96', 'h-64', 'h-80', 'h-72', 'h-96'
  ];

  const items: GalleryItem[] = [];

  for (let i = 1; i <= 52; i++) {
    // Select unsplash ID from our list cyclically
    const unsplashId = baseUnsplashIds[(i - 1) % baseUnsplashIds.length];
    
    // Programmatically construct unique image URLs by appending unique sig query params
    // Vary width and height slightly to create a high-fidelity masonry layout
    const url = `https://images.unsplash.com/${unsplashId}?auto=format&fit=crop&w=600&q=80&sig=${i}`;

    // Select cyclic title and category definitions
    const titleDef = titles[(i - 1) % titles.length];
    const categoryDef = categories[(i - 1) % categories.length];
    const heightClass = heightClasses[(i - 1) % heightClasses.length];
    const summaryDef = summaries[(i - 1) % summaries.length];

    items.push({
      id: i,
      url,
      title: `${titleDef.en} #${i}`,
      titleHi: `${titleDef.hi} #${i}`,
      category: categoryDef.en,
      categoryHi: categoryDef.hi,
      heightClass,
      summary: summaryDef.en,
      summaryHi: summaryDef.hi
    });
  }

  return items;
}

export default function PastEventsGallery() {
  const { language, t } = useLanguage();
  const [visibleCount, setVisibleCount] = useState(8);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  // Dynamically generate the array of 52 images using our JavaScript function
  const galleryItems = useMemo(() => generateGalleryItems(), []);

  const handleLoadMore = () => {
    if (visibleCount >= galleryItems.length) {
      setVisibleCount(8); // Collapse back to initial display
    } else {
      setVisibleCount((prev) => Math.min(prev + 12, galleryItems.length));
    }
  };

  return (
    <section id="gallery" className="py-24 bg-white text-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-brand-accent bg-brand-green-950/5 px-4 py-1.5 rounded-full inline-flex items-center space-x-2"
          >
            <Camera className="h-3.5 w-3.5" />
            <span>{t('nav.gallery')}</span>
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 font-display font-bold text-3xl sm:text-4xl text-brand-green-950 tracking-tight"
          >
            {t('gallery.heading')}
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
            {t('gallery.subheading')}
          </motion.p>
        </div>

        {/* Dynamic Masonry-Style Column Layout */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          <AnimatePresence>
            {galleryItems.slice(0, visibleCount).map((item) => {
              const itemTitle = language === 'hi' ? item.titleHi : item.title;
              const itemCategory = language === 'hi' ? item.categoryHi : item.category;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.4 }}
                  className="break-inside-avoid relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg border border-gray-100 bg-gray-50 group cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                  id={`gallery-item-${item.id}`}
                >
                  {/* Dynamic image element with strictly lazy loading */}
                  <img
                    src={item.url}
                    alt={itemTitle}
                    loading="lazy"
                    className="w-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    style={{ height: item.id % 2 === 0 ? '320px' : '260px' }}
                    referrerPolicy="no-referrer"
                  />

                  {/* High-contrast hover caption overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-green-950/90 via-brand-green-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-5">
                    <span className="text-brand-accent font-display font-bold text-xs uppercase tracking-widest mb-1">
                      {itemCategory}
                    </span>
                    <h3 className="text-white font-display font-semibold text-sm leading-snug">
                      {itemTitle}
                    </h3>
                    <div className="mt-3 flex items-center space-x-1.5 text-xs text-brand-green-200">
                      <ZoomIn className="h-3.5 w-3.5" />
                      <span>{language === 'hi' ? 'बड़ा करें' : 'Zoom In'}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Load More Control Center */}
        <div className="mt-16 text-center">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleLoadMore}
            className="inline-flex items-center space-x-2 bg-brand-green-800 hover:bg-brand-green-950 text-white px-8 py-3.5 rounded-xl font-display font-semibold text-sm transition-all shadow-md hover:shadow-xl cursor-pointer"
            id="btn-load-more-gallery"
          >
            <Layers className="h-4 w-4 text-brand-accent" />
            <span>
              {visibleCount >= galleryItems.length
                ? t('gallery.showLess')
                : `${t('gallery.loadMore')} (${galleryItems.length - visibleCount} ${language === 'hi' ? 'बचे हैं' : 'left'})`}
            </span>
          </motion.button>
        </div>
      </div>

      {/* Lightbox / Zoom Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-brand-green-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-4xl max-h-[85vh] overflow-hidden rounded-3xl border border-white/10 shadow-2xl flex flex-col justify-end bg-brand-green-950"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url.replace('&w=600', '&w=1200')}
                alt={language === 'hi' ? selectedImage.titleHi : selectedImage.title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-6 sm:p-8 space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-brand-accent font-display font-bold text-xs uppercase tracking-widest bg-brand-accent/10 px-2.5 py-0.5 rounded-full border border-brand-accent/20">
                    {language === 'hi' ? selectedImage.categoryHi : selectedImage.category}
                  </span>
                  <span className="text-brand-green-300 font-mono text-[10px] uppercase tracking-wider">
                    {language === 'hi' ? `चित्र #${selectedImage.id}` : `Photo #${selectedImage.id}`}
                  </span>
                </div>
                <h3 className="text-white font-display font-bold text-base sm:text-lg leading-snug">
                  {language === 'hi' ? selectedImage.titleHi : selectedImage.title}
                </h3>
                {selectedImage.summary && (
                  <p className="text-gray-300 font-sans text-xs sm:text-sm leading-relaxed max-w-3xl mt-1.5 opacity-95">
                    {language === 'hi' ? selectedImage.summaryHi : selectedImage.summary}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
