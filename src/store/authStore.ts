import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  token: string | null;
  name: string | null;
  email: string | null;
  role: string | null;
  isAuthenticated: boolean;
  login: (token: string, name: string, email: string, role: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      name: null,
      email: null,
      role: null,
      isAuthenticated: false,
      login: (token, name, email, role) =>
        set({ token, name, email, role, isAuthenticated: true }),
      logout: () =>
        set({ token: null, name: null, email: null, role: null, isAuthenticated: false }),
    }),
    {
      name: 'campusedge-auth',
    }
  )
);