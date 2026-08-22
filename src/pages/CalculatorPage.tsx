import React, { useState, useMemo } from "react";
import { useData } from "../context/DataContext";
import { useLanguage } from "../context/LanguageContext";
import { Calculator, Clock, ArrowRight, CheckCircle2, Info } from "lucide-react";

interface CalculatorPageProps {
  onNavigate: (page: string, param?: string) => void;
}

const OBJECT_TYPES = [
  { id: "villa", multiplier: 1.0, emoji: "1F3E1" },
  { id: "apartment", multiplier: 1.15, emoji: "1F3E2" },
  { id: "office", multiplier: 1.2, emoji: "1F3D7" },
  { id: "commercial", multiplier: 1.25, emoji: "1F3EC" },
  { id: "restaurant", multiplier: 1.3, emoji: "1F374" },
  { id: "industrial", multiplier: 0.9, emoji: "1F3ED" },
  { id: "landscape", multiplier: 0.8, emoji: "1F333" },
  { id: "interior", multiplier: 0.75, emoji: "1F6CB" },
];

const PACKAGES = [
  { id: "eskiz", basePrice: 5000, durationKey: "2-3 hafta", isPopular: false },
  { id: "standard", basePrice: 15000, durationKey: "4-6 hafta", isPopular: true },
  { id: "vip", basePrice: 35000, durationKey: "8-12 hafta", isPopular: false },
];

