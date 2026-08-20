export type CourseLevel = "Boshlang'ich" | "O'rta" | "Mukammal" | "Barcha darajalar";

export interface SyllabusItem {
  id: string;
  module: number;
  title: string;
  duration: string;
  topics: string[];
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  category: 'Arxitektura & 3D' | 'IT & Dasturlash' | 'Grafik Dizayn' | 'Xorijiy Tillar' | 'Raqamli Marketing';
  level: CourseLevel;
  durationMonths: number;
  lessonsPerWeek: number;
  hoursPerLesson: number;
  price: number;
  discountPrice?: number;
  rating: number;
  reviewsCount: number;
  studentsCount: number;
  image: string;
  videoUrl?: string;
  isPopular: boolean;
  isActive: boolean;
  shortDescription: string;
  fullDescription: string;
  syllabus: SyllabusItem[];
  schedule: string;
  requirements: string[];
  features: string[];
  instructorId: string;
}

export interface Teacher {
  id: string;
  name: string;
  role: string;
  bio: string;
  experienceYears: number;
  avatar: string;
  specializations: string[];
  courseIds: string[];
  telegram?: string;
  instagram?: string;
  linkedin?: string;
  rating: number;
  studentsTaught: number;
  certificates: string[];
}

export type LeadStatus = 'new' | 'contacted' | 'registered' | 'cancelled';

export interface Lead {
  id: string;
  fullName: string;
  phone: string;
  courseId?: string;
  courseTitle?: string;
  source: string;
  status: LeadStatus;
  notes?: string;
  createdAt: string;
}

export interface Review {
  id: string;
  name: string;
  avatar: string;
  courseTitle: string;
  rating: number;
  comment: string;
  date: string;
  company?: string;
  workPosition?: string;
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
  category: string;
  readTime: string;
  createdAt: string;
  tags: string[];
  views: number;
  isPublished: boolean;
}

export interface Student {
  id: string;
  fullName: string;
  phone: string;
  courseId: string;
  courseTitle: string;
  groupName: string;
  paymentStatus: 'paid' | 'partial' | 'unpaid';
  paidAmount: number;
  totalAmount: number;
  progress: number;
  joinedAt: string;
}

export interface HeroBanner {
  id: string;
  badge: string;
  title: string;
  highlightText: string;
  subtitle: string;
  ctaText: string;
  statsText: string;
  image: string;
  isActive: boolean;
}

export interface SiteSettings {
  siteName: string;
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
