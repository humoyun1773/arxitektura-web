import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { Teacher } from '../../types';
import { Users, Plus, Edit, Trash2, Star, Award, X, Sparkles } from 'lucide-react';

export const TeachersManager: React.FC = () => {
  const { teachers, addTeacher, updateTeacher, deleteTeacher } = useData();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTeacher, setEditingTeacher] = useState<Teacher | null>(null);

  // Form states
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [bio, setBio] = useState('');
  const [experienceYears, setExperienceYears] = useState(5);
  const [avatar, setAvatar] = useState('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80');
  const [specializationsStr, setSpecializationsStr] = useState('3Ds Max, Corona, AutoCAD');

  const openCreateModal = () => {
    setEditingTeacher(null);
    setName('');
    setRole('Bosh Arxitektor & Mentor');
    setBio('');
    setExperienceYears(5);
    setSpecializationsStr('');
    setIsModalOpen(true);
  };

  const openEditModal = (t: Teacher) => {
    setEditingTeacher(t);
    setName(t.name);
    setRole(t.role);
    setBio(t.bio);
    setExperienceYears(t.experienceYears);
    setAvatar(t.avatar);
    setSpecializationsStr(t.specializations.join(', '));
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const specs = specializationsStr
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    if (editingTeacher) {
      updateTeacher(editingTeacher.id, {
        name,
        role,
        bio,
        experienceYears,
        avatar,
        specializations: specs
      });
    } else {
      addTeacher({
        name,
        role,
        bio,
        experienceYears,
        avatar,
        specializations: specs,
        courseIds: ['c1'],
        certificates: ['Xalqaro Sertifikat']
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
            <Users className="w-6 h-6 text-indigo-400" />
            <span>O'qituvchilar Boshqaruvi</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Ustozlar tarkibini boshqarish, yangi o'qituvchi va mutaxassislarni qo'shish
          </p>
        </div>

        <button
          onClick={openCreateModal}
          className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition-all self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>O'qituvchi Qo'shish</span>
        </button>
      </div>

      {/* Teachers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teachers.map((t) => (
          <div
            key={t.id}
            className="rounded-3xl bg-slate-900/60 border border-slate-800 p-5 space-y-4 flex flex-col justify-between"
          >
            <div className="flex items-start gap-4">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-16 h-16 rounded-2xl object-cover border border-slate-700 shrink-0"
              />
              <div className="space-y-1">
                <h3 className="font-heading font-bold text-base text-white">{t.name}</h3>
                <div className="text-xs text-indigo-400 font-semibold">{t.role}</div>
                <div className="text-[11px] text-slate-400">
                  {t.experienceYears} yil tajriba • ★ {t.rating}
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
              {t.bio}
            </p>

            <div className="flex flex-wrap gap-1">
              {t.specializations.map((s, i) => (
                <span key={i} className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300">
                  {s}
                </span>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between gap-2">
              <button
                onClick={() => openEditModal(t)}
                className="flex-1 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <Edit className="w-3.5 h-3.5" />
                <span>Tahrirlash</span>
              </button>
              <button
                onClick={() => {
                  if (confirm('Ushbu o\'qituvchini o\'chirishni xohlaysizmi?')) {
                    deleteTeacher(t.id);
                  }
                }}
                className="p-2 rounded-xl bg-rose-500/10 text-rose-400 hover:bg-rose-500 hover:text-white transition-colors"
                title="O'chirish"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="w-full max-w-lg rounded-3xl bg-slate-900 border border-slate-800 p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold font-heading text-white">
                {editingTeacher ? 'O\'qituvchini Tahrirlash' : 'Yangi O\'qituvchi Qo\'shish'}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-xs text-slate-300 mb-1">F.I.SH *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">Lavozim / Mutaxassislik *</label>
                <input
                  type="text"
                  required
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-slate-300 mb-1">Tajriba yillari</label>
                  <input
                    type="number"
                    value={experienceYears}
                    onChange={(e) => setExperienceYears(Number(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-300 mb-1">Rasm URL</label>
                  <input
                    type="url"
                    value={avatar}
                    onChange={(e) => setAvatar(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">Yo'nalishlar (vergul bilan)</label>
                <input
                  type="text"
                  value={specializationsStr}
                  onChange={(e) => setSpecializationsStr(e.target.value)}
                  placeholder="3Ds Max, Corona, BIM, AutoCAD"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">Qisqacha Tarjimai Hol (Bio)</label>
                <textarea
                  rows={3}
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none resize-none"
                />
              </div>

              <div className="flex gap-3 pt-2">
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
