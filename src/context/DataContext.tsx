import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  Project,
  Architect,
  Service,
  Lead,
  Review,
  BlogPost,
  HeroBanner,
  SiteSettings,
  LeadStatus
} from '../types';
import {
  initialProjects,
  initialArchitects,
  initialServices,
  initialLeads,
  initialReviews,
  initialBlogPosts,
  initialBanners,
  initialSiteSettings
} from '../data/initialData';

interface DataContextType {
  projects: Project[];
  architects: Architect[];
  services: Service[];
  leads: Lead[];
  reviews: Review[];
  blogPosts: BlogPost[];
  banners: HeroBanner[];
  settings: SiteSettings;
  
  // Projects CRUD
  addProject: (project: Omit<Project, 'id'>) => void;
  updateProject: (id: string, project: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  getProjectById: (id: string) => Project | undefined;
  getProjectBySlug: (slug: string) => Project | undefined;

  // Architects CRUD
  addArchitect: (architect: Omit<Architect, 'id' | 'rating' | 'projectsCompleted'>) => void;
  updateArchitect: (id: string, architect: Partial<Architect>) => void;
  deleteArchitect: (id: string) => void;
  getArchitectById: (id: string) => Architect | undefined;

  // Services CRUD
  addService: (service: Omit<Service, 'id'>) => void;
  updateService: (id: string, service: Partial<Service>) => void;
  deleteService: (id: string) => void;
  getServiceBySlug: (slug: string) => Service | undefined;

  // Leads CRM
  submitLead: (lead: { 
    fullName: string; 
    phone: string; 
    projectId?: string; 
    projectTitle?: string; 
    serviceType?: string; 
    estimatedAreaM2?: number; 
    source: string; 
    notes?: string; 
  }) => Promise<boolean>;
  updateLeadStatus: (id: string, status: LeadStatus, notes?: string) => void;
  updateLeadNotes: (id: string, notes: string) => void;
  deleteLead: (id: string) => void;
  exportLeadsToCSV: () => void;

  // Reviews
  addReview: (review: Omit<Review, 'id' | 'date' | 'isApproved'>) => void;
  toggleReviewApproval: (id: string) => void;
  deleteReview: (id: string) => void;

  // Blog
  addBlogPost: (post: Omit<BlogPost, 'id' | 'createdAt' | 'views'>) => void;
  updateBlogPost: (id: string, post: Partial<BlogPost>) => void;
  deleteBlogPost: (id: string) => void;
  incrementBlogViews: (id: string) => void;

  // Banners
  updateBanner: (id: string, banner: Partial<HeroBanner>) => void;
  addBanner: (banner: Omit<HeroBanner, 'id'>) => void;
  deleteBanner: (id: string) => void;

  // Settings
  updateSettings: (newSettings: Partial<SiteSettings>) => void;

  // Modal helper
  isLeadModalOpen: boolean;
  selectedProjectForModal: Project | null;
  selectedServiceForModal: Service | null;
  openLeadModal: (project?: Project, service?: Service) => void;
  closeLeadModal: () => void;
  
  // Toast notification
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
  const [projects, setProjects] = useState<Project[]>(() => getSaved('arxitektura_projects_v1', initialProjects));
  const [architects, setArchitects] = useState<Architect[]>(() => getSaved('arxitektura_architects_v1', initialArchitects));
  const [services, setServices] = useState<Service[]>(() => getSaved('arxitektura_services_v1', initialServices));
  const [leads, setLeads] = useState<Lead[]>(() => getSaved('arxitektura_leads_v1', initialLeads));
  const [reviews, setReviews] = useState<Review[]>(() => getSaved('arxitektura_reviews_v1', initialReviews));
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(() => getSaved('arxitektura_blogs_v1', initialBlogPosts));
  const [banners, setBanners] = useState<HeroBanner[]>(() => getSaved('arxitektura_banners_v1', initialBanners));
  const [settings, setSettings] = useState<SiteSettings>(() => getSaved('arxitektura_settings_v1', initialSiteSettings));

  // Modal & Toast
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [selectedProjectForModal, setSelectedProjectForModal] = useState<Project | null>(null);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<Service | null>(null);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);

  // Sync to LocalStorage
  useEffect(() => { localStorage.setItem('arxitektura_projects_v1', JSON.stringify(projects)); }, [projects]);
  useEffect(() => { localStorage.setItem('arxitektura_architects_v1', JSON.stringify(architects)); }, [architects]);
  useEffect(() => { localStorage.setItem('arxitektura_services_v1', JSON.stringify(services)); }, [services]);
  useEffect(() => { localStorage.setItem('arxitektura_leads_v1', JSON.stringify(leads)); }, [leads]);
  useEffect(() => { localStorage.setItem('arxitektura_reviews_v1', JSON.stringify(reviews)); }, [reviews]);
  useEffect(() => { localStorage.setItem('arxitektura_blogs_v1', JSON.stringify(blogPosts)); }, [blogPosts]);
  useEffect(() => { localStorage.setItem('arxitektura_banners_v1', JSON.stringify(banners)); }, [banners]);
  useEffect(() => { localStorage.setItem('arxitektura_settings_v1', JSON.stringify(settings)); }, [settings]);

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  const openLeadModal = (project?: Project, service?: Service) => {
    setSelectedProjectForModal(project || null);
    setSelectedServiceForModal(service || null);
    setIsLeadModalOpen(true);
  };

