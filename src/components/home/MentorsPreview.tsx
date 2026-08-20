import React from 'react';
import { useData } from '../../context/DataContext';
import { useLanguage } from '../../context/LanguageContext';
import { Users, Award, Building2, ArrowRight } from 'lucide-react';

interface MentorsPreviewProps {
  onNavigate: (page: string, param?: string) => void;
}

export const MentorsPreview: React.FC<MentorsPreviewProps> = ({ onNavigate }) => {
  const { architects } = useData();
  const { t } = useLanguage();

  return (
    <section className="py-20 relative bg-slate-50/70 border-b border-slate-100">
      <div className="app-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">
              <Users className="w-3.5 h-3.5 text-slate-900" />
              <span>{t('team.badge', 'Jamoamiz')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900">
              {t('team.title', 'Yetakchi Arxitektor va Muhandislar')}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl">
              {t('team.subtitle', 'Har bir chizma va fazoviy yechim ortida ko\'p yillik tajribaga ega xalqaro darajadagi mutaxassislar turadi.')}
            </p>
          </div>

          <button
            onClick={() => onNavigate('architects')}
            className="inline-flex items-center gap-2 text-slate-900 hover:text-slate-700 font-bold text-sm group cursor-pointer"
          >
            <span>Barcha Mutaxassislar</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Architects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {architects.map((arch) => (
            <div
              key={arch.id}
              className="rounded-3xl bg-white border border-slate-200 hover:border-slate-400 shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col group"
            >
              {/* Photo */}
              <div className="relative aspect-square overflow-hidden bg-slate-100">
                <img
                  src={arch.avatar}
                  alt={arch.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>

                {/* Exp badge */}
                <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-slate-900 text-white text-[11px] font-bold shadow-sm">
                  {arch.experienceYears}+ {t('team.exp', 'yillik tajriba')}
                </div>

                {/* Projects authored */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-bold shadow-sm">
                  {arch.projectsCompleted}+ loyiha
                </div>
              </div>

              {/* Info */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-heading font-bold text-base text-slate-900 group-hover:text-slate-700 transition-colors">
                    {arch.name}
                  </h3>
                  <div className="text-xs text-slate-500 font-semibold mb-2">
                    {arch.role}
                  </div>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {arch.bio}
                  </p>
                </div>

                {/* Specializations pills */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                  {arch.specializations.slice(0, 3).map((spec, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


