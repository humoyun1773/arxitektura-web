import { Course, Teacher, Lead, Review, BlogPost, Student, HeroBanner, SiteSettings } from '../types';

export const initialBanners: HeroBanner[] = [
  {
    id: 'b1',
    badge: "🏛️ AL-HAKIM AT-TERMEZIY O'QUV MARKAZI",
    title: 'INTIZOMNI SEVUVCHILAR UCHUN',
    highlightText: "28 Oylik Ta'lim Kombinatsiyalari",
    subtitle: "28 oylik ta'lim kombinatsiyalariga mos 4 ta tilga muvofiq tafakkurga ega bo'ling. Kursni muvaffaqiyatli tugatgan iqtidorli talabalar to'liq ish bilan ta'minlanadi.",
    ctaText: 'Kurslarga Yozilish',
    statsText: "4 ta Xalqaro Til | 100% Ish Bilan Ta'minlash Kafolati | Qarshi Shahar",
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    isActive: true,
  },
  {
    id: 'b2',
    badge: '🌍 4 Ta Tilga Muvofiq Tafakkur',
    title: 'Ingliz, Nemis, Xitoy, Koreys, Yapon, Fors, Rus Tillari',
    highlightText: '7 Oylik Intensiv Bosqichlar',
    subtitle: "Har bir til 7 oylik tizimli va qat'iy intizomga asoslangan dastur orqali o'rgatiladi. 28 oyda 4 ta tilni mukammal darajada o'zlashtirasiz.",
    ctaText: "Kombinatsiyalarni Ko'rish",
    statsText: "Intizom, Bilim va Kafolatlangan Karyera",
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
    isActive: true,
  },
  {
    id: 'b3',
    badge: '📍 Qarshi Shahar',
    title: "Professional Tilshunos & Tarjimon Bo'ling",
    highlightText: 'Kelajagingizni Ishonchli Quring',
    subtitle: "Al-Hakim At-Termeziy o'quv markazida intizom va sifat birinchi o'rinda. Murojaat uchun: +998 91 951 73 35",
    ctaText: "Ro'yxatdan O'tish",
    statsText: 'Tel: +998 91 951 73 35 | @edu_qarshi',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    isActive: true,
  }
];

export const initialTeachers: Teacher[] = [
  {
    id: 't1',
    name: 'Ustoz Rustam Qodirov',
    role: 'Bosh Metodist & Ingliz Tili Mutaxassisi',
    bio: "12 yillik xalqaro til o'qitish va IELTS metodikasi bo'yicha tajribaga ega. Al-Hakim At-Termeziy markazi yetakchi ustozi.",
    experienceYears: 12,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    specializations: ['Ingliz Tili', 'IELTS 8.5', 'Akademik Grammatika', "So'zlashuv"],
    courseIds: ['komb1', 'komb2', 'komb3', 'komb4', 'til-eng'],
    telegram: '@rustam_teacher',
    rating: 4.99,
    studentsTaught: 3200,
    certificates: ['CELTA Certified (Cambridge)', 'IELTS 8.5 Master']
  },
  {
    id: 't2',
    name: 'Otabek Mirzayev',
    role: 'Sharqshunos & Fors Tili Ustodi',
    bio: "Klassik va zamonaviy fors tili, tarjimonlik va adabiy matnlar tahlili bo'yicha 10 yillik ilmiy va amaliy tajribaga ega.",
    experienceYears: 10,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    specializations: ['Fors Tili', 'Klassik Forsi', 'Tarjimonlik', 'Adabiyot'],
    courseIds: ['komb1', 'komb4', 'til-fors'],
    rating: 4.96,
    studentsTaught: 1400,
    certificates: ['Tehron Davlat Universiteti Sertifikati', 'Oliy Toifali Sharqshunos']
  },
  {
    id: 't3',
    name: 'Dilnoza Karimova',
    role: 'Nemis Tili & DSD Mutaxassisi',
    bio: "Goethe Zertifikat C1 sohibi. Germaniyada tahsil olgan. O'quvchilari Ausbildung va Germaniya universitetlariga qabul qilingan.",
    experienceYears: 8,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    specializations: ['Nemis Tili', 'Goethe A1-B2', 'Ausbildung Tayyorgarlik'],
    courseIds: ['komb1', 'komb2', 'komb4', 'til-nemis'],
    rating: 4.97,
    studentsTaught: 1100,
    certificates: ['Goethe-Zertifikat C1', 'DAAD Scholar']
  },
  {
    id: 't4',
    name: "Shahzodbek To'rayev",
    role: 'Xitoy Tili & HSK 6 Murabbiyi',
    bio: "Pekin Til va Madaniyat Universitetida tahsil olgan. HSK 1-6 darajalariga tayyorlash bo'yicha yetakchi mutaxassis.",
    experienceYears: 7,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    specializations: ['Xitoy Tili', 'HSK 1-6', 'Biznes Xitoy Tili'],
    courseIds: ['komb1', 'komb3', 'til-xitoy'],
    rating: 4.95,
    studentsTaught: 950,
    certificates: ['HSK 6 Certified (Beijing)', 'Confucius Institute Instructor']
  },
  {
    id: 't5',
    name: 'Gulshoda Yoqubova',
    role: 'Koreys Tili & TOPIK Eksperti',
    bio: "Seul Milliy Universitetida amaliyot o'tagan. TOPIK 6 sohibasi. Koreyada grant yutish va ishga joylashish bo'yicha murabbiy.",
    experienceYears: 6,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    specializations: ['Koreys Tili', 'TOPIK 1-6', 'EPS-TOPIK'],
    courseIds: ['komb2', 'til-koreys'],
    rating: 4.93,
    studentsTaught: 880,
    certificates: ['TOPIK Level 6', 'NIIED Korea Alumni']
  },
  {
    id: 't6',
    name: 'Bobur Ismoilov',
    role: 'Yapon Tili & JLPT N1 Instruktori',
    bio: "Tokioda 4 yil istiqomat qilgan va ishlagan. JLPT N1 darajasidagi tajribali yapon tili ustodi.",
    experienceYears: 7,
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    specializations: ['Yapon Tili', 'JLPT N5-N1', "Kanji & So'zlashuv"],
    courseIds: ['komb2', 'komb3', 'til-yapon'],
    rating: 4.98,
    studentsTaught: 720,
    certificates: ['JLPT N1 Certified (Japan Foundation)']
  },
  {
    id: 't7',
    name: 'Zuhra Ahmedova',
    role: 'Rus Tili & Nutq Madaniyati Ustozi',
    bio: "Filologiya fanlari nomzodi. Rus tili grammatikasi, adabiy nutq va ishbilarmonlik aloqalari bo'yicha 15 yillik tajribaga ega.",
    experienceYears: 15,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    specializations: ['Rus Tili', 'Grammatika', "So'zlashuv", 'Ishbilarmonlik Rus Tili'],
    courseIds: ['komb3', 'komb4', 'til-rus'],
    rating: 4.99,
    studentsTaught: 2800,
    certificates: ['TRKI-3 Certified', 'Oliy Toifali Filolog']
  }
];

