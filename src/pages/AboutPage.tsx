import React from 'react';
import { useData } from '../context/DataContext';
import { Sparkles, Award, Target, ShieldCheck, MapPin, Users, Heart, CheckCircle2, Phone } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string, param?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const { settings, openLeadModal } = useData();

  const branches = [
    {
      name: 'Yunusobod Bosh Filiali',
      address: "Amir Temur shoh ko'chasi, 107-B bino (Metro: Shahriston)",
      phone: "+998 71 200 88 44",
      rooms: "12 ta zamonaviy kompyuter sinfi, Coworking zonasi",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: 'Chilonzor Filiali',
      address: "Bunyodkor shoh ko'chasi, 42-uy (Metro: Mirzo Ulug'bek)",
      phone: "+998 71 200 88 45",
      rooms: "8 ta interaktiv dars xonasi, 3D Render laboratoriyasi",
      img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const values = [
    {
      title: "Amaliyotga Ustuvorlik",
      desc: "Bizda quruq nazariya emas, faqat real bozorda talab qilinadigan bilim va ko'nikmalar o'rgatiladi."
    },
    {
      title: "Shaxsiy Yondashuv",
      desc: "Kichik guruhlar (10-12 kishi) tufayli har bir talabaning o'zlashtirishi alohida nazorat qilinadi."
    },
    {
      title: "Natijaga Kafolat",
      desc: "Darslarni o'zlashtira olmagan talabalarga keyingi oqimda bepul qayta o'qish imkoniyati beriladi."
    },
    {
      title: "Karyera Hamrohligi",
      desc: "Bitiruvchilarimizni rezyume tayyorlashdan tortib ish taklifini (Offer) olguncha qo'llab-quvvatlaymiz."
    }
  ];

  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Hero Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Biz Haqimizda
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            Kelajak Me'morlari va <span className="gradient-text">Dasturchilar Akademiyasi</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            "ARXITEKTURA ACADEMY" — 2016-yildan buyon zamonaviy arxitektura, 3D vizualizatsiya, IT dasturlash va dizayn sohasida xalqaro standartlarga mos kadrlar tayyorlab kelmoqda.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold font-heading text-white">Bizning Missiyamiz</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              O'zbekiston yoshlariga jahon standartlariga mos zamonaviy kasblarni sifatli va qulay o'rgatish orqali ularni xalqaro darajadagi yuqori daromadli mutaxassisga aylantirish.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-pink-600/20 border border-pink-500/30 flex items-center justify-center text-pink-400">
              <Award className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold font-heading text-white">Bizning Maqsadimiz</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              2030-yilgacha 50,000 dan ortiq yoshlarni raqamli kasblar bilan ta'minlash hamda mamlakatimizni mintaqaviy IT va Arxitektura xabiga aylantirishga hissa qo'shish.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold font-heading text-white">Bizning Asosiy Qadriyatlarimiz</h2>
            <p className="text-sm text-slate-400">Biz nima uchun sifat va halollikni birinchi o'ringa qo'yamiz?</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800/80 space-y-3">
                <div className="w-8 h-8 rounded-xl bg-indigo-500/10 text-indigo-400 font-bold flex items-center justify-center text-sm">
                  0{i + 1}
                </div>
                <h3 className="font-heading font-bold text-base text-white">{v.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Branches */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold font-heading text-white">Bizning Filiallarimiz</h2>
            <p className="text-sm text-slate-400">Shaharning qulay nuqtalarida joylashgan zamonaviy o'quv markazlarimiz</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {branches.map((b, i) => (
              <div key={i} className="rounded-3xl bg-slate-900/60 border border-slate-800 overflow-hidden flex flex-col justify-between">
                <img src={b.img} alt={b.name} className="w-full aspect-video object-cover" />
                <div className="p-6 space-y-4">
                  <h3 className="font-heading font-bold text-lg text-white">{b.name}</h3>
                  <div className="space-y-2 text-xs text-slate-300">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{b.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                      <a href={`tel:${b.phone.replace(/\s+/g, '')}`} className="hover:text-white font-mono">
                        {b.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0" />
                      <span>{b.rooms}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => openLeadModal()}
                    className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition-colors"
                  >
                    Ushbu Filialda O'qishga Yozilish
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
