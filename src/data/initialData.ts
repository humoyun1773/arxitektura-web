import { Project, Architect, Service, Lead, Review, BlogPost, HeroBanner, SiteSettings } from '../types';

export const initialBanners: HeroBanner[] = [
  {
    id: 'b1',
    badgeText: '🏛️ ARXITEKTURA & INTERYER BYUROSI',
    title: 'MUKAMMAL FAZOVIY YECHIMLAR VA NAFIS ARXITEKTURA',
    subtitle: 'Zamonaviy kottejlar, hashamatli villalar, tijoriy binolar va eksklyuziv interyerlarni xalqaro standartlar asosida noldan kalitgacha loyihalashtiramiz.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    linkText: 'Loyihalarimizni Ko\'rish',
    linkPage: 'projects',
    order: 1,
    isActive: true,
  },
  {
    id: 'b2',
    badgeText: '✨ EKSKLYUZIV INTERYER DIZAYN',
    title: 'HAR BIR KVADRAT METRDA KOMFORT VA HASHOYAT',
    subtitle: 'Fotorealistik 3D renderlar, mukammal ishchi chizmalar to\'plami va to\'liq mualliflik nazorati bilan orzuingizdagi makonni yaratamiz.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80',
    linkText: 'Interyer Xizmatlari',
    linkPage: 'services',
    order: 2,
    isActive: true,
  }
];

