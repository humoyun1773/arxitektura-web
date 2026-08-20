import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { Course, CourseLevel } from '../../types';
import { 
  Layers, 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  EyeOff, 
  Check, 
  X, 
  Sparkles, 
  Clock, 
  DollarSign, 
  Star 
} from 'lucide-react';

export const CoursesManager: React.FC = () => {
  const { courses, addCourse, updateCourse, deleteCourse, teachers } = useData();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);

  // Form states
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [category, setCategory] = useState<'Arxitektura & 3D' | 'IT & Dasturlash' | 'Grafik Dizayn' | 'Xorijiy Tillar' | 'Raqamli Marketing'>('Arxitektura & 3D');
  const [level, setLevel] = useState<CourseLevel>("O'rta");
  const [durationMonths, setDurationMonths] = useState(6);
  const [lessonsPerWeek, setLessonsPerWeek] = useState(3);
  const [hoursPerLesson, setHoursPerLesson] = useState(2);
  const [price, setPrice] = useState(1800000);
  const [discountPrice, setDiscountPrice] = useState<number | undefined>(1450000);
  const [image, setImage] = useState('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80');
  const [schedule, setSchedule] = useState('Dush - Chor - Juma: 18:30 - 20:30');
  const [shortDescription, setShortDescription] = useState('');
  const [fullDescription, setFullDescription] = useState('');
  const [isPopular, setIsPopular] = useState(true);
  const [isActive, setIsActive] = useState(true);
  const [instructorId, setInstructorId] = useState(teachers[0]?.id || 't1');

  const openCreateModal = () => {
    setEditingCourse(null);
    setTitle('');
    setSlug('');
    setCategory('Arxitektura & 3D');
    setLevel("O'rta");
    setDurationMonths(6);
    setPrice(1500000);
    setDiscountPrice(undefined);
    setShortDescription('');
    setFullDescription('');
    setIsPopular(false);
    setIsActive(true);
    setIsModalOpen(true);
  };

  const openEditModal = (c: Course) => {
    setEditingCourse(c);
    setTitle(c.title);
    setSlug(c.slug);
    setCategory(c.category);
    setLevel(c.level);
    setDurationMonths(c.durationMonths);
    setLessonsPerWeek(c.lessonsPerWeek);
    setHoursPerLesson(c.hoursPerLesson);
    setPrice(c.price);
    setDiscountPrice(c.discountPrice);
    setImage(c.image);
    setSchedule(c.schedule);
    setShortDescription(c.shortDescription);
    setFullDescription(c.fullDescription);
    setIsPopular(c.isPopular);
    setIsActive(c.isActive);
    setInstructorId(c.instructorId);
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const courseSlug = slug.trim() || title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

    if (editingCourse) {
      updateCourse(editingCourse.id, {
        title,
        slug: courseSlug,
        category,
        level,
        durationMonths,
        lessonsPerWeek,
        hoursPerLesson,
        price,
        discountPrice: discountPrice || undefined,
        image,
        schedule,
        shortDescription,
        fullDescription,
        isPopular,
        isActive,
        instructorId
      });
    } else {
      addCourse({
        title,
        slug: courseSlug,
        category,
        level,
        durationMonths,
        lessonsPerWeek,
        hoursPerLesson,
        price,
        discountPrice: discountPrice || undefined,
        image,
        schedule,
        shortDescription,
        fullDescription,
        isPopular,
        isActive,
        instructorId,
        features: [
          '100% amaliyotga yo\'naltirilgan darslar',
          'Rasmiy xalqaro sertifikat',
          'Karyera markazi ko\'magi'
        ],
        requirements: [
          'Kompyuter savodxonligi',
          'Muntazam qatnashish va intilish'
        ],
        syllabus: [
          {
            id: 's_' + Date.now(),
            module: 1,
            title: 'Asosiy Boshlang\'ich Ko\'nikmalar',
            duration: '1-oy',
            topics: ['Kirish va o\'rnatish', 'Baza instrumentlar', 'Dastlabki mini-loyiha']
          }
        ]
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
            <Layers className="w-6 h-6 text-purple-400" />
            <span>Kurslar Boshqaruvi</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Yangi kurs qo'shish, o'quv dasturi va narxlarini sozlash
          </p>
        </div>

        <button
          onClick={openCreateModal}
          className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition-all self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Yangi Kurs Qo'shish</span>
        </button>
      </div>

      {/* Course List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((c) => (
          <div
            key={c.id}
            className="rounded-3xl bg-slate-900/60 border border-slate-800 p-5 space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-800">
                <img src={c.image} alt={c.title} className="w-full h-full object-cover" />
                <div className="absolute top-2 left-2 flex gap-1">
                  <span className="px-2 py-0.5 rounded-md bg-slate-950/80 text-[10px] font-bold text-white">
                    {c.category}
                  </span>
                  {c.isPopular && (
                    <span className="px-2 py-0.5 rounded-md bg-amber-500 text-slate-950 text-[10px] font-extrabold">
                      TOP
                    </span>
                  )}
                </div>

                <div className="absolute top-2 right-2">
                  <button
                    onClick={() => updateCourse(c.id, { isActive: !c.isActive })}
                    className={`p-1.5 rounded-lg text-xs font-bold flex items-center gap-1 ${
                      c.isActive ? 'bg-emerald-500/80 text-white' : 'bg-rose-500/80 text-white'
                    }`}
                    title={c.isActive ? 'Kurs faol' : 'Kurs nofaol'}
                  >
                    {c.isActive ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div>
                <h3 className="font-heading font-bold text-sm text-white line-clamp-1">
                  {c.title}
                </h3>
                <div className="text-xs text-indigo-400 font-medium mt-0.5">
                  {c.durationMonths} oy • {c.level}
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400">Oylik to'lov:</span>
                <span className="font-bold text-emerald-400 font-mono">
                  {c.discountPrice ? `${c.discountPrice.toLocaleString('uz-UZ')} so'm` : `${c.price.toLocaleString('uz-UZ')} so'm`}
                </span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between gap-2">
              <button
                onClick={() => openEditModal(c)}
                className="flex-1 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <Edit className="w-3.5 h-3.5" />
                <span>Tahrirlash</span>
              </button>
              <button
                onClick={() => {
                  if (confirm('Ushbu kursni butunlay o\'chirishni xohlaysizmi?')) {
                    deleteCourse(c.id);
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

      {/* Modal for Add / Edit */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
          <div className="w-full max-w-2xl rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl space-y-6 my-8">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold font-heading text-white">
                {editingCourse ? 'Kursni Tahrirlash' : 'Yangi Kurs Qo\'shish'}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 max-h-[75vh] overflow-y-auto pr-2">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Kurs Nomi *
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Masalan: 3Ds Max & Corona Visualizatsiya"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none focus:border-indigo-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Kategoriya
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as any)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none"
                  >
                    <option value="Arxitektura & 3D">Arxitektura & 3D</option>
                    <option value="IT & Dasturlash">IT & Dasturlash</option>
                    <option value="Grafik Dizayn">Grafik Dizayn</option>
                    <option value="Xorijiy Tillar">Xorijiy Tillar</option>
                    <option value="Raqamli Marketing">Raqamli Marketing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Daraja
                  </label>
                  <select
                    value={level}
                    onChange={(e) => setLevel(e.target.value as any)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none"
                  >
                    <option value="Boshlang'ich">Boshlang'ich</option>
                    <option value="O'rta">O'rta</option>
                    <option value="Mukammal">Mukammal</option>
                    <option value="Barcha darajalar">Barcha darajalar</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Davomiyligi (oy)
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={24}
                    value={durationMonths}
                    onChange={(e) => setDurationMonths(Number(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Asl Narxi (so'm/oy)
                  </label>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Chegirmali Narx (so'm/oy)
                  </label>
                  <input
                    type="number"
                    placeholder="Ixtiyoriy"
                    value={discountPrice || ''}
                    onChange={(e) => setDiscountPrice(e.target.value ? Number(e.target.value) : undefined)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Muqova Rasmi (URL)
                </label>
                <input
                  type="url"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Dars Jadvali (kunlar/soatlar)
                </label>
                <input
                  type="text"
                  value={schedule}
                  onChange={(e) => setSchedule(e.target.value)}
                  placeholder="Dush - Chor - Juma: 18:30 - 20:30"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Qisqa Tavsif (Kartochkalar uchun)
                </label>
                <textarea
                  rows={2}
                  value={shortDescription}
                  onChange={(e) => setShortDescription(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  To'liq Tavsif
                </label>
                <textarea
                  rows={4}
                  value={fullDescription}
                  onChange={(e) => setFullDescription(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white outline-none resize-none"
                />
              </div>

              <div className="flex items-center gap-6 pt-2">
                <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isPopular}
                    onChange={(e) => setIsPopular(e.target.checked)}
                    className="w-4 h-4 rounded bg-slate-950 border-slate-700 text-indigo-600"
                  />
                  <span>TOP / Ommabop kurs sifatida belgilash</span>
                </label>

                <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isActive}
                    onChange={(e) => setIsActive(e.target.checked)}
                    className="w-4 h-4 rounded bg-slate-950 border-slate-700 text-indigo-600"
                  />
                  <span>Saytda ko'rsatish (Faol)</span>
                </label>
              </div>

              <div className="flex gap-3 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-3 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold"
                >
                  Bekor qilish
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold"
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
