import React, { useState } from "react";
import { useData } from "../context/DataContext";
import { BookOpen, Clock, Eye, ArrowRight, Search } from "lucide-react";

interface BlogPageProps {
  onNavigate: (page: string, param?: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate }) => {
  const { blogPosts, incrementBlogViews } = useData();
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState("Hammasi");

  const published = blogPosts.filter((p) => p.isPublished);
  const allTags = ["Hammasi", ...Array.from(new Set(published.flatMap((p) => p.tags)))];

  const filteredPosts = published.filter((p) => {
    if (search.trim()) {
      const q = search.toLowerCase();
      if (!p.title.toLowerCase().includes(q) && !p.excerpt.toLowerCase().includes(q)) return false;
    }
    if (selectedTag !== "Hammasi" && !p.tags.includes(selectedTag)) return false;
    return true;
  });

  const handlePostClick = (slug: string, id: string) => {
    incrementBlogViews(id);
    onNavigate("blog-detail", slug);
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-white text-slate-900">
      <div className="app-container space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Blog</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900">
            Arxitektura va Dizayn Dunyosidan Maqolalar
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Zamonaviy me'morchilik tendensiyalari, BIM texnologiyalari, interyer g'oyalari va qurilish maslahatlari.
          </p>
        </div>

        <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Maqolalardan qidirish..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 outline-none focus:border-slate-400"
            />
          </div>
          <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedTag === tag ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-20 text-slate-400">
            <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p className="text-sm">Hech qanday maqola topilmadi.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => handlePostClick(post.slug, post.id)}
                className="rounded-3xl bg-white border border-slate-200 hover:border-slate-400 shadow-sm overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                    <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold text-slate-800 border border-slate-200 shadow-sm">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <span>{post.createdAt}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5" />{post.views}</span>
                    </div>
                    <h2 className="font-heading font-bold text-lg text-slate-900 group-hover:text-slate-700 transition-colors line-clamp-2">{post.title}</h2>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {post.tags.map((t, idx) => (
                        <span key={idx} className="text-[10px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">#{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img src={post.authorAvatar} alt={post.author} className="w-7 h-7 rounded-full object-cover" />
                    <span className="text-xs font-semibold text-slate-700">{post.author}</span>
                  </div>
                  <div className="text-slate-500 group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
