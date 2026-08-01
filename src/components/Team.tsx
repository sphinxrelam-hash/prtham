import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Users, Shield, Star, Award, Heart, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface MemberDetails {
  name: string;
  nameHi: string;
  role: string;
  roleHi: string;
  bio: string;
  bioHi: string;
}

// --- OFFICIAL FOUNDATION DATA WITH BILINGUAL SUPPORT ---

const coreLeadership: MemberDetails[] = [
  { 
    name: 'Dt. Anamika Jindal', nameHi: 'डायटीशियन अनामिका जिंदल', 
    role: 'President', roleHi: 'अध्यक्ष', 
    bio: 'As a specialized Dietitian, she leads the foundation with a deep focus on holistic health, public nutrition, and preventative care strategies.',
    bioHi: 'एक विशेषज्ञ आहार विशेषज्ञ के रूप में, वह समग्र स्वास्थ्य, सार्वजनिक पोषण और निवारक देखभाल रणनीतियों पर गहरे ध्यान के साथ फाउंडेशन का नेतृत्व करती हैं।'
  },
  { 
    name: 'Dr. Shivta Kureel', nameHi: 'डॉ. शिवता कुरील', 
    role: 'Vice President', roleHi: 'उपाध्यक्ष', 
    bio: 'Forms a highly balanced leadership duo that merges advanced medical expertise with strong administrative oversight to execute large-scale community initiatives.',
    bioHi: 'एक अत्यधिक संतुलित नेतृत्व की जोड़ी बनाती हैं जो बड़े पैमाने पर सामुदायिक पहलों को निष्पादित करने के लिए मजबूत प्रशासनिक देखरेख के साथ उन्नत चिकित्सा विशेषज्ञता का विलय करती है।'
  },
  { 
    name: 'Mr. Sanjay Mittal', nameHi: 'श्री संजय मित्तल', 
    role: 'Vice President', roleHi: 'उपाध्यक्ष', 
    bio: 'Forms a highly balanced leadership duo that merges advanced medical expertise with strong administrative oversight to execute large-scale community initiatives.',
    bioHi: 'एक अत्यधिक संतुलित नेतृत्व की जोड़ी बनाते हैं जो बड़े पैमाने पर सामुदायिक पहलों को निष्पादित करने के लिए मजबूत प्रशासनिक देखरेख के साथ उन्नत चिकित्सा विशेषज्ञता का विलय करती है।'
  },
  { 
    name: 'Mr. Vinit Gupta', nameHi: 'श्री विनीत गुप्ता', 
    role: 'Chief Secretary', roleHi: 'मुख्य सचिव', 
    bio: 'The operational backbone of the foundation, ensuring transparent communication, regulatory compliance, and seamless execution of ground-level campaigns.',
    bioHi: 'फाउंडेशन की परिचालन रीढ़, पारदर्शी संचार, विनियामक अनुपालन और जमीनी स्तर के अभियानों का निर्बाध निष्पादन सुनिश्चित करते हैं।'
  },
  { 
    name: 'Mr. Shashi Singhal', nameHi: 'श्री शशि सिंघल', 
    role: 'Secretary', roleHi: 'सचिव', 
    bio: 'The operational backbone of the foundation, ensuring transparent communication, regulatory compliance, and seamless execution of ground-level campaigns.',
    bioHi: 'फाउंडेशन की परिचालन रीढ़, पारदर्शी संचार, विनियामक अनुपालन और जमीनी स्तर के अभियानों का निर्बाध निष्पादन सुनिश्चित करते हैं।'
  },
  { 
    name: 'Mr. Pradeep Garg', nameHi: 'श्री प्रदीप गर्ग', 
    role: 'Treasurer', roleHi: 'कोषाध्यक्ष', 
    bio: 'Drives the financial integrity of the organization, ensuring transparent, ethical, and effective allocation of resources.',
    bioHi: 'संसाधनों का पारदर्शी, नैतिक और प्रभावी आवंटन सुनिश्चित करते हुए संगठन की वित्तीय अखंडता को संचालित करते हैं।'
  },
  { 
    name: 'Mis Priya Gulati', nameHi: 'मिस प्रिया गुलाटी', 
    role: 'Media', roleHi: 'मीडिया प्रभारी', 
    bio: 'Directs media relations and public communications, amplifying the foundation’s reach, mission, and community engagement.',
    bioHi: 'मीडिया संबंधों और सार्वजनिक संचार का निर्देशन करती हैं, जिससे फाउंडेशन की पहुंच, मिशन और सामुदायिक जुड़ाव बढ़ता है।'
  },
];

