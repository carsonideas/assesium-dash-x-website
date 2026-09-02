// @ts-nocheck
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type AppTheme = 'light' | 'dark' | 'dashboard-dark';

interface ThemeState {
  theme: AppTheme;
  isDarkMode: boolean;
  setTheme: (theme: AppTheme) => void;
  cycleTheme: () => void;
}

function applyThemeToDocument(theme: AppTheme) {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  root.classList.toggle('dark', theme !== 'light');
  root.classList.toggle('light', theme === 'light');
  root.classList.toggle('dashboard-dark', theme === 'dashboard-dark');
  root.dataset.theme = theme;
  root.style.colorScheme = theme === 'light' ? 'light' : 'dark';
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: 'light',
      isDarkMode: false,
      setTheme: (theme) => {
        set({ theme, isDarkMode: theme !== 'light' });
        applyThemeToDocument(theme);
      },
      cycleTheme: () => {
        const current = get().theme;
        const next: AppTheme = current === 'light' ? 'dark' : current === 'dark' ? 'dashboard-dark' : 'light';
        set({ theme: next, isDarkMode: next !== 'light' });
        applyThemeToDocument(next);
      },
    }),
    {
      name: 'theme-storage',
      partialize: (state) => ({ theme: state.theme, isDarkMode: state.isDarkMode }),
      onRehydrateStorage: () => (state) => {
        if (!state) return;
        if (!state.theme || !['light', 'dark', 'dashboard-dark'].includes(state.theme)) state.theme = 'light';
        state.isDarkMode = state.theme !== 'light';
        applyThemeToDocument(state.theme);
      },
    },
  ),
);

export { applyThemeToDocument };
