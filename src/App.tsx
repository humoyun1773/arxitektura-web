import React, { useState, useEffect } from "react";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { DataProvider } from "./context/DataContext";
import { LanguageProvider } from "./context/LanguageContext";
import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";
import { LeadModal } from "./components/common/LeadModal";
import { Toast } from "./components/common/Toast";

// Public Pages
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ArchitectsPage } from "./pages/ArchitectsPage";
import { CalculatorPage } from "./pages/CalculatorPage";
import { AboutPage } from "./pages/AboutPage";
import { BlogPage } from "./pages/BlogPage";
import { BlogDetailPage } from "./pages/BlogDetailPage";
import { ContactPage } from "./pages/ContactPage";

// Admin Pages
import { AdminLayout } from "./pages/admin/AdminLayout";
import { AdminLogin } from "./pages/admin/AdminLogin";

const MainApp: React.FC = () => {
  const { isAuthenticated } = useAuth();

  const [currentPage, setCurrentPage] = useState<string>(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash.startsWith("project/")) return "project-detail";
    if (hash.startsWith("blog/")) return "blog-detail";
    return hash || "home";
  });

  const [currentParam, setCurrentParam] = useState<string>(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash.startsWith("project/")) return hash.replace("project/", "");
    if (hash.startsWith("blog/")) return hash.replace("blog/", "");
    return "";
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash.startsWith("project/")) {
        setCurrentPage("project-detail");
        setCurrentParam(hash.replace("project/", ""));
      } else if (hash.startsWith("blog/")) {
        setCurrentPage("blog-detail");
        setCurrentParam(hash.replace("blog/", ""));
      } else if (hash) {
        setCurrentPage(hash);
        setCurrentParam("");
      } else {
        setCurrentPage("home");
        setCurrentParam("");
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigate = (page: string, param?: string) => {
    if (page === "project-detail" && param) {
      window.location.hash = `project/${param}`;
    } else if (page === "blog-detail" && param) {
      window.location.hash = `blog/${param}`;
    } else {
      window.location.hash = page === "home" ? "" : page;
    }
    setCurrentPage(page);
    setCurrentParam(param || "");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (currentPage === "admin") {
    if (!isAuthenticated) {
      return (
        <>
          <AdminLogin onBackToSite={() => navigate("home")} />
          <Toast />
        </>
      );
    }
    return (
      <>
        <AdminLayout onBackToSite={() => navigate("home")} />
        <Toast />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col justify-between selection:bg-slate-900 selection:text-white">
      <Header currentPage={currentPage} onNavigate={navigate} />

      <main className="flex-1">
        {currentPage === "home" && <HomePage onNavigate={navigate} />}
        {currentPage === "projects" && <ProjectsPage onNavigate={navigate} />}
        {currentPage === "project-detail" && <ProjectDetailPage slug={currentParam} onNavigate={navigate} />}
        {currentPage === "services" && <ServicesPage onNavigate={navigate} />}
        {currentPage === "architects" && <ArchitectsPage onNavigate={navigate} />}
        {currentPage === "calculator" && <CalculatorPage onNavigate={navigate} />}
        {currentPage === "about" && <AboutPage onNavigate={navigate} />}
        {currentPage === "blog" && <BlogPage onNavigate={navigate} />}
        {currentPage === "blog-detail" && <BlogDetailPage slug={currentParam} onNavigate={navigate} />}
        {currentPage === "contact" && <ContactPage />}
      </main>

      <Footer onNavigate={navigate} />

      <LeadModal />
      <Toast />
    </div>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <LanguageProvider>
          <MainApp />
        </LanguageProvider>
      </DataProvider>
    </AuthProvider>
  );
}
