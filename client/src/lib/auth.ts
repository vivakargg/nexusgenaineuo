import { createContext, useContext } from 'react';

export interface User {
  id: number;
  username: string;
  email: string;
  role: 'admin' | 'editor' | 'author';
  createdAt: Date;
}

export interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  coverImage?: string;
  authorId: number;
  author: User;
  publishedAt: Date;
  createdAt: Date;
  updatedAt: Date;
  status: 'draft' | 'published';
  tags: string[];
}

export interface ServicePage {
  id: number;
  title: string;
  slug: string;
  content: string;
  features: string[];
  benefits: string[];
  coverImage?: string;
  icon?: string;
  updatedAt: Date;
  publishedAt: Date;
} 