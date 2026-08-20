import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { LeadStatus } from '../../types';
import { 
  Users, 
  Search, 
  Filter, 
  FileSpreadsheet, 
  Trash2, 
  CheckCircle, 
  Clock, 
  XCircle, 
  PhoneCall, 
  Edit3, 
  MessageSquare,
  Sparkles
} from 'lucide-react';

export const LeadsManager: React.FC = () => {
  const { leads, updateLeadStatus, updateLeadNotes, deleteLead, exportLeadsToCSV } = useData();

  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [editingNotesId, setEditingNotesId] = useState<string | null>(null);
  const [noteText, setNoteText] = useState('');

  const filteredLeads = leads.filter((lead) => {
    if (statusFilter !== 'all' && lead.status !== statusFilter) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      return (
        lead.fullName.toLowerCase().includes(q) ||
        lead.phone.toLowerCase().includes(q) ||
        (lead.projectTitle && lead.projectTitle.toLowerCase().includes(q)) ||
        (lead.serviceType && lead.serviceType.toLowerCase().includes(q))
      );
    }
    return true;
  });

  const handleSaveNotes = (id: string) => {
    updateLeadNotes(id, noteText);
    setEditingNotesId(null);
  };

  const statusOptions: { value: LeadStatus; label: string; bg: string }[] = [
    { value: 'new', label: 'Yangi', bg: 'bg-amber-500/10 text-amber-300 border-amber-500/30' },
    { value: 'contacted', label: 'Bog\'lanildi', bg: 'bg-sky-500/10 text-sky-300 border-sky-500/30' },
    { value: 'contract_signed', label: 'O\'quvchi bo\'ldi', bg: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30' },
    { value: 'cancelled', label: 'Rad etildi', bg: 'bg-rose-500/10 text-rose-300 border-rose-500/30' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold font-heading text-white flex items-center gap-2">
            <Users className="w-6 h-6 text-indigo-400" />
            <span>Arizalar & Lidlar Boshqaruvi</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Sayt, chat va ijtimoiy tarmoqlardan kelgan barcha murojaatlar
          </p>
        </div>

        <button
          onClick={exportLeadsToCSV}
          className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-emerald-600/20 transition-all self-start sm:self-auto"
        >
          <FileSpreadsheet className="w-4 h-4" />
          <span>Excelga Eksport (CSV)</span>
        </button>
      </div>

      {/* Filter / Search Bar */}
      <div className="p-4 sm:p-6 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Ism, telefon yoki kurs bo'yicha qidiring..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-950 border border-slate-700/80 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 outline-none focus:border-indigo-500"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <button
            onClick={() => setStatusFilter('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              statusFilter === 'all' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            Barchasi ({leads.length})
          </button>
          {statusOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setStatusFilter(opt.value)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                statusFilter === opt.value
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {opt.label} ({leads.filter((l) => l.status === opt.value).length})
            </button>
          ))}
        </div>
      </div>

      {/* Leads Table */}
      <div className="rounded-3xl bg-slate-900/60 border border-slate-800 overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950/80 text-slate-400 border-b border-slate-800 uppercase tracking-wider font-semibold">
              <tr>
                <th className="p-4">F.I.SH & Manba</th>
                <th className="p-4">Telefon</th>
                <th className="p-4">Tanlangan Kurs</th>
                <th className="p-4">Holat (Status)</th>
                <th className="p-4">Izoh (Eslatma)</th>
                <th className="p-4">Sana</th>
                <th className="p-4 text-right">Amallar</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {filteredLeads.length === 0 ? (
                <tr>
                  <td colSpan={7} className="p-8 text-center text-slate-500">
                    Arizalar topilmadi.
                  </td>
                </tr>
              ) : (
                filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 font-semibold text-white">
                      <div>{lead.fullName}</div>
                      <div className="text-[10px] text-slate-500 font-normal">{lead.source}</div>
                    </td>

                    <td className="p-4 font-mono font-bold text-indigo-300">
                      <a href={`tel:${lead.phone.replace(/\s+/g, '')}`} className="hover:underline">
                        {lead.phone}
                      </a>
                    </td>

                    <td className="p-4">
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-200 font-medium">
                        {lead.projectTitle || lead.serviceType || 'Umumiy konsultatsiya'}
                      </span>
                    </td>

                    <td className="p-4">
                      <select
                        value={lead.status}
                        onChange={(e) => updateLeadStatus(lead.id, e.target.value as LeadStatus)}
                        className="bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-slate-200 outline-none focus:border-indigo-500"
                      >
                        <option value="new">Yangi</option>
                        <option value="contacted">Bog'lanildi</option>
                        <option value="registered">O'quvchi bo'ldi</option>
                        <option value="cancelled">Rad etildi</option>
                      </select>
                    </td>

                    <td className="p-4 max-w-xs">
                      {editingNotesId === lead.id ? (
                        <div className="flex items-center gap-1.5">
                          <input
                            type="text"
                            value={noteText}
                            onChange={(e) => setNoteText(e.target.value)}
                            className="bg-slate-950 border border-slate-700 rounded p-1 text-xs text-white outline-none w-full"
                          />
                          <button
                            onClick={() => handleSaveNotes(lead.id)}
                            className="px-2 py-1 bg-indigo-600 text-white rounded text-[10px] font-bold"
                          >
                            Saqlash
                          </button>
                        </div>
                      ) : (
                        <div
                          onClick={() => {
                            setEditingNotesId(lead.id);
                            setNoteText(lead.notes || '');
                          }}
                          className="cursor-pointer text-slate-400 hover:text-white flex items-center gap-1 group"
                          title="Tahrirlash uchun bosing"
                        >
                          <span className="line-clamp-1">{lead.notes || '— izoh yozish —'}</span>
                          <Edit3 className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      )}
                    </td>

                    <td className="p-4 text-[11px] text-slate-500 whitespace-nowrap">
                      {lead.createdAt}
                    </td>

                    <td className="p-4 text-right">
                      <button
                        onClick={() => {
                          if (confirm('Ushbu arizani o\'chirishni xohlaysizmi?')) {
                            deleteLead(lead.id);
                          }
                        }}
                        className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                        title="O'chirish"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

