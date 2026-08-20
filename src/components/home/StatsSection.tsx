import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Users, Globe2, Briefcase, Award } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    {
      id: 1,
      value: '3,200+',
      label: t('stats.students', "O'quvchilar Soni"),
      desc: t('stats.studentsDesc', "Muvaffaqiyatli tahsil olgan va o'qiyotgan yoshlar"),
      icon: <Users className="w-6 h-6 text-indigo-400" />,
      gradient: 'from-indigo-500/20 to-purple-500/5'
    },
    {
      id: 2,
      value: '4 Til',
      label: t('stats.languages', 'Xalqaro Tillar'),
      desc: t('stats.languagesDesc', 'Ingliz, Nemis, Xitoy, Koreys, Yapon, Fors, Rus'),
      icon: <Globe2 className="w-6 h-6 text-sky-400" />,
      gradient: 'from-sky-500/20 to-indigo-500/5'
    },
    {
      id: 3,
      value: '100%',
      label: t('stats.employment', "Ish Bilan Ta'minlash"),
      desc: t('stats.employmentDesc', '28 oylik dastur bitiruvchilariga kafolat'),
      icon: <Briefcase className="w-6 h-6 text-emerald-400" />,
      gradient: 'from-emerald-500/20 to-teal-500/5'
    },
    {
      id: 4,
      value: '12+ Yil',
      label: t('stats.experience', 'Yillik Tajriba'),
      desc: t('stats.experienceDesc', "Sifatli va qat'iy intizomli ta'lim tizimi"),
      icon: <Award className="w-6 h-6 text-amber-400" />,
      gradient: 'from-amber-500/20 to-orange-500/5'
    }
  ];

  return (
    <section className="py-12 relative bg-white">
      <div className="app-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item) => (
            <div
              key={item.id}
              className="relative rounded-3xl p-6 bg-white border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-indigo-300 transition-all group overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.gradient} rounded-full blur-2xl -z-10 group-hover:scale-125 transition-transform opacity-30`}></div>
              
              <div className="w-12 h-12 rounded-2xl bg-indigo-50/80 border border-indigo-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

              <div className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-1">
                {item.value}
              </div>
              <div className="font-semibold text-sm text-slate-800 mb-1.5">
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
