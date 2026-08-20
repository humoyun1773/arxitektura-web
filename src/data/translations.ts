export type Language = 'UZ' | 'RU' | 'ENG';

export const translations: Record<Language, Record<string, string>> = {
  UZ: {
    // Brand & Nav
    'brand.title': 'ARXITEKTURA',
    'brand.badge': 'BYURO',
    'brand.slogan': 'Mukammal Fazoviy Yechimlar va Nafis Arxitektura',
    'nav.home': 'Bosh sahifa',
    'nav.about': 'Biz haqimizda',
    'nav.projects': 'Loyihalarimiz',
    'nav.services': 'Xizmatlar',
    'nav.architects': 'Arxitektorlar',
    'nav.calculator': 'Kalkulyator',
    'nav.blog': 'Arxitektura Blogi',
    'nav.contact': 'Bog\'lanish',
    'nav.orderProject': 'Loyiha Buyurtma Qilish',
    'nav.selectLanguage': 'Tilni tanlang:',

    // Hero Section
    'hero.badge': '🏛️ ARXITEKTURA VA INTERYER BYUROSI',
    'hero.title': 'MUKAMMAL FAZOVIY YECHIMLAR VA ZAMONAVIY ARXITEKTURA',
    'hero.subtitle': 'Individual villalar, zamonaviy kottejlar, tijoriy binolar va eksklyuziv interyerlarni xalqaro me\'yorlar asosida noldan kalitgacha loyihalashtiramiz.',
    'hero.ctaCalculate': 'Loyihani Hisoblash',
    'hero.ctaPortfolio': 'Portfelni Ko\'rish',
    'hero.contactTelegram': 'Bizga murojaat qiling',

    // Stats Section
    'stats.badge': 'Byuro Yutuqlari',
    'stats.title': 'Raqamlarda Bizning Natijalarimiz',
    'stats.projects': 'Amalga Oshirilgan Loyihalar',
    'stats.projectsDesc': 'Kottejlar, villalar, biznes markazlar va interyerlar',
    'stats.area': 'Loyihalangan Maydon (m²)',
    'stats.areaDesc': 'Mukammal planirovka va mustahkam konstruksiyalar',
    'stats.experience': 'Yillik Tajriba',
    'stats.experienceDesc': 'Professional me\'morlar va muhandislar jamoasi',
    'stats.satisfaction': 'Mijozlar Mamnuniyati',
    'stats.satisfactionDesc': '100% mualliflik nazorati va sifat kafolati',

    // Process / Features
    'features.badge': 'Ish Jarayoni',
    'features.title': 'Loyiha Qanday Yaratiladi?',
    'features.subtitle': 'Xomaki fikrdan to to\'liq qurilish chizmalarigacha bo\'lgan 4 bosqichli professional tizim.',
    'features.f1_title': '1. Konseptsiya & Texnik Topshiriq',
    'features.f1_desc': 'Mijoz istaklari, yer uchastkasi o\'lchamlari va funksional zonalarni tahlil qilish.',
    'features.f2_title': '2. 3D Vizualizatsiya & Planirovka',
    'features.f2_desc': 'Fotorealistik 3D fasad va ichki xonalar renderlari hamda qulay planirovka.',
    'features.f3_title': '3. Ishchi Loyiha (AR + KJ)',
    'features.f3_desc': 'Quruvchilar uchun barcha konstruktiv, me\'moriy va muhandislik chizmalar to\'plami.',
    'features.f4_title': '4. Mualliflik Nazorati',
    'features.f4_desc': 'Qurilish jarayonining chizmalarga to\'liq mos ravishda amalga oshirilishini nazorat qilish.',

    // Services
    'services.badge': 'Xizmatlarimiz',
    'services.title': 'Professional Arxitektura & Dizayn Xizmatlari',
    'services.subtitle': 'Har qanday murakkablikdagi bino va interyer loyihalari uchun to\'liq paketlar.',
    'services.from': 'dan',
    'services.perM2': '1 m² uchun',
    'services.viewPackages': 'Tariflar va Paketlar',
    'services.order': 'Buyurtma Berish',
    'services.details': 'Batafsil',

    // Projects / Portfolio
    'projects.badge': 'Portfeli',
    'projects.title': 'Tanlangan Arxitektura Loyihalarimiz',
    'projects.subtitle': 'Biz yaratgan villalar, zamonaviy kottejlar, hashamatli interyerlar va tijoriy obyektlar.',
    'projects.all': 'Barchasi',
    'projects.villas': 'Kottejlar & Villalar',
    'projects.commercial': 'Tijoriy Obyektlar',
    'projects.interior': 'Interyer Dizayn',
    'projects.landscape': 'Landshaft & Fasad',
    'projects.area': 'Maydoni',
    'projects.floors': 'Qavatlar',
    'projects.location': 'Joylashuvi',
    'projects.year': 'Yili',
    'projects.style': 'Uslubi',
    'projects.viewProject': 'Loyihani Ko\'rish',
    'projects.viewAll': 'Barcha Loyihalar Portfeli',
    'projects.orderThis': 'Ushbu Loyihaga Buyurtma Berish',
    'projects.floorPlans': 'Qavatlar Planirovkasi',

    // Calculator
    'calc.badge': 'Onlayn Hisoblagich',
    'calc.title': 'Loyiha Narxini Hisoblash',
    'calc.subtitle': 'Obyekt turi va maydonini kiriting — bir zumda taxminiy narx va muddatni hisoblab oling.',
    'calc.objectType': 'Obyekt Turi',
    'calc.area': 'Maydoni (m²)',
    'calc.package': 'Xizmat Paketi',
    'calc.totalEstimate': 'Taxminiy Loyiha Qiymati:',
    'calc.duration': 'Tayyor bo\'lish muddati:',
    'calc.sendQuote': 'Hisob-Kitobni Yuborish & Konsultatsiya',

    // Architects / Team
    'team.badge': 'Mualliflar Jamoasi',
    'team.title': 'Yetakchi Arxitektorlar va Dizaynerlar',
    'team.subtitle': 'Har bir chiziq ortida ko\'p yillik tajriba va xalqaro bilimga ega mutaxassislar turadi.',
    'team.exp': 'yillik tajriba',
    'team.projects': 'ta loyiha muallifi',

    // Testimonials
    'reviews.badge': 'Mijozlarimiz Fikrlari',
    'reviews.title': 'Buyurtmachilarimiz Nima Deydi?',
    'reviews.subtitle': 'Biz amalga oshirgan loyihalarning egalari tomonidan bildirilgan xolis fikrlar.',
    'reviews.leaveBtn': 'Fikr Qoldirish',

    // CTA
    'cta.badge': 'Individual Loyiha',
    'cta.title': 'Orzuingizdagi Xonadonni Biz Bilan Quring!',
    'cta.subtitle': 'Hoziroq bepul konsultatsiya oling va bosh arxitektorimiz bilan loyihangizni muhokama qiling.',
    'cta.btn': 'Bepul Konsultatsiya Olish',
    'cta.callUs': 'Yoki to\'g\'ridan-to\'g\'ri qo\'ng\'iroq qiling:',

    // Modal
    'modal.title': 'Arxitektura Loyihasiga Buyurtma Berish',
    'modal.name': 'Ismingiz va Familiyangiz',
    'modal.phone': 'Telefon Raqamingiz',
    'modal.area': 'Taxminiy Maydoni (m²)',
    'modal.notes': 'Loyiha haqida qo\'shimcha ma\'lumot yoki istaklar',
    'modal.submit': 'Arizani Yuborish',

    // Footer
    'footer.desc': 'Zamonaviy kottejlar, hashamatli villalar, tijoriy binolar va eksklyuziv interyerlarni noldan kalitgacha professional loyihalash byurosi.',
    'footer.quickLinks': 'Tezkor Havolalar',
    'footer.services': 'Xizmatlarimiz',
    'footer.contact': 'Bog\'lanish'
  },

  RU: {
    // Brand & Nav
    'brand.title': 'ARXITEKTURA',
    'brand.badge': 'БЮРО',
    'brand.slogan': 'Идеальные Пространственные Решения и Изысканная Архитектура',
    'nav.home': 'Главная',
    'nav.about': 'О нас',
    'nav.projects': 'Проекты',
    'nav.services': 'Услуги',
    'nav.architects': 'Архитекторы',
    'nav.calculator': 'Калькулятор',
    'nav.blog': 'Блог',
    'nav.contact': 'Контакты',
    'nav.orderProject': 'Заказать Проект',
    'nav.selectLanguage': 'Выберите язык:',

    // Hero Section
    'hero.badge': '🏛️ АРХИТЕКТУРНОЕ БЮРО & ДИЗАЙН',
    'hero.title': 'СОВРЕМЕННАЯ АРХИТЕКТУРА И ПРЕМИАЛЬНЫЙ ДИЗАЙН',
    'hero.subtitle': 'Проектируем индивидуальные виллы, современные коттеджи, коммерческие здания и эксклюзивные интерьеры «под ключ» по международным стандартам.',
    'hero.ctaCalculate': 'Рассчитать Стоимость',
    'hero.ctaPortfolio': 'Смотреть Портфолио',
    'hero.contactTelegram': 'Связаться с нами',

    // Stats Section
    'stats.badge': 'Достижения Бюро',
    'stats.title': 'Наши Результаты в Цифрах',
    'stats.projects': 'Реализованных Проектов',
    'stats.projectsDesc': 'Виллы, коттеджи, бизнес-центры и премиум интерьеры',
    'stats.area': 'Спроектированная Площадь (м²)',
    'stats.areaDesc': 'Грамотная планировка и надежные конструкции',
    'stats.experience': 'Лет Опыта',
    'stats.experienceDesc': 'Команда ведущих архитекторов и инженеров',
    'stats.satisfaction': 'Довольных Клиентов',
    'stats.satisfactionDesc': '100% авторский надзор и гарантия качества',

    // Process / Features
    'features.badge': 'Процесс Работы',
    'features.title': 'Как Создается Проект?',
    'features.subtitle': '4-этапная профессиональная система от первоначальной идеи до полного комплекта рабочих чертежей.',
    'features.f1_title': '1. Концепция & Техническое Задание',
    'features.f1_desc': 'Анализ участка, пожеланий клиента и функционального зонирования.',
    'features.f2_title': '2. 3D Визуализация & Планировка',
    'features.f2_desc': 'Фотореалистичные 3D рендеры фасадов и комнат, эргономичные планировки.',
    'features.f3_title': '3. Рабочий Проект (АР + КЖ)',
    'features.f3_desc': 'Полный комплект архитектурных, конструктивных и инженерных чертежей для строителей.',
    'features.f4_title': '4. Авторский Надзор',
    'features.f4_desc': 'Постоянный контроль за точным соблюдением проектных решений на стройплощадке.',

    // Services
    'services.badge': 'Наши Услуги',
    'services.title': 'Профессиональные Архитектурные & Дизайн Услуги',
    'services.subtitle': 'Комплексные пакеты проектирования для объектов любой сложности.',
    'services.from': 'от',
    'services.perM2': 'за 1 м²',
    'services.viewPackages': 'Тарифы и Пакеты',
    'services.order': 'Заказать',
    'services.details': 'Подробнее',

    // Projects / Portfolio
    'projects.badge': 'Портфолио',
    'projects.title': 'Избранные Архитектурные Проекты',
    'projects.subtitle': 'Созданные нами виллы, современные дома, интерьеры и коммерческие комплексы.',
    'projects.all': 'Все',
    'projects.villas': 'Коттеджи & Виллы',
    'projects.commercial': 'Коммерческие Объекты',
    'projects.interior': 'Дизайн Интерьера',
    'projects.landscape': 'Ландшафт & Фасад',
    'projects.area': 'Площадь',
    'projects.floors': 'Этажность',
    'projects.location': 'Локация',
    'projects.year': 'Год',
    'projects.style': 'Стиль',
    'projects.viewProject': 'Смотреть Проект',
    'projects.viewAll': 'Все Проекты Портфолио',
    'projects.orderThis': 'Заказать Этот Проект',
    'projects.floorPlans': 'Планировки Этажей',

    // Calculator
    'calc.badge': 'Онлайн Калькулятор',
    'calc.title': 'Расчет Стоимости Проекта',
    'calc.subtitle': 'Укажите тип объекта и площадь — мгновенно рассчитайте примерную стоимость и сроки.',
    'calc.objectType': 'Тип Объекта',
    'calc.area': 'Площадь (м²)',
    'calc.package': 'Пакет Услуг',
    'calc.totalEstimate': 'Ориентировочная Стоимость:',
    'calc.duration': 'Срок разработки:',
    'calc.sendQuote': 'Отправить Расчет & Получить Консультацию',

    // Architects / Team
    'team.badge': 'Команда Авторов',
    'team.title': 'Ведущие Архитекторы и Дизайнеры',
    'team.subtitle': 'За каждой линией чертежа стоит многолетний опыт и международная квалификация.',
    'team.exp': 'лет опыта',
    'team.projects': 'автор проектов',

    // Testimonials
    'reviews.badge': 'Отзывы Клиентов',
    'reviews.title': 'Что Говорят Наши Заказчики?',
    'reviews.subtitle': 'Честные отзывы владельцев реализованных вилл и коммерческих объектов.',
    'reviews.leaveBtn': 'Оставить Отзыв',

    // CTA
    'cta.badge': 'Индивидуальный Проект',
    'cta.title': 'Постройте Дом Вашей Мечты Вместе с Нами!',
    'cta.subtitle': 'Получите бесплатную консультацию и обсудите ваш проект с главным архитектором прямо сейчас.',
    'cta.btn': 'Получить Бесплатную Консультацию',
    'cta.callUs': 'Или позвоните нам напрямую:',

    // Modal
    'modal.title': 'Заказать Архитектурный Проект',
    'modal.name': 'Ваше Имя и Фамилия',
    'modal.phone': 'Номер Телефона',
    'modal.area': 'Примерная Площадь (м²)',
    'modal.notes': 'Дополнительная информация или пожелания',
    'modal.submit': 'Отправить Заявку',

    // Footer
    'footer.desc': 'Бюро профессионального архитектурного проектирования коттеджей, вилл, бизнес-центров и эксклюзивных интерьеров.',
    'footer.quickLinks': 'Быстрые Ссылки',
    'footer.services': 'Услуги',
    'footer.contact': 'Контакты'
  },

  ENG: {
    // Brand & Nav
    'brand.title': 'ARXITEKTURA',
    'brand.badge': 'BUREAU',
    'brand.slogan': 'Flawless Spatial Solutions & Exquisite Architecture',
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.projects': 'Projects',
    'nav.services': 'Services',
    'nav.architects': 'Architects',
    'nav.calculator': 'Calculator',
    'nav.blog': 'Architecture Blog',
    'nav.contact': 'Contact',
    'nav.orderProject': 'Order Project',
    'nav.selectLanguage': 'Select language:',

    // Hero Section
    'hero.badge': '🏛️ ARCHITECTURAL & INTERIOR BUREAU',
    'hero.title': 'MODERN ARCHITECTURE & BESPOKE INTERIOR DESIGN',
    'hero.subtitle': 'Designing luxury villas, modern cottages, commercial landmarks, and turnkey interiors crafted to international engineering standards.',
    'hero.ctaCalculate': 'Calculate Project Cost',
    'hero.ctaPortfolio': 'Explore Portfolio',
    'hero.contactTelegram': 'Contact Us on Telegram',

    // Stats Section
    'stats.badge': 'Bureau Milestones',
    'stats.title': 'Our Achievements in Numbers',
    'stats.projects': 'Completed Projects',
    'stats.projectsDesc': 'Luxury villas, commercial centers, and bespoke interiors',
    'stats.area': 'Designed Area (m²)',
    'stats.areaDesc': 'Engineered floor plans and resilient structures',
    'stats.experience': 'Years of Experience',
    'stats.experienceDesc': 'Award-winning architects and structural engineers',
    'stats.satisfaction': 'Client Satisfaction',
    'stats.satisfactionDesc': '100% architectural supervision & warranty',

    // Process / Features
    'features.badge': 'Our Workflow',
    'features.title': 'How We Create Your Masterpiece',
    'features.subtitle': 'A rigorous 4-stage methodology from sketch conception to full working blueprints.',
    'features.f1_title': '1. Concept & Technical Brief',
    'features.f1_desc': 'Site analysis, orientation, topography, and personalized lifestyle requirements.',
    'features.f2_title': '2. 3D Visuals & Space Planning',
    'features.f2_desc': 'Photorealistic exterior/interior 3D renders and intuitive floor layouts.',
    'features.f3_title': '3. Working Drawings (AR + STR)',
    'features.f3_desc': 'Complete architectural, structural, and MEP engineering drawings for builders.',
    'features.f4_title': '4. Construction Supervision',
    'features.f4_desc': 'On-site authorial supervision ensuring 100% adherence to project blueprints.',

    // Services
    'services.badge': 'Our Services',
    'services.title': 'Bespoke Architecture & Design Solutions',
    'services.subtitle': 'Comprehensive design packages for residential and commercial landmarks.',
    'services.from': 'from',
    'services.perM2': 'per 1 m²',
    'services.viewPackages': 'Packages & Pricing',
    'services.order': 'Order Service',
    'services.details': 'Details',

    // Projects / Portfolio
    'projects.badge': 'Portfolio',
    'projects.title': 'Featured Architectural Works',
    'projects.subtitle': 'Showcasing our modern private estates, commercial towers, and penthouses.',
    'projects.all': 'All',
    'projects.villas': 'Cottages & Villas',
    'projects.commercial': 'Commercial Buildings',
    'projects.interior': 'Interior Design',
    'projects.landscape': 'Landscape & Facades',
    'projects.area': 'Area',
    'projects.floors': 'Floors',
    'projects.location': 'Location',
    'projects.year': 'Year',
    'projects.style': 'Style',
    'projects.viewProject': 'View Project',
    'projects.viewAll': 'Full Portfolio Catalog',
    'projects.orderThis': 'Order This Project Design',
    'projects.floorPlans': 'Floor Plans',

    // Calculator
    'calc.badge': 'Online Estimator',
    'calc.title': 'Instant Project Cost Calculator',
    'calc.subtitle': 'Select building type and area to compute immediate cost estimates and delivery timeline.',
    'calc.objectType': 'Building Type',
    'calc.area': 'Total Area (m²)',
    'calc.package': 'Design Package',
    'calc.totalEstimate': 'Estimated Project Cost:',
    'calc.duration': 'Estimated Delivery Time:',
    'calc.sendQuote': 'Submit Estimation & Book Consultation',

    // Architects / Team
    'team.badge': 'Design Masters',
    'team.title': 'Lead Architects & Interior Designers',
    'team.subtitle': 'Every blueprint is backed by decades of international craftsmanship.',
    'team.exp': 'years experience',
    'team.projects': 'projects authored',

    // Testimonials
    'reviews.badge': 'Testimonials',
    'reviews.title': 'What Our Esteemed Clients Say',
    'reviews.subtitle': 'Genuine reviews from private villa owners and real estate developers.',
    'reviews.leaveBtn': 'Leave Review',

    // CTA
    'cta.badge': 'Bespoke Design',
    'cta.title': 'Bring Your Dream Architecture to Life!',
    'cta.subtitle': 'Schedule a free architectural consultation with our Chief Architect today.',
    'cta.btn': 'Get Free Consultation',
    'cta.callUs': 'Or call our studio directly:',

    // Modal
    'modal.title': 'Request Architecture Design',
    'modal.name': 'Full Name',
    'modal.phone': 'Phone Number',
    'modal.area': 'Estimated Area (m²)',
    'modal.notes': 'Project Details & Preferences',
    'modal.submit': 'Submit Request',

    // Footer
    'footer.desc': 'A premier architectural bureau dedicated to modern residential estates, commercial architecture, and bespoke interior design.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.contact': 'Contact Studio'
  }
};
