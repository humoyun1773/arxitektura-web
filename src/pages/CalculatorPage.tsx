import React, { useState, useMemo } from "react";
import { useData } from "../context/DataContext";
import { Calculator, Clock, ArrowRight, CheckCircle2, Info } from "lucide-react";

interface CalculatorPageProps {
  onNavigate: (page: string, param?: string) => void;
}

const OBJECT_TYPES = [
  { id: "villa", label: "Villa / Yashash uyi", multiplier: 1.0, emoji: "u1F3E1" },
  { id: "apartment", label: "Ko'p qavatli turar-joy", multiplier: 1.15, emoji: "u1F3E2" },
  { id: "office", label: "Ofis binosi", multiplier: 1.2, emoji: "u1F3D7" },
  { id: "commercial", label: "Savdo markazi", multiplier: 1.25, emoji: "u1F3EC" },
  { id: "restaurant", label: "Restoran / Mehmonxona", multiplier: 1.3, emoji: "u1F374" },
  { id: "industrial", label: "Sanoat / Ombor", multiplier: 0.9, emoji: "u1F3ED" },
  { id: "landscape", label: "Landshaft dizayn", multiplier: 0.8, emoji: "u1F333" },
  { id: "interior", label: "Faqat Interyer", multiplier: 0.75, emoji: "u1F6CB" },
];

const PACKAGES = [
  { id: "eskiz", name: "Eskiz Loyiha", basePrice: 5000, duration: "2-3 hafta", isPopular: false, includes: ["Bosh reja va fasad eskizlari", "3D vizualizatsiya (5 ta kadr)", "Xona hajm rejasi", "Materiallar palitrasi"] },
  { id: "standard", name: "Standart AR", basePrice: 15000, duration: "4-6 hafta", isPopular: true, includes: ["Eskiz loyiha to'liq kompleksi", "Arxitektura (AR) hujjatlari", "Muhandislik tizimlari sxemasi", "3D vizualizatsiya (10+ kadr)", "Xarajatlar smetasi"] },
  { id: "vip", name: "VIP AR + KJ", basePrice: 35000, duration: "8-12 hafta", isPopular: false, includes: ["Standart AR to'liq kompleksi", "Konstruktiv (KJ) hujjatlar", "Muhandislik (MJ) hujjatlari", "Virtual Reality (VR) tur", "Mualliflik nazorati xizmati", "BIM model (Revit)"] },
];

export const CalculatorPage: React.FC<CalculatorPageProps> = ({ onNavigate }) => {
  const { openLeadModal } = useData();
  const [objectType, setObjectType] = useState(OBJECT_TYPES[0]);
  const [area, setArea] = useState(250);
  const [selectedPackage, setSelectedPackage] = useState(PACKAGES[1]);

  const calc = useMemo(() => {
    const base = selectedPackage.basePrice + area * objectType.multiplier * 10;
    return { min: Math.round(base * 0.9), max: Math.round(base * 1.1) };
  }, [objectType, area, selectedPackage]);

  return (
    <div className="pt-28 pb-20 min-h-screen bg-slate-50/50">
      <div className="app-container space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Loyiha Kalkulyatori</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900">Loyiha Narxini Hisoblang</h1>
          <p className="text-sm sm:text-base text-slate-600">Ob'ekt turi, maydoni va loyihalash paketini tanlang — taxminiy narx va muddatni ko'ring.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-6">

            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center">1</span>
                <h2 className="font-heading font-bold text-lg text-slate-900">Ob'ekt Turini Tanlang</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {OBJECT_TYPES.map(ot => (
                  <button key={ot.id} onClick={() => setObjectType(ot)} className={`p-3 rounded-2xl border text-center transition-all cursor-pointer space-y-1 ${objectType.id === ot.id ? "bg-slate-900 text-white border-slate-900 shadow-lg" : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-400"}`}>
                    <div className="text-2xl">{String.fromCodePoint(parseInt(ot.emoji.replace("u", ""), 16))}</div>
                    <div className="text-[11px] font-semibold leading-tight">{ot.label}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center">2</span>
                <h2 className="font-heading font-bold text-lg text-slate-900">Umumiy Maydonni Kiriting</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Maydon:</span>
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
                <h2 className="font-heading font-bold text-lg text-slate-900">Loyihalash Paketini Tanlang</h2>
              </div>
              <div className="space-y-3">
                {PACKAGES.map(pkg => (
                  <button key={pkg.id} onClick={() => setSelectedPackage(pkg)} className={`w-full p-4 rounded-2xl border text-left transition-all cursor-pointer ${selectedPackage.id === pkg.id ? "bg-slate-900 text-white border-slate-900" : "bg-slate-50 text-slate-800 border-slate-200 hover:border-slate-400"}`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-heading font-bold text-sm">{pkg.name}</span>
                        {pkg.isPopular && <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${selectedPackage.id === pkg.id ? "bg-white/20 text-white" : "bg-amber-100 text-amber-800"}`}>Mashhur</span>}
                      </div>
                      <div className={`flex items-center gap-1 text-xs ${selectedPackage.id === pkg.id ? "text-slate-300" : "text-slate-500"}`}>
                        <Clock className="w-3.5 h-3.5" /><span>{pkg.duration}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      {pkg.includes.slice(0, 3).map((inc, idx) => (
                        <span key={idx} className={`text-[11px] flex items-center gap-1 ${selectedPackage.id === pkg.id ? "text-slate-300" : "text-slate-500"}`}>
                          <CheckCircle2 className="w-3 h-3" /> {inc}
                        </span>
                      ))}
                      {pkg.includes.length > 3 && <span className="text-[11px] text-slate-400">+{pkg.includes.length - 3} ta yana</span>}
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
                  <div className="text-xs text-slate-400 uppercase tracking-wide font-semibold">Taxminiy Loyiha Narxi</div>
                  <div className="font-heading font-black text-3xl sm:text-4xl">{calc.min.toLocaleString("uz-UZ")} –</div>
                  <div className="font-heading font-black text-3xl sm:text-4xl text-slate-200">{calc.max.toLocaleString("uz-UZ")}<span className="text-base font-normal text-slate-400 ml-2">UZS</span></div>
                </div>
                <div className="border-t border-slate-800 pt-5 space-y-3">
                  <div className="text-xs text-slate-400 uppercase tracking-wide font-semibold">Tanlangan Parametrlar</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-slate-400">Ob'ekt turi:</span><span className="text-white font-medium">{objectType.label}</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">Maydon:</span><span className="text-white font-medium">{area.toLocaleString()} m²</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">Paket:</span><span className="text-white font-medium">{selectedPackage.name}</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">Muddat:</span><span className="text-emerald-400 font-medium">{selectedPackage.duration}</span></div>
                  </div>
                </div>
                <div className="flex items-start gap-2 bg-white/5 rounded-2xl p-3 text-xs text-slate-400">
                  <Info className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <span>Ushbu hisob taxminiy. Aniq narx texnik topshiriq asosida individual aniqlanadi.</span>
                </div>
                <button onClick={() => openLeadModal()} className="w-full py-4 bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm rounded-2xl shadow-lg flex items-center justify-center gap-2 transition-colors cursor-pointer">
                  <span>Bepul Konsultatsiya Olish</span><ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-3">
                <div className="font-heading font-bold text-sm text-slate-900">"{selectedPackage.name}" Tarkibi:</div>
                <div className="space-y-2">
                  {selectedPackage.includes.map((inc, i) => (
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
