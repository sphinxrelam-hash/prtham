import { PastEvent, UpcomingEvent, TeamMember, GeneralMember, YearlyEvent } from './types';

export const pastEvents: PastEvent[] = [
  {
    id: 'past-1',
    title: 'Pediatric Health & Lung Screening Camp',
    titleHi: 'बाल स्वास्थ्य एवं फेफड़ा जांच शिविर',
    description: 'Provided free respiratory check-ups, specialist pediatric consultations, and essential spirometry screenings to over 350 children in underserved urban neighborhoods.',
    descriptionHi: 'वंचित शहरी बस्तियों के 350 से अधिक बच्चों को मुफ्त श्वसन जांच, विशेषज्ञ बाल रोग परामर्श और आवश्यक स्पाइरोमेट्री जांच प्रदान की गई।',
    date: 'April 2026',
    dateHi: 'अप्रैल 2026',
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800',
    category: 'Healthcare Support',
    categoryHi: 'स्वास्थ्य सेवा सहायता',
    impact: '350+ Screenings Conducted',
    impactHi: '350+ फेफड़े की जांचें संपन्न'
  },
  {
    id: 'past-2',
    title: 'School Clean Air & PM2.5 Monitoring Campaign',
    titleHi: 'स्कूल स्वच्छ हवा एवं PM2.5 निगरानी अभियान',
    description: 'Deployed air monitoring sensors and low-cost eco-purifiers in local public classrooms, coupled with interactive breathing hygiene educational workshops for pupils.',
    descriptionHi: 'स्थानीय सरकारी कक्षाओं में वायु निगरानी सेंसर और किफायती पर्यावरण-अनुकूल प्यूरीफायर लगाए गए, साथ ही छात्रों के लिए श्वसन स्वच्छता कार्यशालाएं आयोजित की गईं।',
    date: 'May 2026',
    dateHi: 'मई 2026',
    imageUrl: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800',
    category: 'Educational Outreach',
    categoryHi: 'शैक्षिक आउटरीच',
    impact: '12 Schools Empowered',
    impactHi: '12 स्कूलों को सशक्त बनाया'
  },
  {
    id: 'past-3',
    title: 'Pratham Shvaas Urban Canopy Drive',
    titleHi: 'प्रथम श्वास अर्बन कैनोपी वृक्षारोपण अभियान',
    description: 'Mobilized over 150 student volunteers to plant 500+ indigenous, high-oxygenating saplings in high-pollution buffer zones to build natural air barriers.',
    descriptionHi: 'प्रदूषण प्रभावित क्षेत्रों में प्राकृतिक वायु अवरोधक बनाने के लिए 150 से अधिक छात्र स्वयंसेवकों को 500+ स्वदेशी पौधे लगाने हेतु प्रेरित किया गया।',
    date: 'June 2026',
    dateHi: 'जून 2026',
    imageUrl: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=800',
    category: 'Green Environment',
    categoryHi: 'हरित पर्यावरण',
    impact: '500+ Saplings Planted',
    impactHi: '500+ पौधे लगाए गए'
  },
  {
    id: 'past-4',
    title: 'Surgical Nebulizer & Relief Kit Distribution',
    titleHi: 'नेबुलाइज़र और राहत किट वितरण कार्य',
    description: 'Partnered with civil medical centers to distribute emergency pediatric nebulizers, masks, and environmental health kits to vulnerable families in industrial zones.',
    descriptionHi: 'औद्योगिक क्षेत्रों में कमजोर परिवारों को आपातकालीन बाल रोग नेबुलाइज़र, मास्क और पर्यावरणीय स्वास्थ्य किट वितरित करने के लिए नागरिक चिकित्सा केंद्रों के साथ भागीदारी की।',
    date: 'February 2026',
    dateHi: 'फरवरी 2026',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    category: 'Emergency Relief',
    categoryHi: 'आपातकालीन राहत सेवा',
    impact: '80+ Medical Kits Gifted',
    impactHi: '80+ चिकित्सा किट वितरित'
  }
];