export const initialCourses: Course[] = [
  // 4 TA ASOSIY TA'LIM KOMBINATSIYALARI (28 OYLIK)
  {
    id: 'komb1',
    title: 'Kombinatsiya 1: Ingliz (7 oy) + Fors (7 oy) + Nemis (7 oy) + Xitoy (7 oy)',
    slug: 'kombinatsiya-1-ingliz-fors-nemis-xitoy',
    category: "Ta'lim Kombinatsiyalari",
    level: "Mukammal",
    durationMonths: 28,
    lessonsPerWeek: 3,
    hoursPerLesson: 2,
    price: 900000,
    discountPrice: 750000,
    rating: 5.0,
    reviewsCount: 156,
    studentsCount: 340,
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80',
    isPopular: true,
    isActive: true,
    shortDescription: "28 oylik kompleks dastur: Ingliz tili (7 oy) -> Fors tili (7 oy) -> Nemis tili (7 oy) -> Xitoy tili (7 oy). 4 ta tilga muvofiq tafakkur va kafolatlangan ish bilan ta'minlash.",
    fullDescription: "Al-Hakim At-Termeziy o'quv markazining 1-raqamli flagman ta'lim kombinatsiyasi. 28 oy davomida qat'iy intizom asosida dunyoning eng muhim 4 ta tilini (Ingliz, Fors, Nemis, Xitoy) noldan professional darajagacha o'rganasiz. Kursni a'lo baholarga bitirgan talabalar to'liq ish bilan ta'minlanadi.",
    schedule: 'Dush - Chor - Juma / Sesh - Pay - Shan (Moslashuvchan guruhlar)',
    requirements: [
      "Kuchli intizom va o'z ustida tinimsiz ishlashga tayyorlik",
      "Uyga vazifalarni vaqtida bajarish va dars qoldirmaslik",
      "Yoshi: 12 yoshdan yuqori barcha o'quvchi va yoshlar"
    ],
    features: [
      "28 oyda 4 ta xalqaro tilni mukammal o'zlashtirish",
      "Har bir til bosqichi uchun rasmiy sertifikat",
      "Kursni muvaffaqiyatli tugatganlar 100% ISH BILAN TA'MINLANADI",
      "Intizom va natija kafolati"
    ],
    instructorId: 't1',
    syllabus: [
      {
        id: 'k1-1',
        module: 1,
        title: '1-Bosqich: Ingliz Tili (7 Oylik Intensiv)',
        duration: '1 - 7 oylar',
        topics: [
          "General English: Boshlang'ichdan Intermediate darajagacha",
          "Grammatika qoidalari va faol so'z boyligi (3500+ so'z)",
          "Erkin og'zaki so'zlashuv va tinglab tushunish (Listening & Speaking)",
          "IELTS va xalqaro imtihonlarga poydevor"
        ]
      },
      {
        id: 'k1-2',
        module: 2,
        title: '2-Bosqich: Fors Tili (7 Oylik Intensiv)',
        duration: '8 - 14 oylar',
        topics: [
          "Fors alifbosi, tovushlar va to'g'ri talaffuz",
          "Klassik va zamonaviy fors tili grammatikasi",
          "Sharq adabiyoti, matnlar tarjimasi va tahlili",
          "Jonli forsiy muloqot va tarjimonlik amaliyoti"
        ]
      },
      {
        id: 'k1-3',
        module: 3,
        title: '3-Bosqich: Nemis Tili (7 Oylik Intensiv)',
        duration: '15 - 21 oylar',
        topics: [
          "Nemis tili A1 va A2 darajasi to'liq dasturi",
          "Nemis grammatikasi (Artikel, Kasus, Verblar tuslanishi)",
          "Kundalik va rasmiy so'zlashuv (Sprechen & Schreiben)",
          "Goethe Zertifikat va Ausbildung talablari bo'yicha tayyorgarlik"
        ]
      },
      {
        id: 'k1-4',
        module: 4,
        title: '4-Bosqich: Xitoy Tili (7 Oylik Intensiv)',
        duration: '22 - 28 oylar',
        topics: [
          "Pinyin fonetikasi va 4 ta ton talaffuzi",
          "Asosiy ierogliflar yozilishi va xattotlik qoidalari",
          "HSK 1-3 darajasidagi leksika va muloqot",
          "Bitiruv imtihoni, 4 til bo'yicha attestatsiya va Ishga Joylashtirish"
        ]
      }
    ]
  },
  {
    id: 'komb2',
    title: 'Kombinatsiya 2: Ingliz (7 oy) + Koreys (7 oy) + Nemis (7 oy) + Yapon (7 oy)',
    slug: 'kombinatsiya-2-ingliz-koreys-nemis-yapon',
    category: "Ta'lim Kombinatsiyalari",
    level: "Mukammal",
    durationMonths: 28,
    lessonsPerWeek: 3,
    hoursPerLesson: 2,
    price: 900000,
    discountPrice: 750000,
    rating: 4.99,
    reviewsCount: 132,
    studentsCount: 290,
    image: 'https://images.unsplash.com/photo-1528747045269-390fe33c19f2?auto=format&fit=crop&w=900&q=80',
    isPopular: true,
    isActive: true,
    shortDescription: "28 oylik kompleks dastur: Ingliz tili (7 oy) -> Koreys tili (7 oy) -> Nemis tili (7 oy) -> Yapon tili (7 oy). Sharqiy Osiyo va Yevropa tillari integratsiyasi.",
    fullDescription: "Koreya, Yaponiya va Yevropa davlatlari bilan ishlash, xalqaro grantlar va korporatsiyalarda yuqori maoshli faoliyat yuritishni istovchilar uchun mo'ljallangan 28 oylik maxsus kombinatsiya.",
    schedule: 'Dush - Chor - Juma / Sesh - Pay - Shan',
    requirements: ['Yuqori intizom', 'Darslarda faol qatnashish', "Uy vazifalarini to'liq bajarish"],
    features: ['Ingliz, Koreys, Nemis va Yapon tillari', 'TOPIK va JLPT tayyorgarligi', "Bitiruvchilarga 100% ISH BILAN TA'MINLASH"],
    instructorId: 't1',
    syllabus: [
      { id: 'k2-1', module: 1, title: '1-Bosqich: Ingliz Tili (7 Oylik)', duration: '1 - 7 oylar', topics: ["Grammatika, Lug'at boyligi, Fluent Speaking, IELTS Foundation"] },
      { id: 'k2-2', module: 2, title: '2-Bosqich: Koreys Tili (7 Oylik)', duration: '8 - 14 oylar', topics: ["Hangul alifbosi, Boshlang'ich grammatika, TOPIK 1-2, So'zlashuv"] },
      { id: 'k2-3', module: 3, title: '3-Bosqich: Nemis Tili (7 Oylik)', duration: '15 - 21 oylar', topics: ["Nemis tili A1-A2, Boshlang'ich B1, So'zlashuv va Muloqot"] },
      { id: 'k2-4', module: 4, title: '4-Bosqich: Yapon Tili (7 Oylik)', duration: '22 - 28 oylar', topics: ["Hiragana, Katakana, Boshlang'ich Kanji, JLPT N5-N4, Ishga Joylashtirish"] }
    ]
  },
  {
    id: 'komb3',
    title: 'Kombinatsiya 3: Rus (7 oy) + Ingliz (7 oy) + Xitoy (7 oy) + Yapon (7 oy)',
    slug: 'kombinatsiya-3-rus-ingliz-xitoy-yapon',
    category: "Ta'lim Kombinatsiyalari",
    level: "Mukammal",
    durationMonths: 28,
    lessonsPerWeek: 3,
    hoursPerLesson: 2,
    price: 900000,
    discountPrice: 750000,
    rating: 4.98,
    reviewsCount: 118,
    studentsCount: 260,
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=80',
    isPopular: true,
    isActive: true,
    shortDescription: "28 oylik kompleks dastur: Rus tili (7 oy) -> Ingliz tili (7 oy) -> Xitoy tili (7 oy) -> Yapon tili (7 oy). Xalqaro diplomatiya va savdo tillari.",
    fullDescription: "Dunyoning eng yirik iqtisodiyotlari va xalqaro savdo bozorlarida talab yuqori bo'lgan 4 ta tilni professional o'rganish kombinatsiyasi. 100% ish bilan ta'minlash kafolati bilan.",
    schedule: 'Dush - Chor - Juma / Sesh - Pay - Shan',
    requirements: ["Qat'iy intizom", 'Kunlik uyga vazifalar', "O'qishga jiddiy yondashuv"],
    features: ['Rus, Ingliz, Xitoy va Yapon tillari', "Xalqaro biznes va savdo yo'nalishi", "Kafolatlangan ish o'rni"],
    instructorId: 't7',
    syllabus: [
      { id: 'k3-1', module: 1, title: '1-Bosqich: Rus Tili (7 Oylik)', duration: '1 - 7 oylar', topics: ["Grammatika, Adabiy nutq, So'zlashuv, Ishbilarmonlik rus tili"] },
      { id: 'k3-2', module: 2, title: '2-Bosqich: Ingliz Tili (7 Oylik)', duration: '8 - 14 oylar', topics: ['General English, Speaking Fluency, Academic Reading & Writing'] },
      { id: 'k3-3', module: 3, title: '3-Bosqich: Xitoy Tili (7 Oylik)', duration: '15 - 21 oylar', topics: ['Pinyin, Ierogliflar, HSK tayyorgarligi, Muloqot'] },
      { id: 'k3-4', module: 4, title: '4-Bosqich: Yapon Tili (7 Oylik)', duration: '22 - 28 oylar', topics: ["Yapon alifbolari, Kanji, JLPT dasturi, Ish bilan ta'minlash"] }
    ]
  },
  {
    id: 'komb4',
    title: 'Kombinatsiya 4: Ingliz (7 oy) + Rus (7 oy) + Fors (7 oy) + Nemis (7 oy)',
    slug: 'kombinatsiya-4-ingliz-rus-fors-nemis',
    category: "Ta'lim Kombinatsiyalari",
    level: "Mukammal",
    durationMonths: 28,
    lessonsPerWeek: 3,
    hoursPerLesson: 2,
    price: 900000,
    discountPrice: 750000,
    rating: 4.97,
    reviewsCount: 140,
    studentsCount: 310,
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=900&q=80',
    isPopular: true,
    isActive: true,
    shortDescription: "28 oylik kompleks dastur: Ingliz tili (7 oy) -> Rus tili (7 oy) -> Fors tili (7 oy) -> Nemis tili (7 oy). Klassik Yevroosiyo tillari integratsiyasi.",
    fullDescription: "Tarixiy, diplomatik va zamonaviy xalqaro maydonda eng nufuzli 4 ta tilni mukammal darajaga olib chiqadigan 28 oylik chuqurlashtirilgan o'quv kombinatsiyasi.",
    schedule: 'Dush - Chor - Juma / Sesh - Pay - Shan',
    requirements: ["Intizom va mas'uliyat", "Darslarga 100% qatnashish"],
    features: ['Ingliz, Rus, Fors va Nemis tillari', 'Tarjimonlik va tahlil qobiliyati', "Ish bilan ta'minlash kafolati"],
    instructorId: 't1',
    syllabus: [
      { id: 'k4-1', module: 1, title: '1-Bosqich: Ingliz Tili (7 Oylik)', duration: '1 - 7 oylar', topics: ["Grammatika, So'zlashuv, IELTS tayyorgarligi"] },
      { id: 'k4-2', module: 2, title: '2-Bosqich: Rus Tili (7 Oylik)', duration: '8 - 14 oylar', topics: ["Mukammal grammatika, Boy so'z zaxirasi, Muloqot"] },
      { id: 'k4-3', module: 3, title: '3-Bosqich: Fors Tili (7 Oylik)', duration: '15 - 21 oylar', topics: ['Sharq tillari poydevori, Fors tili va tarjimonlik'] },
      { id: 'k4-4', module: 4, title: '4-Bosqich: Nemis Tili (7 Oylik)', duration: '22 - 28 oylar', topics: ['Nemis tili A1-B1, Goethe sertifikatiga tayyorgarlik, Ishga joylashish'] }
    ]
  },

  // YAKKA TARTIBDAGI 7 OYLIK INTENSIV TIL KURSLARI
  {
    id: 'til-eng',
    title: 'Intensiv Ingliz Tili Kursi (7 Oylik)',
    slug: 'intensiv-ingliz-tili-kursi',
    category: 'Xorijiy Tillar',
    level: "Boshlang'ich",
    durationMonths: 7,
    lessonsPerWeek: 3,
    hoursPerLesson: 2,
    price: 450000,
    discountPrice: 380000,
    rating: 4.98,
    reviewsCount: 210,
    studentsCount: 820,
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=900&q=80',
    isPopular: true,
    isActive: true,
    shortDescription: "7 oylik intensiv ingliz tili: Grammatika, boy so'z zaxirasi (Vocabulary), erkin og'zaki so'zlashuv (Speaking) va IELTS poydevori.",
    fullDescription: "Noldan boshlab 7 oy ichida erkin ingliz tilida gapirish va yozish darajasiga yeting. Darslar zamonaviy interaktiv metodika va qat'iy intizom asosida olib boriladi.",
    schedule: 'Dush - Chor - Juma: 09:00, 14:00, 18:00',
    requirements: ['Intizom', 'Uy vazifalarini bajarish'],
    features: ["7 oyda erkin so'zlashuv", 'Audio va video materiallar', 'Haftalik Speaking Club'],
    instructorId: 't1',
    syllabus: [
      { id: 'te-1', module: 1, title: 'Beginner & Elementary', duration: '1-2 oy', topics: ['Alifbo, Asosiy zamonlar, Oddiy muloqot'] },
      { id: 'te-2', module: 2, title: 'Pre-Intermediate', duration: '3-4 oy', topics: ['Murakkab zamonlar, Listening amaliyoti, Dialoglar'] },
      { id: 'te-3', module: 3, title: 'Intermediate & Fluency', duration: '5-7 oy', topics: ["Erkin so'zlashuv, Taqdimotlar, IELTS tayyorgarligi"] }
    ]
  },
  {
    id: 'til-nemis',
    title: 'Intensiv Nemis Tili Kursi (7 Oylik)',
    slug: 'intensiv-nemis-tili-kursi',
    category: 'Xorijiy Tillar',
    level: "Boshlang'ich",
    durationMonths: 7,
    lessonsPerWeek: 3,
    hoursPerLesson: 2,
    price: 480000,
    discountPrice: 400000,
    rating: 4.95,
    reviewsCount: 95,
    studentsCount: 420,
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=900&q=80',
    isPopular: true,
    isActive: true,
    shortDescription: "7 oyda A1 va A2 darajalarini to'liq egallash, Germaniyada ta'lim va Ausbildung dasturlariga tayyorgarlik.",
    fullDescription: "Germaniyada ishlash va o'qish istagidagi yoshlar uchun maxsus Goethe instituti dasturlari asosida ishlab chiqilgan 7 oylik tizimli kurs.",
    schedule: 'Sesh - Pay - Shan: 10:00, 16:00',
    requirements: ['Intizom', "Nemis tili grammatikasini qunt bilan o'rganish"],
    features: ['Goethe A1-A2 sertifikati kafolati', "Ausbildung bo'yicha to'liq yo'l-yo'riq"],
    instructorId: 't3',
    syllabus: [
      { id: 'tn-1', module: 1, title: 'A1 Daraja (Start Deutsch 1)', duration: '1-3 oy', topics: ['Talaffuz, Artikellar, Kundalik iboralar'] },
      { id: 'tn-2', module: 2, title: 'A2 Daraja (Start Deutsch 2)', duration: '4-7 oy', topics: ['Murakkab grammatika, Matnlar, Goethe imtihoniga tayyorgarlik'] }
    ]
  },
  {
    id: 'til-xitoy',
    title: 'Intensiv Xitoy Tili Kursi (7 Oylik)',
    slug: 'intensiv-xitoy-tili-kursi',
    category: 'Xorijiy Tillar',
    level: "Boshlang'ich",
    durationMonths: 7,
    lessonsPerWeek: 3,
    hoursPerLesson: 2,
    price: 500000,
    discountPrice: 420000,
    rating: 4.96,
    reviewsCount: 88,
    studentsCount: 360,
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=900&q=80',
    isPopular: true,
    isActive: true,
    shortDescription: "Pinyin, tonlar, ierogliflar yozish texnikasi va HSK 1-3 imtihonlariga 7 oylik tayyorgarlik kursi.",
    fullDescription: "Xitoy tili noldan boshlab o'rgatiladi. 7 oy ichida 600 dan ortiq ierogliflarni o'rganib, erkin muloqot qilish ko'nikmasiga ega bo'lasiz.",
    schedule: 'Dush - Chor - Juma: 15:00',
    requirements: ["Qat'iy intizom va xattotlikka sabr"],
    features: ['HSK sertifikatiga tayyorgarlik', 'Xitoy universitetlari grantlari'],
    instructorId: 't4',
    syllabus: [
      { id: 'tx-1', module: 1, title: "Fonetika va Boshlang'ich Ierogliflar", duration: '1-2 oy', topics: ['Pinyin, 4 ta ton, 150 ta asosiy belgi'] },
      { id: 'tx-2', module: 2, title: 'HSK 1-2 Tayyorgarlik', duration: '3-5 oy', topics: ['Grammatika, Dialoglar, Tinglash amaliyoti'] },
      { id: 'tx-3', module: 3, title: "HSK 3 va Erkin So'zlashuv", duration: '6-7 oy', topics: ['600+ ieroglif, Xitoy madaniyati va Biznes tili'] }
    ]
  },
  {
    id: 'til-koreys',
    title: 'Intensiv Koreys Tili Kursi (7 Oylik)',
    slug: 'intensiv-koreys-tili-kursi',
    category: 'Xorijiy Tillar',
    level: "Boshlang'ich",
    durationMonths: 7,
    lessonsPerWeek: 3,
    hoursPerLesson: 2,
    price: 480000,
    discountPrice: 400000,
    rating: 4.94,
    reviewsCount: 76,
    studentsCount: 310,
    image: 'https://images.unsplash.com/photo-1538669715315-15509e53a25d?auto=format&fit=crop&w=900&q=80',
    isPopular: true,
    isActive: true,
    shortDescription: "Hangul alifbosi, TOPIK 1-2 darajalari va Koreyada ta'lim olish yoki ishlash uchun 7 oylik intensiv tayyorgarlik.",
    fullDescription: "Koreys tilining eng nozik qoidalari, hurmat shakllari va kundalik hayotdagi so'zlashuv amaliyoti 7 oyda o'rgatiladi.",
    schedule: 'Sesh - Pay - Shan: 14:00',
    requirements: ["Intizom va muntazam mashg'ulot"],
    features: ['TOPIK 1-2 kafolati', "Koreyada o'qish va viza bo'yicha konsultatsiya"],
    instructorId: 't5',
    syllabus: [
      { id: 'tk-1', module: 1, title: 'Hangul va Asosiy Grammatika', duration: '1-2 oy', topics: ["Alifbo, Bo'g'inlar, To'g'ri talaffuz"] },
      { id: 'tk-2', module: 2, title: "TOPIK 1 va So'zlashuv", duration: '3-5 oy', topics: ["Koreys tili fe'llari, Kundalik dialoglar"] },
      { id: 'tk-3', module: 3, title: 'TOPIK 2 va Testlar', duration: '6-7 oy', topics: ['Rasmiy uslub, Imtihon strategiyalari'] }
    ]
  },
  {
    id: 'til-yapon',
    title: 'Intensiv Yapon Tili Kursi (7 Oylik)',
    slug: 'intensiv-yapon-tili-kursi',
    category: 'Xorijiy Tillar',
    level: "Boshlang'ich",
    durationMonths: 7,
    lessonsPerWeek: 3,
    hoursPerLesson: 2,
    price: 500000,
    discountPrice: 420000,
    rating: 4.97,
    reviewsCount: 64,
    studentsCount: 240,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=80',
    isPopular: true,
    isActive: true,
    shortDescription: "Hiragana, Katakana, Kanji belgilari va JLPT N5-N4 xalqaro imtihonlariga 7 oylik tayyorgarlik.",
    fullDescription: "Yaponiya madaniyati, ish etikasi va tili bo'yicha 7 oylik professional kurs. JLPT N5 va N4 darajalariga to'liq tayyorlaydi.",
    schedule: 'Dush - Chor - Juma: 16:30',
    requirements: ['Intizom va sabr-toqat'],
    features: ['JLPT N5-N4 tayyorgarligi', "Yaponiya grantlari yo'llanmasi"],
    instructorId: 't6',
    syllabus: [
      { id: 'ty-1', module: 1, title: 'Hiragana va Katakana', duration: '1-2 oy', topics: ["Alifbolar, Asosiy so'zlar va iboralar"] },
      { id: 'ty-2', module: 2, title: 'Minna no Nihongo (1-qism)', duration: '3-5 oy', topics: ['Kanji (100 ta), Grammatika, Dialoglar'] },
      { id: 'ty-3', module: 3, title: 'JLPT N5 Imtihoni', duration: '6-7 oy', topics: ["Test tahlili, Tinglash, So'zlashuv amaliyoti"] }
    ]
  },
  {
    id: 'til-fors',
    title: 'Intensiv Fors Tili Kursi (7 Oylik)',
    slug: 'intensiv-fors-tili-kursi',
    category: 'Xorijiy Tillar',
    level: "Boshlang'ich",
    durationMonths: 7,
    lessonsPerWeek: 3,
    hoursPerLesson: 2,
    price: 450000,
    discountPrice: 380000,
    rating: 4.96,
    reviewsCount: 82,
    studentsCount: 390,
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80',
    isPopular: true,
    isActive: true,
    shortDescription: "Sharq mumtoz va zamonaviy fors tili, alifbo, grammatika va tarjimonlik bo'yicha 7 oylik maxsus kurs.",
    fullDescription: "Fors tilini noldan boshlab o'rganish, qadimiy qo'lyozmalarni o'qish va zamonaviy Erondagi jonli muloqotni o'zlashtirish dasturi.",
    schedule: 'Sesh - Pay - Shan: 16:00',
    requirements: ['Intizom', 'Sharq madaniyatiga qiziqish'],
    features: ['Tarjimonlik amaliyoti', 'Mumtoz fors adabiyoti tahlili'],
    instructorId: 't2',
    syllabus: [
      { id: 'tf-1', module: 1, title: 'Fors Alifbosi va Tovushlar', duration: '1-2 oy', topics: ["Harflar, Bo'g'inlar, Husnixat qoidalari"] },
      { id: 'tf-2', module: 2, title: 'Grammatika va Leksika', duration: '3-5 oy', topics: ['Zamonlar, Gap tuzilishi, Matnlar mutolaasi'] },
      { id: 'tf-3', module: 3, title: 'Jonli Muloqot va Tarjima', duration: '6-7 oy', topics: ['Zamonaviy fors tili, Tarjima texnikasi'] }
    ]
  },
  {
    id: 'til-rus',
    title: 'Intensiv Rus Tili Kursi (7 Oylik)',
    slug: 'intensiv-rus-tili-kursi',
    category: 'Xorijiy Tillar',
    level: "Boshlang'ich",
    durationMonths: 7,
    lessonsPerWeek: 3,
    hoursPerLesson: 2,
    price: 400000,
    discountPrice: 350000,
    rating: 4.98,
    reviewsCount: 190,
    studentsCount: 750,
    image: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=900&q=80',
    isPopular: true,
    isActive: true,
    shortDescription: "Rus tili grammatikasi, to'g'ri urg'u, erkin so'zlashuv va ishbilarmonlik aloqalari uchun 7 oylik kurs.",
    fullDescription: "Rus tilida erkin va xatosiz so'zlashish, yozma va og'zaki nutqni mukammallashtirish uchun eng samarali 7 oylik dastur.",
    schedule: 'Dush - Chor - Juma: 11:00, 17:00',
    requirements: ['Intizom', 'Darslarda faol ishtirok'],
    features: ['Xatosiz grammatika', "To'g'ri talaffuz va boy so'z boyligi"],
    instructorId: 't7',
    syllabus: [
      { id: 'tr-1', module: 1, title: 'Grammatika Poydevori', duration: '1-2 oy', topics: ["Rod, Padyejlar, Fe'llar tuslanishi"] },
      { id: 'tr-2', module: 2, title: "So'zlashuv va Muloqot", duration: '3-5 oy', topics: ["Nutq o'stirish, Erkin fikr bildirish, Dialoglar"] },
      { id: 'tr-3', module: 3, title: 'Ishbilarmonlik Rus Tili', duration: '6-7 oy', topics: ['Hujjatlar bilan ishlash, Taqdimotlar, Rasmiy nutq'] }
    ]
  }
];

