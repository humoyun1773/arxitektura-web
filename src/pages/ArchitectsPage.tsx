import React, { useState } from "react";
import { useData } from "../context/DataContext";
import { useLanguage } from "../context/LanguageContext";
import { Star, Award, CheckCircle2, ArrowRight, Users, Briefcase } from "lucide-react";

interface ArchitectsPageProps {
  onNavigate: (page: string, param?: string) => void;
}

export const ArchitectsPage: React.FC<ArchitectsPageProps> = ({ onNavigate }) => {
  const { architects, openLeadModal } = useData();
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div className="pt-28 pb-20 min-h-screen bg-white">
      <div className="app-container space-y-16">

        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            <span>{t('team.badge', 'Jamoamiz')}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900">{t('team.title', 'Byuromizning Professional Arxitektorlari')}</h1>
          <p className="text-sm sm:text-base text-slate-600">{t('team.subtitle', '20+ nafar sertifikatlangan mutaxassis har bir loyihada buyurtmachi manfaatini birinchi o\'ringa qo\'yadi.')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {architects.map((arch) => (
            <div key={arch.id} className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img src={arch.avatar} alt={arch.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold text-slate-900 shadow">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{arch.rating.toFixed(1)}</span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-heading font-bold text-lg text-slate-900">{arch.name}</h3>
                  <p className="text-xs text-slate-500 font-medium">{arch.specializations?.[0] || arch.role}</p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">{arch.bio}</p>
                <div className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-1.5 text-slate-700">
                    <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                    <span><strong>{arch.projectsCompleted}</strong> {t('team.projects', 'loyiha')}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-700">
                    <Award className="w-3.5 h-3.5 text-slate-400" />
                    <span><strong>{arch.experienceYears}</strong> {t('team.exp', 'yil tajriba')}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {arch.specializations?.slice(0, 4).map((sk, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-medium">{sk}</span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <button onClick={() => setActiveId(arch.id === activeId ? null : arch.id)} className="flex-1 py-2.5 rounded-xl border border-slate-200 hover:border-slate-400 text-slate-800 font-bold text-xs transition-colors cursor-pointer">
                    {t('services.details', 'Batafsil')}
                  </button>
                  <button onClick={() => openLeadModal()} className="flex-1 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer">
                    {t('nav.contact', 'Bog\'lanish')} <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {activeId === arch.id && (
                <div className="px-6 pb-6 space-y-4 border-t border-slate-100 pt-4">
                  <div className="text-xs font-bold uppercase tracking-wide text-slate-500">{t('team.skillsTitle', 'Mutaxassislik yo\'nalishlari:')}</div>
                  <div className="space-y-1.5">
                    {arch.specializations?.map((sk, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        {sk}
                      </div>
                    ))}
                  </div>
                  {arch.awards?.[0] && (
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wide text-slate-500 mb-1">{t('team.eduTitle', 'Ta\'lim:')}</div>
                      <div className="text-xs text-slate-700">{arch.awards?.[0]}</div>
                    </div>
                  )}
                  {arch.awards && arch.awards.length > 0 && (
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wide text-slate-500 mb-1">{t('team.langsTitle', 'Tillar:')}</div>
                      <div className="flex gap-1.5 flex-wrap">
                        {arch.awards.map((lang, i) => (
                          <span key={i} className="px-2 py-0.5 rounded-full bg-slate-900 text-white text-[11px] font-medium">{lang}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-center text-white space-y-5">
          <h3 className="text-2xl sm:text-3xl font-extrabold font-heading">{t('team.ctaTitle', 'O\'z Loyihangiz Uchun Mutaxassis Toping')}</h3>
          <p className="text-sm text-slate-400 max-w-lg mx-auto">{t('team.ctaDesc', 'Biz bilan bog\'lanish — loyihangizga eng mos arxitektor va muhandis jamoasini tashkil qilamiz.')}</p>
          <button onClick={() => openLeadModal()} className="px-8 py-3.5 bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm rounded-2xl shadow-lg inline-flex items-center gap-2 transition-colors cursor-pointer">
            <span>{t('team.ctaBtn', 'Bepul Konsultatsiya')}</span> <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
