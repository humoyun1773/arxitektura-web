import React from 'react';
import { useData } from '../../context/DataContext';
import { useLanguage } from '../../context/LanguageContext';
import { Sparkles, ArrowRight, CheckCircle2, Building2, Calculator, ShieldCheck, Ruler } from 'lucide-react';
import { TelegramIcon } from '../common/SocialIcons';

interface HeroSliderProps {
  onNavigate: (page: string, param?: string) => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onNavigate }) => {
  const { settings, openLeadModal } = useData();
  const { t } = useLanguage();

  const telegramUrl = settings?.telegramLink || 'https://t.me/arxitektura_buro';

  return (
    <section className="relative min-h-[90vh] pt-28 pb-16 lg:py-32 flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50/90 via-white to-white">
      {/* Background Ambience / Subtle Grid */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-slate-200/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none opacity-40"></div>

      <div className="app-container w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Bureau Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold tracking-wide">
              <Building2 className="w-3.5 h-3.5 text-slate-900" />
              <span>{t('hero.badge', '🏛️ ARXITEKTURA VA INTERYER BYUROSI')}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              {t('hero.title', 'MUKAMMAL FAZOVIY YECHIMLAR VA ZAMONAVIY ARXITEKTURA')}
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {t('hero.subtitle', 'Individual villalar, zamonaviy kottejlar, tijoriy binolar va eksklyuziv interyerlarni xalqaro me\'yorlar asosida noldan kalitgacha loyihalashtiramiz.')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onNavigate('calculator')}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm sm:text-base shadow-xl shadow-slate-900/10 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Calculator className="w-5 h-5 text-white shrink-0" />
                <span>{t('hero.ctaCalculate', 'Loyihani Hisoblash')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('projects')}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 font-bold text-sm sm:text-base shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Ruler className="w-5 h-5 text-slate-700" />
                <span>{t('hero.ctaPortfolio', 'Portfelni Ko\'rish')}</span>
              </button>

              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-sky-50 hover:bg-sky-100 border border-sky-200 text-sky-700 font-bold text-sm transition-all flex items-center justify-center gap-2"
              >
                <TelegramIcon className="w-4 h-4 text-sky-600 shrink-0" />
                <span>{t('hero.contactTelegram', 'Bizga murojaat qiling')}</span>
              </a>
            </div>

            {/* Key Advantages List */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Mualliflik Nazorati</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Fotorealistik 3D Renderlar</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>AR + KJ Ishchi Chizmalar</span>
              </div>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Architectural Image */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-2xl aspect-[4/3] sm:aspect-[16/12]">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern Luxury Villa Architecture"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

                {/* Floating Bottom Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-500">Flagman Loyiha</div>
                    <div className="text-sm font-bold text-slate-900 line-clamp-1">Modern Oasis Luxury Villa (480 m²)</div>
                  </div>
                  <button
                    onClick={() => openLeadModal()}
                    className="shrink-0 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-sm"
                  >
                    Buyurtma
                  </button>
                </div>
              </div>

              {/* Floating Top Mini Card */}
              <div className="absolute -top-4 -left-4 p-3 rounded-2xl bg-white border border-slate-200 shadow-lg hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900 font-bold">
                  10+
                </div>
                <div className="text-xs">
                  <div className="font-bold text-slate-900">Yillik Tajriba</div>
                  <div className="text-slate-500">Premium arxitektura</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