export const initialLeads: Lead[] = [
  {
    id: 'l1',
    fullName: 'Shavkat Mamatov',
    phone: '+998 91 951 73 35',
    courseId: 'komb1',
    courseTitle: 'Kombinatsiya 1: Ingliz + Fors + Nemis + Xitoy (28 oy)',
    status: 'new',
    source: 'Bosh sahifa banner',
    notes: "28 oylik kombinatsiyaga yozilmoqchi. Qarshi shahridan.",
    createdAt: '2026-08-20 10:15'
  },
  {
    id: 'l2',
    fullName: 'Zarnigor Tojiyeva',
    phone: '+998 90 333 44 55',
    courseId: 'komb2',
    courseTitle: 'Kombinatsiya 2: Ingliz + Koreys + Nemis + Yapon (28 oy)',
    status: 'contacted',
    source: 'Kurs batafsil',
    notes: "Bog'lanildi. Ertaga ota-onasi bilan markazga keladi.",
    createdAt: '2026-08-20 09:30'
  }
];

export const initialReviews: Review[] = [
  {
    id: 'r1',
    studentName: 'Jasurbek Omonov',
    studentRole: 'Kombinatsiya 1 talabasi',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
    courseTitle: 'Kombinatsiya 1 (28 oylik)',
    rating: 5,
    comment: "Al-Hakim At-Termeziy markazida intizom haqiqatda yuqori darajada. 7 oy ichida ingliz tilini, hozir esa fors tilini ajoyib o'rganyapmiz. Ustozlarga katta rahmat!",
    date: '15 Avgust, 2026',
    isApproved: true
  },
  {
    id: 'r2',
    studentName: 'Malika Ergasheva',
    studentRole: "Nemis tili kursi o'quvchisi",
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    courseTitle: 'Intensiv Nemis Tili (7 oy)',
    rating: 5,
    comment: "Nemis tilini noldan boshlagan edim. 7 oy ichida Goethe B1 imtihonidan muvaffaqiyatli o'tdim va Germaniyaga grant yutdim!",
    date: '10 Avgust, 2026',
    isApproved: true
  }
];

