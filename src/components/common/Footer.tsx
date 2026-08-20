import React from 'react';
import { useData } from '../../context/DataContext';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { TelegramIcon, InstagramIcon, YoutubeIcon } from './SocialIcons';

interface FooterProps {
  onNavigate: (page: string, param?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { settings, services, projects } = useData();
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
              <div className="w-10 h-10 rounded-2xl bg-slate-900 flex items-center justify-center text-white font-heading font-black text-lg">
                A
              </div>
              <div>
                <div className="font-heading font-extrabold text-lg text-slate-900 flex items-center gap-1.5">
                  <span>{t('brand.title', 'ARXITEKTURA')}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-200 text-slate-700 font-mono font-bold">{t('brand.badge', 'BYURO')}</span>
                </div>
                <p className="text-xs text-slate-500 font-semibold">{t('brand.slogan', 'Mukammal Fazoviy Yechimlar')}</p>
              </div>
            </button>

            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              {t('footer.desc', 'Individual kottejlar, hashamatli villalar, tijoriy binolar va eksklyuziv interyerlarni noldan kalitgacha professional loyihalash byurosi.')}
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
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-heading">
              {t('footer.quickLinks', 'Tezkor Havolalar')}
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-slate-900 transition-colors">
                  {t('nav.home', 'Bosh sahifa')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-slate-900 transition-colors">
                  {t('nav.about', 'Biz haqimizda')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('projects')} className="hover:text-slate-900 transition-colors">
                  {t('nav.projects', 'Loyihalarimiz')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-slate-900 transition-colors">
                  {t('nav.services', 'Xizmatlar')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('architects')} className="hover:text-slate-900 transition-colors">
                  {t('nav.architects', 'Arxitektorlar')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('calculator')} className="hover:text-slate-900 transition-colors">
                  {t('nav.calculator', 'Kalkulyator')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="hover:text-slate-900 transition-colors">
                  {t('nav.blog', 'Blog')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-slate-900 transition-colors">
                  {t('nav.contact', 'Bog\'lanish')}
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-heading">
              {t('footer.services', 'Xizmatlarimiz')}
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              {services.map((s) => (
                <li key={s.id}>
                  <button 
                    onClick={() => onNavigate('services')}
                    className="hover:text-slate-900 transition-colors text-left flex items-center gap-1 group"
                  >
                    <span className="line-clamp-1">{s.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-heading">
              {t('footer.contact', "Bog'lanish")}
            </h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-slate-900 shrink-0 mt-0.5" />
                <span>{settings.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-slate-900 shrink-0" />
                <a href={`tel:${settings.phoneMain.replace(/\s+/g, '')}`} className="hover:text-slate-900 font-mono font-semibold">
                  {settings.phoneMain}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-slate-900 shrink-0" />
                <a href={`mailto:${settings.email}`} className="hover:text-slate-900">
                  {settings.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-slate-900 shrink-0 mt-0.5" />
                <span className="text-xs">{settings.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {t('brand.title', 'ARXITEKTURA')}. Barcha huquqlar himoyalangan.</p>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => onNavigate('admin')}
              className="text-slate-600 hover:text-slate-900 flex items-center gap-1.5 transition-colors font-semibold"
            >
              <ShieldCheck className="w-4 h-4 text-slate-700" />
              <span>Admin Panel</span>
            </button>
            <span className="text-slate-400 font-medium">
              Toshkent, O'zbekiston
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

