import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { Student } from '../../types';
import { Award, Plus, Edit, Trash2, Search, CheckCircle, Clock, AlertTriangle, X } from 'lucide-react';

export const StudentsManager: React.FC = () => {
  const { students, addStudent, updateStudent, deleteStudent, courses } = useData();

  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('+998 ');
  const [courseId, setCourseId] = useState(courses[0]?.id || 'c1');
  const [groupName, setGroupName] = useState('ARCH-2026-01');
  const [paymentStatus, setPaymentStatus] = useState<'paid' | 'partial' | 'unpaid'>('paid');
  const [paidAmount, setPaidAmount] = useState(1450000);
  const [totalAmount, setTotalAmount] = useState(1450000);
  const [progress, setProgress] = useState(50);

  const filtered = students.filter((s) => {
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return (
      s.fullName.toLowerCase().includes(q) ||
      s.phone.toLowerCase().includes(q) ||
      s.groupName.toLowerCase().includes(q)
    );
  });

  const openCreateModal = () => {
    setEditingStudent(null);
    setFullName('');
    setPhone('+998 ');
    setGroupName('GRP-' + new Date().getFullYear());
    setPaymentStatus('paid');
    setPaidAmount(1450000);
    setTotalAmount(1450000);
    setProgress(10);
    setIsModalOpen(true);
  };

  const openEditModal = (s: Student) => {
    setEditingStudent(s);
    setFullName(s.fullName);
    setPhone(s.phone);
    setCourseId(s.courseId);
    setGroupName(s.groupName);
    setPaymentStatus(s.paymentStatus);
    setPaidAmount(s.paidAmount);
    setTotalAmount(s.totalAmount);
    setProgress(s.progress);
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) return;

    const course = courses.find((c) => c.id === courseId);
    const courseTitle = course?.title || 'Arxitektura kursi';

    if (editingStudent) {
      updateStudent(editingStudent.id, {
        fullName,
        phone,
        courseId,
        courseTitle,
        groupName,
        paymentStatus,
        paidAmount,
        totalAmount,
        progress
      });
    } else {
      addStudent({
        fullName,
        phone,
        courseId,
        courseTitle,
        groupName,
        paymentStatus,
        paidAmount,
        totalAmount,
        progress
      });
    }

    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold font-heading text-white flex items-center gap-2">
            <Award className="w-6 h-6 text-emerald-400" />
            <span>Talabalar & CRM Boshqaruvi</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Guruhlar, to'lov holati va o'quvchilar progressini monitoring qilish
          </p>
        </div>

        <button
          onClick={openCreateModal}
          className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition-all self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Talaba Qo'shish</span>
        </button>
      </div>

      {/* Search */}
      <div className="p-4 sm:p-6 rounded-3xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Talaba ismi yoki guruh bo'yicha..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-950 border border-slate-700/80 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-indigo-500"
          />
        </div>
        <div className="text-xs text-slate-400">Jami: <strong className="text-white">{students.length} ta</strong></div>
      </div>

      {/* Students Table */}
      <div className="rounded-3xl bg-slate-900/60 border border-slate-800 overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950/80 text-slate-400 border-b border-slate-800 uppercase tracking-wider font-semibold">
              <tr>
                <th className="p-4">Talaba F.I.SH</th>
                <th className="p-4">Guruh & Kurs</th>
                <th className="p-4">To'lov Holati</th>
                <th className="p-4">To'langan Mablag'</th>
                <th className="p-4">O'zlashtirish (Progress)</th>
                <th className="p-4 text-right">Amallar</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {filtered.map((s) => (
                <tr key={s.id} className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 font-semibold text-white">
                    <div>{s.fullName}</div>
                    <div className="text-[10px] text-slate-500 font-mono">{s.phone}</div>
                  </td>

                  <td className="p-4">
                    <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-mono font-bold text-[10px]">
                      {s.groupName}
                    </span>
                    <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">{s.courseTitle}</div>
                  </td>

                  <td className="p-4">
                    {s.paymentStatus === 'paid' && (
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold">
                        To'liq to'langan
                      </span>
                    )}
                    {s.paymentStatus === 'partial' && (
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 text-[10px] font-bold">
                        Qisman to'langan
                      </span>
                    )}
                    {s.paymentStatus === 'unpaid' && (
                      <span className="px-2.5 py-0.5 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/30 text-[10px] font-bold">
                        To'lanmagan
                      </span>
                    )}
                  </td>

                  <td className="p-4 font-mono font-bold text-white">
                    {s.paidAmount.toLocaleString('uz-UZ')} / {s.totalAmount.toLocaleString('uz-UZ')} so'm
                  </td>

                  <td className="p-4 w-40">
                    <div className="flex items-center justify-between text-[10px] mb-1">
                      <span>{s.progress}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className="h-full bg-emerald-500 rounded-full"
                        style={{ width: `${s.progress}%` }}
                      ></div>
                    </div>
                  </td>

                  <td className="p-4 text-right space-x-1">
                    <button
                      onClick={() => openEditModal(s)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-300 hover:bg-slate-800 transition-colors"
                      title="Tahrirlash"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        if (confirm('Ushbu talabani o\'chirishni xohlaysizmi?')) {
                          deleteStudent(s.id);
                        }
                      }}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                      title="O'chirish"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="w-full max-w-md rounded-3xl bg-slate-900 border border-slate-800 p-6 shadow-2xl space-y-4">
            <h3 className="text-lg font-bold font-heading text-white">
              {editingStudent ? 'Talaba Ma\'lumotlarini Tahrirlash' : 'Yangi Talaba Qo\'shish'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                required
                placeholder="F.I.SH *"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none"
              />
              <input
                type="tel"
                required
                placeholder="Telefon *"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none font-mono"
              />
              <div className="grid grid-cols-2 gap-2">
                <select
                  value={courseId}
                  onChange={(e) => setCourseId(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none"
                >
                  {courses.map((c) => (
                    <option key={c.id} value={c.id}>{c.title}</option>
                  ))}
                </select>
                <input
                  type="text"
                  placeholder="Guruh nomi"
                  value={groupName}
                  onChange={(e) => setGroupName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none font-mono"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <select
                  value={paymentStatus}
                  onChange={(e) => setPaymentStatus(e.target.value as any)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none"
                >
                  <option value="paid">To'liq to'langan</option>
                  <option value="partial">Qisman to'langan</option>
                  <option value="unpaid">To'lanmagan</option>
                </select>
                <input
                  type="number"
                  placeholder="To'langan summa"
                  value={paidAmount}
                  onChange={(e) => setPaidAmount(Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none"
                />
              </div>

              <div>
                <label className="text-xs text-slate-400 block mb-1">O'zlashtirish foizi: {progress}%</label>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={progress}
                  onChange={(e) => setProgress(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold"
                >
                  Bekor qilish
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-500"
                >
                  Saqlash
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