const patrons: MemberDetails[] = [
  { 
    name: 'Justice Rajesh Tandon', nameHi: 'जस्टिस राजेश टंडन', 
    role: 'Patron', roleHi: 'संरक्षक', 
    bio: 'As a former judicial authority, he brings unparalleled legal, ethical, and civic governance to the foundation, ensuring all initiatives operate with the highest level of integrity.',
    bioHi: 'एक पूर्व न्यायिक प्राधिकरण के रूप में, वह फाउंडेशन में अद्वितीय कानूनी, नैतिक और नागरिक शासन लाते हैं, यह सुनिश्चित करते हुए कि सभी पहल उच्चतम स्तर की अखंडता के साथ काम करें।'
  },
  { 
    name: 'Dr. S. Farooq', nameHi: 'डॉ. एस. फारूक', 
    role: 'Patron', roleHi: 'संरक्षक', 
    bio: 'A highly respected figure bringing decades of scientific, philanthropic, and industrial leadership to guide the foundation’s strategic, long-term vision.',
    bioHi: 'वैज्ञानिक, परोपकारी और औद्योगिक नेतृत्व के दशकों के अनुभव के साथ फाउंडेशन के रणनीतिक, दीर्घकालिक दृष्टिकोण का मार्गदर्शन करने वाले एक अत्यधिक सम्मानित व्यक्ति।'
  },
  { 
    name: 'Mrs. Savita Kapoor', nameHi: 'श्रीमती सविता कपूर', 
    role: 'Patron', roleHi: 'संरक्षक', 
    bio: 'A prominent civic leader providing essential grassroots connectivity, public advocacy, and community mobilization.',
    bioHi: 'एक प्रमुख नागरिक नेता जो आवश्यक जमीनी जुड़ाव, सार्वजनिक वकालत और सामुदायिक लामबंदी प्रदान करती हैं।'
  },
  { 
    name: 'Dr. D.S. Maan', nameHi: 'डॉ. डी.एस. मान', 
    role: 'Patron', roleHi: 'संरक्षक', 
    bio: 'An esteemed medical veteran whose extensive clinical experience anchors the foundation’s health and wellness initiatives.',
    bioHi: 'एक सम्मानित चिकित्सा दिग्गज जिनका व्यापक नैदानिक ​​अनुभव फाउंडेशन के स्वास्थ्य और कल्याण की पहलों को आधार प्रदान करता है।'
  },
  { 
    name: 'Dr. Seema Krishan Avtar', nameHi: 'डॉ. सीमा कृष्ण अवतार', 
    role: 'Patron', roleHi: 'संरक्षक', 
    bio: 'An esteemed medical veteran whose extensive clinical experience anchors the foundation’s health and wellness initiatives.',
    bioHi: 'एक सम्मानित चिकित्सा दिग्गज जिनका व्यापक नैदानिक ​​अनुभव फाउंडेशन के स्वास्थ्य और कल्याण की पहलों को आधार प्रदान करता है।'
  },
  { 
    name: 'Mr. Sanjay Garg', nameHi: 'श्री संजय गर्ग', 
    role: 'Patron', roleHi: 'संरक्षक', 
    bio: 'A key strategic patron ensuring robust organizational scaling and sustained community impact.',
    bioHi: 'एक प्रमुख रणनीतिक संरक्षक जो मजबूत संगठनात्मक स्केलिंग और निरंतर सामुदायिक प्रभाव सुनिश्चित करते हैं।'
  },
];

