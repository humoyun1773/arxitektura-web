import React, { useState } from "react";
import { useData } from "../context/DataContext";
import { useLanguage } from "../context/LanguageContext";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Building2 } from "lucide-react";

export const ContactPage: React.FC = () => {
  const { settings, submitLead, services } = useData();
  const { t } = useLanguage();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998 ");
  const [serviceType, setServiceType] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    setIsSubmitting(true);
    await submitLead({
      fullName: name.trim(),
      phone: phone.trim(),
      serviceType: serviceType || t('contact.serviceSelect', "Aloqa xabari"),
      notes: message,
      source: "Aloqa sahifasi"
    });
    setIsSubmitting(false);
    setIsSubmitted(true);
    setName(""); setPhone("+998 "); setServiceType(""); setMessage("");
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactCards = [
    { icon: Phone, label: t('nav.contact', 'Telefon'), value: settings.phoneMain, link: `tel:${settings.phoneMain?.replace(/\s/g,"")}`, color: "text-emerald-600", bg: "bg-emerald-50" },
    { icon: Mail, label: "Email", value: settings.email, link: `mailto:${settings.email}`, color: "text-blue-600", bg: "bg-blue-50" },
    { icon: MapPin, label: t('projects.location', 'Manzil'), value: settings.address, link: "#", color: "text-rose-600", bg: "bg-rose-50" },
    { icon: Clock, label: t('services.duration', 'Ish vaqti'), value: "09:00 – 18:00", link: "#", color: "text-violet-600", bg: "bg-violet-50" },
  ];

  const whyChooseUsItems = [
    t('contact.why_1', "12+ yillik professional tajriba"),
    t('contact.why_2', "140+ muvaffaqiyatli yakunlangan loyiha"),
    t('contact.why_3', "BIM texnologiyasi asosida loyihalash"),
    t('contact.why_4', "O'zDSt me'yoriy bazasiga muvofiq hujjatlar"),
    t('contact.why_5', "Mualliflik nazorati xizmati mavjud"),
    t('contact.why_6', "Shaffof narxlash va muddatlarni bajarish kafolati"),
  ];

  return (
    <div className="pt-28 pb-20 min-h-screen bg-white text-slate-900 animate-page-entrance">
      <div className="app-container space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>{t('contact.badge', 'Bog\'lanish')}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900">
            {t('contact.title', 'Loyihangizni Muhokama Qilaylik')}
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            {t('contact.subtitle', 'Qurilish loyihangizni muhokama qilish yoki bepul konsultatsiya olish uchun biz bilan bog\'laning.')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactCards.map((card, i) => (
            <a key={i} href={card.link} className="block p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-3 group">
              <div className={`w-10 h-10 rounded-2xl ${card.bg} flex items-center justify-center`}>
                <card.icon className={`w-5 h-5 ${card.color}`} />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wide text-slate-400 mb-1">{card.label}</div>
                <div className="text-sm font-semibold text-slate-900 group-hover:text-slate-700 transition-colors">{card.value || "—"}</div>
              </div>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 sm:p-10 space-y-6">
              <div>
                <h2 className="text-2xl font-bold font-heading text-slate-900 mb-1">{t('contact.formTitle', 'Murojaat Yuborish')}</h2>
                <p className="text-xs text-slate-500">{t('contact.formSubtitle', 'Formani to\'ldiring — 24 soat ichida javob beramiz.')}</p>
              </div>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 space-y-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-slate-900">{t('contact.successTitle', 'Murojaatingiz Qabul Qilindi!')}</h3>
                    <p className="text-xs text-slate-500 mt-1">{t('contact.successSubtitle', 'Tez orada mutaxassisimiz siz bilan bog\'lanadi.')}</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">{t('contact.nameLabel', 'Ism-familiya *')}</label>
                      <input
                        type="text"
                        required
                        placeholder={t('contact.namePlaceholder', 'Jasur Karimov')}
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-50 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:bg-white"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">{t('contact.phoneLabel', 'Telefon *')}</label>
                      <input
                        type="tel"
                        required
                        placeholder="+998 90 123 45 67"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-50 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">{t('contact.serviceLabel', 'Xizmat turi')}</label>
                    <select
                      value={serviceType}
                      onChange={e => setServiceType(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-50 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:bg-white"
                    >
                      <option value="">{t('contact.serviceSelect', '— Xizmat turini tanlang —')}</option>
                      {services.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                      <option value="Boshqa">Boshqa</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">{t('contact.notesLabel', 'Qo\'shimcha ma\'lumot')}</label>
                    <textarea
                      rows={4}
                      placeholder={t('contact.notesPlaceholder', 'Loyihangiz haqida qisqacha yozing...')}
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-50 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !name.trim()}
                    className="w-full py-4 bg-slate-900 hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm rounded-2xl shadow-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    {isSubmitting ? (
                      <><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" /><span>Yuborilmoqda...</span></>
                    ) : (
                      <><Send className="w-4 h-4" /><span>{t('contact.submitBtn', 'Murojaat Yuborish')}</span></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-8 space-y-6">
              <h3 className="font-heading font-bold text-xl">{t('contact.whyUsTitle', 'Nima Uchun Biz?')}</h3>
              <div className="space-y-4">
                {whyChooseUsItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-3">
              <h3 className="font-heading font-bold text-base text-slate-900">{t('contact.socialTitle', 'Ijtimoiy Tarmoqlar')}</h3>
              <div className="flex flex-wrap gap-3">
                {settings.telegramLink && (
                  <a href={settings.telegramLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 rounded-xl bg-[#0088CC]/10 text-[#0088CC] font-bold text-xs hover:bg-[#0088CC]/20 transition-colors">
                    Telegram
                  </a>
                )}
                {settings.instagramLink && (
                  <a href={settings.instagramLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 rounded-xl bg-pink-50 text-pink-600 font-bold text-xs hover:bg-pink-100 transition-colors">
                    Instagram
                  </a>
                )}
                {settings.youtubeLink && (
                  <a href={settings.youtubeLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 rounded-xl bg-red-50 text-red-600 font-bold text-xs hover:bg-red-100 transition-colors">
                    YouTube
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
