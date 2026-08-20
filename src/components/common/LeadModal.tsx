import React, { useState, useEffect } from 'react';
import { useData } from '../../context/DataContext';
import { useLanguage } from '../../context/LanguageContext';
import { X, Sparkles, Phone, User, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export const LeadModal: React.FC = () => {
  const { isLeadModalOpen, closeLeadModal, selectedCourseForModal, courses, submitLead } = useData();
  const { t } = useLanguage();
  
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('+998 ');
  const [courseId, setCourseId] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (selectedCourseForModal) {
      setCourseId(selectedCourseForModal.id);
    } else {
      setCourseId(courses[0]?.id || '');
    }
    if (isLeadModalOpen) {
      setIsSuccess(false);
    }
  }, [selectedCourseForModal, isLeadModalOpen, courses]);

  if (!isLeadModalOpen) return null;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    if (!val.startsWith('+998')) {
      val = '+998 ';
    }
    setPhone(val);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) return;
    
    setIsSubmitting(true);
    const selected = courses.find((c) => c.id === courseId);
    
    await submitLead({
      fullName: fullName.trim(),
      phone: phone.trim(),
      courseId: selected?.id,
      courseTitle: selected?.title || 'Umumiy konsultatsiya',
      source: 'Modal ro\'yxatdan o\'tish'
    });

    setIsSubmitting(false);
    setIsSuccess(true);

    setTimeout(() => {
      closeLeadModal();
      setFullName('');
      setPhone('+998 ');
      setIsSuccess(false);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Glow Accent */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"></div>

        {/* Close button */}
        <button
          onClick={closeLeadModal}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="p-8 sm:p-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-slate-900">
              {t('modal.success', 'Arizangiz Muvaffaqiyatli Qabul Qilindi!')}
            </h3>
            <p className="text-sm text-slate-600">
              {t('modal.subtitle', "Ma'lumotlaringizni qoldiring, mutaxassisimiz tez orada siz bilan bog'lanadi.")}
            </p>
          </div>
        ) : (
          <div className="p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 mb-1.5">
              {t('modal.title', "Kursga Ro'yxatdan O'tish")}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              {t('modal.subtitle', "Ma'lumotlaringizni qoldiring, mutaxassisimiz tez orada siz bilan bog'lanadi.")}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  {t('modal.fullName', 'Ism va Familiyangiz *')}
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder={t('modal.fullNamePlaceholder', 'Masalan: Sardor Komilov')}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  {t('modal.phone', 'Telefon Raqamingiz *')}
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    placeholder={t('modal.phonePlaceholder', '+998 90 123 45 67')}
                    value={phone}
                    onChange={handlePhoneChange}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all font-mono"
                  />
                </div>
              </div>

              {/* Course select */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  {t('modal.course', 'Qiziqtirgan Kursingiz')}
                </label>
                <select
                  value={courseId}
                  onChange={(e) => setCourseId(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 outline-none transition-all"
                >
                  <option value="">{t('courses.all', 'Barcha kurslar')} (Tanlang)</option>
                  {courses.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.title} ({c.durationMonths} {t('courses.months', 'oy')})
                    </option>
                  ))}
                </select>
              </div>

              {/* Security info */}
              <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <span>{t('modal.privacy', "Ma'lumotlaringiz xavfsizligi 100% kafolatlanadi.")}</span>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-4 py-3 px-6 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-2 transition-all group disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <span>{t('modal.submit', 'Arizani Yuborish')}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
