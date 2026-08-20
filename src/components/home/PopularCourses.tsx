import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { useLanguage } from '../../context/LanguageContext';
import { Course } from '../../types';
import { 
  Clock, 
  Star, 
  Users, 
  ArrowRight, 
  Sparkles, 
  Check, 
  Flame,
  ArrowUpRight
} from 'lucide-react';

interface PopularCoursesProps {
  onNavigate: (page: string, param?: string) => void;
}

export const PopularCourses: React.FC<PopularCoursesProps> = ({ onNavigate }) => {
  const { courses, openLeadModal } = useData();
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('Hammasi');

  const categories = [
    { id: 'Hammasi', label: t('courses.all', 'Hammasi') },
    { id: "Ta'lim Kombinatsiyalari", label: t('courses.combinations', "Ta'lim Kombinatsiyalari") },
    { id: 'Xorijiy Tillar', label: t('courses.foreignLanguages', 'Xorijiy Tillar') },
    { id: 'Arxitektura & 3D', label: 'Arxitektura & 3D' },
    { id: 'IT & Dasturlash', label: 'IT & Dasturlash' },
    { id: 'Grafik Dizayn', label: 'Grafik Dizayn' }
  ];

  const filteredCourses = courses.filter((c) => {
    if (!c.isActive) return false;
    if (selectedCategory === 'Hammasi') return true;
    return c.category === selectedCategory;
  });

  const formatPrice = (price: number) => {
    return `${price.toLocaleString('uz-UZ')} ${t('courses.perMonth', "so'm/oy")}`;
  };

  return (
    <section className="py-20 relative bg-slate-950/60">
      <div className="app-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              {t('courses.badge', "Ta'lim Yo'nalishlari")}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
              {t('courses.title', "Eng Talabgir Kurslar va Kombinatsiyalar")}
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl">
              {t('courses.subtitle', "O'zingizga mos ta'lim kombinatsiyasi yoki intensiv 7 oylik til kursini tanlang.")}
            </p>
          </div>

          <button
            onClick={() => onNavigate('courses')}
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-semibold text-sm group"
          >
            <span>{t('courses.viewAll', "Barcha Kurslar Katalogi")}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.slice(0, 6).map((course) => (
            <div
              key={course.id}
              className="rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/40 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col group"
            >
              {/* Image & Badges */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-800">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30"></div>

                {/* Level / Category Badge */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-[11px] font-bold text-white">
                    {course.category}
                  </span>
                  {course.isPopular && (
                    <span className="px-2.5 py-1 rounded-full bg-amber-500 text-slate-950 text-[11px] font-extrabold flex items-center gap-1 shadow-lg shadow-amber-500/30">
                      <Flame className="w-3 h-3 fill-slate-950" />
                      TOP
                    </span>
                  )}
                </div>

                {/* Rating */}
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-slate-950/90 backdrop-blur-md border border-slate-800 text-xs font-bold text-amber-300 flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                  <span>{course.rating}</span>
                  <span className="text-[10px] text-slate-400 font-normal">({course.reviewsCount})</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-indigo-400" />
                      {course.durationMonths} {t('courses.months', 'oy')}
                    </span>
                    <span>•</span>
                    <span className="text-indigo-300">{course.level}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-emerald-400" />
                      {course.studentsCount}+ {t('mentors.students', "ta o'quvchi")}
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

                {/* Key features pill */}
                <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                  {course.features.slice(0, 2).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="line-clamp-1">{feat}</span>
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
                      title={t('courses.details', "Batafsil ma'lumot")}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => openLeadModal(course)}
                      className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-lg shadow-indigo-600/30 hover:scale-105 active:scale-95 transition-all"
                    >
                      {t('courses.register', 'Yozilish')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
