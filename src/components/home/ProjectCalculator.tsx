import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Calculator, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

interface ProjectCalculatorProps {
  onNavigate?: (page: string, param?: string) => void;
}

interface ObjectOption {
  id: string;
  basePricePerM2: number;
  icon: string;
}

export const ProjectCalculator: React.FC<ProjectCalculatorProps> = ({ onNavigate }) => {
  const { openLeadModal } = useData();
  const { t } = useLanguage();

  const objectOptions: ObjectOption[] = [
    { id: 'villa', basePricePerM2: 120000, icon: '🏡' },
    { id: 'interior', basePricePerM2: 180000, icon: '🛋️' },
    { id: 'commercial', basePricePerM2: 140000, icon: '🏢' },
    { id: 'multi', basePricePerM2: 85000, icon: '🏗️' },
    { id: 'landscape', basePricePerM2: 60000, icon: '🌳' }
  ];

  const packages = [
    { 
      id: 'eskiz', 
      multiplier: 0.7, 
      isPopular: false
    },
    { 
      id: 'standart', 
      multiplier: 1.0, 
      isPopular: false
    },
    { 
      id: 'premium', 
      multiplier: 1.5, 
      isPopular: true
    }
  ];

  const [selectedObjectId, setSelectedObjectId] = useState<string>('villa');
  const [areaM2, setAreaM2] = useState<number>(300);
  const [selectedPackageId, setSelectedPackageId] = useState<string>('standart');

  const currentObject = objectOptions.find(o => o.id === selectedObjectId) || objectOptions[0];
  const currentPackage = packages.find(p => p.id === selectedPackageId) || packages[1];

  const pricePerM2 = Math.round(currentObject.basePricePerM2 * currentPackage.multiplier);
  const totalCost = pricePerM2 * areaM2;

  const handleOrderCalculation = () => {
    openLeadModal();
  };

  const getObjectLabel = (id: string) => {
    switch (id) {
      case 'villa': return t('projects.villas', 'Kottejlar & Villalar');
      case 'interior': return t('projects.interior', 'Interyer Dizayn');
      case 'commercial': return t('projects.commercial', 'Tijoriy Obyektlar');
      case 'multi': return t('calc.ot_apartment', 'Ko\'p Qavatli Bino');
      case 'landscape': return t('projects.landscape', 'Landshaft & Fasad');
      default: return '';
    }
  };

  const getPackageLabel = (id: string) => {
    switch (id) {
      case 'eskiz': return t('calc.pkg_eskiz', 'Eskiz Loyiha');
      case 'standart': return t('calc.pkg_standard', 'Standart (AR)');
      case 'premium': return t('calc.pkg_vip', 'To\'liq VIP (AR + KJ)');
      default: return '';
    }
  };

  const getPackageDuration = (id: string) => {
    switch (id) {
      case 'eskiz': return t('calc.dur_eskiz', '15-20 kun');
      case 'standart': return t('calc.dur_standard', '25-35 kun');
      case 'premium': return t('calc.dur_vip', '40-60 kun');
      default: return '';
    }
  };

  const getPackageIncludes = (id: string) => {
    if (id === 'eskiz') {
      return [
        t('calc.eskiz_i1', 'Bosh reja va fasad eskizlari'),
        t('calc.eskiz_i2', '3D vizualizatsiya (5 ta kadr)'),
        t('calc.eskiz_i3', 'Xona hajm rejasi'),
        t('calc.eskiz_i4', 'Materiallar palitrasi')
      ];
    }
    if (id === 'standart') {
      return [
        t('calc.std_i1', 'Eskiz loyiha to\'liq kompleksi'),
        t('calc.std_i2', 'Arxitektura (AR) hujjatlari'),
        t('calc.std_i3', 'Muhandislik tizimlari sxemasi'),
        t('calc.std_i4', '3D vizualizatsiya (10+ kadr)'),
        t('calc.std_i5', 'Xarajatlar smetasi')
      ];
    }
    return [
      t('calc.vip_i1', 'Standart AR to\'liq kompleksi'),
      t('calc.vip_i2', 'Konstruktiv (KJ) hujjatlar'),
      t('calc.vip_i3', 'Muhandislik (MJ) hujjatlari'),
      t('calc.vip_i4', 'Virtual Reality (VR) tur'),
      t('calc.vip_i5', 'Mualliflik nazorati xizmati'),
      t('calc.vip_i6', 'BIM model (Revit)')
    ];
  };

  return (
    <section className="py-20 relative bg-slate-50/70 border-b border-slate-100">
      <div className="app-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-slate-900" />
            <span>{t('calc.badge', 'Onlayn Kalkulyator')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900">
            {t('calc.title', 'Loyiha Narxi va Muddatini Hisoblash')}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {t('calc.subtitle', 'Bino turini, maydonini va loyihalash paketini tanlab, real vaqt rejimida taxminiy byudjetni hisoblang.')}
          </p>
        </div>

        {/* Calculator Card */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Controls Column */}
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-8">
            {/* Step 1: Object Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                1. {t('calc.objectType', 'Bino yoki Xizmat Turi')}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {objectOptions.map((obj) => (
                  <button
                    key={obj.id}
                    type="button"
                    onClick={() => setSelectedObjectId(obj.id)}
                    className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                      selectedObjectId === obj.id
                        ? 'border-slate-900 bg-slate-900 text-white shadow-md'
                        : 'border-slate-200 bg-slate-50 text-slate-800 hover:bg-slate-100'
                    }`}
                  >
                    <div className="text-xl mb-1">{obj.icon}</div>
                    <div className="text-xs font-bold line-clamp-1">{getObjectLabel(obj.id)}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Area Slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  2. {t('calc.area', 'Umumiy Maydoni (m²)')}
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="30"
                    max="5000"
                    value={areaM2}
                    onChange={(e) => setAreaM2(Math.max(20, Math.min(10000, Number(e.target.value) || 0)))}
                    className="w-24 px-3 py-1.5 rounded-xl border border-slate-300 font-mono font-bold text-slate-900 text-right text-sm focus:border-slate-900 outline-none"
                  />
                  <span className="text-xs font-bold text-slate-500">m²</span>
                </div>
              </div>

              <input
                type="range"
                min="50"
                max="2000"
                step="10"
                value={areaM2}
                onChange={(e) => setAreaM2(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
              />

              <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-1.5">
                <span>50 m²</span>
                <span>500 m²</span>
                <span>1,000 m²</span>
                <span>2,000+ m²</span>
              </div>
            </div>

            {/* Step 3: Design Package */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                3. {t('calc.package', 'Loyihalash Paketi')}
              </label>
              <div className="space-y-2.5">
                {packages.map((pkg) => (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => setSelectedPackageId(pkg.id)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                      selectedPackageId === pkg.id
                        ? 'border-slate-900 bg-slate-50 ring-2 ring-slate-900/10'
                        : 'border-slate-200 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-slate-900">{getPackageLabel(pkg.id)}</span>
                        {pkg.isPopular && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-900 text-white">
                            {t('calc.popular', 'Tavsiya etiladi')}
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-500 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{t('services.duration', 'Muddati:')} {getPackageDuration(pkg.id)}</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="font-heading font-black text-sm text-slate-900">
                        {Math.round(currentObject.basePricePerM2 * pkg.multiplier).toLocaleString()} UZS
                      </div>
                      <div className="text-[10px] text-slate-500">{t('services.perM2', '1 m² uchun')}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Estimation Summary Output Column */}
          <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-10 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-slate-400 font-mono text-xs uppercase font-bold border-b border-slate-800 pb-4">
                <Sparkles className="w-4 h-4 text-white" />
                <span>{t('calc.selectedParams', 'Hisob-Kitob Xulosasi')}</span>
              </div>

              {/* Price Details */}
              <div className="space-y-2">
                <div className="text-xs text-slate-400">
                  {getObjectLabel(currentObject.id)} • {areaM2} m² • {getPackageLabel(currentPackage.id)}
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
                  {totalCost.toLocaleString('uz-UZ')}{' '}
                  <span className="text-lg font-bold text-slate-400">UZS</span>
                </div>
                <div className="text-xs text-slate-400">
                  {t('services.pricePerM2', '1 m² narxi')}: <span className="text-white font-bold">{pricePerM2.toLocaleString()} UZS</span>
                </div>
              </div>

              {/* Delivery Duration */}
              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-1">
                <div className="text-xs text-slate-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-white" />
                  <span>{t('calc.duration', 'Taxminiy tayyor bo\'lish muddati:')}</span>
                </div>
                <div className="text-base font-bold text-white">
                  {getPackageDuration(currentPackage.id)}
                </div>
              </div>

              {/* Package Inclusions Checklist */}
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {t('calc.packageContent', 'Loyiha tarkibiga kiradi:')}
                </div>
                <div className="space-y-1.5">
                  {getPackageIncludes(currentPackage.id).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Submit Action */}
            <div className="space-y-3 pt-6 border-t border-slate-800">
              <button
                type="button"
                onClick={handleOrderCalculation}
                className="w-full py-4 px-6 rounded-2xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm shadow-xl transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>{t('calc.sendQuote', 'Konsultatsiya & Smeta Olish')}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{t('cta.callUs', 'Dastlabki muhandislik maslahati 100% bepul')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
