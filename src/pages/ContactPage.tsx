import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  Building
} from 'lucide-react';
import { TelegramIcon, InstagramIcon, YoutubeIcon } from '../components/common/SocialIcons';

export const ContactPage: React.FC = () => {
  const { settings, submitLead, courses } = useData();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+998 ');
  const [courseId, setCourseId] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setIsSubmitting(true);
    const selected = courses.find((c) => c.id === courseId);

    await submitLead({
      fullName: name.trim(),
      phone: phone.trim(),
      courseId: selected?.id,
      courseTitle: selected?.title || 'Aloqa sahifasi xabari',
      source: `Aloqa sahifasi xabari: ${message}`
    });

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setName('');
      setPhone('+998 ');
      setMessage('');
      setCourseId('');
    }, 3500);
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-white text-slate-900">
      <div className="app-container space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900">
            Savollaringiz Bormi? <span className="gradient-text">Yordam Beramiz</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Ofisimizga tashrif buyuring yoki telefon orqali bepul ma'lumot oling.
          </p>
        </div>

        {/* Contact info + Form grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-6">
              <h2 className="text-xl font-bold font-heading text-slate-900">Aloqa Markazi</h2>

              <div className="space-y-4 text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Manzil:</div>
                    <div className="font-semibold text-slate-900">{settings.address}</div>
                    <div className="text-xs text-slate-500">{settings.city}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Telefonlar:</div>
                    <a href={`tel:${settings.phoneMain.replace(/\s+/g, '')}`} className="font-bold text-slate-900 hover:text-indigo-600 block font-mono">
                      {settings.phoneMain}
                    </a>
                    {settings.phoneSecondary && (
                      <a href={`tel:${settings.phoneSecondary.replace(/\s+/g, '')}`} className="font-bold text-slate-500 hover:text-indigo-600 block font-mono text-xs">
                        {settings.phoneSecondary}
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Elektron pochta:</div>
                    <a href={`mailto:${settings.email}`} className="font-semibold text-slate-900 hover:text-indigo-600">
                      {settings.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Ish vaqti:</div>
                    <div className="font-semibold text-slate-900 text-xs">{settings.workingHours}</div>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="pt-6 border-t border-slate-100 space-y-3">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Ijtimoiy Tarmoqlarimiz
                </div>
                <div className="flex items-center gap-3">
                  {settings.telegramLink && (
                    <a
                      href={settings.telegramLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-sky-50 border border-sky-200 text-sky-700 hover:bg-sky-500 hover:text-white transition-all text-xs font-bold flex items-center gap-1.5"
                    >
                      <TelegramIcon className="w-3.5 h-3.5" />
                      <span>Telegram</span>
                    </a>
                  )}
                  {settings.instagramLink && (
                    <a
                      href={settings.instagramLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-pink-50 border border-pink-200 text-pink-700 hover:bg-pink-500 hover:text-white transition-all text-xs font-bold flex items-center gap-1.5"
                    >
                      <InstagramIcon className="w-3.5 h-3.5" />
                      <span>Instagram</span>
                    </a>
                  )}
                  {settings.youtubeLink && (
                    <a
                      href={settings.youtubeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 hover:bg-rose-500 hover:text-white transition-all text-xs font-bold flex items-center gap-1.5"
                    >
                      <YoutubeIcon className="w-3.5 h-3.5" />
                      <span>YouTube</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xl space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 mb-2">
                  Xabar yoki Savol Qoldiring
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Formani to'ldiring, menejerimiz 15 daqiqa ichida siz bilan bog'lanadi.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h3 className="text-lg font-bold text-slate-900">Xabaringiz Qabul Qilindi!</h3>
                  <p className="text-xs text-slate-600">Tez orada mutaxassisimiz siz bilan bog'lanadi.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Ismingiz *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Masalan: Sardor"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-indigo-600 focus:bg-white rounded-xl px-4 py-3 text-xs text-slate-900 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Telefon raqamingiz *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+998 90 123 45 67"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-indigo-600 focus:bg-white rounded-xl px-4 py-3 text-xs text-slate-900 outline-none font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Qiziqtirgan kursingiz
                    </label>
                    <select
                      value={courseId}
                      onChange={(e) => setCourseId(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-indigo-600 focus:bg-white rounded-xl px-4 py-3 text-xs text-slate-900 outline-none"
                    >
                      <option value="">Umumiy savol / Kurs aniq emas</option>
                      {courses.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Xabaringiz / Savolingiz
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Savolingizni batafsil yozing..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-indigo-600 focus:bg-white rounded-xl p-4 text-xs text-slate-900 outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold text-sm shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>Xabarni Yuborish</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Google Map Box */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold font-heading text-slate-900 flex items-center gap-2">
            <Building className="w-5 h-5 text-indigo-600" />
            Xaritadagi Joylashuvimiz
          </h2>
          <div className="w-full h-96 rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
            <iframe
              src={settings.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Markaz joylashuvi xaritasi"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
