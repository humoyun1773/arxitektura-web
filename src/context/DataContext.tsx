import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  Course,
  Teacher,
  Lead,
  Review,
  BlogPost,
  Student,
  HeroBanner,
  SiteSettings,
  LeadStatus
} from '../types';
import {
  initialCourses,
  initialTeachers,
  initialLeads,
  initialReviews,
  initialBlogPosts,
  initialStudents,
  initialBanners,
  initialSiteSettings
} from '../data/initialData';

interface DataContextType {
  courses: Course[];
  teachers: Teacher[];
  leads: Lead[];
  reviews: Review[];
  blogPosts: BlogPost[];
  students: Student[];
  banners: HeroBanner[];
  settings: SiteSettings;
  
  // Courses CRUD
  addCourse: (course: Omit<Course, 'id' | 'rating' | 'reviewsCount' | 'studentsCount'>) => void;
  updateCourse: (id: string, course: Partial<Course>) => void;
  deleteCourse: (id: string) => void;
  getCourseById: (id: string) => Course | undefined;
  getCourseBySlug: (slug: string) => Course | undefined;

  // Teachers CRUD
  addTeacher: (teacher: Omit<Teacher, 'id' | 'rating' | 'studentsTaught'>) => void;
  updateTeacher: (id: string, teacher: Partial<Teacher>) => void;
  deleteTeacher: (id: string) => void;
  getTeacherById: (id: string) => Teacher | undefined;

  // Leads CRUD
  submitLead: (lead: { fullName: string; phone: string; courseId?: string; courseTitle?: string; source: string }) => Promise<boolean>;
  updateLeadStatus: (id: string, status: LeadStatus, notes?: string) => void;
  updateLeadNotes: (id: string, notes: string) => void;
  deleteLead: (id: string) => void;
  exportLeadsToCSV: () => void;

  // Reviews CRUD
  addReview: (review: Omit<Review, 'id' | 'date' | 'isApproved'>) => void;
  toggleReviewApproval: (id: string) => void;
  deleteReview: (id: string) => void;

  // Blog CRUD
  addBlogPost: (post: Omit<BlogPost, 'id' | 'createdAt' | 'views'>) => void;
  updateBlogPost: (id: string, post: Partial<BlogPost>) => void;
  deleteBlogPost: (id: string) => void;
  incrementBlogViews: (id: string) => void;

  // Students CRUD
  addStudent: (student: Omit<Student, 'id' | 'joinedAt'>) => void;
  updateStudent: (id: string, student: Partial<Student>) => void;
  deleteStudent: (id: string) => void;

  // Banners CRUD
  updateBanner: (id: string, banner: Partial<HeroBanner>) => void;
  addBanner: (banner: Omit<HeroBanner, 'id'>) => void;
  deleteBanner: (id: string) => void;

  // Settings
  updateSettings: (newSettings: Partial<SiteSettings>) => void;

  // Modal helper
  isLeadModalOpen: boolean;
  selectedCourseForModal: Course | null;
  openLeadModal: (course?: Course) => void;
  closeLeadModal: () => void;
  
  // Toast notification system
  toast: { message: string; type: 'success' | 'error' | 'info' } | null;
  showToast: (message: string, type?: 'success' | 'error' | 'info') => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

function getSaved<T>(key: string, fallback: T): T {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch {
    return fallback;
  }
}

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [courses, setCourses] = useState<Course[]>(() => getSaved('termeziy_courses_v2', initialCourses));
  const [teachers, setTeachers] = useState<Teacher[]>(() => getSaved('termeziy_teachers_v2', initialTeachers));
  const [leads, setLeads] = useState<Lead[]>(() => getSaved('termeziy_leads_v2', initialLeads));
  const [reviews, setReviews] = useState<Review[]>(() => getSaved('termeziy_reviews_v2', initialReviews));
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(() => getSaved('termeziy_blogs_v2', initialBlogPosts));
  const [students, setStudents] = useState<Student[]>(() => getSaved('termeziy_students_v2', initialStudents));
  const [banners, setBanners] = useState<HeroBanner[]>(() => getSaved('termeziy_banners_v2', initialBanners));
  const [settings, setSettings] = useState<SiteSettings>(() => getSaved('termeziy_settings_v2', initialSiteSettings));

