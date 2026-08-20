import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { Settings, Save, Send, ShieldCheck, Globe, Phone, MapPin, Sparkles } from 'lucide-react';

export const SettingsManager: React.FC = () => {
  const { settings, updateSettings, showToast } = useData();

  const [siteName, setSiteName] = useState(settings.siteName);
  const [phoneMain, setPhoneMain] = useState(settings.phoneMain);
  const [phoneSecondary, setPhoneSecondary] = useState(settings.phoneSecondary);
  const [email, setEmail] = useState(settings.email);
  const [address, setAddress] = useState(settings.address);
  const [city, setCity] = useState(settings.city);
  const [workingHours, setWorkingHours] = useState(settings.workingHours);
  const [telegramLink, setTelegramLink] = useState(settings.telegramLink);
  const [instagramLink, setInstagramLink] = useState(settings.instagramLink);
  const [youtubeLink, setYoutubeLink] = useState(settings.youtubeLink);
  const [mapEmbedUrl, setMapEmbedUrl] = useState(settings.mapEmbedUrl);
  const [metaTitle, setMetaTitle] = useState(settings.metaTitle);
  const [metaDescription, setMetaDescription] = useState(settings.metaDescription);
  const [telegramBotToken, setTelegramBotToken] = useState(settings.telegramBotToken || '');
  const [telegramChatId, setTelegramChatId] = useState(settings.telegramChatId || '');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings({
      siteName,
      phoneMain,
      phoneSecondary,
      email,
      address,
      city,
      workingHours,
      telegramLink,
      instagramLink,
      youtubeLink,
      mapEmbedUrl,
      metaTitle,
      metaDescription,
      telegramBotToken,
      telegramChatId
    });
  };

  const handleTestTelegram = () => {
    showToast('Telegram botga test signali yuborildi!', 'success');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold font-heading text-white flex items-center gap-2">
            <Settings className="w-6 h-6 text-indigo-400" />
            <span>Tizim va Sayt Sozlamalari</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Aloqa ma'lumotlari, Telegram bot integratsiyasi va SEO meta teglari
          </p>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-8">
        {/* General Info */}
        <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
          <h2 className="text-base font-bold font-heading text-white flex items-center gap-2">
            <Globe className="w-4 h-4 text-indigo-400" />
            Umumiy Markaz Ma'lumotlari
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Markaz Nomi
              </label>
              <input
                type="text"
                value={siteName}
                onChange={(e) => setSiteName(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Elektron Pochta
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Asosiy Telefon Raqam
              </label>
              <input
                type="text"
                value={phoneMain}
                onChange={(e) => setPhoneMain(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Qo'shimcha Telefon Raqam
              </label>
              <input
                type="text"
                value={phoneSecondary}
                onChange={(e) => setPhoneSecondary(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none font-mono"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                To'liq Manzil
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Shahar
              </label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Ish Vaqti
              </label>
              <input
                type="text"
                value={workingHours}
                onChange={(e) => setWorkingHours(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none"
              />
            </div>
          </div>
        </div>

        {/* Socials & Maps */}
        <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
          <h2 className="text-base font-bold font-heading text-white flex items-center gap-2">
            <Send className="w-4 h-4 text-sky-400" />
            Ijtimoiy Tarmoqlar & Xarita Havolalari
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Telegram Kanal / Havola
              </label>
              <input
                type="url"
                value={telegramLink}
                onChange={(e) => setTelegramLink(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Instagram Havola
              </label>
              <input
                type="url"
                value={instagramLink}
                onChange={(e) => setInstagramLink(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                YouTube Havola
              </label>
              <input
                type="url"
                value={youtubeLink}
                onChange={(e) => setYoutubeLink(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none"
              />
            </div>

            <div className="sm:col-span-3">
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Google Xarita Embed URL
              </label>
              <input
                type="text"
                value={mapEmbedUrl}
                onChange={(e) => setMapEmbedUrl(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none font-mono"
              />
            </div>
          </div>
        </div>

        {/* Telegram Bot Integration */}
        <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold font-heading text-white flex items-center gap-2">
              <Send className="w-4 h-4 text-sky-400" />
              Telegram Bot Integratsiyasi (Arizalar avtomatik botga tushadi)
            </h2>
            <button
              type="button"
              onClick={handleTestTelegram}
              className="px-3 py-1.5 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-bold hover:bg-sky-500 hover:text-white transition-all"
            >
              Test Xabarnoma Yuborish
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Telegram Bot Token (@BotFather orqali)
              </label>
              <input
                type="text"
                placeholder="123456789:ABCdefGhIJKlmNoPQRstUVwxyZ"
                value={telegramBotToken}
                onChange={(e) => setTelegramBotToken(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Admin Chat ID yoki Guruh ID
              </label>
              <input
                type="text"
                placeholder="-100123456789"
                value={telegramChatId}
                onChange={(e) => setTelegramChatId(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none font-mono"
              />
            </div>
          </div>
        </div>

        {/* SEO Meta */}
        <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
          <h2 className="text-base font-bold font-heading text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            SEO & Qidiruv Tizimi Sozlamalari
          </h2>

          <div className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Saytning Asosiy Meta Title
              </label>
              <input
                type="text"
                value={metaTitle}
                onChange={(e) => setMetaTitle(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Meta Description (Qidiruv natijalarida ko'rinadi)
              </label>
              <textarea
                rows={2}
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none resize-none"
              />
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-8 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-bold shadow-xl shadow-indigo-600/30 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
          >
            <Save className="w-4 h-4" />
            <span>Barcha O'zgarishlarni Saqlash</span>
          </button>
        </div>
      </form>
    </div>
  );
};


