import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useData } from '../../context/DataContext';
import { Dashboard } from './Dashboard';
import { LeadsManager } from './LeadsManager';
import { CoursesManager } from './CoursesManager';
import { TeachersManager } from './TeachersManager';
import { StudentsManager } from './StudentsManager';
import { BlogManager } from './BlogManager';
import { ReviewsManager } from './ReviewsManager';
import { SettingsManager } from './SettingsManager';
import { 
  LayoutDashboard, 
  Users, 
  Layers, 
  UserCheck, 
  Award, 
  BookOpen, 
  Quote, 
  Settings, 
  LogOut, 
  ExternalLink, 
  Menu, 
  X, 
  ShieldCheck,
  Bell
} from 'lucide-react';

interface AdminLayoutProps {
  onBackToSite: () => void;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ onBackToSite }) => {
  const { user, logout, hasRole } = useAuth();
  const { leads, reviews } = useData();

  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const pendingLeadsCount = leads.filter((l) => l.status === 'new').length;
  const pendingReviewsCount = reviews.filter((r) => !r.isApproved).length;

  const navItems = [
    { id: 'dashboard', label: 'Statistika & Asosiy', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'leads', label: 'Arizalar (Lidlar)', icon: <Users className="w-4 h-4" />, badge: pendingLeadsCount },
    { id: 'courses', label: 'Kurslar Boshqaruvi', icon: <Layers className="w-4 h-4" /> },
    { id: 'teachers', label: 'O\'qituvchilar', icon: <UserCheck className="w-4 h-4" /> },
    { id: 'students', label: 'Talabalar (CRM)', icon: <Award className="w-4 h-4" /> },
    { id: 'blog', label: 'Blog & Yangiliklar', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'reviews', label: 'Otzivlar Moderatsiyasi', icon: <Quote className="w-4 h-4" />, badge: pendingReviewsCount },
    { id: 'settings', label: 'Tizim Sozlamalari', icon: <Settings className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex">
      {/* Sidebar for Desktop */}
      <aside className="hidden lg:flex w-72 flex-col justify-between p-6 bg-slate-900/90 border-r border-slate-800/80 fixed inset-y-0 left-0 z-30 backdrop-blur-xl">
        <div className="space-y-6">
          {/* Brand */}
          <div className="flex items-center gap-3 px-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/25">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-heading font-bold text-base text-white">ARXITEKTURA</div>
              <div className="text-[11px] text-indigo-400 font-mono">ADMIN PANEL</div>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="space-y-1.5 pt-2">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={isActive ? 'text-white' : 'text-indigo-400'}>{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                  {item.badge !== undefined && item.badge > 0 && (
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        isActive ? 'bg-white text-indigo-700' : 'bg-amber-500 text-slate-950'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* User Info & Actions */}
        <div className="pt-6 border-t border-slate-800/80 space-y-4">
          <div className="flex items-center gap-3 px-2">
            <img
              src={user?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'}
              alt={user?.name}
              className="w-9 h-9 rounded-xl object-cover border border-indigo-500/40"
            />
            <div className="overflow-hidden">
              <div className="font-bold text-xs text-white truncate">{user?.name}</div>
              <div className="text-[10px] text-indigo-400 uppercase font-mono">{user?.role}</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={onBackToSite}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Saytga</span>
            </button>
            <button
              onClick={logout}
              className="p-2 rounded-xl bg-rose-500/10 hover:bg-rose-500 hover:text-white text-rose-400 text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Chiqish</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Drawer */}
      {isSidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex">
          <div className="w-72 bg-slate-900 p-6 flex flex-col justify-between h-full border-r border-slate-800">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="font-heading font-bold text-white">ARXITEKTURA ADMIN</div>
                <button onClick={() => setIsSidebarOpen(false)} className="text-slate-400">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="space-y-1.5">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsSidebarOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold ${
                      activeTab === item.id
                        ? 'bg-indigo-600 text-white'
                        : 'text-slate-400 hover:bg-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                    </div>
                  </button>
                ))}
              </nav>
            </div>

            <div className="pt-4 border-t border-slate-800 flex gap-2">
              <button
                onClick={onBackToSite}
                className="flex-1 py-2 rounded-xl bg-slate-800 text-xs font-semibold"
              >
                Saytga qaytish
              </button>
              <button
                onClick={logout}
                className="flex-1 py-2 rounded-xl bg-rose-500/20 text-rose-300 text-xs font-semibold"
              >
                Chiqish
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 lg:ml-72 flex flex-col min-h-screen">
        {/* Top Navbar */}
        <header className="p-4 sm:p-6 bg-slate-950/80 border-b border-slate-800/80 sticky top-0 z-20 backdrop-blur-xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="text-xs sm:text-sm font-semibold text-slate-400">
              Admin / <span className="text-white capitalize">{activeTab}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab('leads')}
              className="relative p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              title="Yangi arizalar"
            >
              <Bell className="w-4 h-4" />
              {pendingLeadsCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-500 text-slate-950 text-[10px] font-bold flex items-center justify-center">
                  {pendingLeadsCount}
                </span>
              )}
            </button>
            <button
              onClick={onBackToSite}
              className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs font-semibold text-slate-300 flex items-center gap-1.5 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-indigo-400" />
              <span className="hidden sm:inline">Saytni ochish</span>
            </button>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="p-4 sm:p-6 lg:p-8 flex-1">
          {activeTab === 'dashboard' && <Dashboard onNavigateTab={(tab) => setActiveTab(tab)} />}
          {activeTab === 'leads' && <LeadsManager />}
          {activeTab === 'courses' && <CoursesManager />}
          {activeTab === 'teachers' && <TeachersManager />}
          {activeTab === 'students' && <StudentsManager />}
          {activeTab === 'blog' && <BlogManager />}
          {activeTab === 'reviews' && <ReviewsManager />}
          {activeTab === 'settings' && <SettingsManager />}
        </main>
      </div>
    </div>
  );
};
