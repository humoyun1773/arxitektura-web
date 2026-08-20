import React from 'react';
import { useData } from '../../context/DataContext';
import { useLanguage } from '../../context/LanguageContext';
import { Building2, Ruler, Award, CheckCircle2 } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const { settings } = useData();
  const { t } = useLanguage();

  const stats = [
    {
      id: 1,
      value: `${settings.completedProjectsCount || 140}+`,
      label: t('stats.projects', 'Amalga Oshirilgan Loyihalar'),
      desc: t('stats.projectsDesc', 'Kottejlar, villalar, biznes markazlar va interyerlar'),
      icon: <Building2 className="w-6 h-6 text-slate-900" />,
      gradient: 'from-slate-200/50 to-slate-100/10'
    },
    {
      id: 2,
      value: `${(settings.designedAreaM2 || 380000).toLocaleString()}+ m²`,
      label: t('stats.area', 'Loyihalangan Maydon (m²)'),
      desc: t('stats.areaDesc', 'Mukammal planirovka va mustahkam konstruksiyalar'),
      icon: <Ruler className="w-6 h-6 text-slate-900" />,
      gradient: 'from-slate-200/50 to-slate-100/10'
    },
    {
      id: 3,
      value: `${settings.experienceYears || 12}+ Yil`,
      label: t('stats.experience', 'Yillik Tajriba'),
      desc: t('stats.experienceDesc', 'Professional me\'morlar va muhandislar jamoasi'),
      icon: <Award className="w-6 h-6 text-slate-900" />,
      gradient: 'from-slate-200/50 to-slate-100/10'
    },
    {
      id: 4,
      value: `${settings.satisfiedClientsPercent || 99}%`,
      label: t('stats.satisfaction', 'Mijozlar Mamnuniyati'),
      desc: t('stats.satisfactionDesc', '100% mualliflik nazorati va sifat kafolati'),
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />,
      gradient: 'from-emerald-500/20 to-teal-500/5'
    }
  ];

  return (
    <section className="py-12 relative bg-white border-y border-slate-100">
      <div className="app-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item) => (
            <div
              key={item.id}
              className="relative rounded-3xl p-6 bg-white border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-slate-400 transition-all group overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.gradient} rounded-full blur-2xl -z-10 group-hover:scale-125 transition-transform opacity-40`}></div>
              
              <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

              <div className="font-heading font-black text-2xl sm:text-3xl text-slate-900 tracking-tight mb-1">
                {item.value}
              </div>
              <div className="font-bold text-sm text-slate-800 mb-1.5">
                {item.label}
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