const directors: MemberDetails[] = [
  { name: 'Dr. Dinesh Barthwal', nameHi: 'डॉ. दिनेश बर्थवाल', role: 'Director', roleHi: 'निदेशक', bio: 'Oversees the clinical safety and medical accuracy of the foundation’s public health outreach.', bioHi: 'फाउंडेशन की सार्वजनिक स्वास्थ्य पहुंच की नैदानिक ​​सुरक्षा और चिकित्सा सटीकता की देखरेख करते हैं।' },
  { name: 'Dr. Naveen Singhal', nameHi: 'डॉ. नवीन सिंघल', role: 'Director', roleHi: 'निदेशक', bio: 'Oversees the clinical safety and medical accuracy of the foundation’s public health outreach.', bioHi: 'फाउंडेशन की सार्वजनिक स्वास्थ्य पहुंच की नैदानिक ​​सुरक्षा और चिकित्सा सटीकता की देखरेख करते हैं।' },
  { name: 'Mr. Devendr Singh Monti', nameHi: 'श्री देवेंद्र सिंह मोंटी', role: 'Director', roleHi: 'निदेशक', bio: 'An administrative expert managing localized operations, grassroots logistics, and public outreach.', bioHi: 'स्थानीयकृत संचालन, जमीनी स्तर के लॉजिस्टिक्स और जनसंपर्क का प्रबंधन करने वाले एक प्रशासनिक विशेषज्ञ।' },
  { name: 'Mr. Jogendar Pundeer', nameHi: 'श्री जोगिंदर पुंडीर', role: 'Director', roleHi: 'निदेशक', bio: 'An administrative expert managing localized operations, grassroots logistics, and public outreach.', bioHi: 'स्थानीयकृत संचालन, जमीनी स्तर के लॉजिस्टिक्स और जनसंपर्क का प्रबंधन करने वाले एक प्रशासनिक विशेषज्ञ।' },
  { name: 'Mr. Sunil Aggarwal', nameHi: 'श्री सुनील अग्रवाल', role: 'Director', roleHi: 'निदेशक', bio: 'An administrative expert managing localized operations, grassroots logistics, and public outreach.', bioHi: 'स्थानीयकृत संचालन, जमीनी स्तर के लॉजिस्टिक्स और जनसंपर्क का प्रबंधन करने वाले एक प्रशासनिक विशेषज्ञ।' },
  { name: 'Mr. Harish Mittal', nameHi: 'श्री हरीश मित्तल', role: 'Director', roleHi: 'निदेशक', bio: 'An administrative expert managing localized operations, grassroots logistics, and public outreach.', bioHi: 'स्थानीयकृत संचालन, जमीनी स्तर के लॉजिस्टिक्स और जनसंपर्क का प्रबंधन करने वाले एक प्रशासनिक विशेषज्ञ।' },
  { name: 'Mr. Ravindr Anand', nameHi: 'श्री रवींद्र आनंद', role: 'Director', roleHi: 'निदेशक', bio: 'An administrative expert managing localized operations, grassroots logistics, and public outreach.', bioHi: 'स्थानीयकृत संचालन, जमीनी स्तर के लॉजिस्टिक्स और जनसंपर्क का प्रबंधन करने वाले एक प्रशासनिक विशेषज्ञ।' },
  { name: 'Pandit Subhash Joshi', nameHi: 'पंडित सुभाष जोशी', role: 'Director', roleHi: 'निदेशक', bio: 'An administrative expert managing localized operations, grassroots logistics, and public outreach.', bioHi: 'स्थानीयकृत संचालन, जमीनी स्तर के लॉजिस्टिक्स और जनसंपर्क का प्रबंधन करने वाले एक प्रशासनिक विशेषज्ञ।' },
];

const advisors: MemberDetails[] = [
  { name: 'Dr. Aman Damir', nameHi: 'डॉ. अमन दमीर', role: 'Advisor', roleHi: 'सलाहकार', bio: 'Provides critical, evidence-based medical counsel to ensure all interventions meet the highest standards of modern healthcare.', bioHi: 'यह सुनिश्चित करने के लिए महत्वपूर्ण, साक्ष्य-आधारित चिकित्सा परामर्श प्रदान करते हैं कि सभी हस्तक्षेप आधुनिक स्वास्थ्य देखभाल के उच्चतम मानकों को पूरा करते हैं।' },
  { name: 'Dr. Mayank Jain', nameHi: 'डॉ. मयंक जैन', role: 'Advisor', roleHi: 'सलाहकार', bio: 'Provides critical, evidence-based medical counsel to ensure all interventions meet the highest standards of modern healthcare.', bioHi: 'यह सुनिश्चित करने के लिए महत्वपूर्ण, साक्ष्य-आधारित चिकित्सा परामर्श प्रदान करते हैं कि सभी हस्तक्षेप आधुनिक स्वास्थ्य देखभाल के उच्चतम मानकों को पूरा करते हैं।' },
  { name: 'Dr. Geeta Khanna', nameHi: 'डॉ. गीता खन्ना', role: 'Advisor', roleHi: 'सलाहकार', bio: 'Provides critical, evidence-based medical counsel to ensure all interventions meet the highest standards of modern healthcare.', bioHi: 'यह सुनिश्चित करने के लिए महत्वपूर्ण, साक्ष्य-आधारित चिकित्सा परामर्श प्रदान करते हैं कि सभी हस्तक्षेप आधुनिक स्वास्थ्य देखभाल के उच्चतम मानकों को पूरा करते हैं।' },
  { name: 'Dr. Shelendr Kaushik', nameHi: 'डॉ. शैलेंद्र कौशिक', role: 'Advisor', roleHi: 'सलाहकार', bio: 'Provides critical, evidence-based medical counsel to ensure all interventions meet the highest standards of modern healthcare.', bioHi: 'यह सुनिश्चित करने के लिए महत्वपूर्ण, साक्ष्य-आधारित चिकित्सा परामर्श प्रदान करते हैं कि सभी हस्तक्षेप आधुनिक स्वास्थ्य देखभाल के उच्चतम मानकों को पूरा करते हैं।' },
  { name: 'Dr. Mukul Sharma', nameHi: 'डॉ. मुकुल शर्मा', role: 'Advisor', roleHi: 'सलाहकार', bio: 'Provides critical, evidence-based medical counsel to ensure all interventions meet the highest standards of modern healthcare.', bioHi: 'यह सुनिश्चित करने के लिए महत्वपूर्ण, साक्ष्य-आधारित चिकित्सा परामर्श प्रदान करते हैं कि सभी हस्तक्षेप आधुनिक स्वास्थ्य देखभाल के उच्चतम मानकों को पूरा करते हैं।' },
];