export const initialBlogPosts: BlogPost[] = [
  {
    id: 'p1',
    title: "Nega 28 Oylik Ta'lim Kombinatsiyasi Kelajak Uchun Eng To'g'ri Tanlov?",
    slug: '28-oylik-talim-kombinatsiyasi-afzalliklari',
    excerpt: "4 ta tilni mukammal bilgan inson dunyoning istalgan nuqtasida yuqori talabga ega bo'ladi. Al-Hakim At-Termeziy markazining noyob metodikasi haqida.",
    content: "Bugungi global dunyoda bitta til bilish oddiy holatga aylandi. Ammo bir vaqtning o'zida Ingliz, Nemis, Xitoy va Fors tillarida erkin fikrlay oladigan mutaxassislar — haqiqiy noyob kadrlardir.\n\nAl-Hakim At-Termeziy o'quv markazida yo'lga qo'yilgan 28 oylik ta'lim kombinatsiyalari har 7 oyda bitta tilni noldan professional darajagacha yetkazishga mo'ljallangan...",
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    author: 'Al-Hakim At-Termeziy Metodisti',
    authorRole: 'Bosh Metodist',
    category: "Ta'lim Metodikasi",
    readTime: '4 daqiqa',
    createdAt: '18 Avgust, 2026',
    tags: ['Tillar', 'Kombinatsiyalar', 'Intizom', 'Qarshi'],
    views: 1840,
    isPublished: true
  },
  {
    id: 'p2',
    title: "Intizom — Muvaffaqiyatning Yagona Kaliti",
    slug: 'intizom-muvaffaqiyatning-yagona-kaliti',
    excerpt: "Qanday qilib qat'iy intizom orqali 7 oyda xorijiy tilni mukammal o'rganish mumkin? Real tajribalar va tavsiyalar.",
    content: "Bizning o'quv markazimiz shiori: 'INTIZOMNI SEVUVCHILAR UCHUN'. Chunki intizomsiz natijaga erishib bo'lmaydi. Har kuni 2 soatlik dars, uy vazifasini muntazam bajarish va ustozlar nazorati 100% natijani kafolatlaydi...",
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
    author: 'Ustoz Rustam Qodirov',
    authorRole: 'Yetakchi Ustoz',
    category: 'Motivatsiya',
    readTime: '3 daqiqa',
    createdAt: '14 Avgust, 2026',
    tags: ['Intizom', 'Motivatsiya', "Ta'lim"],
    views: 1420,
    isPublished: true
  }
];