export const initialProjects: Project[] = [
  {
    id: 'proj-1',
    title: 'Modern Oasis Luxury Villa',
    slug: 'modern-oasis-luxury-villa',
    category: 'Kottejlar & Villalar',
    style: 'Modern / Zamonaviy',
    areaM2: 480,
    floorsCount: 2,
    location: 'Toshkent viloyati, Qibray tumani',
    year: 2025,
    coverImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
    ],
    floorPlans: [
      {
        floorNumber: 1,
        title: '1-Qavat Planirovkasi',
        area: 260,
        image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
        rooms: ['Keng mexmonxona (65 m²)', 'Oshxona & Oshxona oroli (32 m²)', 'Master yotoqxona', 'Hovuzga chiqish zonasi', 'Garaj (2 ta avtomobil)']
      },
      {
        floorNumber: 2,
        title: '2-Qavat Planirovkasi',
        area: 220,
        image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=800&q=80',
        rooms: ['3 ta bolalar yotoqxonasi', 'Ish kabineti', 'Ochiq panorama terassa (45 m²)', '2 ta garderob va sanuzellar']
      }
    ],
    isFeatured: true,
    isActive: true,
    shortDescription: 'Zamonaviy minimalizm uslubida loyihalangan, keng panorama oynali, suzish havzasi va yashil ayvonli hashamatli villa.',
    fullDescription: 'Ushbu loyiha zamonaviy arxitektura va tabiiy landshaftning uyg\'un kombinatsiyasini o\'zida mujassam etgan. Katta vitraj oynalar orqali quyosh nuri maksimal kirishi ta\'minlangan. Energiya tejamkor fasad tizimlari, tabiiy yog\'och va travertin tosh qoplamalari binoga betakror ko\'rinish bag\'ishlaydi.',
    features: [
      'Suzish havzasi (Infinity Pool)',
      'Panorama vitraj oynalar',
      'Smart Home avtomatlashtirish tizimi',
      '2 ta avtomobil uchun yopiq garaj',
      'Yozgi oshxona va barbekyu hududi'
    ],
    clientName: 'Xususiy buyurtmachi',
    leadArchitectId: 'arch-1',
    durationMonths: 2
  },
  {
    id: 'proj-2',
    title: 'Skyline Business Center',
    slug: 'skyline-business-center',
    category: 'Tijoriy Obyektlar',
    style: 'Hi-Tech',
    areaM2: 3400,
    floorsCount: 8,
    location: 'Toshkent shahri, Mirobod tumani',
    year: 2024,
    coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: true,
    isActive: true,
    shortDescription: 'Zamonaviy A-klassli biznes markazi: energiya tejamkor ventilyatsiyalangan fasad, yerosti avtoturargohi va kovorking zonalari.',
    fullDescription: 'Biznes markaz binoning har bir qavatida moslashuvchan open-space ofislar, qulay konferents zallari va panoramali roof-top kafe bilan jihozlangan. Yuqori seysmik bardoshlilik va xalqaro yong\'in xavfsizligi standartlariga to\'liq javob beradi.',
    features: [
      'A-Klass ofis maydonlari',
      '2 qavatli yerosti avtoturargoh',
      'Ventilyatsiyalangan shisha fasad',
      'Tom qismidagi panorama restoran'
    ],
    leadArchitectId: 'arch-1',
    durationMonths: 4
  },
  {
    id: 'proj-3',
    title: 'Minimalist Penthouse Interior',
    slug: 'minimalist-penthouse-interior',
    category: 'Interyer Dizayn',
    style: 'Minimalizm',
    areaM2: 240,
    floorsCount: 1,
    location: 'Toshkent shahri, Toshkent City',
    year: 2025,
    coverImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: true,
    isActive: true,
    shortDescription: 'Nafis minimalizm va iliq ranglar uyg\'unligidagi hashamatli pentxaus interyer dizayni.',
    fullDescription: 'Tabiiy italyan marmari, eman yog\'ochi panellari va yashirin yoritish elementlari orqali vizual yengillik va qulay muhit yaratilgan. Smart Home texnologiyalari orqali butun xonadonning mikroiqlimi va yorug\'ligi boshqariladi.',
    features: [
      'Italiya marmar qoplamalari',
      'Yashirin chiziqli yoritish tizimlari',
      'Maxsus mebel chizmalari',
      'Akustik izolyatsiya va Smart Home'
    ],
    leadArchitectId: 'arch-2',
    durationMonths: 1.5
  },
  {
    id: 'proj-4',
    title: 'Green Valley Panoramic Residence',
    slug: 'green-valley-panoramic-residence',
    category: 'Kottejlar & Villalar',
    style: 'Modern / Zamonaviy',
    areaM2: 520,
    floorsCount: 2,
    location: 'Bo\'stonliq tumani, Chimyon',
    year: 2024,
    coverImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: true,
    isActive: true,
    shortDescription: 'Tog\' bag\'rida qad rostlagan, tabiat bilan to\'liq uyg\'unlashgan zamonaviy ekologik villa loyihasi.',
    fullDescription: 'Murakkab relyef sharoitida pog\'onali arxitektura yechimi qo\'llanilgan. Keng terassalar, quyosh panellari integratsiyasi va ekologik toza materiallar ushbu rezidensiyani tabiat qo\'ynidagi qulay maskanga aylantirgan.',
    features: [
      'Murakkab relyefda pog\'onali fundament',
      'Quyosh panellari integratsiyasi',
      'Keng ochiq kuzatuv terassasi',
      'Fin saunasi va spa hududi'
    ],
    leadArchitectId: 'arch-1',
    durationMonths: 2.5
  },
  {
    id: 'proj-5',
    title: 'Silk Road Luxury Hotel & Spa',
    slug: 'silk-road-luxury-hotel-spa',
    category: 'Tijoriy Obyektlar',
    style: 'Neoklassika',
    areaM2: 5600,
    floorsCount: 5,
    location: 'Samarqand shahri, Boqiy Shahar',
    year: 2024,
    coverImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: false,
    isActive: true,
    shortDescription: 'Sharqona me\'moriy an\'analar va zamonaviy 5 yulduzli mehmonxona standartlari uyg\'unligi.',
    fullDescription: '60 ta hashamatli xona, anjumanlar zallari, sharqona hammom va spa majmuasi bilan jihozlangan premium mehmonxona majmuasi loyihasi.',
    features: [
      '60 ta premium mehmonxona xonasi',
      'Spa & Termal suv havzalari',
      'Sharqona uslubdagi fasad arkalari',
      'Yuqori darajadagi akustik yechimlar'
    ],
    leadArchitectId: 'arch-3',
    durationMonths: 5
  },
  {
    id: 'proj-6',
    title: 'Botanic Private Estate & Landscape',
    slug: 'botanic-private-estate-landscape',
    category: 'Landshaft & Fasad',
    style: 'Modern / Zamonaviy',
    areaM2: 1800,
    floorsCount: 1,
    location: 'Toshkent shahri, Yakkasaroy tumani',
    year: 2025,
    coverImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: true,
    isActive: true,
    shortDescription: 'Eksklyuziv hovli landshafti: yapon bog\'i elementlari, dekorativ sharshara va avtomat sug\'orish tizimi.',
    fullDescription: 'Yashil hududlar, dekorativ toshlar va suv havzalari bilan boyitilgan, tunda ko\'rkam jilo beruvchi arxitekturaviy landshaft yoritish loyihasi.',
    features: [
      'Avtomatlashtirilgan aqlli sug\'orish',
      'Dekorativ sharshara va oqimlar',
      'Ko\'p yillik noyob manzarali daraxtlar',
      'Arxitekturaviy kechki yoritish'
    ],
    leadArchitectId: 'arch-2',
    durationMonths: 1.5
  }
];