  // Modal & Toast
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [selectedCourseForModal, setSelectedCourseForModal] = useState<Course | null>(null);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);

  // Sync to LocalStorage
  useEffect(() => { localStorage.setItem('termeziy_courses_v2', JSON.stringify(courses)); }, [courses]);
  useEffect(() => { localStorage.setItem('termeziy_teachers_v2', JSON.stringify(teachers)); }, [teachers]);
  useEffect(() => { localStorage.setItem('termeziy_leads_v2', JSON.stringify(leads)); }, [leads]);
  useEffect(() => { localStorage.setItem('termeziy_reviews_v2', JSON.stringify(reviews)); }, [reviews]);
  useEffect(() => { localStorage.setItem('termeziy_blogs_v2', JSON.stringify(blogPosts)); }, [blogPosts]);
  useEffect(() => { localStorage.setItem('termeziy_students_v2', JSON.stringify(students)); }, [students]);
  useEffect(() => { localStorage.setItem('termeziy_banners_v2', JSON.stringify(banners)); }, [banners]);
  useEffect(() => { localStorage.setItem('termeziy_settings_v2', JSON.stringify(settings)); }, [settings]);

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  const openLeadModal = (course?: Course) => {
    setSelectedCourseForModal(course || null);
    setIsLeadModalOpen(true);
  };

  const closeLeadModal = () => {
    setIsLeadModalOpen(false);
    setSelectedCourseForModal(null);
  };

  // Courses
  const addCourse = (courseData: Omit<Course, 'id' | 'rating' | 'reviewsCount' | 'studentsCount'>) => {
    const newCourse: Course = {
      ...courseData,
      id: 'c_' + Date.now(),
      rating: 5.0,
      reviewsCount: 0,
      studentsCount: 0
    };
    setCourses((prev) => [newCourse, ...prev]);
    showToast('Yangi kurs muvaffaqiyatli qo\'shildi!', 'success');
  };

  const updateCourse = (id: string, updatedFields: Partial<Course>) => {
    setCourses((prev) => prev.map((c) => (c.id === id ? { ...c, ...updatedFields } : c)));
    showToast('Kurs ma\'lumotlari yangilandi', 'info');
  };

  const deleteCourse = (id: string) => {
    setCourses((prev) => prev.filter((c) => c.id !== id));
    showToast('Kurs o\'chirildi', 'error');
  };

  const getCourseById = (id: string) => courses.find((c) => c.id === id);
  const getCourseBySlug = (slug: string) => courses.find((c) => c.slug === slug);

  // Teachers
  const addTeacher = (teacherData: Omit<Teacher, 'id' | 'rating' | 'studentsTaught'>) => {
    const newTeacher: Teacher = {
      ...teacherData,
      id: 't_' + Date.now(),
      rating: 5.0,
      studentsTaught: 0
    };
    setTeachers((prev) => [newTeacher, ...prev]);
    showToast('O\'qituvchi muvaffaqiyatli qo\'shildi', 'success');
  };

  const updateTeacher = (id: string, updatedFields: Partial<Teacher>) => {
    setTeachers((prev) => prev.map((t) => (t.id === id ? { ...t, ...updatedFields } : t)));
    showToast('O\'qituvchi ma\'lumotlari yangilandi', 'info');
  };

  const deleteTeacher = (id: string) => {
    setTeachers((prev) => prev.filter((t) => t.id !== id));
    showToast('O\'qituvchi o\'chirildi', 'error');
  };

  const getTeacherById = (id: string) => teachers.find((t) => t.id === id);

  // Leads
  const submitLead = async (leadData: {
    fullName: string;
    phone: string;
    courseId?: string;
    courseTitle?: string;
    source: string;
  }): Promise<boolean> => {
    const newLead: Lead = {
      id: 'l_' + Date.now(),
      fullName: leadData.fullName,
      phone: leadData.phone,
      courseId: leadData.courseId,
      courseTitle: leadData.courseTitle || 'Umumiy konsultatsiya',
      source: leadData.source,
      status: 'new',
      notes: 'Sayt orqali yuborildi',
      createdAt: new Date().toLocaleString('uz-UZ')
    };

    setLeads((prev) => [newLead, ...prev]);

    // Shoot confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }

    showToast('Arizangiz qabul qilindi! Menejerimiz tez orada siz bilan bog\'lanadi.', 'success');
    return true;
  };

  const updateLeadStatus = (id: string, status: LeadStatus, notes?: string) => {
    setLeads((prev) =>
      prev.map((l) => (l.id === id ? { ...l, status, ...(notes !== undefined ? { notes } : {}) } : l))
    );
    showToast('Ariza holati yangilandi', 'info');
  };

  const updateLeadNotes = (id: string, notes: string) => {
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, notes } : l)));
  };

  const deleteLead = (id: string) => {
    setLeads((prev) => prev.filter((l) => l.id !== id));
    showToast('Ariza o\'chirildi', 'error');
  };

  const exportLeadsToCSV = () => {
    const headers = ['ID', 'F.I.SH', 'Telefon', 'Kurs', 'Manba', 'Holat', 'Izoh', 'Sana'];
    const rows = leads.map((l) => [
      l.id,
      `"${l.fullName}"`,
      `"${l.phone}"`,
      `"${l.courseTitle || ''}"`,
      `"${l.source}"`,
      `"${l.status}"`,
      `"${l.notes || ''}"`,
      `"${l.createdAt}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Arizalar_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Arizalar ro\'yxati CSV formatida yuklab olindi', 'success');
  };

  // Reviews
  const addReview = (reviewData: Omit<Review, 'id' | 'date' | 'isApproved'>) => {
    const newRev: Review = {
      ...reviewData,
      id: 'r_' + Date.now(),
      date: new Date().toLocaleDateString('uz-UZ'),
      isApproved: false // Requires admin moderation
    };
    setReviews((prev) => [newRev, ...prev]);
    showToast('Fikringiz uchun rahmat! Moderator tekshiruvidan so\'ng saytda e\'lon qilinadi.', 'success');
  };

  const toggleReviewApproval = (id: string) => {
    setReviews((prev) =>
      prev.map((r) => (r.id === id ? { ...r, isApproved: !r.isApproved } : r))
    );
    showToast('Otziv holati o\'zgartirildi', 'info');
  };

  const deleteReview = (id: string) => {
    setReviews((prev) => prev.filter((r) => r.id !== id));
    showToast('Otziv o\'chirildi', 'error');
  };

  // Blog
  const addBlogPost = (postData: Omit<BlogPost, 'id' | 'createdAt' | 'views'>) => {
    const newPost: BlogPost = {
      ...postData,
      id: 'p_' + Date.now(),
      createdAt: new Date().toLocaleDateString('uz-UZ', { day: 'numeric', month: 'long', year: 'numeric' }),
      views: 0
    };
    setBlogPosts((prev) => [newPost, ...prev]);
    showToast('Yangi maqola joylandi!', 'success');
  };

  const updateBlogPost = (id: string, updatedFields: Partial<BlogPost>) => {
    setBlogPosts((prev) => prev.map((p) => (p.id === id ? { ...p, ...updatedFields } : p)));
    showToast('Maqola yangilandi', 'info');
  };

  const deleteBlogPost = (id: string) => {
    setBlogPosts((prev) => prev.filter((p) => p.id !== id));
    showToast('Maqola o\'chirildi', 'error');
  };

  const incrementBlogViews = (id: string) => {
    setBlogPosts((prev) => prev.map((p) => (p.id === id ? { ...p, views: p.views + 1 } : p)));
  };

  // Students CRM
  const addStudent = (studentData: Omit<Student, 'id' | 'joinedAt'>) => {
    const newSt: Student = {
      ...studentData,
      id: 'st_' + Date.now(),
      joinedAt: new Date().toISOString().slice(0, 10)
    };
    setStudents((prev) => [newSt, ...prev]);
    showToast('O\'quvchi CRM bazasiga qo\'shildi', 'success');
  };

  const updateStudent = (id: string, updatedFields: Partial<Student>) => {
    setStudents((prev) => prev.map((s) => (s.id === id ? { ...s, ...updatedFields } : s)));
    showToast('O\'quvchi ma\'lumotlari yangilandi', 'info');
  };

  const deleteStudent = (id: string) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
    showToast('O\'quvchi o\'chirildi', 'error');
  };

  // Banners
  const updateBanner = (id: string, bannerData: Partial<HeroBanner>) => {
    setBanners((prev) => prev.map((b) => (b.id === id ? { ...b, ...bannerData } : b)));
    showToast('Banner sozlamalari yangilandi', 'info');
  };

  const addBanner = (bannerData: Omit<HeroBanner, 'id'>) => {
    const newB: HeroBanner = {
      ...bannerData,
      id: 'b_' + Date.now()
    };
    setBanners((prev) => [...prev, newB]);
    showToast('Yangi banner qo\'shildi', 'success');
  };

  const deleteBanner = (id: string) => {
    setBanners((prev) => prev.filter((b) => b.id !== id));
    showToast('Banner o\'chirildi', 'error');
  };

  // Settings
  const updateSettings = (newSettings: Partial<SiteSettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
    showToast('Tizim sozlamalari saqlandi!', 'success');
  };

  return (
    <DataContext.Provider
      value={{
        courses,
        teachers,
        leads,
        reviews,
        blogPosts,
        students,
        banners,
        settings,
        addCourse,
        updateCourse,
        deleteCourse,
        getCourseById,
        getCourseBySlug,
        addTeacher,
        updateTeacher,
        deleteTeacher,
        getTeacherById,
        submitLead,
        updateLeadStatus,
        updateLeadNotes,
        deleteLead,
        exportLeadsToCSV,
        addReview,
        toggleReviewApproval,
        deleteReview,
        addBlogPost,
        updateBlogPost,
        deleteBlogPost,
        incrementBlogViews,
        addStudent,
        updateStudent,
        deleteStudent,
        updateBanner,
        addBanner,
        deleteBanner,
        updateSettings,
        isLeadModalOpen,
        selectedCourseForModal,
        openLeadModal,
        closeLeadModal,
        toast,
        showToast
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
