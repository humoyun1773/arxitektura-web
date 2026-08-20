import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { Star, CheckCircle, XCircle, Trash2, Plus, Quote, Sparkles } from 'lucide-react';

export const ReviewsManager: React.FC = () => {
  const { reviews, toggleReviewApproval, deleteReview, addReview } = useData();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [courseTitle, setCourseTitle] = useState('Arxitektura va 3D Visualizatsiya');
  const [company, setCompany] = useState('');
  const [workPosition, setWorkPosition] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    addReview({
      name: name.trim(),
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
      projectTitle: courseTitle || 'Loyiha Konsultatsiyasi',
      courseTitle,
      company,
      workPosition,
      comment,
      rating
    });

    setIsModalOpen(false);
    setName('');
    setComment('');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold font-heading text-white flex items-center gap-2">
            <Quote className="w-6 h-6 text-amber-400" />
            <span>Talabalar Fikrlari (Otzivlar) Moderatsiyasi</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Saytda chiqadigan fikrlarni tasdiqlash, tahrirlash va yangi sharh qo'shish
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition-all self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Fikr Qo'shish</span>
        </button>
      </div>

      {/* Reviews Table / Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <div
            key={r.id}
            className={`rounded-3xl p-6 border transition-all flex flex-col justify-between space-y-4 ${
              r.isApproved
                ? 'bg-slate-900/60 border-slate-800'
                : 'bg-amber-950/20 border-amber-500/30'
            }`}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < r.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-700'
                      }`}
                    />
                  ))}
                </div>
                <span
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
                    r.isApproved
                      ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                      : 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                  }`}
                >
                  {r.isApproved ? 'Tasdiqlangan' : 'Kutilmoqda'}
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed italic">
                "{r.comment}"
              </p>
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
              <div>
                <div className="font-heading font-bold text-xs text-white">{r.name}</div>
                <div className="text-[10px] text-indigo-400">{r.projectTitle}</div>
                {r.company && (
                  <div className="text-[9px] text-slate-500">{r.clientRole} ({r.company})</div>
                )}
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => toggleReviewApproval(r.id)}
                  className={`p-2 rounded-xl text-xs font-bold transition-colors ${
                    r.isApproved
                      ? 'bg-slate-800 text-slate-400 hover:text-amber-400'
                      : 'bg-emerald-600 text-white'
                  }`}
                  title={r.isApproved ? 'Tasdiqni bekor qilish' : 'Saytda e\'lon qilish'}
                >
                  <CheckCircle className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    if (confirm('Ushbu fikrni o\'chirishni xohlaysizmi?')) {
                      deleteReview(r.id);
                    }
                  }}
                  className="p-2 rounded-xl bg-rose-500/10 text-rose-400 hover:bg-rose-500 hover:text-white transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="w-full max-w-md rounded-3xl bg-slate-900 border border-slate-800 p-6 shadow-2xl space-y-4">
            <h3 className="text-lg font-bold font-heading text-white">Yangi Otziv Qo'shish</h3>
            <form onSubmit={handleCreate} className="space-y-3">
              <input
                type="text"
                required
                placeholder="Talaba ismi *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none"
              />
              <input
                type="text"
                placeholder="Kurs nomi *"
                value={courseTitle}
                onChange={(e) => setCourseTitle(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none"
              />
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Kompaniya (Ish joyi)"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none"
                />
                <input
                  type="text"
                  placeholder="Lavozim"
                  value={workPosition}
                  onChange={(e) => setWorkPosition(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none"
                />
              </div>
              <textarea
                required
                rows={3}
                placeholder="Fikr matni..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none resize-none"
              />
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
                  Qo'shish
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};


