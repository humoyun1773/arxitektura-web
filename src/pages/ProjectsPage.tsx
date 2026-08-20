import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { useLanguage } from '../context/LanguageContext';
import { 
  Ruler, 
  Layers, 
  MapPin, 
  Sparkles, 
  Eye, 
  Building2, 
  Search, 
  Filter,
  ArrowRight
} from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (page: string, param?: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  const { projects, openLeadModal } = useData();
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('Hammasi');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'Hammasi', label: t('projects.all', 'Barchasi') },
    { id: 'Kottejlar & Villalar', label: t('projects.villas', 'Kottejlar & Villalar') },
    { id: 'Interyer Dizayn', label: t('projects.interior', 'Interyer Dizayn') },
    { id: 'Tijoriy Obyektlar', label: t('projects.commercial', 'Tijoriy Obyektlar') },
    { id: 'Landshaft & Fasad', label: t('projects.landscape', 'Landshaft & Fasad') }
  ];

  const filtered = projects.filter((p) => {
    if (!p.isActive) return false;
    const matchesCat = selectedCategory === 'Hammasi' || p.category === selectedCategory;
    const matchesSearch = 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.style.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 bg-slate-50/50 min-h-screen">
      <div className="app-container">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5 text-slate-900" />
            <span>{t('projects.badge', 'Portfel')}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900">
            {t('projects.title', 'Arxitektura va Interyer Loyihalarimiz')}
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            {t('projects.subtitle', 'Eksklyuziv villalar, zamonaviy kottejlar, ko\'p qavatli binolar va individual interyer loyihalari to\'plami.')}
          </p>
        </div>

        {/* Controls Bar: Search & Category Tabs */}
        <div className="bg-white rounded-3xl border border-slate-200 p-4 sm:p-5 shadow-sm mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Loyiha nomi, uslub yoki manzil bo'yicha qidiruv..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-slate-900 focus:bg-white transition-all"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full scrollbar-none pb-1 md:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'bg-slate-50 text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 space-y-3">
            <Building2 className="w-12 h-12 text-slate-300 mx-auto" />
            <div className="text-lg font-bold text-slate-800">Ushbu so'rov bo'yicha loyihalar topilmadi</div>
            <p className="text-xs text-slate-500">Qidiruv parametrlarini o'zgartirib ko'ring yoki barcha loyihalarni tanlang.</p>
            <button
              onClick={() => { setSelectedCategory('Hammasi'); setSearchQuery(''); }}
              className="px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-xl"
            >
              Filtrlarni tozalash
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project) => (
              <div
                key={project.id}
                className="rounded-3xl bg-white border border-slate-200 hover:border-slate-400 shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col group"
              >
                {/* Image & Badges */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-slate-900 shadow-sm">
                    {project.category}
                  </div>

                  <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-[10px] font-bold text-white">
                    {project.style}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-semibold">
                    <span className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg">
                      <Ruler className="w-3.5 h-3.5 text-slate-300" />
                      {project.areaM2} mÂ²
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

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                    {project.features.slice(0, 3).map((feat, idx) => (
                      <span key={idx} className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-medium">
                        {feat}
                      </span>
                    ))}
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
        )}
      </div>
    </div>
  );
};
