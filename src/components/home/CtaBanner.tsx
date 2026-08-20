import React from 'react';
import { useData } from '../../context/DataContext';
import { useLanguage } from '../../context/LanguageContext';
import { Sparkles, ArrowRight, ShieldCheck, PhoneCall } from 'lucide-react';

export const CtaBanner: React.FC = () => {
  const { openLeadModal, settings } = useData();
  const { t } = useLanguage();

  return (
    <section className="py-20 relative overflow-hidden bg-white">
      <div className="app-container">
        <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 overflow-hidden shadow-2xl shadow-indigo-600/20 text-white">
          {/* Glow lights */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white leading-tight">
              {t('cta.title', 'Kelajagingizni Biz Bilan Birga Quring!')}
            </h2>

            <p className="text-sm sm:text-lg text-indigo-100 leading-relaxed">
              {t('cta.subtitle', "28 oylik ta'lim kombinatsiyalariga ro'yxatdan o'ting va 4 ta til egasi bo'ling. Hoziroq ariza qoldiring!")}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                onClick={() => openLeadModal()}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-indigo-700 hover:bg-slate-50 font-extrabold text-sm sm:text-base shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group"
              >
                <span>{t('cta.btn', 'Bepul Konsultatsiya Olish')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`tel:${settings.phoneMain.replace(/\s+/g, '')}`}
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white/15 hover:bg-white/25 border border-white/20 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 backdrop-blur-md transition-all"
              >
                <PhoneCall className="w-4 h-4 text-white" />
                <span>{settings.phoneMain}</span>
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs text-indigo-100 pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span>{t('modal.privacy', "Ma'lumotlaringiz xavfsizligi 100% kafolatlanadi.")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