export const initialArchitects: Architect[] = [
  {
    id: 'arch-1',
    name: 'Sanjar Rustamov',
    role: 'Bosh Arxitektor & Byuro Asoschisi',
    bio: '15 yillik professional arxitekturaviy loyihalash tajribasiga ega. O\'zbekiston va xorijda 80 dan ortiq yirik villa va jamoat binolari loyihalarini muvaffaqiyatli amalga oshirgan.',
    experienceYears: 15,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    specializations: ['Individual Kottejlar', 'Zamonaviy Fasadlar', 'Shaharsozlik', 'BIM Loyihalash'],
    projectIds: ['proj-1', 'proj-2', 'proj-4'],
    telegram: '@sanjar_architect',
    rating: 5.0,
    projectsCompleted: 85,
    awards: ['Yilning Eng Yaxshi Arxitektori (2023)', 'International Architecture Award Nominee']
  },
  {
    id: 'arch-2',
    name: 'Dilnoza Rahimova',
    role: 'Yetakchi Interyer Dizayner',
    bio: 'Milan Dizayn Akademiyasi (NABA) bitiruvchisi. 10 yillik tajribaga ega bo\'lib, premium interyerlar, mebel loyihalash va ranglar ergonomikasi bo\'yicha mutaxassis.',
    experienceYears: 10,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    specializations: ['Hashamatli Pentxauslar', 'Neoklassika', 'Minimalizm', 'Yoritish Dizayni'],
    projectIds: ['proj-3', 'proj-6'],
    telegram: '@dilnoza_interior',
    rating: 4.98,
    projectsCompleted: 62,
    awards: ['Design Excellence Award (2024)', 'Top Interior Studio Winner']
  },
  {
    id: 'arch-3',
    name: 'Javohir Karimov',
    role: 'Bosh Muhandis-Konstruktor',
    bio: '12 yillik seysmik bardoshli bino konstruksiyalari bo\'yicha yetakchi muhandis. Murakkab monolit temir-beton va metall karkas hisob-kitoblari bo\'yicha ekspert.',
    experienceYears: 12,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    specializations: ['Konstruktiv Hisoblar (KJ)', 'Zilzilabardoshlik', 'Metall Konstruksiyalar', 'Muhandislik Tarmoqlari'],
    projectIds: ['proj-2', 'proj-5'],
    telegram: '@javohir_engineer',
    rating: 4.95,
    projectsCompleted: 70,
    awards: ['Oltin Qalam Muhandislik Mukofoti', 'Seysmo-Inshootlar Sertifikati']
  }
];

