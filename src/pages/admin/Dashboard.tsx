import React from "react";
import { useData } from "../../context/DataContext";
import { Users, BookOpen, TrendingUp, CheckCircle2, AlertCircle, Clock, Building2, FolderOpen } from "lucide-react";

interface DashboardProps {
  onNavigateTab: (tab: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onNavigateTab }) => {
  const { leads, projects, architects, blogPosts, reviews, exportLeadsToCSV } = useData();

  const newLeadsCount = leads.filter((l) => l.status === "new").length;
  const contactedCount = leads.filter((l) => l.status === "contacted").length;
  const convertedCount = leads.filter((l) => l.status === "contract_signed").length;
  const conversionRate = leads.length > 0 ? Math.round((convertedCount / leads.length) * 100) : 0;
  const pendingReviews = reviews.filter((r) => !r.isApproved).length;
  const publishedPosts = blogPosts.filter((p) => p.isPublished).length;

  const stats = [
    {
      title: "Barcha Arizalar",
      value: leads.length,
      sub: `${newLeadsCount} ta yangi`,
      icon: <Users className="w-5 h-5 text-blue-400" />,
      color: "from-blue-500/20 to-blue-500/5",
      actionTab: "leads"
    },
    {
      title: "Loyihalar Portfeli",
      value: projects.length,
      sub: `${projects.filter(p => p.isActive).length} ta faol loyiha`,
      icon: <FolderOpen className="w-5 h-5 text-violet-400" />,
      color: "from-violet-500/20 to-violet-500/5",
      actionTab: "leads"
    },
    {
      title: "Blog Maqolalari",
      value: blogPosts.length,
      sub: `${publishedPosts} ta nashr qilingan`,
      icon: <BookOpen className="w-5 h-5 text-emerald-400" />,
      color: "from-emerald-500/20 to-emerald-500/5",
      actionTab: "blog"
    },
    {
      title: "Konversiya Darajasi",
      value: `${conversionRate}%`,
      sub: `${convertedCount} ta aylantirilgan`,
      icon: <TrendingUp className="w-5 h-5 text-amber-400" />,
      color: "from-amber-500/20 to-amber-500/5",
      actionTab: "leads"
    },
  ];

  const recentLeads = leads.slice(0, 5);

  const statusConfig: Record<string, { label: string; className: string }> = {
    new: { label: "Yangi", className: "bg-blue-500/20 text-blue-300 border border-blue-500/30" },
    contacted: { label: "Bog'lanildi", className: "bg-amber-500/20 text-amber-300 border border-amber-500/30" },
    converted: { label: "Aylantirildi", className: "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30" },
    lost: { label: "Bekor", className: "bg-slate-700 text-slate-400 border border-slate-600" },
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">Bosh Panel</h2>
          <p className="text-xs text-slate-400 mt-0.5">Umumiy ko'rsatkichlar va yangi arizalar</p>
        </div>
        <button
          onClick={() => exportLeadsToCSV?.()}
          className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-2 border border-slate-700 transition-colors cursor-pointer"
        >
          CSV Export
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <button
            key={i}
            onClick={() => onNavigateTab(s.actionTab)}
            className={`bg-gradient-to-br ${s.color} border border-slate-800 rounded-2xl p-5 text-left hover:border-slate-600 transition-all cursor-pointer`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-9 h-9 rounded-xl bg-slate-800/80 flex items-center justify-center">{s.icon}</div>
            </div>
            <div className="font-heading font-black text-2xl text-white">{s.value}</div>
            <div className="text-xs text-slate-300 font-medium mt-0.5">{s.title}</div>
            <div className="text-[11px] text-slate-500 mt-1">{s.sub}</div>
          </button>
        ))}
      </div>

      {pendingReviews > 0 && (
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 flex items-center gap-4">
          <AlertCircle className="w-5 h-5 text-amber-400 shrink-0" />
          <div className="flex-1">
            <div className="text-sm font-semibold text-amber-300">{pendingReviews} ta sharh moderatsiya kutayapti</div>
            <div className="text-xs text-amber-400/70">Ular tasdiqlangach saytda ko'rinadi</div>
          </div>
          <button onClick={() => onNavigateTab("reviews")} className="px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 text-xs font-bold cursor-pointer">Ko'rish</button>
        </div>
      )}

      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <h3 className="font-bold text-sm text-white">Oxirgi Arizalar</h3>
          <button onClick={() => onNavigateTab("leads")} className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer">Barchasi →</button>
        </div>
        <div className="divide-y divide-slate-800">
          {recentLeads.length === 0 ? (
            <div className="py-10 text-center text-slate-500 text-sm">Hali ariza yo'q</div>
          ) : (
            recentLeads.map((lead) => (
              <div key={lead.id} className="p-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 text-xs font-bold shrink-0">
                    {lead.fullName.charAt(0).toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-xs text-white truncate">{lead.fullName}</div>
                    <div className="text-[11px] text-slate-500 truncate">{lead.phone}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <div className="text-[11px] text-slate-500 hidden sm:block">{lead.serviceType || "—"}</div>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${statusConfig[lead.status]?.className || ""}`}>
                    {statusConfig[lead.status]?.label || lead.status}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-2">
          <div className="flex items-center gap-2 text-xs text-slate-400"><Clock className="w-3.5 h-3.5" /><span>Bog'lanish kutilmoqda</span></div>
          <div className="font-heading font-black text-2xl text-white">{contactedCount}</div>
        </div>
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-2">
          <div className="flex items-center gap-2 text-xs text-slate-400"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /><span>Muvaffaqiyatli</span></div>
          <div className="font-heading font-black text-2xl text-emerald-400">{convertedCount}</div>
        </div>
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-2">
          <div className="flex items-center gap-2 text-xs text-slate-400"><Building2 className="w-3.5 h-3.5 text-violet-400" /><span>Arxitektorlar</span></div>
          <div className="font-heading font-black text-2xl text-violet-400">{architects.length}</div>
        </div>
      </div>
    </div>
  );
};



