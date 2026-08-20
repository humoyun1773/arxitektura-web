import { Course, Teacher, Lead, Review, BlogPost, Student, HeroBanner, SiteSettings } from '../types';

export const initialBanners: HeroBanner[] = [
  {
    id: 'b1',
    badge: '🚀 2026-yilgi Yangi Mavsum Qabuli Ochiq',
    title: 'Kelajak Kasblarini Professional Darajada',
    highlightText: "O'rganing va Karyerangizni Boshlang",
    subtitle: "Arxitektura, 3D modellashtirish, IT dasturlash va Grafik dizayn bo'yicha amaliyotga asoslangan zamonaviy ta'lim. 100% amaliy portfolio va ishga joylashish ko'magi bilan.",
    ctaText: 'Kurslarga Yozilish',
    statsText: '12,500+ Bitiruvchilar | 94% Ish bilan ta\'minlanganlik',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    isActive: true,
  },
  {
    id: 'b2',
    badge: '🏛️ Arxitektura & 3D Visualizatsiya',
    title: 'AutoCAD, 3Ds Max & Corona Renderer orqali',
    highlightText: 'Professional Me\'mor-Dizayner Bo\'ling',
    subtitle: 'Noldan boshlab real binolar, interyer va eksteryer loyihalarini modellashtirish hamda fotorealistik renderlar yaratishni eng kuchli mutaxassislardan o\'rganing.',
    ctaText: 'Bepul Darsga Yozilish',
    statsText: 'Xalqaro standartdagi sertifikat va real buyurtmalar',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    isActive: true,
  },
  {
    id: 'b3',
    badge: '💻 Zamonaviy IT Dasturlash',
    title: 'Full-Stack Web Dasturchi Bo\'ling va',
    highlightText: 'Xalqaro IT Bozoriga Chiqing',
    subtitle: 'React, Node.js, Next.js va TypeScript texnologiyalari orqali yuqori maoshli dasturchi bo\'ling. Real loyihalar, jamoaviy ishlash va xalqaro frilans sirlari.',
    ctaText: 'Kurs Dasturini Ko\'rish',
    statsText: '30+ Real Loyihalar | Karyera markazi ko\'magi',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    isActive: true,
  }
];