export const initialServices: Service[] = [
  {
    id: 'serv-1',
    title: 'Individual Turar-joy & Kottej Loyihalash',
    slug: 'kottej-loyihalash',
    category: 'Kottejlar & Villalar',
    icon: 'Home',
    shortDesc: 'Xomaki eskizdan to\'liq ishchi chizmalargacha bo\'lgan mukammal arxitektura loyihasi.',
    fullDesc: 'Sizning orzuingizdagi xonadonni barcha qulayliklar, oila a\'zolari ehtiyojlari va yer uchastkasining xususiyatlarini hisobga olgan holda noldan loyihalashtiramiz.',
    startingPricePerM2: 15,
    estimatedDuration: '20-30 kun',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    deliverables: [
      'Fotorealistik 3D fasad renderlari (4 tomondan)',
      'Barcha qavatlar va tomlar planirovkasi',
      'Fasad qirqimlari va balandlik o\'lchamlari',
      'Poydevor, ustun va yopma to\'sinlar chizmalari (KJ)',
      'Qurilish materiallari sarfi smetasi'
    ],
    packages: [
      {
        id: 'pkg-1',
        name: 'Eskiz Loyiha',
        pricePerM2: 10,
        description: 'Bino ko\'rinishi va asosiy planirovkasini belgilash uchun boshlang\'ich paket.',
        deliverables: ['Planirovka sxemasi', '3D fasad vizualizatsiyasi', 'Binoning umumiy o\'lchamlari']
      },
      {
        id: 'pkg-2',
        name: 'To\'liq Ishchi Loyiha (AR + KJ)',
        pricePerM2: 15,
        description: 'Qurilishni boshlash uchun zarur bo\'lgan barcha arxitektura va konstruktiv chizmalar.',
        deliverables: ['Arxitektura qismi (AR)', 'Konstruktiv qism (KJ)', '3D Renderlar', 'Materiallar spetsifikatsiyasi'],
        isPopular: true
      },
      {
        id: 'pkg-3',
        name: 'Premium VIP + Mualliflik Nazorati',
        pricePerM2: 22,
        description: 'To\'liq loyiha, interyer konsepti va qurilish jarayonining uzluksiz mualliflik nazorati.',
        deliverables: ['To\'liq AR + KJ', 'Interyer konsepti', 'Landshaft sxemasi', 'Qurilish maydonida haftalik nazorat', 'Muhandislik tarmoqlari (VK, OVK, EV)']
      }
    ]
  },
  {
    id: 'serv-2',
    title: 'Eksklyuziv Interyer Dizayn',
    slug: 'interyer-dizayn',
    category: 'Interyer Dizayn',
    icon: 'Sparkles',
    shortDesc: 'Xonadonlar, villalar va ofislar uchun ergonimik va hashamatli interyer loyihalari.',
    fullDesc: 'Zamonaviy materiallar, mebel chizmalari, yoritish ssenariylari va fotorealistik 3D tasvirlar bilan orzuingizdagi muhitni yaratamiz.',
    startingPricePerM2: 18,
    estimatedDuration: '15-25 kun',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    deliverables: [
      'Har bir xonaning fotorealistik 3D vizualizatsiyasi',
      'Mebel va jihozlar joylashuvi plani',
      'Elektr rozetkalari va yoritish ssenariylari plani',
      'Shift va pol qoplamalari sxemalari',
      'Pardozlash materiallari va mebellar spetsifikatsiyasi'
    ],
    packages: [
      {
        id: 'pkg-21',
        name: 'Standart Interyer',
        pricePerM2: 15,
        description: 'Planirovka va asosiy xonalar 3D vizualizatsiyasi.',
        deliverables: ['Planirovka', 'Asosiy xonalar renderlari', 'Elektr va santexnika planlari']
      },
      {
        id: 'pkg-22',
        name: 'To\'liq Premium Interyer',
        pricePerM2: 20,
        description: 'Barcha xonalar 3D vizuallari, mebel chizmalari va materiallar ro\'yxati.',
        deliverables: ['100% barcha xonalar renderi', 'Mebel buyurtma chizmalari', 'Yoritish ssenariylari', 'Do\'konlar va brendlar ro\'yxati'],
        isPopular: true
      }
    ]
  },
  {
    id: 'serv-3',
    title: 'Tijoriy & Jamoat Binolari Loyihalash',
    slug: 'tijoriy-binolar',
    category: 'Tijoriy Obyektlar',
    icon: 'Building2',
    shortDesc: 'Biznes markazlar, restoranlar, mehmonxonalar va savdo komplekslari arxitekturasi.',
    fullDesc: 'Maksimal daromad keltiruvchi fazoviy yechimlar, xalqaro xavfsizlik va energiya tejamkorlik standartlariga muvofiq loyihalash.',
    startingPricePerM2: 12,
    estimatedDuration: '30-45 kun',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    deliverables: [
      'Bosh reja va hudud integratsiyasi',
      'Arxitektura va konstruktiv yechimlar (AR, KJ)',
      'Tashqi fasad yoritish loyihasi',
      'Ekspertiza topshirish uchun to\'liq hujjatlar to\'plami'
    ],
    packages: [
      {
        id: 'pkg-31',
        name: 'Kompleks Tijoriy Loyiha',
        pricePerM2: 12,
        description: 'Ekspertizadan o\'tishga tayyor to\'liq chizmalar to\'plami.',
        deliverables: ['AR + KJ + Muhandislik tarmoqlari', '3D vizualizatsiya', 'Ekspertiza hamrohligi']
      }
    ]
  },
  {
    id: 'serv-4',
    title: 'Landshaft & Fasad Dizayni',
    slug: 'landshaft-fasad',
    category: 'Landshaft & Fasad',
    icon: 'Trees',
    shortDesc: 'Hovli obodonlashtirish, yashil maydonlar, basseyn va fasad bezaklari.',
    fullDesc: 'Uy tashqi ko\'rinishini hashamatli qilish, hovlida sokin dam olish maskani va favvoralar loyihalash.',
    startingPricePerM2: 8,
    estimatedDuration: '10-15 kun',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    deliverables: [
      'Hovli planirovkasi va obodonlashtirish sxemasi',
      'Avtomat sug\'orish va yoritish loyihasi',
      'Basseyn, беседка va barbekyu zonalari chizmalari',
      'Manzarali o\'simliklar va daraxtlar spetsifikatsiyasi'
    ],
    packages: [
      {
        id: 'pkg-41',
        name: 'Fasad & Landshaft Kompleks',
        pricePerM2: 8,
        description: 'Bino tashqi fasadi va hovli landshaftining to\'liq loyihasi.',
        deliverables: ['Fasad 3D vizualizatsiyasi', 'Landshaft plani', 'O\'simliklar ro\'yxati', 'Yoritish sxemasi']
      }
    ]
  }
];

