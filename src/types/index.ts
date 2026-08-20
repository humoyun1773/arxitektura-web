export type ProjectCategory = 
  | 'Kottejlar & Villalar' 
  | 'Ko\'p Qavatli Binolar' 
  | 'Interyer Dizayn' 
  | 'Tijoriy Obyektlar' 
  | 'Landshaft & Fasad';

export type ProjectStyle = 'Modern / Zamonaviy' | 'Neoklassika' | 'Minimalizm' | 'Hi-Tech' | 'Klassik';

export interface FloorPlan {
  floorNumber: number;
  title: string;
  area: number;
  image: string;
  rooms: string[];
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: ProjectCategory;
  style: ProjectStyle;
  areaM2: number;
  floorsCount: number;
  location: string;
  year: number;
  coverImage: string;
  gallery: string[];
  floorPlans?: FloorPlan[];
  isFeatured: boolean;
  isActive: boolean;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  clientName?: string;
  leadArchitectId: string;
  durationMonths: number;
}

export interface Architect {
  id: string;
  name: string;
  role: string;
  bio: string;
  experienceYears: number;
  avatar: string;
  specializations: string[];
  projectIds: string[];
  telegram?: string;
  instagram?: string;
  linkedin?: string;
  rating: number;
  projectsCompleted: number;
  awards: string[];
}

export interface ServicePackage {
  id: string;
  name: string;
  pricePerM2: number;
  description: string;
  deliverables: string[];
  isPopular?: boolean;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  category: ProjectCategory;
  icon: string;
  shortDesc: string;
  fullDesc: string;
  startingPricePerM2: number;
  estimatedDuration: string;
  packages: ServicePackage[];
  deliverables: string[];
  image: string;
}

export type LeadStatus = 'new' | 'contacted' | 'contract_signed' | 'cancelled';

export interface Lead {
  id: string;
  fullName: string;
  phone: string;
  projectId?: string;
  projectTitle?: string;
  serviceType?: string;
  estimatedAreaM2?: number;
  source: string;
  status: LeadStatus;
  notes?: string;
  createdAt: string;
}

export interface Review {
  id: string;
  name?: string;
  clientRole?: string;
  avatar: string;
  projectTitle: string;
  rating: number;
  comment: string;
  date: string;
  location?: string;
  isApproved: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  authorAvatar: string;
  authorRole: string;
  category: string;
  readTime: string;
  createdAt: string;
  tags: string[];
  views: number;
  isPublished: boolean;
}

export interface HeroBanner {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  linkText: string;
  linkPage: string;
  badgeText: string;
  order: number;
  isActive: boolean;
}

export interface SiteSettings {
  siteName: string;
  slogan: string;
  phoneMain: string;
  phoneSecondary: string;
  email: string;
  address: string;
  city: string;
  workingHours: string;
  telegramLink: string;
  instagramLink: string;
  youtubeLink: string;
  mapEmbedUrl: string;
  metaTitle: string;
  metaDescription: string;
  completedProjectsCount: number;
  designedAreaM2: number;
  experienceYears: number;
  satisfiedClientsPercent: number;
  telegramBotToken?: string;
  telegramChatId?: string;
}

export type UserRole = 'superadmin' | 'admin' | 'moderator';

export interface AdminUser {
  id: string;
  username: string;
  name: string;
  role: UserRole;
  avatar: string;
}