const executiveMembers = [
  { en: 'Aarti Aggarwal', hi: 'आरती अग्रवाल' }, { en: 'Anju Bhalla', hi: 'अंजू भल्ला' }, 
  { en: 'Anuj Jain', hi: 'अनुज जैन' }, { en: 'Beenu Gaur', hi: 'बीनू गौर' }, 
  { en: 'Bhakti Kapoor', hi: 'भक्ति कपूर' }, { en: 'Ganesh Babu', hi: 'गणेश बाबू' }, 
  { en: 'Gaurav Jain', hi: 'गौरव जैन' }, { en: 'Indrani', hi: 'इंद्राणी' }, 
  { en: 'Indu Sharma', hi: 'इंदु शर्मा' }, { en: 'Kumkum Singhal', hi: 'कुमकुम सिंघल' }, 
  { en: 'Manju Harnal', hi: 'मंजू हरनाल' }, { en: 'Manju Sharma', hi: 'मंजू शर्मा' }, 
  { en: 'Nalini Aggarwal', hi: 'नलिनी अग्रवाल' }, { en: 'Naveen Gupta', hi: 'नवीन गुप्ता' }, 
  { en: 'Nimisha Jain', hi: 'निमिषा जैन' }, { en: 'Reena Singhal', hi: 'रीना सिंघल' }, 
  { en: 'Sangeeta Jain', hi: 'संगीता जैन' }, { en: 'Seema Jain', hi: 'सीमा जैन' }, 
  { en: 'Tripti Mittal', hi: 'तृप्ति मित्तल' }
];

