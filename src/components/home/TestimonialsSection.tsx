import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { useLanguage } from '../../context/LanguageContext';
import { Star, Quote, Sparkles, Building2, User, PlusCircle } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const { reviews, addReview } = useData();
  const { t } = useLanguage();
  const approvedReviews = reviews.filter((r) => r.isApproved);

  const [showAddModal, setShowAddModal] = useState(false);
  const [name, setName] = useState('');
  const [courseTitle, setCourseTitle] = useState('');
  const [company, setCompany] = useState('');
  const [workPosition, setWorkPosition] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    addReview({
      name: name.trim(),
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
      courseTitle: courseTitle.trim() || 'Al-Hakim At-Termeziy kursi',
      company: company.trim(),
      workPosition: workPosition.trim(),
      comment: comment.trim(),
      rating
    });

    setShowAddModal(false);
    setName('');
    setCourseTitle('');
    setCompany('');
    setWorkPosition('');
    setComment('');
  };

  return (
    <section className="py-20 relative bg-slate-950/80">
      <div className="app-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
              {t('reviews.title', "Bitiruvchilar Natijalari va Sharhlari")}
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl">
              {t('reviews.subtitle', "Bizning o'quv markazimizda tahsil olgan talabalarning samimiy fikrlari.")}
            </p>
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="px-5 py-3 rounded-2xl bg-slate-900 border border-slate-700/80 hover:border-indigo-500 text-slate-200 text-xs sm:text-sm font-bold flex items-center gap-2 transition-all"
          >
            <PlusCircle className="w-4 h-4 text-indigo-400" />
            <span>Fikr Qoldirish</span>
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {approvedReviews.map((rev) => (
            <div
              key={rev.id}
              className="rounded-3xl p-6 bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-3">
                {/* Rating & Quote */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < rev.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-700'
                        }`}
                      />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-indigo-500/30 group-hover:text-indigo-400/60 transition-colors" />
                </div>

                <p className="text-sm text-slate-300 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-11 h-11 rounded-full object-cover border border-slate-700"
                />
                <div>
                  <div className="font-heading font-bold text-sm text-white">
                    {rev.name}
                  </div>
                  <div className="text-xs text-indigo-400">
                    {rev.courseTitle}
                  </div>
                  {rev.company && (
                    <div className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                      <Building2 className="w-3 h-3 text-slate-400" />
                      <span>{rev.workPosition ? `${rev.workPosition}, ` : ''}{rev.company}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Review Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div className="w-full max-w-md rounded-3xl bg-slate-900 border border-slate-800 p-6 shadow-2xl space-y-4">
            <h3 className="text-lg font-bold font-heading text-white">Fikr qoldirish</h3>
            <form onSubmit={handleAddReview} className="space-y-3">
              <input
                type="text"
                required
                placeholder="Ismingiz *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none focus:border-indigo-500"
              />
              <input
                type="text"
                placeholder="Qaysi kursni bitirgansiz?"
                value={courseTitle}
                onChange={(e) => setCourseTitle(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none focus:border-indigo-500"
              />
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Ish joyingiz (kompaniya)"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none focus:border-indigo-500"
                />
                <input
                  type="text"
                  placeholder="Lavozimingiz"
                  value={workPosition}
                  onChange={(e) => setWorkPosition(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="text-xs text-slate-400 block mb-1">Baho:</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setRating(num)}
                      className={`p-2 rounded-lg border text-xs font-bold ${
                        rating === num ? 'bg-amber-500/20 border-amber-500 text-amber-300' : 'bg-slate-800 border-slate-700 text-slate-400'
                      }`}
                    >
                      ★ {num}
                    </button>
                  ))}
                </div>
              </div>
              <textarea
                required
                rows={3}
                placeholder="Fikringiz, natijalaringiz va taassurotlaringiz..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none focus:border-indigo-500 resize-none"
              />
              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 py-2.5 rounded-xl bg-slate-800 text-slate-400 text-xs font-semibold"
                >
                  Bekor qilish
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-500"
                >
                  Yuborish
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