export const initialReviews: Review[] = [
  {
    id: 'rev-1',
    name: 'Akmal Zokirov',
    clientRole: 'Modern Oasis Villa Egasi',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    projectTitle: 'Modern Oasis Luxury Villa (480 m²)',
    rating: 5,
    comment: 'Arxitektura byurosi jamoasiga alohida minnatdorchilik bildiraman! 480 m² villamiz loyihasi aynan biz orzu qilgandek yaratildi. Planirovka juda qulay, hovuz va vitraj oynalar orqali uyga ajoyib fayz kirdi. Mualliflik nazorati tufayli qurilishda birorta xatolikka yo\'l qo\'yilmadi.',
    date: '15.01.2025',
    location: 'Toshkent',
    isApproved: true
  },
  {
    id: 'rev-2',
    name: 'Nodira Shodiyeva',
    clientRole: 'Toshkent City Pentxaus Buyurtmachisi',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    projectTitle: 'Minimalist Penthouse Interior (240 m²)',
    rating: 5,
    comment: 'Dilnoza opaning interyer dizayniga bo\'lgan nozik didi hayratga soldi. Mebel detallaridan tortib chiziqli yoritish ssenariylarigacha har bir detal puxta hisoblangan. Xonadonimiz juda keng va qulay bo\'ldi!',
    date: '02.02.2025',
    location: 'Toshkent City',
    isApproved: true
  },
  {
    id: 'rev-3',
    name: 'Botir Mansurov',
    clientRole: 'Orient Development Bosh Direktori',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    projectTitle: 'Skyline Business Center (3,400 m²)',
    rating: 5,
    comment: 'Biznes markazimiz loyihasini belgilangan muddatda, barcha shaharsozlik va seysmik talablarga mos qilib topshirishdi. Ekspertizadan bir urinishda o\'tdik. Professional arxitektorlar jamoasi!',
    date: '10.12.2024',
    location: 'Toshkent',
    isApproved: true
  }
];