  const closeLeadModal = () => {
    setIsLeadModalOpen(false);
    setSelectedProjectForModal(null);
    setSelectedServiceForModal(null);
  };

  // Projects CRUD
  const addProject = (projectData: Omit<Project, 'id'>) => {
    const newProject: Project = {
      ...projectData,
      id: 'proj_' + Date.now()
    };
    setProjects(prev => [newProject, ...prev]);
    showToast('Yangi loyiha muvaffaqiyatli qo\'shildi!', 'success');
  };

  const updateProject = (id: string, updatedFields: Partial<Project>) => {
    setProjects(prev => prev.map(p => p.id === id ? { ...p, ...updatedFields } : p));
    showToast('Loyiha ma\'lumotlari yangilandi', 'info');
  };

  const deleteProject = (id: string) => {
    setProjects(prev => prev.filter(p => p.id !== id));
    showToast('Loyiha o\'chirildi', 'info');
  };

  const getProjectById = (id: string) => projects.find(p => p.id === id);
  const getProjectBySlug = (slug: string) => projects.find(p => p.slug === slug);

  // Architects CRUD
  const addArchitect = (architectData: Omit<Architect, 'id' | 'rating' | 'projectsCompleted'>) => {
    const newArchitect: Architect = {
      ...architectData,
      id: 'arch_' + Date.now(),
      rating: 5.0,
      projectsCompleted: 0
    };
    setArchitects(prev => [...prev, newArchitect]);
    showToast('Yangi arxitektor/dizayner qo\'shildi!', 'success');
  };

  const updateArchitect = (id: string, updatedFields: Partial<Architect>) => {
    setArchitects(prev => prev.map(a => a.id === id ? { ...a, ...updatedFields } : a));
    showToast('Mutaxassis ma\'lumotlari yangilandi', 'info');
  };

  const deleteArchitect = (id: string) => {
    setArchitects(prev => prev.filter(a => a.id !== id));
    showToast('Mutaxassis o\'chirildi', 'info');
  };

  const getArchitectById = (id: string) => architects.find(a => a.id === id);

  // Services CRUD
  const addService = (serviceData: Omit<Service, 'id'>) => {
    const newService: Service = {
      ...serviceData,
      id: 'serv_' + Date.now()
    };
    setServices(prev => [...prev, newService]);
    showToast('Yangi xizmat qo\'shildi!', 'success');
  };

  const updateService = (id: string, updatedFields: Partial<Service>) => {
    setServices(prev => prev.map(s => s.id === id ? { ...s, ...updatedFields } : s));
    showToast('Xizmat ma\'lumotlari yangilandi', 'info');
  };

  const deleteService = (id: string) => {
    setServices(prev => prev.filter(s => s.id !== id));
    showToast('Xizmat o\'chirildi', 'info');
  };

  const getServiceBySlug = (slug: string) => services.find(s => s.slug === slug);

  // Leads CRM
  const submitLead = async (leadData: { 
    fullName: string; 
    phone: string; 
    projectId?: string; 
    projectTitle?: string; 
    serviceType?: string; 
    estimatedAreaM2?: number; 
    source: string; 
    notes?: string; 
  }): Promise<boolean> => {
    try {
      const newLead: Lead = {
        id: 'lead_' + Date.now(),
        fullName: leadData.fullName,
        phone: leadData.phone,
        projectId: leadData.projectId,
        projectTitle: leadData.projectTitle,
        serviceType: leadData.serviceType,
        estimatedAreaM2: leadData.estimatedAreaM2,
        source: leadData.source,
        status: 'new',
        notes: leadData.notes || '',
        createdAt: new Date().toLocaleString('uz-UZ')
      };

      setLeads(prev => [newLead, ...prev]);

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {}

      showToast('Arizangiz muvaffaqiyatli qabul qilindi! Tez orada bosh arxitektorimiz siz bilan bog\'lanadi.', 'success');
      return true;
    } catch {
      showToast('Xatolik yuz berdi. Iltimos qaytadan urinib ko\'ring yoki to\'g\'ridan-to\'g\'ri qo\'ng\'iroq qiling.', 'error');
      return false;
    }
  };

  const updateLeadStatus = (id: string, status: LeadStatus, notes?: string) => {
    setLeads(prev => prev.map(lead => {
      if (lead.id === id) {
        return {
          ...lead,
          status,
          ...(notes !== undefined ? { notes } : {})
        };
      }
      return lead;
    }));
    showToast('Loyiha buyurtmasi holati yangilandi', 'info');
  };