export const CalculatorPage: React.FC<CalculatorPageProps> = ({ onNavigate }) => {
  const { openLeadModal } = useData();
  const { t } = useLanguage();
  const [objectType, setObjectType] = useState(OBJECT_TYPES[0]);
  const [area, setArea] = useState(250);
  const [selectedPackage, setSelectedPackage] = useState(PACKAGES[1]);

  const calc = useMemo(() => {
    const base = selectedPackage.basePrice + area * objectType.multiplier * 10;
    return { min: Math.round(base * 0.9), max: Math.round(base * 1.1) };
  }, [objectType, area, selectedPackage]);

  // Translate package features
  const getPackageIncludes = (id: string) => {
    if (id === "eskiz") {
      return [
        t('calc.eskiz_i1', 'Bosh reja va fasad eskizlari'),
        t('calc.eskiz_i2', '3D vizualizatsiya (5 ta kadr)'),
        t('calc.eskiz_i3', 'Xona hajm rejasi'),
        t('calc.eskiz_i4', 'Materiallar palitrasi')
      ];
    }
    if (id === "standard") {
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

  const getObjectTypeLabel = (id: string) => {
    switch (id) {
      case "villa": return t('calc.ot_villa', 'Villa / Yashash uyi');
      case "apartment": return t('calc.ot_apartment', 'Ko\'p qavatli turar-joy');
      case "office": return t('calc.ot_office', 'Ofis binosi');
      case "commercial": return t('calc.ot_commercial', 'Savdo markazi');
      case "restaurant": return t('calc.ot_restaurant', 'Restoran / Mehmonxona');
      case "industrial": return t('calc.ot_industrial', 'Sanoat / Ombor');
      case "landscape": return t('calc.ot_landscape', 'Landshaft dizayn');
      case "interior": return t('calc.ot_interior', 'Faqat Interyer');
      default: return '';
    }
  };

  const getPackageName = (id: string) => {
    switch (id) {
      case "eskiz": return t('calc.pkg_eskiz', 'Eskiz Loyiha');
      case "standard": return t('calc.pkg_standard', 'Standart AR');
      case "vip": return t('calc.pkg_vip', 'VIP AR + KJ');
      default: return '';
    }
  };

  const getPackageDuration = (id: string) => {
    switch (id) {
      case "eskiz": return t('calc.dur_eskiz', '2-3 hafta');
      case "standard": return t('calc.dur_standard', '4-6 hafta');
      case "vip": return t('calc.dur_vip', '8-12 hafta');
      default: return '';
    }
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-slate-50/50 animate-page-entrance">
      <div className="app-container space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>{t('calc.badge', 'Onlayn Hisoblagich')}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900">{t('calc.title', 'Loyiha Narxini Hisoblash')}</h1>
          <p className="text-sm sm:text-base text-slate-600">{t('calc.subtitle', 'Obyekt turi va maydonini kiriting — bir zumda taxminiy narx va muddatni hisoblab oling.')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-6">

            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center">1</span>
                <h2 className="font-heading font-bold text-lg text-slate-900">{t('calc.step1', 'Ob\'ekt Turini Tanlang')}</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {OBJECT_TYPES.map(ot => (
                  <button key={ot.id} onClick={() => setObjectType(ot)} className={`p-3 rounded-2xl border text-center transition-all cursor-pointer space-y-1 ${objectType.id === ot.id ? "bg-slate-900 text-white border-slate-900 shadow-lg" : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-400"}`}>
                    <div className="text-2xl">{String.fromCodePoint(parseInt(ot.emoji, 16))}</div>
                    <div className="text-[11px] font-semibold leading-tight">{getObjectTypeLabel(ot.id)}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center">2</span>
                <h2 className="font-heading font-bold text-lg text-slate-900">{t('calc.step2', 'Umumiy Maydonni Kiriting')}</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">{t('calc.area', 'Maydoni (m²)')}:</span>
                  <div className="flex items-center gap-2">
                    <input type="number" min={30} max={10000} value={area} onChange={e => setArea(Math.max(30, Math.min(10000, Number(e.target.value))))} className="w-24 px-3 py-1.5 rounded-xl border border-slate-300 text-center font-heading font-bold text-lg focus:outline-none focus:ring-2 focus:ring-slate-400" />
                    <span className="text-slate-500 font-medium text-sm">m²</span>
                  </div>
                </div>
                <input type="range" min={30} max={5000} step={10} value={area} onChange={e => setArea(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-full appearance-none cursor-pointer accent-slate-900" />
                <div className="flex justify-between text-xs text-slate-400"><span>30 m²</span><span>5 000 m²</span></div>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center">3</span>
                <h2 className="font-heading font-bold text-lg text-slate-900">{t('calc.step3', 'Loyihalash Paketini Tanlang')}</h2>
              </div>
              <div className="space-y-3">
                {PACKAGES.map(pkg => (
                  <button key={pkg.id} onClick={() => setSelectedPackage(pkg)} className={`w-full p-4 rounded-2xl border text-left transition-all cursor-pointer ${selectedPackage.id === pkg.id ? "bg-slate-900 text-white border-slate-900" : "bg-slate-50 text-slate-800 border-slate-200 hover:border-slate-400"}`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-heading font-bold text-sm">{getPackageName(pkg.id)}</span>
                        {pkg.isPopular && <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${selectedPackage.id === pkg.id ? "bg-white/20 text-white" : "bg-amber-100 text-amber-800"}`}>{t('calc.popular', 'Mashhur')}</span>}
                      </div>
                      <div className={`flex items-center gap-1 text-xs ${selectedPackage.id === pkg.id ? "text-slate-300" : "text-slate-500"}`}>
                        <Clock className="w-3.5 h-3.5" /><span>{getPackageDuration(pkg.id)}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      {getPackageIncludes(pkg.id).slice(0, 3).map((inc, idx) => (
                        <span key={idx} className={`text-[11px] flex items-center gap-1 ${selectedPackage.id === pkg.id ? "text-slate-300" : "text-slate-500"}`}>
                          <CheckCircle2 className="w-3 h-3" /> {inc}
                        </span>
                      ))}
                      {getPackageIncludes(pkg.id).length > 3 && <span className="text-[11px] text-slate-400">+{getPackageIncludes(pkg.id).length - 3} {t('calc.moreItems', 'ta yana')}</span>}
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-28 space-y-4">
              <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
                <div className="space-y-1">
                  <div className="text-xs text-slate-400 uppercase tracking-wide font-semibold">{t('calc.estimateTitle', 'Taxminiy Loyiha Narxi')}</div>
                  <div className="font-heading font-black text-3xl sm:text-4xl">{calc.min.toLocaleString("uz-UZ")} –</div>
                  <div className="font-heading font-black text-3xl sm:text-4xl text-slate-200">{calc.max.toLocaleString("uz-UZ")}<span className="text-base font-normal text-slate-400 ml-2">UZS</span></div>
                </div>
                <div className="border-t border-slate-800 pt-5 space-y-3">
                  <div className="text-xs text-slate-400 uppercase tracking-wide font-semibold">{t('calc.selectedParams', 'Tanlangan Parametrlar')}</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-slate-400">{t('calc.objectType', 'Obyekt Turi')}:</span><span className="text-white font-medium">{getObjectTypeLabel(objectType.id)}</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">{t('calc.area', 'Maydoni (m²)')}:</span><span className="text-white font-medium">{area.toLocaleString()} m²</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">{t('calc.package', 'Xizmat Paketi')}:</span><span className="text-white font-medium">{getPackageName(selectedPackage.id)}</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">{t('calc.duration', 'Muddati')}:</span><span className="text-emerald-400 font-medium">{getPackageDuration(selectedPackage.id)}</span></div>
                  </div>
                </div>
                <div className="flex items-start gap-2 bg-white/5 rounded-2xl p-3 text-xs text-slate-400">
                  <Info className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <span>{t('calc.warningInfo', 'Ushbu hisob taxminiy. Aniq narx texnik topshiriq asosida individual aniqlanadi.')}</span>
                </div>
                <button onClick={() => openLeadModal()} className="w-full py-4 bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm rounded-2xl shadow-lg flex items-center justify-center gap-2 transition-colors cursor-pointer">
                  <span>{t('cta.btn', 'Bepul Konsultatsiya Olish')}</span><ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-3">
                <div className="font-heading font-bold text-sm text-slate-900">{t('calc.packageContent', 'Tarkibi')}:</div>
                <div className="space-y-2">
                  {getPackageIncludes(selectedPackage.id).map((inc, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-slate-700">{inc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
