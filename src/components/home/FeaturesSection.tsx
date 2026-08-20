import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Compass, 
  Layers, 
  FileText, 
  Eye, 
  Cpu, 
  Coins
} from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const { t } = useLanguage();

  const workflowSteps = [
    {
      step: '01',
      icon: <Compass className="w-6 h-6 text-slate-900" />,
      title: t('features.f1_title', '1. Konseptsiya & Texnik Topshiriq'),
      desc: t('features.f1_desc', 'Mijoz istaklari, yer uchastkasi o\'lchamlari va funksional zonalarni tahlil qilish.')
    },
    {
      step: '02',
      icon: <Layers className="w-6 h-6 text-slate-900" />,
      title: t('features.f2_title', '2. 3D Vizualizatsiya & Planirovka'),
      desc: t('features.f2_desc', 'Fotorealistik 3D fasad va ichki xonalar renderlari hamda qulay planirovka.')
    },
    {
      step: '03',
      icon: <FileText className="w-6 h-6 text-slate-900" />,
      title: t('features.f3_title', '3. Ishchi Loyiha (AR + KJ)'),
      desc: t('features.f3_desc', 'Quruvchilar uchun barcha konstruktiv, me\'moriy va muhandislik chizmalar to\'plami.')
    },
    {
      step: '04',
      icon: <Eye className="w-6 h-6 text-slate-900" />,
      title: t('features.f4_title', '4. Mualliflik Nazorati'),
      desc: t('features.f4_desc', 'Qurilish jarayonining chizmalarga to\'liq mos ravishda amalga oshirilishini nazorat qilish.')
    },
    {
      step: '05',
      icon: <Cpu className="w-6 h-6 text-slate-900" />,
      title: 'Smart Home & Energotexnologiyalar',
      desc: 'Quyosh panellari, aqlli iqlim va yoritish tizimlarini binoga professional integratsiya qilish.'
    },
    {
      step: '06',
      icon: <Coins className="w-6 h-6 text-slate-900" />,
      title: 'Aniq Smeta & Byudjet Tejamkorligi',
      desc: 'Qurilish materiallari xarajatini 25% gacha tejovchi aniq muhandislik hisoblari va spetsifikatsiyalar.'
    }
  ];

  return (
    <section className="py-20 relative bg-slate-50/60 border-b border-slate-100">
      <div className="app-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">
            {t('features.badge', 'Ish Jarayoni')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900">
            {t('features.title', 'Loyiha Qanday Yaratiladi?')}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {t('features.subtitle', 'Xomaki fikrdan to to\'liq qurilish chizmalarigacha bo\'lgan 4 bosqichli professional tizim.')}
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflowSteps.map((feat, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-400 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center group-hover:scale-110 transition-all">
                  {feat.icon}
                </div>
                <span className="font-heading font-black text-2xl text-slate-300 group-hover:text-slate-900 transition-colors">
                  {feat.step}
                </span>
              </div>

              <h3 className="font-heading font-bold text-lg text-slate-900 mb-2.5">
                {feat.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

