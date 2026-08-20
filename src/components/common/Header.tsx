import React, { useState, useEffect } from 'react';
import { useData } from '../../context/DataContext';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Phone, 
  Menu, 
  X, 
  ChevronDown, 
  Home, 
  Building2, 
  Compass, 
  Users, 
  Calculator, 
  BookOpen, 
  MessageSquare,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string, param?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const { openLeadModal, settings } = useData();
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);

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
    { id: 'home', label: t('nav.home', 'Bosh sahifa'), icon: <Home className="w-4 h-4" /> },
    { id: 'about', label: t('nav.about', 'Biz haqimizda'), icon: <Compass className="w-4 h-4" /> },
    { 
      id: 'projects', 
      label: t('nav.projects', 'Loyihalarimiz'), 
      icon: <Building2 className="w-4 h-4" />, 
      hasDropdown: true 
    },
    { id: 'services', label: t('nav.services', 'Xizmatlar'), icon: <Sparkles className="w-4 h-4" /> },
    { id: 'architects', label: t('nav.architects', 'Arxitektorlar'), icon: <Users className="w-4 h-4" /> },
    { id: 'calculator', label: t('nav.calculator', 'Kalkulyator'), icon: <Calculator className="w-4 h-4" /> },
    { id: 'blog', label: t('nav.blog', 'Blog'), icon: <BookOpen className="w-4 h-4" /> },
    { id: 'contact', label: t('nav.contact', "Bog'lanish"), icon: <MessageSquare className="w-4 h-4" /> },
  ];

  const projectCategories = [
    { name: 'Kottejlar & Villalar', desc: 'Zamonaviy individual xususiy uylar' },
    { name: 'Interyer Dizayn', desc: 'Hashamatli xonadon va pentxauslar' },
    { name: 'Tijoriy Obyektlar', desc: 'Biznes markazlar va restoranlar' },
    { name: 'Landshaft & Fasad', desc: 'Hovli obodonlashtirish va fasadlar' }
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/90 py-3 shadow-sm' 
            : 'bg-white/85 backdrop-blur-md border-b border-slate-100 py-4 sm:py-4.5'
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
              className="flex items-center gap-3 text-left group focus:outline-none shrink-0"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-slate-900 flex items-center justify-center shadow-md shadow-slate-900/10 group-hover:scale-105 transition-transform">
                <span className="font-heading font-black text-white text-lg tracking-widest">A</span>
              </div>
              <div>
                <div className="font-heading font-extrabold text-base sm:text-lg tracking-tight text-slate-900 flex items-center gap-1.5 whitespace-nowrap">
                  <span>{t('brand.title', 'ARXITEKTURA')}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 font-mono font-bold">{t('brand.badge', 'BYURO')}</span>
                </div>
                <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium tracking-wide whitespace-nowrap">{t('brand.slogan', 'Mukammal Fazoviy Yechimlar')}</p>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1 shrink-0">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div 
                      key={link.id}
                      className="relative"
                      onMouseEnter={() => setIsProjectsDropdownOpen(true)}
                      onMouseLeave={() => setIsProjectsDropdownOpen(false)}
                    >
                      <button
                        onClick={() => onNavigate(link.id)}
                        className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-colors ${
                          currentPage === link.id || currentPage === 'project-detail'
                            ? 'text-slate-900 bg-slate-100'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                        }`}
                      >
                        {link.label}
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isProjectsDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {/* Dropdown Menu */}
                      {isProjectsDropdownOpen && (
                        <div className="absolute top-full left-0 w-72 pt-2 animate-in fade-in slide-in-from-top-2 duration-150">
                          <div className="bg-white rounded-2xl border border-slate-200 p-2 shadow-xl">
                            <div className="px-3 py-2 border-b border-slate-100">
                              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Loyiha Yo'nalishlari</span>
                            </div>
                            <div className="py-1 space-y-0.5">
                              {projectCategories.map((cat, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => {
                                    setIsProjectsDropdownOpen(false);
                                    onNavigate('projects');
                                  }}
                                  className="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-50 transition-colors group flex items-center justify-between"
                                >
                                  <div>
                                    <div className="text-xs font-semibold text-slate-800 group-hover:text-slate-900">{cat.name}</div>
                                    <div className="text-[10px] text-slate-500">{cat.desc}</div>
                                  </div>
                                  <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </button>
                              ))}
                            </div>
                            <div className="p-2 pt-1 border-t border-slate-100">
                              <button
                                onClick={() => {
                                  setIsProjectsDropdownOpen(false);
                                  onNavigate('projects');
                                }}
                                className="w-full py-1.5 text-center text-xs font-bold text-slate-900 hover:text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors"
                              >
                                Barcha loyihalarni ko'rish →
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
                    className={`px-3 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-colors ${
                      currentPage === link.id
                        ? 'text-slate-900 bg-slate-100'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            {/* Right actions: Language & CTA */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Language Switcher */}
              <div className="flex items-center p-1 rounded-xl bg-slate-100 border border-slate-200">
                {(['UZ', 'RU', 'ENG'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-2 sm:px-2.5 py-1 text-[11px] font-bold rounded-lg transition-all ${
                      language === lang
                        ? 'bg-white text-slate-900 shadow-sm border border-slate-200/50'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>

              {/* CTA Order Button */}
              <button
                onClick={() => openLeadModal()}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold shadow-md shadow-slate-900/10 hover:shadow-lg transition-all"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t('nav.orderProject', 'Loyiha Buyurtma Qilish')}</span>
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="xl:hidden p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200 transition-colors"
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
        <div className="xl:hidden fixed inset-0 z-50 bg-white flex flex-col justify-between animate-in fade-in duration-200">
          {/* Top Bar inside Menu */}
          <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-200 bg-white">
            <div className="flex items-center gap-3 text-left">
              <div className="w-9 h-9 rounded-xl bg-slate-900 flex items-center justify-center text-white font-heading font-black">
                A
              </div>
              <div>
                <div className="font-heading font-bold text-sm text-slate-900 flex items-center gap-1.5">
                  <span>{t('brand.title', 'ARXITEKTURA')}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 font-mono font-bold">{t('brand.badge', 'BYURO')}</span>
                </div>
                <p className="text-[10px] text-slate-500 font-medium">{t('brand.slogan', 'Mukammal Fazoviy Yechimlar')}</p>
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

          {/* Scrollable Navigation */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 bg-slate-50/50">
            {/* Language Selector */}
            <div className="bg-white border border-slate-200 rounded-2xl p-3.5 shadow-sm">
              <div className="text-xs font-semibold text-slate-500 mb-2 px-1">
                {t('nav.selectLanguage', 'Tilni tanlang:')}
              </div>
              <div className="grid grid-cols-3 gap-2">
                {(['UZ', 'RU', 'ENG'] as const).map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => setLanguage(lang)}
                    className={`py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center ${
                      language === lang
                        ? 'bg-slate-900 text-white shadow-md'
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
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onNavigate(link.id);
                  }}
                  className={`w-full flex items-center gap-3.5 px-4 py-3.5 rounded-2xl text-sm font-semibold transition-all ${
                    currentPage === link.id
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'text-slate-800 bg-white hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <span className={currentPage === link.id ? 'text-white' : 'text-slate-600'}>{link.icon}</span>
                  <span>{link.label}</span>
                </button>
              ))}
            </div>

            {/* CTA in mobile */}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                openLeadModal();
              }}
              className="w-full py-3.5 rounded-2xl bg-slate-900 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t('nav.orderProject', 'Loyiha Buyurtma Qilish')}</span>
            </button>

            {/* Studio Info Box */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs space-y-2 text-slate-600 shadow-sm">
              <div className="flex items-center gap-2 text-slate-900 font-bold">
                <Phone className="w-3.5 h-3.5" />
                <span>{settings.phoneMain}</span>
              </div>
              <p>📍 {settings.address}</p>
              <p className="text-[11px] text-slate-500">{settings.slogan}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
