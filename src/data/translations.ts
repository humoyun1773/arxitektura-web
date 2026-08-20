export type Language = 'UZ' | 'RU' | 'ENG';

export const translations: Record<Language, Record<string, string>> = {
  UZ: {
    // Brand & Header
    'brand.title': 'AL-HAKIM AT-TERMEZIY',
    'brand.badge': 'MARKAZ',
    'brand.slogan': 'Intizomni Sevuvchilar Uchun • Qarshi',
    'nav.home': 'Bosh sahifa',
    'nav.courses': 'Kurslar',
    'nav.teachers': "O'qituvchilar",
    'nav.about': 'Biz haqimizda',
    'nav.blog': 'Blog & Yangiliklar',
    'nav.contact': 'Bog\'lanish',
    'nav.sections': "Bo'limlar",
    'nav.selectLanguage': 'Tilni tanlang / Select Language:',
    'nav.allCourses': "Barcha kurslarni ko'rish",
    'nav.mainDirections': "Asosiy Yo'nalishlar",

    // Hero Section
    'hero.badge1': '🏛️ AL-HAKIM AT-TERMEZIY O\'QUV MARKAZI',
    'hero.title1': 'INTIZOMNI SEVUVCHILAR UCHUN',
    'hero.highlight1': "28 Oylik Ta'lim Kombinatsiyalari",
    'hero.subtitle1': "28 oylik ta'lim kombinatsiyalariga mos 4 ta tilga muvofiq tafakkurga ega bo'ling. Kursni muvaffaqiyatli tugatgan iqtidorli talabalar to'liq ish bilan ta'minlanadi.",
    'hero.cta1': 'Bizga murojaat qiling',
    'hero.contactTelegram': 'Bizga murojaat qiling',
    'hero.allCoursesBtn': 'Barcha Kurslar',
    'hero.feature1': '100% Amaliy loyihalar',
    'hero.feature2': 'Rasmiy diplom & sertifikat',
    'hero.feature3': 'Ish bilan ta\'minlash kafolati',
    'hero.resultGuarantee': 'Natija Kafolati',
    'hero.internationalCert': 'Xalqaro standartdagi sertifikat va 4 ta til',
    'hero.enroll': 'Yozilish',

    // Stats Section
    'stats.badge': 'Statistika va Yutuqlar',
    'stats.title': 'Raqamlar va Natijalar Bilan Tanishing',
    'stats.students': "O'quvchilar Soni",
    'stats.studentsDesc': "Muvaffaqiyatli tahsil olgan va o'qiyotgan yoshlar",
    'stats.languages': "Xalqaro Tillar",
    'stats.languagesDesc': "Ingliz, Nemis, Xitoy, Koreys, Yapon, Fors, Rus",
    'stats.employment': "Ish Bilan Ta'minlash",
    'stats.employmentDesc': "28 oylik dastur bitiruvchilariga kafolat",
    'stats.experience': "Yillik Tajriba",
    'stats.experienceDesc': "Sifatli va qat'iy intizomli ta'lim tizimi",

    // Features Section
    'features.badge': "Nega Aynan Biz?",
    'features.title': "Noyob Metodika va Qat'iy Intizom",
    'features.subtitle': "Har bir talabaning individual salohiyatini ochish va xalqaro miqyosda raqobatbardosh kadr qilib yetishtirish bizning asosiy maqsadimizdir.",
    'features.f1_title': "28 Oylik 4 Til Dasturi",
    'features.f1_desc': "Dunyo tajribasida sinalgan eng samarali 4 ta xalqaro til integratsiyasi.",
    'features.f2_title': "100% Ish Kafolati",
    'features.f2_desc': "Kombinatsiyalarni muvaffaqiyatli tamomlagan barcha talabalar ish bilan ta'minlanadi.",
    'features.f3_title': "Kuchli Intizom & Nazorat",
    'features.f3_desc': "Kunlik vazifalar tahlili, reyting tizimi va uzluksiz o'qituvchilar nazorati.",
    'features.f4_title': "Xalqaro Sertifikatlar",
    'features.f4_desc': "IELTS, Goethe, HSK, TOPIK va JLPT xalqaro imtihonlariga to'liq tayyorgarlik.",

    // Popular Courses Section
    'courses.badge': "Ta'lim Yo'nalishlari",
    'courses.title': "Eng Talabgir Kurslar va Kombinatsiyalar",
    'courses.subtitle': "O'zingizga mos ta'lim kombinatsiyasi yoki intensiv 7 oylik til kursini tanlang.",
    'courses.all': "Hammasi",
    'courses.combinations': "Ta'lim Kombinatsiyalari",
    'courses.foreignLanguages': "Xorijiy Tillar",
    'courses.duration': "Davomiyligi",
    'courses.months': "oy",
    'courses.perMonth': "so'm/oy",
    'courses.details': "Batafsil ma'lumot",
    'courses.register': "Yozilish",
    'courses.viewAll': "Barcha Kurslar Katalogi",
    'courses.popular': "Ommabop",

    // Mentors Section
    'mentors.badge': "Bizning Ustozlar",
    'mentors.title': "Kuchli Tajribaga Ega Mutaxassislar",
    'mentors.subtitle': "Xalqaro sertifikatlarga ega va chet elda tajriba orttirgan nufuzli murabbiylar jamoasi.",
    'mentors.exp': "yillik tajriba",
    'mentors.students': "ta o'quvchi",
    'mentors.allMentors': "Barcha O'qituvchilar",

    // Testimonials
    'reviews.badge': "O'quvchilarimiz Fikrlari",
    'reviews.title': "Bitiruvchilar Natijalari va Sharhlari",
    'reviews.subtitle': "Bizning o'quv markazimizda tahsil olgan talabalarning samimiy fikrlari.",

    // CTA Banner
    'cta.badge': "Qabul Ochiq",
    'cta.title': "Kelajagingizni Biz Bilan Birga Quring!",
    'cta.highlight': "Qarshi Shahridagi Eng Intizomli Markaz",
    'cta.subtitle': "28 oylik ta'lim kombinatsiyalariga ro'yxatdan o'ting va 4 ta til egasi bo'ling. Hoziroq ariza qoldiring!",
    'cta.btn': "Bepul Konsultatsiya Olish",
    'cta.callUs': "Yoki to'g'ridan-to'g'ri qo'ng'iroq qiling:",

    // Footer
    'footer.desc': "28 oylik ta'lim kombinatsiyalariga mos 4 ta tilga muvofiq tafakkur. Kursni muvaffaqiyatli tugatgan talabalar to'liq ish bilan ta'minlanadi.",
    'footer.quickLinks': "Tezkor Havolalar",
    'footer.programs': "Dasturlar",
    'footer.contact': "Bog'lanish",
    'footer.address': "Qashqadaryo viloyati, Qarshi shahri",
    'footer.phone': "Telefon:",
    'footer.hours': "Ish vaqti: Dush - Shanba 08:00 - 20:00",
    'footer.rights': "Barcha huquqlar himoyalangan.",

    // Lead Modal
    'modal.title': "Kursga Ro'yxatdan O'tish",
    'modal.subtitle': "Ma'lumotlaringizni qoldiring, mutaxassisimiz tez orada siz bilan bog'lanadi.",
    'modal.fullName': "Ism va Familiyangiz *",
    'modal.fullNamePlaceholder': "Masalan: Jasur Rustamov",
    'modal.phone': "Telefon Raqamingiz *",
    'modal.phonePlaceholder': "+998 90 123 45 67",
    'modal.course': "Qiziqqan Yo'nalishingiz",
    'modal.submit': "Arizani Yuborish",
    'modal.submitting': "Yuborilmoqda...",
    'modal.success': "Arizangiz muvaffaqiyatli qabul qilindi! Tez orada bog'lanamiz.",
    'modal.privacy': "Ma'lumotlaringiz xavfsizligi 100% kafolatlanadi."
  },

  RU: {
    // Brand & Header
    'brand.title': 'AL-HAKIM AT-TERMEZIY',
    'brand.badge': 'ЦЕНТР',
    'brand.slogan': 'Для Тех, Кто Ценит Дисциплину • Карши',
    'nav.home': 'Главная',
    'nav.courses': 'Курсы',
    'nav.teachers': 'Преподаватели',
    'nav.about': 'О нас',
    'nav.blog': 'Блог & Новости',
    'nav.contact': 'Контакты',
    'nav.sections': 'Разделы',
    'nav.selectLanguage': 'Выберите язык / Select Language:',
    'nav.allCourses': 'Посмотреть все курсы',
    'nav.mainDirections': 'Основные направления',

    // Hero Section
    'hero.badge1': '🏛️ УЧЕБНЫЙ ЦЕНТР AL-HAKIM AT-TERMEZIY',
    'hero.title1': 'ДЛЯ ТЕХ, КТО ЦЕНИТ ДИСЦИПЛИНУ',
    'hero.highlight1': '28-Месячные Образовательные Комбинации',
    'hero.subtitle1': 'Овладейте мышлением на 4 иностранных языках по уникальной 28-месячной системе. Выпускники центра на 100% обеспечиваются трудоустройством.',
    'hero.cta1': 'Связаться с нами',
    'hero.contactTelegram': 'Связаться с нами',
    'hero.allCoursesBtn': 'Все Курсы',
    'hero.feature1': '100% Практические проекты',
    'hero.feature2': 'Официальный диплом и сертификат',
    'hero.feature3': 'Гарантия трудоустройства',
    'hero.resultGuarantee': 'Гарантия Результата',
    'hero.internationalCert': 'Международный сертификат и 4 языка',
    'hero.enroll': 'Записаться',

    // Stats Section
    'stats.badge': 'Статистика и Достижения',
    'stats.title': 'Наши Результаты в Цифрах',
    'stats.students': 'Студентов',
    'stats.studentsDesc': 'Успешно обучившихся и обучающихся студентов',
    'stats.languages': 'Международных Языков',
    'stats.languagesDesc': 'Английский, Немецкий, Китайский, Корейский, Японский, Персидский, Русский',
    'stats.employment': 'Трудоустройство',
    'stats.employmentDesc': '100% гарантия для выпускников 28-месячной программы',
    'stats.experience': 'Лет Опыта',
    'stats.experienceDesc': 'Качественная и дисциплинированная система образования',

    // Features Section
    'features.badge': 'Почему Именно Мы?',
    'features.title': 'Уникальная Методика и Строгая Дисциплина',
    'features.subtitle': 'Наша главная цель — раскрыть потенциал каждого студента и подготовить конкурентоспособных специалистов международного уровня.',
    'features.f1_title': '28-Месячная Программа 4 Языков',
    'features.f1_desc': 'Проверенная интеграция 4 ведущих мировых языков по 7 месяцев на каждый.',
    'features.f2_title': '100% Гарантия Трудоустройства',
    'features.f2_desc': 'Все успешные выпускники комбинаций полностью трудоустраиваются.',
    'features.f3_title': 'Строгая Дисциплина и Контроль',
    'features.f3_desc': 'Ежедневный разбор заданий, рейтинговая система и постоянный контроль наставников.',
    'features.f4_title': 'Международные Сертификаты',
    'features.f4_desc': 'Полная подготовка к международным экзаменам IELTS, Goethe, HSK, TOPIK и JLPT.',

    // Popular Courses Section
    'courses.badge': 'Направления Обучения',
    'courses.title': 'Востребованные Курсы и Комбинации',
    'courses.subtitle': 'Выберите подходящую образовательную комбинацию или 7-месячный интенсивный языковой курс.',
    'courses.all': 'Все',
    'courses.combinations': 'Образовательные Комбинации',
    'courses.foreignLanguages': 'Иностранные Языки',
    'courses.duration': 'Длительность',
    'courses.months': 'мес',
    'courses.perMonth': 'сум/мес',
    'courses.details': 'Подробнее',
    'courses.register': 'Записаться',
    'courses.viewAll': 'Каталог Всех Курсов',
    'courses.popular': 'Популярный',

    // Mentors Section
    'mentors.badge': 'Наши Преподаватели',
    'mentors.title': 'Команда Опытных Наставников',
    'mentors.subtitle': 'Преподаватели с международными сертификатами и зарубежным опытом.',
    'mentors.exp': 'лет опыта',
    'mentors.students': 'студентов',
    'mentors.allMentors': 'Все Преподаватели',

    // Testimonials
    'reviews.badge': 'Отзывы Студентов',
    'reviews.title': 'Результаты и Отзывы Выпускников',
    'reviews.subtitle': 'Честные отзывы студентов, обучающихся в нашем центре.',

    // CTA Banner
    'cta.badge': 'Набор Открыт',
    'cta.title': 'Постройте Свое Будущее Вместе с Нами!',
    'cta.highlight': 'Самый Дисциплинированный Центр в Карши',
    'cta.subtitle': 'Запишитесь на 28-месячные комбинации и овладейте 4 языками. Оставьте заявку прямо сейчас!',
    'cta.btn': 'Получить Бесплатную Консультацию',
    'cta.callUs': 'Или позвоните нам напрямую:',

    // Footer
    'footer.desc': 'Мышление на 4 иностранных языках по 28-месячной программе. Выпускники центра на 100% обеспечиваются трудоустройством.',
    'footer.quickLinks': 'Быстрые Ссылки',
    'footer.programs': 'Программы',
    'footer.contact': 'Контакты',
    'footer.address': 'Кашкадарьинская область, город Карши',
    'footer.phone': 'Телефон:',
    'footer.hours': 'Время работы: Пн - Сб 08:00 - 20:00',
    'footer.rights': 'Все права защищены.',

    // Lead Modal
    'modal.title': 'Запись на Курс',
    'modal.subtitle': 'Оставьте свои данные, и наш специалист свяжется с вами в ближайшее время.',
    'modal.fullName': 'Ваше Имя и Фамилия *',
    'modal.fullNamePlaceholder': 'Например: Рустам Кадыров',
    'modal.phone': 'Номер Телефона *',
    'modal.phonePlaceholder': '+998 90 123 45 67',
    'modal.course': 'Интересующее Направление',
    'modal.submit': 'Отправить Заявку',
    'modal.submitting': 'Отправка...',
    'modal.success': 'Ваша заявка успешно принята! Мы свяжемся с вами.',
    'modal.privacy': 'Конфиденциальность данных гарантируется на 100%.'
  },

  ENG: {
    // Brand & Header
    'brand.title': 'AL-HAKIM AT-TERMEZIY',
    'brand.badge': 'CENTER',
    'brand.slogan': 'For Those Who Value Discipline • Karshi',
    'nav.home': 'Home',
    'nav.courses': 'Courses',
    'nav.teachers': 'Mentors',
    'nav.about': 'About Us',
    'nav.blog': 'Blog & News',
    'nav.contact': 'Contact',
    'nav.sections': 'Sections',
    'nav.selectLanguage': 'Select Language:',
    'nav.allCourses': 'View all courses',
    'nav.mainDirections': 'Key Fields',

    // Hero Section
    'hero.badge1': '🏛️ AL-HAKIM AT-TERMEZIY ACADEMY',
    'hero.title1': 'FOR THOSE WHO VALUE DISCIPLINE',
    'hero.highlight1': '28-Month Educational Combinations',
    'hero.subtitle1': 'Master mindset and fluency in 4 international languages with our 28-month system. Successful graduates are 100% provided with employment.',
    'hero.cta1': 'Contact Us',
    'hero.contactTelegram': 'Contact Us',
    'hero.allCoursesBtn': 'All Courses',
    'hero.feature1': '100% Practical Projects',
    'hero.feature2': 'Official Diploma & Certificate',
    'hero.feature3': 'Guaranteed Employment',
    'hero.resultGuarantee': 'Result Guarantee',
    'hero.internationalCert': 'International Certificate & 4 Languages',
    'hero.enroll': 'Enroll',

    // Stats Section
    'stats.badge': 'Statistics & Achievements',
    'stats.title': 'Our Impact in Numbers',
    'stats.students': 'Enrolled Students',
    'stats.studentsDesc': 'Graduates and currently enrolled students',
    'stats.languages': 'International Languages',
    'stats.languagesDesc': 'English, German, Chinese, Korean, Japanese, Persian, Russian',
    'stats.employment': 'Job Placement',
    'stats.employmentDesc': '100% guarantee for 28-month program graduates',
    'stats.experience': 'Years Experience',
    'stats.experienceDesc': 'High quality and strictly disciplined education',

    // Features Section
    'features.badge': 'Why Choose Us?',
    'features.title': 'Unique Methodology & Strict Discipline',
    'features.subtitle': 'Our mission is to unlock every student\'s potential and prepare globally competitive specialists.',
    'features.f1_title': '28-Month 4 Languages Program',
    'features.f1_desc': 'Proven integration of 4 leading global languages, 7 months each.',
    'features.f2_title': '100% Job Guarantee',
    'features.f2_desc': 'All successful graduates of combinations are fully provided with employment.',
    'features.f3_title': 'Strict Discipline & Monitoring',
    'features.f3_desc': 'Daily homework reviews, ranking system, and continuous mentor tracking.',
    'features.f4_title': 'International Certificates',
    'features.f4_desc': 'Full preparation for IELTS, Goethe, HSK, TOPIK, and JLPT exams.',

    // Popular Courses Section
    'courses.badge': 'Educational Programs',
    'courses.title': 'In-Demand Courses & Combinations',
    'courses.subtitle': 'Choose a comprehensive 28-month combination or an intensive 7-month language course.',
    'courses.all': 'All',
    'courses.combinations': 'Educational Combinations',
    'courses.foreignLanguages': 'Foreign Languages',
    'courses.duration': 'Duration',
    'courses.months': 'months',
    'courses.perMonth': 'UZS/month',
    'courses.details': 'Learn More',
    'courses.register': 'Enroll',
    'courses.viewAll': 'Full Course Catalog',
    'courses.popular': 'Popular',

    // Mentors Section
    'mentors.badge': 'Our Instructors',
    'mentors.title': 'Experienced Professional Mentors',
    'mentors.subtitle': 'A team of certified educators with international degrees and experience.',
    'mentors.exp': 'years experience',
    'mentors.students': 'students taught',
    'mentors.allMentors': 'All Instructors',

    // Testimonials
    'reviews.badge': 'Student Reviews',
    'reviews.title': 'Graduate Results and Testimonials',
    'reviews.subtitle': 'Honest feedback from students studying at our center.',

    // CTA Banner
    'cta.badge': 'Enrollment Open',
    'cta.title': 'Build Your Bright Future With Us!',
    'cta.highlight': 'The Most Disciplined Center in Karshi',
    'cta.subtitle': 'Register for our 28-month combinations and become fluent in 4 languages. Submit your application today!',
    'cta.btn': 'Get Free Consultation',
    'cta.callUs': 'Or call us directly:',

    // Footer
    'footer.desc': 'Fluency in 4 international languages with our 28-month program. Successful graduates are 100% guaranteed employment.',
    'footer.quickLinks': 'Quick Links',
    'footer.programs': 'Programs',
    'footer.contact': 'Contact Us',
    'footer.address': 'Qashqadaryo Region, Karshi City',
    'footer.phone': 'Phone:',
    'footer.hours': 'Hours: Mon - Sat 08:00 - 20:00',
    'footer.rights': 'All rights reserved.',

    // Lead Modal
    'modal.title': 'Course Enrollment',
    'modal.subtitle': 'Leave your details and our team will get in touch with you shortly.',
    'modal.fullName': 'Full Name *',
    'modal.fullNamePlaceholder': 'e.g. Jasur Rustamov',
    'modal.phone': 'Phone Number *',
    'modal.phonePlaceholder': '+998 90 123 45 67',
    'modal.course': 'Interested Program',
    'modal.submit': 'Submit Application',
    'modal.submitting': 'Submitting...',
    'modal.success': 'Your application has been received! We will contact you soon.',
    'modal.privacy': 'Your personal data is 100% secure.'
  }
};
