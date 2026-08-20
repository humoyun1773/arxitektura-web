import React from 'react';
import { useData } from '../context/DataContext';
import { Star, Award, Sparkles } from 'lucide-react';
import { TelegramIcon, InstagramIcon, LinkedinIcon } from '../components/common/SocialIcons';

interface TeachersPageProps {
  onNavigate: (page: string, param?: string) => void;
}

export const TeachersPage: React.FC<TeachersPageProps> = () => {
  const { teachers, courses, openLeadModal } = useData();

  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="app-container">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            Xalqaro Darajadagi <span className="gradient-text">Mentorlarimiz</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-400">
            Har bir o'qituvchimiz ko'p yillik amaliy tajribaga ega bo'lib, o'z sohasining haqiqiy professionalidir.
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher) => {
            const taughtCourses = courses.filter((c) => teacher.courseIds.includes(c.id));

            return (
              <div
                key={teacher.id}
                className="rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/40 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col justify-between group"
              >
                <div>
                  {/* Photo with Overlay */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-800">
                    <img
                      src={teacher.avatar}
                      alt={teacher.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>

                    {/* Exp Badge */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700 text-xs font-bold text-white">
                      {teacher.experienceYears}+ yil amaliyot
                    </div>

                    {/* Rating Badge */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-950/90 backdrop-blur-md border border-slate-800 text-xs font-bold text-amber-300 flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                      <span>{teacher.rating}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="font-heading font-bold text-xl text-white group-hover:text-indigo-300 transition-colors">
                        {teacher.name}
                      </h3>
                      <div className="text-xs font-semibold text-indigo-400 mt-0.5">
                        {teacher.role}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {teacher.bio}
                    </p>

                    {/* Certificates */}
                    {teacher.certificates && teacher.certificates.length > 0 && (
                      <div className="space-y-1.5 pt-2">
                        <div className="text-[11px] font-semibold text-slate-400">Sertifikatlar & Yutuqlar:</div>
                        {teacher.certificates.map((cert, cIdx) => (
                          <div key={cIdx} className="flex items-center gap-2 text-xs text-slate-300">
                            <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                            <span className="line-clamp-1">{cert}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Specializations */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {teacher.specializations.map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-lg bg-slate-800/80 text-[11px] font-medium text-slate-300 border border-slate-700/60"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action & Courses taught */}
                <div className="p-6 pt-0 space-y-4">
                  {taughtCourses.length > 0 && (
                    <div className="p-3 bg-slate-950/60 rounded-2xl border border-slate-800 text-xs">
                      <span className="text-slate-400">Dars beradigan kurslari: </span>
                      <strong className="text-indigo-300">
                        {taughtCourses.map((c) => c.title).join(', ')}
                      </strong>
                    </div>
                  )}

                  <button
                    onClick={() => openLeadModal()}
                    className="w-full py-3 rounded-xl bg-slate-800 hover:bg-indigo-600 text-slate-200 hover:text-white font-bold text-xs transition-all shadow-md"
                  >
                    Ushbu Ustoz Guruhiga Yozilish
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
