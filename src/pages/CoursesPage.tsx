import React, { useState, useMemo } from 'react';
import { useData } from '../context/DataContext';
import { useLanguage } from '../context/LanguageContext';
import { 
  Search, 
  Filter, 
  Clock, 
  Star, 
  Users, 
  ArrowUpRight, 
  Sparkles, 
  Flame, 
  Check, 
  SlidersHorizontal,
  X
} from 'lucide-react';

interface CoursesPageProps {
  onNavigate: (page: string, param?: string) => void;
}

export const CoursesPage: React.FC<CoursesPageProps> = ({ onNavigate }) => {
  const { courses, openLeadModal } = useData();
  const { t } = useLanguage();

  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Hammasi');
  const [selectedLevel, setSelectedLevel] = useState<string>('Hammasi');
  const [sortBy, setSortBy] = useState<'popular' | 'price-asc' | 'price-desc' | 'rating'>('popular');

  const categories = [
    { id: 'Hammasi', label: t('courses.all', 'Hammasi') },
    { id: "Ta'lim Kombinatsiyalari", label: t('courses.combinations', "Ta'lim Kombinatsiyalari") },
    { id: 'Xorijiy Tillar', label: t('courses.foreignLanguages', 'Xorijiy Tillar') },
    { id: 'Arxitektura & 3D', label: 'Arxitektura & 3D' },
    { id: 'IT & Dasturlash', label: 'IT & Dasturlash' },
    { id: 'Grafik Dizayn', label: 'Grafik Dizayn' }
  ];

  const levels = ['Hammasi', "Boshlang'ich", "O'rta", "Mukammal"];

  const filteredCourses = useMemo(() => {
    return courses
      .filter((c) => {
        if (!c.isActive) return false;
        
        // Search filter
        if (search.trim()) {
          const q = search.toLowerCase();
          const matchTitle = c.title.toLowerCase().includes(q);
          const matchDesc = c.shortDescription.toLowerCase().includes(q);
          const matchCat = c.category.toLowerCase().includes(q);
          if (!matchTitle && !matchDesc && !matchCat) return false;
        }

        // Category filter
        if (selectedCategory !== 'Hammasi' && c.category !== selectedCategory) {
          return false;
        }

        // Level filter
        if (selectedLevel !== 'Hammasi' && c.level !== selectedLevel && c.level !== 'Barcha darajalar') {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') {
          const priceA = a.discountPrice || a.price;
          const priceB = b.discountPrice || b.price;
          return priceA - priceB;
        }
        if (sortBy === 'price-desc') {
          const priceA = a.discountPrice || a.price;
          const priceB = b.discountPrice || b.price;
          return priceB - priceA;
        }
        if (sortBy === 'rating') {
          return b.rating - a.rating;
        }
        // default popular
        return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
      });
  }, [courses, search, selectedCategory, selectedLevel, sortBy]);

  const clearFilters = () => {
    setSearch('');
    setSelectedCategory('Hammasi');
    setSelectedLevel('Hammasi');
    setSortBy('popular');
  };

  const formatPrice = (price: number) => {
    return `${price.toLocaleString('uz-UZ')} ${t('courses.perMonth', "so'm/oy")}`;
  };

  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="app-container">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            {t('courses.title', "Eng Talabgir Kurslar va Kombinatsiyalar")}
          </h1>
          <p className="text-sm sm:text-base text-slate-400">
            {t('courses.subtitle', "O'zingizga mos ta'lim kombinatsiyasi yoki intensiv 7 oylik til kursini tanlang.")}
          </p>
        </div>

        {/* Filters & Search Bar */}
        <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 backdrop-blur-xl mb-10 space-y-6 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={t('courses.searchPlaceholder', "Kurs nomi, texnologiya yoki yo'nalish bo'yicha qidiring...")}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-slate-950/80 border border-slate-700/80 focus:border-indigo-500 rounded-2xl pl-11 pr-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Level Select */}
            <div className="md:col-span-3">
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full bg-slate-950/80 border border-slate-700/80 focus:border-indigo-500 rounded-2xl px-4 py-3 text-sm text-slate-200 outline-none transition-all"
              >
                <option value="Hammasi">{t('courses.all', 'Barcha Darajalar')}</option>
                {levels.filter((l) => l !== 'Hammasi').map((lvl) => (
                  <option key={lvl} value={lvl}>
                    {lvl}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Select */}
            <div className="md:col-span-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full bg-slate-950/80 border border-slate-700/80 focus:border-indigo-500 rounded-2xl px-4 py-3 text-sm text-slate-200 outline-none transition-all"
              >
                <option value="popular">{t('courses.popular', 'Ommabop')}</option>
                <option value="rating">Reyting bo'yicha</option>
                <option value="price-asc">Narxi: Arzondan qimmatga</option>
                <option value="price-desc">Narxi: Qimmatdan arzonga</option>
              </select>
            </div>
          </div>

          {/* Categories Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-800/80">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                      : 'bg-slate-950/60 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {(search || selectedCategory !== 'Hammasi' || selectedLevel !== 'Hammasi' || sortBy !== 'popular') && (
              <button
                onClick={clearFilters}
                className="text-xs text-rose-400 hover:text-rose-300 font-semibold flex items-center gap-1.5"
              >
                <X className="w-3.5 h-3.5" />
                Filtrlarni tozalash
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="text-sm text-slate-400 mb-6 flex items-center justify-between">
          <span>Topilgan kurslar: <strong className="text-white">{filteredCourses.length} ta</strong></span>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length === 0 ? (
          <div className="text-center py-20 bg-slate-900/40 rounded-3xl border border-slate-800 p-8 space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-slate-800 text-slate-500 flex items-center justify-center mx-auto">
              <Filter className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-white">Mos kurslar topilmadi</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              Qidiruv so'zini yoki filtrlarni o'zgartirib ko'ring yoki umumiy konsultatsiyaga yoziling.
            </p>
            <button
              onClick={clearFilters}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-500"
            >
              Barcha kurslarni ko'rsatish
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/40 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col group"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-800">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30"></div>

                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-[11px] font-bold text-white">
                      {course.category}
                    </span>
                    {course.isPopular && (
                      <span className="px-2.5 py-1 rounded-full bg-amber-500 text-slate-950 text-[11px] font-extrabold flex items-center gap-1">
                        <Flame className="w-3 h-3 fill-slate-950" />
                        TOP
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-slate-950/90 backdrop-blur-md border border-slate-800 text-xs font-bold text-amber-300 flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                    <span>{course.rating}</span>
                    <span className="text-[10px] text-slate-400 font-normal">({course.reviewsCount})</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-indigo-400" />
                        {course.durationMonths} oy
                      </span>
                      <span>•</span>
                      <span className="text-indigo-300">{course.level}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-emerald-400" />
                        {course.studentsCount}+ talaba
                      </span>
                    </div>

                    <h3
                      onClick={() => onNavigate('course-detail', course.slug)}
                      className="font-heading font-bold text-lg text-white hover:text-indigo-300 cursor-pointer transition-colors line-clamp-2"
                    >
                      {course.title}
                    </h3>

                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {course.shortDescription}
                    </p>
                  </div>

                  {/* Syllabus summary */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                    <div className="text-[11px] text-slate-400 font-semibold">
                      Dastur tarkibi ({course.syllabus.length} ta modul):
                    </div>
                    {course.syllabus.slice(0, 2).map((s) => (
                      <div key={s.id} className="text-xs text-slate-300 flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="line-clamp-1">{s.title}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price & Action */}
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-3">
                    <div>
                      {course.discountPrice ? (
                        <div>
                          <div className="text-[11px] text-slate-500 line-through">
                            {course.price.toLocaleString('uz-UZ')} so'm
                          </div>
                          <div className="font-heading font-extrabold text-base text-emerald-400">
                            {formatPrice(course.discountPrice)}
                          </div>
                        </div>
                      ) : (
                        <div className="font-heading font-extrabold text-base text-white">
                          {formatPrice(course.price)}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onNavigate('course-detail', course.slug)}
                        className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                        title="Batafsil ko'rish"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => openLeadModal(course)}
                        className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-lg shadow-indigo-600/30 transition-all"
                      >
                        Yozilish
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
