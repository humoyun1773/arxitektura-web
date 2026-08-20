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
        <div className="relative rounded-3xl p-8 sm:p-14 bg-slate-900 overflow-hidden shadow-2xl shadow-slate-900/20 text-white">
          {/* Subtle architectural grid pattern in dark */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>{t('cta.badge', 'Eksklyuziv Loyiha')}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white leading-tight">
              {t('cta.title', 'Orzuingizdagi Binoni Biz Bilan Birga Quring!')}
            </h2>

            <p className="text-sm sm:text-lg text-slate-300 leading-relaxed">
              {t('cta.subtitle', 'Bosh arxitektorimiz bilan bepul dastlabki konsultatsiya va loyiha muhokamasini hoziroq bron qiling.')}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                onClick={() => openLeadModal()}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-slate-900 hover:bg-slate-100 font-extrabold text-sm sm:text-base shadow-xl transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>{t('cta.btn', 'Bepul Konsultatsiya Olish')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`tel:${settings.phoneMain.replace(/\s+/g, '')}`}
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all"
              >
                <PhoneCall className="w-4 h-4 text-white" />
                <span>{settings.phoneMain}</span>
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400 pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{t('modal.privacy', "Ma'lumotlaringiz xavfsizligi 100% kafolatlanadi.")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

