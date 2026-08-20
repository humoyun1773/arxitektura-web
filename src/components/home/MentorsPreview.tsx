import React from 'react';
import { useData } from '../../context/DataContext';
import { Sparkles, Star, Award, Users, ArrowRight } from 'lucide-react';

interface MentorsPreviewProps {
  onNavigate: (page: string, param?: string) => void;
}

export const MentorsPreview: React.FC<MentorsPreviewProps> = ({ onNavigate }) => {
  const { teachers } = useData();

  return (
    <section className="py-20 relative">
      <div className="app-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Kuchli Mutaxassislar
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
              Tajribali <span className="gradient-text">Mentorlarimiz</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl">
              Darslarni xalqaro kompaniyalarda real loyihalarni bajargan va ko'p yillik amaliy tajribaga ega ustozlar olib boradilar.
            </p>
          </div>

          <button
            onClick={() => onNavigate('teachers')}
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-semibold text-sm group"
          >
            <span>Barcha o'qituvchilar</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachers.slice(0, 4).map((teacher) => (
            <div
              key={teacher.id}
              className="rounded-3xl bg-slate-900/50 border border-slate-800/80 hover:border-indigo-500/40 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col group"
            >
              {/* Photo */}
              <div className="relative aspect-square overflow-hidden bg-slate-800">
                <img
                  src={teacher.avatar}
                  alt={teacher.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>

                {/* Rating Badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-800 text-xs font-bold text-amber-300 flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                  <span>{teacher.rating}</span>
                </div>

                {/* Exp badge */}
                <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-indigo-600/90 text-white text-[11px] font-bold backdrop-blur-md">
                  {teacher.experienceYears}+ yillik tajriba
                </div>
              </div>

              {/* Info */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-heading font-bold text-base text-white group-hover:text-indigo-300 transition-colors">
                    {teacher.name}
                  </h3>
                  <div className="text-xs text-indigo-400 font-semibold mb-2">
                    {teacher.role}
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {teacher.bio}
                  </p>
                </div>

                {/* Specializations pills */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                  {teacher.specializations.slice(0, 3).map((spec, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 text-[10px] font-medium"
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
