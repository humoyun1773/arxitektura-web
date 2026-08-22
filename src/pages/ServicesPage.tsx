import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { useLanguage } from '../context/LanguageContext';
import { 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  ArrowRight
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: string, param?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const { services, openLeadModal } = useData();
  const { t } = useLanguage();
  const [selectedServiceId, setSelectedServiceId] = useState<string>(services[0]?.id || '');

  const activeService = services.find(s => s.id === selectedServiceId) || services[0];

  return (
    <div className="pt-28 pb-20 bg-slate-50/50 min-h-screen animate-page-entrance">
      <div className="app-container space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-slate-900" />
            <span>{t('services.badge', 'Xizmatlarimiz')}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900">
            {t('services.title', 'Professional Arxitektura va Dizayn Xizmatlari')}
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            {t('services.subtitle', 'Turar-joy va jamoat binolarini eskizdan tortib mualliflik nazoratigacha kompleks loyihalash.')}
          </p>
        </div>

        {/* Services Selection Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv) => (
            <div
              key={srv.id}
              onClick={() => setSelectedServiceId(srv.id)}
              className={`p-6 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between space-y-5 ${
                selectedServiceId === srv.id
                  ? 'bg-slate-900 text-white border-slate-900 shadow-xl scale-[1.02]'
                  : 'bg-white text-slate-900 border-slate-200 hover:border-slate-400 shadow-sm hover:shadow-md'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{srv.icon}</span>
                  <span className={`text-[10px] uppercase font-bold px-2.5 py-1 rounded-full ${
                    selectedServiceId === srv.id ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {srv.category}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg">
                  {srv.title}
                </h3>

                <p className={`text-xs leading-relaxed line-clamp-3 ${
                  selectedServiceId === srv.id ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {srv.shortDesc}
                </p>
              </div>

              <div className={`pt-4 border-t flex items-center justify-between ${
                selectedServiceId === srv.id ? 'border-slate-800' : 'border-slate-100'
              }`}>
                <div>
                  <div className={`text-[10px] ${selectedServiceId === srv.id ? 'text-slate-400' : 'text-slate-500'}`}>
                    {t('services.pricePerM2', '1 m² narxi')}
                  </div>
                  <div className="font-heading font-black text-sm sm:text-base">
                    {srv.startingPricePerM2.toLocaleString('uz-UZ')} UZS
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openLeadModal(undefined, srv);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                    selectedServiceId === srv.id
                      ? 'bg-white text-slate-900 hover:bg-slate-100'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  {t('services.orderBtn', 'Buyurtma')}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Service In-Depth Packages Tier Table */}
        {activeService && activeService.packages && activeService.packages.length > 0 && (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                {activeService.title}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">
                {t('services.packagesTitle', 'Loyihalash Paketlari va Narxlari')}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                {t('services.packagesSubtitle', 'O\'zingizning byudjetingiz va talablaringizga mos to\'plamni tanlang.')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {activeService.packages.map((pkg, idx) => (
                <div
                  key={idx}
                  className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 border transition-all ${
                    pkg.isPopular
                      ? 'bg-slate-900 text-white border-slate-900 shadow-2xl relative'
                      : 'bg-slate-50 text-slate-900 border-slate-200'
                  }`}
                >
                  {pkg.isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white text-slate-900 font-bold text-[10px] uppercase shadow-md tracking-wide">
                      {t('services.popularBadge', 'Eng Ko\'p Tanlanadigan')}
                    </div>
                  )}

                  <div className="space-y-4">
                    <div className="space-y-1">
                      <h3 className="font-heading font-bold text-lg">{pkg.name}</h3>
                      <p className={`text-xs leading-relaxed ${pkg.isPopular ? 'text-slate-300' : 'text-slate-500'}`}>
                        {pkg.description}
                      </p>
                    </div>

                    <div className="space-y-1 py-2">
                      <div className="font-heading font-black text-2xl sm:text-3xl">
                        {pkg.pricePerM2.toLocaleString('uz-UZ')}{' '}
                        <span className="text-xs font-normal">UZS / m²</span>
                      </div>
                      <div className={`text-xs flex items-center gap-1.5 ${pkg.isPopular ? 'text-slate-400' : 'text-slate-500'}`}>
                        <Clock className="w-3.5 h-3.5" />
                        <span>{t('services.duration', 'Muddati:')} {activeService.estimatedDuration}</span>
                      </div>
                    </div>

                    {/* Deliverables Checklist */}
                    <div className="space-y-2 pt-4 border-t border-slate-200/40">
                      <div className={`text-[10px] font-bold uppercase tracking-wider ${pkg.isPopular ? 'text-slate-400' : 'text-slate-500'}`}>
                        {t('services.deliverables', 'Tarkibi:')}
                      </div>
                      <div className="space-y-2">
                        {pkg.deliverables.map((del, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2 text-xs">
                            <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${pkg.isPopular ? 'text-emerald-400' : 'text-slate-900'}`} />
                            <span className={pkg.isPopular ? 'text-slate-200' : 'text-slate-700'}>{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => openLeadModal(undefined, activeService)}
                    className={`w-full py-3.5 rounded-2xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      pkg.isPopular
                        ? 'bg-white text-slate-900 hover:bg-slate-100 shadow-md'
                        : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`}
                  >
                    <span>{t('services.choosePackage', 'Ushbu Paketni Tanlash')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Workflow Summary / FAQ CTA */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6">
          <h3 className="text-2xl font-bold font-heading text-slate-900">
            {t('services.customTitle', 'Maxsus Yoki Nostandart Obyektingiz Bormi?')}
          </h3>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            {t('services.customDesc', 'Katta maydondagi turar-joy majmualari, fabrika, tibbiyot markazlari yoki mehmonxonalar uchun individual texnik topshiriq va smeta tuzib beramiz.')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openLeadModal()}
              className="px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-2xl shadow-lg cursor-pointer"
            >
              {t('services.customCta1', 'Individual Smeta Olish')}
            </button>
            <button
              onClick={() => onNavigate('calculator')}
              className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-sm rounded-2xl cursor-pointer"
            >
              {t('services.customCta2', 'Onlayn Kalkulyator')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
