import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Globe2, 
  Briefcase, 
  Award, 
  ShieldCheck, 
  Sparkles, 
  TrendingUp, 
  CheckCircle2 
} from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Globe2 className="w-6 h-6 text-indigo-400" />,
      title: t('features.f1_title', '28 Oylik 4 Til Dasturi'),
      desc: t('features.f1_desc', 'Dunyo tajribasida sinalgan eng samarali 4 ta xalqaro til integratsiyasi.')
    },
    {
      icon: <Briefcase className="w-6 h-6 text-emerald-400" />,
      title: t('features.f2_title', '100% Ish Kafolati'),
      desc: t('features.f2_desc', 'Kombinatsiyalarni muvaffaqiyatli tamomlagan barcha talabalar ish bilan ta\'minlanadi.')
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-purple-400" />,
      title: t('features.f3_title', 'Kuchli Intizom & Nazorat'),
      desc: t('features.f3_desc', 'Kunlik vazifalar tahlili, reyting tizimi va uzluksiz o\'qituvchilar nazorati.')
    },
    {
      icon: <Award className="w-6 h-6 text-amber-400" />,
      title: t('features.f4_title', 'Xalqaro Sertifikatlar'),
      desc: t('features.f4_desc', 'IELTS, Goethe, HSK, TOPIK va JLPT xalqaro imtihonlariga to\'liq tayyorgarlik.')
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-sky-400" />,
      title: t('hero.resultGuarantee', 'Natija Kafolati'),
      desc: t('hero.internationalCert', 'Xalqaro standartdagi sertifikat va 4 ta tilga muvofiq tafakkur.')
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-pink-400" />,
      title: t('hero.feature1', '100% Amaliy Loyihalar'),
      desc: t('hero.subtitle1', "28 oylik ta'lim kombinatsiyalariga mos 4 ta tilga muvofiq tafakkurga ega bo'ling.")
    }
  ];

  return (
    <section className="py-20 relative bg-slate-50/70 border-y border-slate-200/70">
      <div className="app-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900">
            {t('features.title', "Noyob Metodika va Qat'iy Intizom")}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {t('features.subtitle', "Har bir talabaning individual salohiyatini ochish va xalqaro miqyosda raqobatbardosh kadr qilib yetishtirish bizning asosiy maqsadimizdir.")}
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all duration-300 hover:-translate-y-1.5 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-indigo-50/90 border border-indigo-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
                {feat.icon}
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900 mb-2.5 group-hover:text-indigo-600 transition-colors">
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