export const initialTeachers: Teacher[] = [
  {
    id: 't1',
    name: 'Jahongir Rustamov',
    role: 'Bosh Arxitektor & 3D Vizualizator',
    bio: '10 yildan ortiq xalqaro arxitektura loyihalari tajribasiga ega. Toshkent va Dubaydagi yirik turar-joy majmualari bosh arxitektori.',
    experienceYears: 10,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    specializations: ['3Ds Max', 'Corona Renderer', 'AutoCAD', 'Revit', 'BIM'],
    courseIds: ['c1', 'c2'],
    telegram: '@jahongir_arch',
    instagram: 'jahongir.architect',
    linkedin: 'jahongir-rustamov',
    rating: 4.98,
    studentsTaught: 1420,
    certificates: ['Autodesk Certified Professional', 'Chaos Group Official Instructor']
  },
  {
    id: 't2',
    name: 'Sardorbek Alimov',
    role: 'Senior Full-Stack Engineer (EPAM)',
    bio: 'React, Next.js, Node.js va Cloud arxitekturasi bo\'yicha 8 yillik tajribaga ega dasturchi. Yirik fin-tech loyihalar yetakchisi.',
    experienceYears: 8,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    specializations: ['React.js', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL'],
    courseIds: ['c3'],
    telegram: '@sardor_dev',
    linkedin: 'sardorbek-alimov',
    rating: 4.95,
    studentsTaught: 980,
    certificates: ['AWS Certified Solutions Architect', 'Meta Certified Front-End Developer']
  },
  {
    id: 't3',
    name: 'Madina Rahimova',
    role: 'Interyer Dizayner & Art Director',
    bio: 'Zamonaviy interyer konsepsiyalari, ergonomika va materialshunoslik bo\'yicha 7 yillik amaliyotga ega. 50+ muvaffaqiyatli kafe va kvartira loyihalari muallifi.',
    experienceYears: 7,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    specializations: ['Interior Design', 'SketchUp', 'Photoshop', 'Moodboard creation'],
    courseIds: ['c2', 'c5'],
    instagram: 'madina_interior_art',
    rating: 4.92,
    studentsTaught: 850,
    certificates: ['Milan Design Institute Certificate', 'Interior Ergonomics Specialist']
  },
  {
    id: 't4',
    name: 'Ulug\'bek Tursunov',
    role: 'Senior AI & Python Developer',
    bio: 'Sun\'iy intellekt, Machine Learning va Data Science bo\'yicha tadqiqotchi va amaliyotchi. Chatbotlar va kompyuter ko\'rishi loyihalari muallifi.',
    experienceYears: 6,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    specializations: ['Python', 'Django', 'FastAPI', 'PyTorch', 'Computer Vision'],
    courseIds: ['c4'],
    telegram: '@ulugbek_ai',
    linkedin: 'ulugbek-tursunov',
    rating: 4.96,
    studentsTaught: 640,
    certificates: ['TensorFlow Developer Certificate', 'DeepLearning.AI Specialization']
  },
  {
    id: 't5',
    name: 'Kamola Yusupova',
    role: 'Grafik Dizayner & UI/UX Expert',
    bio: 'Brend identifikatsiyasi, vizual marketing va zamonaviy veb-interfeyslar bo\'yicha 5 yillik yetakchi dizayner.',
    experienceYears: 5,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    specializations: ['Figma', 'Adobe Illustrator', 'Photoshop', 'Brand Strategy'],
    courseIds: ['c5'],
    instagram: 'kamola.designs',
    rating: 4.89,
    studentsTaught: 1100,
    certificates: ['Google UX Design Professional', 'Adobe Certified Expert']
  },
  {
    id: 't6',
    name: 'Farhod Qodirov',
    role: 'IELTS 8.5 Master Instructor',
    bio: 'C2 darajadagi xalqaro til murabbiyi. O\'quvchilari 7.0 - 8.5 ball natija qayd etgan tajribali metodist.',
    experienceYears: 9,
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    specializations: ['IELTS Academic', 'Speaking Fluency', 'Academic Writing', 'Grammar Pro'],
    courseIds: ['c6'],
    telegram: '@farhod_ielts',
    rating: 4.97,
    studentsTaught: 2200,
    certificates: ['CELTA Certified (Cambridge)', 'IELTS Band 8.5 Holder']
  }
];

export const initialCourses: Course[] = [
  {
    id: 'c1',
    title: 'Arxitektura va 3D Visualizatsiya (AutoCAD + 3Ds Max + Corona)',
    slug: 'arxitektura-va-3d-visualizatsiya',
    category: 'Arxitektura & 3D',
    level: "O'rta",
    durationMonths: 6,
    lessonsPerWeek: 3,
    hoursPerLesson: 2,
    price: 1800000,
    discountPrice: 1450000,
    rating: 4.98,
    reviewsCount: 128,
    studentsCount: 650,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    isPopular: true,
    isActive: true,
    shortDescription: "Bino va inshootlar chizmasini AutoCAD'da professional chizish, 3Ds Max'da modellashtirish va Corona Renderer'da fotorealistik tasvirlash kursi.",
    fullDescription: "Ushbu professional kurs davomida siz arxitektura chizmalaridan boshlab yakuniy fotorealistik 3D rendergacha bo'lgan to'liq zanjirni o'rganasiz. Kurs har bir o'quvchining shaxsiy portfolio loyihasi ustida ishlashi bilan olib boriladi.",
    schedule: 'Dush - Chor - Juma: 18:30 - 20:30',
    requirements: [
      'Kompyuter bilan ishlashning boshlang\'ich savodxonligi',
      'Kuchli qiziqish va uyga vazifalarni o\'z vaqtida bajarish',
      'Tavsiya etilgan kompyuter: kamida 16GB RAM va diskret video karta'
    ],
    features: [
      '100% amaliyotga yo\'naltirilgan darslar',
      'Real buyurtmachilar bilan ishlash imkoniyati',
      'Autodesk standartlari bo\'yicha sertifikat',
      '3D kutubxonalar va materiallar to\'plami bepul beriladi'
    ],
    instructorId: 't1',
    syllabus: [
      {
        id: 's1',
        module: 1,
        title: 'AutoCAD va Arxitektura Chizmachiligi',
        duration: '1-oy',
        topics: [
          'AutoCAD interfeysi va asosiy chizish instrumentlari',
          'Arxitektura rejalari (Planirovka), fasad va kesimlar',
          'O\'lchamlar, bloklar, qatlamlar (Layers) va masshtablar',
          'Chizmalarni pechatga tayyorlash va PDF formatida chiqarish'
        ]
      },
      {
        id: 's2',
        module: 2,
        title: '3Ds Max: Professional Modellashtirish',
        duration: '2-oy',
        topics: [
          'AutoCAD chizmalarini 3Ds Max\'ga to\'g\'ri import qilish',
          'Poligonal modellashtirish texnikalari (Editable Poly)',
          'Devorlar, eshiklar, derazalar va murakkab mebel modellari',
          'Eksteryer binolar geometriyasini qurish'
        ]
      },
      {
        id: 's3',
        module: 3,
        title: 'Corona Renderer va Yoritish Sirlari',
        duration: '3-4-oy',
        topics: [
          'Corona Sun & Sky, HDRI kartalari bilan ishlash',
          'Sun\'iy yorug\'lik manbalari (IES chiroqlar, Spot, Led lentalar)',
          'Kamera parametrlari, kompozitsiya va DOF fokus effektlari',
          'Murakkab PBR materiallar (Shisha, Metall, Marmar, Yog\'och)'
        ]
      },
      {
        id: 's4',
        module: 4,
        title: 'Post-Production & Portfolio himoyasi',
        duration: '5-6-oy',
        topics: [
          'Photoshop orqali renderlarni qayta ishlash (Camera Raw, Render Elements)',
          'Atrof-muhit: daraxtlar, odamlar, mashinalar va yashillik qo\'shish',
          'Behance va Artstation uchun jozibali portfolio yaratish',
          'Real buyurtmachi bilan imtihon loyihasini himoya qilish'
        ]
      }
    ]
  },
  {
    id: 'c2',
    title: 'Zamonaviy Interyer Dizayn va Rejalashtirish',
    slug: 'zamonaviy-interyer-dizayn',
    category: 'Arxitektura & 3D',
    level: "Boshlang'ich",
    durationMonths: 5,
    lessonsPerWeek: 3,
    hoursPerLesson: 2,
    price: 1600000,
    discountPrice: 1300000,
    rating: 4.94,
    reviewsCount: 94,
    studentsCount: 480,
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    isPopular: true,
    isActive: true,
    shortDescription: "Xonadonlar, kottejlar va tijoriy binolar interyerini loyihalash, ranglar psixologiyasi, ergonomika va material tanlash.",
    fullDescription: "Kvartira yoki ofis interyerini noldan loyihalash, mebellarni ergonomik joylashtirish, smeta tuzish va mijozga taqdimot qilish ko'nikmalarini egallang.",
    schedule: 'Sesh - Pay - Shan: 16:00 - 18:00',
    requirements: ['Maxsus tayyorgarlik talab etilmaydi', 'Ijodiy fikrlashga qiziqish'],
    features: ['Real xonadon loyihasi ustida amaliyot', 'Dizaynerlar klubiga a\'zolik', 'Tugallangan 3 ta portfolio ishi'],
    instructorId: 't3',
    syllabus: [
      {
        id: 's21',
        module: 1,
        title: 'Dizayn asoslari va Ergonomika',
        duration: '1-oy',
        topics: ['Interyer stillari (Minimalizm, Loft, Neoklassika, Japandi)', 'Ergonomika qoidalari va maydonni zonalash', 'Ranglar uyg\'unligi va yoritish ssenariylari']
      },
      {
        id: 's22',
        module: 2,
        title: 'Chizma va Planirovka loyihalash',
        duration: '2-3-oy',
        topics: ['Mebellar joylashuvi rejasi', 'Santexnika va elektr montaj rejalari', 'Shift va pol qoplamalari spetsifikatsiyasi']
      },
      {
        id: 's23',
        module: 3,
        title: '3D Vizualizatsiya va Mijoz bilan ishlash',
        duration: '4-5-oy',
        topics: ['Moodboard va kollajlar', '3D tasvirlash va taqdimot', 'Materiallar smetasini hisoblash va mualliflik nazorati']
      }
    ]
  },
  {
    id: 'c3',
    title: 'Full-Stack Web Dasturlash (React, Node.js, Next.js)',
    slug: 'full-stack-web-dasturlash',
    category: 'IT & Dasturlash',
    level: "Mukammal",
    durationMonths: 8,
    lessonsPerWeek: 3,
    hoursPerLesson: 2.5,
    price: 1900000,
    discountPrice: 1550000,
    rating: 4.96,
    reviewsCount: 210,
    studentsCount: 890,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    isPopular: true,
    isActive: true,
    shortDescription: "HTML5, CSS3, JavaScript, TypeScript, React, Next.js, Node.js, Express va PostgreSQL orqali to'liq veb-ilovalarni yaratish.",
    fullDescription: "Noldan professional darajagacha zamonaviy veb-dasturchi bo'ling. 8 oy davomida frontend va backendni chuqur o'rganib, 10 dan ortiq real loyiha qurasiz.",
    schedule: 'Dush - Chor - Juma: 14:00 - 16:30',
    requirements: ['Mantiqiy fikrlash', 'Haftasiga kamida 12 soat vaqt ajratish'],
    features: ['Karyera markazi bilan rezyume va intervyu tayyorgarligi', 'GitHub da boy portfolio', 'Hackathonlar va kod review'],
    instructorId: 't2',
    syllabus: [
      {
        id: 's31',
        module: 1,
        title: 'HTML, Modern CSS & Tailwind CSS',
        duration: '1-oy',
        topics: ['Semantik HTML5 va SEO', 'Flexbox va CSS Grid tizimlari', 'Tailwind CSS va Responsive dizayn']
      },
      {
        id: 's32',
        module: 2,
        title: 'JavaScript & TypeScript Chuqurlashtirilgan',
        duration: '2-3-oy',
        topics: ['ES6+, Asinxron JS, Promises & Async/Await', 'DOM manipulyatsiyasi va Eventlar', 'TypeScript turlari, interfeyslar va generiklar']
      },
      {
        id: 's33',
        module: 3,
        title: 'React.js & Next.js 15 Full-Stack',
        duration: '4-5-oy',
        topics: ['React Hooks, Custom Hooks, Context API', 'Server Components, SSR & SSG Next.js da', 'Zustand & TanStack Query bilan state management']
      },
      {
        id: 's34',
        module: 4,
        title: 'Node.js, PostgreSQL, Docker & Deployment',
        duration: '6-8-oy',
        topics: ['Express.js REST API va NestJS asoslari', 'PostgreSQL & Prisma ORM', 'JWT autentifikatsiya, xavfsizlik va Docker', 'VPS serverga CI/CD bilan deploy qilish']
      }
    ]
  },
  {
    id: 'c4',
    title: 'Python va Sun\'iy Intellekt (AI & Data Science)',
    slug: 'python-va-suniy-intellekt',
    category: 'IT & Dasturlash',
    level: "O'rta",
    durationMonths: 6,
    lessonsPerWeek: 3,
    hoursPerLesson: 2,
    price: 1750000,
    discountPrice: 1400000,
    rating: 4.95,
    reviewsCount: 88,
    studentsCount: 420,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80',
    isPopular: false,
    isActive: true,
    shortDescription: "Python sintaksisi, ma'lumotlar tahlili (Pandas, NumPy), Machine Learning, neyron tarmoqlar va Telegram botlar yaratish.",
    fullDescription: "Sun'iy intellekt davrida eng talabgir dasturlash tilini o'rganing. Katta ma'lumotlar bilan ishlash, bashorat qiluvchi AI modellari va avtomatlashtirish tizimlarini yarating.",
    schedule: 'Sesh - Pay - Shan: 19:00 - 21:00',
    requirements: ['Matematika va mantiqqa qiziqish'],
    features: ['Kaggle musobaqalariga tayyorgarlik', 'Real AI modellarini amalda sinash', 'Telegram botlar bilan integratsiya'],
    instructorId: 't4',
    syllabus: [
      {
        id: 's41',
        module: 1,
        title: 'Python Core & OOP',
        duration: '1-oy',
        topics: ['Ma\'lumotlar turlari, sikllar, funksiyalar', 'Obyektga yo\'naltirilgan dasturlash (OOP)', 'Fayllar va xatoliklarni boshqarish']
      },
      {
        id: 's42',
        module: 2,
        title: 'Data Science & Visualizatsiya',
        duration: '2-3-oy',
        topics: ['NumPy, Pandas bilan ma\'lumotlarni tozalash', 'Matplotlib & Seaborn bilan grafiklar chizish', 'Statistika va ehtimollar nazariyasi']
      },
      {
        id: 's43',
        module: 3,
        title: 'Machine Learning & LLM Integratsiya',
        duration: '4-6-oy',
        topics: ['Scikit-learn: Klassifikatsiya va Regressiya', 'Neyron tarmoqlar va Deep Learning asoslari', 'OpenAI API va mahalliy AI modellar integratsiyasi']
      }
    ]
  },
  {
    id: 'c5',
    title: 'Grafik Dizayn va Brending (Photoshop, Illustrator, Figma)',
    slug: 'grafik-dizayn-va-brending',
    category: 'Grafik Dizayn',
    level: "Boshlang'ich",
    durationMonths: 4,
    lessonsPerWeek: 3,
    hoursPerLesson: 2,
    price: 1500000,
    discountPrice: 1200000,
    rating: 4.91,
    reviewsCount: 140,
    studentsCount: 710,
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=900&q=80',
    isPopular: true,
    isActive: true,
    shortDescription: "Logotip, brendbuk, reklama bannerlari, qadoq dizayni va ijtimoiy tarmoqlar uchun professional vizual kontent yaratish.",
    fullDescription: "Brending va reklama olamida o'z o'rningizni toping. Zamonaviy dizayn dasturlarida tez va sifatli ishlashni o'rganing.",
    schedule: 'Dush - Chor - Juma: 16:00 - 18:00',
    requirements: ['Dizayn va kreativlikka qiziqish'],
    features: ['50+ real brending vazifalari', 'Tayyor portfolio bilan bitirish', 'Frilans platformalarida buyurtma olish metodikasi'],
    instructorId: 't5',
    syllabus: [
      {
        id: 's51',
        module: 1,
        title: 'Adobe Photoshop Chuqur O\'rganish',
        duration: '1-oy',
        topics: ['Fotomanipulyatsiya va kollajlar', 'Retush va rang korreksiyasi', 'Reklama bannerlari dizayni']
      },
      {
        id: 's52',
        module: 2,
        title: 'Adobe Illustrator & Vektor Grafika',
        duration: '2-oy',
        topics: ['Vektor asboblar, Pen tool mahorati', 'Logotip yaratish qoidalari va proporsiyalar', 'Poligrafiya va bosmaga tayyorlash']
      },
      {
        id: 's53',
        module: 3,
        title: 'Brend Identity & Figma UI Asoslari',
        duration: '3-4-oy',
        topics: ['Brendbuk tuzish: Shriftlar, ranglar, mockup', 'Figma dasturida vizual materiallar tayyorlash', 'Behance keyslarini professional bezash']
      }
    ]
  },
  {
    id: 'c6',
    title: 'IELTS & General English (Intensiv Guruhlar)',
    slug: 'ielts-va-general-english',
    category: 'Xorijiy Tillar',
    level: "Barcha darajalar",
    durationMonths: 5,
    lessonsPerWeek: 3,
    hoursPerLesson: 2,
    price: 1200000,
    discountPrice: 950000,
    rating: 4.97,
    reviewsCount: 310,
    studentsCount: 1540,
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=80',
    isPopular: false,
    isActive: true,
    shortDescription: "IELTS imtihonidan 7.0+ ball olish uchun maxsus intensiv dastur. Speaking klublar va har haftalik Mock imtihonlar.",
    fullDescription: "Xalqaro darajadagi malakali o'qituvchilar bilan ingliz tilida erkin so'zlashish va IELTS bo'yicha yuqori natijalarga erishing.",
    schedule: 'Har kuni: 09:00 - 11:00 yoki 18:30 - 20:30',
    requirements: ['Darajani aniqlash testidan o\'tish'],
    features: ['Har haftalik bepul Mock imtihoni', 'Native speaker bilan Speaking klublar', 'Individual xatolar tahlili'],
    instructorId: 't6',
    syllabus: [
      {
        id: 's61',
        module: 1,
        title: 'Listening & Reading Mastery',
        duration: '1-2-oy',
        topics: ['Skimming & Scanning texnikalari', 'Audio tuzoqlarni aniqlash', 'Lug\'at boyligini 3000+ so\'zga oshirish']
      },
      {
        id: 's62',
        module: 2,
        title: 'Writing Task 1 & Task 2 Strategiyalari',
        duration: '3-4-oy',
        topics: ['Grafik, jadval va xaritalarni tasvirlash', 'Essay strukturalari (Opinion, Discussion, Solution)', 'Murakkab grammatik konstruksiyalar']
      },
      {
        id: 's63',
        module: 3,
        title: 'Speaking Fluency & Mock Practice',
        duration: '5-oy',
        topics: ['Part 1, 2, 3 uchun strategiyalar', 'Intonatsiya va talaffuz ravonligi', 'Real imtihon simulyatsiyasi']
      }
    ]
  }
];

export const initialReviews: Review[] = [
  {
    id: 'r1',
    name: 'Azizbek Karimov',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
    courseTitle: 'Arxitektura va 3D Visualizatsiya',
    rating: 5,
    comment: 'Markazda o\'qish davomida yaratgan 3D renderlarim orqali hali kursni tugatmasimdanoq arxitektura byurosiga ishga kirdim. Ustozimiz Jahongir akaga cheksiz minnatdorchilik!',
    date: '15.01.2026',
    company: 'Discover Invest',
    workPosition: '3D Me\'mor-Dizayner',
    isApproved: true
  },
  {
    id: 'r2',
    name: 'Shahnoza Usmonova',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    courseTitle: 'Full-Stack Web Dasturlash',
    rating: 5,
    comment: 'Nazariya emas, 100% amaliyot bo\'ldi. React va Next.js ni juda tushunarli qilib o\'rgatishdi. Hozirda xorijiy kompaniyada masofadan turib $1200 oylik bilan ishlayapman.',
    date: '02.02.2026',
    company: 'Fintech Europe',
    workPosition: 'Junior Front-End Dev',
    isApproved: true
  },
  {
    id: 'r3',
    name: 'Bobur Mirzayev',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80',
    courseTitle: 'Zamonaviy Interyer Dizayn',
    rating: 5,
    comment: 'Ergonomika va rejalashtirish darslari ajoyib bo\'ldi. Birinchi mustaqil kvartira dizayni buyurtmasidan kurs pulini 2 barobar qilib chiqardim.',
    date: '20.01.2026',
    company: 'Freelance Studio',
    workPosition: 'Interyer Dizayner',
    isApproved: true
  },
  {
    id: 'r4',
    name: 'Dilnoza Ahmadova',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    courseTitle: 'IELTS & General English',
    rating: 5,
    comment: 'Farhod ustozning yondashuvi sababli 4 oyda natijam 5.5 dan 7.5 gacha ko\'tarildi. Hozirda Polsha universitetiga grant yutdim!',
    date: '10.02.2026',
    company: 'University of Warsaw',
    workPosition: 'Grant Talabasi',
    isApproved: true
  }
];

export const initialLeads: Lead[] = [
  {
    id: 'l1',
    fullName: 'Shavkat Normatov',
    phone: '+998 90 123 45 67',
    courseId: 'c1',
    courseTitle: 'Arxitektura va 3D Visualizatsiya',
    source: 'Bosh sahifa konsultatsiya',
    status: 'new',
    notes: 'Kechki guruh so\'ramoqda, AutoCAD asoslarini biladi.',
    createdAt: '2026-08-19 14:30'
  },
  {
    id: 'l2',
    fullName: 'Nilufar Saidova',
    phone: '+998 93 987 65 43',
    courseId: 'c3',
    courseTitle: 'Full-Stack Web Dasturlash',
    source: 'Kurs sahifasi',
    status: 'contacted',
    notes: 'Bog\'lanildi. Ertaga ochiq darsga keladi.',
    createdAt: '2026-08-18 10:15'
  },
  {
    id: 'l3',
    fullName: 'Bekzod Xolmatov',
    phone: '+998 97 555 12 34',
    courseId: 'c2',
    courseTitle: 'Zamonaviy Interyer Dizayn',
    source: 'Telegram bot',
    status: 'registered',
    notes: 'Birinchi oylik to\'lovni to\'liq amalga oshirdi.',
    createdAt: '2026-08-17 16:45'
  },
  {
    id: 'l4',
    fullName: 'Jasur Temirov',
    phone: '+998 91 333 88 99',
    courseId: 'c5',
    courseTitle: 'Grafik Dizayn va Brending',
    source: 'Instagram reklama',
    status: 'new',
    notes: 'Figma va brending bo\'yicha qiziqdi.',
    createdAt: '2026-08-20 09:10'
  }
];

export const initialBlogPosts: BlogPost[] = [
  {
    id: 'p1',
    title: '2026-yilda 3D Visualizatsiya va Arxitektura Trendlari: Nimani O\'rganish Kerak?',
    slug: '2026-yilda-3d-visualizatsiya-trendlari',
    excerpt: 'Sun\'iy intellekt, real-time render motorlari (Unreal Engine 5) va Corona 12 ning arxitektura industriyasidagi o\'rni.',
    content: `Arxitektura va 3D vizualizatsiya sohasi har yili shiddat bilan rivojlanmoqda. 2026-yilda me'mor va dizaynerlardan faqatgina chiroyli rasm chizish emas, balki real vaqt rejimida mijozga VR/AR orqali loyihani taqdim etish talab qilinmoqda.

Ushbu maqolada biz eng talabgir dasturlar va trendlarni ko'rib chiqamiz:
1. **Corona Renderer va AI Denoising**: Render vaqtini 3 barobarga qisqartirish.
2. **AutoCAD & Revit integratsiyasi**: BIM texnologiyalari orqali xatolarni nolgacha kamaytirish.
3. **Fotorealistik materiallar (PBR)**: Har bir tosh, yog'och va mato teksturasini tabiiy aks ettirish.

Markazimizda aynan shu eng so'nggi standartlar asosida darslar o'tiladi.`,
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    author: 'Jahongir Rustamov',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    category: 'Arxitektura & Dizayn',
    readTime: '4 daqiqa',
    createdAt: '18 Avgust, 2026',
    tags: ['3D Max', 'Corona', 'Arxitektura', 'Trendlar'],
    views: 1420,
    isPublished: true
  },
  {
    id: 'p2',
    title: 'Junior Dasturchidan Seniorgacha: 2026-yilda Qaysi Texnologiyalar Muhim?',
    slug: 'junior-dasturchidan-seniorgacha-texnologiyalar',
    excerpt: 'React 19, Next.js Server Actions, TypeScript va bulutli xizmatlarni qanday samarali o\'rganish bo\'yicha amaliy yo\'riqnoma.',
    content: `Dasturlash olamida raqobat ortib borar ekan, bazaviy HTML/CSS bilimi bilan yaxshi ish topish qiyinlashdi. Hozirgi kunda ish beruvchilar Full-Stack fikrlaydigan va zamonaviy arxitekturani tushunadigan mutaxassislarni qidirmoqda.

Asosiy talablar:
- **TypeScript**: Kod sifatini oshirish va xatolarni oldindan ko'rish.
- **Next.js & SSR**: Tez yuklanadigan va qidiruv tizimlariga optimallashgan ilovalar.
- **PostgreSQL & ORM**: Ma'lumotlar bazasi bilan xavfsiz va tezkor ishlash.
- **Git & Jamoaviy ishlash**: Clean code va Code review madaniyati.`,
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80',
    author: 'Sardorbek Alimov',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    category: 'IT & Texnologiya',
    readTime: '6 daqiqa',
    createdAt: '14 Avgust, 2026',
    tags: ['Web Dev', 'React', 'Next.js', 'Karyera'],
    views: 2150,
    isPublished: true
  },
  {
    id: 'p3',
    title: 'Kuchli Portfolio Yaratish Sirlari: Mijozlar va Ish Beruvchilarni Jalb Qilish',
    slug: 'kuchli-portfolio-yaratish-sirlari',
    excerpt: 'Behance, GitHub va shaxsiy veb-sayt orqali buyurtmalarni qanday qilib oson olish mumkin?',
    content: `Portfoliongiz — bu sizning eng yaxshi sotuvchingiz. Ish beruvchi yoki mijoz diplomdan ko'ra, siz ilgari bajargan ishlaringizning sifati va yechimlariga qaraydi.

Yaxshi portfolio uchun 3 oltin qoida:
1. Sifat songa nisbatan muhimroq (20 ta o'rtacha ish o'rniga 4 ta ideal keys).
2. Jarayonni ko'rsating: Muammo qanday edi va siz qanday yechim topdingiz.
3. Chiroyli taqdimot va vizual mockup.`,
    coverImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=900&q=80',
    author: 'Kamola Yusupova',
    authorAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    category: 'Maslahatlar',
    readTime: '3 daqiqa',
    createdAt: '08 Avgust, 2026',
    tags: ['Portfolio', 'Behance', 'Frilans'],
    views: 980,
    isPublished: true
  }
];

export const initialStudents: Student[] = [
  {
    id: 'st1',
    fullName: 'Anvar Zokirov',
    phone: '+998 90 999 11 22',
    courseId: 'c1',
    courseTitle: 'Arxitektura va 3D Visualizatsiya',
    groupName: 'ARCH-2026-01',
    paymentStatus: 'paid',
    paidAmount: 1450000,
    totalAmount: 1450000,
    progress: 85,
    joinedAt: '2026-01-10'
  },
  {
    id: 'st2',
    fullName: 'Ziyoda Karimova',
    phone: '+998 93 444 33 22',
    courseId: 'c3',
    courseTitle: 'Full-Stack Web Dasturlash',
    groupName: 'FS-WEB-2026-03',
    paymentStatus: 'partial',
    paidAmount: 800000,
    totalAmount: 1550000,
    progress: 60,
    joinedAt: '2026-02-01'
  },
  {
    id: 'st3',
    fullName: 'Sanjar Ergashev',
    phone: '+998 97 777 88 99',
    courseId: 'c5',
    courseTitle: 'Grafik Dizayn va Brending',
    groupName: 'DES-2026-02',
    paymentStatus: 'paid',
    paidAmount: 1200000,
    totalAmount: 1200000,
    progress: 95,
    joinedAt: '2026-01-15'
  }
];

export const initialSiteSettings: SiteSettings = {
  siteName: "ARXITEKTURA & IT ACADEMY",
  phoneMain: "+998 71 200 88 44",
  phoneSecondary: "+998 90 123 45 67",
  email: "info@arxitektura-academy.uz",
  address: "Toshkent shahri, Yunusobod tumani, Amir Temur shoh ko'chasi, 107-B bino",
  city: "Toshkent, O'zbekiston",
  workingHours: "Dushanba - Shanba: 08:30 - 21:00 (Yakshanba dam olish)",
  telegramLink: "https://t.me/arxitektura_academy",
  instagramLink: "https://instagram.com/arxitektura_academy",
  youtubeLink: "https://youtube.com/@arxitektura_academy",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.225575510619!2d69.2818559!3d41.3474324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8cae37340b09%3A0xb309066601b0f162!2sAmir%20Temur%20Avenue%2C%20Tashkent!5e0!3m2!1sen!2suz!4v1700000000000!5m2!1sen!2suz",
  metaTitle: "ARXITEKTURA & IT ACADEMY - Toshkentdagi Professional O'quv Markazi",
  metaDescription: "Arxitektura, 3Ds Max, AutoCAD, Zamonaviy Dasturlash (React, Python), Grafik dizayn va IELTS kurslari. 100% amaliyot va ishga joylashish kafolati.",
  telegramBotToken: "",
  telegramChatId: ""
};
