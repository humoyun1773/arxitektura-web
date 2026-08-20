import React, { createContext, useContext, useState, useEffect } from 'react';
import { AdminUser, UserRole } from '../types';

interface AuthContextType {
  user: AdminUser | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<{ success: boolean; message?: string }>;
  logout: () => void;
  hasRole: (roles: UserRole[]) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const PRESET_USERS: (AdminUser & { password: string })[] = [
  {
    id: 'u1',
    username: 'admin',
    password: 'admin123',
    name: 'Javohir Botirov (Boshqaruvchi)',
    role: 'superadmin',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'u2',
    username: 'manager',
    password: '12345',
    name: 'Aziza Qosimova (Menejer)',
    role: 'admin',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'u3',
    username: 'moderator',
    password: '12345',
    name: 'Sirojiddin Aliyev (Kontent Menejer)',
    role: 'moderator',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  }
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AdminUser | null>(() => {
    const saved = localStorage.getItem('arx_admin_user');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return null;
      }
    }
    return null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('arx_admin_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('arx_admin_user');
    }
  }, [user]);

  const login = async (username: string, password: string): Promise<{ success: boolean; message?: string }> => {
    // Simulate network delay
    await new Promise((r) => setTimeout(r, 400));
    
    const matched = PRESET_USERS.find(
      (u) => u.username.toLowerCase() === username.trim().toLowerCase() && u.password === password
    );

    if (matched) {
      const { password: _, ...userData } = matched;
      setUser(userData);
      return { success: true };
    }

    return { success: false, message: "Noto'g'ri login yoki parol kiritildi!" };
  };

  const logout = () => {
    setUser(null);
  };

  const hasRole = (roles: UserRole[]): boolean => {
    if (!user) return false;
    return roles.includes(user.role);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout, hasRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