  const updateLeadNotes = (id: string, notes: string) => {
    setLeads(prev => prev.map(lead => lead.id === id ? { ...lead, notes } : lead));
    showToast('Izoh saqlandi', 'info');
  };

  const deleteLead = (id: string) => {
    setLeads(prev => prev.filter(lead => lead.id !== id));
    showToast('Buyurtma o\'chirildi', 'info');
  };

  const exportLeadsToCSV = () => {
    if (leads.length === 0) {
      showToast('Eksport qilish uchun buyurtmalar mavjud emas', 'info');
      return;
    }
    const headers = ['ID', 'FIO', 'Telefon', 'Loyiha / Xizmat', 'Maydon (m2)', 'Manba', 'Holat', 'Yaratilgan sana', 'Izoh'];
    const rows = leads.map(l => [
      l.id,
      `"${l.fullName}"`,
      `"${l.phone}"`,
      `"${l.projectTitle || l.serviceType || 'Umumiy konsultatsiya'}"`,
      l.estimatedAreaM2 || '-',
      `"${l.source}"`,
      l.status,
      `"${l.createdAt}"`,
      `"${l.notes || ''}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `arxitektura_buyurtmalar_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('CSV fayl muvaffaqiyatli yuklab olindi', 'success');
  };

  // Reviews CRUD
  const addReview = (reviewData: Omit<Review, 'id' | 'date' | 'isApproved'>) => {
    const avatars = [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
    ];
    const newReview: Review = {
      ...reviewData,
      avatar: reviewData.avatar || avatars[Math.floor(Math.random() * avatars.length)],
      id: 'rev_' + Date.now(),
      date: new Date().toLocaleDateString('uz-UZ'),
      isApproved: true
    };
    setReviews(prev => [newReview, ...prev]);

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch {}

    showToast('Fikringiz muvaffaqiyatli qabul qilindi va e\'lon qilindi! Rahmat!', 'success');
  };

  const toggleReviewApproval = (id: string) => {
    setReviews(prev => prev.map(r => r.id === id ? { ...r, isApproved: !r.isApproved } : r));
    showToast('Sharh holati o\'zgartirildi', 'info');
  };

  const deleteReview = (id: string) => {
    setReviews(prev => prev.filter(r => r.id !== id));
    showToast('Sharh o\'chirildi', 'info');
  };

  // Blog CRUD
  const addBlogPost = (postData: Omit<BlogPost, 'id' | 'createdAt' | 'views'>) => {
    const newPost: BlogPost = {
      ...postData,
      id: 'blog_' + Date.now(),
      createdAt: new Date().toLocaleDateString('uz-UZ'),
      views: 0
    };
    setBlogPosts(prev => [newPost, ...prev]);
    showToast('Yangi maqola e\'lon qilindi!', 'success');
  };

  const updateBlogPost = (id: string, updatedFields: Partial<BlogPost>) => {
    setBlogPosts(prev => prev.map(p => p.id === id ? { ...p, ...updatedFields } : p));
    showToast('Maqola yangilandi', 'info');
  };

  const deleteBlogPost = (id: string) => {
    setBlogPosts(prev => prev.filter(p => p.id !== id));
    showToast('Maqola o\'chirildi', 'info');
  };

  const incrementBlogViews = (id: string) => {
    setBlogPosts(prev => prev.map(p => p.id === id ? { ...p, views: p.views + 1 } : p));
  };

  // Banners CRUD
  const updateBanner = (id: string, bannerData: Partial<HeroBanner>) => {
    setBanners(prev => prev.map(b => b.id === id ? { ...b, ...bannerData } : b));
    showToast('Banner yangilandi', 'info');
  };

  const addBanner = (bannerData: Omit<HeroBanner, 'id'>) => {
    const newBanner: HeroBanner = {
      ...bannerData,
      id: 'b_' + Date.now()
    };
    setBanners(prev => [...prev, newBanner]);
    showToast('Yangi banner qo\'shildi', 'success');
  };

  const deleteBanner = (id: string) => {
    setBanners(prev => prev.filter(b => b.id !== id));
    showToast('Banner o\'chirildi', 'info');
  };

  // Settings
  const updateSettings = (newSettings: Partial<SiteSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
    showToast('Sozlamalar saqlandi', 'success');
  };

  return (
    <DataContext.Provider
      value={{
        projects,
        architects,
        services,
        leads,
        reviews,
        blogPosts,
        banners,
        settings,
        addProject,
        updateProject,
        deleteProject,
        getProjectById,
        getProjectBySlug,
        addArchitect,
        updateArchitect,
        deleteArchitect,
        getArchitectById,
        addService,
        updateService,
        deleteService,
        getServiceBySlug,
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
        updateBanner,
        addBanner,
        deleteBanner,
        updateSettings,
        isLeadModalOpen,
        selectedProjectForModal,
        selectedServiceForModal,
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
