import React from 'react';
import { useData } from '../../context/DataContext';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Heart,
  ArrowUpRight
} from 'lucide-react';
import { TelegramIcon, InstagramIcon, YoutubeIcon } from './SocialIcons';

interface FooterProps {
  onNavigate: (page: string, param?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { settings, courses } = useData();
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-50 border-t border-slate-200/90 pt-16 pb-12 relative overflow-hidden text-slate-600">
      <div className="app-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <button 
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 text-left group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center shadow-md shadow-indigo-500/20">
                <span className="font-heading font-extrabold text-white text-lg">A</span>
              </div>
              <div>
                <div className="font-heading font-bold text-lg text-slate-900">{t('brand.title', 'AL-HAKIM AT-TERMEZIY')}</div>
                <p className="text-xs text-indigo-600 font-semibold">{t('brand.slogan', 'Intizomni Sevuvchilar Uchun • Qarshi')}</p>
              </div>
            </button>

            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              {t('footer.desc', "28 oylik ta'lim kombinatsiyalariga mos 4 ta tilga muvofiq tafakkur. Kursni muvaffaqiyatli tugatgan talabalar to'liq ish bilan ta'minlanadi.")}
            </p>

            {/* Socials */}
            <div className="flex items-center gap-2 pt-2">
              {settings.telegramLink && (
                <a
                  href={settings.telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:text-sky-500 hover:border-sky-300 hover:bg-slate-50 transition-all"
                  aria-label="Telegram"
                >
                  <TelegramIcon className="w-4 h-4" />
                </a>
              )}
              {settings.instagramLink && (
                <a
                  href={settings.instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:text-pink-600 hover:border-pink-300 hover:bg-slate-50 transition-all"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              )}
              {settings.youtubeLink && (
                <a
                  href={settings.youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:text-rose-600 hover:border-rose-300 hover:bg-slate-50 transition-all"
                  aria-label="YouTube"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider font-heading">
              {t('footer.quickLinks', 'Tezkor Havolalar')}
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-indigo-600 transition-colors">
                  {t('nav.home', 'Bosh sahifa')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-indigo-600 transition-colors">
                  {t('nav.about', 'Biz haqimizda')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('courses')} className="hover:text-indigo-600 transition-colors">
                  {t('nav.courses', 'Kurslar')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('teachers')} className="hover:text-indigo-600 transition-colors">
                  {t('nav.teachers', "O'qituvchilar")}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="hover:text-indigo-600 transition-colors">
                  {t('nav.blog', 'Blog & Yangiliklar')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-indigo-600 transition-colors">
                  {t('nav.contact', 'Bog\'lanish')}
                </button>
              </li>
            </ul>
          </div>

          {/* Popular Courses */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider font-heading">
              {t('footer.programs', 'Dasturlar')}
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              {courses.slice(0, 5).map((c) => (
                <li key={c.id}>
                  <button 
                    onClick={() => onNavigate('course-detail', c.slug)}
                    className="hover:text-indigo-600 transition-colors text-left flex items-center gap-1 group"
                  >
                    <span className="line-clamp-1">{c.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider font-heading">
              {t('footer.contact', "Bog'lanish")}
            </h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <span>{settings.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-indigo-600 shrink-0" />
                <a href={`tel:${settings.phoneMain.replace(/\s+/g, '')}`} className="hover:text-indigo-600 font-mono font-semibold">
                  {settings.phoneMain}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-indigo-600 shrink-0" />
                <a href={`mailto:${settings.email}`} className="hover:text-indigo-600">
                  {settings.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <span className="text-xs">{settings.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {t('brand.title', 'AL-HAKIM AT-TERMEZIY')}. {t('footer.rights', 'Barcha huquqlar himoyalangan.')}</p>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => onNavigate('admin')}
              className="text-slate-600 hover:text-indigo-600 flex items-center gap-1.5 transition-colors font-medium"
            >
              <ShieldCheck className="w-4 h-4 text-indigo-600" />
              <span>Admin Panel</span>
            </button>
            <span className="flex items-center gap-1">
              Qarshi, O'zbekiston <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 mx-0.5" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