export const initialStudents: Student[] = [
  {
    id: 'st1',
    fullName: 'Shavkat Mamatov',
    phone: '+998 91 951 73 35',
    courseId: 'komb1',
    courseTitle: 'Kombinatsiya 1 (28 oy)',
    groupName: 'KOMB-1-2026',
    paymentStatus: 'paid',
    paidAmount: 750000,
    totalAmount: 750000,
    progress: 88,
    joinedAt: '2026-01-10'
  },
  {
    id: 'st2',
    fullName: 'Zarnigor Tojiyeva',
    phone: '+998 90 333 44 55',
    courseId: 'komb2',
    courseTitle: 'Kombinatsiya 2 (28 oy)',
    groupName: 'KOMB-2-2026',
    paymentStatus: 'paid',
    paidAmount: 750000,
    totalAmount: 750000,
    progress: 92,
    joinedAt: '2026-02-01'
  }
];

export const initialSiteSettings: SiteSettings = {
  siteName: "AL-HAKIM AT-TERMEZIY O'QUV MARKAZI",
  phoneMain: "+998 91 951 73 35",
  phoneSecondary: "+998 91 951 73 35",
  email: "info@attermeziy.uz",
  address: "Qashqadaryo viloyati, Qarshi shahri, Al-Hakim At-Termeziy o'quv markazi binosi",
  city: "Qarshi shahar, O'zbekiston",
  workingHours: "Dushanba - Shanba: 08:00 - 20:00 (Yakshanba dam olish)",
  telegramLink: "https://t.me/al_hakim_at_termeziy",
  instagramLink: "https://instagram.com/edu_qarshi",
  youtubeLink: "https://youtube.com/@al_hakim_at_termeziy",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49603.62635925345!2d65.7533355!3d38.8617835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4ea63b2fa7975d%3A0x6a053c8296a29f8f!2sKarshi%2C%20Qashqadaryo%20Region!5e0!3m2!1sen!2suz!4v1700000000000!5m2!1sen!2suz",
  metaTitle: "AL-HAKIM AT-TERMEZIY O'QUV MARKAZI - Intizomni Sevuvchilar Uchun",
  metaDescription: "28 oylik ta'lim kombinatsiyalariga mos 4 ta tilga muvofiq tafakkur. Kursni muvaffaqiyatli tugatgan talabalar ish bilan ta'minlanadi. Qarshi shahar, Tel: +998 91 951 73 35",
  telegramBotToken: "",
  telegramChatId: ""
};
