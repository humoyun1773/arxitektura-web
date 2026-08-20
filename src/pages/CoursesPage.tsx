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
    <div className="pt-28 pb-20 min-h-screen bg-white text-slate-900">
      <div className="app-container">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900">
            {t('courses.title', "Eng Talabgir Kurslar va Kombinatsiyalar")}
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            {t('courses.subtitle', "O'zingizga mos ta'lim kombinatsiyasi yoki intensiv 7 oylik til kursini tanlang.")}
          </p>
        </div>

        {/* Filters & Search Bar */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm mb-10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={t('courses.searchPlaceholder', "Kurs nomi, texnologiya yoki yo'nalish bo'yicha qidiring...")}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 focus:border-indigo-600 focus:bg-white rounded-2xl pl-11 pr-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-700"
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
                className="w-full bg-slate-50 border border-slate-200 focus:border-indigo-600 focus:bg-white rounded-2xl px-4 py-3 text-sm text-slate-800 outline-none transition-all"
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
                className="w-full bg-slate-50 border border-slate-200 focus:border-indigo-600 focus:bg-white rounded-2xl px-4 py-3 text-sm text-slate-800 outline-none transition-all"
              >
                <option value="popular">{t('courses.popular', 'Ommabop')}</option>
                <option value="rating">Reyting bo'yicha</option>
                <option value="price-asc">Narxi: Arzondan qimmatga</option>
                <option value="price-desc">Narxi: Qimmatdan arzonga</option>
              </select>
            </div>
          </div>

          {/* Categories Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-100">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                      : 'bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {(search || selectedCategory !== 'Hammasi' || selectedLevel !== 'Hammasi' || sortBy !== 'popular') && (
              <button
                onClick={clearFilters}
                className="text-xs text-rose-600 hover:text-rose-700 font-semibold flex items-center gap-1.5"
              >
                <X className="w-3.5 h-3.5" />
                Filtrlarni tozalash
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="text-sm text-slate-600 mb-6 flex items-center justify-between">
          <span>Topilgan kurslar: <strong className="text-slate-900">{filteredCourses.length} ta</strong></span>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length === 0 ? (
          <div className="text-center py-20 bg-slate-50 rounded-3xl border border-slate-200 p-8 space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-white text-slate-400 border border-slate-200 flex items-center justify-center mx-auto">
              <Filter className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Mos kurslar topilmadi</h3>
            <p className="text-xs text-slate-600 max-w-sm mx-auto">
              Qidiruv so'zini yoki filtrlarni o'zgartirib ko'ring yoki umumiy konsultatsiyaga yoziling.
            </p>
            <button
              onClick={clearFilters}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 shadow-sm"
            >
              Barcha kurslarni ko'rsatish
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="rounded-3xl bg-white border border-slate-200/90 hover:border-indigo-300 shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col group"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent"></div>

                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-[11px] font-bold text-slate-800 shadow-sm">
                      {course.category}
                    </span>
                    {course.isPopular && (
                      <span className="px-2.5 py-1 rounded-full bg-amber-500 text-white text-[11px] font-extrabold flex items-center gap-1 shadow-md shadow-amber-500/30">
                        <Flame className="w-3 h-3 fill-white" />
                        TOP
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-xs font-bold text-amber-500 flex items-center gap-1 shadow-sm">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <span className="text-slate-800">{course.rating}</span>
                    <span className="text-[10px] text-slate-500 font-normal">({course.reviewsCount})</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-indigo-600" />
                        {course.durationMonths} oy
                      </span>
                      <span>•</span>
                      <span className="text-indigo-600 font-semibold">{course.level}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-emerald-600" />
                        {course.studentsCount}+ talaba
                      </span>
                    </div>

                    <h3
                      onClick={() => onNavigate('course-detail', course.slug)}
                      className="font-heading font-bold text-lg text-slate-900 hover:text-indigo-600 cursor-pointer transition-colors line-clamp-2"
                    >
                      {course.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {course.shortDescription}
                    </p>
                  </div>

                  {/* Syllabus summary */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <div className="text-[11px] text-slate-500 font-semibold">
                      Dastur tarkibi ({course.syllabus.length} ta modul):
                    </div>
                    {course.syllabus.slice(0, 2).map((s) => (
                      <div key={s.id} className="text-xs text-slate-700 flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="line-clamp-1">{s.title}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price & Action */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                    <div>
                      {course.discountPrice ? (
                        <div>
                          <div className="text-[11px] text-slate-400 line-through">
                            {course.price.toLocaleString('uz-UZ')} so'm
                          </div>
                          <div className="font-heading font-extrabold text-base text-emerald-600">
                            {formatPrice(course.discountPrice)}
                          </div>
                        </div>
                      ) : (
                        <div className="font-heading font-extrabold text-base text-slate-900">
                          {formatPrice(course.price)}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onNavigate('course-detail', course.slug)}
                        className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 transition-colors"
                        title="Batafsil ko'rish"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => openLeadModal(course)}
                        className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md shadow-indigo-600/20 transition-all"
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