const generalMembers = [
  { en: 'Amita Goel', hi: 'अमिता गोयल' }, { en: 'Anita Gupta', hi: 'अनीता गुप्ता' }, 
  { en: 'Anoopa Prasad', hi: 'अनूपा प्रसाद' }, { en: 'Arpita Aggarwal', hi: 'अर्पिता अग्रवाल' }, 
  { en: 'Aruna Chawla', hi: 'अरुणा चावला' }, { en: 'Babita Gupta', hi: 'बबीता गुप्ता' }, 
  { en: 'Chander Kant Tiwari', hi: 'चंद्र कांत तिवारी' }, { en: 'Geeta Kapoor', hi: 'गीता कपूर' }, 
  { en: 'Gopal Singhal', hi: 'गोपाल सिंघल' }, { en: 'K. M. Aggarwal', hi: 'के. एम. अग्रवाल' }, 
  { en: 'Mona Kaul', hi: 'मोना कौल' }, { en: 'Mona Sharma', hi: 'मोना शर्मा' }, 
  { en: 'Namrata', hi: 'नम्रता' }, { en: 'Nancy', hi: 'नेंसी' }, 
  { en: 'Neera Mittal', hi: 'नीरा मित्तल' }, { en: 'Neetu', hi: 'नीतू' }, 
  { en: 'Nitin Garg', hi: 'नितिन गर्ग' }, { en: 'Pankaj Aggarwal', hi: 'पंकज अग्रवाल' }, 
  { en: 'Peter Emmanuel', hi: 'पीटर इमैनुएल' }, { en: 'Praveen Sharma', hi: 'प्रवीण शर्मा' }, 
  { en: 'Priya Kaushik', hi: 'प्रिया कौशिक' }, { en: 'Pushpa Bhalla', hi: 'पुष्पा भल्ला' }, 
  { en: 'Ravindr Rastogi', hi: 'रवींद्र रस्तोगी' }, { en: 'Reena Singhal', hi: 'रीना सिंघल' }, 
  { en: 'Renu Aggarwal', hi: 'रेनू अग्रवाल' }, { en: 'Sangeeta Gupta', hi: 'संगीता गुप्ता' }, 
  { en: 'Sanjay Aggarwal', hi: 'संजय अग्रवाल' }, { en: 'Sanskriti Jindal', hi: 'संस्कृति जिंदल' }, 
  { en: 'Sapna Gupta', hi: 'सपना गुप्ता' }, { en: 'Sarita Kohli', hi: 'सरिता कोहली' }, 
  { en: 'Savitri Bhola', hi: 'सावित्री भोला' }, { en: 'Seema Aggarwal', hi: 'सीमा अग्रवाल' }, 
  { en: 'Shashi Goel', hi: 'शशि गोयल' }, { en: 'Sonia Anand', hi: 'सोनिया आनंद' }, 
  { en: 'Suman Jain', hi: 'सुमन जैन' }, { en: 'Suman Nagalia', hi: 'सुमन नगालिया' }, 
  { en: 'Suman Pandey', hi: 'सुमन पांडे' }, { en: 'Sunil Bisth', hi: 'सुनील बिष्ट' }, 
  { en: 'Taruna Singhal', hi: 'तरुणा सिंघल' }, { en: 'Umeshwar Rawat', hi: 'उमेश्वर रावत' }, 
  { en: 'Usha Bansal', hi: 'उषा बंसल' }, { en: 'Usha Nagar', hi: 'उषा नागर' }
];

// Helper to extract initials for the avatars (Always uses English name to keep avatars clean)
const getInitials = (name: string) => {
  return name.replace(/[^a-zA-Z ]/g, "").split(' ').filter(n => n.length > 0).slice(0, 2).map(n => n[0]).join('').toUpperCase();
};

