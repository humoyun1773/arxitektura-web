import React from 'react';
import { 
  Laptop, 
  Target, 
  Award, 
  Compass, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp, 
  Headphones 
} from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Target className="w-6 h-6 text-indigo-400" />,
      title: "100% Real Amaliyot",
      desc: "Quruq nazariya emas, dastlabki haftalardan boshlab real binolar va dasturiy ta'minotlar ustida ishlaysiz."
    },
    {
      icon: <Laptop className="w-6 h-6 text-purple-400" />,
      title: "Zamonaviy Kompyuter Parki",
      desc: "3Ds Max va murakkab renderlar uchun kuchli RTX video kartali kompyuterlar bilan ta'minlangan qulay xonalar."
    },
    {
      icon: <Award className="w-6 h-6 text-amber-400" />,
      title: "Xalqaro Diplom & Sertifikat",
      desc: "Autodesk va IT standartlariga mos rasmiy QR-kodli sertifikat orqali nufuzli kompaniyalarda tan olinish."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
      title: "Karyera Markazi Ko'magi",
      desc: "Rezyume tayyorlash, texnik intervyulardan o'tish va yetakchi hamkor kompaniyalarga ishga tavsiya qilish."
    },
    {
      icon: <Compass className="w-6 h-6 text-sky-400" />,
      title: "Shaxsiy Mentorlik Tizimi",
      desc: "Darsdan tashqari vaqtlarda ham murabbiylar va assistentlar tomonidan uyga vazifalar tekshirilib, yordam beriladi."
    },
    {
      icon: <Headphones className="w-6 h-6 text-pink-400" />,
      title: "Coworking & Doimiy Muhit",
      desc: "Talabalarimiz uchun 24/7 ochiq bo'lgan erkin muloqot va o'qish zonasi, bepul internet va qahva."
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="app-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Nega Bizni Tanlashadi?
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            Kelajakdagi Muvaffaqiyatingiz Uchun <span className="gradient-text">Barcha Sharoitlar</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Biz shunchaki dars bermaymiz, balki sizni mehnat bozorida yuqori baholanadigan yetuk mutaxassis qilib yetishtiramiz.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800/80 hover:border-indigo-500/30 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-indigo-500/5 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700/80 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-indigo-500/40 transition-all">
                {feat.icon}
              </div>
              <h3 className="font-heading font-bold text-lg text-white mb-2.5 group-hover:text-indigo-300 transition-colors">
                {feat.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
