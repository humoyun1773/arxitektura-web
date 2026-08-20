import React, { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { DataProvider } from './context/DataContext';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { LeadModal } from './components/common/LeadModal';
import { ChatWidget } from './components/common/ChatWidget';
import { Toast } from './components/common/Toast';

// Public Pages
import { HomePage } from './pages/HomePage';
import { CoursesPage } from './pages/CoursesPage';
import { CourseDetailPage } from './pages/CourseDetailPage';
import { TeachersPage } from './pages/TeachersPage';
import { AboutPage } from './pages/AboutPage';
import { BlogPage } from './pages/BlogPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { ContactPage } from './pages/ContactPage';

// Admin Pages
import { AdminLayout } from './pages/admin/AdminLayout';
import { AdminLogin } from './pages/admin/AdminLogin';

const MainApp: React.FC = () => {
  const { isAuthenticated } = useAuth();

  // State-based router with URL hash sync
  const [currentPage, setCurrentPage] = useState<string>(() => {
    const hash = window.location.hash.replace('#', '');
    return hash || 'home';
  });

  const [currentParam, setCurrentParam] = useState<string>('');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('course/')) {
        setCurrentPage('course-detail');
        setCurrentParam(hash.replace('course/', ''));
      } else if (hash.startsWith('blog/')) {
        setCurrentPage('blog-detail');
        setCurrentParam(hash.replace('blog/', ''));
      } else if (hash) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (page: string, param?: string) => {
    if (page === 'course-detail' && param) {
      window.location.hash = `course/${param}`;
    } else if (page === 'blog-detail' && param) {
      window.location.hash = `blog/${param}`;
    } else {
      window.location.hash = page === 'home' ? '' : page;
    }
    setCurrentPage(page);
    setCurrentParam(param || '');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If on Admin page
  if (currentPage === 'admin') {
    if (!isAuthenticated) {
      return (
        <>
          <AdminLogin onBackToSite={() => navigate('home')} />
          <Toast />
        </>
      );
    }
    return (
      <>
        <AdminLayout onBackToSite={() => navigate('home')} />
        <Toast />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-indigo-500 selection:text-white">
      <Header currentPage={currentPage} onNavigate={navigate} />

      <main className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={navigate} />}
        {currentPage === 'courses' && <CoursesPage onNavigate={navigate} />}
        {currentPage === 'course-detail' && (
          <CourseDetailPage slug={currentParam} onNavigate={navigate} />
        )}
        {currentPage === 'teachers' && <TeachersPage onNavigate={navigate} />}
        {currentPage === 'about' && <AboutPage onNavigate={navigate} />}
        {currentPage === 'blog' && <BlogPage onNavigate={navigate} />}
        {currentPage === 'blog-detail' && (
          <BlogDetailPage slug={currentParam} onNavigate={navigate} />
        )}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      <Footer onNavigate={navigate} />

      {/* Global Modals & Utilities */}
      <LeadModal />
      <ChatWidget />
      <Toast />
    </div>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <MainApp />
      </DataProvider>
    </AuthProvider>
  );
}
