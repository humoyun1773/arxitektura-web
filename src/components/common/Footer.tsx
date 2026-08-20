import React from 'react';
import { useData } from '../../context/DataContext';
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

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="app-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <button 
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 text-left group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/25">
                <span className="font-heading font-extrabold text-white text-lg">A</span>
              </div>
              <div>
                <div className="font-heading font-bold text-lg text-white">ARXITEKTURA ACADEMY</div>
                <p className="text-xs text-slate-400">Zamonaviy Kasblar O'quv Markazi</p>
              </div>
            </button>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Arxitektura, 3D vizualizatsiya, IT dasturlash va zamonaviy dizayn sohasida yuqori malakali mutaxassislarni tayyorlaydigan yetakchi ta'lim markazi.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-2 pt-2">
              {settings.telegramLink && (
                <a
                  href={settings.telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/40 hover:bg-slate-800/50 transition-all"
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
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-pink-400 hover:border-pink-500/40 hover:bg-slate-800/50 transition-all"
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
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-rose-400 hover:border-rose-500/40 hover:bg-slate-800/50 transition-all"
                  aria-label="YouTube"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
              )}
            </div>

          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-heading">
              Asosiy Sahifalar
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-indigo-400 transition-colors">
                  Bosh sahifa
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('courses')} className="hover:text-indigo-400 transition-colors">
                  Barcha kurslar
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('teachers')} className="hover:text-indigo-400 transition-colors">
                  O'qituvchilar tarkibi
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-indigo-400 transition-colors">
                  Markaz haqida & Filiallar
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="hover:text-indigo-400 transition-colors">
                  Foydali blog & yangiliklar
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-indigo-400 transition-colors">
                  Bog'lanish & Xarita
                </button>
              </li>
            </ul>
          </div>

          {/* Popular Courses */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-heading">
              Ommabop Kurslar
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {courses.slice(0, 5).map((c) => (
                <li key={c.id}>
                  <button 
                    onClick={() => onNavigate('course-detail', c.slug)}
                    className="hover:text-indigo-300 transition-colors text-left flex items-center gap-1 group"
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
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-heading">
              Aloqa Ma'lumotlari
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span>{settings.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
                <a href={`tel:${settings.phoneMain.replace(/\s+/g, '')}`} className="hover:text-white">
                  {settings.phoneMain}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <a href={`mailto:${settings.email}`} className="hover:text-white">
                  {settings.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span className="text-xs">{settings.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ARXITEKTURA ACADEMY. Barcha huquqlar himoyalangan.</p>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => onNavigate('admin')}
              className="text-slate-400 hover:text-indigo-400 flex items-center gap-1.5 transition-colors"
            >
              <ShieldCheck className="w-4 h-4 text-indigo-400" />
              <span>Admin Panelga Kirish</span>
            </button>
            <span className="flex items-center gap-1">
              O'zbekistonda <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 mx-0.5" /> bilan yaratilgan
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
