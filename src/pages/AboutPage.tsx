import React from "react";
import { useData } from "../context/DataContext";
import { useLanguage } from "../context/LanguageContext";
import { Award, Target, ShieldCheck, CheckCircle2, Building2, Lightbulb, Eye, Users } from "lucide-react";

interface AboutPageProps {
  onNavigate: (page: string, param?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const { openLeadModal } = useData();
  const { t } = useLanguage();

  const milestones = [
    { year: "2012", event: t('about.milestone_2012', "Byuro tashkil etildi. Birinchi villa loyihasi Toshkent viloyatida yakunlandi.") },
    { year: "2015", event: t('about.milestone_2015', "BIM texnologiyasi joriy etildi. Revit va ArchiCAD sertifikat olindi.") },
    { year: "2017", event: t('about.milestone_2017', "50-loyiha va undan ortiq loyiha tugallandi. Buxoro va Samarqandda kommertsiya binolari qurildi.") },
    { year: "2019", event: t('about.milestone_2019', "Milliy me'morchilik mukofoti finaliga ko'tarildi. 120,000+ m² dizayn qilindi.") },
    { year: "2021", event: t('about.milestone_2021', "Xalqaro hamkorlik: Dubay va Istanbul bilan qo'shma loyiha boshlandi.") },
    { year: "2024", event: t('about.milestone_2024', "140+ loyiha portfeli. 380,000+ m² dizayn. 12+ yillik tajriba.") },
  ];

  const values = [
    { icon: Lightbulb, title: t('about.val1_title', "Konseptual Ijod"), desc: t('about.val1_desc', "Har bir loyiha buyurtmachining orzusi va joy o'ziga xususiyatidan kelib chiqib noyob konsept yaratiladi.") },
    { icon: ShieldCheck, title: t('about.val2_title', "Texnik Aniqlik"), desc: t('about.val2_desc', "AR va KJ loyihalash hujjatlari O'zDSt me'yoriy bazasiga to'liq mos tuziladi.") },
    { icon: Eye, title: t('about.val3_title', "Mualliflik Nazorati"), desc: t('about.val3_desc', "Qurilish jarayonida loyiha muallifi doimiy texnik nazorat olib boradi.") },
    { icon: Users, title: t('about.val4_title', "Jamoa Ruhi"), desc: t('about.val4_desc', "Arxitektor, konstruktor, muhandis va dizayner birgalikda yagona jamoa sifatida ishlaydi.") },
  ];

  const licenses = [
    t('about.lic1', "O'zbekiston Respublikasi Arxitektura Davlat Qo'mitasi litsenziyasi"),
    t('about.lic2', "ISO 9001:2015 Sifat Menejmenti Sertifikati"),
    t('about.lic3', "Autodesk AEC Excellence mukofoti"),
    t('about.lic4', "Revit BIM 360 Platinum Partner"),
    t('about.lic5', "LEED Green Building assotsiatsiyasi a'zosi"),
  ];

  return (
    <div className="pt-28 pb-20 min-h-screen bg-white text-slate-900">
      <div className="app-container space-y-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              <span>{t('about.badge', 'Biz Haqimizda')}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 leading-tight">
              {t('about.title', 'Professional Arxitektura va Interyer Byurosi')}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t('about.desc', '"ARXITEKTURA" — 2012-yildan buyon O\'zbekistonda turar-joy va jamoat binolarini professional loyihalash xizmatini ko\'rsatib kelayotgan byuro. Jamoamiz 20+ nafar sertifikatlangan arxitektor va muhandisdan iborat.')}
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => openLeadModal()} className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-2xl shadow-lg transition-colors cursor-pointer">
                {t('about.ctaTalk', 'Loyiha Muzokarasi')}
              </button>
              <button onClick={() => onNavigate("projects")} className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-sm rounded-2xl transition-colors cursor-pointer">
                {t('about.ctaPortfolio', 'Portfelni Ko\'rish')}
              </button>
            </div>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" alt="Byuro ofisi" className="w-full rounded-3xl object-cover aspect-[4/3] shadow-xl" />
            <div className="absolute -bottom-6 -left-4 bg-white border border-slate-200 rounded-2xl shadow-xl p-5">
              <div className="font-heading font-black text-3xl text-slate-900">140+</div>
              <div className="text-xs text-slate-500 font-medium">{t('about.statProjects', 'Yakunlangan Loyiha')}</div>
            </div>
            <div className="absolute -top-4 -right-4 bg-slate-900 text-white rounded-2xl shadow-xl p-5">
              <div className="font-heading font-black text-3xl">12+</div>
              <div className="text-xs text-slate-300 font-medium">{t('about.statExperience', 'Yillik Tajriba')}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center"><Target className="w-6 h-6 text-white" /></div>
            <h2 className="text-2xl font-bold font-heading">{t('about.mission', 'Bizning Missiyamiz')}</h2>
            <p className="text-sm text-slate-300 leading-relaxed">{t('about.missionDesc', 'Har bir buyurtmachi uchun nafaqat chiroyli, balki qulay, xavfsiz va iqtisodiy jihatdan samarali binolar loyihasini yaratish.')}</p>
          </div>
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center"><Award className="w-6 h-6 text-slate-900" /></div>
            <h2 className="text-2xl font-bold font-heading text-slate-900">{t('about.goal', 'Bizning Maqsadimiz')}</h2>
            <p className="text-sm text-slate-600 leading-relaxed">{t('about.goalDesc', 'O\'rta Osiyo mintaqasida eng ishonchli professional arxitektura byurosi sifatida tan olinish.')}</p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold font-heading text-slate-900">{t('about.valuesTitle', 'Bizning Qadriyatlarimiz')}</h2>
            <p className="text-sm text-slate-600">{t('about.valuesSubtitle', 'Har bir loyihada ushbu tamoyillar bizni boshqaradi')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
                  <v.icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-base text-slate-900">{v.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold font-heading text-slate-900">{t('about.historyTitle', 'Byuro Tarixi')}</h2>
            <p className="text-sm text-slate-600">{t('about.historySubtitle', '12 yillik yo\'lda muhim bosqichlar')}</p>
          </div>
          <div className="space-y-4">
            {milestones.map((m, i) => (
              <div key={i} className="flex items-start gap-6 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="font-heading font-black text-2xl text-slate-900 w-16 shrink-0">{m.year}</div>
                <p className="text-sm text-slate-600 leading-relaxed pt-1">{m.event}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold font-heading">{t('about.licensesTitle', 'Sertifikatlar va Litsenziyalar')}</h2>
            <p className="text-sm text-slate-400">{t('about.licensesSubtitle', 'Faoliyatimiz davlatning me\'yoriy hujjatlari asosida amalga oshiriladi')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {licenses.map((lic, i) => (
              <div key={i} className="flex items-start gap-3 text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-slate-200">{lic}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button onClick={() => openLeadModal()} className="px-8 py-3.5 bg-white text-slate-900 hover:bg-slate-100 font-bold text-sm rounded-2xl transition-colors shadow-lg cursor-pointer">
              {t('about.ctaWork', 'Biz bilan Ishlash')}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
