import React from 'react';
import { useData } from '../../context/DataContext';
import { useLanguage } from '../../context/LanguageContext';
import { Sparkles, ArrowRight, ShieldCheck, PhoneCall } from 'lucide-react';

export const CtaBanner: React.FC = () => {
  const { openLeadModal, settings } = useData();
  const { t } = useLanguage();

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="app-container">
        <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-indigo-900/80 via-purple-900/60 to-slate-900 border border-indigo-500/30 overflow-hidden shadow-2xl shadow-indigo-500/10">
          {/* Glow lights */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white leading-tight">
              {t('cta.title', 'Kelajagingizni Biz Bilan Birga Quring!')}
            </h2>

            <p className="text-sm sm:text-lg text-slate-200 leading-relaxed">
              {t('cta.subtitle', "28 oylik ta'lim kombinatsiyalariga ro'yxatdan o'ting va 4 ta til egasi bo'ling. Hoziroq ariza qoldiring!")}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                onClick={() => openLeadModal()}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-slate-950 hover:bg-slate-100 font-extrabold text-sm sm:text-base shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group"
              >
                <span>{t('cta.btn', 'Bepul Konsultatsiya Olish')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`tel:${settings.phoneMain.replace(/\s+/g, '')}`}
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 backdrop-blur-md transition-all"
              >
                <PhoneCall className="w-4 h-4 text-indigo-400" />
                <span>{settings.phoneMain}</span>
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs text-indigo-200/80 pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{t('modal.privacy', "Ma'lumotlaringiz xavfsizligi 100% kafolatlanadi.")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
