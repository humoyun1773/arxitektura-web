import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { BlogPost } from '../../types';
import { BookOpen, Plus, Edit, Trash2, Eye, X, Sparkles } from 'lucide-react';

export const BlogManager: React.FC = () => {
  const { blogPosts, addBlogPost, updateBlogPost, deleteBlogPost } = useData();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);

  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80');
  const [category, setCategory] = useState('Arxitektura & Dizayn');
  const [author, setAuthor] = useState('Jahongir Rustamov');
  const [authorAvatar, setAuthorAvatar] = useState('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80');
  const [readTime, setReadTime] = useState('4 daqiqa');
  const [tagsStr, setTagsStr] = useState('3D Max, Corona, Arxitektura');
  const [isPublished, setIsPublished] = useState(true);

  const openCreateModal = () => {
    setEditingPost(null);
    setTitle('');
    setSlug('');
    setExcerpt('');
    setContent('');
    setIsPublished(true);
    setIsModalOpen(true);
  };

  const openEditModal = (p: BlogPost) => {
    setEditingPost(p);
    setTitle(p.title);
    setSlug(p.slug);
    setExcerpt(p.excerpt);
    setContent(p.content);
    setCoverImage(p.coverImage || p.image || '');
    setCategory(p.category);
    setAuthor(p.author);
    setAuthorAvatar(p.authorAvatar || '');
    setReadTime(p.readTime);
    setTagsStr(p.tags.join(', '));
    setIsPublished(p.isPublished);
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const postSlug = slug.trim() || title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const tags = tagsStr.split(',').map((t) => t.trim()).filter(Boolean);

    if (editingPost) {
      updateBlogPost(editingPost.id, {
        title,
        slug: postSlug,
        excerpt,
        content,
        coverImage,
        category,
        author,
        authorAvatar,
        readTime,
        tags,
        isPublished
      });
    } else {
      addBlogPost({
        title,
        slug: postSlug,
        excerpt,
        content,
        coverImage,
        category,
        author,
        authorAvatar,
        readTime,
        tags,
        isPublished
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
            <BookOpen className="w-6 h-6 text-sky-400" />
            <span>Blog & Maqolalar Boshqaruvi</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Saytga yangi foydali maqola, darslik va yangiliklar joylash
          </p>
        </div>

        <button
          onClick={openCreateModal}
          className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition-all self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Yangi Maqola Yozish</span>
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((p) => (
          <div
            key={p.id}
            className="rounded-3xl bg-slate-900/60 border border-slate-800 p-5 space-y-3 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-800">
                <img src={p.coverImage} alt={p.title} className="w-full h-full object-cover" />
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-slate-950/80 text-[10px] text-indigo-300 font-bold">
                  {p.category}
                </div>
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-bold bg-slate-950/80 text-slate-300">
                  {p.views} ko'rildi
                </div>
              </div>

              <h3 className="font-heading font-bold text-sm text-white line-clamp-2">
                {p.title}
              </h3>
              <p className="text-xs text-slate-400 line-clamp-2">
                {p.excerpt}
              </p>
            </div>

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between gap-2">
              <button
                onClick={() => openEditModal(p)}
                className="flex-1 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5"
              >
                <Edit className="w-3.5 h-3.5" />
                <span>Tahrirlash</span>
              </button>
              <button
                onClick={() => {
                  if (confirm('Ushbu maqolani o\'chirishni xohlaysizmi?')) {
                    deleteBlogPost(p.id);
                  }
                }}
                className="p-2 rounded-xl bg-rose-500/10 text-rose-400 hover:bg-rose-500 hover:text-white transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
          <div className="w-full max-w-2xl rounded-3xl bg-slate-900 border border-slate-800 p-6 shadow-2xl space-y-4 my-8">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold font-heading text-white">
                {editingPost ? 'Maqolani Tahrirlash' : 'Yangi Maqola Qo\'shish'}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 max-h-[75vh] overflow-y-auto pr-2">
              <div>
                <label className="block text-xs text-slate-300 mb-1">Maqola Sarlavhasi *</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-slate-300 mb-1">Kategoriya</label>
                  <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-300 mb-1">Muallif Ismi</label>
                  <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">Rasm URL</label>
                <input
                  type="url"
                  value={coverImage}
                  onChange={(e) => setCoverImage(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">Qisqa Anotatsiya (Excerpt)</label>
                <textarea
                  rows={2}
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">To'liq Matn (Markdown / Matn)</label>
                <textarea
                  rows={6}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">Teglar (vergul bilan)</label>
                <input
                  type="text"
                  value={tagsStr}
                  onChange={(e) => setTagsStr(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none"
                />
              </div>

              <div className="flex gap-3 pt-3">
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
