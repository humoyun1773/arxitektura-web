import React, { useState, useEffect } from 'react';
import { useData } from '../../context/DataContext';
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
  const { courses, openLeadModal } = useData();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<'UZ' | 'RU' | 'ENG'>('UZ');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: currentLang === 'UZ' ? 'Bosh sahifa' : currentLang === 'RU' ? 'Главная' : 'Home', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'courses', label: currentLang === 'UZ' ? 'Kurslar' : currentLang === 'RU' ? 'Курсы' : 'Courses', icon: <Layers className="w-4 h-4" />, hasDropdown: true },
    { id: 'teachers', label: currentLang === 'UZ' ? "O'qituvchilar" : currentLang === 'RU' ? 'Преподаватели' : 'Mentors', icon: <Users className="w-4 h-4" /> },
    { id: 'about', label: currentLang === 'UZ' ? 'Biz haqimizda' : currentLang === 'RU' ? 'О нас' : 'About Us', icon: <Info className="w-4 h-4" /> },
    { id: 'blog', label: currentLang === 'UZ' ? 'Blog & Yangiliklar' : currentLang === 'RU' ? 'Блог' : 'Blog', icon: <BookOpen className="w-4 h-4" /> },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/80 py-3 shadow-xl shadow-black/30' 
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2.5 sm:gap-3 text-left group focus:outline-none shrink-0"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform">
              <span className="font-heading font-extrabold text-white text-lg tracking-wider">A</span>
            </div>
            <div>
              <div className="font-heading font-bold text-sm sm:text-base tracking-tight text-white flex items-center gap-1.5 whitespace-nowrap">
                <span>ARXITEKTURA</span>
                <span className="text-[10px] sm:text-xs px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 font-mono">ACADEMY</span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-400 font-medium tracking-wide whitespace-nowrap">Zamonaviy Kasblar Markazi</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-3 shrink-0">
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
                      className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold transition-all whitespace-nowrap ${
                        currentPage === 'courses' 
                          ? 'text-indigo-400 bg-indigo-500/10 border border-indigo-500/20' 
                          : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                      }`}
                    >
                      {link.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isCoursesDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Mega Dropdown */}
                    {isCoursesDropdownOpen && (
                      <div className="absolute top-full left-0 w-80 pt-2 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="bg-slate-900/95 border border-slate-800 rounded-2xl p-3 shadow-2xl backdrop-blur-2xl">
                          <div className="text-[11px] font-semibold text-slate-400 px-3 py-1.5 uppercase tracking-wider">
                            Asosiy Yo'nalishlar
                          </div>
                          <div className="space-y-1">
                            {courses.slice(0, 5).map((course) => (
                              <button
                                key={course.id}
                                onClick={() => {
                                  setIsCoursesDropdownOpen(false);
                                  onNavigate('course-detail', course.slug);
                                }}
                                className="w-full text-left p-2.5 rounded-xl hover:bg-indigo-600/10 hover:border-indigo-500/20 border border-transparent transition-all group flex items-start gap-2.5"
                              >
                                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-1.5 shrink-0 group-hover:scale-120 transition-transform"></div>
                                <div>
                                  <div className="text-xs font-semibold text-slate-200 group-hover:text-indigo-300 line-clamp-1">
                                    {course.title}
                                  </div>
                                  <div className="text-[11px] text-slate-500">
                                    {course.durationMonths} oy • {course.level}
                                  </div>
                                </div>
                              </button>
                            ))}
                          </div>
                          <div className="mt-2 pt-2 border-t border-slate-800">
                            <button
                              onClick={() => {
                                setIsCoursesDropdownOpen(false);
                                onNavigate('courses');
                              }}
                              className="w-full text-center py-1.5 text-xs text-indigo-400 hover:text-indigo-300 font-semibold flex items-center justify-center gap-1"
                            >
                              Barcha kurslarni ko'rish <ArrowRight className="w-3 h-3" />
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
                  className={`px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold transition-all whitespace-nowrap ${
                    currentPage === link.id 
                      ? 'text-indigo-400 bg-indigo-500/10 border border-indigo-500/20' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Language Switcher */}
          <div className="hidden sm:flex items-center shrink-0">
            <div className="flex items-center bg-slate-900/90 border border-slate-800 rounded-xl p-1 text-xs font-bold shadow-inner">
              {(['UZ', 'RU', 'ENG'] as const).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setCurrentLang(lang)}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    currentLang === lang
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Language switch */}
            <div className="flex items-center bg-slate-900/90 border border-slate-800 rounded-lg p-0.5 text-[10px] font-bold">
              {(['UZ', 'RU', 'ENG'] as const).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setCurrentLang(lang)}
                  className={`px-2 py-1 rounded transition-all ${
                    currentLang === lang
                      ? 'bg-indigo-600 text-white'
                      : 'text-slate-400'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Menyu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>


      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bottom-0 bg-slate-950/98 backdrop-blur-2xl border-t border-slate-800 p-6 overflow-y-auto animate-in slide-in-from-top-4 duration-300 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="text-xs font-semibold text-slate-500 uppercase px-3 mb-2 tracking-wider">
              Bo'limlar
            </div>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onNavigate(link.id);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                  currentPage === link.id
                    ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30'
                    : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                <span className="text-indigo-400">{link.icon}</span>
                <span>{link.label}</span>
              </button>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800/80 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openLeadModal();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-pink-600 text-white text-xs sm:text-sm font-bold shadow-lg shadow-indigo-600/30"
              >
                Konsultatsiya
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onNavigate('admin');
                }}
                className="w-full py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-4 h-4 text-indigo-400" />
                Admin Panel
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};



