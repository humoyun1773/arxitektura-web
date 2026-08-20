import React, { useState, useEffect } from 'react';
import { useData } from '../../context/DataContext';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Phone, 
  Menu, 
  X, 
  Sparkles, 
  ChevronDown, 
  GraduationCap, 
  Layers, 
  Users, 
  Info, 
  BookOpen, 
  Mail, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string, param?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const { courses } = useData();
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { id: 'home', label: t('nav.home', 'Bosh sahifa'), icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'courses', label: t('nav.courses', 'Kurslar'), icon: <Layers className="w-4 h-4" />, hasDropdown: true },
    { id: 'teachers', label: t('nav.teachers', "O'qituvchilar"), icon: <Users className="w-4 h-4" /> },
    { id: 'about', label: t('nav.about', 'Biz haqimizda'), icon: <Info className="w-4 h-4" /> },
    { id: 'blog', label: t('nav.blog', 'Blog & Yangiliklar'), icon: <BookOpen className="w-4 h-4" /> },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/90 py-3 shadow-sm' 
            : 'bg-white/80 backdrop-blur-md border-b border-slate-100 py-4 sm:py-5'
        }`}
      >
        <div className="app-container">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo */}
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                onNavigate('home');
              }}
              className="flex items-center gap-2.5 sm:gap-3 text-left group focus:outline-none shrink-0"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                <span className="font-heading font-extrabold text-white text-lg tracking-wider">A</span>
              </div>
              <div>
                <div className="font-heading font-bold text-sm sm:text-base tracking-tight text-slate-900 flex items-center gap-1.5 whitespace-nowrap">
                  <span>{t('brand.title', 'AL-HAKIM AT-TERMEZIY')}</span>
                  <span className="text-[10px] sm:text-xs px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200 font-mono font-bold">{t('brand.badge', 'MARKAZ')}</span>
                </div>
                <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium tracking-wide whitespace-nowrap">{t('brand.slogan', 'Intizomni Sevuvchilar Uchun • Qarshi')}</p>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 shrink-0">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div 
                      key={link.id}
                      className="relative"
                      onMouseEnter={() => setIsCoursesDropdownOpen(true)}
                      onMouseLeave={() => setIsCoursesDropdownOpen(false)}
                    >
                      <button
                        onClick={() => onNavigate('courses')}
                        className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all whitespace-nowrap ${
                          currentPage === 'courses' 
                            ? 'text-indigo-600 bg-indigo-50 border border-indigo-200' 
                            : 'text-slate-700 hover:text-indigo-600 hover:bg-slate-50'
                        }`}
                      >
                        {link.label}
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isCoursesDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {/* Mega Dropdown */}
                      {isCoursesDropdownOpen && (
                        <div className="absolute top-full left-0 w-80 pt-2 animate-in fade-in slide-in-from-top-2 duration-200">
                          <div className="bg-white border border-slate-200 rounded-2xl p-3 shadow-2xl">
                            <div className="text-[11px] font-semibold text-slate-400 px-3 py-1.5 uppercase tracking-wider">
                              {t('nav.mainDirections', "Asosiy Yo'nalishlar")}
                            </div>
                            <div className="space-y-1">
                              {courses.slice(0, 5).map((course) => (
                                <button
                                  key={course.id}
                                  onClick={() => {
                                    setIsCoursesDropdownOpen(false);
                                    onNavigate('course-detail', course.slug);
                                  }}
                                  className="w-full text-left p-2.5 rounded-xl hover:bg-indigo-50/80 border border-transparent transition-all group flex items-start gap-2.5"
                                >
                                  <div className="w-2 h-2 rounded-full bg-indigo-600 mt-1.5 shrink-0 group-hover:scale-125 transition-transform"></div>
                                  <div>
                                    <div className="text-xs font-semibold text-slate-800 group-hover:text-indigo-600 line-clamp-1">
                                      {course.title}
                                    </div>
                                    <div className="text-[11px] text-slate-500">
                                      {course.durationMonths} {t('courses.months', 'oy')} • {course.level}
                                    </div>
                                  </div>
                                </button>
                              ))}
                            </div>
                            <div className="mt-2 pt-2 border-t border-slate-100">
                              <button
                                onClick={() => {
                                  setIsCoursesDropdownOpen(false);
                                  onNavigate('courses');
                                }}
                                className="w-full text-center py-1.5 text-xs text-indigo-600 hover:text-indigo-700 font-semibold flex items-center justify-center gap-1"
                              >
                                {t('nav.allCourses', "Barcha kurslarni ko'rish")} <ArrowRight className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <button
                    key={link.id}
                    onClick={() => onNavigate(link.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all whitespace-nowrap ${
                      currentPage === link.id 
                        ? 'text-indigo-600 bg-indigo-50 border border-indigo-200' 
                        : 'text-slate-700 hover:text-indigo-600 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            {/* Right Language Switcher (Desktop) */}
            <div className="hidden lg:flex items-center shrink-0">
              <div className="flex items-center bg-slate-100 border border-slate-200 rounded-xl p-1 text-xs font-bold">
                {(['UZ', 'RU', 'ENG'] as const).map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => setLanguage(lang)}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      language === lang
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200 transition-colors"
                aria-label="Menyu ochish"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Modal */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white flex flex-col justify-between animate-in fade-in duration-200">
          {/* Top Bar inside Menu */}
          <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-200 bg-white">
            <div className="flex items-center gap-2.5 text-left">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center shadow-md shadow-indigo-500/20">
                <span className="font-heading font-extrabold text-white text-base tracking-wider">A</span>
              </div>
              <div>
                <div className="font-heading font-bold text-sm text-slate-900 flex items-center gap-1.5">
                  <span>{t('brand.title', 'AL-HAKIM AT-TERMEZIY')}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200 font-mono font-bold">{t('brand.badge', 'MARKAZ')}</span>
                </div>
                <p className="text-[10px] text-slate-500 font-medium tracking-wide">{t('brand.slogan', 'Intizomni Sevuvchilar Uchun • Qarshi')}</p>
              </div>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200 transition-colors"
              aria-label="Yopish"
            >
              <X className="w-5 h-5 text-slate-800" />
            </button>
          </div>

          {/* Scrollable Navigation & Controls */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 bg-slate-50/50">
            {/* Language Selector */}
            <div className="bg-white border border-slate-200 rounded-2xl p-3.5 shadow-sm">
              <div className="text-xs font-semibold text-slate-500 mb-2 px-1">
                {t('nav.selectLanguage', 'Tilni tanlang / Select Language:')}
              </div>
              <div className="grid grid-cols-3 gap-2">
                {(['UZ', 'RU', 'ENG'] as const).map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => setLanguage(lang)}
                    className={`py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center ${
                      language === lang
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            {/* Menu Links */}
            <div className="space-y-1.5">
              <div className="text-[11px] font-semibold text-slate-500 uppercase px-2 pb-1 tracking-wider">
                {t('nav.sections', "Bo'limlar")}
              </div>
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onNavigate(link.id);
                  }}
                  className={`w-full flex items-center gap-3.5 px-4 py-3.5 rounded-2xl text-base font-semibold transition-all ${
                    currentPage === link.id
                      ? 'bg-indigo-50 text-indigo-700 border border-indigo-200 shadow-sm'
                      : 'text-slate-800 bg-white hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <span className="text-indigo-600">{link.icon}</span>
                  <span>{link.label}</span>
                </button>
              ))}
            </div>

            {/* Markaz Info Box */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs space-y-2 text-slate-600 shadow-sm">
              <div className="flex items-center gap-2 text-indigo-700 font-bold">
                <Phone className="w-3.5 h-3.5" />
                <span>+998 91 951 73 35</span>
              </div>
              <p>📍 Qarshi shahar, Al-Hakim At-Termeziy o'quv markazi</p>
              <p className="text-[11px] text-slate-500">28 oylik ta'lim kombinatsiyalari • 100% Ish bilan ta'minlash</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};



