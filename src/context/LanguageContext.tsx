import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav Items
    'nav.home': 'Home',
    'nav.initiatives': 'Our Initiatives',
    'nav.impact': 'Our Impact',
    'nav.gallery': 'Gallery',
    'nav.volunteer': 'Volunteer',
    'nav.contact': 'Contact',
    'nav.support': 'Support Our Cause',
    'nav.donate': 'Support Our Cause',
    'nav.pastEvents': 'Past Events',
    'nav.upcomingEvents': 'Upcoming Campaigns',
    'nav.ourTeam': 'Our Team',
    'nav.causes': 'Campaigns',

    // Hero Section
    'hero.badge': 'Sewa Me Sadaiv Tatpar • Dedicated Always to Care',
    'hero.title': 'Empowering Communities, Transforming Lives.',
    'hero.desc': 'Dedicated to bridging gaps in education, health, and gender equality across Uttarakhand.',
    'hero.ctaJoin': 'Volunteer With Us',
    'hero.ctaImpact': 'Discover Our Projects',
    'hero.scroll': 'Scroll Down',

    // Hero Stats
    'stat.diagnosed': '12,000+',
    'stat.diagnosedLabel': 'Children Educated',
    'stat.purifiers': '4,500+',
    'stat.purifiersLabel': 'Women Empowered',
    'stat.schools': '250+',
    'stat.schoolsLabel': 'Awareness Campaigns',
    'stat.integrity': '1,500+',
    'stat.integrityLabel': 'Youth Volunteers',

    // About & Vision Section
    'about.heading': 'Who We Are',
    'about.title': 'Introducing Pratham Shvaas Foundation',
    'about.desc': 'Pratham Shvaas Foundation is a grassroots non-profit organization registered in Uttarakhand, India, dedicated to making high-impact, positive shifts in healthcare, educational access, and livelihood empowerment. Built on the pillar of compassionate, transparent execution, we empower neglected and remote Himalayan blocks to overcome socio-economic challenges and build sustainable communities.',
    'about.visionTitle': 'Our Vision',
    'about.visionDesc': 'To build a healthy, clean, literate, and equitable Uttarakhand where every resident possesses the essential resources, clean environment, and quality education to live with dignity and equal opportunity.',
    'about.goalTitle': 'Our Goals & Mission',
    'about.goalDesc': 'Our immediate and long-term goal is to bridge systemic divides by implementing localized, direct initiatives across four key domains: primary healthcare diagnostics, scholastic kit enablement, women vocational tailoring, and youth leadership training.',
    'about.boardTitle': 'Board of Directors',
    'about.boardSub': 'The governing body responsible for strategy, governance, policy formulation, and stewardship of Pratham Shvaas Foundation.',
    'about.generalTitle': 'General Members & Field Staff',
    'about.generalSub': 'The dedicated execution force, working hand-in-hand with grassroots blocks across Uttarakhand.',
    'about.yearlyTitle': 'Chronological Progress',
    'about.yearlySub': 'Explore our year-by-year chronological journey of community campaigns, educational drives, and healthcare initiatives with corresponding field photos.',

    // Core Initiatives Section
    'causes.heading': 'Our Core Initiatives',
    'causes.subheading': 'Empowering grassroots communities in Uttarakhand through structured developmental programs aligned with global impact standards.',
    'causes.edu.title': 'Quality Education',
    'causes.edu.desc': 'Bridging educational gaps and fostering digital literacy for underprivileged children.',
    'causes.health.title': 'Health & Hygiene',
    'causes.health.desc': 'Grassroots awareness campaigns for sanitation and disease prevention.',
    'causes.women.title': 'Women Empowerment',
    'causes.women.desc': 'Skill-building and financial literacy for self-reliance.',
    'causes.youth.title': 'Youth Engagement',
    'causes.youth.desc': 'Fostering community leadership and social responsibility.',

    // Impact Section
    'impact.heading': 'Our Impact Metrics',
    'impact.subheading': 'Our progress and metrics of change driving systemic equity across Uttarakhand.',
    'impact.counter1': 'Children Educated',
    'impact.counter2': 'Women Empowered',
    'impact.counter3': 'Awareness Campaigns Run',
    'impact.counter4': 'Youth Volunteers Mobilized',

    // Past Events Gallery Section
    'gallery.heading': 'Moments of Hope & Action',
    'gallery.subheading': 'A dynamic visual diary of our active educational drives, health camps, and women-led initiatives in local districts.',
    'gallery.loadMore': 'View Full Gallery',
    'gallery.showLess': 'Show Less',

    // Past Events Section
    'past.heading': 'Chronicles of Hope & Action',
    'past.subheading': 'Our past initiatives write the story of our dedication. From local screening clinics to class ventilation initiatives, we measure our milestones in healthy smiles and clean environments.',
    'past.ctaBoxTitle': "Let's Co-Create Sustainable Atmosphere Safeguards",
    'past.ctaBoxSub': 'Every past milestone serves as a proof of concept. Our future campaigns require volunteers, medical experts, environmental educators, and active community participation.',
    'past.ctaBoxBtn': 'Learn How to Volunteer',

    // Upcoming Events Section
    'upcoming.heading': 'Upcoming Campaigns & Workshops',
    'upcoming.subheading': 'Mark your calendar and lend a helping hand. Join our future camps, vocational drives, or educational campaigns in Uttarakhand.',
    'upcoming.btn': 'Register as Volunteer',

    // Volunteer Form (Join Our Mission)
    'register.title': 'Join Our Mission',
    'register.desc': 'Register below to coordinate, educate, or support our upcoming community campaigns.',
    'register.nameField': 'Your Full Name *',
    'register.emailField': 'Email Address *',
    'register.phoneField': 'Phone Number *',
    'register.interestField': 'Area of Interest *',
    'register.interestPlaceholder': 'Select your interest...',
    'register.eventField': 'Choose an Upcoming Campaign *',
    'register.selectPlaceholder': 'Select an upcoming activity...',
    'register.btnSend': 'Register as Volunteer',
    'register.btnSending': 'Submitting...',
    'register.btnSent': 'Success!',
    'register.successText': 'You have successfully registered! Our Uttarakhand camp coordinator will contact you shortly.',

    // Team Section
    'team.heading': 'Our Core Team',
    'team.subheading': 'Bridging gaps in education, health, and gender equality across Uttarakhand through professional execution and compassionate service.',
    'team.footnote': 'Supported by an active network of 120+ student volunteers and local community organizers.',

    // Contact Section
    'contact.heading': 'Get in Touch',
    'contact.subheading': 'Have inquiries about our programs, health drives, or looking to partner? Let us connect and empower communities together.',
    'contact.hq': 'Pratham Shvaas HQ',
    'contact.hqDesc': 'Located in Uttarakhand, coordinates grassroots relief and education programs in municipal and rural blocks.',
    'contact.locationLabel': 'Our Headquarters',
    'contact.location': 'Pratham Shvaas Foundation, 42 Canal Road, Jakhan, Dehradun, Uttarakhand, 248001',
    'contact.phoneLabel': 'Phone & Helpdesk',
    'contact.emailLabel': 'Official Email',
    'contact.response': 'Response Time: Typically within 24 hours',
    'contact.nameField': 'Full Name *',
    'contact.emailField': 'Email Address *',
    'contact.interestLabel': 'Area of Interest *',
    'contact.messageField': 'Your Message *',
    'contact.btnSend': 'Send Message',
    'contact.btnSending': 'Delivering Message...',
    'contact.btnSent': 'Submitted Successfully!',
    'contact.successTitle': 'Thank you for connecting!',
    'contact.successText': 'Our administrative team has received your query. We will evaluate and reply to your specified email address shortly.',

    // Donate Modal
    'donate.title': 'Support Our Cause',
    'donate.subtitle': 'Help us sponsor scholastic kits, sanitation drives, skill workshops, and empower rural communities in Uttarakhand.',
    'donate.select': 'Select Contribution Amount (INR)',
    'donate.custom': 'Custom Contribution Amount (INR)',
    'donate.pay': 'Process Securely',
    'donate.successTitle': 'Contribution Received!',
    'donate.successText': 'Thank you for your generous support. A confirmation receipt has been dispatched to your email address. सेवा में सदैव तत्पर।',

    // Footer Section
    'footer.brandSub': 'Dedicated to bridging gaps in education, health, and gender equality across Uttarakhand. Empowering grassroots communities for a brighter tomorrow.',
    'footer.regTag': 'NGO Registration No: S/8432/NGO/Uttarakhand/2026',
    'footer.navHeader': 'Quick Navigation',
    'footer.careHeader': 'Our Core Domains',
    'footer.domains': 'Quality Education|Health & Hygiene Camps|Women Skill-Building|Youth Leadership Camps|Digital Literacy Initiatives',
    'footer.updateHeader': 'Empowerment Newsletter',
    'footer.updateSub': 'Subscribe to our quarterly reports to stay updated with health camps, scholastic drives, and community success stories.',
    'footer.placeholder': 'Enter email address',
    'footer.join': 'Join',
    'footer.backTop': 'Back to Top',
    'footer.copyright': '© 2026 Pratham Shvaas Foundation. सेवा में सदैव तत्पर.',
    'footer.motto': 'सेवा में सदैव तत्पर • Dedicated Always to Care'
  },
  hi: {
    // Nav Items
    'nav.home': 'मुख्य पृष्ठ',
    'nav.initiatives': 'हमारी पहलें',
    'nav.impact': 'हमारा प्रभाव',
    'nav.gallery': 'गैलरी',
    'nav.volunteer': 'स्वयंसेवक',
    'nav.contact': 'संपर्क करें',
    'nav.support': 'सहयोग दें',
    'nav.donate': 'सहयोग दें',
    'nav.pastEvents': 'पिछली गतिविधियाँ',
    'nav.upcomingEvents': 'आगामी अभियान',
    'nav.ourTeam': 'हमारी टीम',
    'nav.causes': 'अभियान',

    // Hero Section
    'hero.badge': 'सेवा में सदैव तत्पर • Dedicated Always to Care',
    'hero.title': 'समुदायों का सशक्तिकरण, जीवन का रूपांतरण।',
    'hero.desc': 'उत्तराखंड में शिक्षा, स्वास्थ्य और लैंगिक समानता के अंतराल को पाटने के लिए समर्पित।',
    'hero.ctaJoin': 'स्वयंसेवक बनें',
    'hero.ctaImpact': 'परियोजनाएं देखें',
    'hero.scroll': 'नीचे स्क्रॉल करें',

    // Hero Stats
    'stat.diagnosed': '12,000+',
    'stat.diagnosedLabel': 'शिक्षित बच्चे',
    'stat.purifiers': '4,500+',
    'stat.purifiersLabel': 'सशक्त महिलाएं',
    'stat.schools': '250+',
    'stat.schoolsLabel': 'आयोजित जागरूकता अभियान',
    'stat.integrity': '1,500+',
    'stat.integrityLabel': 'युवा स्वयंसेवक',

    // About & Vision Section
    'about.heading': 'हम कौन हैं',
    'about.title': 'प्रथम श्वास फाउंडेशन का परिचय',
    'about.desc': 'प्रथम श्वास फाउंडेशन उत्तराखंड, भारत में पंजीकृत एक जमीनी स्तर का गैर-लाभकारी संगठन है, जो स्वास्थ्य सेवा, शैक्षिक पहुंच और आजीविका सशक्तिकरण में उच्च प्रभाव वाले सकारात्मक बदलाव लाने के लिए समर्पित है। दयालुता और पारदर्शी संचालन के स्तंभों पर निर्मित, हम उपेक्षित और सुदूर हिमालयी क्षेत्रों को सामाजिक-आर्थिक चुनौतियों से उबरने और आत्मनिर्भर समुदायों के निर्माण के लिए सशक्त बनाते हैं।',
    'about.visionTitle': 'हमारा दृष्टिकोण (विजन)',
    'about.visionDesc': 'एक स्वस्थ, स्वच्छ, साक्षर और न्यायसंगत उत्तराखंड का निर्माण करना जहां प्रत्येक निवासी के पास सम्मानजनक जीवन और समान अवसरों के साथ जीने के लिए बुनियादी संसाधन, स्वच्छ वातावरण और गुणवत्तापूर्ण शिक्षा उपलब्ध हो।',
    'about.goalTitle': 'हमारा लक्ष्य और मिशन',
    'about.goalDesc': 'हमारा तात्कालिक और दीर्घकालिक लक्ष्य चार मुख्य डोमेन में स्थानीयकृत, प्रत्यक्ष पहलों को लागू करके व्यवस्थागत विभाजन को पाटना है: प्राथमिक स्वास्थ्य सेवा निदान, शैक्षिक किट वितरण, महिला व्यावसायिक सिलाई केंद्र, और युवा नेतृत्व प्रशिक्षण।',
    'about.boardTitle': 'शासकीय बोर्ड के सदस्य',
    'about.boardSub': 'प्रथम श्वास फाउंडेशन की रणनीति, शासन, नीति निर्धारण और प्रबंधन के लिए जिम्मेदार शासी निकाय।',
    'about.generalTitle': 'सामान्य सदस्य एवं मैदानी कर्मचारी',
    'about.generalSub': 'समर्पित जमीनी टीम, जो उत्तराखंड के विभिन्न ब्लॉकों में सीधे सेवा और समन्वय का कार्य करती है।',
    'about.yearlyTitle': 'वर्ष-दर-वर्ष हमारा सफर',
    'about.yearlySub': 'क्षेत्रीय तस्वीरों और वास्तविक आंकड़ों के साथ सामुदायिक अभियानों, शैक्षिक पहलों और स्वास्थ्य सेवा शिविरों के हमारे वार्षिक सफर को देखें।',

    // Core Initiatives Section
    'causes.heading': 'हमारी मुख्य पहलें',
    'causes.subheading': 'वैश्विक प्रभाव मानकों के अनुरूप संरचित विकास कार्यक्रमों के माध्यम से उत्तराखंड में जमीनी स्तर के समुदायों को सशक्त बनाना।',
    'causes.edu.title': 'गुणवत्तापूर्ण शिक्षा',
    'causes.edu.desc': 'वंचित बच्चों के लिए शैक्षिक अंतराल को पाटना और डिजिटल साक्षरता को बढ़ावा देना।',
    'causes.health.title': 'स्वास्थ्य और स्वच्छता',
    'causes.health.desc': 'स्वच्छता और बीमारी की रोकथाम के लिए जमीनी स्तर पर जागरूकता अभियान।',
    'causes.women.title': 'महिला सशक्तिकरण',
    'causes.women.desc': 'आत्मनिर्भरता के लिए कौशल विकास और वित्तीय साक्षरता।',
    'causes.youth.title': 'युवा भागीदारी',
    'causes.youth.desc': 'सामुदायिक नेतृत्व और सामाजिक जिम्मेदारी को बढ़ावा देना।',

    // Impact Section
    'impact.heading': 'हमारे प्रभाव के आंकड़े',
    'impact.subheading': 'उत्तराखंड में व्यवस्थागत समानता लाने की दिशा में हमारी प्रगति और परिवर्तन के आंकड़े।',
    'impact.counter1': 'शिक्षित बच्चे',
    'impact.counter2': 'सशक्त महिलाएं',
    'impact.counter3': 'आयोजित जागरूकता अभियान',
    'impact.counter4': 'प्रेरित युवा स्वयंसेवक',

    // Past Events Gallery Section
    'gallery.heading': 'आशा और कर्म के क्षण',
    'gallery.subheading': 'स्थानीय जिलों में हमारे सक्रिय शैक्षिक अभियानों, स्वास्थ्य शिविरों और महिलाओं के नेतृत्व वाले कार्यक्रमों की एक गतिशील दृश्य डायरी।',
    'gallery.loadMore': 'पूरी गैलरी देखें',
    'gallery.showLess': 'कम दिखाएं',

    // Past Events Section
    'past.heading': 'आशा और सेवा की गाथाएं',
    'past.subheading': 'हमारी पिछली पहल हमारे समर्पण की कहानी बयां करती हैं। स्थानीय स्क्रीनिंग क्लीनिकों से लेकर कक्षा वेंटिलेशन प्रयासों तक, हम अपने मील के पत्थर को बच्चों की मुस्कान और साफ हवा से मापते हैं।',
    'past.ctaBoxTitle': 'आइए मिलकर स्वच्छ वातावरण के सुरक्षा कवच बनाएं',
    'past.ctaBoxSub': 'हर पिछला मील का पत्थर हमारे प्रयासों का प्रमाण है। हमारे भविष्य के अभियानों में स्वयंसेवकों, चिकित्सा विशेषज्ञों, पर्यावरण शिक्षकों और सक्रिय सामुदायिक भागीदारी की आवश्यकता है।',
    'past.ctaBoxBtn': 'स्वयंसेवक कैसे बनें, जानें',

    // Upcoming Events Section
    'upcoming.heading': 'आगामी अभियान और कार्यशालाएं',
    'upcoming.subheading': 'अपने कैलेंडर को चिह्नित करें और मदद के लिए हाथ बढ़ाएं। उत्तराखंड में हमारे भावी शिविरों, व्यावसायिक अभियानों या शैक्षिक अभियानों में शामिल हों।',
    'upcoming.btn': 'स्वयंसेवक के रूप में पंजीकरण करें',

    // Volunteer Form (Join Our Mission)
    'register.title': 'हमारे मिशन से जुड़ें',
    'register.desc': 'हमारे आगामी आगामी सामुदायिक अभियानों में समन्वय, शिक्षा या सहायता के लिए नीचे पंजीकरण करें।',
    'register.nameField': 'आपका पूरा नाम *',
    'register.emailField': 'ईमेल पता *',
    'register.phoneField': 'फोन नंबर *',
    'register.interestField': 'रुचि का क्षेत्र *',
    'register.interestPlaceholder': 'अपनी रुचि चुनें...',
    'register.eventField': 'आगामी अभियान चुनें *',
    'register.selectPlaceholder': 'एक आगामी गतिविधि चुनें...',
    'register.btnSend': 'स्वयंसेवक पंजीकरण',
    'register.btnSending': 'दर्ज किया जा रहा है...',
    'register.btnSent': 'सफल!',
    'register.successText': 'आपने सफलतापूर्वक पंजीकरण कर लिया है! हमारे उत्तराखंड अभियान समन्वयक जल्द ही आपसे संपर्क करेंगे।',

    // Team Section
    'team.heading': 'हमारी कोर टीम',
    'team.subheading': 'पेशेवर निष्पादन और करुणामय सेवा के माध्यम से उत्तराखंड में शिक्षा, स्वास्थ्य और लैंगिक समानता के अंतराल को पाटना।',
    'team.footnote': '120+ सक्रिय छात्र स्वयंसेवकों और स्थानीय सामुदायिक आयोजकों के एक समर्पित नेटवर्क द्वारा समर्थित।',

    // Contact Section
    'contact.heading': 'संपर्क में रहें',
    'contact.subheading': 'क्या आपके पास हमारे कार्यक्रमों, स्वास्थ्य अभियानों के बारे में कोई प्रश्न हैं, या साझेदारी की संभावनाएं तलाश रहे हैं? आइए मिलकर हाथ मिलाएं और समुदायों को सशक्त बनाएं।',
    'contact.hq': 'प्रथम श्वास मुख्यालय',
    'contact.hqDesc': 'उत्तराखंड में स्थित, विभिन्न नगर पालिकाओं और ग्रामीण ब्लॉकों में जमीनी राहत और शिक्षा कार्यक्रमों का समन्वय करता है।',
    'contact.locationLabel': 'हमारा मुख्यालय',
    'contact.location': 'प्रथम श्वास फाउंडेशन, 42 कनाल रोड, जाखन, देहरादून, उत्तराखंड, 248001',
    'contact.phoneLabel': 'फोन और हेल्पडेस्क',
    'contact.emailLabel': 'आधिकारिक ईमेल',
    'contact.response': 'प्रतिक्रिया समय: आमतौर पर 24 घंटे के भीतर',
    'contact.nameField': 'पूरा नाम *',
    'contact.emailField': 'ईमेल पता *',
    'contact.interestLabel': 'रुचि का क्षेत्र *',
    'contact.messageField': 'आपका संदेश *',
    'contact.btnSend': 'संदेश भेजें',
    'contact.btnSending': 'संदेश भेजा जा रहा है...',
    'contact.btnSent': 'सफलतापूर्वक सबमिट किया गया!',
    'contact.successTitle': 'हमसे जुड़ने के लिए धन्यवाद!',
    'contact.successText': 'हमारी प्रशासनिक टीम को आपका प्रश्न प्राप्त हो गया है। हम विवरण का विश्लेषण करेंगे और आपके निर्दिष्ट ईमेल पते पर शीघ्र ही उत्तर देंगे।',

    // Donate Modal
    'donate.title': 'सहयोग दें',
    'donate.subtitle': 'उत्तराखंड में शैक्षिक किट, स्वच्छता अभियान, कौशल कार्यशालाओं को प्रायोजित करने और ग्रामीण समुदायों को सशक्त बनाने में हमारी सहायता करें।',
    'donate.select': 'योगदान राशि चुनें (INR)',
    'donate.custom': 'कस्टम योगदान राशि (INR)',
    'donate.pay': 'सुरक्षित भुगतान करें',
    'donate.successTitle': 'योगदान प्राप्त हुआ!',
    'donate.successText': 'आपके उदार समर्थन के लिए धन्यवाद। आपके ईमेल पते पर एक पुष्टि रसीद भेज दी गई है। सेवा में सदैव तत्पर।',

    // Footer Section
    'footer.brandSub': 'उत्तराखंड में शिक्षा, स्वास्थ्य और लैंगिक समानता के अंतराल को पाटने के लिए समर्पित। एक उज्जवल कल के लिए जमीनी स्तर के समुदायों को सशक्त बनाना।',
    'footer.regTag': 'पंजीकृत गैर-लाभकारी संस्था (NGO) संख्या: S/8432/NGO/Uttarakhand/2026',
    'footer.navHeader': 'त्वरित नेविगेशन',
    'footer.careHeader': 'हमारे मुख्य क्षेत्र',
    'footer.domains': 'गुणवत्तापूर्ण शिक्षा|स्वास्थ्य एवं स्वच्छता शिविर|महिला कौशल विकास|युवा नेतृत्व शिविर|डिजिटल साक्षरता पहल',
    'footer.updateHeader': 'सशक्तिकरण समाचार पत्र',
    'footer.updateSub': 'स्वास्थ्य शिविरों, शैक्षिक अभियानों और सामुदायिक सफलता की कहानियों से अपडेट रहने के लिए हमारे त्रैमासिक समाचार पत्र की सदस्यता लें।',
    'footer.placeholder': 'ईमेल पता दर्ज करें',
    'footer.join': 'जुड़ें',
    'footer.backTop': 'वापस ऊपर जाएं',
    'footer.copyright': '© 2026 प्रथम श्वास फाउंडेशन। सेवा में सदैव तत्पर.',
    'footer.motto': 'सेवा में सदैव तत्पर • Dedicated Always to Care'
  }
};

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('app_language');
    return (saved === 'hi' || saved === 'en') ? saved : 'en';
  });

  useEffect(() => {
    localStorage.setItem('app_language', language);
  }, [language]);

  const t = (key: string): string => {
    const dict = translations[language];
    return dict[key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
