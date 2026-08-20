import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { Sparkles, Clock, Eye, User, ArrowRight, Tag, Search } from 'lucide-react';

interface BlogPageProps {
  onNavigate: (page: string, param?: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate }) => {
  const { blogPosts, incrementBlogViews } = useData();
  const [search, setSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('Hammasi');

  const published = blogPosts.filter((p) => p.isPublished);

  // All tags
  const allTags = ['Hammasi', ...Array.from(new Set(published.flatMap((p) => p.tags)))];

  const filteredPosts = published.filter((p) => {
    if (search.trim()) {
      const q = search.toLowerCase();
      if (!p.title.toLowerCase().includes(q) && !p.excerpt.toLowerCase().includes(q)) {
        return false;
      }
    }
    if (selectedTag !== 'Hammasi' && !p.tags.includes(selectedTag)) {
      return false;
    }
    return true;
  });

  const handlePostClick = (slug: string, id: string) => {
    incrementBlogViews(id);
    onNavigate('blog-detail', slug);
  };

  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Maqolalar & Yangiliklar
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            Foydali Maqolalar va <span className="gradient-text">Texnologiya Yangiliklari</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-400">
            Arxitektura, 3D modellashtirish, zamonaviy dasturlash va karyera bo'yicha ekspert maqolalari.
          </p>
        </div>

        {/* Filter / Search bar */}
        <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Maqolalardan qidirish..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700/80 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 outline-none focus:border-indigo-500"
            />
          </div>

          <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedTag === tag
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => handlePostClick(post.slug, post.id)}
              className="rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 backdrop-blur-xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-800">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[11px] font-bold text-indigo-300 border border-slate-700">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span>{post.createdAt}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" />
                      {post.views}
                    </span>
                  </div>

                  <h2 className="font-heading font-bold text-lg text-white group-hover:text-indigo-300 transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {post.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded-md"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Author Footer */}
              <div className="p-6 pt-0 border-t border-slate-800/80 mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src={post.authorAvatar}
                    alt={post.author}
                    className="w-7 h-7 rounded-full object-cover"
                  />
                  <span className="text-xs font-semibold text-slate-300">{post.author}</span>
                </div>
                <div className="text-indigo-400 group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
