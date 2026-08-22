import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { useLanguage } from '../../context/LanguageContext';
import { ProjectCategory } from '../../types';
import { 
  Ruler, 
  Layers, 
  MapPin, 
  ArrowRight, 
  Sparkles, 
  Eye,
  Building2
} from 'lucide-react';

interface PopularCoursesProps {
  onNavigate: (page: string, param?: string) => void;
}

export const PopularCourses: React.FC<PopularCoursesProps> = ({ onNavigate }) => {
  const { projects, openLeadModal } = useData();
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('Hammasi');

  const categories = [
    { id: 'Hammasi', label: t('projects.all', 'Barchasi') },
    { id: 'Kottejlar & Villalar', label: t('projects.villas', 'Kottejlar & Villalar') },
    { id: 'Interyer Dizayn', label: t('projects.interior', 'Interyer Dizayn') },
    { id: 'Tijoriy Obyektlar', label: t('projects.commercial', 'Tijoriy Obyektlar') },
    { id: 'Landshaft & Fasad', label: t('projects.landscape', 'Landshaft & Fasad') }
  ];

  const filteredProjects = projects.filter((p) => {
    if (!p.isActive) return false;
    if (selectedCategory === 'Hammasi') return true;
    return p.category === selectedCategory;
  });

  return (
    <section className="py-20 relative bg-white">
      <div className="app-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5 text-slate-900" />
              <span>{t('projects.badge', 'Portfeli')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900">
              {t('projects.title', 'Tanlangan Arxitektura Loyihalarimiz')}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl">
              {t('projects.subtitle', 'Biz yaratgan villalar, zamonaviy kottejlar, hashamatli interyerlar va tijoriy obyektlar.')}
            </p>
          </div>

          <button
            onClick={() => onNavigate('projects')}
            className="inline-flex items-center gap-2 text-slate-900 hover:text-slate-700 font-bold text-sm group cursor-pointer"
          >
            <span>{t('projects.viewAll', 'Barcha Loyihalar Portfeli')}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-white border border-slate-200 hover-lux shadow-sm overflow-hidden flex flex-col group animate-card-pop"
            >
              {/* Image & Badges */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

                {/* Category Pill */}
                <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-slate-900 shadow-sm">
                  {project.category}
                </div>

                {/* Style Badge */}
                <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-[10px] font-bold text-white">
                  {project.style}
                </div>

                {/* Area and Floors bottom bar on image */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-semibold">
                  <span className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg">
                    <Ruler className="w-3.5 h-3.5 text-slate-300" />
                    {project.areaM2} m²
                  </span>
                  <span className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg">
                    <Layers className="w-3.5 h-3.5 text-slate-300" />
                    {project.floorsCount} qavat
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="line-clamp-1">{project.location}</span>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-slate-900 group-hover:text-slate-700 transition-colors line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 mt-2 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Features Tags */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1.5">
                    {project.features.slice(0, 2).map((feat, idx) => (
                      <span key={idx} className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-medium">
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => onNavigate('project-detail', project.slug)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Tafsilotlar</span>
                  </button>

                  <button
                    onClick={() => openLeadModal(project)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Buyurtma</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