export const initialBlogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    title: '2026-Yil Zamonaviy Kottej Arxitekturasi: Asosiy Tendensiyalar',
    slug: 'zamonaviy-kottej-arxitekturasi-tendensiyalari',
    excerpt: 'Tabiiy materiallar, panorama vitrajlar, tekis tomlar va energiya tejamkor arxitekturaviy yechimlar haqida tahliliy maqola.',
    content: `Zamonaviy shahar tashqarisidagi kottejlar va villalar arxitekturasi yildan-yilga o'zgarib bormoqda. Bugungi kunda buyurtmachilar nafaqat hashamatli ko'rinishga, balki maksimal energiya tejamkorlik va tabiat bilan uyg'unlikka katta e'tibor qaratmoqdalar.

1. Panorama Vitraj Oynalar va Erkin Planirovka (Open Space)
Xonadon ichiga tabiiy quyosh nurini maksimal kiritish zamonaviy dizaynning ajralmas qismiga aylandi. Keng zal va oshxona birlashtirilgan ochiq maydonlar xonadonni ancha keng va yorug' ko'rsatadi.

2. Fasadlarda Tabiiy Travertin, Yog'och va Metall Uyg'unligi
Sun'iy plastik qoplamalar o'rnini tabiiy travertin toshlari, termoyog'och (termo-wood) va metall kompozit panellar egallamoqda. Bu nafaqat fasadning uzoq yillar go'zal saqlanishini, balki bino qiymatining yillar davomida oshib borishini ta'minlaydi.

3. Yashil Zonalar va Hovuz bilan Birlashtirilgan Terassalar
Uyning ichki qismi to'g'ridan-to'g'ri terassa va suzish havzasi bilan birlashadi. Yoz oylarida vitraj oynalar surilib, ichki maydon hovli bilan bitta butun fazoga aylanadi.`,
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    author: 'Sanjar Rustamov',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    authorRole: 'Bosh Arxitektor',
    category: 'Arxitektura Tendensiyalari',
    readTime: '4 daqiqa',
    createdAt: '12-fevral, 2025',
    tags: ['Arxitektura', 'Kottej', 'Villa', 'Zamonaviy Uy', 'Fasad'],
    views: 480,
    isPublished: true
  },
  {
    id: 'blog-2',
    title: 'Interyer Dizaynda Minimalizm va Yashirin Yoritish Ssenariylari',
    slug: 'interyer-dizaynda-minimalizm-va-yoritish',
    excerpt: 'Keraksiz bezaklardan xoli, ko\'zni charchatmaydigan va har bir burchagida qulaylik baxsh etuvchi interyer sirlari.',
    content: `Interyer dizaynda minimalizm — bu bo'sh joy emas, balki ortiqcha narsalardan xalos bo'lgan mukammal tartibdir.

Yashirin Yoritish (Linear Lighting) Nega Muhim?
Klassik qandillar o'rniga shift va devor bag'riga yashiringan LED profillar orqali xonada bir tekis, yumshoq yorug'lik yaratiladi. Kechki payt esa yorug'lik darajasini pasaytirib, dam olish uchun romantik va sokin muhit hosil qilish mumkin.

Mebelning Devor bilan Uyg'unligi:
Shiftgacha bo'lgan yashirin shkaflar devor bilan bir tekisda bo'lib, xonadagi havoni saqlaydi va buyumlar ko'zga tashlanmaydi.`,
    coverImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    author: 'Dilnoza Rahimova',
    authorAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    authorRole: 'Yetakchi Dizayner',
    category: 'Interyer Dizayn',
    readTime: '3 daqiqa',
    createdAt: '05-fevral, 2025',
    tags: ['Interyer', 'Minimalizm', 'Yoritish', 'Dizayn'],
    views: 350,
    isPublished: true
  }
];

export const initialLeads: Lead[] = [
  {
    id: 'lead-1',
    fullName: 'Jamshed Aliyev',
    phone: '+998 90 123 45 67',
    projectTitle: 'Modern Oasis Luxury Villa',
    serviceType: 'Individual Kottej Loyihalash',
    estimatedAreaM2: 450,
    source: 'Bosh sahifa kalkulyatori',
    status: 'new',
    notes: 'Qibray tumanidagi 10 sotix yer uchastkasiga zamonaviy villa loyihasi kerak',
    createdAt: '18.02.2025 14:30'
  }
];

export const initialSiteSettings: SiteSettings = {
  siteName: 'ARXITEKTURA',
  slogan: 'Mukammal Fazoviy Yechimlar va Nafis Arxitektura Byurosi',
  phoneMain: '+998 90 123 45 67',
  phoneSecondary: '+998 71 200 45 67',
  email: 'info@arxitektura.uz',
  address: 'Mustaqillik shoh ko\'chasi, 45-uy, "Arxitektura Plaza" Biznes Markazi',
  city: 'Toshkent, O\'zbekiston',
  workingHours: 'Dush - Shanba: 09:00 - 19:00',
  telegramLink: 'https://t.me/arxitektura_buro',
  instagramLink: 'https://instagram.com/arxitektura_buro',
  youtubeLink: 'https://youtube.com/@arxitektura_buro',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.883713601557!2d69.2818987!3d41.311158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2931f41f23%3A0x81095e06b6b9b2b!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1700000000000',
  metaTitle: 'ARXITEKTURA — Zamonaviy Arxitektura va Interyer Dizayn Byurosi',
  metaDescription: 'Individual kottejlar, villalar, biznes markazlar va hashamatli interyer dizayn loyihalarini noldan kalitgacha professional loyihalash byurosi.',
  completedProjectsCount: 145,
  designedAreaM2: 380000,
  experienceYears: 12,
  satisfiedClientsPercent: 99
};