export const upcomingEvents: UpcomingEvent[] = [
  {
    id: 'up-1',
    title: 'Free Childhood Asthma & Pulmonology Checkup Drive',
    titleHi: 'निःशुल्क बाल अस्थमा एवं पल्मोनोलॉजी जांच शिविर',
    description: 'A comprehensive free health initiative featuring senior pediatric pulmonologists, diagnostic tests, pediatric inhaler guidance, and free medical distribution.',
    descriptionHi: 'वरिष्ठ बाल रोग पल्मोनोलॉजिस्ट, नैदानिक ​​परीक्षण, पीडियाट्रिक इनहेलर मार्गदर्शन और मुफ्त दवा वितरण से युक्त एक व्यापक स्वास्थ्य पहल।',
    date: 'July 15, 2026',
    dateHi: '15 जुलाई, 2026',
    location: 'Saraswati Community Center, Block B, New Delhi',
    locationHi: 'सरस्वती सामुदायिक केंद्र, ब्लॉक बी, नई दिल्ली',
    time: '09:00 AM - 04:00 PM',
    timeHi: 'सुबह 09:00 बजे - शाम 04:00 बजे',
    imageUrl: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'up-2',
    title: 'Clean Air Youth Advocate Training & Workshop',
    titleHi: 'स्वच्छ हवा युवा अधिवक्ता प्रशिक्षण कार्यशाला',
    description: 'A dedicated boot camp empowering local youth with air quality monitoring toolkits, advocacy strategies, and community action guidelines.',
    descriptionHi: 'स्थानीय युवाओं को वायु गुणवत्ता निगरानी टूलकिट, वकालत रणनीतियों और सामुदायिक कार्रवाई दिशानिर्देशों के साथ सशक्त बनाने वाला एक समर्पित बूट कैंप।',
    date: 'August 12, 2026',
    dateHi: '12 अगस्त, 2026',
    location: 'City Town Hall, Seminar Hall A',
    locationHi: 'सिटी टाउन हॉल, सेमिनार हॉल ए',
    time: '10:30 AM - 02:00 PM',
    timeHi: 'सुबह 10:30 बजे - दोपहर 02:00 बजे',
    imageUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'up-3',
    title: 'Industrial Buffer Zone Afforestation Campaign',
    titleHi: 'औद्योगिक बफर जोन वनीकरण अभियान',
    description: 'Join hands with community members to establish a green micro-forest barrier alongside the industrial sector line to trap particulate dust.',
    descriptionHi: 'पार्टिकुलेट डस्ट को रोकने के लिए औद्योगिक क्षेत्र की सीमा के साथ एक हरित सूक्ष्म वन अवरोधक स्थापित करने हेतु समुदाय के सदस्यों के साथ हाथ मिलाएं।',
    date: 'September 05, 2026',
    dateHi: '05 सितंबर, 2026',
    location: 'Sector 4 Industrial Peripheral green strip',
    locationHi: 'सेक्टर 4 औद्योगिक परिधीय हरित पट्टी क्षेत्र',
    time: '07:30 AM - 12:00 PM',
    timeHi: 'सुबह 07:30 बजे - दोपहर 12:00 बजे',
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800'
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Dr. Alok Verma',
    nameHi: 'डॉ. आलोक वर्मा',
    role: 'President & Co-Founder',
    roleHi: 'अध्यक्ष एवं सह-संस्थापक (बाल चिकित्सा पल्मोनोलॉजिस्ट)',
    bio: 'With over 16 years of pediatric pulmonary experience, Dr. Verma leads our healthcare campaigns and asthma relief programs across Uttarakhand.',
    bioHi: 'पीडियाट्रिक पल्मोनरी क्षेत्र में 16 से अधिक वर्षों के अनुभव के साथ, डॉ. वर्मा उत्तराखंड में स्वास्थ्य अभियानों और अस्थमा राहत कार्यक्रमों का नेतृत्व करते हैं।',
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400',
    socials: {
      twitter: 'https://twitter.com/dralokverma',
      linkedin: 'https://linkedin.com/in/dr-alok-verma-pulm',
      email: 'alok.verma@prathamshvaas.org'
    }
  },
  {
    id: 'team-2',
    name: 'Meera Deshmukh',
    nameHi: 'मीरा देशमुख',
    role: 'Vice President & Executive Director',
    roleHi: 'उपाध्यक्ष एवं कार्यकारी निदेशक (पर्यावरण वैज्ञानिक)',
    bio: 'An environmental scientist (M.Sc. IIT Bombay) who oversees our administrative operations, environmental mapping, and clean air policy advocacy.',
    bioHi: 'एक पर्यावरण वैज्ञानिक (एम.एससी. आईआईटी बॉम्बे) जो प्रशासनिक संचालन, पर्यावरण मानचित्रण और स्वच्छ हवा नीति वकालत की देखरेख करती हैं।',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    socials: {
      twitter: 'https://twitter.com/meeradeshmukh',
      linkedin: 'https://linkedin.com/in/meera-deshmukh-env',
      email: 'meera@prathamshvaas.org'
    }
  },
  {
    id: 'team-3',
    name: 'Rajesh Kumar',
    nameHi: 'राजेश कुमार',
    role: 'General Secretary',
    roleHi: 'महासचिव (सामुदायिक लामबंदी प्रमुख)',
    bio: 'An experienced grass-roots activist coordinating our rural education cells, mobile screening caravans, and government administrative relations.',
    bioHi: 'एक अनुभवी जमीनी कार्यकर्ता जो हमारे ग्रामीण शिक्षा प्रभागों, मोबाइल स्वास्थ्य जांच कारवां और सरकारी प्रशासनिक संबंधों का समन्वय करते हैं।',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    socials: {
      linkedin: 'https://linkedin.com/in/rajesh-kumar-mobilize',
      email: 'rajesh@prathamshvaas.org'
    }
  },
  {
    id: 'team-4',
    name: 'Anjali Sen',
    nameHi: 'अंजलि सेन',
    role: 'Treasurer & Lead Educator',
    roleHi: 'कोषाध्यक्ष एवं मुख्य पर्यावरण शिक्षक',
    bio: 'Financial analyst and curriculum developer designing scholastic modules, managing NGO finances with transparency, and directing school workshops.',
    bioHi: 'वित्तीय विश्लेषक और पाठ्यक्रम डेवलपर जो शैक्षिक मॉड्यूल डिजाइन करती हैं, पारदर्शिता के साथ एनजीओ के वित्त का प्रबंधन करती हैं और स्कूल कार्यशालाओं का निर्देशन करती हैं।',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    socials: {
      twitter: 'https://twitter.com/anjalisen_edu',
      linkedin: 'https://linkedin.com/in/anjali-sen-education',
      email: 'anjali@prathamshvaas.org'
    }
  },
  {
    id: 'team-5',
    name: 'Dr. Vikram Bhandari',
    nameHi: 'डॉ. विक्रम भंडारी',
    role: 'Governing Board Member',
    roleHi: 'शासकीय बोर्ड सदस्य (सार्वजनिक स्वास्थ्य विशेषज्ञ)',
    bio: 'Public Health expert (MD, Community Medicine) offering specialized policy formulation and steering rural sanitation-hygiene initiatives.',
    bioHi: 'सार्वजनिक स्वास्थ्य विशेषज्ञ (एमडी, कम्युनिटी मेडिसिन) जो नीति निर्माण और ग्रामीण स्वच्छता-स्वच्छता पहलों के मार्गदर्शन में विशेषज्ञता प्रदान करते हैं।',
    imageUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400',
    socials: {
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 'team-6',
    name: 'Sunita Rawat',
    nameHi: 'सुनीता रावत',
    role: 'Governing Board Member',
    roleHi: 'शासकीय बोर्ड सदस्य (महिला सशक्तिकरण प्रमुख)',
    bio: 'Grassroots organizer who leads our skill incubation center, vocational tailoring drives, and self-help group networks.',
    bioHi: 'जमीनी स्तर की आयोजक जो हमारे कौशल ऊष्मायन केंद्र, व्यावसायिक सिलाई अभियान और स्वयं सहायता समूह नेटवर्क का नेतृत्व करती हैं।',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
    socials: {
      linkedin: 'https://linkedin.com'
    }
  }
];

export const generalMembers: GeneralMember[] = [
  {
    id: 'gen-1',
    name: 'Amit Negi',
    nameHi: 'अमित नेगी',
    role: 'District Project Coordinator (Dehradun)',
    roleHi: 'जिला परियोजना समन्वयक (देहरादून)',
    joinedYear: '2024'
  },
  {
    id: 'gen-2',
    name: 'Pooja Bhatt',
    nameHi: 'पूजा भट्ट',
    role: 'Digital Literacy Trainer',
    roleHi: 'डिजिटल साक्षरता प्रशिक्षक',
    joinedYear: '2024'
  },
  {
    id: 'gen-3',
    name: 'Manoj Bisht',
    nameHi: 'मनोज बिष्ट',
    role: 'Logistics & Relief Officer',
    roleHi: 'रसद एवं राहत अधिकारी',
    joinedYear: '2025'
  },
  {
    id: 'gen-4',
    name: 'Deepa Devi',
    nameHi: 'दीपा देवी',
    role: 'Women Livelihood Skill Trainer',
    roleHi: 'महिला आजीविका कौशल प्रशिक्षक',
    joinedYear: '2024'
  },
  {
    id: 'gen-5',
    name: 'Kamal Thapa',
    nameHi: 'कमल थापा',
    role: 'Community Health Advocate',
    roleHi: 'सामुदायिक स्वास्थ्य अधिवक्ता',
    joinedYear: '2025'
  },
  {
    id: 'gen-6',
    name: 'Preeti Sharma',
    nameHi: 'प्रीति शर्मा',
    role: 'Youth Volunteer Mobilizer',
    roleHi: 'युवा स्वयंसेवक लामबंदी प्रमुख',
    joinedYear: '2024'
  },
  {
    id: 'gen-7',
    name: 'Rahul Rawat',
    nameHi: 'राहुल रावत',
    role: 'Air Quality Field Technician',
    roleHi: 'वायु गुणवत्ता क्षेत्र तकनीशियन',
    joinedYear: '2025'
  },
  {
    id: 'gen-8',
    name: 'Neha Bhandari',
    nameHi: 'नेहा भंडारी',
    role: 'Rural Education Facilitator',
    roleHi: 'ग्रामीण शिक्षा सुविधा प्रदाता',
    joinedYear: '2024'
  }
];

export const yearlyEvents: YearlyEvent[] = [
  {
    id: 'yr-1',
    year: '2024',
    title: 'Inception & Rural Healthcare Camp Launch',
    titleHi: 'स्थापना एवं ग्रामीण स्वास्थ्य सेवा शिविर का शुभारंभ',
    description: 'Pratham Shvaas Foundation was formally registered and launched its first comprehensive community health and pulmonology camps in remote mountainous pockets of Dehradun, screening over 450 residents.',
    descriptionHi: 'प्रथम श्वास फाउंडेशन औपचारिक रूप से पंजीकृत हुआ और देहरादून के दूरदराज के पहाड़ी इलाकों में अपना पहला व्यापक सामुदायिक स्वास्थ्य और पल्मोनोलॉजी शिविर शुरू किया, जिसमें 450 से अधिक निवासियों की जांच की गई।',
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800',
    impact: 'First 450+ Rural Screenings Conducted',
    impactHi: 'पहले 450+ ग्रामीण मरीजों की जांच संपन्न'
  },
  {
    id: 'yr-2',
    year: '2024',
    title: 'Mobilizing "Sewa Me Sadaiv Tatpar" Youth Network',
    titleHi: '"सेवा में सदैव तत्पर" युवा स्वयंसेवक नेटवर्क का गठन',
    description: 'Recruited and trained our first cohort of 100+ youth environment advocates to conduct air hygiene drives, distribute educational materials, and install basic clean-air displays in central markets.',
    descriptionHi: 'वायु स्वच्छता अभियान चलाने, शैक्षिक सामग्री वितरित करने और मुख्य बाजारों में बुनियादी स्वच्छ हवा प्रदर्शन स्थापित करने के लिए 100+ युवा पर्यावरण अधिवक्ताओं के हमारे पहले दल को भर्ती और प्रशिक्षित किया गया।',
    imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800',
    impact: '100+ Youth Advocates Engaged',
    impactHi: '100+ युवा अधिवक्ता सक्रिय किए गए'
  },
  {
    id: 'yr-3',
    year: '2025',
    title: 'School Clean Air & Eco-Purifier Initiative',
    titleHi: 'स्कूल स्वच्छ हवा एवं इको-प्यूरीफायर पहल',
    description: 'Designed and installed low-cost, high-performance eco-air purification systems across 15 government school classrooms in Uttarakhand, dramatically improving indoor particulate indicators for students.',
    descriptionHi: 'उत्तराखंड के 15 सरकारी स्कूलों की कक्षाओं में कम लागत वाले, उच्च प्रदर्शन वाले पर्यावरण-अनुकूल वायु शोधन उपकरण डिजाइन और स्थापित किए गए, जिससे छात्रों के लिए इनडोर पार्टिकुलेट संकेतकों में भारी सुधार हुआ।',
    imageUrl: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800',
    impact: '15 Government Classrooms Improved',
    impactHi: '15 सरकारी स्कूल कक्षाएं सुधारी गईं'
  },
  {
    id: 'yr-4',
    year: '2025',
    title: 'Jakhan Women Tailoring & Skill Incubation Center',
    titleHi: 'जाखन महिला सिलाई और कौशल ऊष्मायन केंद्र',
    description: 'Established our first physical skill center providing free comprehensive tailoring courses, financial accounting guidance, and business self-help mentorship to 40+ underprivileged local women.',
    descriptionHi: '40+ जरूरतमंद स्थानीय महिलाओं को मुफ्त व्यापक सिलाई पाठ्यक्रम, वित्तीय लेखांकन मार्गदर्शन और व्यावसायिक स्वयं सहायता परामर्श प्रदान करने वाला पहला भौतिक कौशल केंद्र स्थापित किया गया।',
    imageUrl: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=800',
    impact: '40+ Women Graduated with Skills',
    impactHi: '40+ महिलाओं को सिलाई कौशल से सशक्त किया गया'
  },
  {
    id: 'yr-5',
    year: '2026',
    title: 'Pediatric Asthma Diagnostics & Medical Camps',
    titleHi: 'बाल चिकित्सा अस्थमा निदान और चिकित्सा शिविर',
    description: 'Pioneered high-accuracy spirometry screening campaigns in industrial periphery zones, diagnosing pediatric respiratory distress early and donating critical nebulizers & masks directly to families.',
    descriptionHi: 'औद्योगिक परिधीय क्षेत्रों में उच्च-सटीक स्पाइरोमेट्री जांच अभियान का नेतृत्व किया, जिससे बाल चिकित्सा श्वसन संकट का समय पर निदान हुआ और परिवारों को सीधे नेबुलाइज़र और मास्क वितरित किए गए।',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    impact: '1,200+ Children Diagnosed and Provided Relief',
    impactHi: '1,200+ बच्चों की जांच और राहत सहायता'
  },
  {
    id: 'yr-6',
    year: '2026',
    title: 'Uttarakhand Oxygen Buffer Afforestation Drive',
    titleHi: 'उत्तराखंड ऑक्सीजन बफर वनीकरण अभियान',
    description: 'Planted over 1,500 native saplings in urban buffer segments to build dense oxygenation zones. Integrated automatic soil hydration and community-supported guardianship to guarantee high survival.',
    descriptionHi: 'घने ऑक्सीजन क्षेत्र बनाने के लिए शहरी बफर क्षेत्रों में 1,500 से अधिक स्थानीय पौधे लगाए गए। उच्च अस्तित्व दर की गारंटी के लिए स्वचालित मृदा जलयोजन और समुदाय समर्थित संरक्षकता को एकीकृत किया गया।',
    imageUrl: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=800',
    impact: '1,500+ Native Saplings Flourishing',
    impactHi: '1,500+ स्वदेशी पौधे जीवित और विकसित'
  }
];

