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

  const avatarList = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  ];

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const randomAvatar = avatarList[Math.floor(Math.random() * avatarList.length)];

    addReview({
      name: name.trim(),
      avatar: randomAvatar,
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
    setRating(5);
  };

  return (
    <section className="py-20 relative bg-white">
      <div className="app-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900">
              {t('reviews.title', "Bitiruvchilar Natijalari va Sharhlari")}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl">
              {t('reviews.subtitle', "Bizning o'quv markazimizda tahsil olgan talabalarning samimiy fikrlari.")}
            </p>
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="px-5 py-3 rounded-2xl bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-700 hover:text-slate-900 text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shadow-sm"
          >
            <PlusCircle className="w-4 h-4 text-indigo-600" />
            <span>Fikr Qoldirish</span>
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {approvedReviews.map((rev) => (
            <div
              key={rev.id}
              className="rounded-3xl p-6 bg-white border border-slate-200/90 hover:border-indigo-300 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-3">
                {/* Rating & Quote */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < rev.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'
                        }`}
                      />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-indigo-200 group-hover:text-indigo-400 transition-colors" />
                </div>

                <p className="text-sm text-slate-600 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-11 h-11 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <div className="font-heading font-bold text-sm text-slate-900">
                    {rev.name}
                  </div>
                  <div className="text-xs text-indigo-600 font-semibold">
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
        <div 
          onClick={() => setShowAddModal(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-3xl bg-white border border-slate-200 p-6 shadow-2xl space-y-4"
          >
            <h3 className="text-lg font-bold font-heading text-slate-900">Fikr qoldirish</h3>
            <form onSubmit={handleAddReview} className="space-y-3">
              <input
                type="text"
                required
                placeholder="Ismingiz *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 outline-none focus:border-indigo-600 focus:bg-white"
              />
              <input
                type="text"
                placeholder="Qaysi kursni bitirgansiz?"
                value={courseTitle}
                onChange={(e) => setCourseTitle(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 outline-none focus:border-indigo-600 focus:bg-white"
              />
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Ish joyingiz (kompaniya)"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 outline-none focus:border-indigo-600 focus:bg-white"
                />
                <input
                  type="text"
                  placeholder="Lavozimingiz"
                  value={workPosition}
                  onChange={(e) => setWorkPosition(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 outline-none focus:border-indigo-600 focus:bg-white"
                />
              </div>
              <div>
                <label className="text-xs text-slate-600 block mb-1">Baho:</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setRating(num)}
                      className={`p-2 rounded-lg border text-xs font-bold ${
                        rating === num ? 'bg-amber-50 border-amber-400 text-amber-600' : 'bg-slate-50 border-slate-200 text-slate-600'
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
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 outline-none focus:border-indigo-600 focus:bg-white resize-none"
              />
              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200"
                >
                  Bekor qilish
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 shadow-sm"
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
