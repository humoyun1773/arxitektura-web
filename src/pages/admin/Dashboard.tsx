import React from 'react';
import { useData } from '../../context/DataContext';
import { 
  Users, 
  BookOpen, 
  Layers, 
  TrendingUp, 
  ArrowUpRight, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  FileSpreadsheet,
  Award,
  Sparkles
} from 'lucide-react';

interface DashboardProps {
  onNavigateTab: (tab: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onNavigateTab }) => {
  const { leads, courses, teachers, students, exportLeadsToCSV } = useData();

  const newLeadsCount = leads.filter((l) => l.status === 'new').length;
  const contactedCount = leads.filter((l) => l.status === 'contacted').length;
  const registeredCount = leads.filter((l) => l.status === 'registered').length;
  const conversionRate = leads.length > 0 ? Math.round((registeredCount / leads.length) * 100) : 0;

  // Calculate estimated revenue
  const totalRevenue = students.reduce((sum, s) => sum + s.paidAmount, 0);

  const stats = [
    {
      title: 'Barcha Arizalar (Lidlar)',
      value: leads.length,
      sub: `${newLeadsCount} ta yangi kutayotgan`,
      icon: <Users className="w-5 h-5 text-indigo-400" />,
      color: 'from-indigo-500/20 to-purple-500/10',
      actionTab: 'leads'
    },
    {
      title: 'Faol O\'quvchilar (CRM)',
      value: students.length,
      sub: 'Guruhlarda tahsil olmoqda',
      icon: <Award className="w-5 h-5 text-emerald-400" />,
      color: 'from-emerald-500/20 to-teal-500/10',
      actionTab: 'students'
    },
    {
      title: 'O\'quv Kurslari',
      value: courses.length,
      sub: `${courses.filter(c => c.isActive).length} ta faol yo'nalish`,
      icon: <Layers className="w-5 h-5 text-purple-400" />,
      color: 'from-purple-500/20 to-pink-500/10',
      actionTab: 'courses'
    },
    {
      title: 'Konversiya Natijasi',
      value: `${conversionRate}%`,
      sub: `${registeredCount} ta ro'yxatdan o'tgan`,
      icon: <TrendingUp className="w-5 h-5 text-amber-400" />,
      color: 'from-amber-500/20 to-orange-500/10',
      actionTab: 'leads'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Top Banner / Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold font-heading text-white flex items-center gap-2">
            <span>Boshqaruv Paneli & Statistika</span>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono font-normal">
              Jonli Rejim
            </span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Markaz ko'rsatkichlari, arizalar oqimi va tushumlar hisoboti
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={exportLeadsToCSV}
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center gap-2 border border-slate-700 transition-colors"
          >
            <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
            <span>Excel (CSV) Eksport</span>
          </button>
          <button
            onClick={() => onNavigateTab('leads')}
            className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-lg shadow-indigo-600/30 transition-all"
          >
            Arizalarni Ko'rish
          </button>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((st, i) => (
          <div
            key={i}
            onClick={() => onNavigateTab(st.actionTab)}
            className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800/80 hover:border-indigo-500/40 cursor-pointer transition-all hover:-translate-y-1 relative overflow-hidden group"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${st.color} rounded-full blur-2xl -z-10 group-hover:scale-125 transition-transform`}></div>

            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                {st.icon}
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 transition-colors" />
            </div>

            <div className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              {st.value}
            </div>
            <div className="text-xs font-semibold text-slate-200 mt-1">
              {st.title}
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              {st.sub}
            </div>
          </div>
        ))}
      </div>

      {/* Grid of Leads Feed & Course Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Recent Leads */}
        <div className="lg:col-span-7 p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-heading font-bold text-base text-white flex items-center gap-2">
              <Users className="w-4 h-4 text-indigo-400" />
              So'nggi Kelgan Arizalar
            </h3>
            <button
              onClick={() => onNavigateTab('leads')}
              className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold"
            >
              Barchasini ko'rish →
            </button>
          </div>

          <div className="space-y-2.5">
            {leads.slice(0, 5).map((lead) => {
              const statusBadges = {
                new: { label: 'Yangi', class: 'bg-amber-500/10 text-amber-300 border-amber-500/20' },
                contacted: { label: 'Bog\'lanildi', class: 'bg-sky-500/10 text-sky-300 border-sky-500/20' },
                registered: { label: 'O\'quvchi bo\'ldi', class: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20' },
                cancelled: { label: 'Rad etildi', class: 'bg-rose-500/10 text-rose-300 border-rose-500/20' }
              };
              const badge = statusBadges[lead.status];

              return (
                <div
                  key={lead.id}
                  className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between gap-3"
                >
                  <div>
                    <div className="font-bold text-xs text-white">{lead.fullName}</div>
                    <div className="text-[11px] text-slate-400 font-mono">{lead.phone}</div>
                    <div className="text-[10px] text-indigo-400 mt-0.5 line-clamp-1">{lead.courseTitle}</div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className={`px-2 py-0.5 rounded-full border text-[10px] font-bold ${badge.class}`}>
                      {badge.label}
                    </span>
                    <div className="text-[10px] text-slate-500 mt-1">{lead.createdAt}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Top Courses & Quick Metrics */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
            <h3 className="font-heading font-bold text-base text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-purple-400" />
              Eng Talabgir Kurslar
            </h3>

            <div className="space-y-3">
              {courses.slice(0, 4).map((c) => (
                <div key={c.id} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-200 line-clamp-1">{c.title}</span>
                    <span className="text-slate-400 font-mono">{c.studentsCount} o'quvchi</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full"
                      style={{ width: `${Math.min(100, (c.studentsCount / 1000) * 100)}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Revenue Estimation Box */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-950/40 to-slate-900 border border-indigo-500/20 space-y-2">
            <div className="text-xs text-slate-400">Jami O'quvchilardan Tushum (CRM):</div>
            <div className="text-2xl font-bold font-heading text-emerald-400">
              {totalRevenue.toLocaleString('uz-UZ')} so'm
            </div>
            <div className="text-[11px] text-slate-400">
              Faol o'quvchilar tomonidan to'langan mablag'lar
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
