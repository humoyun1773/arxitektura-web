import React from 'react';
import { useData } from '../context/DataContext';
import { ArrowLeft, Clock, Eye, Share2, Tag, BookOpen, Send, Sparkles } from 'lucide-react';

interface BlogDetailPageProps {
  slug: string;
  onNavigate: (page: string, param?: string) => void;
}

export const BlogDetailPage: React.FC<BlogDetailPageProps> = ({ slug, onNavigate }) => {
  const { blogPosts, openLeadModal } = useData();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-36 pb-20 min-h-screen text-center px-4">
        <h2 className="text-2xl font-bold text-white mb-4">Maqola topilmadi</h2>
        <button
          onClick={() => onNavigate('blog')}
          className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold"
        >
          Barcha maqolalarga qaytish
        </button>
      </div>
    );
  }

  const related = blogPosts.filter((p) => p.id !== post.id && p.isPublished).slice(0, 2);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Maqola havolasi nusxalandi!");
    }
  };

  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <button
          onClick={() => onNavigate('blog')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white mb-8 group transition-colors"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Barcha maqolalarga qaytish</span>
        </button>

        {/* Article Header */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold">
              {post.category}
            </span>
            <span className="text-xs text-slate-400">{post.createdAt}</span>
            <span className="text-slate-600">•</span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Eye className="w-3.5 h-3.5" />
              {post.views} ko'rildi
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold font-heading text-white leading-tight">
            {post.title}
          </h1>

          {/* Author bar */}
          <div className="flex items-center justify-between py-4 border-y border-slate-800">
            <div className="flex items-center gap-3">
              <img
                src={post.authorAvatar}
                alt={post.author}
                className="w-10 h-10 rounded-full object-cover border border-slate-700"
              />
              <div>
                <div className="text-sm font-bold text-white">{post.author}</div>
                <div className="text-xs text-indigo-400">Muallif & Mutaxassis</div>
              </div>
            </div>

            <button
              onClick={handleShare}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white flex items-center gap-2 text-xs font-semibold"
            >
              <Share2 className="w-4 h-4" />
              <span className="hidden sm:inline">Ulashish</span>
            </button>
          </div>
        </div>

        {/* Cover image */}
        <div className="relative aspect-video rounded-3xl overflow-hidden mb-10 bg-slate-800 border border-slate-700/80 shadow-2xl">
          <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
        </div>

        {/* Content */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-6 text-slate-200 leading-relaxed text-sm sm:text-base">
          <p className="text-base sm:text-lg font-medium text-slate-100 border-l-2 border-indigo-500 pl-4 italic">
            {post.excerpt}
          </p>

          <div className="space-y-4 whitespace-pre-line text-slate-300">
            {post.content}
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-slate-800 flex flex-wrap gap-2">
            {post.tags.map((t, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-xl bg-slate-800 text-xs text-slate-300 font-medium"
              >
                #{t}
              </span>
            ))}
          </div>
        </div>

        {/* Banner CTA inside article */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-indigo-900/80 to-purple-900/80 border border-indigo-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl font-bold font-heading text-white mb-1">
              Ushbu sohani chuqur o'rganmoqchimisiz?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Bepul sinov darsiga yoziling va amaliy tajriba orttiring!
            </p>
          </div>
          <button
            onClick={() => openLeadModal()}
            className="shrink-0 px-6 py-3 rounded-xl bg-white text-slate-950 font-bold text-xs hover:bg-slate-100 shadow-lg"
          >
            Kursga Yozilish
          </button>
        </div>
      </div>
    </div>
  );
};
