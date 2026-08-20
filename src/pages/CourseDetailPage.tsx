import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { 
  Clock, 
  Star, 
  Users, 
  Calendar, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  ArrowLeft, 
  Sparkles, 
  Award, 
  ShieldCheck, 
  BookOpen, 
  Play, 
  ArrowRight,
  Send
} from 'lucide-react';

interface CourseDetailPageProps {
  slug: string;
  onNavigate: (page: string, param?: string) => void;
}

export const CourseDetailPage: React.FC<CourseDetailPageProps> = ({ slug, onNavigate }) => {
  const { getCourseBySlug, getTeacherById, courses, openLeadModal, submitLead } = useData();
  const course = getCourseBySlug(slug);

  const [openModules, setOpenModules] = useState<{ [key: string]: boolean }>({ '0': true });
  const [fastName, setFastName] = useState('');
  const [fastPhone, setFastPhone] = useState('+998 ');
  const [isSent, setIsSent] = useState(false);

  if (!course) {
    return (
      <div className="pt-36 pb-20 min-h-screen text-center px-4">
        <h2 className="text-2xl font-bold text-white mb-4">Kurs topilmadi</h2>
        <button
          onClick={() => onNavigate('courses')}
          className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold"
        >
          Kurslar ro'yxatiga qaytish
        </button>
      </div>
    );
  }

  const teacher = getTeacherById(course.instructorId);
  const relatedCourses = courses
    .filter((c) => c.category === course.category && c.id !== course.id && c.isActive)
    .slice(0, 3);

  const toggleModule = (idx: number) => {
    setOpenModules((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const handleFastSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fastName.trim()) return;

    await submitLead({
      fullName: fastName.trim(),
      phone: fastPhone.trim(),
      courseId: course.id,
      courseTitle: course.title,
      source: 'Kurs batafsil sahifasi tezkor ariza'
    });

    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setFastName('');
      setFastPhone('+998 ');
    }, 3000);
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('uz-UZ') + " so'm / oy";
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-white text-slate-900">
      <div className="app-container">
        {/* Back navigation */}
        <button
          onClick={() => onNavigate('courses')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-indigo-600 mb-6 group transition-colors"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Barcha kurslarga qaytish</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Left Content */}
          <div className="lg:col-span-8 space-y-10">
            {/* Header Hero Box */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold">
                  {course.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                  {course.level}
                </span>
                <div className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-600 text-xs font-bold flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>{course.rating} ({course.reviewsCount} ta izoh)</span>
                </div>
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold font-heading text-slate-900 leading-tight">
                {course.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {course.shortDescription}
              </p>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-[11px] text-slate-500">Davomiyligi:</div>
                  <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5 mt-0.5">
                    <Clock className="w-4 h-4 text-indigo-600" />
                    {course.durationMonths} oy
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-[11px] text-slate-500">Haftasiga:</div>
                  <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5 mt-0.5">
                    <Calendar className="w-4 h-4 text-purple-600" />
                    {course.lessonsPerWeek} marta ({course.hoursPerLesson} soat)
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-[11px] text-slate-500">Tahsil olganlar:</div>
                  <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5 mt-0.5">
                    <Users className="w-4 h-4 text-emerald-600" />
                    {course.studentsCount}+ talaba
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-[11px] text-slate-500">Sertifikat:</div>
                  <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5 mt-0.5">
                    <Award className="w-4 h-4 text-amber-500" />
                    Rasmiy QR kodli
                  </div>
                </div>
              </div>
            </div>

            {/* Course Image / Video Preview */}
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xl">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent flex items-end p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <Play className="w-5 h-5 fill-white" />
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white">
                    Kurs taqdimoti va amaliy ish jarayoni
                  </div>
                </div>
              </div>
            </div>

            {/* Full Description & What you will learn */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-xl font-bold font-heading text-slate-900 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-600" />
                Kurs Haqida Batafsil
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                {course.fullDescription}
              </p>

              <div className="pt-4 border-t border-slate-100">
                <h3 className="text-sm font-bold text-slate-900 mb-3">Kursda nimalarga ega bo'lasiz?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {course.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive Syllabus (Modules Accordion) */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold font-heading text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-indigo-600" />
                  O'quv Dasturi (Sillabus)
                </h2>
                <span className="text-xs text-indigo-600 font-semibold">
                  {course.syllabus.length} ta asosiy modul
                </span>
              </div>

              <div className="space-y-3">
                {course.syllabus.map((module, idx) => {
                  const isOpen = !!openModules[idx];
                  return (
                    <div
                      key={module.id}
                      className="rounded-2xl border border-slate-200 bg-slate-50/70 overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => toggleModule(idx)}
                        className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-slate-100/80 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 text-xs font-bold flex items-center justify-center shrink-0">
                            0{module.module}
                          </div>
                          <div>
                            <div className="font-heading font-bold text-sm sm:text-base text-slate-900">
                              {module.title}
                            </div>
                            <div className="text-[11px] text-slate-500">{module.duration}</div>
                          </div>
                        </div>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-slate-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-slate-400" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 space-y-2 border-t border-slate-200 bg-white">
                          {module.topics.map((topic, tIdx) => (
                            <div key={tIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 shrink-0"></span>
                              <span>{topic}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Instructor Profile */}
            {teacher && (
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
                <h2 className="text-xl font-bold font-heading text-slate-900 flex items-center gap-2">
                  <Users className="w-5 h-5 text-indigo-600" />
                  Kurs Murabbiyi
                </h2>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  <img
                    src={teacher.avatar}
                    alt={teacher.name}
                    className="w-20 h-20 rounded-2xl object-cover border-2 border-indigo-200 shrink-0"
                  />
                  <div className="space-y-1.5">
                    <h3 className="font-heading font-bold text-lg text-slate-900">
                      {teacher.name}
                    </h3>
                    <div className="text-xs font-semibold text-indigo-600">
                      {teacher.role} ({teacher.experienceYears}+ yillik tajriba)
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed max-w-xl">
                      {teacher.bio}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {teacher.specializations.map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded-md bg-slate-100 text-[10px] font-medium text-slate-700"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Requirements */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl font-bold font-heading text-slate-900">Talablar & Tayyorgarlik</h2>
              <ul className="space-y-2">
                {course.requirements.map((req, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                    <span className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0"></span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Sticky Sidebar Enrollment Card */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              {/* Enrollment Box */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
                <div>
                  <div className="text-xs font-semibold text-slate-500 mb-1">Kurs to'lovi:</div>
                  {course.discountPrice ? (
                    <div>
                      <div className="text-xs text-slate-400 line-through">
                        {course.price.toLocaleString('uz-UZ')} so'm
                      </div>
                      <div className="font-heading font-extrabold text-2xl sm:text-3xl text-emerald-600">
                        {formatPrice(course.discountPrice)}
                      </div>
                      <div className="inline-block mt-1 px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                        Chegirma bilan
                      </div>
                    </div>
                  ) : (
                    <div className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
                      {formatPrice(course.price)}
                    </div>
                  )}
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-700">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Dars jadvali:</span>
                    <span className="font-semibold text-slate-900 text-right">{course.schedule}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Guruh sig'imi:</span>
                    <span className="font-semibold text-slate-900">10-12 kishi</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Sinov darsi:</span>
                    <span className="font-bold text-emerald-600">BEPUL</span>
                  </div>
                </div>

                {/* Fast Enrollment Form */}
                {isSent ? (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-1">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto" />
                    <div className="text-xs font-bold text-slate-900">Arizangiz qabul qilindi!</div>
                    <div className="text-[11px] text-emerald-700">Tez orada siz bilan bog'lanamiz.</div>
                  </div>
                ) : (
                  <form onSubmit={handleFastSubmit} className="space-y-3">
                    <input
                      type="text"
                      required
                      placeholder="Ismingiz *"
                      value={fastName}
                      onChange={(e) => setFastName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-900 placeholder-slate-400 outline-none focus:border-indigo-600 focus:bg-white"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="+998 90 123 45 67"
                      value={fastPhone}
                      onChange={(e) => setFastPhone(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-900 placeholder-slate-400 outline-none focus:border-indigo-600 focus:bg-white font-mono"
                    />
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-indigo-600/20 flex items-center justify-center gap-2 group transition-all"
                    >
                      <span>Ushbu Kursga Yozilish</span>
                      <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </form>
                )}

                <div className="flex items-center gap-2 text-[11px] text-slate-500 justify-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Joylar soni chegaralangan</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Courses Block */}
        {relatedCourses.length > 0 && (
          <div className="mt-20 pt-12 border-t border-slate-200">
            <h2 className="text-2xl font-bold font-heading text-slate-900 mb-6">
              O'xshash Kurslar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedCourses.map((rc) => (
                <div
                  key={rc.id}
                  onClick={() => onNavigate('course-detail', rc.slug)}
                  className="p-5 rounded-3xl bg-white border border-slate-200 hover:border-indigo-300 shadow-sm cursor-pointer transition-all hover:-translate-y-1 hover:shadow-xl space-y-3 group"
                >
                  <img
                    src={rc.image}
                    alt={rc.title}
                    className="w-full aspect-video rounded-2xl object-cover"
                  />
                  <h3 className="font-heading font-bold text-sm text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-1">
                    {rc.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-slate-600">
                    <span>{rc.durationMonths} oy</span>
                    <span className="font-bold text-indigo-600">
                      {rc.discountPrice ? `${rc.discountPrice.toLocaleString('uz-UZ')} so'm` : `${rc.price.toLocaleString('uz-UZ')} so'm`}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