export default function Team() {
  const { language, t } = useLanguage();
  const [selectedMember, setSelectedMember] = useState<MemberDetails | null>(null);

  // FIX 2: Lock background scroll when the profile modal is open
  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function in case the component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedMember]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 80, damping: 15 },
    },
  };

  return (
    <section id="team" className="py-24 bg-gray-50 text-gray-800 overflow-hidden relative">
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
            {language === 'hi' 
              ? 'किसी भी बोर्ड सदस्य की व्यावसायिक पृष्ठभूमि पढ़ने के लिए नीचे उन पर क्लिक करें।' 
              : 'Click on any board member below to read their professional background.'}
          </motion.p>
        </div>

        {/* 1. Core Leadership */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent bg-brand-green-950/5 px-4 py-1.5 rounded-full inline-flex items-center space-x-2">
            <User className="h-3.5 w-3.5 text-brand-accent" />
            <span>{language === 'hi' ? 'कोर नेतृत्व' : 'Core Leadership'}</span>
          </span>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-24"
        >
          {coreLeadership.map((member, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedMember(member)}
              className="group bg-white border border-gray-100 rounded-3xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-green-50 rounded-bl-full -z-10 transition-colors group-hover:bg-brand-green-100/50" />
              <div className="relative w-28 h-28 mx-auto mb-5">
                <div className="absolute inset-0 rounded-full bg-brand-green-100 scale-105 group-hover:scale-110 group-hover:bg-brand-accent transition-all duration-300" />
                <div className="relative rounded-full w-full h-full bg-white border-4 border-white shadow-inner flex items-center justify-center font-display font-bold text-3xl text-brand-green-800">
                  {getInitials(member.name)}
                </div>
              </div>
              <h3 className="font-display font-bold text-lg text-brand-green-950 group-hover:text-brand-green-700 transition-colors duration-200">
                {language === 'hi' ? member.nameHi : member.name}
              </h3>
              <p className="font-display font-semibold text-[11px] uppercase tracking-wider text-brand-accent mt-1.5">
                {language === 'hi' ? member.roleHi : member.role}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* 2. Advisory & Directorate Board */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-3xl shadow-sm p-8 border border-gray-100">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Star className="h-5 w-5 text-brand-accent" />
              <h3 className="text-xl font-bold text-brand-green-950">{language === 'hi' ? 'संरक्षक' : 'Patrons'}</h3>
            </div>
            <ul className="space-y-3 text-center">
              {patrons.map((member, idx) => (
                <li key={idx} onClick={() => setSelectedMember(member)} className="text-gray-600 font-medium hover:text-brand-accent transition-colors cursor-pointer p-2 rounded-lg hover:bg-gray-50">
                  {language === 'hi' ? member.nameHi : member.name}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white rounded-3xl shadow-sm p-8 border border-gray-100">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Shield className="h-5 w-5 text-brand-accent" />
              <h3 className="text-xl font-bold text-brand-green-950">{language === 'hi' ? 'निदेशक' : 'Directors'}</h3>
            </div>
            <ul className="space-y-3 text-center">
              {directors.map((member, idx) => (
                <li key={idx} onClick={() => setSelectedMember(member)} className="text-gray-600 font-medium hover:text-brand-accent transition-colors cursor-pointer p-2 rounded-lg hover:bg-gray-50">
                  {language === 'hi' ? member.nameHi : member.name}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white rounded-3xl shadow-sm p-8 border border-gray-100">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Award className="h-5 w-5 text-brand-accent" />
              <h3 className="text-xl font-bold text-brand-green-950">{language === 'hi' ? 'सलाहकार' : 'Advisors'}</h3>
            </div>
            <ul className="space-y-3 text-center">
              {advisors.map((member, idx) => (
                <li key={idx} onClick={() => setSelectedMember(member)} className="text-gray-600 font-medium hover:text-brand-accent transition-colors cursor-pointer p-2 rounded-lg hover:bg-gray-50">
                  {language === 'hi' ? member.nameHi : member.name}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* 3. Executive Members */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-green-700 bg-brand-green-950/5 px-4 py-1.5 rounded-full inline-flex items-center space-x-2">
            <Users className="h-3.5 w-3.5 text-brand-green-700" />
            <span>{language === 'hi' ? 'कार्यकारी सदस्य' : 'Executive Members'}</span>
          </span>
        </div>
        <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-20">
          {executiveMembers.map((member, idx) => (
            <motion.div key={idx} variants={cardVariants} whileHover={{ y: -3 }} className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm flex items-center space-x-3 group hover:border-brand-green-200">
              <div className="h-8 w-8 rounded-full bg-brand-green-50 flex items-center justify-center text-brand-green-800 font-bold text-xs group-hover:bg-brand-green-100">
                {getInitials(member.en)}
              </div>
              <span className="font-semibold text-sm text-brand-green-950">
                {language === 'hi' ? member.hi : member.en}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* 4. General Members */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-500 bg-gray-100 px-4 py-1.5 rounded-full inline-flex items-center space-x-2">
            <Users className="h-3.5 w-3.5 text-gray-500" />
            <span>{language === 'hi' ? 'फाउंडेशन के सदस्य' : 'Foundation Members'}</span>
          </span>
        </div>
        <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {generalMembers.map((member, idx) => (
            <motion.div key={idx} variants={cardVariants} className="bg-white border border-gray-100 p-3 rounded-lg text-center shadow-sm text-xs sm:text-sm font-medium text-gray-600 hover:text-brand-green-800 hover:bg-brand-green-50 transition-colors cursor-default">
              {language === 'hi' ? member.hi : member.en}
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Member Profile Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-brand-green-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              className="bg-white w-full max-w-md rounded-3xl p-8 relative shadow-2xl border border-gray-100 text-center"
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-800 transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
              
              <div className="w-24 h-24 mx-auto bg-brand-green-50 rounded-full flex items-center justify-center font-display font-bold text-3xl text-brand-green-800 mb-6 border-4 border-white shadow-sm">
                {getInitials(selectedMember.name)}
              </div>
              
              <h3 className="text-2xl font-display font-bold text-brand-green-950 mb-1">
                {language === 'hi' ? selectedMember.nameHi : selectedMember.name}
              </h3>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-accent mb-6">
                {language === 'hi' ? selectedMember.roleHi : selectedMember.role}
              </p>
              
              <div className="h-px w-12 bg-gray-200 mx-auto mb-6" />
              
              <p className="text-gray-600 font-sans leading-relaxed text-sm sm:text-base">
                {language === 'hi' ? selectedMember.bioHi : selectedMember.bio}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}