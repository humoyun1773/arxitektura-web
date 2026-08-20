import React, { useState } from "react";
import { useData } from "../context/DataContext";
import { Building2, Ruler, Layers, MapPin, Calendar, ArrowLeft, CheckCircle2, Maximize2, X, User, Phone, ArrowRight } from "lucide-react";

interface ProjectDetailPageProps {
  slug: string;
  onNavigate: (page: string, param?: string) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ slug, onNavigate }) => {
  const { projects, architects, openLeadModal } = useData();

  const project = projects.find(p => p.slug === slug) || projects[0];
  const architect = architects.find(a => a.id === project?.leadArchitectId) || architects[0];

  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [activeFloorIndex, setActiveFloorIndex] = useState<number>(0);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  if (!project) {
    return (
      <div className="pt-32 pb-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Loyiha topilmadi</h2>
        <button onClick={() => onNavigate("projects")} className="px-6 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold cursor-pointer">
          Barcha loyihalarga qaytish
        </button>
      </div>
    );
  }

  const allImages = [project.coverImage, ...project.gallery];
  const relatedProjects = projects.filter(p => p.id !== project.id && p.category === project.category).slice(0, 3);

  return (
    <div className="pt-28 pb-20 bg-slate-50/50 min-h-screen">
      <div className="app-container space-y-10">

        {/* Breadcrumb */}
        <div className="flex items-center justify-between">
          <button onClick={() => onNavigate("projects")} className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-semibold text-xs transition-colors cursor-pointer">
            <ArrowLeft className="w-4 h-4" /> Barcha Loyihalar
          </button>
          <span className="text-xs px-3 py-1 rounded-full bg-slate-900 text-white font-bold">{project.category}</span>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Gallery */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-slate-200 cursor-pointer group" onClick={() => setFullscreenImage(allImages[activeImageIndex])}>
              <img src={allImages[activeImageIndex]} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                <Maximize2 className="w-3.5 h-3.5" /> Kattalashtirish
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {allImages.slice(0, 8).map((img, i) => (
                <button key={i} onClick={() => setActiveImageIndex(i)} className={`rounded-2xl overflow-hidden aspect-square cursor-pointer border-2 transition-all ${activeImageIndex === i ? "border-slate-900" : "border-transparent hover:border-slate-400"}`}>
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">{project.title}</h1>
              <p className="text-sm text-slate-600 leading-relaxed">{project.shortDescription}</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Ruler, label: "Maydon", value: `${project.areaM2.toLocaleString()} m²` },
                { icon: Layers, label: "Qavatlar", value: `${project.floorsCount} qavat` },
                { icon: MapPin, label: "Joylashuv", value: project.location },
                { icon: Calendar, label: "Tugallangan", value: `${project.year}-yil` },
              ].map((stat, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                    <stat.icon className="w-3.5 h-3.5" />
                    <span>{stat.label}</span>
                  </div>
                  <div className="font-heading font-bold text-sm text-slate-900">{stat.value}</div>
                </div>
              ))}
            </div>

            {/* Style badge */}
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-full bg-slate-900 text-white text-xs font-semibold">{project.style}</span>
              <span className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">{project.durationMonths} oy muddat</span>
            </div>

            {/* Features */}
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-wide text-slate-500">Loyiha xususiyatlari:</div>
              <div className="space-y-1.5">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    {feat}
                  </div>
                ))}
              </div>
            </div>

            {/* Architect card */}
            {architect && (
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-4">
                <img src={architect.avatar} alt={architect.name} className="w-14 h-14 rounded-2xl object-cover border border-slate-200" />
                <div className="flex-1 min-w-0">
                  <div className="font-heading font-bold text-sm text-slate-900">{architect.name}</div>
                  <div className="text-xs text-slate-500">{architect.role}</div>
                </div>
                <button onClick={() => openLeadModal(project)} className="px-3 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl cursor-pointer">
                  Bog'lanish
                </button>
              </div>
            )}

            <button onClick={() => openLeadModal(project)} className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-2xl shadow-lg flex items-center justify-center gap-2 transition-colors cursor-pointer">
              <Building2 className="w-4 h-4" />
              Shunga O'xshash Loyiha Buyurtma Qilish
            </button>
          </div>
        </div>

        {/* Full Description */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 space-y-4">
          <h2 className="font-heading font-bold text-xl text-slate-900">Loyiha Haqida Batafsil</h2>
          <p className="text-sm text-slate-600 leading-relaxed">{project.fullDescription}</p>
        </div>

        {/* Floor Plans */}
        {project.floorPlans && project.floorPlans.length > 0 && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 space-y-6">
            <h2 className="font-heading font-bold text-xl text-slate-900">Qavat Planirovkalari</h2>
            <div className="flex gap-2 flex-wrap">
              {project.floorPlans.map((fp, idx) => (
                <button key={idx} onClick={() => setActiveFloorIndex(idx)} className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeFloorIndex === idx ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}>
                  {fp.title}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100">
                <img src={project.floorPlans[activeFloorIndex].image} alt={project.floorPlans[activeFloorIndex].title} className="w-full h-full object-cover" />
              </div>
              <div className="space-y-3">
                <div className="font-heading font-bold text-lg text-slate-900">{project.floorPlans[activeFloorIndex].title}</div>
                <div className="text-sm text-slate-600">Umumiy maydon: <strong>{project.floorPlans[activeFloorIndex].area} m²</strong></div>
                <div className="space-y-2">
                  {project.floorPlans[activeFloorIndex].rooms.map((room, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      {room}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="space-y-6">
            <h2 className="font-heading font-bold text-xl text-slate-900">O'xshash Loyihalar</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map(rel => (
                <div key={rel.id} onClick={() => onNavigate("project-detail", rel.slug)} className="rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                    <img src={rel.coverImage} alt={rel.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5 space-y-2">
                    <h3 className="font-heading font-bold text-sm text-slate-900 line-clamp-1">{rel.title}</h3>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <MapPin className="w-3 h-3" />{rel.location}
                    </div>
                    <div className="text-xs font-bold text-slate-700">{rel.areaM2.toLocaleString()} m² • {rel.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Fullscreen Lightbox */}
      {fullscreenImage && (
        <div className="fixed inset-0 z-[999] bg-black/95 flex items-center justify-center p-4" onClick={() => setFullscreenImage(null)}>
          <button className="absolute top-4 right-4 text-white p-2 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer"><X className="w-6 h-6" /></button>
          <img src={fullscreenImage} alt="" className="max-w-full max-h-full rounded-2xl object-contain" onClick={e => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
};
